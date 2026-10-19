# Policies

Binding rules for every task. IDs are referenced from other files.

| ID | Policy |
|---|---|
| D1 | **Primary icons: `@platformscode/icons`.** Register icons through `addIcons` from `@platformscode/core/components` under both `name` and `name-stroke`; set `flipRtl: false` on arrow/chevron icons that the design does not mirror. |
| D2 | **Fallback icons: Hugeicons Free** (`@hugeicons/core-free-icons`, MIT), only through the validated name mapping in `registry/icons/icon-map.json` and only for free icons. Hugeicons Pro is never bundled. Hugeicons being the official DGA icon library is not verified. |
| D3 | **Reusable components, hooks, functions and services are required.** Shared logic lives once in `lib/`; pages compose it. |
| D4 | **Real compatible DGA component packages come before CSS recreations** when the project has them or approves them. A CSS recreation from the spec is the fallback and must say so. |
| D5 | **React package: `platformscode-new-react@0.1.45`** (wraps `@platformscode/core@0.0.52`). Its official publisher status is not verified; never call the packages official or certified. Known defects are listed in `registry/packages.json`. |
| D6 | **Full scope stays in scope**: page patterns, templates, motion, 3D, accessibility, RTL, mobile, visual QA, source verification and framework adapters. Nothing is silently dropped. |
| D7 | **Design modes**: DGA Exact, DGA Enhanced, DGA Creative; asked first for a new project, then the technology; saved in `.claude/dga-skills.json` (`rules/design-modes.md`, `rules/onboarding.md`). |
| D8 | **Copy-in library model**: reusable code lives in `lib/` and is copied into projects with `tools/copy_lib.py` (version-aware, keeps local edits). No npm package is published on the user's behalf. |
| D9 | **Angular uses `@platformscode/core` custom elements directly** (`CUSTOM_ELEMENTS_SCHEMA` + `lib/angular`), not `platformscode-new-angular@2.0.0` (PKG-NG-01). |
| D10 | **Automated QA never upgrades a FAIL**: `tools/qa/run.mjs` attributes failures to registered package defects (`⟵ package: PKG-…`), but the gate stays FAIL and a DGA Exact page is reported "not compliant" until every required component passes. |
| D11 | **Icon shape findings do not change the icon source policy by themselves**; primary stays `@platformscode/icons`, differences are reported. |
| D12 | **Templates ship placeholder content, never invented data**: metric values are "—", statistics are labelled "(placeholder)", and the hard-coded change indicator of `dga-metric` (PKG-METRIC-02) is hidden with `showInfo={false}`. |
| D13 | **No compatibility aliases for old names in the library**: `provideDgaSkills`, `dga-skills-icon-button`, copied folder `src/dga-skills`. |
| D14 | **Opt-in accessibility layers are allowed, silent fixes are not.** `lib/core/dropdown-a11y.js` adds ARIA and keyboard support to `dga-dropdown` only when a project turns it on; the package defect stays reported. |
| D15 | **Verdicts**: never claim "DGA compliant", "100 %", "official" or "certified" without the evidence the mode requires. Package defects, unverified environments and subjective gates are reported as such. |
| D16 | **Restricted assets are never distributed**: Figma SVG exports and rendered glyphs of `@platformscode/icons` (published as `UNLICENSED`) are not copied into the skill or a project. |
| D17 | **Optional helpers through supported mechanisms only.** Claude Code: `tools/deps.py` installs Frontend Design and UI/UX Pro Max from their own marketplaces with the official `claude plugin` CLI, after source and licence verification. Nothing is bundled. |
| D18 | **Skill-only portability.** All paths in `SKILL.md` use `${CLAUDE_SKILL_DIR}`; everything the skill needs is inside its folder, and it never asks the user to upload `SKILL.md` or references. |
| D19 | **Zero-manual helper setup.** Claude Code installs missing helpers automatically (`deps.py ensure`, verified sources, opt-out `--no-deps`); turned-off helpers are never re-enabled. Cowork: helpers turned on in the account are detected and used; a skill cannot install skills there. |
| D20 | **Lossless Cowork edition.** The upload limits (≤ 200 entries, ≤ 30 MB, one `SKILL.md`, no `@`) are met by packing (catalogues, a gzip data pack, renames) with byte identity — never by deleting reference data. |
| D21 | **Template fidelity over invention.** Pages follow the DGA page templates section by section (`patterns/home-page.md`); dashboard components such as Metric are not used for template blocks. |
| D22 | **Services catalogue = Search Page Template** (grid variant: search box, result heading and count, sort and filters, 3-per-row cards, pagination). `dga-filteration` is replaced by a DGA button + checkbox/radio panel because it crashes without a full `initvalue` (PKG-FILTER-01). |
| D23 | **Header, navigation and footer are site-level.** One configuration per site drives the shared header and footer of every page; templates choose content blocks only. One footer variant for the whole site (Dark green by default). A chevron only on menu items with a sub-menu. |
| D24 | **Rules are enforced by code.** The shared header and footer of every technology take no design options; the site theme accepts DGA token references only; `tools/code_quality_check.py` (naming, dead code, duplicated helpers / blocks / texts, per-page chrome) must report 0 on generated code. Texts, catalogue logic and site rules live once in `lib/patterns/shared` and `lib/site`; the view layer stays per technology. The menu order is the configuration's. |
