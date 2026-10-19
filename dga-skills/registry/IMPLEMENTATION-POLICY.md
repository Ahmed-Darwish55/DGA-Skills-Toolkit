# DGA matching policy

1. Discover the project's framework and any installed official DGA component package (`rules/project-detection.md`). Never install/replace dependencies without approval.
2. Installed official package → use it, and verify its states/motion against `references/dga-live/<platform>/<component>.md`.
3. No package → build from the live spec following `rules/component-contract.md` (properties, anatomy, per-state values, motion).
4. Tag every value: [LIVE] / [LIVE-DATA] / [AHMED HOUSE] / [UNKNOWN].
5. Pixel-fidelity claims require screenshots of each state compared to the Figma variant (link at top of each spec), in RTL and LTR.
6. Experience Builder: keep styles scoped to the widget; no global CSS leakage.
