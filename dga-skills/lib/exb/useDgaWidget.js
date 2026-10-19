// One hook per widget: defines the DGA custom elements, registers icons centrally, applies DGA CSS tokens to the
// widget root ONLY (no global core.css), and exposes direction + reduced motion for the widget subtree.
import { React } from 'jimu-core';
import { setupDgaWeb } from '../vanilla/index.js';
import { extractRootCssVariables, applyCssVariables } from '../core/elements.js';
import { getDirection, observeDirection } from '../core/direction.js';
import { prefersReducedMotion, onReducedMotionChange } from '../core/motion.js';

let shared = null;   // custom elements + icon map are global per page; set up once for all widgets

export function useDgaWidget(rootRef, { cssVars, coreCss, ...setupOptions }) {
  if (!shared) shared = setupDgaWeb(setupOptions);
  const [dir, setDir] = React.useState('rtl');
  const [reduced, setReduced] = React.useState(() => prefersReducedMotion());
  React.useEffect(() => {
    const widgetRoot = rootRef.current; if (!widgetRoot) return undefined;
    const vars = cssVars || (coreCss ? extractRootCssVariables(coreCss) : null);
    if (vars && !widgetRoot.dataset.dgaTokens) { widgetRoot.dataset.dgaTokens = String(applyCssVariables(widgetRoot, vars)); }
    setDir(getDirection(widgetRoot));
    const stopDirection = observeDirection(widgetRoot, setDir); const stopReducedMotion = onReducedMotionChange(setReduced);
    return () => { stopDirection(); stopReducedMotion(); };
  }, [rootRef, cssVars, coreCss]);
  return { ...shared, dir, reduced };
}
export const _resetForTests = () => { shared = null; };
