// React bindings for lib/motion. gsap / ScrollTrigger / three are injected by the project — nothing is bundled here.
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createScrollStory, mountThreeScene } from './index.js';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;   // SSR-safe: no DOM access on the server

/** Scroll story scoped to `ref`; reverted on unmount or when deps change (zero ScrollTriggers left behind). */
export function useScrollStory(ref, { gsap, ScrollTrigger, mode, build, deps = [] }) {
  const [state, setState] = useState(null);
  const buildRef = useRef(build); buildRef.current = build;
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return undefined;
    const story = createScrollStory(ref.current, { gsap, ScrollTrigger, mode, build: (context) => buildRef.current(context) });
    setState(story.applied ? { applied: true, reduced: story.reduced } : { applied: false, reason: story.reason });
    if (typeof window !== 'undefined') { window.__dgaMotion = window.__dgaMotion || {}; window.__dgaMotion.story = story; }
    return () => story.revert();
  }, [ref, gsap, ScrollTrigger, mode, ...deps]); // eslint-disable-line react-hooks/exhaustive-deps
  return state;
}

/** Optional Three.js scene in `ref` (lazy `loadThree`), disposed on unmount. Returns { status: 'loading'|'webgl'|'fallback', reason } */
export function useThreeScene(ref, { loadThree, build, poster, mode, threeD = false, forceFallback = false }) {
  const [state, setState] = useState({ status: 'loading' });
  useEffect(() => {
    if (!ref.current) return undefined;
    let handle = null; let cancelled = false;
    mountThreeScene(ref.current, { loadThree, build, poster, mode, threeD, forceFallback }).then((sceneHandle) => {
      if (cancelled) { sceneHandle.dispose(); return; }
      handle = sceneHandle; setState(sceneHandle.applied ? { status: 'webgl', reduced: sceneHandle.reduced } : { status: 'fallback', reason: sceneHandle.reason });
      if (typeof window !== 'undefined') { window.__dgaMotion = window.__dgaMotion || {}; window.__dgaMotion.three = sceneHandle; }
    });
    return () => { cancelled = true; if (handle) handle.dispose(); };
  }, [ref, mode, threeD, forceFallback]); // eslint-disable-line react-hooks/exhaustive-deps
  return state;
}
