// One-call DGA setup service used by every adapter: registers icons centrally, exposes direction + reduced motion.
import { createIconRegistry } from './icons.js';
import { getDirection, observeDirection } from './direction.js';
import { prefersReducedMotion, onReducedMotionChange } from './motion.js';

export function setupDga({ addIcons, primary, fallback, icons = [], policy, onMissing, root } = {}) {
  const registry = createIconRegistry({ addIcons, primary, fallback, policy, onMissing });
  const report = registry.register(icons);
  return {
    registry,
    report,
    direction: () => getDirection(root),
    observeDirection: (onDirectionChange) => observeDirection(root, onDirectionChange),
    reducedMotion: () => prefersReducedMotion(),
    onReducedMotionChange,
  };
}
