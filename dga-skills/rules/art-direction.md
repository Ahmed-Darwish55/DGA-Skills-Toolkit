# Frontend visual direction — non-generic proof
**Select the hero idea before hero markup.** Write one-line thesis tied to the domain and one signature visual motif with a *semantic* reason.
Audit 8 dimensions: (1) scene focal point (2) crop and depth (3) exact typographic rhythm (4) negative space (5) visual tension/asymmetry (6) image truth (7) interaction clarity (8) recognizable brand expression.
Before coding any major section: prepare an isolated visual prototype with real typography, image composition, actual desktop and mobile crops, states and content. A static concept is acceptable ONLY if labeled static; do not claim motion from a screenshot.
Anti-patterns: generic full-screen photograph + two buttons, identical rounded cards everywhere, meaningless wavy lines, green wash hiding image, decorative 3D, fake maps/geographies, gimmicky glass, low-contrast overlay copy, giant empty sky.
Promote a concept when it has a specific compositional signature (e.g. a grounded split-surface ecological cross-section), functional interactions and a convincing responsive plan.
When proposing visuals for Arabic RTL, evaluate shapes and reading order in Arabic first; correct letterjoining and use approved IBM Plex Sans Arabic. No forced letterspacing on Arabic.
Single visual review: compare reference vs screenshot at equal viewport; list top five VISUAL faults by impact, not a checklist of CSS rules. Iterate until no major faults remain.

## Arabic RTL — enforced here, not by upstream
Upstream datasets have no RTL rows (verified). The following are Ahmed/DGA requirements and apply regardless of upstream output:
- Arabic is the primary language; design and screenshot the Arabic/RTL view first, then LTR.
- Typeface: IBM Plex Sans Arabic for Arabic and Latin, weights 400/500/600/700 `[DGA SNAPSHOT: 01-foundations.md §5]`. No upstream font pairing replaces it.
- `letter-spacing: 0` on Arabic; the −2% Display tracking is Latin-only. Never force uppercase or tracking on Arabic.
- Logical CSS properties only (`margin-inline-start`, `inset-inline-end`…); mirror directional icons; wrap Latin identifiers and numbers in `<bdi>`; Western digits `[DGA SNAPSHOT: 06-skill/SKILL.md §1.10]`.
- Compositions must be judged in Arabic reading order (right-to-left focal flow); a hero that only works LTR is rejected.
- Motion direction mirrors with `dir` (ScrollTrigger/x-translations use the inline axis sign, verified in RTL).
