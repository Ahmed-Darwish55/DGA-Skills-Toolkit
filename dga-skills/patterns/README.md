# Pattern library

Code: `lib/patterns/` (`patterns.css`, `react/`, `vanilla/`) — copied into projects with `tools/copy_lib.py --framework <react|vanilla|angular|exb> --with-patterns`.
Templates: `lib/templates/` (`react/`, `vanilla/`, `templates-map.json` for all 20 DGA templates).
QA: `tools/qa/` (Playwright engine; gates E/N/C from `rules/design-modes.md`).

| Pattern | React | Vanilla/Angular/ExB | DGA components (real) | House parts ([AHMED HOUSE]) | Doc |
|---|---|---|---|---|---|
| Header & navigation | `SiteHeader` | `siteHeader()` | dga-digital-signature, dga-second-nav-header(+content/item), dga-nav-header(+main/logos/menu/link/actions), dga-button-v2 | sticky in Enhanced/Creative; skip link | [header.md](header.md) |
| Hero | `Hero` | `hero()` | dga-search-box, dga-button-v2 (on-color) | split layout (Enhanced), full-bleed photo + overlay + figures (Creative) | [hero.md](hero.md) |
| Section heading | `SectionHeading` | `sectionHeading()` | dga-link | — | [section-heading.md](section-heading.md) |
| Cards & grid | `CardGrid` | `cardGrid()` | dga-card | grid rhythm 12/6/4; reveal (Enhanced/Creative) | [cards.md](cards.md) |
| Statistics & figures | `StatsStrip` | `statsStrip()` | template figures (default) · dga-metric for dashboards | stat tiles (dashboards, Enhanced/Creative) | [stats.md](stats.md) |
| **Site configuration** (header · navigation · footer for ALL pages) | `SiteProvider`, `useSiteConfig`, `useSiteChrome` + `createSiteConfig` | `siteChrome()` + `createSiteConfig` | Figma Nav Header / Footer instances | n/a | [site-config.md](site-config.md) |
| Home page (full composition) | `Home` template + `ServiceCarousel`, `PartnersStrip`, `LastModified` | `home()` + `serviceCarousel()`, `partnersStrip()`, `lastModified()` | Figma Home Page Template | same chrome | [home-page.md](home-page.md) |
| Service page (full composition) | `Service` template + `ServiceInfoCard`, `ServiceTabs`, `VideoPlaceholder`, `StepsList`, `IconLink`, `RatingStrip`, `CommentsCard` | `service()` + `serviceInfoCard()`, `serviceTabs()`, `videoPlaceholder()`, `stepsList()`, `iconLink()`, `ratingStrip()`, `commentsCard()` | Figma Service Page Template | same chrome | [service-page.md](service-page.md) |
| Services catalogue | `Services` template + `ServiceCard`, `FilterMenu` | `services()` + `serviceCard()`, `filterMenu()` | Figma Search Page Template (grid) | same chrome | [services-page.md](services-page.md) |
| Forms & filters | `FormPattern`, `FormSteps`, `FilterBar` | `formPattern()` | dga-text-input, dga-textarea, dga-dropdown, dga-checkbox, dga-radio-button, dga-inline-alert, dga-progress-indicator(+step), dga-search-box, dga-tag, dga-button-v2 | panel/grid layout | [forms.md](forms.md) |
| Footer | `SiteFooter` | `siteFooter()` | dga-footer, dga-button-v2 (feedback) | feedback strip composition | [footer.md](footer.md) |
| Page heading | `PageHeading` | — (compose: breadcrumbs + h1) | dga-breadcrumbs, dga-tag, dga-button-v2 | brand-25 band | [page-heading.md](page-heading.md) |
| Feedback & rating | `FeedbackRating` | — | dga-button-v2, dga-rating, dga-inline-alert | — | [feedback-rating.md](feedback-rating.md) |
| Alerts | `AlertStack` | — | dga-inline-alert | aria-live wrapper | [alerts.md](alerts.md) |
| Loading / empty / error states | `StateBlock` | — | dga-line-skeleton, dga-inline-alert, dga-button-v2 | empty-state copy | [states.md](states.md) |
| Lists | `ListBlock` | — | dga-list | heading level kept by the page | [lists.md](lists.md) |
| Search & filters | `SearchFilters` (= `FilterBar`) | `formPattern()` filters | dga-search-box, dga-dropdown, dga-tag | — | [forms.md](forms.md) |
| Navigation state | `NavProvider` / `useNav` | — | (wires `SiteHeader` / `PageShell` links to the host router; demo uses hash routes) | — | [navigation.md](navigation.md) |
| Accessible dropdown (opt-in) | `useDropdownA11y` | `createAccessibleDgaDropdown()` | dga-dropdown + `lib/core/dropdown-a11y.js` | ARIA + keyboard layer, marker `data-dga-a11y-compat` | [../rules/package-integration.md](../rules/package-integration.md) |

The blocks (`lib/patterns/react/Blocks.jsx`, `nav.jsx`) are React-only; vanilla/Angular/ExB projects compose the same DGA elements by hand following the doc of each block (the vanilla builders cover header, hero, cards, stats, forms, footer).

Rules that apply to every pattern:
- Chrome = real DGA components; nothing is restyled inside shadow DOM. CSS uses only package tokens (`--spacing-*`, `--radius-*`, `--text-*`, `--background-*`, `--border-*`, `--shadow-*`), identical to `references/dga-live/foundations/dga-tokens.css`.
- House values live in one labelled block (`--ahmed-*`) and are reported by gate N4. Anything marked `[AHMED HOUSE]` is **not** certified DGA.
- Modes: `ModeProvider` (React) / `mode` option (vanilla). Exact renders no house motion and no house compositions.
- Placeholder content is labelled as such; real deployments must supply real, licensed assets (`data-licence`).
- Package defects met while building (not fixed, see `registry/packages.json`): PKG-FOOTER-01 (host `width: fit-content`), PKG-FOOTER-02 (mobile LTR overflow), PKG-FOOTER-03 (no alt for main image), PKG-LINK-01 (iconType printed as text), PKG-METRIC-01 (featuredIcon printed as text), PKG-SEARCH-01 (search button without name), PKG-NAV-01 (menu list markup), PKG-CARD-01 (fixed h4), plus PKG-DD-* for dropdowns.

## Templates and the skeleton generator
`lib/templates/react/` ships 10 working pages/blocks (home, service, services catalogue, form, FAQ, 404, search, contact, feedback, rating — see `lib/templates/templates-map.json`).
For the remaining templates `tools/new_template.py --template <slug> --dest <folder> --lib <relative path to the copied patterns/react>` emits a compilable skeleton that places the real DGA parts for every Figma section and marks every `TODO(content)`; `examples/government-site` renders all 20 under `#/ar/gen/<slug>`. A skeleton is a starting point — it is **not** a verified page until its content is real and `tools/qa/run.mjs` has run on it.

## QA evidence
Run `node ${CLAUDE_SKILL_DIR}/tools/qa/run.mjs --config qa.config.json` on the pages that use these patterns (`tools/qa/README.md`). The pattern code passes token lint, keyboard, motion, document structure and CLS at 1440/1024/768/390 in RTL and LTR; the remaining failures are package-owned (PKG-FOOTER-02 overflow at 390 px LTR, button state colours PKG-BTN-02/04/05, accordion PKG-ACCORDION-01/02, axe PKG-SEARCH-01 / PKG-TEXTAREA-01 / PKG-ALERT-01 / PKG-NAV-01 / PKG-ICON-04 / PKG-DIGSIG-01). Because of them **no page built from these patterns may be called DGA Exact compliant** on `@platformscode/core` 0.0.52 — say so with the IDs.

