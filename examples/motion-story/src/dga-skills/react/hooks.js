import { useEffect, useMemo, useState, useCallback } from 'react';
import { getDirection, observeDirection } from '../core/direction.js';
import { prefersReducedMotion, onReducedMotionChange } from '../core/motion.js';
import { buttonIcon } from '../core/icons.js';
import { enhanceDropdownA11y, whenDgaReady } from '../core/dropdown-a11y.js';
import { useDga } from './DgaProvider.jsx';

/** Current direction of the element (or document); re-renders when any dir attribute changes. */
export function useDirection(ref) {
  const [dir, setDir] = useState(() => (typeof document === 'undefined' ? 'rtl' : getDirection(ref && ref.current)));
  useEffect(() => {
    const element = ref && ref.current;
    setDir(getDirection(element));
    return observeDirection(element, setDir);
  }, [ref]);
  return dir;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => prefersReducedMotion());
  useEffect(() => onReducedMotionChange(setReduced), []);
  return reduced;
}

/** Register extra icons from a component (idempotent) and get the report. */
export function useDgaIcons(names) {
  const { registry } = useDga();
  const key = names.join('|');
  return useMemo(() => registry.register(names), [registry, key]); // eslint-disable-line react-hooks/exhaustive-deps
}

/** Props for a DgaButton/DgaButtonV2 icon slot that are safe for missing icons (see core buttonIcon). */
export function useButtonIcon() {
  const { registry } = useDga();
  return useCallback((name, iconOptions = {}) => buttonIcon(name, { registry, ...iconOptions }), [registry]);
}

/**
 * OPT-IN dropdown accessibility compatibility layer (see core/dropdown-a11y.js for scope and limits).
 * `const ref = useRef(); useDropdownA11y(ref, { enabled: true }); <DgaDropdown ref={ref} … />`
 * Returns the last state report (null until applied). Nothing happens when enabled is false.
 */
export function useDropdownA11y(ref, { enabled = true, ...options } = {}) {
  const [state, setState] = useState(null);
  useEffect(() => {
    if (!enabled || !ref || !ref.current) return undefined;
    const host = ref.current; let handle = null; let cancelled = false;
    const apply = () => { if (cancelled) return; handle = enhanceDropdownA11y(host, options); setState(handle.applied ? handle.state() : { applied: false, reason: handle.reason }); };
    whenDgaReady(host).then(apply, (error) => setState({ applied: false, reason: String(error.message || error) }));
    return () => { cancelled = true; if (handle) handle.destroy(); };
  }, [ref, enabled]); // eslint-disable-line react-hooks/exhaustive-deps
  return state;
}
