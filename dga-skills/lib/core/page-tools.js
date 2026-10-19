// Accessibility tools of the DGA Second Nav Header (Figma "Second Nav Header / Style=Gray" › Actions: mic-01 · zoom-out-area ·
// zoom-in-area · view — Button Subtle Medium icon-only, tooltip with the action name). Plain DOM, no dependencies, reversible.
const KEY = 'ah-page-tools';
const read = () => { try { return JSON.parse(sessionStorage.getItem(KEY) || '{}'); } catch { return {}; } };
const write = (state) => { try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage blocked: state stays per page */ } };

function apply(state, targetDocument = document) {
  const root = targetDocument.documentElement;
  root.style.zoom = state.zoom && state.zoom !== 1 ? String(state.zoom) : '';
  root.classList.toggle('ah-grayscale', !!state.gray);
}

/** zoom: 0.9 … 1.5 in 0.1 steps (text and layout scale together, like the browser zoom the tool replaces). */
export function pageZoom(delta, targetDocument = document) {
  const state = read(); state.zoom = Math.min(1.5, Math.max(0.9, Math.round(((state.zoom || 1) + delta) * 10) / 10)); write(state); apply(state, targetDocument); return state.zoom;
}
/** "view" tool: grayscale display (colour-vision aid) — toggles; returns the new state. */
export function toggleGrayscale(targetDocument = document) { const state = read(); state.gray = !state.gray; write(state); apply(state, targetDocument); return state.gray; }
/** "mic" tool: read the main content aloud with the browser's speech synthesis (ar-SA / en-US); a second press stops. */
export function readPageAloud(targetDocument = document, lang = targetDocument.documentElement.lang === 'ar' ? 'ar-SA' : 'en-US') {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  if (!synth) return false;
  if (synth.speaking) { synth.cancel(); return false; }
  const text = (targetDocument.querySelector('main') || targetDocument.body).innerText.slice(0, 4000);
  const utterance = new SpeechSynthesisUtterance(text); utterance.lang = lang; synth.speak(utterance); return true;
}
/** Re-apply the stored state on load (call once per page). */
export function restorePageTools(targetDocument = document) { apply(read(), targetDocument); }

/** The four default actions (logical order from the inline start): view · zoom-in · zoom-out · mic. */
export const defaultPageTools = (isArabic) => [
  { icon: 'view', label: isArabic ? 'تدرّج الرمادي' : 'Grayscale', run: () => toggleGrayscale() },
  { icon: 'zoom-in-area', label: isArabic ? 'تكبير' : 'Zoom in', run: () => pageZoom(0.1) },
  { icon: 'zoom-out-area', label: isArabic ? 'تصغير' : 'Zoom out', run: () => pageZoom(-0.1) },
  { icon: 'mic-01', label: isArabic ? 'قراءة الصفحة' : 'Read the page aloud', run: () => readPageAloud() },
];
