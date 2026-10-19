# Known limitations

This page lists what DGA Skills Toolkit 5.0.3 does not do, what was not verified, and the known defects of the DGA packages it builds on. Nothing here is counted as passing.

## 1. Not verified yet

| Area | Status |
|---|---|
| Windows install (`install.ps1`, `install.cmd`) | written and reviewed, not yet run on a real Windows host |
| ArcGIS Experience Builder | the widgets work in a simulated Experience Builder environment; not yet run in a real Experience Builder 1.14–1.18 |
| Cowork upload of the 5.0.3 ZIP | the ZIP meets the Cowork upload limits and passes the skill-format validator; upload to a live account not yet confirmed — see [INSTALLATION.md › Verify in Cowork](INSTALLATION.md#verify-in-cowork) |
| DGA Exact compliance of whole pages | blocked by package defects (section 3) |
| Official publisher status of `@platformscode/*` | not verified |

## 2. Limitations of the toolkit itself

| ID | Limitation |
|---|---|
| OWN-01 | Some React building blocks (page heading, feedback rating, alert stack, state block, list block, navigation provider) have no Angular or vanilla equivalent; those stacks compose the same DGA elements directly. |
| OWN-02 | 9 of the 20 templates are implemented in React; the other 11 are generated **skeletons** that compile and render but are not finished pages ([TEMPLATES.md](TEMPLATES.md)). |
| OWN-04 | The bundle-size gate (B1) fails because importing one React wrapper pulls in the whole DGA component set (PKG-BUNDLE-01). |
| OWN-05 | Vue, Svelte, Lit and Next.js are supported through the Web Components path with one-component checks only. |
| OWN-06 | The motion example needs server-side rendering to show content without JavaScript. |
| OWN-07 | FAQ templates render all items collapsed, because an item opened by default cannot be closed (PKG-ACCORDION-03). |
| REVIEW | Subjective QA gates (creative concepts, visual score, motion storyboard, state tables) are always **REVIEW REQUIRED**, never automatic PASS. |
| COWORK | In Cowork a skill cannot install other skills, so the optional helpers are detected, not installed ([INSTALLATION.md](INSTALLATION.md#platform-limitation-helpers-in-cowork)). |

## 3. Defects in the `@platformscode/*` packages

These are defects in the DGA packages themselves, not in the toolkit. The toolkit never patches `node_modules`; it documents a workaround where one exists and the QA engine reports the ID on every affected page. **While these defects remain, a page that uses an affected component cannot be reported as fully DGA Exact compliant** (core 0.0.52 and 0.0.53). The opt-in dropdown layer fixes keyboard/ARIA only where a project turns it on; the vendor defect remains open.

The table shows the defects with the largest impact. All 60 recorded defects are in the registry linked below.

| ID | Component | Summary | Toolkit workaround | Severity | Status in 0.0.53 |
|---|---|---|---|---|---|
| PKG-BTN-01 | DgaButton/V2 | Secondary(-Solid) Hovered/Pressed background transparent (CSS var typo '-hoverd', missing '-default-selected') | none in lib (do not restyle); report as DEVIATION | High | not re-tested |
| PKG-BTN-02 | DgaButton/V2 | Pressed uses Selected tokens |  | Medium | not re-tested |
| PKG-BTN-03 | DgaButton/V2 | No Selected state / aria-pressed API |  | Medium | not re-tested |
| PKG-BTN-04 | DgaButton | Secondary-Outline default border #e5e7eb (Figma #d2d6db) |  | Medium | not re-tested |
| PKG-BTN-05 | DgaButton | Primary Focused lacks inner white ring |  | Medium | not re-tested |
| PKG-BTN-06 | DgaButton | v1 label line-height normal |  | Low | not re-tested |
| PKG-BTN-07 | DgaButton/V2 | Icon-only without label → English 'Button with icon' | lib DgaIconButton / requireAccessibleName (label required) — verified in React/Angular/vanilla | Medium | not re-tested |
| PKG-BTN-08 | DgaButton | Children text dropped (no slot) | use label; validateProps warns | Medium | not re-tested |
| PKG-BTN-09 | DgaButton | Redundant role=button |  | Low | not re-tested |
| PKG-REACT-01 | platformscode-new-react | ~4.1 MB bundle (imports all components) + global core.css |  | Medium | not re-tested |
| PKG-CORE-01 | dependency tree | two @platformscode/core copies when the app pins a different version than platformscode-new-react | pin core to 0.0.52 with platformscode-new-react@0.1.45 | Medium | not re-tested |
| PKG-ICON-01 | dga-icon | icons need addIcons registration or an asset path; loader has no setAssetPath → 'Invalid base URL' | lib createIconRegistry (central addIcons) | High (setup) | not re-tested |
| PKG-ICON-02 | dga-icon | arrow/chevron auto-mirroring via :host-context([dir=rtl]) — contradicts Figma Button and leaks into nested LTR | iconProps(...) sets flipRtl:false (MIRROR-* PASS in 3 frameworks) | Medium | not re-tested |
| PKG-ICON-03 | dga-icon | URI-encoded data URLs fail ('Could not parse svg'); only raw ';utf8,<svg…>' works | lib hugeiconToDataUrl emits raw SVG / lib/core/icons.js validateIconData() now refuses encoded/unsafe payloads before ad | Low | not re-tested |
| PKG-ICON-04 | dga-icon (in dga-dropdown) | dga-icon renders role=img without an accessible name (axe role-img-alt serious) — dropdown chevrons; every page shows 6–19 nodes (nav header, dig | page-authored icons: aria-hidden or a label; package-internal icons cannot be fixed from outside; DGA Exact NOT complian | Serious (axe) | persists |
| PKG-DD-01 | dga-dropdown | host dir is copied from document.documentElement — a dropdown inside dir=ltr in an RTL page renders RTL | OPT-IN compat layer lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): add | Medium | persists |
| PKG-DD-02 | dga-dropdown | trigger has no aria-expanded / aria-haspopup | OPT-IN compat layer lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): add | Medium (a11y) | persists |
| PKG-DD-03 | dga-dropdown | no arrow-key navigation (ArrowDown does not move into options; no keydown handler in source) | OPT-IN compat layer lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): add | High (a11y) | persists |
| PKG-DD-04 | dga-dropdown | Escape does not close the open list | OPT-IN compat layer lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): add | Medium (a11y) | persists |
| PKG-NG-01 | platformscode-new-angular@2.0.0 | peer @platformscode/core 0.0.17 → ERESOLVE with 0.0.52; wrapper inputs do not match core API ('text' vs label); elements not defined by the module | use core custom elements directly (lib/angular) | High | not re-tested |
| ENV-HUGE-01 | @hugeicons/core-free-icons index import | importing named icons from the package index made esbuild run out of memory (5 GB) in the Angular build | deep default imports | Medium (build) | not re-tested |
| PKG-FOOTER-01 | DgaFooter | :host { width: fit-content } — footer does not fill the page unless the host is sized by the page | host-level CSS only: .ah-footer > dga-footer { width: 100% } (lib/patterns/patterns.css); no inner restyle | Medium | not re-tested |
| PKG-FOOTER-02 | DgaFooter | section.footer-content has a 434px minimum width → horizontal page scroll at 390px in LTR (RTL clips it) | none without patching the package; reported as R1/N2 FAIL (package-owned) | High | not re-tested |
| PKG-FOOTER-03 | DgaFooter | mainImage renders an <img>/link with no alt / accessible-name prop | pass a logo only together with a descriptive mainLinkTilte; otherwise omit the image | Medium | not re-tested |
| PKG-LINK-01 | DgaLink | iconType / icon prop printed as raw text instead of rendering an icon | icon={false}; put icons outside the link | Medium | not re-tested |
| PKG-METRIC-01 | DgaMetric | featuredIcon prop printed as raw text | showFeaturedIcon={false} | Medium | not re-tested |
| PKG-METRIC-02 | DgaMetric | change indicator value is hard-coded: Math.abs(100) + '%' — always shows '100%' with a trend arrow regardless of data | showInfo={false} so no invented trend is displayed; also min-width 360px on the host — use grid minmax(min(100%,360px),1 | High | not re-tested |
| PKG-SEARCH-01 | DgaSearchBox | search button (.dga-search-box__search-btn) has no accessible name → axe button-name critical | none from outside the shadow root; DGA Exact cannot be claimed while present | Critical (a11y) | not re-tested |
| PKG-NAV-01 | DgaNavHeader / DgaNavHeaderMenu / DgaNavHeaderLink | menu list markup: <li> rendered by dga-nav-header-link is not a direct child of the <ul> (custom element in between) → axe list / listitem serious | none from outside the components | Serious (a11y) | not re-tested |
| PKG-CARD-01 | DgaCard | card title heading level is fixed (h4) — cannot follow the page outline | keep an h2/h3 above each card grid (SectionHeading) so the outline has no skips | Low | not re-tested |
| PKG-CARD-02 | DgaCard | host shrink-wraps to content width (Figma Card = fill container) | host-level CSS: .ah-cards dga-card { display:block; width:100% } | Medium | not re-tested |
| PKG-DIGSIG-01 | DgaDigitalSignature | LTR variant link text (.digital_link) fails colour contrast (axe color-contrast serious); dga-icon inside has role=img without a name | none from outside | Serious (a11y) | not re-tested |
| PKG-TEXTAREA-01 | DgaTextarea | label rendered without for/id association to the <textarea> (shadow DOM) → axe label critical | none from outside the shadow root | Critical (a11y) | not re-tested |
| PKG-ALERT-01 | DgaInlineAlert | close button (.dga-btn--close) has no accessible name → axe button-name critical | hide the close button when the alert is informational (if the prop exists in the project's version) or accept the DEVIAT | Critical (a11y) | not re-tested |
| PKG-ALERT-02 | DgaInlineAlert / DgaList | title heading levels are fixed (inline alert h4, list title h3) | keep an h2 above them so the outline stays h1→h2→h3→h4 | Low | not re-tested |
| PKG-RADIO-01 | DgaRadioButton | radio border colour #6c727e is not in dga-tokens.json/css (package light DOM) | none; counted separately from page-authored colours | Low | not re-tested |
| PKG-ACCORDION-01 | DgaAccordion | header row 60px vs Figma Accordion Large header 56px | none; DEVIATION | Low | not re-tested |
| PKG-ACCORDION-02 | DgaAccordion | defaultExpanded item: body max-height computed before layout (48px) is smaller than the content (56px) → clipped text (reproduced in vanilla + Angular, not in React) | toggle the item after componentOnReady instead of defaultExpanded, or accept the clip; not a CSS recreation | Medium | not re-tested |
| PKG-ALERT-03 | dga-inline-alert | `title` prop is declared in the component API (string, optional) but never rendered; the visible heading (h4.alert__title) is `leadText` and the body is `helperText` | pass the heading as `leadText` and the body as `helperText`; never rely on `title` | medium | not re-tested |
| PKG-BUNDLE-01 | platformscode-new-react (all wrappers) | importing a single React wrapper (e.g. DgaButtonV2) pulls the whole component set into the bundle: 4.03 MB raw / ~598 KB gzip JS for one button (React alone: 46 KB gzip). | for strict budgets register only the used tags from `@platformscode/core/components/<tag>.js` (vanilla/Angular path) and | medium | not re-tested |
| PKG-ACCORDION-03 | dga-accordion | an item rendered with defaultExpanded=true can never be collapsed: componentDidRender() re-assigns isOpen = defaultExpanded after every render, undoing handleAccordionCli | do not use defaultExpanded; render all items collapsed (DEVIATION from frames that show the first item open) — also avoi | high | not re-tested |
| PKG-INPUT-02 | dga-text-input | native input is not programmatically labelled (axe `label`), the `error` state does not set aria-invalid and the helper/error text is not linked with aria-describedby | add the label/description outside only if the package exposes no hook; otherwise report — do not patch shadow DOM. FormP | high | FIXED in @platformscode/core 0.0.53 |
| PKG-TABS-01 | dga-tabs | tabs render as <a> items without role=tablist/tab/aria-selected; Arrow keys do not move between tabs and Enter on a focused tab does not activate it (mouse click works) | for keyboard-critical tab UIs use a page-authored tablist following the APG pattern or link-based navigation; record as  | high | persists |
| PKG-MODAL-01 | dga-modal | dialog is opened with the `open` attribute (not showModal): no focus move into the dialog, no focus trap, no accessible name (aria-labelledby), Escape does not close it | manage focus in the host app (move focus to the dialog title on open, return it on close) and close on Escape from a hos | high | persists |
| PKG-MODAL-02 | dga-modal | `featuredIconProps` is optional in the typings but render() reads its fields → TypeError "reading 'name'" when omitted | always pass featuredIconProps { size, color, variant } | medium | FIXED in @platformscode/core 0.0.53 |
| PKG-ALERT-04 | dga-inline-alert | no role=alert/status and no live region — the only role inside is the icon (img); alerts inserted later are not announced | wrap dynamic alerts in an aria-live region (AlertStack / FormPattern already do) | medium | persists |

Machine-readable source with evidence: [`dga-skills/registry/packages.json`](../dga-skills/registry/packages.json). Report package problems to the `@platformscode` maintainers (see the `bugs` / repository fields of each npm package).

