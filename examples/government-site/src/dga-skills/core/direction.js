// Direction helpers (RTL first). Work with any DOM; no framework imports.
export function getDirection(element) {
  const ownerDocument = (element && element.ownerDocument) || (typeof document !== 'undefined' ? document : null);
  let node = element || (ownerDocument && ownerDocument.documentElement);
  while (node && node.nodeType === 1) {
    const direction = node.getAttribute('dir');
    if (direction === 'rtl' || direction === 'ltr') return direction;
    node = node.parentElement;
  }
  return 'ltr';
}
export const isRtl = (element) => getDirection(element) === 'rtl';

/** The Arabic text in RTL, the English text otherwise — one helper for every pattern and template (React, vanilla, Angular, ExB). */
export const pickByDirection = (direction, arabicText, englishText) => (direction === 'rtl' ? arabicText : englishText);

/** Observe dir changes on the element and its ancestors. Returns an unsubscribe function. */
export function observeDirection(element, onDirectionChange) {
  const ownerDocument = (element && element.ownerDocument) || document;
  let lastDirection = getDirection(element);
  const observer = new MutationObserver(() => {
    const direction = getDirection(element);
    if (direction !== lastDirection) { lastDirection = direction; onDirectionChange(direction); }
  });
  observer.observe(ownerDocument.documentElement, { attributes: true, attributeFilter: ['dir'], subtree: true });
  return () => observer.disconnect();
}

/** Set document language + direction together (ar → rtl). */
export function setDocumentLocale(language, targetDocument = document) {
  const direction = /^(ar|fa|he|ur)(-|$)/i.test(language) ? 'rtl' : 'ltr';
  targetDocument.documentElement.lang = language;
  targetDocument.documentElement.dir = direction;
  return direction;
}
