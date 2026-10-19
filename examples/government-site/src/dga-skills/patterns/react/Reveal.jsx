import React, { useEffect, useRef } from 'react';
import { useMode } from './mode.jsx';
import { prefersReducedMotion } from '../../core/motion.js';
/** [AHMED HOUSE] reveal-on-scroll for Enhanced/Creative only. Exact mode renders children unchanged (INSTANT). */
export function Reveal({ as: Tag = 'div', className = '', children, ...otherProps }) {
  const mode = useMode(); const revealRef = useRef(null);
  const active = mode !== 'dga-exact' && !prefersReducedMotion();
  useEffect(() => {
    if (!active || !revealRef.current) return undefined;
    const revealedElement = revealRef.current;
    if (!('IntersectionObserver' in window)) { revealedElement.classList.add('is-in'); return undefined; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { revealedElement.classList.add('is-in'); observer.unobserve(revealedElement); } }), { threshold: 0.1 });
    observer.observe(revealedElement); return () => observer.disconnect();
  }, [active]);
  return <Tag ref={revealRef} className={`${active ? 'ah-reveal' : ''} ${className}`.trim()} data-house={active ? 'reveal' : undefined} {...otherProps}>{children}</Tag>;
}
