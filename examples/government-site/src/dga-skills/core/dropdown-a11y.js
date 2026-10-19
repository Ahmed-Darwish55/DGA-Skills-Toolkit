// OPT-IN accessibility compatibility layer for <dga-dropdown> (@platformscode/core 0.0.52).
//
// WHY: the package dropdown ships without aria-expanded/aria-haspopup (PKG-DD-02), without arrow-key navigation
// (PKG-DD-03), Escape does not close it (PKG-DD-04) and a dropdown inside a nested dir="ltr" island inherits the
// document direction (PKG-DD-01). These are vendor defects; they stay listed in registry/packages.json.
//
// WHAT THIS IS: an explicit, isolated, removable layer the project turns on per element (never by default). It adds
// ARIA attributes and a keyboard handler and NEVER patches node_modules. It touches the component's open shadow root
// (attributes only, no restyling) because the trigger and the options live there — that is exactly why it is opt-in,
// version-scoped and self-disabling: when the 0.0.52 anatomy (.dropdown__btn / .dropdown__list / .dropdown__option) is
// not found it does nothing and reports why. Re-verify on every new package version (tools/extract_package_api.py diff).
//
// WHAT IT DOES NOT DO: it does not make the component "DGA certified", it does not hide axe findings about other parts,
// and it does not replace the package fix. Use it when DGA Exact requires the package dropdown AND keyboard/ARIA access
// is mandatory; otherwise prefer a native <select> styled by the project or wait for the vendor fix.
export const DROPDOWN_A11Y_SCOPE = { package: '@platformscode/core', versions: ['0.0.52'], anatomy: ['.dropdown', '.dropdown__btn', '.dropdown__list', '.dropdown__option'] };

function isOpen(list, trigger) {
  if (trigger && trigger.classList.contains('open')) return true;          // 0.0.52 toggles .open on the trigger synchronously; the list fades in later
  if (!list) return false;
  const computedStyle = getComputedStyle(list);
  return computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden' && computedStyle.opacity !== '0' && list.getBoundingClientRect().height > 4;
}

/** Resolves when a DGA custom element is connected and hydrated (shadow root present). Polls up to `timeoutMs`. */
export function whenDgaReady(element, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const tick = async () => {
      if (element.isConnected && element.shadowRoot) {
        if (typeof element.componentOnReady === 'function') { try { await element.componentOnReady(); } catch { /* ignore */ } }
        return resolve(element);
      }
      if (Date.now() - startTime > timeoutMs) return reject(new Error('dga element not ready (not connected / not hydrated) after ' + timeoutMs + 'ms'));
      setTimeout(tick, 16);
    };
    tick();
  });
}

/**
 * @param {HTMLElement} host  the <dga-dropdown> element (hydrated)
 * @param {object} [options]
 * @param {boolean} [options.keyboard=true]        ArrowDown/Up open + move, Home/End, Enter/Space select (native), Escape closes and refocuses the trigger
 * @param {boolean} [options.aria=true]            aria-haspopup="listbox", aria-expanded (kept in sync), role="listbox" / role="option" + aria-selected
 * @param {boolean} [options.nestedDirection=true] copies the nearest light-DOM dir (host.closest('[dir]')) onto the inner .dropdown (PKG-DD-01)
 * @returns {{ applied: boolean, reason?: string, destroy: () => void, state: () => object }}
 */
export function enhanceDropdownA11y(host, options = {}) {
  const settings = { keyboard: true, aria: true, nestedDirection: true, ...options };
  const noop = { applied: false, destroy() {}, state: () => ({ applied: false }) };
  if (!host || !host.shadowRoot) return { ...noop, reason: 'host has no open shadow root (not hydrated yet? call after componentOnReady / useEffect)' };
  const shadowRoot = host.shadowRoot;
  const query = (selector) => shadowRoot.querySelector(selector);
  if (!query('.dropdown') || !query('.dropdown__btn') || !query('.dropdown__list')) return { ...noop, reason: `anatomy not found (expected ${DROPDOWN_A11Y_SCOPE.anatomy.join(', ')}) — layer disabled; package version outside scope ${DROPDOWN_A11Y_SCOPE.versions.join('/')}?` };
  const cleanups = [];
  const optionElements = () => [...shadowRoot.querySelectorAll('.dropdown__option')];
  const listElement = () => { const list = query('.dropdown__list'); return list && list.tagName === 'UL' ? list : (list && list.querySelector('ul')) || list; };

  // ---- ARIA ----
  const syncAria = () => {
    if (!settings.aria) return;
    const trigger = query('.dropdown__btn'), list = query('.dropdown__list'); if (!trigger || !list) return;
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', isOpen(list, trigger) ? 'true' : 'false');
    const listbox = listElement();
    if (listbox) {
      listbox.setAttribute('role', 'listbox');
      const name = host.label || host.placeholder || host.getAttribute('label') || host.getAttribute('aria-label');
      if (name && !listbox.getAttribute('aria-label')) listbox.setAttribute('aria-label', name);          // listbox needs an accessible name (axe aria-input-field-name)
      for (const listItem of listbox.children) if (listItem.tagName === 'LI') listItem.setAttribute('role', 'presentation');   // listbox → (li) → option: the li must be presentational (axe aria-required-children/parent)
    }
    for (const option of optionElements()) { option.setAttribute('role', 'option'); option.setAttribute('aria-selected', option.classList.contains('selected') ? 'true' : 'false'); }
    if (host.multiSelect && listbox) listbox.setAttribute('aria-multiselectable', 'true');
  };
  if (settings.aria) {
    syncAria();
    const ariaObserver = new MutationObserver(syncAria);
    ariaObserver.observe(shadowRoot, { attributes: true, childList: true, subtree: true, attributeFilter: ['class', 'style'] });
    cleanups.push(() => { ariaObserver.disconnect(); const trigger = query('.dropdown__btn'); if (trigger) { trigger.removeAttribute('aria-haspopup'); trigger.removeAttribute('aria-expanded'); } });
  }

  // ---- nested direction (PKG-DD-01) ----
  if (settings.nestedDirection) {
    // the component copies document dir onto its HOST and inner root (PKG-DD-01) — the island is the nearest *ancestor* with dir
    const island = host.parentElement ? host.parentElement.closest('[dir]') : null;
    const dir = island ? island.getAttribute('dir') : (document.documentElement.getAttribute('dir') || 'ltr');
    const originalDir = query('.dropdown').getAttribute('dir');
    const assertDir = () => { const dropdownRoot = query('.dropdown'); if (dropdownRoot && dropdownRoot.getAttribute('dir') !== dir) dropdownRoot.setAttribute('dir', dir); if (host.getAttribute('dir') !== dir) host.setAttribute('dir', dir); };
    assertDir();
    const shadowDirObserver = new MutationObserver(assertDir);
    shadowDirObserver.observe(shadowRoot, { attributes: true, subtree: true, attributeFilter: ['dir'] });
    const hostDirObserver = new MutationObserver(assertDir); hostDirObserver.observe(host, { attributes: true, attributeFilter: ['dir'] });
    cleanups.push(() => { shadowDirObserver.disconnect(); hostDirObserver.disconnect(); const dropdownRoot = query('.dropdown'); if (dropdownRoot) { originalDir == null ? dropdownRoot.removeAttribute('dir') : dropdownRoot.setAttribute('dir', originalDir); } });
  }

  // ---- keyboard ----
  if (settings.keyboard) {
    const currentParts = () => ({ trigger: query('.dropdown__btn'), list: query('.dropdown__list') });
    const open = () => { const { trigger, list } = currentParts(); if (!isOpen(list, trigger)) { if (typeof host.toggleDropdown === 'function') host.toggleDropdown(); else trigger.click(); } [30, 150, 350].forEach((delayMs) => setTimeout(syncAria, delayMs)); };
    const close = () => { const { trigger, list } = currentParts(); if (isOpen(list, trigger)) { if (typeof host.closeDropdown === 'function') host.closeDropdown(); else trigger.click(); } [30, 150, 350].forEach((delayMs) => setTimeout(syncAria, delayMs)); };
    const focusOption = (i) => { const allOptions = optionElements(); if (!allOptions.length) return; const wrappedIndex = ((i % allOptions.length) + allOptions.length) % allOptions.length; allOptions[wrappedIndex].focus(); };
    const onKey = (event) => {
      const { trigger, list } = currentParts(); if (!trigger) return;
      const path = event.composedPath(); const onTrigger = path.includes(trigger); const optionIndex = optionElements().findIndex((option) => path.includes(option));
      if (event.key === 'Escape') { if (isOpen(list, trigger)) { event.preventDefault(); event.stopPropagation(); close(); trigger.focus(); } return; }
      if (onTrigger && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) { event.preventDefault(); open(); requestAnimationFrame(() => focusOption(event.key === 'ArrowDown' ? 0 : -1)); return; }
      if (optionIndex >= 0) {
        if (event.key === 'ArrowDown') { event.preventDefault(); focusOption(optionIndex + 1); }
        else if (event.key === 'ArrowUp') { event.preventDefault(); optionIndex === 0 ? trigger.focus() : focusOption(optionIndex - 1); }
        else if (event.key === 'Home') { event.preventDefault(); focusOption(0); }
        else if (event.key === 'End') { event.preventDefault(); focusOption(-1); }
        else if (event.key === 'Tab') { close(); }
        else if (event.key === 'Enter' || event.key === ' ') { if (!host.multiSelect) refocusAfterSelect(); }   // native activation selects (package handler); then bring focus back
        // Enter / Space: the options are real <button>s — native activation selects (package handler)
      }
    };
    host.addEventListener('keydown', onKey);
    cleanups.push(() => host.removeEventListener('keydown', onKey));
    // after a selection the package closes the list; keep focus on the trigger instead of losing it
    const refocusAfterSelect = () => [80, 250].forEach((delayMs) => setTimeout(() => { const { trigger, list } = currentParts(); const activeElement = shadowRoot.activeElement; if (trigger && !isOpen(list, trigger) && (!activeElement || !activeElement.classList.contains('dropdown__btn'))) trigger.focus(); syncAria(); }, delayMs));
    const isOptionPath = (event) => event.composedPath().some((node) => node && node.classList && node.classList.contains('dropdown__option'));   // the node may already be re-rendered
    const onClick = (event) => { if (!host.multiSelect && isOptionPath(event)) refocusAfterSelect(); else [30, 200].forEach((delayMs) => setTimeout(syncAria, delayMs)); };
    host.addEventListener('click', onClick);
    cleanups.push(() => host.removeEventListener('click', onClick));
  }

  host.setAttribute('data-dga-a11y-compat', 'dropdown');   // visible marker: this element runs the opt-in layer (QA reports it)
  cleanups.push(() => host.removeAttribute('data-dga-a11y-compat'));
  return {
    applied: true,
    scope: DROPDOWN_A11Y_SCOPE,
    destroy() { while (cleanups.length) cleanups.pop()(); },
    state() { const trigger = query('.dropdown__btn'), list = query('.dropdown__list'), root = query('.dropdown'); return { open: isOpen(list, trigger), expanded: trigger && trigger.getAttribute('aria-expanded'), haspopup: trigger && trigger.getAttribute('aria-haspopup'), options: optionElements().length, dir: root && root.getAttribute('dir') }; },
  };
}
