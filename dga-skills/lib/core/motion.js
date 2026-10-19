// Reduced-motion helpers. DGA "INSTANT" motion = no transition; house motion must drop to static when reduced.
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
export function prefersReducedMotion(targetWindow = typeof window !== 'undefined' ? window : null) {
  return !!(targetWindow && targetWindow.matchMedia && targetWindow.matchMedia(REDUCED_MOTION_QUERY).matches);
}
export function onReducedMotionChange(onChange, targetWindow = window) {
  if (!targetWindow.matchMedia) return () => {};
  const mediaQuery = targetWindow.matchMedia(REDUCED_MOTION_QUERY);
  const handleChange = (event) => onChange(event.matches);
  if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', handleChange); else mediaQuery.addListener(handleChange);
  return () => (mediaQuery.removeEventListener ? mediaQuery.removeEventListener('change', handleChange) : mediaQuery.removeListener(handleChange));
}
/** Duration helper: returns 0 when reduced motion is requested. */
export const motionDuration = (milliseconds, isReduced = prefersReducedMotion()) => (isReduced ? 0 : milliseconds);
