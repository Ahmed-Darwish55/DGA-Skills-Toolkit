# Code quality for generated code — Site-level consistency, DRY, Clean Code, naming (all technologies)

Applies to every file the toolkit writes or edits in a project, in every design mode — and to the toolkit's own `lib/`
(the library itself passes these rules).

**Enforced, not only described:** run `python3 ${CLAUDE_SKILL_DIR}/tools/code_quality_check.py --path <project>/src [--pages <pages dir>]`
on the code you wrote before reporting. Rules: `NAME-SHORT` (1–2-letter names except `i`, `j`, `_` and real words; known abbreviations such as
`el`, `cb`, `btn`, `doc`, `ctx`, `tmp`, `val`), `NAME-CASE`, `DEAD-CODE` (unused imports / variables), `DUP-HELPER` (the same helper defined in two
files), `DUP-BLOCK` (copied blocks), `DUP-TEXT` (the same user-facing text in two files — put it in one content / labels module; `TODO(content)`
placeholders are ignored), `SITE-CHROME` (a page passing header/footer design or building its own site configuration). Exit 1 = fix first.

## 1. Site-level consistency (header, navigation, footer)
- **One site configuration per site** (`lib/site/site-config.js` → `createSiteConfig({ dir, identity, navigationItems, header, footer, theme })`).
  It owns: logo / identity, the **ordered** navigation (with each item's own `children`), Second Nav Header items, footer content and the
  **footer variant**. Default theme: `footerVariant: 'DarkGreen'`, `showSecondNavHeader: true` (the Figma inner templates and Home variants use both).
- **One shared header and one shared footer** that read the site configuration ONLY — React `<SiteHeader>` / `<SiteFooter>` (need a
  `<SiteProvider>`), vanilla `siteHeader(document, { siteConfig, … })` / `siteFooter(…)` / `pageShell(…)`, Angular `<dga-skills-site-shell>` +
  `provideDgaSite()`, ExB `useSiteChromeWidget()` / `mountSiteChrome()`. They accept only the page route, `feedback` and event handlers; design
  options (`background`, `logo`, `links`, `secondNav`, `stamp`, `groups`, `copyright`, …) are ignored with a console warning.
  Page templates choose their **content** (feedback question, rating strip, last-modified) — never the header, the menu order, the footer variant or colours.
- **Site theme** (`theme`): `footerVariant`, `showSecondNavHeader`, `showDigitalStamp`, `brandColors` (`brandStrong`, `brand`, `brandSubtle`,
  `accentBorder`) — DGA token references only (`var(--…)`; a hex / rgb value throws). Applied as `--ah-site-*` variables on the page root.
- Never build menu items per page; never attach sub-menus by label lookup; never pass `footerBackground` / `secondNav` from a page.
- No logo supplied → the toolkit default logo (`getDefaultLogo(dir)`); never a third-party placeholder service in a delivered page.

## 2. DRY
- Logic used in two places becomes one function / hook / service / utility. Shared UI becomes one configurable component with clear props —
  not a copy with edited text.
- Data shared by pages (navigation, services, footer links, contact details) lives in a data/config module, never inline in JSX/templates.
- Generalise only when the behaviour is really shared; a generic helper that makes the call site harder to read is not DRY, it is noise.
- No repeated hard-coded colours, spacing or site settings — DGA tokens (`var(--…)`) and the site configuration only.

## 3. Naming
| Kind | Convention | Examples |
|---|---|---|
| variables, functions, props | `camelCase`, full words, says what it holds/does | `serviceDetails`, `navigationItems`, `selectedDesignMode`, `isMobileMenuOpen`, `getServiceDetails()`, `handleNavigationClick()`, `formatLastUpdatedDate()` |
| React components, classes, types/interfaces | `PascalCase` | `ServiceInfoCard`, `SiteProvider`, `NavigationItem` |
| module-level fixed constants | `UPPER_SNAKE_CASE` | `FOOTER_VARIANTS`, `DEFAULT_SITE_THEME`, `PAGE_SIZE` |
| booleans | `is…` / `has…` / `should…` / `can…` | `isRtl`, `hasSubMenu` |
| event handlers | `handle…` (definition) / `on…` (prop) | `handleSearchSubmit` / `onSearchSubmit` |
Never: `x`, `a`, `tmp`, `fn`, `val`, `srv`, `navArr`, `data1`, single-letter names outside tiny lambdas/loops whose meaning is obvious.

## 4. Structure
- Single responsibility: UI components render; hooks/services hold logic; config/data modules hold content. Keep them in separate files.
- Small functions, early returns instead of nested conditions, no files that mix routing + data + markup.
- Keep TypeScript types strict when the project uses TypeScript (no `any` for site config, navigation or service data).
- No new dependency without a clear need stated in the reply.

## 5. Per technology
| Technology | Shared chrome | Logic | Data |
|---|---|---|---|
| React | `SiteProvider` + `PageShell` (one `<SiteHeader>` / `<SiteFooter>`) | custom hooks (`useSiteChrome`, `useDgaCarouselA11y`) | `siteConfig.js`, `services-data.js` |
| Angular | one `SiteShellComponent` (header + footer) in the root layout; `SiteConfigService` (`providedIn: 'root'`) | services / pure functions | `site-config.ts` constant + typed interfaces |
| Vanilla / Web Components | `pageShell(document, { siteConfig, activeRoute, onNavigate, children })` (`lib/patterns/vanilla`) | pure functions (`lib/patterns/shared`) | ES modules |
| ArcGIS Experience Builder | header widget + footer widget: `useSiteChromeWidget(rootRef, { part, siteConfig, activeRoute })` (`lib/exb/site-shell.js`) on ONE site configuration (shared module or the same JSON in each widget's `config.json`) | `lib/patterns/shared` utilities | `config.json` / shared module |
| Angular (implemented 5.0.3) | `provideDgaSite(createSiteConfig(…))` + `<dga-skills-site-shell activeRoute="…" (navigate)="…">` (`lib/angular/site-shell.ts`) | `SiteConfigService` | typed `SiteConfig` (`lib/site/site-config.d.ts`) |
The view layer stays per technology (JSX components, DOM builders, Angular components, ExB widgets); texts (`patternLabels`), catalogue logic
(`queryServiceCatalogue`) and site rules (`resolveHeaderProps` / `resolveFooterProps`) are written once in `lib/patterns/shared` and `lib/site`.

## 6. Check before reporting
`code_quality_check.py` (naming, duplication, dead code, site chrome), `find_existing.py` (reuse), `check_dga_props.py` (no invented props), the QA engine on **every page type** of the site — and confirm that header,
navigation order and footer variant are identical across the pages (QA config `siteConsistency`, see `tools/qa/README.md`).
