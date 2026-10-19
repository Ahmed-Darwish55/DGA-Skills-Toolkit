# Design Modes — DGA Exact · DGA Enhanced · DGA Creative

Every UI task runs in exactly one mode. The mode is chosen by the user (see `rules/onboarding.md`) and saved per project in `.claude/dga-skills.json`. The mode decides **what may change** and **which QA gates must pass** before anything is called done.

Common to all three modes (non-negotiable):
- DGA UI chrome (buttons, inputs, dropdowns, tabs, checkboxes, alerts, modals, header/stamp/footer) always follows `references/dga-live/` specs: same variant axes, same per-state values, same anatomy, tokens from `foundations/dga-tokens.css` (`rules/dga-guard.md`, `rules/component-contract.md`).
- Real compatible DGA component packages are preferred over CSS recreations when the project has them installed (`registry/IMPLEMENTATION-POLICY.md`). Known package defects are cited, never hidden (`rules/policies.md` D5).
- IBM Plex Sans Arabic; Arabic RTL first, then LTR; logical CSS properties; keyboard access; `prefers-reduced-motion` fallback.
- Every value carries a source tag: `[LIVE]`, `[LIVE-DATA]`, `[PROJECT]`, `[AHMED HOUSE]`, `[UPSTREAM DESIGN ADVICE]`, `[UNKNOWN]`.
- **Compliance language.** Never write "DGA compliant", "100 % DGA", "matches Figma exactly" or "official" unless the evidence listed for that mode exists in the task's report. Until then write: `DGA Exact — target; fidelity NOT VERIFIED (pending state screenshots)`.

---

## 1. DGA Exact (`dga-exact`)

**Purpose:** government services, forms, portals and any screen that must look like the official Platforms Code library.

| Area | Rule |
|---|---|
| Components | Only DGA components, only their Figma variants/states **that the installed package supports**. No new variants, no restyling, no wrappers that add states. A Figma state the package lacks is reported as `DEVIATION (PKG-…)` and the user is asked — never implemented silently. |
| Tokens | Only `--dga-*` tokens. Zero hard-coded hex/px values that have a token. |
| Layout | Page structure from `references/dga-live/templates/<slug>.md` when a template matches; DGA grid (12/6/4 columns). Breakpoint px values are `[AHMED HOUSE]` (tablet ≤1023, mobile ≤767) and must be labelled. |
| Motion | Only motion present in the spec (`### Interactions & motion`, `MOTION.md`). `INSTANT` = no transition. No GSAP, ScrollTrigger, Three.js, parallax or decorative animation. |
| Imagery | Real project/entity assets only; no decorative illustration added. |
| Upstream skills | May be consulted for UX/IA questions only; their visual output is not applied. |

**QA gates (all required before "done"):**
- E1 State table per component with citations to the spec (`rules/component-contract.md` §3).
- E2 Screenshots of every implemented state (Default, Hovered, Pressed, Focused, Disabled, Error/Selected where they exist), RTL and LTR, next to the Figma variant reference.
- E3 Token lint: no colour/spacing/radius literal outside `dga-tokens.css` (list any exception).
- E4 Keyboard: Tab order, Enter/Space, Esc, arrows where the pattern needs them; visible focus.
- E5 Motion check: no transition where the spec says INSTANT; reduced-motion verified.
- E6 Compliance statement: per component `MATCHED (measured)` / `DEVIATION (#issue)` / `NOT VERIFIED`. A component with a known package defect (e.g. Secondary hover background) is reported as DEVIATION even when the package is official-looking.

## 2. DGA Enhanced (`dga-enhanced`)

**Purpose:** public-facing pages that must stay recognisably DGA but need stronger storytelling, hierarchy and polish (landing pages, campaign pages, dashboards for executives).

| Area | Rule |
|---|---|
| Components | DGA components unchanged (as in Exact). |
| Composition | House patterns allowed between components: hero, section headings, statistics blocks, editorial layouts — labelled `[AHMED HOUSE]`, built from DGA tokens. |
| Tokens | DGA tokens for all UI chrome. Extra values (e.g. a hero image overlay gradient) allowed only outside components, declared as house tokens `--ahmed-*` with a reason. |
| Motion | Spec motion inside components; house motion around them (reveal, stagger, ScrollTrigger narrative) per `rules/motion-engineering.md`, only if GSAP is installed or approved. Static, readable content without JS. |
| Upstream skills | UI/UX Pro Max + Frontend Design may drive composition, narrative and motion presets; fonts/palettes from upstream remain rejected for chrome (`rules/orchestration.md` §4). |

**QA gates:** E1–E6 for every DGA component used **plus**
- N1 Storyboard for each motion (element, trigger, duration, reduced-motion state, cleanup).
- N2 Screenshots at 1440 / 1024 / 768 / 390, RTL and LTR.
- N3 `prefers-reduced-motion` run showing the static state.
- N4 House-value inventory: every `--ahmed-*` value and every `[AHMED HOUSE]` pattern listed.
- N5 Performance note: no layout shift from motion; lazy-loaded heavy media.

## 3. DGA Creative (`dga-creative`)

**Purpose:** showcase, campaign, competition, storytelling and 3D/GIS narrative experiences where art direction leads, while government identity and controls stay correct.

| Area | Rule |
|---|---|
| Components | Interactive controls (buttons, inputs, links, navigation, forms, alerts) are still DGA components. Decorative and narrative layers are free. |
| Identity | Header/stamp/footer identity elements preserved on public pages (`rules/dga-guard.md` §Identity). |
| Art direction | Full work algorithm A–G in `SKILL.md`: 3 contrasting concepts, visual prototypes, judged with `rules/visual-qa.md`, user approval via `templates/visual-approval.md`. |
| Motion / 3D | GSAP, ScrollTrigger, Three.js allowed when installed or approved, with poster fallback, device gate, disposal and reduced motion (`rules/motion-engineering.md`). |
| Palette / type | IBM Plex Sans Arabic still required for text. Scene colours, illustration and photography grading may go beyond DGA tokens; UI chrome may not. |

**QA gates:** E1–E5 for every DGA control used, N1–N5, **plus**
- C1 Three concept previews (or a documented user exemption) and the filled `templates/visual-approval.md`.
- C2 Visual score with `rules/visual-qa.md`; originality/composition ≤ 2 → redesign.
- C3 Screen recording or test notes for motion/3D; WebGL failure fallback shown.
- C4 Asset licence list for every image, model and font.
- C5 Statement that this is a creative DGA-based experience, **not** a DGA Exact screen.

---

## Choosing between modes (guidance to give the user)

| If the screen is… | Suggest |
|---|---|
| a service flow, form, account area, internal admin tool | DGA Exact |
| a public landing/home page, executive dashboard, information page | DGA Enhanced |
| a campaign, competition entry, national-day page, 3D/GIS story | DGA Creative |

The user's choice always wins. Changing mode later is allowed (`rules/onboarding.md` §Change); work already delivered is not silently restyled — list what would change and ask.

## Automated gate evidence
`tools/qa/run.mjs` (see `tools/qa/README.md`) produces `REPORT.md` per page with one line per gate: **PASS / FAIL / DEVIATION** are measured; **REVIEW REQUIRED** marks the subjective gates (E1 written state table, N1 storyboard, C1 concept previews, C2 visual score, C3 motion/3D notes, C5 statement) — the engine attaches the evidence (screenshots, state measurements) but a human signs them. Failures caused by `@platformscode` defects are attributed (`⟵ package: PKG-…`, `registry/packages.json`) but still FAIL: the verdict for a DGA Exact page is "NOT compliant" until every required component passes.
