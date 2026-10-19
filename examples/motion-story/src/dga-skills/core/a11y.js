// Accessibility guards for known package gaps.
// Baseline defect OI-14: icon-only DgaButton without label gets the English name "Button with icon".
export function requireAccessibleName({ iconOnly, label }, componentName = 'DgaButton') {
  if (iconOnly && !(typeof label === 'string' && label.trim())) {
    throw new Error(`[dga-skills] ${componentName} iconOnly requires a non-empty label (used as aria-label); the package default "Button with icon" is not acceptable`);
  }
  return true;
}
