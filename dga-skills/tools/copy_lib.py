#!/usr/bin/env python3
"""Copy the Ahmed Skills reusable library into a project (copy-in delivery model).

  python3 tools/copy_lib.py --framework react|angular|vanilla|exb --dest <project>/src/dga-skills [--force]

Copies lib/core + lib/<framework> to <dest>/core and <dest>/<framework>, and records
<dest>/dga-skills-lib.json (skill version + SHA-256 per file; a legacy ahmed-lib.json is renamed). On re-run, files the project has edited
since the last copy are NOT overwritten (reported as "kept-local-edit") unless --force.
Never touches node_modules. Stdlib only.
"""
import sys; sys.dont_write_bytecode = True
import argparse, hashlib, json, os, shutil

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def _pkg_api(version):
    """registry API file in either naming: platformscode-core@<v>.json (full release) / platformscode-core-v<v>.json (Cowork edition)"""
    for file_name in (f"platformscode-core@{version}.json", f"platformscode-core-v{version}.json"):
        api_path = os.path.join(SKILL, "registry", "packages", file_name)
        if os.path.isfile(api_path):
            return api_path
    return None


def sha(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--framework", required=True, choices=["react", "angular", "vanilla", "exb"])
    parser.add_argument("--dest", required=True)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--with-patterns", action="store_true", help="also copy lib/patterns + lib/templates (+ lib/motion recipes: gsap/three are injected by the project, never bundled) for the framework")
    arguments = parser.parse_args()
    dest = os.path.abspath(arguments.dest)
    if "node_modules" in dest.split(os.sep):
        print("refusing to write inside node_modules"); return 2
    man_p = os.path.join(dest, "dga-skills-lib.json")
    legacy_man = os.path.join(dest, "ahmed-lib.json")          # copies made by the legacy ahmed-skills
    if not os.path.isfile(man_p) and os.path.isfile(legacy_man):
        os.replace(legacy_man, man_p)                              # same content model; renamed once, never duplicated
    old = json.load(open(man_p)) if os.path.isfile(man_p) else {"files": {}}
    version = open(os.path.join(SKILL, "VERSION")).read().strip()
    files, report = {}, {"copied": [], "unchanged": [], "kept-local-edit": []}
    # site: site-level config + default logo; patterns/shared + patterns/vanilla: the shared chrome builders that the Angular
    # SiteShellComponent and the ExB site shell render (rules/code-quality.md, patterns/site-config.md)
    chrome = ("patterns/patterns.css", "patterns/shared", "patterns/vanilla")
    parts = {"react": ("core", "site", "react"), "vanilla": ("core", "site", "vanilla"), "angular": ("core", "site", "vanilla", "angular") + chrome, "exb": ("core", "site", "vanilla", "exb") + chrome}[arguments.framework]
    if arguments.with_patterns:
        extra = (("patterns/patterns.css", "patterns/shared", "patterns/react", "templates/content.js", "templates/react", "motion") if arguments.framework == "react"
                 else ("patterns/patterns.css", "patterns/shared", "patterns/vanilla", "templates/content.js", "templates/vanilla", "motion/index.js"))
        parts = parts + tuple(part for part in extra if part not in parts)
    for part in parts:
        src_root = os.path.join(SKILL, "lib", part)
        walk = [(os.path.dirname(src_root), [], [os.path.basename(src_root)])] if os.path.isfile(src_root) else os.walk(src_root)
        for directory, dirs, file_names in walk:
            dirs[:] = [directory_name for directory_name in dirs if directory_name != "widget-template"]   # templates are copied by the user, not as library code
            for file_name in sorted(file_names):
                source = os.path.join(directory, file_name)
                relative_path = os.path.relpath(source, os.path.join(SKILL, "lib")).replace(os.sep, "/")
                target = os.path.join(dest, relative_path)
                new_sha = sha(source)
                if os.path.isfile(target):
                    cur = sha(target)
                    if cur == new_sha:
                        report["unchanged"].append(relative_path); files[relative_path] = new_sha; continue
                    if old["files"].get(relative_path) not in (None, cur) and not arguments.force:
                        report["kept-local-edit"].append(relative_path); files[relative_path] = old["files"][relative_path]; continue
                os.makedirs(os.path.dirname(target), exist_ok=True)
                shutil.copy2(source, target)
                files[relative_path] = new_sha
                report["copied"].append(relative_path)
    # version-aware API: copy the registry API of the @platformscode/core version the project really uses
    api_copied = []
    # walk up from dest (ExB: widget folder -> client/) and use the first level that has the package installed
    root = dest
    while True:
        if any(os.path.isfile(os.path.join(root, candidate, "package.json")) for candidate in ("node_modules/@platformscode/core", "node_modules/platformscode-new-react/node_modules/@platformscode/core")):
            break
        if root == os.path.dirname(root):
            break
        root = os.path.dirname(root)
    for cand in ("node_modules/platformscode-new-react/node_modules/@platformscode/core", "node_modules/@platformscode/core"):
        package_json = os.path.join(root, cand, "package.json")
        if os.path.isfile(package_json):
            core_version = json.load(open(package_json))["version"]
            src = (_pkg_api(core_version) or os.path.join(SKILL, "registry", "packages", f"platformscode-core@{core_version}.json"))
            if os.path.isfile(src):
                os.makedirs(os.path.join(dest, "api"), exist_ok=True)
                shutil.copy2(src, os.path.join(dest, "api", os.path.basename(src)))
                api_copied.append({"used_by": cand, "version": core_version})
                css = os.path.join(root, cand, "dist", "core", "core.css")
                if arguments.framework == "exb" and os.path.isfile(css):
                    import re
                    txt = open(css, encoding="utf-8").read()
                    vars_ = {}
                    for match in re.finditer(r"([^{}]*)\{([^{}]*)\}", txt):   # innermost blocks (incl. inside @media/@layer)
                        if not any(re.fullmatch(r"\s*(:root|:host|html)\s*", selector) for selector in match.group(1).lstrip("; \n").split(",")):
                            continue
                        for decl in match.group(2).split(";"):
                            key, _, value = decl.partition(":")
                            if key.strip().startswith("--") and value.strip():
                                vars_[key.strip()] = value.strip()
                    json.dump(vars_, open(os.path.join(dest, "api", f"core-css-vars@{core_version}.json"), "w"), indent=0)
                    print(f"  exb: {len(vars_)} CSS variables extracted from core.css (scoped tokens, no global CSS)")
            else:
                print(f"  WARNING: no registry API for @platformscode/core@{core_version}; run tools/extract_package_api.py {cand} registry/packages/platformscode-core@{core_version}.json")
    json.dump({"skill": "dga-skills", "version": version, "framework": arguments.framework, "api": api_copied, "files": files}, open(man_p, "w"), indent=1)
    print("  api:", api_copied)
    print(json.dumps({key: len(entries) for key, entries in report.items()}), "->", dest)
    for relative_path in report["kept-local-edit"]:
        print("  kept local edit:", relative_path)
    return 0


if __name__ == "__main__":
    sys.exit(main())
