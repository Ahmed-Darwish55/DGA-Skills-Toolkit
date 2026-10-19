# DGA Component Contract — build it exactly like the Figma component

Before writing code for any DGA component:

1. **Project check** — framework/version, and whether an official DGA component package is already installed (`rules/project-detection.md`). If it is, use it and verify it against the live spec; if not, build from the spec below.
2. **Open the spec** — `references/dga-live/INDEX.md` → `web/<component>.md` (or `mobile/…`). Read in this order:
   - `### Properties` → your component API (props = variant axes + booleans + text + icon slots).
   - `### Anatomy` → DOM structure, padding, gap, radius, sizes.
   - `### Variant matrix` → size/style differences.
   - `### State changes` → exact per-state styles (token + hex).
   - `### Interactions & motion` → which trigger moves to which state and with which transition.
3. **Write a state table** in your plan before coding: rows = states present in Figma (e.g. Default, Hovered, Pressed, Focused, Read-only, Disabled + Error axis), columns = background / border / text / icon / shadow / underline / transition. Every cell must cite the spec. `pressed` (momentary, `:active`) ≠ `selected` (persistent, `aria-pressed/aria-selected`).
4. **Map states to CSS/ARIA**: Hovered→`:hover`, Pressed→`:active`, Focused→`:focus-visible` (inputs: `:focus-within` on wrapper), Disabled→`:disabled`/`aria-disabled`, Read-only→`[readonly]`, Error→`aria-invalid="true"`, Selected→`aria-selected/aria-pressed/aria-current`, Open (dropdown/menu)→`aria-expanded="true"`.
5. **Motion**: copy the transition from the spec (e.g. dropdown open = `SMART_ANIMATE 150ms EASE_OUT`; hover/press = INSTANT). Respect `prefers-reduced-motion` (drop to instant) — [AHMED HOUSE] a11y requirement.
6. **Tests before "done"**: keyboard (Tab, Enter/Space, Esc, arrows where relevant), hover, press, focus-visible, disabled, error, RTL + LTR, dark theme if the product uses it. Screenshot each state and compare to the Figma variant (link at top of every spec). No visual PASS without screenshots.
7. If the spec lacks something, say so and tag it `[UNKNOWN]` or `[AHMED HOUSE]` — never present a guess as official.
