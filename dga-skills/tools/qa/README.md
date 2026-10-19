# tools/qa — Visual QA engine

Runs the **objective** parts of the design-mode gates (`rules/design-modes.md`) against real pages in Chromium and writes
evidence a human can review. Nothing is installed: the engine resolves `playwright` / `playwright-core` /
`@playwright/test` and `@axe-core/playwright` from the **project's** `node_modules` (cwd). Chromium path can be forced
with `PW_CHROMIUM=/path/to/chrome`.

```
node ${CLAUDE_SKILL_DIR}/tools/qa/run.mjs --config qa.config.json [--out <dir>] [--only <pageId>] [--skip-axe] [--report-only]
node ${CLAUDE_SKILL_DIR}/tools/qa/icon-fidelity.mjs --figma <figma-icons.json> --map ${CLAUDE_SKILL_DIR}/registry/icons/icon-map.json --node-modules node_modules --out <dir> [--update-map]
```

## What `run.mjs` measures (per page × dir × viewport)
| Check | How | Gate |
|---|---|---|
| Overflow / clipping | deep walk through open shadow roots: elements outside the viewport, horizontal page scroll (with the **widest culprit**), text clipped by `overflow` (visually-hidden text and collapsed `clientHeight 0` boxes are not clipping) | R1 (Exact), N2 |
| Token lint | every computed colour on page-authored light-DOM elements must be a hex that exists in `references/dga-live/foundations/dga-tokens.{json,css}`; colours inside DGA components (shadow or scoped light DOM) are **package-owned** and listed separately | E3 |
| Keyboard | Tab through the page: every stop must be visible, in viewport and show a ring (outline / box-shadow / `:focus-visible`) | E4 |
| Motion | transitions/animations in page + shadow DOM; DGA buttons must be INSTANT (Figma); house motion must be off under `prefers-reduced-motion: reduce` (second context + screenshot) | E5, N3 |
| Component states | `componentStates` in the config: host selector + inner element, states Default / Hovered (`hover`) / Pressed (`mouse down`) / Focused (`focus`), measured height, radius, border width/colour, background, then compared with the Figma variant from `references/dga-live/data/<platform>/<file>.json` (`findVariant` by key=value subset; `child` picks a named first-level child frame such as `"Input Field"`; `compare` limits the judged properties for content-sized components — skipped ones are reported as info) | E1 (evidence), E2, E6 |
| axe-core | `@axe-core/playwright`, serious/critical violations fail | AXE |
| Document structure | lang/dir, one h1, main landmark, skip link, heading skips (with the heading list), images without alt / `data-licence` | LANDMARKS, C4 |
| CLS + console | PerformanceObserver layout-shift (≤ 0.1), console errors | N5 |
| House inventory | `[data-house]` elements and `--ahmed-*` custom properties actually used | N4 |
| Screenshots | full page per dir × viewport, per component state, reduced-motion | E2, N2, C2 (evidence) |

`REPORT.md` prints one row per gate: **PASS / FAIL / DEVIATION** are measured; **REVIEW REQUIRED** = subjective gate
(E1 state table with citations, N1 storyboard, C1 concept previews, C2 visual score, C3 motion/3D notes, C5 statement) —
the engine never marks those PASS. **NOT VERIFIED** = no data (no `componentStates` configured, axe missing…).

### Package attribution
`packageDefects: [{ "id": "PKG-FOOTER-02", "match": "dga-footer" }]` in the config tags failures whose evidence matches a
registered `@platformscode` defect (`registry/packages.json`) with `⟵ package: PKG-…`. Attribution is information only:
the gate still FAILS and a DGA Exact page is reported **NOT compliant** until every required component passes. Do not
patch `node_modules`; do not recreate an unsupported state in CSS.

### Config
```json
{ "baseURL": "http://127.0.0.1:5185", "skillDir": "../../../dga-skills", "out": "qa-reports",
  "readySelector": "dga-nav-header", "settleMs": 1500, "tabStops": 40,
  "viewports": [1440, 1024, 768, 390], "dirs": ["rtl", "ltr"], "cssFiles": ["src/dga-skills/patterns/patterns.css"],
  "packageDefects": [{ "id": "PKG-FOOTER-02", "match": "dga-footer" }],
  "pages": [{ "id": "home-exact", "url": "/?page=home&mode=dga-exact", "mode": "dga-exact", "template": "home-page",
    "componentStates": [{ "id": "hero-primary-oncolor-lg", "selector": "[data-pattern=\"hero\"] dga-button-v2", "index": 0, "inner": "button",
      "figma": { "platform": "web", "file": "buttons", "set": "Button", "variant": "RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=True" },
      "states": { "Default": {}, "Hovered": { "action": "hover" }, "Pressed": { "action": "press" }, "Focused": { "action": "focus" } } }] }] }
```
Pages must accept `?dir=rtl|ltr` (the harness appends it). Working examples: `tests/integration/templates-react/qa.config.json`,
`tests/integration/templates-vanilla/qa.config.json`, `tests/integration/angular/qa.config.json`.

## `icon-fidelity.mjs`
Shape similarity of the primary (`@platformscode/icons`) and fallback (Hugeicons Free) glyphs against **Figma SVG exports**
of the DGA library instances (`{ "<name>|<Style>|<Type>": { svg, w, h, src, main } }`, exported from the DGA Components Library). Every SVG is paint-normalised and rasterised at
48 px; **IoU** = strict ink overlap, **tolerant** = after 1 px dilation, **aligned** = both masks cropped to their ink
bounding box first (answers "same drawing?" independent of optical size; `mirrored` marks RTL-flipped Figma instances).
`--update-map` writes `verification.shape` + a heuristic `shapeClass` (MATCH ≥ 0.8 · UNCLEAR 0.5–0.8 · DIFFERENT DRAWING < 0.5)
into `registry/icons/icon-map.json`; the contact sheet (`contact-sheet.html`, `png/`) is the evidence. Name coverage and
shape similarity are separate facts; shape results never change the source policy by themselves.

## Limits (honest)
- Hover/press/focus are driven by Playwright on the inner element; components that react only to pointer events on a
  different node need their own `inner` selector.
- Figma variant data holds the variant root and first-level children only; deeper anatomy (icon inside a button) is
  compared through screenshots, not numbers.
- Colour lint reads computed colours; gradients are matched by their rgb stops; images are not analysed.
- axe runs on the desktop viewport per direction; viewport-specific a11y (e.g. 390 px menus) needs an explicit page entry.

## Extended checks — `lib/extended-checks.mjs`

| Gate | What is measured | Config |
|---|---|---|
| **Z1** Zoom 200 % | page at 200 % browser zoom (CSS viewport = `zoomBaseWidth`/2 with deviceScaleFactor 2): no horizontal scroll, no clipped text, every focusable control inside the viewport (WCAG 1.4.4 / 1.4.10). Text-only resize is not emulated (DGA tokens are px). | on by default; `"zoom200": false` globally or per page |
| **K1** Widget keyboard | real key presses per widget type, each case from a fresh page: dropdown (Enter, Space open · Escape closes + focus on trigger · ArrowDown), accordion (Enter/Space toggle and back), tabs (Arrow next/prev, Enter), modal (Enter opens dialog · Escape closes + focus returns), button (Enter/Space activation — contained, no navigation), checkbox (Space toggles and back), radio (Arrow moves selection) | page `"widgets": [{ "id", "type", "selector", "index"?, "focus"?, "cases"?, "allowSideEffects"? }]` |
| **F1** Form validation | empty submit → visible error summary with role alert/status, invalid fields marked (`aria-invalid` / DGA `error`), focus on the first invalid field, Enter in a text field submits (implicit submission) | page `"forms": [{ "id", "selector", "submit", "summary" }]` |
| **B1** Bundle budget | gzip size of the built output: JS, CSS, woff2 fonts, other; legacy woff/ttf listed, not counted | `"bundle": { "dist": "dist", "budgets": { "jsKB", "cssKB", "totalKB" } }` |

`--extended-only` skips the viewport/state/motion runs (targeted re-tests); `--checks zoom,widgets,forms,bundle` narrows further.
Page URLs may contain `{lang}` (rtl→ar, ltr→en) and `{dir}`; otherwise `dir=` is added to the query before any `#fragment` (hash routers).
Vendor failures stay FAIL and are attributed with `packageDefects` (e.g. PKG-DD-03/04 for dropdown arrow/Escape, PKG-BUNDLE-01 for the React wrapper bundle floor).

## Extended checks — details (`lib/extended-checks.mjs`)
Run with the normal command; `--extended-only` skips the viewport/state/motion runs, `--checks zoom,widgets,forms,bundle` restricts them.

| Gate | What is measured | Config |
|---|---|---|
| **Z1** zoom 200 % | each page at CSS width = `zoomBaseWidth/2` (default 1280 → 640) with `deviceScaleFactor: 2`: no horizontal scroll, no clipped elements, no text clipped by `overflow:hidden`, no focusable control off-screen. Browser zoom only (DGA tokens are px-based; text-only resize is not emulated). Runs on every page unless `"zoom200": false` (global or per page). | `zoom200`, `zoomBaseWidth` |
| **K1** widget keyboard | real key presses on a focused DGA control; independent cases per type — dropdown: Enter opens, Escape closes + focus back on the trigger, Space opens, ArrowDown opens/moves; accordion: Enter/Space toggle and toggle back; tabs: arrows move focus (RTL-aware), Enter activates; button: Enter/Space fire an activation (contained — the page does not navigate; `allowSideEffects: true` lets the handler run); checkbox: Space toggles/back; radio: arrows move; modal: Enter opens, Escape closes + focus returns. State is read through open shadow roots. | per page `widgets: [{ id, type, selector, index?, focus?, cases?, allowSideEffects? }]` |
| **F1** form validation | empty submit → visible error summary, announced (`role=alert`/`status`), invalid fields marked (`aria-invalid` or DGA `error`), focus moves to the first invalid field; Enter inside a text field submits (implicit submission). | per page `forms: [{ id, selector, submit?, summary?, implicitSubmit? }]` |
| **B1** bundle budget | gzip sizes of the built `dist` (JS, CSS, woff2 fonts, other; legacy woff/ttf listed, not counted) against declared KB budgets. | `bundle: { dist, budgets: { jsKB, cssKB, fontKB, totalKB } }` |

Hash routers: page urls may contain `{lang}` / `{dir}` tokens (`/?mode=dga-exact#/{lang}/form`); otherwise `dir=` is inserted before the `#fragment`.
Vendor findings: PKG-ACCORDION-03 (defaultExpanded items cannot collapse), PKG-BUNDLE-01 (≈598 KB gzip floor for any `platformscode-new-react` import), PKG-DD-03/04 confirmed by K1 — fixed only by the opt-in layer (`?a11y=dropdown` page in the demo config).

## Site consistency (S1) — `site-consistency.mjs`
`node <skill>/tools/qa/site-consistency.mjs --config qa.config.json [--widths 1440,1024,390]` loads every page of the config in both directions
and compares the shared chrome: Digital Stamp, logo, Second Nav Header (presence, items), navigation order + chevrons + sub-menu links, header
actions, footer variant + computed colour + groups + legal links. Only the active menu item may differ. Writes `site-consistency.json` and
`SITE-CONSISTENCY.md`; exit 1 on any difference. Required before reporting a multi-page site (rules/code-quality.md §6).
