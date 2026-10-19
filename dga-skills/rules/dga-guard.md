# DGA compliance gate — official controls are copied, not reinvented

Primary source: `references/dga-live/INDEX.md` (all 24 DGA Platforms Code files).

## The fidelity rule
When the user asks for any DGA component ("اعمل dropdown", "زرار", "tabs"…), the output must match the Figma component:
1. **Same variant axes** — every option listed under `### Properties` (Size, Style, State, RTL, Error, Filled…). Don't drop states, don't add new ones.
2. **Same values per state** — take each state's colours/borders/shadows/underline from `### State changes` (they are diffs against Default, with the exact token name and hex).
3. **Same structure** — follow `### Anatomy` (layer order, padding, gap, radius, icon sizes).
4. **Same motion** — follow `### Interactions & motion`: trigger → state change → transition. `INSTANT` means NO CSS transition. `SMART_ANIMATE 150ms EASE_OUT` means exactly that. Map with `references/dga-live/MOTION.md`. Never add hover animations the file doesn't have.
5. **Tokens, not hex** — use `--dga-*` from `references/dga-live/foundations/dga-tokens.css`; the token names in the spec (e.g. `Form/field-border-hovered`) map 1-to-1 to CSS names (`--dga-form-field-border-hovered`).
6. **RTL** — RTL=True variants mirror RTL=False; implement with logical properties (`padding-inline`, `inset-inline-start`), and verify both directions.

## Verification tags (one per significant assertion)
- **[LIVE: dga-live/<path>#<section>]** — value read from the live extraction. Default for everything DGA.
- **[LIVE-DATA: data/<platform>/<slug>.json]** — value taken from the raw JSON (not shown in .md).
- **[AHMED HOUSE]** — our own decision where DGA defines nothing (listed below).
- **[UNKNOWN]** — not in any source. Never fill with a guess presented as official.

## What DGA genuinely does NOT define (house decisions allowed, must be labelled)
- **Pixel breakpoints.** Figma defines *modes* (Desktop / Tablet / Mobile) and grids (12 col gutter 24 margin 112 · 6 col gutter 32 margin 32 · 4 col gutter 16 margin 16) but no px switch-points. House default: tablet ≤1023px, mobile ≤767px.
- **Toast auto-dismiss duration** — description says "disappearing after a set duration" with no number.
- **Icons** — official icon file is temporarily empty (DGA notice). Use icon names from component anatomy.
- **Motion for components with zero reactions**: Avatar, Charts, Divider, List, Progress Bar, Quote, Radial Stepper, Slider, Tags (web) — static by design; don't animate them unless the user asks (then [AHMED HOUSE]).
- **Keyboard focus behaviour beyond the drawn Focused state** — Figma shows the visual; ARIA/keyboard semantics follow WAI-ARIA APG, tagged [AHMED HOUSE].

## Corrections vs. the old snapshot (old claims that were WRONG)
- "No dark theme" → **wrong**: Themes collection has Light + Dark (200 tokens differ).
- "No motion in Figma" → **wrong**: 2,449+ prototype reactions on web components (hover/press/click/timeout) with explicit transitions.
- "Web Button/Tabs/Link/Breadcrumb/… unknown" → now fully extracted.
- "Only Home template" → all 20 templates extracted with their instruction pages.

## Identity & legal
Preserve masthead/Digital Stamp/footer requirements exactly as in `web/digital-stamp.md` and `web/ui-shell-*.md`. Never invent official claims or logos.
