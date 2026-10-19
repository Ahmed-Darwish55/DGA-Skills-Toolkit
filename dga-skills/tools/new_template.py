#!/usr/bin/env python3
"""DGA Skills Toolkit — generate a working React page skeleton for any of the 20 DGA templates (lib/templates/templates-map.json).

  python3 tools/new_template.py --template about-entity --dest src/pages [--framework react] [--name AboutEntity] [--list]

The generated file imports ONLY the shipped patterns (lib/patterns/react) and real DGA components, compiles as-is, renders
every section of the Figma template with labelled placeholder content, and marks the spots a project must fill with
`TODO(content)`. It is a reproducible route for the 15 templates that have no hand-built page yet — not a claim that
those pages are pixel-verified (the QA engine measures each real page; see tools/qa/README.md).
"""
import sys; sys.dont_write_bytecode = True
import argparse, json, os, re

SKILL = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
MAP = os.path.join(SKILL, "lib", "templates", "templates-map.json")

# section keyword → JSX block (Arabic / English placeholders; names follow rules/code-quality.md). Order of matching matters (first hit wins).
RULES = [
    (r"stamp|nav header|^nav$|second nav|footer", None),                                   # chrome: provided by PageShell
    (r"hero", "hero"), (r"error 404|^error", "error"), (r"breadcrumb|service header|search header|^title|article", "heading"),
    (r"form|composer|follow-up", "form"), (r"filter", "filters"), (r"faq|accordion", "accordion"), (r"pagination", "pagination"),
    (r"statistic|stats", "stats"), (r"cards?|services|topics|journey|participation|related|channels|vision|guides|partners|leadership|link columns", "cards"),
    (r"steps|progress", "steps"), (r"rating|feedback|question|yes/no|comment|submit", "feedback"), (r"banner|cookie", "banner"),
    (r"modal|preferences", "modal"), (r"chat window|message list|quick replies", "chat"), (r"map|branches", "mapnote"),
    (r"table of contents|content|about text|body|main", "prose"),
]

BLOCKS = {
    "hero": "      <Hero title={isArabic ? '{T}' : '{TE}'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />",
    "error": "      <section className=\"ah-section\"><div className=\"ah-container ah-stack\" style={{ textAlign: 'center' }}><DgaFeaturedIcon icon={{ name: 'search-remove', variant: 'stroke' }} size=\"lg\" /><h1 className=\"ah-display-md\">{isArabic ? '{T}' : '{TE}'}</h1><p className=\"ah-text-lg ah-muted\">TODO(content)</p></div></section>",
    "heading": "      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? '{T}' : '{TE}' }]} title={isArabic ? '{T}' : '{TE}'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />",
    "form": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\" style={{ maxWidth: 960 }}><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><FormPattern dir={dir} fields={[{ name: 'field1', label: isArabic ? 'حقل 1 — TODO(content)' : 'Field 1 — TODO(content)', required: true }, { name: 'notes', type: 'textarea', label: isArabic ? 'ملاحظات' : 'Notes', span: 2 }]} onSubmit={() => {}} /></div></section>",
    "filters": "      <section className=\"ah-section\" aria-label={isArabic ? '{T}' : '{TE}'}><div className=\"ah-container\"><SearchFilters dir={dir} search={{ label: isArabic ? 'بحث' : 'Search', placeholder: isArabic ? 'اكتب كلمة — TODO(content)' : 'Type a keyword — TODO(content)' }} filters={[{ name: 'f1', label: isArabic ? 'الفئة' : 'Category', placeholder: isArabic ? 'الكل' : 'All', options: [{ name: 'A', value: 'a' }] }]} /></div></section>",
    "accordion": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\"><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><div role=\"list\">{[1, 2, 3].map((itemNumber) => <div role=\"listitem\" key={itemNumber}><DgaAccordion title={isArabic ? `سؤال ${itemNumber} — TODO(content)` : `Question ${itemNumber} — TODO(content)`} content={isArabic ? 'إجابة توضيحية.' : 'Placeholder answer.'} size=\"lg\" /></div>)}</div></div></section>",
    "pagination": "      <div className=\"ah-container\" style={{ paddingBlock: 'var(--spacing-4)' }}><DgaPagination totalPageCount={4} currentPage={1} /></div>",
    "stats": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\"><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><StatsStrip items={[{ value: '—', label: isArabic ? 'مؤشر 1 (قيمة توضيحية)' : 'Metric 1 (placeholder)', icon: 'home-05' }, { value: '—', label: isArabic ? 'مؤشر 2 (قيمة توضيحية)' : 'Metric 2 (placeholder)', icon: 'user' }]} /></div></section>",
    "cards": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container\"><SectionHeading id=\"{ID}-h\" title={isArabic ? '{T}' : '{TE}'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? '{T}' : '{TE}'} /></div></section>",
    "steps": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\"><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><FormSteps steps={[isArabic ? 'خطوة 1' : 'Step 1', isArabic ? 'خطوة 2' : 'Step 2', isArabic ? 'خطوة 3' : 'Step 3']} active={1} /></div></section>",
    "feedback": "      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />",
    "banner": "      <section className=\"ah-section--neutral\" aria-label={isArabic ? '{T}' : '{TE}'}><div className=\"ah-container ah-row\" style={{ paddingBlock: 'var(--spacing-4)', justifyContent: 'space-between', flexWrap: 'wrap' }}><p className=\"ah-text-md\" style={{ margin: 0 }}>{isArabic ? 'نستخدم ملفات تعريف الارتباط — TODO(content)' : 'We use cookies — TODO(content)'}</p><div className=\"ah-row\"><DgaButtonV2 variant=\"primary\" size=\"md\" label={isArabic ? 'قبول' : 'Accept'} /><DgaButtonV2 variant=\"secondary-outline\" size=\"md\" label={isArabic ? 'إدارة التفضيلات' : 'Manage'} /></div></div></section>",
    "modal": "      {/* {T}: DgaModal from the package (verify props in registry/packages/platformscode-core@<installed>.json before use) — TODO(content) */}",
    "chat": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\" style={{ maxWidth: 720 }}><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><div className=\"ah-form-panel ah-stack\" role=\"log\" aria-live=\"polite\"><p className=\"ah-text-md\">{isArabic ? 'رسالة توضيحية — TODO(content)' : 'Placeholder message — TODO(content)'}</p></div></div></section>",
    "mapnote": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack\"><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><p className=\"ah-text-md ah-muted\">{isArabic ? 'خريطة الفروع: استخدم @arcgis/core أو ExB حسب المشروع (rules/project-detection.md) — TODO(content)' : 'Branches map: use @arcgis/core or ExB per project — TODO(content)'}</p></div></section>",
    "prose": "      <section className=\"ah-section\" aria-labelledby=\"{ID}-h\"><div className=\"ah-container ah-stack ah-prose\"><h2 id=\"{ID}-h\" className=\"ah-display-xs\">{isArabic ? '{T}' : '{TE}'}</h2><p className=\"ah-text-md\">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>",
}
IMPORTS = {"hero": "Hero", "heading": "PageHeading", "form": "FormPattern", "filters": "SearchFilters", "stats": "StatsStrip", "cards": "SectionHeading, CardGrid", "steps": "FormSteps", "feedback": "FeedbackRating"}
DGA = {"error": "DgaFeaturedIcon", "accordion": "DgaAccordion", "pagination": "DgaPagination", "banner": "DgaButtonV2"}
SEASONAL = {"founding-day", "national-day", "hajj"}


H1_BLOCKS = {"hero", "error", "heading"}   # blocks that render the page <h1>


def classify(section):
    lowered_section = section.lower()
    for pattern, kind in RULES:
        if re.search(pattern, lowered_section):
            return kind
    return "prose"


def generate(slug, name=None, lib="../../patterns/react"):
    templates_map = json.load(open(MAP, encoding="utf-8"))
    template = next((candidate for candidate in templates_map["templates"] if candidate["slug"] == slug), None)
    if not template:
        raise SystemExit(f"unknown template slug {slug}; use --list")
    name = name or "".join(word.capitalize() for word in slug.split("-")) + "Page"
    kinds = [(section, classify(section)) for section in template["sections"]]
    has_chrome = any(kind is None for _, kind in kinds)
    body = []
    emitted = []                               # block kinds actually written (an h1 block demoted to prose needs no import)
    h1_done = False
    for i, (section, kind) in enumerate(kinds):
        if not kind:
            continue
        if kind in H1_BLOCKS:                     # exactly one <h1> per page: later title-like sections become h2 prose blocks
            if h1_done:
                kind = "prose"
            h1_done = True
        emitted.append(kind)
        section_title = re.sub(r"\(.*?\)", "", section).strip() or section
        body.append(f"      {{/* Figma section: {section} */}}")
        body.append(BLOCKS[kind].replace("{T}", section_title).replace("{TE}", section_title).replace("{ID}", f"s{i}"))
    pat_imports = sorted({imp for kind in emitted for imp in IMPORTS.get(kind, "").split(", ") if imp})
    dga_imports = sorted({DGA[kind] for kind in emitted if kind in DGA})
    lines = ["import React from 'react';"]
    if dga_imports:
        lines.append(f"import {{ {', '.join(dga_imports)} }} from 'platformscode-new-react';")
    tpl = lib.rsplit('/patterns/react', 1)[0] + '/templates/react' if '/patterns/react' in lib else lib + '/../templates/react'
    if pat_imports:
        lines.append(f"import {{ {', '.join(pat_imports)} }} from '{lib}/index.js';")
    if has_chrome:
        lines.append(f"import {{ PageShell }} from '{tpl}/PageShell.jsx';")
    season = "\n * SEASONAL identity (colours/artwork) is a design decision per campaign — the chrome and tokens stay DGA; mark any custom art [AHMED HOUSE]." if slug in SEASONAL else ""
    lines += [
        f"/**\n * @kind {'page' if has_chrome else 'section'}\n * {template['figma']} — generated from lib/templates/templates-map.json ({slug}) by tools/new_template.py.\n * Sections: {' · '.join(template['sections'])}.\n * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.{season}\n */",
        f"export function {name}({{ dir = 'rtl' }}) {{",
        *(["  const isArabic = dir === 'rtl';"] if any("isArabic" in line for line in body) else []),
        "  return (",
        "    <PageShell dir={dir}>" if has_chrome else "    <div className=\"ah-page\">",
        *body,
        "    </PageShell>" if has_chrome else "    </div>",
        "  );",
        "}",
        "",
    ]
    return name, "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--template"); parser.add_argument("--dest"); parser.add_argument("--name"); parser.add_argument("--framework", default="react", choices=["react"])
    parser.add_argument("--list", action="store_true"); parser.add_argument("--all", action="store_true")
    parser.add_argument("--lib", default="../../patterns/react", help="import path (from the generated file) to the copied lib/patterns/react folder; templates/react is resolved next to it")
    args = parser.parse_args()
    templates_map = json.load(open(MAP, encoding="utf-8"))
    if args.list:
        for template in templates_map["templates"]:
            print(f"{template['slug']:<18} {template['figma']:<36} react: {template['status'].get('react')}")
        return 0
    if not args.dest:
        parser.error("--dest is required")
    os.makedirs(args.dest, exist_ok=True)
    slugs = [template["slug"] for template in templates_map["templates"]] if args.all else [args.template]
    if not slugs or not slugs[0]:
        parser.error("--template <slug> or --all")
    for slug in slugs:
        name, code = generate(slug, args.name if not args.all else None, args.lib)
        output_path = os.path.join(args.dest, name + ".jsx")
        open(output_path, "w", encoding="utf-8").write(code)
        print(f"generated {output_path}  ({name}, {code.count('TODO(content)')} TODO(content) markers)")
    print("Next: import the page, provide content, then `node <skill>/tools/qa/run.mjs --config qa.config.json` — generated pages are skeletons, not verified pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
