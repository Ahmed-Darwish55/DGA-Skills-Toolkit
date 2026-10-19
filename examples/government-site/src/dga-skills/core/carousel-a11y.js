// dga-carousel helper (core 0.0.52 gaps — PKG-CAROUSEL-02/03): slides scrolled out of view stay keyboard-focusable and the slide width
// is measured only once. dga-carousel is a SCOPED component (no shadow root): after hydration it renders .KCarousel-body > .KCarousel-container
// > .KCarousel-slides > [the project's slides] plus .KCarousel-dots as light-DOM children of the host. This helper finds the REAL slides inside
// .KCarousel-slides (never the component's own wrappers), marks slides that are horizontally out of view `inert` + aria-hidden (+ hidden when
// fully out), and never touches the slide that is in view. No styling of the component, no package patch.
const SLIDES = '.KCarousel-slides';

function slidesOf(host) {
  const box = (host.shadowRoot && host.shadowRoot.querySelector(SLIDES)) || host.querySelector(SLIDES);
  if (box) return Array.from(box.children);
  return Array.from(host.children).filter((child) => !/(^|\s)KCarousel/.test(child.className || ''));   // not hydrated yet: the light-DOM slides
}

function visibleRatioX(element) {
  const rect = element.getBoundingClientRect(); if (!rect.width) return 0;
  let left = Math.max(rect.left, 0); let right = Math.min(rect.right, document.documentElement.clientWidth);
  // clip by every ancestor that clips horizontally (the carousel container), walking the flattened tree
  for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
    const overflowX = getComputedStyle(ancestor).overflowX;
    if (overflowX === 'hidden' || overflowX === 'clip' || overflowX === 'auto' || overflowX === 'scroll') { const ancestorRect = ancestor.getBoundingClientRect(); left = Math.max(left, ancestorRect.left); right = Math.min(right, ancestorRect.right); }
  }
  return Math.max(0, right - left) / rect.width;
}

export function enhanceDgaCarousel(host, { threshold = 0.6 } = {}) {
  if (!host || typeof window === 'undefined') return () => {};
  let raf = 0; let stopped = false; let mutationObserver = null;
  const update = () => {
    raf = 0; if (stopped) return;
    const list = slidesOf(host); if (list.length < 2) return;
    const ratios = list.map(visibleRatioX);
    const best = ratios.indexOf(Math.max(...ratios));                  // the slide in view is NEVER made inert
    list.forEach((slide, i) => {
      const hidden = i !== best && ratios[i] < threshold;
      slide.inert = hidden; if (hidden) slide.setAttribute('aria-hidden', 'true'); else slide.removeAttribute('aria-hidden');
      slide.style.visibility = hidden && ratios[i] === 0 ? 'hidden' : '';
    });
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
  const start = () => {
    if (stopped) return;
    schedule();
    // slide changes are CSS transforms on .KCarousel-slides (no events in 0.0.52): re-evaluate after transitions and DOM/style changes
    host.addEventListener('transitionend', schedule, true);
    host.addEventListener('click', () => setTimeout(schedule, 700), true);
    mutationObserver = new MutationObserver(schedule); mutationObserver.observe(host, { subtree: true, attributes: true, attributeFilter: ['style', 'class'], childList: true });
  };
  window.addEventListener('resize', schedule);
  const ready = window.customElements && customElements.whenDefined ? customElements.whenDefined('dga-carousel') : Promise.resolve();
  ready.then(() => (host.componentOnReady ? host.componentOnReady() : null)).then(() => setTimeout(start, 50), () => setTimeout(start, 50));
  return () => { stopped = true; mutationObserver?.disconnect(); window.removeEventListener('resize', schedule); if (raf) cancelAnimationFrame(raf); };
}

/** Scroll strip (e.g. the Partner Section row, scrolled by its arrow buttons): items outside the strip's visible area are `inert` until the
 *  arrows (or a swipe) bring them into view — keyboard users move with the arrow buttons, like a carousel. */
export function enhanceScrollStrip(list, { threshold = 0.6 } = {}) {
  if (!list || typeof window === 'undefined') return () => {};
  let raf = 0;
  const update = () => { raf = 0; const items = Array.from(list.children); items.forEach((item) => { const hidden = visibleRatioX(item) < threshold; item.inert = hidden; if (hidden) item.setAttribute('aria-hidden', 'true'); else item.removeAttribute('aria-hidden'); }); };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
  list.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
  setTimeout(schedule, 50);
  return () => { list.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); if (raf) cancelAnimationFrame(raf); };
}

/** dga-card-v2 (core 0.0.52) reads `width` / `maxWidth` once, in its constructor — before any framework sets them — so the inner
 *  card keeps its default 360 px and never fills a wider grid cell (PKG-CARDV2-02). Stretch the inner card to the host once it renders. */
export function stretchCardV2(host) {
  if (!host || typeof window === 'undefined') return;
  const run = () => { const card = host.shadowRoot?.querySelector('.card'); if (card) { card.style.width = '100%'; card.style.maxWidth = '100%'; card.style.height = '100%'; } };
  const ready = window.customElements?.whenDefined ? customElements.whenDefined('dga-card-v2') : Promise.resolve();
  ready.then(() => (host.componentOnReady ? host.componentOnReady() : null)).then(run, run);
}
