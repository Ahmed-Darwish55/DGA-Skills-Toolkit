# Prompt examples

Copy-ready prompts for testing DGA Skills Toolkit 5.0.3 in Claude Code or Claude Desktop / Cowork.

- **Part 1** has twelve full project prompts. Each one gives context, requirements, the deliverables to expect and how to verify them.
- **Part 2** has short [behaviour checks](#behaviour-checks) that confirm the skill follows its own rules: onboarding order, one site configuration, honest QA.

## How to use these prompts

1. Use a **new project folder** (or a new Cowork task) for each prompt, so earlier saved choices do not interfere.
2. Paste the prompt as it is. The skill keeps its normal onboarding: on the first UI request in a project it asks for the **design mode**, then for the **technology** (unless the prompt already names it). Each prompt lists the answers it was written for.
3. Check the result against the prompt's **Verify** list. Record each item as PASS, FAIL or NOT VERIFIED.

What to expect in general:

- Scaffolds and generated skeletons are a **starting point**, not production-ready pages. Eleven of the 20 DGA templates are generated as skeletons; see [TEMPLATES.md](TEMPLATES.md).
- The toolkit reports known defects of the `@platformscode/*` packages by ID (`PKG-…`). With the current package versions, a page that uses an affected component cannot be reported as fully DGA Exact compliant. See [KNOWN-LIMITATIONS.md](KNOWN-LIMITATIONS.md).
- Sample names and numbers are placeholders. Replace them with your organisation's real content.

---

## Part 1 — Project prompts

### 1. Saudi government portal homepage

Onboarding answers: **DGA Exact** · **React**

```text
Build the homepage of a government entity portal using the DGA Home Page template.

Context: The entity is "Sample Government Entity" (الجهة الحكومية النموذجية). Visitors are citizens, residents and businesses looking for e-services, news and contact information. Arabic is the primary language; English must also work.

Requirements:
- One site configuration (createSiteConfig) for identity, navigation, header actions, footer and theme. The homepage must not set its own header or footer design.
- Navigation order: Home, Services (with a sub-menu: Individuals, Businesses), Media Center, About, Contact. Only Services shows a chevron.
- Header actions: search, language switch, sign in.
- Sections in the DGA template order: hero with a primary call to action, featured e-services as cards, key statistics, news, partners, feedback strip, footer.
- Use only real DGA components and DGA design tokens. No invented props, no colours outside the tokens.
- RTL first, then LTR. Keyboard accessible, visible focus, reduced-motion respected.

Deliverables:
1. src/site-config.js and the Home page component.
2. A short list of the DGA components used, with their source (package or reference file).
3. Results of the code-quality check, the prop guard and the visual QA, including any PKG-… defects.

Verification criteria:
- The page renders without console errors in Arabic (RTL) and English (LTR) at 1440, 1024, 768 and 390 px.
- No horizontal scrolling caused by page-authored code.
- check_dga_props reports no invented props; code_quality_check reports 0 findings.
- The QA report lists every failing gate, and package defects are named, not hidden.
```

Verify: one `createSiteConfig` module; the chevron appears only on Services; every section maps to the Home Page template; the QA report is gate by gate.

---

### 2. Government services catalogue

Onboarding answers: **DGA Exact** · **React** (or **Other → vanilla Web Components**)

```text
Build the e-services catalogue page for a government portal, following the DGA services listing pattern.

Context: The entity offers about 30 e-services for individuals and businesses. Users must find a service quickly by name, filter it and open its details page.

Requirements:
- Reuse the site configuration from the homepage (same header, navigation and footer).
- Search by service name (Arabic and English), filters by beneficiary type and category, a "clear filters" action, sorting and pagination.
- Each service card shows the name, a short description, beneficiary tags and two actions: "Start service" and "Details".
- Empty state when nothing matches, with a way to reset the filters.
- Keep the search, filter, sort and paging logic in one shared, testable module — not inside the view.
- RTL and LTR; keyboard-operable filters; result count announced to screen readers.

Deliverables:
1. The catalogue page and the shared query module.
2. Sample data for at least 9 services (placeholder content).
3. Functional test notes: search, filter, clear, paging.

Verification criteria:
- Filtering then clearing returns the full list; searching by a partial name narrows the list correctly.
- The header and footer are identical to the other pages (site-consistency check: 0 differences).
- No duplicated helpers or repeated texts (code-quality check: 0 findings).
```

Verify: logic lives in one module; the empty state works; the site-consistency check reports 0 differences.

---

### 3. Government service details page

Onboarding answers: **DGA Exact** · **React**

```text
Build a service details page for "Building Permit Issuance" using the DGA Service Page template.

Context: The page must let a citizen understand the service before starting it: who can apply, requirements, steps, fees, duration and channels.

Requirements:
- Page heading with breadcrumb and a primary "Start service" button.
- Tabs or sections for: description, requirements, steps, fees and duration, service channels, FAQs.
- A side summary with key facts (fee, duration, channels) and a contact link.
- The feedback and rating section at the bottom, as in the template.
- Same site configuration as the other pages; the page passes content only.
- RTL first; keyboard support for tabs and accordions; accessible names for every icon-only button.

Deliverables:
1. The service details page.
2. Notes on any DGA component that has a registered package defect (for example tabs or accordions) and the workaround used.
3. Visual QA results in RTL and LTR.

Verification criteria:
- The structure follows the Service Page template section by section.
- Keyboard: every interactive element can be reached and has a visible focus.
- Known package defects (for example PKG-TABS-01) are reported as FAIL or DEVIATION with their IDs, not silently worked around by restyling the package.
```

Verify: section order matches the template; defects are named; no restyling inside the DGA components.

---

### 4. Government executive dashboard

Onboarding answers: **DGA Enhanced** · **React**

```text
Design and build an executive dashboard for the leadership of a government entity.

Context: Executives review service performance weekly: number of requests, completion time, satisfaction and requests per region. The dashboard is used on desktop and tablet.

Requirements:
- DGA header and footer from the site configuration; DGA cards, metrics, tables, tabs and filters for the content.
- KPI row (total requests, average completion time, satisfaction, open requests), a trend chart, a requests-by-region table and a date-range filter.
- Charts must use DGA token colours only, have text alternatives and be readable in RTL.
- Enhanced mode: improve composition and hierarchy, and label every non-DGA addition clearly. Do not restyle DGA components.
- Do not show invented trends: if a metric component cannot show the real change value, hide the change indicator.
- Placeholder data only, kept in one data module.

Deliverables:
1. The dashboard page, its data module and chart components.
2. A list of the house additions (anything not from DGA), each labelled.
3. QA results at 1440, 1024 and 768 px, RTL and LTR.

Verification criteria:
- All colours come from DGA tokens (token lint passes).
- Charts have a text alternative or a data table.
- No layout overflow at the tested widths.
- Every house addition is listed and labelled.
```

Verify: the house additions are labelled; no invented metric changes (see PKG-METRIC-02); the token lint passes.

---

### 5. Saudi National Day page

Onboarding answers: **DGA Creative** · **React**

```text
Create a Saudi National Day campaign page for a government entity using the DGA "Saudi National Day" template.

Context: The page celebrates National Day and highlights the entity's achievements and services for citizens. It will be shared on social media and must load well on mobile.

Requirements:
- Start from the National Day template structure (generate the skeleton with tools/new_template.py --template national-day).
- Keep the DGA header and footer exactly as defined in the site configuration.
- Creative mode: art direction and scroll storytelling with GSAP/ScrollTrigger are allowed around the content, never inside DGA components.
- Original, licence-clear artwork only (no logos or the national emblem). Mark every decorative asset with its licence.
- prefers-reduced-motion must show a complete static version; the content must be readable without animation.
- Arabic first, English version included.

Deliverables:
1. The campaign page, the motion code and the asset list with licences.
2. A motion storyboard (what moves, when, and the reduced-motion fallback).
3. QA results, including reduced motion and mobile (390 px).

Verification criteria:
- DGA chrome unchanged; no national emblem or third-party logos.
- With reduced motion, no content is hidden and nothing animates.
- The page states that it is a creative page, not a DGA Exact page.
```

Verify: the skeleton comes from the National Day template; reduced motion shows everything; asset licences are listed.

---

### 6. Saudi Founding Day page

Onboarding answers: **DGA Enhanced** · **Other → vanilla Web Components**

```text
Build a Saudi Founding Day page using the DGA "Saudi Founding Day" template, as plain HTML/JavaScript with the DGA Web Components.

Context: The page tells the story of Founding Day with a short timeline, a message from the entity and links to related services. It must work without a frontend framework.

Requirements:
- Use @platformscode/core custom elements and the toolkit's vanilla builders (pageShell, siteHeader, siteFooter) with one site configuration.
- Timeline section, message section, related services as cards, and the feedback strip.
- Enhanced mode: improved composition with labelled house additions; seasonal artwork must be original and labelled.
- RTL and LTR, keyboard accessible, reduced motion respected.

Deliverables:
1. index.html, the page script and the site configuration module.
2. A list of the DGA elements and vanilla builders used.
3. QA results in RTL and LTR at 1440 and 390 px.

Verification criteria:
- No framework dependency; custom elements are defined once.
- The header and footer come only from the site configuration.
- The code-quality check reports 0 findings.
```

Verify: vanilla builders are used; seasonal art is labelled; no framework is added.

---

### 7. Hajj services portal

Onboarding answers: **DGA Exact** · **React**

```text
Build a Hajj services portal page using the DGA "Hajj" template.

Context: Pilgrims and their families need quick access to permits, transport, health guidance and emergency contacts. Many users are on mobile, and the page must work in Arabic and English.

Requirements:
- Generate the Hajj template skeleton (tools/new_template.py --template hajj) and complete it with real DGA components.
- Sections: key services (permits, transport, health), important dates, guidance articles, emergency contacts, FAQ.
- Clear, high-contrast content for mobile; touch targets of at least 44 px.
- Same site configuration as the rest of the portal.
- RTL first; every icon has an accessible name or is hidden from screen readers.

Deliverables:
1. The Hajj page built from the template skeleton.
2. A table mapping each section to the template.
3. QA results at 390 px and 1440 px, RTL and LTR.

Verification criteria:
- Every section maps to the Hajj template.
- axe findings are reported; any that come from the DGA packages are named with their PKG IDs.
- No horizontal scrolling on mobile from page-authored code.
```

Verify: the section-to-template table is complete; mobile layout passes; the skeleton is clearly completed, not presented as final without testing.

---

### 8. Bilingual Arabic/English government portal

Onboarding answers: **DGA Exact** · **React**

```text
Build a four-page bilingual portal (Home, Services, Service details, Contact Us) with a working Arabic/English switch.

Context: The entity serves Arabic and English speakers. Switching language must change the text and the direction of the whole page, and keep the user on the same page.

Requirements:
- One site configuration built per language (for example buildSiteConfig(dir)); all labels in one content module per language — no repeated strings across pages.
- dir and lang set on the document; logical CSS properties only (no left/right).
- The language action in the header switches language and keeps the current route.
- Icons that indicate direction follow the DGA rules for RTL and LTR.
- The header and footer are identical on every page in both languages.

Deliverables:
1. The four pages, the content modules and the site configuration.
2. Site-consistency results for both directions at 1440, 1024 and 390 px.
3. Screenshots of each page in Arabic and English.

Verification criteria:
- The site-consistency check reports 0 differences in both directions.
- No physical left/right CSS in page-authored code.
- Switching language keeps the current page.
```

Verify: content lives in one module per language; consistency is 0 in RTL and LTR; the language switch keeps the route.

---

### 9. ArcGIS Experience Builder dashboard

Onboarding answers: **DGA Enhanced** · **ArcGIS Experience Builder**

```text
Create DGA-styled widgets for an ArcGIS Experience Builder dashboard that shows public services on a map.

Context: The app shows service centres on a map, with a side panel for filters and a list of centres. It is used by the public in Arabic and English.

Requirements:
- A header widget and a footer widget that share one site configuration (useSiteChromeWidget), plus a filter panel widget using DGA components.
- DGA styles must be scoped to the widgets; do not load global CSS into the Experience Builder app.
- Filters: service type and region; the list updates when filters change.
- RTL and LTR; keyboard access to the panel; accessible names for map controls added by the widgets.

Deliverables:
1. The widget folders (manifest, config, widget code) and the shared site configuration.
2. Installation notes for client/your-extensions/widgets.
3. A test checklist for a real Experience Builder environment.

Verification criteria:
- The widget TypeScript compiles without errors.
- The header and footer widgets render the same configuration.
- The answer lists what must be checked in a real Experience Builder runtime.
```

Verify: styles are scoped; one configuration for both chrome widgets; the ExB limitation is stated honestly.

---

### 10. Angular government portal

Onboarding answers: **DGA Exact** · **Angular**

```text
Build an Angular government portal shell with Home, Services and Contact pages using the DGA Web Components.

Context: The team uses Angular with standalone components and the Angular router. The portal must follow the DGA header, navigation and footer exactly.

Requirements:
- provideDgaSkills and provideDgaSite in app.config.ts; one site configuration.
- Use <dga-skills-site-shell> on every page; pages pass content only and react to its navigate output with the router.
- Use @platformscode/core custom elements directly (not an outdated Angular wrapper).
- RTL first; keyboard navigation; strict TypeScript.

Deliverables:
1. app.config.ts, the routes and the three page components.
2. Build output of a strict production build.
3. QA checks for header, navigation order, chevrons and footer.

Verification criteria:
- ng build in strict mode succeeds.
- Navigation works through the navigate output.
- The header and footer are identical on all three pages.
```

Verify: strict build passes; pages do not pass header or footer design; custom elements are used directly.

---

### 11. UI/UX audit of an existing website

Onboarding answers: none needed (a review that changes nothing does not trigger onboarding)

```text
Audit the UI/UX of this existing government website project against the DGA Platforms Code and general usability practice. Do not change any code yet.

Context: The project is in the current folder. It was built before the team adopted DGA components.

Requirements:
- Find what already exists (tools/find_existing.py) before suggesting anything new.
- Check header, navigation, footer, forms, buttons, colours, typography, spacing, RTL/LTR handling and accessibility.
- For each finding, give: the page or file, the problem, the DGA reference that applies, its severity, and a recommended fix.
- Separate problems in the project's own code from defects inside third-party packages.
- Run the code-quality check and the DGA prop guard and include their results.

Deliverables:
1. An audit report ordered by severity.
2. A short migration plan to one site configuration and real DGA components.
3. A list of what could not be checked and why.

Verification criteria:
- Every finding cites a file and a DGA reference.
- No code is modified.
- Nothing is called "compliant" without evidence.
```

Verify: findings cite files and references; no files are changed; package defects are kept separate.

---

### 12. Accessibility and DGA Exact visual QA

Onboarding answers: none needed (QA only)

```text
Run a full accessibility and DGA Exact visual QA on the pages of this project and report the results gate by gate.

Context: A preview of the site is running locally. The team needs to know which problems are theirs and which come from the DGA packages.

Requirements:
- Create or update qa.config.json with all pages, widths 1440/1024/768/390 and both directions.
- Run the QA engine (tools/qa/run.mjs) and the site-consistency check (tools/qa/site-consistency.mjs).
- Include axe, keyboard and focus, 200 % zoom, reduced motion, token lint and layout overflow.
- Attribute failures caused by known package defects to their PKG IDs; never turn them into PASS.

Deliverables:
1. results.json and REPORT.md from the QA engine, with screenshots.
2. A summary table: gate, status, evidence, owner (project or package).
3. A prioritised fix list for the project's own issues.

Verification criteria:
- Every gate has a status: PASS, FAIL, DEVIATION or REVIEW REQUIRED.
- Subjective gates are REVIEW REQUIRED, not PASS.
- The report does not claim DGA certification or full compliance while package defects remain.
```

Verify: every gate has a status and evidence; package defects are attributed; subjective gates stay REVIEW REQUIRED.

---

## Part 2 — Behaviour checks

These short prompts test the skill's behaviour, not the generated code.

- Use a **new project folder** for group B so no saved choice exists, and a **new task or session** for each group.
- A check passes only if every condition holds. A check you did not run stays NOT VERIFIED.

<a id="behaviour-checks"></a>

### A. Installation and identity

| ID | Prompt | Pass when |
|---|---|---|
| T0.1 | `What version of the DGA Skills Toolkit is installed? Read it from the skill's VERSION file.` | The answer is **5.0.3**, read from `dga-skills/VERSION`. |
| T0.2 | `Run the toolkit self-check and summarise it.` | It runs `tools/self_check.py` and reports `required parts: OK; integrity: OK`, with the optional helpers' real state (INSTALLED / INSTALLED BUT DISABLED / NOT AVAILABLE). It never says "not installed" without checking. |
| T0.3 | `Is this an official DGA product?` | It says the toolkit is independent and DGA-aligned, and never calls it DGA-certified or official. |

### B. Onboarding order (new project folder)

| ID | Prompt | Pass when |
|---|---|---|
| T1.1 | `اعمل dropdown بتاع الحكومة الرقمية` | The **first** reply asks only for the **design mode** (Exact / Enhanced / Creative), with no code and no technology question yet. |
| T1.2 | *(answer)* `Exact` | The next reply asks only for the **technology** (React / Angular / ExB / Other / Auto). |
| T1.3 | *(answer)* `React` | It builds with real `DgaDropdown` props, RTL first, an accessible label and no invented props, and saves the choices in `.claude/dga-skills.json`. |
| T1.4 | `اعمل زرار أساسي بأيقونة` (same project) | It does **not** ask the mode or technology again. |
| T1.5 | `Build a DGA button` (a new project, English) | The questions come in English, in the same order. |

### C. Site-level consistency (5.0.3)

| ID | Prompt | Pass when |
|---|---|---|
| T2.1 | `Build a React site with Home, Services, Service details and Service application pages, one shared header and footer.` | One `createSiteConfig(...)` module and one `<SiteProvider>`. No page passes `logo`, `links`, `secondNav`, `background` or `footerBackground`. |
| T2.2 | `The menu order must be: الرئيسية، الأخبار، الخدمات، عن الجهة. Only الخدمات has a sub-menu.` | Only `navigationItems` changes (the order). The chevron appears only on «الخدمات». It does not attribute the order to Figma. |
| T2.3 | `Make the home page footer light and the other pages dark.` | It explains that the footer variant is site-wide (`theme.footerVariant`) and offers to change it **for the whole site**. It does not add a per-page override. |
| T2.4 | `Use #00AA55 as the brand colour.` | It refuses raw colours for the theme and proposes a DGA token reference (`var(--…)`) in `theme.brandColors`. |
| T2.5 | `Remove the search button from the header and put sign-in first.` | It changes `header.actions` (e.g. `['signIn', 'language']`) in the site configuration, not in a page. |
| T2.6 | `Check that the header and footer are identical on all pages.` | It runs or proposes `tools/qa/site-consistency.mjs`, and reports the differences, or 0. |

### D. Code quality (5.0.3)

| ID | Prompt | Pass when |
|---|---|---|
| T3.1 | *(after any build)* `Did you check the code quality?` | It ran `tools/code_quality_check.py --path <src>` and reports the findings, or 0. It fixes findings before reporting the work as done. |
| T3.2 | `Add a function that formats the service date.` | The name is descriptive camelCase (e.g. `formatServiceDate`). There are no 1–2-letter or abbreviated names, and the helper is not duplicated across files. |
| T3.3 | `The same label appears on three pages — is that OK?` | It moves the text to one content / labels module (the DUP-TEXT rule). |

### E. Templates and references (nothing lost)

| ID | Prompt | Pass when |
|---|---|---|
| T4.1 | `List the DGA page templates you can build.` | 20 templates, including Hajj, National Day, Founding Day, Home, Service, FAQ, Search and Contact, answered from the bundled references with no Figma visit. |
| T4.2 | `اعمل صفحة يوم التأسيس` | It uses the Founding Day template, keeps the DGA chrome, marks seasonal art as `[AHMED HOUSE]`, and asks for the mode and technology if they are not saved yet. |
| T4.3 | `What are the variants of the DGA tabs component?` | The answer comes from `references/dga-live`. It never asks you to upload SKILL.md or reference files. |

### F. Honesty and package defects

| ID | Prompt | Pass when |
|---|---|---|
| T5.1 | `Run the visual QA on the home page and tell me if it is DGA compliant.` | It reports gate by gate. Vendor problems are attributed by ID (e.g. PKG-NAV-01, PKG-ICON-04) and stay FAIL; they are never turned into PASS. |
| T5.2 | `Fix the dga-nav-header bug inside node_modules.` | It refuses to modify `node_modules` and offers the documented workaround or CSS in the project. |
| T5.3 | `Install everything automatically in Cowork.` | It explains the platform limit (a skill cannot install other skills in Cowork) and uses the built-in fallback. It does not ask you to run manual setup steps. |

### G. Cowork-specific (after uploading the ZIP)

| ID | Check | Pass when |
|---|---|---|
| C1 | Upload `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` | It is accepted (167 files, 10.6 MB unpacked, one SKILL.md). |
| C2 | Turn the skill on and run T1.1 in a new task | The design-mode question comes first. |
| C3 | `Print references/dga-live/web/buttons.md exactly` | It uses `tools/dga_res.py cat …` (lossless edition) and the SHA-256 is verified. |
| C4 | Turn a helper skill off, then run T0.2 | It reports "installed but disabled" or "not available in this session", never "not installed". |

Record the results in a copy of this table. Until C1–C4 have been run, the release status for Cowork stays **NOT VERIFIED**.
