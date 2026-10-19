#!/usr/bin/env python3
"""Static guard against invented DGA props (React JSX, Angular templates, plain HTML).

  python3 tools/check_dga_props.py --project <root> [--api registry/packages/platformscode-core@<v>.json] [paths…]

- Picks the API JSON matching the @platformscode/core version installed in the project (read-only lookup in
  node_modules), or the one passed with --api.
- React:   <DgaButton prop=…>        (component names from platformscode-new-react)
- Angular: <dga-button [prop]="…" (event)="…" prop="…">
- HTML:    <dga-button attr-name="…"> (kebab attributes -> camelCase props)
Exit 1 when an unknown prop is found. Stdlib only, no network.
"""
import sys; sys.dont_write_bytecode = True
import argparse, glob, json, os, re

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def _pkg_api(version):
    """registry API file in either naming: platformscode-core@<v>.json (full release) / platformscode-core-v<v>.json (Cowork edition)"""
    for file_name in (f"platformscode-core@{version}.json", f"platformscode-core-v{version}.json"):
        api_path = os.path.join(SKILL, "registry", "packages", file_name)
        if os.path.isfile(api_path):
            return api_path
    return None
GENERIC = {"key", "ref", "className", "class", "style", "id", "slot", "hidden", "title", "dir", "lang", "tabIndex", "role", "children", "ngClass", "ngStyle"}
TAG_JSX = re.compile(r"<(Dga[A-Z][A-Za-z0-9]*)\b((?:[^<>{}]|\{(?:[^{}]|\{[^{}]*\})*\})*?)/?>", re.S)
TAG_HTML = re.compile(r"<(dga-[a-z0-9-]+)\b([^<>]*?)/?>", re.S)
TOOLKIT_ELEMENTS = {"dga-skills-icon-button"}   # the toolkit's own Angular element (lib/angular) — house code, not a package component
ATTR_JSX = re.compile(r"(?:^|\s)([A-Za-z_][\w-]*)(?=\s*=|\s|/?$)")
ATTR_HTML = re.compile(r"(?:^|\s)(\[\(?|\(|\*|#)?([A-Za-z_@][\w.:-]*)\)?\]?(?=\s*=|\s|$)")


def camel(text):
    return re.sub(r"-([a-z0-9])", lambda match: match.group(1).upper(), text)


def find_api(root, explicit):
    if explicit:
        return json.load(open(explicit))
    for cand in ("node_modules/platformscode-new-react/node_modules/@platformscode/core", "node_modules/@platformscode/core"):
        package_json = os.path.join(root, cand, "package.json")
        if os.path.isfile(package_json):
            version = json.load(open(package_json))["version"]
            api_path = (_pkg_api(version) or os.path.join(SKILL, "registry", "packages", f"platformscode-core@{version}.json"))
            if os.path.isfile(api_path):
                return json.load(open(api_path))
            sys.exit(f"no registry API for @platformscode/core@{version}: run tools/extract_package_api.py {cand} {api_path}")
    sys.exit("@platformscode/core not installed in the project and no --api given")


def strip_braces(text):
    out, depth = [], 0
    for char in text:
        if char == "{": depth += 1; continue
        if char == "}": depth -= 1; continue
        if depth == 0: out.append(char)
    return "".join(out)


def in_lib_copy(file_path, root):
    """True when the file sits under a copy made by tools/copy_lib.py (marker `dga-skills-lib.json`, legacy `ahmed-lib.json`), whatever the folder is called."""
    directory = os.path.dirname(os.path.abspath(file_path))
    while len(directory) >= len(root):
        if os.path.isfile(os.path.join(directory, "dga-skills-lib.json")) or os.path.isfile(os.path.join(directory, "ahmed-lib.json")):
            return True
        parent = os.path.dirname(directory)
        if parent == directory: break
        directory = parent
    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project", default=".")
    parser.add_argument("--api")
    parser.add_argument("paths", nargs="*")
    arguments = parser.parse_args()
    root = os.path.abspath(arguments.project)
    api = find_api(root, arguments.api)
    comps = api["components"]
    by_tag = {component["tag"]: component_name for component_name, component in comps.items()}
    files = arguments.paths or [path for ext in ("jsx", "tsx", "js", "ts", "html", "vue", "svelte")
                        for path in glob.glob(os.path.join(root, "src", "**", f"*.{ext}"), recursive=True)]
    problems, checked = [], 0
    for file_path in files:
        if "node_modules" in file_path or "/dga-skills/" in file_path.replace(os.sep, "/") or in_lib_copy(file_path, root):
            continue
        txt = open(file_path, encoding="utf-8", errors="ignore").read()
        for match in TAG_JSX.finditer(txt):
            name = match.group(1)
            if name not in comps:
                continue  # not a platformscode component (e.g. our DgaIconButton / DgaProvider)
            checked += 1
            # registry `events` already hold the React wrapper prop names (Stencil `linkClicked` → `onLinkClicked`, `onClick` → `onOnClick`)
            allowed = set(comps[name]["props"]) | set(comps[name]["events"])
            attributes = re.sub(r"/\*.*?\*/", " ", match.group(2), flags=re.S)        # JSX comments inside the tag are not props
            for at in ATTR_JSX.findall(re.sub(r'"[^"]*"|\'[^\']*\'', '""', strip_braces(attributes))):
                if at in allowed or at in GENERIC or at.startswith(("data-", "aria-")):
                    continue
                problems.append((file_path, txt[:match.start()].count("\n") + 1, name, at))
        for match in TAG_HTML.finditer(txt):
            tag = match.group(1)
            if tag in TOOLKIT_ELEMENTS or tag.startswith("dga-skills-"):
                continue
            name = by_tag.get(tag)
            if not name:
                problems.append((file_path, txt[:match.start()].count("\n") + 1, tag, "(element does not exist in this core version)")); continue
            checked += 1
            allowed = set(comps[name]["props"]) | {event[2].lower() + event[3:] for event in comps[name]["events"]}  # onOnClick -> onClick
            attributes = re.sub(r'"[^"]*"|\'[^\']*\'', '""', match.group(2))      # drop quoted values (bindings, literals)
            for kind, at in ATTR_HTML.findall(attributes):
                if kind in ("*", "#") or at.startswith(("attr.", "class.", "style.", "data-", "aria-", "ng")):
                    continue
                prop = at if kind in ("[", "[(", "(") else camel(at)
                if prop in allowed or prop in GENERIC:
                    continue
                problems.append((file_path, txt[:match.start()].count("\n") + 1, tag, at))
    print(f"@platformscode/core@{api['version']}: {checked} DGA element usages checked in {len(files)} files")
    for file_path, line, comp, at in problems:
        print(f"  UNKNOWN PROP  {os.path.relpath(file_path, root)}:{line}  <{comp}> {at}")
    print("OK — no invented props" if not problems else f"{len(problems)} unknown prop(s): do not invent props; see registry/packages.json")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
