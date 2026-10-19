#!/usr/bin/env python3
"""Extract the real component API of an installed @platformscode/core version (read-only).

Reads <core>/dist/types/components.d.ts (Stencil output) and writes the props, defaults, types and
events of every custom element, so adapters and generated code use only props that actually exist.

  python3 tools/extract_package_api.py <path to node_modules/@platformscode/core> <out.json>
Never modifies node_modules. Stdlib only.
"""
import sys; sys.dont_write_bytecode = True
import json, os, re


def kebab(name):
    return re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()


def blocks(src, namespace):
    """Yield (interfaceName, body) for 'interface X {' blocks inside 'namespace <ns> {'."""
    match = re.search(r"\bnamespace\s+" + namespace + r"\s*\{", src)
    if not match:
        return
    i, depth = match.end(), 1
    start = i
    while i < len(src) and depth:
        if src[i] == "{": depth += 1
        elif src[i] == "}": depth -= 1
        i += 1
    body = src[start:i - 1]
    for interface_match in re.finditer(r"\binterface\s+([A-Za-z0-9_]+)\s*\{", body):
        j, inner_depth = interface_match.end(), 1
        while j < len(body) and inner_depth:
            if body[j] == "{": inner_depth += 1
            elif body[j] == "}": inner_depth -= 1
            j += 1
        yield interface_match.group(1), body[interface_match.end():j - 1]


def members(body):
    out, i, length = [], 0, len(body)
    doc_default = None
    while i < length:
        if body.startswith("/**", i):
            j = body.find("*/", i)
            doc_comment = body[i:j]
            default_match = re.search(r"@default\s+(.+)", doc_comment)
            doc_default = default_match.group(1).strip() if default_match else None
            i = j + 2; continue
        match = re.match(r"\s*\"?([A-Za-z_$][\w$-]*)\"?(\?)?\s*:", body[i:])
        if match and body[i:i + match.end()].strip():
            name, optional = match.group(1), bool(match.group(2))
            cursor = i + match.end(); depth = 0; type_start = cursor
            while cursor < length:
                char = body[cursor]
                if char in "({[<": depth += 1
                elif char in ")}]>": depth -= 1
                elif char == ";" and depth <= 0: break
                cursor += 1
            typ = re.sub(r"\s+", " ", body[type_start:cursor]).strip()
            out.append({"name": name, "optional": optional, "type": typ, "default": doc_default})
            doc_default = None
            i = cursor + 1; continue
        i += 1
    return out


def main():
    core, out = sys.argv[1], sys.argv[2]
    package_json = json.load(open(os.path.join(core, "package.json"), encoding="utf-8"))
    dts = os.path.join(core, "dist", "types", "components.d.ts")
    src = open(dts, encoding="utf-8").read()
    comps = {}
    for name, body in blocks(src, "Components"):
        if not name.startswith("Dga"):
            continue
        comps[name] = {"tag": kebab(name), "props": {member["name"]: {field: member[field] for field in ("type", "default", "optional")} for member in members(body)}, "events": {}}
    for name, body in blocks(src, "LocalJSX"):
        if name not in comps:
            continue
        for member in members(body):
            if member["name"].startswith("on") and member["name"][2:3].isupper() and member["name"] not in comps[name]["props"]:
                comps[name]["events"][member["name"]] = member["type"]
    tags = sorted(set(re.findall(r'"(dga-[a-z0-9-]+)":\s*HTMLDga', src)))
    api = {
        "package": package_json["name"], "version": package_json["version"], "license": package_json.get("license"),
        "dependencies": package_json.get("dependencies", {}),
        "extractedFrom": "dist/types/components.d.ts", "componentCount": len(comps), "tags": tags,
        "notes": ["React wrapper props = these props + events with React names (e.g. onOnClick) via @stencil/react-output-target",
                  "Text is passed through props such as label; components without <slot> ignore children"],
        "components": comps,
    }
    json.dump(api, open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"{package_json['name']}@{package_json['version']}: {len(comps)} components, {len(tags)} tags -> {out}")


if __name__ == "__main__":
    main()
