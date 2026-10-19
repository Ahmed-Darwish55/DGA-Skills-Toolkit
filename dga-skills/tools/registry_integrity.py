#!/usr/bin/env python3
"""DGA Skills Toolkit — registry integrity check (offline, read-only, standard library).

Verifies that the local DGA knowledge base is complete and self-consistent: component sets, variants, spec/data files,
template map, token files, Figma source links, raw-vs-normalised state names, icon map and package registry.
Exit 0 = OK, 1 = problems found. `--json` prints the full report.

  python3 tools/registry_integrity.py [--json]
"""
import sys; sys.dont_write_bytecode = True
import argparse, glob, json, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import dga_res  # full-release files or the packed Cowork edition — same bytes

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
EXPECTED = {"componentSets": 210, "variants": 10499, "templates": 20}


def main():
    parser = argparse.ArgumentParser(); parser.add_argument("--json", action="store_true"); arguments = parser.parse_args()
    rep = {"skillDir": SKILL, "problems": [], "counts": {}}
    problems = rep["problems"]
    reg = json.load(open(os.path.join(SKILL, "registry/components.json"), encoding="utf-8"))
    comps = reg["components"]
    rep["counts"]["componentSets"] = len(comps)
    rep["counts"]["variants"] = sum(component.get("variants", 0) for component in comps)
    rep["counts"]["variantsExported"] = sum(component.get("variantsExported", 0) for component in comps)
    rep["counts"]["web"] = sum(1 for component in comps if component.get("platform") == "web")
    rep["counts"]["mobile"] = sum(1 for component in comps if component.get("platform") == "mobile")
    for key, expected in EXPECTED.items():
        if key in rep["counts"] and rep["counts"][key] != expected:
            problems.append(f"{key}: expected {expected}, found {rep['counts'][key]}")
    # every set points at an existing spec + data file and carries a Figma source link
    missing_spec = [component["name"] for component in comps if not dga_res.exists(component.get("spec", ""))]
    missing_data = [component["name"] for component in comps if not dga_res.exists(component.get("data", ""))]
    no_link = [component["name"] for component in comps if not component.get("figmaNode")]   # provenance = Figma node id (file URLs live in references/dga-live/INDEX.md)
    if no_link: problems.append(f"{len(no_link)} sets without figmaNode provenance: {no_link[:5]}")
    if missing_spec: problems.append(f"{len(missing_spec)} sets without spec file: {missing_spec[:5]}")
    if missing_data: problems.append(f"{len(missing_data)} sets without data file: {missing_data[:5]}")
    rep["counts"]["setsWithoutSourceLink"] = len(no_link)
    # raw variant strings keep Figma's original spelling; the normalisation map only serves consumer views
    norm = reg.get("state_spelling_normalisation", {})
    rep["stateSpellingNormalisation"] = norm
    raw_hits = {}
    for component in comps[:400]:
        if not dga_res.exists(component.get("data", "")): continue
        try: txt = dga_res.read_text(component["data"])
        except Exception: continue
        for raw in norm:
            if raw in txt: raw_hits[raw] = raw_hits.get(raw, 0) + 1
    rep["rawSpellingStillPresentInData"] = raw_hits
    if norm and not raw_hits:
        problems.append("normalisation map exists but no raw spelling was found in data files — originals may have been rewritten (they must be kept)")
    # templates
    tmpl_md = dga_res.glob_rel("references/dga-live/templates/*.md")
    rep["counts"]["templates"] = len(tmpl_md)
    tm_path = os.path.join(SKILL, "lib/templates/templates-map.json")
    if os.path.isfile(tm_path):
        templates_map = json.load(open(tm_path, encoding="utf-8"))
        rep["counts"]["templatesMapped"] = len(templates_map.get("templates", []))
        names = {os.path.basename(path)[:-3] for path in tmpl_md}
        slugs = {template.get("slug") for template in templates_map.get("templates", [])}
        unmapped = sorted(names - slugs)
        if unmapped: problems.append(f"templates without a map entry: {unmapped}")
    else:
        problems.append("lib/templates/templates-map.json missing")
    if rep["counts"]["templates"] != EXPECTED["templates"]:
        problems.append(f"templates: expected {EXPECTED['templates']}, found {rep['counts']['templates']}")
    # tokens
    for relative_path in ("references/dga-live/foundations/dga-tokens.css", "references/dga-live/foundations/dga-tokens.json"):
        if not os.path.isfile(os.path.join(SKILL, relative_path)): problems.append("missing " + relative_path)
    css = os.path.join(SKILL, "references/dga-live/foundations/dga-tokens.css")
    rep["counts"]["tokenDeclarations"] = open(css, encoding="utf-8").read().count("--dga-") if os.path.isfile(css) else 0
    # web / mobile reference pages
    rep["counts"]["webSpecs"] = len(dga_res.glob_rel("references/dga-live/web/*.md"))
    rep["counts"]["mobileSpecs"] = len(dga_res.glob_rel("references/dga-live/mobile/*.md"))
    rep["layout"] = dga_res.layout()
    # icons + packages
    icon_map = json.load(open(os.path.join(SKILL, "registry/icons/icon-map.json"), encoding="utf-8"))
    rep["counts"]["iconMap"] = len(icon_map["icons"])
    rep["counts"]["iconShapeVerified"] = sum(1 for icon in icon_map["icons"] if not str(icon.get("verification", {}).get("shape", "")).startswith("NOT VERIFIED"))
    packages = json.load(open(os.path.join(SKILL, "registry/packages.json"), encoding="utf-8"))
    rep["counts"]["packageDefects"] = len(packages.get("defects", []))
    rep["counts"]["packageApis"] = len(glob.glob(os.path.join(SKILL, "registry/packages/*.json")))
    if rep["counts"]["iconMap"] != 79: problems.append(f"icon map: expected 79 entries, found {rep['counts']['iconMap']}")
    rep["ok"] = not problems
    if arguments.json:
        print(json.dumps(rep, ensure_ascii=False, indent=2))
    else:
        counts = rep["counts"]
        print(f"registry integrity: {'OK' if rep['ok'] else 'PROBLEMS'} — {counts['componentSets']} sets ({counts['web']} web / {counts['mobile']} mobile), {counts['variants']} variants, "
              f"{counts['templates']} templates ({counts.get('templatesMapped')} mapped), {counts['tokenDeclarations']} token declarations, {counts['webSpecs']}+{counts['mobileSpecs']} reference pages, "
              f"icons {counts['iconMap']} ({counts['iconShapeVerified']} shape-verified), {counts['packageDefects']} package defects, {counts['packageApis']} package APIs; "
              f"raw Figma spellings kept: {rep['rawSpellingStillPresentInData']}")
        for problem in problems: print("  PROBLEM:", problem)
    return 0 if rep["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
