#!/usr/bin/env python3
"""DGA Skills Toolkit — per-project settings helper (.claude/dga-skills.json).

Legacy: `.claude/ahmed-skills.json` is read and migrated to the new file on first `get`/`set`
(`migratedFrom` recorded, legacy file left in place as its own backup). If BOTH files exist with different choices the
migration STOPS with status "conflict" (exit 4) and nothing is merged or discarded.

Standard library only; makes no network calls.

  get    --project DIR                     print saved settings or {"status":"missing"}
  set    --project DIR --mode M --tech T [--tech-other NAME]
  detect --project DIR                     detect framework, versions and DGA packages
  reset  --project DIR                     remove settings (next UI task asks again)
  validate --project DIR                   exit 0 if valid, 2 if invalid, 3 if missing
"""
import sys; sys.dont_write_bytecode = True  # keep installed tree identical to CHECKSUMS
import argparse, datetime, json, os, sys

SCHEMA = "dga-skills/project-settings@2"
LEGACY_SCHEMAS = ("ahmed-skills/project-settings@1",)
FILE = "dga-skills.json"
LEGACY_FILE = "ahmed-skills.json"
MODES = ("dga-exact", "dga-enhanced", "dga-creative")
TECHS = ("react", "angular", "arcgis-exb", "other", "auto-detect")
HERE = os.path.dirname(os.path.abspath(__file__))


def skill_version():
    for version_file in (os.path.join(HERE, "..", "VERSION"), os.path.join(HERE, "..", "..", "VERSION")):
        if os.path.isfile(version_file):
            return open(version_file, encoding="utf-8").read().strip()
    return "unknown"


def now():
    return datetime.datetime.now(datetime.timezone.utc).replace(microsecond=0).isoformat()


def settings_path(project):
    return os.path.join(os.path.abspath(project), ".claude", FILE)


def legacy_path(project):
    return os.path.join(os.path.abspath(project), ".claude", LEGACY_FILE)


def _core(settings):
    """The user's choices only — what a conflict check compares."""
    return {key: settings.get(key) for key in ("designMode", "technology", "technologyOther")} if isinstance(settings, dict) else None


def upgrade_legacy(settings):
    """Backwards-readable migration only: schema@1 → @2 (same fields; records provenance). Never writes to the legacy file."""
    if isinstance(settings, dict) and settings.get("schema") in LEGACY_SCHEMAS:
        settings = dict(settings); settings["migratedFrom"] = {"schema": settings["schema"], "file": LEGACY_FILE, "at": now()}; settings["schema"] = SCHEMA
    return settings


def load(project, migrate=True):
    """Returns (settings, error). error may be 'conflict: ...' when old and new files disagree."""
    settings_file, legacy_file = settings_path(project), legacy_path(project)
    new = old = None
    if os.path.isfile(settings_file):
        try:
            new = json.load(open(settings_file, encoding="utf-8"))
        except Exception as error:  # broken JSON
            return None, f"invalid JSON: {error}"
    if os.path.isfile(legacy_file):
        try:
            old = json.load(open(legacy_file, encoding="utf-8"))
        except Exception as error:
            old = {"_broken": str(error)}
    if new is not None and old is not None:
        if "_broken" in old:
            return new, None                      # unreadable legacy file: the new file wins, legacy untouched
        if _core(new) != _core(old):
            return None, f"conflict: {FILE} and {LEGACY_FILE} both exist with different choices ({_core(new)} vs {_core(old)}); migration stopped — resolve manually (delete or align one file)"
        return new, None
    if new is not None:
        return new, None
    if old is not None and "_broken" not in old:
        settings = upgrade_legacy(old)
        if migrate:
            write(project, settings)                     # new file created from the legacy one; legacy file kept as-is (its own backup)
        return settings, None
    return None, None


def validate(settings):
    errs = []
    if not isinstance(settings, dict):
        return ["not an object"]
    if settings.get("schema") != SCHEMA:
        errs.append(f"schema must be {SCHEMA}")
    if settings.get("designMode") not in MODES:
        errs.append(f"designMode must be one of {MODES}")
    if settings.get("technology") not in TECHS:
        errs.append(f"technology must be one of {TECHS}")
    if settings.get("technology") == "other" and not settings.get("technologyOther"):
        errs.append("technologyOther required when technology = other")
    if not settings.get("updatedAt"):
        errs.append("updatedAt missing")
    return errs


def write(project, settings):
    settings_file = settings_path(project)
    os.makedirs(os.path.dirname(settings_file), exist_ok=True)
    temporary_file = settings_file + ".tmp"
    with open(temporary_file, "w", encoding="utf-8") as handle:
        json.dump(settings, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
    os.replace(temporary_file, settings_file)
    return settings_file


def read_json(path):
    try:
        return json.load(open(path, encoding="utf-8"))
    except Exception:
        return None


def detect(project):
    root = os.path.abspath(project)
    evidence, stack, versions, dga = [], [], {}, {}
    pkg_paths = []
    for relative_path in ("package.json", "client/package.json"):
        if os.path.isfile(os.path.join(root, relative_path)):
            pkg_paths.append(relative_path)
    deps = {}
    for relative_path in pkg_paths:
        package_json = read_json(os.path.join(root, relative_path)) or {}
        for section in ("dependencies", "devDependencies", "peerDependencies"):
            deps.update(package_json.get(section) or {})
        evidence.append(relative_path)
    def has(name):
        return name in deps
    if has("jimu-core") or os.path.isdir(os.path.join(root, "client", "your-extensions")) \
            or os.path.isdir(os.path.join(root, "your-extensions")):
        stack.append("arcgis-exb")
        for dependency_name in ("jimu-core", "react"):
            if has(dependency_name): versions[dependency_name] = deps[dependency_name]
        for relative_path in ("client/your-extensions", "your-extensions"):
            if os.path.isdir(os.path.join(root, relative_path)): evidence.append(relative_path)
    if has("@angular/core") or os.path.isfile(os.path.join(root, "angular.json")):
        stack.append("angular")
        if has("@angular/core"): versions["@angular/core"] = deps["@angular/core"]
        if os.path.isfile(os.path.join(root, "angular.json")): evidence.append("angular.json")
    if has("react") and "arcgis-exb" not in stack:
        stack.append("react")
        versions["react"] = deps["react"]
        for dependency_name in ("react-dom", "next", "vite", "typescript"):
            if has(dependency_name): versions[dependency_name] = deps[dependency_name]
    for dependency_name in ("@arcgis/core", "gsap", "three", "@hugeicons/core-free-icons"):
        if has(dependency_name): versions[dependency_name] = deps[dependency_name]
    for name, ver in deps.items():
        if name.startswith("@platformscode/") or name.startswith("platformscode-"):
            dga[name] = ver
    # installed versions (read-only look into node_modules)
    installed = {}
    for name in list(dga) + list(versions):
        package_json = read_json(os.path.join(root, "node_modules", *name.split("/"), "package.json"))
        if package_json and package_json.get("version"): installed[name] = package_json["version"]
    if not stack:
        if any(file_name.endswith(".html") for file_name in os.listdir(root)) if os.path.isdir(root) else False:
            stack.append("other:static-html")
    return {
        "detectedAt": now(),
        "stack": stack or ["unknown"],
        "primary": (stack[0] if stack else "unknown"),
        "declaredVersions": versions,
        "dgaPackages": dga,
        "installedVersions": installed,
        "evidence": evidence,
        "notes": ["dga package official publisher status: NOT VERIFIED (see rules/policies.md D5)"] if dga else [],
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="cmd", required=True)
    for command in ("get", "detect", "reset", "validate"):
        subparser = sub.add_parser(command); subparser.add_argument("--project", default=".")
    subparser = sub.add_parser("set")
    subparser.add_argument("--project", default=".")
    subparser.add_argument("--mode", choices=MODES)
    subparser.add_argument("--tech", choices=TECHS)
    subparser.add_argument("--tech-other")
    arguments = parser.parse_args(argv)

    if arguments.cmd == "get":
        settings, err = load(arguments.project)
        if err and err.startswith("conflict"):
            print(json.dumps({"status": "conflict", "error": err, "path": settings_path(arguments.project), "legacyPath": legacy_path(arguments.project)}, ensure_ascii=False)); return 4
        if err:
            print(json.dumps({"status": "invalid", "error": err, "path": settings_path(arguments.project)}, ensure_ascii=False)); return 2
        if settings is None:
            print(json.dumps({"status": "missing", "path": settings_path(arguments.project)})); return 3
        errs = validate(settings)
        print(json.dumps({"status": "invalid" if errs else "ok", "errors": errs, "path": settings_path(arguments.project), "settings": settings}, ensure_ascii=False, indent=2))
        return 2 if errs else 0

    if arguments.cmd == "validate":
        settings, err = load(arguments.project)
        if err and err.startswith("conflict"): print(err); return 4
        if settings is None and not err: print("missing"); return 3
        errs = [err] if err else validate(settings)
        print("valid" if not errs else "invalid: " + "; ".join(errs)); return 0 if not errs else 2

    if arguments.cmd == "detect":
        print(json.dumps(detect(arguments.project), ensure_ascii=False, indent=2)); return 0

    if arguments.cmd == "reset":
        settings_file = settings_path(arguments.project); legacy_file = legacy_path(arguments.project); removed = []
        for candidate in (settings_file, legacy_file):
            if os.path.isfile(candidate):
                os.remove(candidate); removed.append(candidate)
        print(json.dumps({"status": "reset" if removed else "missing", "removed": removed, "path": settings_file}))
        return 0

    if arguments.cmd == "set":
        settings, err = load(arguments.project)
        if err and err.startswith("conflict"):
            print(json.dumps({"status": "conflict", "error": err}, ensure_ascii=False)); return 4
        if err or settings is None:
            settings = {"schema": SCHEMA, "createdAt": now(), "history": []}
        if not arguments.mode and not arguments.tech:
            parser.error("set needs --mode and/or --tech")
        if arguments.mode: settings["designMode"] = arguments.mode
        if arguments.tech:
            settings["technology"] = arguments.tech
            settings["technologyOther"] = arguments.tech_other if arguments.tech == "other" else None
            settings["detected"] = detect(arguments.project) if arguments.tech == "auto-detect" else settings.get("detected")
        settings["schema"] = SCHEMA
        settings["decidedBy"] = "user"
        settings["skillVersion"] = skill_version()
        settings["updatedAt"] = now()
        settings.setdefault("history", []).append({"at": settings["updatedAt"], "designMode": settings.get("designMode"), "technology": settings.get("technology")})
        errs = validate(settings)
        if errs:
            print(json.dumps({"status": "rejected", "errors": errs}, ensure_ascii=False)); return 2
        settings_file = write(arguments.project, settings)
        print(json.dumps({"status": "saved", "path": settings_file, "settings": settings}, ensure_ascii=False, indent=2)); return 0


if __name__ == "__main__":
    sys.exit(main())
