# React adapter — tested (React 18.3.1 + platformscode-new-react 0.1.45 + @platformscode/core 0.0.52)

Runnable example: `tests/integration/react/src/main.jsx` (Vite build + 49 Playwright checks).

```bash
npm i platformscode-new-react@0.1.45 @platformscode/core@0.0.52 @platformscode/icons@0.0.11 @hugeicons/core-free-icons@4.3.5   # with user approval
python3 ${CLAUDE_SKILL_DIR}/tools/find_existing.py --project .
python3 ${CLAUDE_SKILL_DIR}/tools/copy_lib.py --framework react --dest src/dga-skills
```
```jsx
import { addIcons } from '@platformscode/core/components';
import { DgaButton, DgaDropdown } from 'platformscode-new-react';          // real components, not wrapped
import { arrowRight02Stroke, search01Stroke } from '@platformscode/icons';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';            // fallback, deep import
import { DgaProvider, DgaIconButton, useButtonIcon, useDirection, useReducedMotion } from './dga-skills/react/index.js';

<DgaProvider addIcons={addIcons} primary={{ arrowRight02Stroke, search01Stroke }} fallback={{ Tick02Icon }}
             icons={['arrow-right-02', 'search-01', 'tick-02']}>
  <App />
</DgaProvider>

function Toolbar() {
  const icon = useButtonIcon();
  return <>
    <DgaButton variant="primary-brand" size="md" label="متابعة" {...icon('arrow-right-02', { size: 20 })} onOnClick={next} />
    <DgaIconButton icon="search-01" label="بحث" variant="primary-brand" />
    <DgaDropdown label="المدينة" options={[{ name: 'الدمام', value: 'dmm' }]} onChange={(v) => setCity(v)} />
  </>;
}
```
Rules: text via `label` (children ignored) · events `onOnClick` · `onChange` on DgaDropdown is a prop callback · verify with `tools/check_dga_props.py` · bundle ≈ 4 MB because the package imports all components (PKG-REACT-01) — for size-critical apps use the vanilla adapter (custom elements, per-tag imports).

## Opt-in dropdown accessibility layer
```jsx
const ref = useRef(null);
const a11y = useDropdownA11y(ref, { enabled: true });      // off unless you pass enabled
<DgaDropdown ref={ref} label="City" options={options} value={v} onChange={setV} />
```
`a11y` reports `{ open, expanded, haspopup, options, dir }` or `{ applied:false, reason }` when the package anatomy is not the 0.0.52 one. See `rules/package-integration.md` for when this is acceptable.

