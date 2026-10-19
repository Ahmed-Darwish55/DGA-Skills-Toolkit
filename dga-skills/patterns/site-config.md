# Site configuration — one header, one navigation, one footer for every page

`lib/site/site-config.js` (+ `site-config.d.ts`, framework-agnostic) · React `SiteProvider` / `SiteHeader` / `SiteFooter` / `PageShell` ·
vanilla `siteHeader` / `siteFooter` / `pageShell` (`lib/patterns/vanilla`) · Angular `provideDgaSite` + `<dga-skills-site-shell>` (`lib/angular/site-shell.ts`) ·
ExB `useSiteChromeWidget` / `mountSiteChrome` (`lib/exb/site-shell.js`) · rules: `rules/code-quality.md` §1 · checks: `tools/qa/site-consistency.mjs`,
`tools/code_quality_check.py` (`SITE-CHROME`).

## Why
1. **Header** — the menu must not be built per page: a chevron and sub-menu appear only for items that really have `children`, so every item keeps the same anatomy and alignment, and the menu never depends on sample data.
2. **Footer** — one variant for the whole site. Every DGA inner template uses **Dark green**, and the Home template file holds both Dark green and Default frames, so nothing requires Home to differ.

## The rule
- The app builds the configuration **once** (per direction) and every page reads it; templates never receive header/footer design props.
- Navigation order = the order of `navigationItems`; a sub-menu = the item's own `children`; chevron only on items that have a sub-menu
  (a chevron promises a menu — Figma's default Header Menu Item shows it because every sample tab is a menu).
- Active item: the router (`NavProvider active`) or, without a router, the template's own `pageRoute`.
- Theme (site level): `footerVariant` (`'DarkGreen'` default · `'Light'`), `showSecondNavHeader` (default true; hidden < 600 px), `showDigitalStamp`,
  `brandColors` — `{ brandStrong, brand, brandSubtle, accentBorder }`, DGA token references only (defaults: `var(--colors-primary-sa-flag-800)`,
  `var(--colors-primary-sa-flag-600-primary)`, `var(--background-primary-25)`, `var(--border-primary)`). Unknown keys, unknown variants or raw colours
  throw. `patterns.css` reads them as `--ah-site-brand-strong`, `--ah-site-brand`, `--ah-site-brand-subtle`, `--ah-site-accent-border`
  (hero gradient, light bands, feedback / rating borders).
- Header element order (5.0.3), managed centrally: Digital Stamp (`theme.showDigitalStamp`) → Second Nav Header (`theme.showSecondNavHeader`,
  `header.secondNavItems`, `header.secondNavActions`) → Nav Header [logos (`identity`) · menu (`navigationItems`, in that order) · actions
  (`header.actions`, ids from `HEADER_ACTION_IDS` = `search`, `language`, `signIn`, in that order; default all three)]. The order of the menu items
  is the configuration's, not Figma's: the Figma tabs are placeholders («تبويب 1…7») and set no order.
- The shared header / footer accept only the route, `feedback` and handlers. Any design option passed to them is ignored and warned about.
- No logo supplied → the toolkit default logo (`getDefaultLogo(dir)`: «الجهة الرقمية — خدمات ذكية» / "Digital Entity — Smart Services").

## React
```jsx
import { SiteProvider, NavProvider } from './dga-skills/patterns/react/index.js';
import { createSiteConfig } from './dga-skills/site/site-config.js';

const siteConfig = createSiteConfig({
  dir,
  identity: { name: entityName, logo: entityLogo /* omit → default logo */ },
  navigationItems: [
    { id: 'home', route: 'home', label: 'الرئيسية' },
    { id: 'services', route: 'services', label: 'الخدمات', children: [{ label: 'خدمات الأفراد', route: 'services' }] },
    { id: 'news', route: 'news', label: 'الأخبار' },
    { id: 'about', route: 'about', label: 'عن الجهة' },
  ],
  header: { secondNavItems },
  footer: { groups, social, accessibility, legalLinks, extraLinks, copyright, developedBy, feedbackStats },
  theme: { footerVariant: 'DarkGreen' },
});

<SiteProvider siteConfig={siteConfig}>
  <NavProvider active={activeRoute} go={navigateTo}>{page}</NavProvider>
</SiteProvider>
```
`NavProvider links` is ignored (a console warning says so) — move the items into `navigationItems`.

## Vanilla
`home(document, { dir, mode, content, siteConfig, activeRoute, onNavigate })` — every template builder takes the same `siteConfig`;
a custom page uses `pageShell(document, { siteConfig, mode, activeRoute, onNavigate, feedback, lastModifiedDate, children: [...] })`.

## Angular (5.0.3)
```ts
// app.config.ts
providers: [provideDgaSkills({ … }), provideDgaSite(createSiteConfig({ dir, identity, navigationItems, header, footer, theme }))]
// any page
<dga-skills-site-shell activeRoute="services" [lastModifiedDate]="{ date: '15/10/2026' }" (navigate)="router.navigate([$event])"> …page… </dga-skills-site-shell>
```
`SiteShellComponent` renders the shared vanilla header / footer into its host, applies the theme and projects the page into `<main>`;
outputs: `navigate`, `feedbackAnswer`, `search`, `languageSwitch`, `signIn`. `copy_lib.py --framework angular` copies `site`, `patterns/shared`,
`patterns/vanilla` and `patterns.css` with it. Verified: Angular 19 strict build + Playwright (`tests/integration/angular/e2e/site-shell.spec.mjs`).

## ArcGIS Experience Builder (5.0.3)
```jsx
const rootRef = React.useRef(null);
useSiteChromeWidget(rootRef, { part: 'header', siteConfig, activeRoute, onNavigate });   // footer widget: part: 'footer'
return <div ref={rootRef} />;
```
Both widgets read ONE configuration (a shared module, or the same JSON in each widget's `config.json` → `createSiteConfig(config.site)`).
The theme is applied on the widget root only. Verified in the ExB **simulation** harness (jimu-core stub) — not in a real ExB runtime.

## Migrating an existing project (what changes)
1. Create `src/site-config.(js|ts)` with `createSiteConfig(...)` — move the menu, logo, footer data there (delete per-page copies).
2. Wrap the app once in `SiteProvider`; keep `NavProvider` for `active` + `go` only.
3. Remove `footerBackground` / `secondNav` from every page (and any per-page footer markup).
4. Run `tools/qa/site-consistency.mjs` on all page types → must be PASS.
