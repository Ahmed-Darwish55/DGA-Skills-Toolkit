**English** | [العربية](SUPPORTED-FRAMEWORKS.ar.md)

# Supported frameworks and environments

## Claude hosts

| Host | Install | Optional helpers | Status |
|---|---|---|---|
| Claude Code (terminal, IDE, desktop Code tab) on macOS / Linux | `python3 install.py install` | installed automatically from official marketplaces | supported |
| Claude Code on Windows | `.\install.ps1 install` or `install.cmd install` | same | supported; not yet confirmed on a real Windows host |
| Claude Desktop / Cowork / claude.ai | upload `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` | detected only (a skill cannot install skills in Cowork) | supported; 5.0.3 upload not yet confirmed on a live account |

Details: [INSTALLATION.md](INSTALLATION.md).

## Front-end technologies

When the skill asks for the technology, the choices are **React**, **Angular**, **ArcGIS Experience Builder**, **Other** (you name it) and **Auto Detect** (reads `package.json`, `angular.json` and similar files in your project).

| Technology | DGA package used | Toolkit code (`dga-skills/lib/`) | Site shell (one header and footer) | Status |
|---|---|---|---|---|
| **React** 18 | `platformscode-new-react` 0.1.45 + `@platformscode/core` 0.0.52 | `react/`, `patterns/react/`, `templates/react/` | `<SiteProvider>` + `<SiteHeader>` / `<SiteFooter>` / `PageShell` | supported |
| **Angular** 19 (standalone, strict) | `@platformscode/core` custom elements | `angular/` (`provideDgaSkills`, `provideDgaSite`, `<dga-skills-site-shell>`) | `<dga-skills-site-shell>` | supported (strict builds) |
| **Vanilla JS / Web Components** | `@platformscode/core` custom elements | `vanilla/`, `patterns/vanilla/`, `templates/vanilla/` | `pageShell()`, `siteHeader()`, `siteFooter()` | supported |
| **ArcGIS Experience Builder** (target 1.14–1.18) | `@platformscode/core` custom elements, styles scoped to the widget | `exb/` (`useDgaWidget`, `useSiteChromeWidget`, `mountSiteChrome`, widget template) | one header widget + one footer widget on the same configuration | supported; not yet confirmed in a real Experience Builder |
| **Vue, Svelte, Lit, Next.js** | `@platformscode/core` custom elements via the vanilla path | `vanilla/` + the rules in `adapters/other.md` | vanilla builders | basic support |

`platformscode-new-angular` 2.0.0 is **not** used: it depends on an old core version and its inputs do not match the core API (defect `PKG-NG-01`). Angular uses the core custom elements directly.

### DGA package versions

The API registry (`dga-skills/registry/packages/`) describes `@platformscode/core` **0.0.17**, **0.0.52** and **0.0.53**. The prop guard `tools/check_dga_props.py` checks your code against the version installed in your project, so an invented or misspelled prop is reported before it ships. 60 known package defects are recorded in `registry/packages.json` with workarounds; `node_modules` is never patched.

### Icons

`@platformscode/icons` is the primary icon set. **Hugeicons Free** (`@hugeicons/core-free-icons`, MIT) is used only as a fallback for missing glyphs. Hugeicons Pro is never bundled.

## Tooling requirements

| Tool | Needed for | Version |
|---|---|---|
| Python | installer, project settings, dependency manager, generators, checks | 3.8+ (standard library only) |
| Node.js + npm | building projects, unit tests, QA engine | Node 18+ (tested on 22) |
| Playwright + Chromium | QA engine and site-consistency check | the project's own install |
| `@axe-core/playwright` | accessibility gate in the QA engine | optional; without it the axe gate is reported NOT VERIFIED |

## Languages and direction

Arabic (RTL) is the default, English (LTR) is fully supported. Every page template and the site shell are checked in both directions, and the QA engine runs each page in RTL and LTR at 1440, 1024, 768 and 390 px.

Per-framework notes and copy-ready setup code: [`dga-skills/adapters/`](../dga-skills/adapters/) · Getting started: [GETTING-STARTED.md](GETTING-STARTED.md).
