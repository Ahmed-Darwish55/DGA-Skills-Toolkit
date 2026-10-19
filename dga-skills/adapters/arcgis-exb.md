# ArcGIS Experience Builder adapter — template + simulation tested; real ExB runtime NOT VERIFIED

Template: `lib/exb/widget-template/` (manifest.json, config.json, package.json, src/runtime/widget.tsx).
Simulation: `tests/integration/exb-sim` renders the widget with React 18 and a **stub** `jimu-core` (16 checks PASS, runtime NOT VERIFIED).

```bash
cp -r ${CLAUDE_SKILL_DIR}/lib/exb/widget-template client/your-extensions/widgets/dga-skills-demo
cd client && npm i @platformscode/core@0.0.52 @platformscode/icons@0.0.11 @hugeicons/core-free-icons@4.3.5   # with approval
python3 ${CLAUDE_SKILL_DIR}/tools/copy_lib.py --framework exb --dest your-extensions/widgets/dga-skills-demo/src/dga-skills
```
Why this shape:
- React comes from `jimu-core` — never import `platformscode-new-react` (it would bring its own React usage expectations and global CSS).
- `DgaElement` sets objects (leadIconProps, options) as DOM properties (React 18 would stringify them as attributes).
- `useDgaWidget(rootRef, { cssVars, defines, addIcons, primary, fallback, icons })` defines elements and registers icons once per page, and applies DGA CSS variables to the widget root only (`api/core-css-vars@<v>.json`, 695 variables for 0.0.52) — no global `core.css` (verified: no variable on `<html>`).
- Map/view ownership untouched; keep widget CSS scoped.
To verify on a real ExB: build the client, add the widget to a page, run the same checks as `tests/integration/exb-sim/tests/exb.spec.js` against the builder preview.
