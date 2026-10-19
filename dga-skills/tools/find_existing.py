#!/usr/bin/env python3
"""Reuse-first scan: find what a project ALREADY has before any DGA component, wrapper or helper is generated.

  python3 tools/find_existing.py --project <root> [--json]

Reports (read-only, no network):
  - installed DGA packages + versions (node_modules lookups only)
  - imports of DGA packages and which components are used where
  - existing wrappers/components named Dga* / *Dga* defined in the project (not in node_modules)
  - existing icon registration (addIcons / setAssetPath / createIconRegistry / DgaProvider / provideDgaSkills)
  - a DGA Skills Toolkit library copy (dga-skills-lib.json; legacy ahmed-lib.json) and its version
  - direction / reduced-motion helpers already present
Decision rule printed at the end: REUSE what exists; only generate what is missing.
"""
import sys; sys.dont_write_bytecode = True
import argparse, glob, json, os, re

PKGS = ("platformscode-new-react", "platformscode-new-angular", "@platformscode/core", "@platformscode/icons", "@platformscode/react",
        "@hugeicons/core-free-icons", "@hugeicons/react")
SRC_EXT = ("js", "jsx", "ts", "tsx", "html", "vue", "svelte")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project", default=".")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    root = os.path.abspath(args.project)
    report = {"project": root, "installed": {}, "nestedCore": None, "imports": {}, "componentsUsed": {}, "wrappers": [],
           "iconRegistration": [], "ahmedLib": [], "helpers": [], "settings": None}
    for package in PKGS:
        package_json = os.path.join(root, "node_modules", *package.split("/"), "package.json")
        if os.path.isfile(package_json):
            report["installed"][package] = json.load(open(package_json)).get("version")
    nested = os.path.join(root, "node_modules/platformscode-new-react/node_modules/@platformscode/core/package.json")
    if os.path.isfile(nested):
        report["nestedCore"] = json.load(open(nested)).get("version")
    settings_path = os.path.join(root, ".claude", "dga-skills.json")
    if not os.path.isfile(settings_path): settings_path = os.path.join(root, ".claude", "ahmed-skills.json")   # legacy, migrated by project_settings.py
    if os.path.isfile(settings_path):
        try:
            settings_data = json.load(open(settings_path)); report["settings"] = {"designMode": settings_data.get("designMode"), "technology": settings_data.get("technology")}
        except Exception:
            report["settings"] = "invalid"
    files = []
    for ext in SRC_EXT:
        files += glob.glob(os.path.join(root, "**", f"*.{ext}"), recursive=True)
    files = [source_file for source_file in files if "node_modules" not in source_file.split(os.sep) and "/dist/" not in source_file.replace(os.sep, "/") and "/.angular/" not in source_file.replace(os.sep, "/")]
    for man in glob.glob(os.path.join(root, "**", "dga-skills-lib.json"), recursive=True) + glob.glob(os.path.join(root, "**", "ahmed-lib.json"), recursive=True):
        if "node_modules" in man: continue
        manifest_data = json.load(open(man)); report["ahmedLib"].append({"path": os.path.relpath(os.path.dirname(man), root), "version": manifest_data.get("version"), "framework": manifest_data.get("framework")})
    for source_file in files:
        relative_path = os.path.relpath(source_file, root)
        txt = open(source_file, encoding="utf-8", errors="ignore").read()
        for package in PKGS:
            if re.search(r"""from\s+['"]%s(/[^'"]*)?['"]""" % re.escape(package), txt):
                report["imports"].setdefault(package, []).append(relative_path)
        for comp in set(re.findall(r"<(Dga[A-Z]\w*)\b", txt)) | set(re.findall(r"<(dga-[a-z0-9-]+)\b", txt)):
            report["componentsUsed"].setdefault(comp, []).append(relative_path)
        for match in re.finditer(r"(?:export\s+)?(?:default\s+)?(?:function|const|class)\s+([A-Z]\w*Dga\w*|Dga\w+)\b", txt):
            report["wrappers"].append({"name": match.group(1), "file": relative_path})
        for match in re.finditer(r"@Component\(\{[^}]*selector:\s*['\"]([\w-]*dga[\w-]*)['\"]", txt, re.S):
            report["wrappers"].append({"name": match.group(1), "file": relative_path, "kind": "angular-component"})
        for key in ("addIcons(", "setAssetPath(", "createIconRegistry(", "setupDga(", "setupDgaWeb(", "<DgaProvider", "provideDgaSkills(", "useDgaWidget("):
            if key in txt:
                report["iconRegistration"].append({"call": key.strip("(<"), "file": relative_path})
        for key in ("useDirection", "useReducedMotion", "prefers-reduced-motion", "observeDirection", "DirectionService", "ReducedMotionService"):
            if key in txt:
                report["helpers"].append({"helper": key, "file": relative_path})
    # files inside an Ahmed lib copy are library, not project wrappers
    library_dirs = [library["path"] for library in report["ahmedLib"]]
    in_library = lambda file_path: any(file_path.startswith(library_dir + os.sep) or file_path.startswith(library_dir + "/") for library_dir in library_dirs)
    report["wrappers"] = [wrapper for wrapper in report["wrappers"] if not in_library(wrapper["file"])]
    report["iconRegistration"] = [registration for registration in report["iconRegistration"] if not in_library(registration["file"])]
    report["helpers"] = [helper for helper in report["helpers"] if not in_library(helper["file"])]
    report["componentsUsed"] = {component: [used_file for used_file in used_files if not in_library(used_file)] for component, used_files in report["componentsUsed"].items()}
    report["componentsUsed"] = {component: used_files for component, used_files in report["componentsUsed"].items() if used_files}
    report["decision"] = decide(report)
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2)); return 0
    print(f"Reuse-first scan: {root}")
    print("  installed:", report["installed"] or "none", ("| nested core in platformscode-new-react: " + report["nestedCore"]) if report["nestedCore"] else "")
    print("  settings:", report["settings"])
    print("  toolkit lib copies:", report["ahmedLib"] or "none")
    print("  DGA components used:", {component: len(used_files) for component, used_files in sorted(report["componentsUsed"].items())} or "none")
    print("  project wrappers:", [f"{wrapper['name']} ({wrapper['file']})" for wrapper in report["wrappers"]] or "none")
    print("  icon registration:", [f"{registration['call']} ({registration['file']})" for registration in report["iconRegistration"]] or "none")
    print("  direction/motion helpers:", sorted({helper['helper'] for helper in report["helpers"]}) or "none")
    print("DECISION:")
    for decision_line in report["decision"]:
        print("  -", decision_line)
    return 0


def decide(result):
    out = []
    if result["installed"].get("platformscode-new-react") or result["installed"].get("@platformscode/core"):
        out.append("Use the installed DGA components directly (real package preferred over CSS recreation, D4); do not wrap them unless a documented gap requires it.")
    else:
        out.append("No DGA component package installed: ask before installing; otherwise build from references/dga-live specs and label it a CSS recreation.")
    if result["iconRegistration"]:
        out.append("Icon registration already exists — extend it (add names) instead of adding a second registration path.")
    else:
        out.append("No icon registration found — add ONE central registration (lib core createIconRegistry / adapter provider).")
    if result["ahmedLib"]:
        out.append("Ahmed lib already copied — update it with tools/copy_lib.py (keeps local edits) instead of duplicating helpers.")
    if result["wrappers"]:
        out.append("Project already defines Dga* wrappers — reuse them; read them before writing any new component.")
    if result["nestedCore"] and result["installed"].get("@platformscode/core") and result["nestedCore"] != result["installed"]["@platformscode/core"]:
        out.append(f"Two @platformscode/core versions ({result['nestedCore']} nested, {result['installed']['@platformscode/core']} top-level): validate props against the version the wrappers use ({result['nestedCore']}).")
    return out


if __name__ == "__main__":
    sys.exit(main())
