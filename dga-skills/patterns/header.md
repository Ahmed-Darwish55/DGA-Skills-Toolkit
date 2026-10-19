# Header & navigation — `SiteHeader` / `siteHeader()`
Figma: `references/dga-live/web/ui-shell-nav-header.md` (Nav Header 72 px, menu + actions), `ui-shell-second-level-nav-header.md` (40 px, Gray/Primary), `web/digital-stamp.md` (32 px, collapsed).
Anatomy (top → bottom): skip link (visually hidden until focus) → Digital Stamp (`dga-digital-signature language extension`) → optional Second Nav Header (`variant="gray"`) → Nav Header (`divider`) → Main → Logos (`logoSrc/logoAlt/logoLink`, `govSrc/govAlt/govLink`) · Menu (`dga-nav-header-link label active`) · Actions (default: `dga-button-v2 primary md`).
Modes: Exact static · Enhanced/Creative `position: sticky` on the wrapper (house composition; component chrome unchanged).
RTL: handled by the components from `<html dir>`; wrapper uses logical properties only.
Icons needed in the registry: `arrow-up-02`, `arrow-down-01` (stamp chevron), `search-01`, `user`, `translation` (header actions if used).
Measured: stamp 32 px, nav header 72 px, second nav 40 px; keyboard reaches skip link → logos → menu links → action. Known package issues: PKG-NAV-01 (axe `list/listitem` on the menu markup), focus ring on logo links is `:focus-visible` only (no outline on mouse focus).

## Sign in / header actions (owner correction 2026-10-18)
Figma `web/ui-shell-nav-header.md` › **Header Action** (Selected=False, Icon position=Inline): leading icon 24 (`user` for sign-in; Figma default `login-square-01`) + label **Text md / Medium 16/24, `text-default` #161616**, padding 8/16, **no fill, no border**. Green fill + selection bar appear only for **Selected=True** (the current page item). So "تسجيل الدخول" is an icon + text header item — **never a filled primary button**.
Package 0.0.52 has no separate header-action element: use `DgaNavHeaderLink` with `icon` inside `DgaNavHeaderActions` (`SiteHeader` / `siteHeader()` default). Mobile: the package moves it into the overflow (…) menu.

## Second Nav Header (inner templates — Figma "Second Nav Header / Style=Gray")
40 px, neutral-100, top divider. **Content** (`slot="content"`): `dga-second-nav-header-item` with an icon in `slot="icon"` (24, aria-hidden) + Text md
text-primary-paragraph — weather `cloud` · date `calendar-04` · time `time-02` · location `location-01` (bind to live data or omit an item).
**Actions** (`slot="actions"`): Button Subtle Medium icon-only with a tooltip/accessible name — `view` (grayscale) · `zoom-in-area` · `zoom-out-area` ·
`mic-01` (read aloud); working, reversible tools in `lib/core/page-tools.js` (`defaultPageTools`). `SiteHeader secondNav={{ items, actions }}` /
`siteHeader(doc, { secondNav: { items, actions } })`; a plain string array still works (labels only). Not shown below 600 px: the Figma mobile frames drop
it and the package never wraps it (PKG-NAV-03).

## Layout of the Nav Header row (owner correction 2026-10-19)
Figma "Header Content" is SPACE_BETWEEN: **[logo + menu items]** (gap 16, menu right after the logo) … **[actions]** (search · language · sign-in)
at the far end — the same split live DGA-aligned portals use. The package centres the menu by stretching the logo and action slots (PKG-NAV-04); patterns.css
restores the Figma split. Never leave a wide empty band between the logo and the first menu item.
