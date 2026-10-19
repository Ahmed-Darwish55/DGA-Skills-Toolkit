// DGA Skills Toolkit — motion recipes. Framework-agnostic; the project injects its own gsap / ScrollTrigger / three,
// so the toolkit never bundles or forces them (rules/design-modes.md: Exact = no house motion, Enhanced = restrained,
// Creative = storytelling allowed; Three.js only when the user asked for 3D).
//
//   motionPolicy(mode, { threeD })            → what the mode allows
//   createScrollStory(root, { gsap, ScrollTrigger, mode, build })   → { applied, reason?, revert(), stats() }
//   mountThreeScene(container, { loadThree, build, poster, mode, threeD }) → Promise<{ applied, fallback?, reason?, dispose(), stats() }>
//   hasWebGL()
//
// Guarantees (tested in examples/motion-story + tests/motion_story_check.mjs):
//   • every tween/ScrollTrigger lives in ONE gsap.context scoped to `root`; revert() kills them → ScrollTrigger.getAll() === 0
//   • prefers-reduced-motion: reduce → no scroll-linked animation is created; content stays in its final, readable state
//   • progressive enhancement: content is visible in the HTML; JS only *adds* motion (no opacity:0 in CSS)
//   • Exact mode → nothing is created (applied:false, reason)
//   • 3D: lazy import, WebGL capability check, poster fallback (with alt text), rAF paused off-screen / hidden tab,
//     full dispose (geometries, materials, textures, renderer, forced context loss, observers, canvas removed)
import { prefersReducedMotion } from '../core/motion.js';

// one shared reduced-motion check (core/motion.js), re-exported so `prefersReducedMotion` stays part of this module's API
export { prefersReducedMotion };

export function motionPolicy(mode = 'dga-exact', { threeD = false } = {}) {
  const modeName = String(mode).replace(/^dga-/, '');
  if (modeName === 'exact') return { mode: 'dga-exact', gsap: false, scrollTrigger: false, three: false, reason: 'DGA Exact: no house motion (rules/design-modes.md)' };
  if (modeName === 'enhanced') return { mode: 'dga-enhanced', gsap: true, scrollTrigger: true, three: false, maxDistancePx: 24, reason: threeD ? 'Three.js is not part of Enhanced — use Creative and ask the user' : 'restrained reveals only' };
  return { mode: 'dga-creative', gsap: true, scrollTrigger: true, three: !!threeD, reason: threeD ? 'Creative + user requested 3D' : '3D not requested — Creative does not force Three.js' };
}

/**
 * @param {Element} root  scope element (selectors inside `build` resolve within it)
 * @param {{ gsap: any, ScrollTrigger: any, mode?: string, build: (context: { gsap, ScrollTrigger, root, reduced: boolean }) => void }} options
 */
export function createScrollStory(root, options) {
  const policy = motionPolicy(options.mode || 'dga-creative');
  const none = (reason) => ({ applied: false, reason, revert() {}, stats: () => ({ triggers: 0, reduced: prefersReducedMotion() }) });
  if (!policy.scrollTrigger) return none(policy.reason);
  if (!root) return none('no root element');
  const { gsap, ScrollTrigger } = options;
  if (!gsap || !ScrollTrigger) return none('gsap / ScrollTrigger not provided (install them in the project; the toolkit does not bundle motion libraries)');
  gsap.registerPlugin(ScrollTrigger);
  const reduced = prefersReducedMotion();
  const mine = new Set();
  // gsap.context records every tween / timeline / ScrollTrigger created inside it, scoped to root
  const gsapContext = gsap.context(() => {
    if (reduced) return;                       // reduced motion: build nothing; the static layout is the experience
    const before = new Set(ScrollTrigger.getAll());
    options.build({ gsap, ScrollTrigger, root, reduced, policy });
    for (const trigger of ScrollTrigger.getAll()) if (!before.has(trigger)) mine.add(trigger);
  }, root);
  // layout can change after fonts / images → refresh once they are ready
  const onLoad = () => ScrollTrigger.refresh();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (mine.size) onLoad(); });
  return {
    applied: true, reduced, policy,
    revert() { gsapContext.revert(); for (const trigger of mine) trigger.kill(); mine.clear(); },
    stats: () => ({ triggers: [...mine].filter((trigger) => ScrollTrigger.getAll().includes(trigger)).length, allTriggers: ScrollTrigger.getAll().length, reduced }),
  };
}

export function hasWebGL() {
  try { const canvas = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl'))); } catch { return false; }
}

/**
 * Optional 3D scene. `loadThree` must be a lazy import supplied by the project: () => import('three').
 * `build(THREE, { scene, camera, renderer, reduced })` returns an optional `tick(time)` callback.
 * * `poster` = { src, alt, licence } shown when 3D is not allowed / not supported / fails; the poster is the accessible alternative.
 */
export async function mountThreeScene(container, options) {
  const policy = motionPolicy(options.mode || 'dga-creative', { threeD: options.threeD });
  const stats = { geometries: 0, textures: 0, programs: 0, frames: 0, disposed: false };
  const showPoster = (reason) => {
    if (options.poster && container && !container.querySelector('[data-dga-3d-poster]')) {
      const img = document.createElement('img'); img.src = options.poster.src; img.alt = options.poster.alt || ''; img.setAttribute('data-dga-3d-poster', ''); img.decoding = 'async'; if (options.poster.licence) img.setAttribute('data-licence', options.poster.licence);   // gate C4: every image declares its licence
      img.style.cssText = 'display:block;width:100%;height:100%;object-fit:cover';
      container.append(img);
    }
    container && container.setAttribute('data-dga-3d', 'fallback');
    return { applied: false, fallback: true, reason, dispose() { container && container.querySelector('[data-dga-3d-poster]')?.remove(); }, stats: () => ({ ...stats, fallback: true, reason }) };
  };
  if (!policy.three) return showPoster(policy.reason);
  if (!hasWebGL() || options.forceFallback) return showPoster(options.forceFallback ? 'fallback forced' : 'WebGL not available');
  let THREE;
  try { THREE = await options.loadThree(); } catch (error) { return showPoster('three failed to load: ' + (error && error.message)); }
  const reduced = prefersReducedMotion();
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); } catch (error) { return showPoster('WebGL renderer could not start: ' + (error && error.message)); }
  const width = () => container.clientWidth || 640; const height = () => container.clientHeight || 360;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width(), height());
  renderer.domElement.setAttribute('aria-hidden', 'true');            // decorative: the meaning is in the text next to it
  renderer.domElement.setAttribute('data-dga-3d-canvas', '');
  container.append(renderer.domElement); container.setAttribute('data-dga-3d', 'webgl');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, width() / height(), 0.1, 100);
  const tick = options.build(THREE, { scene, camera, renderer, reduced }) || null;
  let raf = 0; let visible = true; let running = !reduced;
  const frame = (time) => { raf = 0; if (tick) tick(time); renderer.render(scene, camera); stats.frames++; if (running && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  const kick = () => { if (!raf && running && visible && !document.hidden) raf = requestAnimationFrame(frame); };
  renderer.render(scene, camera); stats.frames++;                       // one static frame always (reduced motion = this frame only)
  kick();
  const intersectionObserver = new IntersectionObserver((entries) => { visible = entries.some((entry) => entry.isIntersecting); kick(); }); intersectionObserver.observe(container);
  const onVisibilityChange = () => kick(); document.addEventListener('visibilitychange', onVisibilityChange);
  const resizeObserver = new ResizeObserver(() => { camera.aspect = width() / height(); camera.updateProjectionMatrix(); renderer.setSize(width(), height()); if (!running) renderer.render(scene, camera); }); resizeObserver.observe(container);
  const info = () => ({ geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, programs: renderer.info.programs ? renderer.info.programs.length : 0 });
  return {
    applied: true, reduced, policy,
    stats: () => ({ ...stats, ...(stats.disposed ? {} : info()), running, visible }),
    dispose() {
      running = false; if (raf) cancelAnimationFrame(raf); raf = 0;
      intersectionObserver.disconnect(); resizeObserver.disconnect(); document.removeEventListener('visibilitychange', onVisibilityChange);
      scene.traverse((sceneObject) => {
        if (sceneObject.geometry) sceneObject.geometry.dispose();
        const materials = sceneObject.material ? (Array.isArray(sceneObject.material) ? sceneObject.material : [sceneObject.material]) : [];
        for (const material of materials) { for (const property of Object.keys(material)) { const value = material[property]; if (value && value.isTexture) value.dispose(); } material.dispose(); }
      });
      const after = info(); stats.geometries = after.geometries; stats.textures = after.textures; stats.programs = after.programs;
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); container.removeAttribute('data-dga-3d');
      stats.disposed = true;
    },
  };
}
