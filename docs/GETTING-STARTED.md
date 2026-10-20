**English** | [العربية](GETTING-STARTED.ar.md)

# Getting started

This guide takes you from a fresh install to a first page and a QA report. Install the toolkit first: [INSTALLATION.md](INSTALLATION.md).

There are two ways to use the toolkit:

1. **Ask Claude.** The skill starts by itself for DGA and government UI requests (sections 1–3).
2. **Use the library directly** in your project: `dga-skills/lib/`, copied by `tools/copy_lib.py` (sections 4–9).

All sample content in this repository is placeholder data. Paths below assume the library was copied into `src/dga-skills/`, and `<toolkit>` is your clone of this repository (or `~/.claude/skills/dga-skills/..` after installation).

## 1. Your first request

Open a project folder in Claude Code (or a new Cowork task) and type:

```text
Build a DGA service page for "Building Permit Issuance". Arabic first, with an English version.
```

On the first request in a project the skill asks **one question at a time**:

1. **Design mode** — `DGA Exact`, `DGA Enhanced` or `DGA Creative` ([DESIGN-MODES.md](DESIGN-MODES.md)).
2. **Technology** — React, Angular, ArcGIS Experience Builder, Other (you name it) or Auto Detect, which reads your project files ([SUPPORTED-FRAMEWORKS.md](SUPPORTED-FRAMEWORKS.md)).

Both answers are saved in `.claude/dga-skills.json`, so later requests in the same project are not asked again. To change them later, just say so (*"switch this project to DGA Creative"*).

## 2. What a good answer looks like

- It asks for the design mode before writing code, then for the technology.
- It uses real DGA components from `@platformscode/core` or `platformscode-new-react`, with no invented props.
- All pages of a site share one site configuration; no page sets its own header or footer design.
- It runs the checks in section 9 and reports **PASS / FAIL / REVIEW REQUIRED**, naming known package defects by their `PKG-…` IDs. It never claims the result is "DGA certified".

## 3. More prompts

Twelve complete, copy-ready prompts — homepage, services catalogue, service details, executive dashboard, National Day, Founding Day, Hajj, a bilingual portal, ArcGIS Experience Builder, Angular, a UI/UX audit and a QA run — are in [PROMPT-EXAMPLES.md](PROMPT-EXAMPLES.md). The 20 page templates are listed in [TEMPLATES.md](TEMPLATES.md).

## 4. Copy the library into a project

```bash
# React (+ patterns and templates)
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework react   --dest src/dga-skills --with-patterns
# Angular (copies site, patterns/shared, patterns/vanilla and patterns.css automatically)
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework angular --dest src/app/dga-skills --with-patterns
# Vanilla / Web Components
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework vanilla --dest src/dga-skills --with-patterns
# ArcGIS Experience Builder widget
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework exb     --dest client/your-extensions/widgets/<widget>/src/dga-skills
```

`copy_lib.py` records the SHA-256 of every copied file in `dga-skills-lib.json`. When you run it again, it keeps files the project edited and
reports them as `kept-local-edit`; add `--force` to restore the library version. It never writes inside `node_modules`.

## 5. One site configuration (all technologies)

```js
// src/site-config.js — the ONLY place that defines header, navigation, footer and theme
import { createSiteConfig } from './dga-skills/site/site-config.js';

export const buildSiteConfig = (dir) => {
  const isArabic = dir === 'rtl';
  return createSiteConfig({
    dir,
    identity: { name: isArabic ? 'الجهة الحكومية النموذجية' : 'Sample Government Entity' },  // no logo → default logo
    navigationItems: [                                    // the order of this list = the menu order on every page
      { id: 'home', route: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
      { id: 'services', route: 'services', label: isArabic ? 'الخدمات' : 'Services',
        children: [{ label: isArabic ? 'خدمات الأفراد' : 'Individuals', route: 'services' }] },   // children → chevron + sub-menu
      { id: 'news', route: 'news', label: isArabic ? 'الأخبار' : 'News' },                         // no children → no chevron
      { id: 'about', route: 'about', label: isArabic ? 'عن الجهة' : 'About' },
    ],
    header: {
      secondNavItems: [{ label: isArabic ? 'الدمام' : 'Dammam', icon: 'location-01' }],
      actions: ['search', 'language', 'signIn'],          // which header actions, in which order
    },
    footer: {
      groups: [{ title: isArabic ? 'روابط مهمة' : 'Important links', links: [{ name: isArabic ? 'الأسئلة الشائعة' : 'FAQ', target: '#' }] }],
      legalLinks: [{ name: isArabic ? 'خريطة الموقع' : 'Sitemap', target: '#' }],
      copyright: isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved',
    },
    theme: {
      footerVariant: 'DarkGreen',                          // 'DarkGreen' (default) | 'Light' — one footer for every page
      showSecondNavHeader: true,
      showDigitalStamp: true,
      brandColors: { brand: 'var(--colors-primary-sa-flag-600-primary)' },   // DGA token references only
    },
  });
};
```

Rules enforced by `createSiteConfig`:

- Navigation ids must be unique.
- `header.actions` accepts only `search`, `language` and `signIn`, each at most once.
- `footerVariant` must be `DarkGreen` or `Light`.
- `brandColors` accepts only `brandStrong`, `brand`, `brandSubtle` and `accentBorder`, each set to a `var(--…)` token. A hex or rgb value throws.

The result is deeply frozen, so pages cannot change it.

## 6. React

```jsx
import { SiteProvider, NavProvider, ModeProvider } from './dga-skills/patterns/react/index.js';
import { Home, Services, Service, FormPage, NotFound } from './dga-skills/templates/react/index.js';
import { buildSiteConfig } from './site-config.js';

export function App({ dir, route, navigateTo }) {
  const pages = { home: <Home dir={dir} />, services: <Services dir={dir} />, service: <Service dir={dir} />, form: <FormPage dir={dir} /> };
  return (
    <ModeProvider mode="dga-exact">
      <SiteProvider siteConfig={buildSiteConfig(dir)}>
        <NavProvider active={route} go={navigateTo}>{pages[route] || <NotFound dir={dir} />}</NavProvider>
      </SiteProvider>
    </ModeProvider>
  );
}
```

Your own page uses the shared shell and passes **content only**:

```jsx
import { PageShell } from './dga-skills/templates/react/PageShell.jsx';

export function AboutPage({ dir }) {
  return (
    <PageShell dir={dir} pageRoute="about" feedback>   {/* no logo / links / footer props — they come from the site configuration */}
      <section className="ah-section"><div className="ah-container"><h1 className="ah-display-sm">…</h1></div></section>
    </PageShell>
  );
}
```

`<SiteHeader>` and `<SiteFooter>` take only `pageRoute`, `feedback` and handlers (`onSearch`, `onLanguage`, `onSignIn`, `onFeedback`). Design props such as
`logo`, `links`, `secondNav` or `background` are ignored with a console warning.

To generate a page skeleton for any of the 20 DGA templates:

```bash
python3 <toolkit>/dga-skills/tools/new_template.py --list
python3 <toolkit>/dga-skills/tools/new_template.py --template national-day --dest src/pages --lib ../dga-skills/patterns/react
```

## 7. Vanilla / Web Components

```js
import { setupDgaWeb } from './dga-skills/vanilla/index.js';
import { home, services } from './dga-skills/templates/vanilla/index.js';
import { pageShell } from './dga-skills/patterns/vanilla/index.js';
import { buildSiteConfig } from './site-config.js';

setupDgaWeb({ defines, addIcons, primary, icons });          // custom elements + icons, once per page
const siteConfig = buildSiteConfig('rtl');

// a template
document.getElementById('root').replaceWith(home(document, { dir: 'rtl', siteConfig, activeRoute: 'home', onNavigate: (route) => go(route) }));

// your own page inside the shared shell
const content = document.createElement('section');
document.body.append(pageShell(document, { siteConfig, activeRoute: 'about', lastModifiedDate: { date: '15/10/2026' }, children: [content] }));
```

## 8. Angular and ArcGIS Experience Builder

**Angular** (Angular 19, standalone components, strict mode):

```ts
// app.config.ts
import { provideDgaSkills, provideDgaSite } from './dga-skills/angular';
import { createSiteConfig } from './dga-skills/site/site-config.js';

export const appConfig = { providers: [provideDgaSkills({ defines, addIcons, primary, icons }), provideDgaSite(createSiteConfig({ dir: 'rtl', navigationItems }))] };
```

```html
<!-- any page component (imports: [SiteShellComponent]) -->
<dga-skills-site-shell activeRoute="services" [lastModifiedDate]="{ date: '15/10/2026' }" (navigate)="router.navigate([$event])">
  <section class="ah-section">…page content…</section>
</dga-skills-site-shell>
```

The component has these outputs: `navigate`, `feedbackAnswer`, `search`, `languageSwitch` and `signIn`.

**ArcGIS Experience Builder.** Not yet confirmed in a real Experience Builder runtime. Use one header widget and one footer widget on the same configuration:

```tsx
import { React } from 'jimu-core';
import { useDgaWidget, useSiteChromeWidget } from '../dga-skills/exb/index.js';
import { siteConfig } from '../shared/site-config';     // one shared module (or the same JSON in each widget's config.json)

export default function HeaderWidget () {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useDgaWidget(rootRef, { cssVars, defines, addIcons, primary, icons });
  useSiteChromeWidget(rootRef, { part: 'header', siteConfig, activeRoute: 'services', onNavigate: (route) => { /* ExB page navigation */ } });
  return <div ref={rootRef} />;
}
```

## 9. Check the result

```bash
# naming, dead code, duplicated helpers / blocks / texts, pages that set header/footer design
python3 <toolkit>/dga-skills/tools/code_quality_check.py --path src --pages src/pages

# no invented DGA props
python3 <toolkit>/dga-skills/tools/check_dga_props.py --project .

# same header / footer on every page (needs a running preview and a QA config)
node <toolkit>/dga-skills/tools/qa/site-consistency.mjs --config qa.config.json

# visual QA: responsive, zoom 200 %, keyboard, axe, motion, tokens
node <toolkit>/dga-skills/tools/qa/run.mjs --config qa.config.json
```

A full QA config is in [`examples/government-site/qa.config.json`](../examples/government-site/qa.config.json).
