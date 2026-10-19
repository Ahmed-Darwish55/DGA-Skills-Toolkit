# lib — reusable code copied into projects (`tools/copy_lib.py`)

| Folder | What | Tested by |
|---|---|---|
| `core/` | framework-agnostic: `createIconRegistry` (primary `@platformscode/icons`, fallback Hugeicons Free), `iconProps` / `buttonIcon` (RTL policy, sizes, missing-icon guard), `hugeiconToSvg/DataUrl`, `getDirection/observeDirection/setDocumentLocale`, `prefersReducedMotion/onReducedMotionChange/motionDuration`, `validateProps/assertProps` (installed-API guard), `requireAccessibleName`, `defineDgaElements/setProps/onDga`, `extractRootCssVariables/applyCssVariables`, `setupDga` service. Typings: `core/index.d.ts` | `tests/unit/core.test.mjs` + all integration suites |
| `react/` | `DgaProvider`, `useDga`, `useDirection`, `useReducedMotion`, `useDgaIcons`, `useButtonIcon`, `DgaIconButton` | `tests/integration/react` |
| `angular/` | `provideDgaSkills`, `DgaIconService`, `DirectionService`, `ReducedMotionService`, `DgaIconButtonComponent` (`dga-skills-icon-button`) | `tests/integration/angular` |
| `vanilla/` | `setupDgaWeb`, `createDgaButton`, `createDgaDropdown` | `tests/integration/vanilla` |
| `patterns/` | `patterns.css` (tokens-only layout/typography + the labelled `[AHMED HOUSE]` block), `react/` (ModeProvider, Reveal, SiteHeader, SectionHeading, Hero, CardGrid, StatsStrip, FormSteps/FormPattern/FilterBar, SiteFooter), `vanilla/` (same builders for vanilla / Angular / ExB) — real DGA components only, three design modes | `tests/integration/templates-{react,vanilla}`, `tests/integration/angular` + `tools/qa/run.mjs` |
| `templates/` | `templates-map.json` (20 DGA templates → sections, patterns, components, status), `react/` Home · Service · Form · FAQ · NotFound (+ `content.js` placeholders, `PageShell`), `vanilla/` home · faq · notFound · formPattern | same |
| `exb/` | `useDgaWidget`, `DgaElement`, `widget-template/` | `tests/integration/exb-sim` (simulation) |

No third-party code is vendored here; packages are injected by the project (`addIcons`, icon exports, defineCustomElement functions).
