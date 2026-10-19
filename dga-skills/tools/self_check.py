#!/usr/bin/env python3
"""Ahmed Skills self-check — offline, read-only.

Reports: skill version and integrity (CHECKSUMS.sha256), local knowledge base
completeness, Python, optional upstream skills (UI/UX Pro Max, Frontend Design)
as DETECTED / NOT INSTALLED — never as "invoked" — and the project settings.
It never installs anything and never opens a network connection.

  python3 tools/self_check.py [--project DIR] [--claude-dir DIR] [--json]
Exit code: 0 = required parts OK (optional deps may be missing), 1 = required part broken.
"""
import sys; sys.dont_write_bytecode = True  # keep installed tree identical to CHECKSUMS
import argparse, hashlib, json, os, platform, subprocess, sys

SKILL_DIR = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
REQUIRED = [
    "SKILL.md", "VERSION", "rules/policies.md",
    "rules/onboarding.md", "rules/design-modes.md", "rules/dga-guard.md", "rules/component-contract.md",
    "rules/orchestration.md", "rules/project-detection.md", "rules/visual-qa.md",
    "registry/components.json", "registry/project-settings.schema.json",
    "references/dga-live/INDEX.md", "references/dga-live/MOTION.md",
    "references/dga-live/foundations/dga-tokens.css", "references/dga-live/foundations/dga-tokens.json",
    "tools/project_settings.py",
    "rules/package-integration.md", "registry/packages.json", "registry/icons/icon-map.json",
    "lib/core/index.js", "lib/core/index.d.ts",
    "tools/copy_lib.py", "tools/check_dga_props.py", "tools/find_existing.py", "tools/extract_package_api.py",
    "patterns/README.md", "lib/patterns/patterns.css", "lib/patterns/react/index.js", "lib/patterns/vanilla/index.js",
    "lib/templates/templates-map.json", "lib/templates/react/index.js", "lib/templates/vanilla/index.js",
    "tools/qa/run.mjs", "tools/qa/lib/browser-checks.mjs", "tools/qa/lib/figma-expected.mjs", "tools/qa/lib/report.mjs",
    "tools/qa/icon-fidelity.mjs", "tools/qa/README.md", "tools/registry_integrity.py", "SECURITY-NOTES.md", "PROJECT-IDENTITY.md", "tools/deps.py", "registry/dependencies.json", "tools/validate_skill_package.py", "tools/dga_res.py", "tools/qa/lib/dga-res.mjs",
]


def sha256(path):
    digest = hashlib.sha256()
    with open(path, "rb") as handle:
        for chunk in iter(lambda: handle.read(1 << 20), b""):
            digest.update(chunk)
    return digest.hexdigest()


def claude_dir(arg):
    if arg:
        return os.path.abspath(os.path.expanduser(arg))
    if os.environ.get("CLAUDE_CONFIG_DIR"):
        return os.path.abspath(os.environ["CLAUDE_CONFIG_DIR"])
    parent = os.path.dirname(SKILL_DIR)
    if os.path.basename(parent) == "skills":
        return os.path.dirname(parent)
    return os.path.join(os.path.expanduser("~"), ".claude")


def integrity():
    man = os.path.join(SKILL_DIR, "CHECKSUMS.sha256")
    if not os.path.isfile(man):
        return {"status": "NO-MANIFEST", "checked": 0, "bad": []}
    bad, checked = [], 0
    for line in open(man, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line:
            continue
        digest, relative_path = line.split("  ", 1)
        checked += 1
        file_path = os.path.join(SKILL_DIR, relative_path)
        if not os.path.isfile(file_path):
            bad.append({"file": relative_path, "problem": "missing"})
        elif sha256(file_path) != digest:
            bad.append({"file": relative_path, "problem": "modified"})
    return {"status": "OK" if not bad else "FAILED", "checked": checked, "bad": bad[:50]}


def knowledge():
    out = {}
    try:
        reg = json.load(open(os.path.join(SKILL_DIR, "registry/components.json"), encoding="utf-8"))["components"]
        out["componentSets"] = len(reg)
        out["web"] = sum(1 for component in reg if component.get("platform") == "web")
        out["mobile"] = sum(1 for component in reg if component.get("platform") == "mobile")
        out["variants"] = sum(component.get("variants", 0) for component in reg)
        out["exportMismatches"] = sum(1 for component in reg if component.get("variants") != component.get("variantsExported"))
        missing_specs = [component["spec"] for component in reg if not _resources().exists(component["spec"])]
        missing_data = [component["data"] for component in reg if not _resources().exists(component["data"])]
        out["missingSpecFiles"] = sorted(set(missing_specs))
        out["missingDataFiles"] = sorted(set(missing_data))
    except Exception as error:
        out["error"] = str(error)
    live = os.path.join(SKILL_DIR, "references/dga-live")
    out["webSpecs"] = len(_resources().glob_rel("references/dga-live/web/*.md"))
    out["mobileSpecs"] = len(_resources().glob_rel("references/dga-live/mobile/*.md"))
    out["templates"] = len(_resources().glob_rel("references/dga-live/templates/*.md"))
    out["layout"] = _resources().layout()
    out["packageApi0052"] = bool(_resources().pkg_api("0.0.52"))
    css = os.path.join(live, "foundations/dga-tokens.css")
    out["tokenDeclarations"] = open(css, encoding="utf-8").read().count("--dga-") if os.path.isfile(css) else 0
    out["requiresFigmaOrStorybook"] = False
    out["ok"] = (out.get("componentSets") == 210 and not out.get("missingSpecFiles") and not out.get("missingDataFiles")
                 and out["templates"] == 20 and out["tokenDeclarations"] > 1000 and out["packageApi0052"])
    return out


def _resources():
    """full-release files or the packed Claude Desktop / Cowork edition (tools/dga_res.py) — same bytes, SHA-256 verified"""
    if "dga_res" not in sys.modules:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import dga_res  # noqa
    return dga_res


def _deps():
    import importlib.util
    spec = importlib.util.spec_from_file_location("dga_deps", os.path.join(os.path.dirname(os.path.abspath(__file__)), "deps.py"))
    deps_module = importlib.util.module_from_spec(spec); spec.loader.exec_module(deps_module); return deps_module


def _detect(dep_id, cdir, project):
    """Single source of truth: tools/deps.py (plugins, user/project skills, host-provided skills in claude.ai/Cowork)."""
    deps_module = _deps(); dep = next(dependency for dependency in deps_module.registry()["dependencies"] if dependency["id"] == dep_id)
    detection = deps_module.detect(dep, cdir, project)
    state = detection["state"] + ("" if detection["available"] else "")
    return {"name": dep_id, "status": state + (" (not invoked by this check)" if detection["available"] else ""), "flag": detection["flag"] if not detection["available"] else None,
            "locations": detection["locations"], "fallback": dep["fallback"] if not detection["available"] else None, "untrustedSource": detection["untrustedSource"],
            "setup": ("Claude Code: python3 install.py deps ensure (automatic, verified sources)" if not detection["state"].startswith("INSTALLED") else "turned off by the user — left as is")
                     + "; Claude Desktop / Cowork: nothing to do (built-in fallback)" if not detection["available"] else None}


def detect_uiux(cdir, project):
    result = _detect("ui-ux-pro-max", cdir, project)
    if result["flag"] is None and "NOT RUNNABLE" in result["status"]:
        result["flag"] = "UPSTREAM_UIUX_NOT_RUNNABLE"
    return result


def detect_frontend(cdir, project):
    result = _detect("frontend-design", cdir, project)
    result["note"] = "Skills provided by the host app are detected only inside a claude.ai / Cowork sandbox; the session's skill list is the final authority."
    return result


def project_settings(project):
    if not project:
        return None
    sys.path.insert(0, os.path.join(SKILL_DIR, "tools"))
    import project_settings as settings_module  # noqa
    settings, err = settings_module.load(project, migrate=False)          # a check never writes
    if err and err.startswith("conflict"):
        return {"status": "conflict", "error": err, "path": settings_module.settings_path(project), "legacyPath": settings_module.legacy_path(project)}
    if err:
        return {"status": "invalid", "error": err}
    if settings is None:
        return {"status": "missing", "path": settings_module.settings_path(project)}
    errs = settings_module.validate(settings)
    return {"status": "invalid" if errs else "ok", "errors": errs, "designMode": settings.get("designMode"),
            "technology": settings.get("technology"), "path": settings_module.settings_path(project)}


def legacy_skill(cdir):
    """A leftover `skills/ahmed-skills` next to `skills/dga-skills` would make two skills compete for the same prompts."""
    legacy_dir = os.path.join(cdir, "skills", "ahmed-skills")   # legacy folder name (migrated/retired by install.py)
    if not os.path.isdir(legacy_dir):
        return {"present": False}
    version_file = os.path.join(legacy_dir, "VERSION")
    return {"present": True, "path": legacy_dir, "version": open(version_file, encoding="utf-8").read().strip() if os.path.isfile(version_file) else "pre-5.0",
            "flag": "LEGACY_SKILL_PRESENT", "action": "run `python3 install.py install` (it backs the legacy skill up and retires it) or remove it manually"}


def tool_versions():
    """Optional runtime dependencies for the QA tools and adapters: NOT INSTALLED / DETECTED / VERIFIED RUNNABLE. Never installs."""
    out = {}
    def probe(name, cmd):
        try:
            completed = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
            out[name] = {"status": "VERIFIED RUNNABLE" if completed.returncode == 0 else "DETECTED BUT NOT RUNNABLE", "version": (completed.stdout or completed.stderr).strip().splitlines()[0][:60] if (completed.stdout or completed.stderr).strip() else None}
        except FileNotFoundError:
            out[name] = {"status": "NOT INSTALLED"}
        except Exception as error:
            out[name] = {"status": "DETECTED BUT NOT RUNNABLE", "error": str(error)[:80]}
    probe("python", [sys.executable, "--version"])
    probe("node", ["node", "--version"])
    probe("npm", ["npm", "--version"])
    out["note"] = "Playwright, axe-core and the DGA packages are PROJECT dependencies (resolved from the project's node_modules by tools/qa); this check does not install anything. INVOKED status exists only for upstream skills and is recorded per session, never by this check."
    return out


def run(project=None, cdir_arg=None):
    cdir = claude_dir(cdir_arg)
    missing = [relative_path for relative_path in REQUIRED if not os.path.isfile(os.path.join(SKILL_DIR, relative_path))]
    version = open(os.path.join(SKILL_DIR, "VERSION"), encoding="utf-8").read().strip() if os.path.isfile(os.path.join(SKILL_DIR, "VERSION")) else None
    knowledge_base = knowledge()
    integ = integrity()
    py_ok = sys.version_info >= (3, 8)
    report = {
        "skillDir": SKILL_DIR, "claudeDir": cdir, "version": version,
        "python": {"version": platform.python_version(), "ok": py_ok},
        "requiredFilesMissing": missing,
        "integrity": integ,
        "knowledgeBase": knowledge_base,
        "network": "not used by this check; knowledge base is local",
        "optional": [detect_uiux(cdir, project), detect_frontend(cdir, project)],
        "runtimes": tool_versions(),
        "legacySkill": legacy_skill(cdir),
        "projectSettings": project_settings(project),
        "installsPerformed": [],
    }
    report["requiredOk"] = bool(py_ok and not missing and knowledge_base.get("ok") and integ["status"] in ("OK", "NO-MANIFEST"))
    report["flags"] = [optional["flag"] for optional in report["optional"] if optional["flag"]] + ([report["legacySkill"]["flag"]] if report["legacySkill"].get("flag") else [])
    return report


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project")
    parser.add_argument("--claude-dir")
    parser.add_argument("--json", action="store_true")
    arguments = parser.parse_args()
    project = os.path.abspath(arguments.project) if arguments.project else None
    report = run(project, arguments.claude_dir)
    if arguments.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        print(f"DGA Skills Toolkit (dga-skills) {report['version']} at {report['skillDir']}")
        print(f"  required parts: {'OK' if report['requiredOk'] else 'BROKEN'}; integrity: {report['integrity']['status']} ({report['integrity']['checked']} files)")
        knowledge_base = report["knowledgeBase"]
        print(f"  knowledge base (local, no Figma/Storybook needed): {knowledge_base.get('componentSets')} sets, {knowledge_base.get('variants')} variants, "
              f"{knowledge_base['templates']} templates, {knowledge_base['tokenDeclarations']} token declarations")
        for optional in report["optional"]:
            print(f"  optional {optional['name']}: {optional['status']}" + (f"  -> flag {optional['flag']}, fallback {optional['fallback']}" if optional["flag"] else ""))
        runtimes = report["runtimes"]; print("  runtimes: " + ", ".join(f"{name} {runtime.get('status')}{' ' + runtime['version'] if runtime.get('version') else ''}" for name, runtime in runtimes.items() if name != "note"))
        if report["legacySkill"].get("present"):
            print(f"  WARNING legacy skills/ahmed-skills still present ({report['legacySkill']['version']}) -> flag LEGACY_SKILL_PRESENT: {report['legacySkill']['action']}")
        if report["projectSettings"]:
            print(f"  project settings: {report['projectSettings']}")
        if report["requiredFilesMissing"]:
            print("  MISSING:", ", ".join(report["requiredFilesMissing"]))
    return 0 if report["requiredOk"] else 1


if __name__ == "__main__":
    sys.exit(main())
