// Functions evaluated INSIDE the page (serialised with .toString()). Pure DOM; no imports.
// Each returns plain JSON. "deep" helpers walk open shadow roots so DGA web components are included.

export const pageChecks = {
  // Walk light DOM + open shadow roots. Returns array of elements.
  deepAll: `(function deepAll(root) { const out = []; const walk = (n) => { for (const el of n.querySelectorAll('*')) { out.push(el); if (el.shadowRoot) walk(el.shadowRoot); } }; walk(root || document); return out; })`,

  overflow: `(function () {
    const vw = document.documentElement.clientWidth;
    const bad = []; const clipped = []; const culprits = [];
    const desc = (el) => (el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : '') + (el.dataset && el.dataset.pattern ? '[' + el.dataset.pattern + ']' : ''));
    // flattened-tree parent: a slotted element is laid out inside its assigned <slot> (shadow DOM), not under its light-DOM parent
    const up = (n) => n.assignedSlot || n.parentElement || (n.getRootNode() && n.getRootNode().host) || null;
    const hiddenAncestor = (el) => { let n = up(el); while (n) { const o = getComputedStyle(n).overflowX; if (o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') return true; n = up(n); } return false; };
    const notPerceivable = (el) => { if (getComputedStyle(el).visibility === 'hidden') return true; let n = el; while (n) { if (n.inert) return true; n = up(n); } return false; };   // inert / visibility:hidden = deliberately removed (e.g. off-screen carousel slides)
    const all = ${'deepAll'}(document);
    for (const el of all) {
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
      if ((r.right > vw + 1 || r.left < -1) && !hiddenAncestor(el) && !notPerceivable(el)) bad.push({ el: desc(el), left: Math.round(r.left), right: Math.round(r.right) });
      const cs = getComputedStyle(el);
      const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      const srOnly = (el.clientWidth <= 1 && el.clientHeight <= 1) || cs.clipPath !== 'none' || (cs.position === 'absolute' && cs.clip.indexOf('rect(0') === 0);   // visually-hidden text is not clipping; clientHeight 0 = collapsed (accordion body), not clipped
      if (hasText && !srOnly && el.clientHeight > 0 && cs.overflow !== 'visible' && cs.textOverflow !== 'ellipsis' && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 2)) clipped.push({ el: desc(el), text: el.textContent.trim().slice(0, 40), sw: el.scrollWidth, cw: el.clientWidth });
      if (r.right > vw + 1 || r.left < -1) culprits.push({ el: desc(el), host: (el.getRootNode().host ? el.getRootNode().host.tagName.toLowerCase() : null), right: Math.round(r.right), left: Math.round(r.left), width: Math.round(r.width) });
    }
    culprits.sort((a, b) => (b.right - b.left) - (a.right - a.left));
    return { docScrollWidth: document.documentElement.scrollWidth, viewportWidth: vw, horizontalScroll: document.documentElement.scrollWidth > vw + 1, outsideViewport: bad.slice(0, 12), outsideCount: bad.length, culprits: culprits.slice(0, 5), clippedText: clipped.slice(0, 12), clippedCount: clipped.length };
  })`,

  // Light-DOM token lint: every computed colour on page-authored elements must be in the DGA palette.
  colors: `(function (palette) {
    const P = new Set(palette); const toHex = (c) => { const m = c.match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const p = m[1].split(',').map((x) => parseFloat(x)); if (p.length > 3 && p[3] === 0) return 'transparent'; return '#' + p.slice(0, 3).map((x) => Math.round(x).toString(16).padStart(2, '0')).join(''); };
    const unknown = new Map(); const pkgUnknown = new Map(); let checked = 0;
    const desc = (el) => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : '');
    const inPackage = (el) => { let n = el.parentElement; while (n) { if (n.tagName.includes('-')) return n.tagName.toLowerCase(); n = n.parentElement; } return null; };
    for (const el of document.querySelectorAll('body *')) {
      if (el.tagName.includes('-')) continue;                       // DGA custom elements: package-owned, measured elsewhere
      const pkg = inPackage(el);                                     // scoped (non-shadow) DGA components render into light DOM: package-owned too
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
      const cs = getComputedStyle(el);
      const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      const props = { color: hasText ? cs.color : null, backgroundColor: cs.backgroundColor, borderTopColor: cs.borderTopWidth !== '0px' ? cs.borderTopColor : null, borderInlineStartColor: cs.borderInlineStartWidth !== '0px' ? cs.borderInlineStartColor : null, outlineColor: cs.outlineStyle !== 'none' ? cs.outlineColor : null };
      for (const m of (cs.backgroundImage || '').matchAll(/rgba?\\([^)]+\\)/g)) props['gradient' + m.index] = m[0];
      for (const [k, val] of Object.entries(props)) {
        if (!val) continue; const hex = toHex(val); if (!hex || hex === 'transparent') continue; checked++;
        if (!P.has(hex)) { const key = hex + ' ' + k; const m = pkg ? pkgUnknown : unknown; if (!m.has(key)) m.set(key, { hex, prop: k, sample: desc(el), house: !!el.closest('[data-house]'), package: pkg }); }
      }
    }
    return { checked, unknown: [...unknown.values()].slice(0, 20), unknownCount: unknown.size, packageUnknown: [...pkgUnknown.values()].slice(0, 20), packageUnknownCount: pkgUnknown.size };
  })`,

  houseInventory: `(function () {
    const els = [...document.querySelectorAll('[data-house]')].map((e) => e.dataset.house);
    const vars = new Set();
    for (const s of document.styleSheets) { try { for (const r of s.cssRules) { for (const m of (r.cssText || '').matchAll(/--ahmed-[a-z0-9-]+/g)) vars.add(m[0]); } } catch (e) {} }
    const counts = {}; for (const h of els) counts[h] = (counts[h] || 0) + 1;
    return { houseElements: counts, houseTokens: [...vars] };
  })`,

  motion: `(function () {
    const all = ${'deepAll'}(document);
    const animated = [];
    const desc = (el) => { const host = el.getRootNode().host; return (host ? host.tagName.toLowerCase() + ' » ' : '') + el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.') : ''); };
    for (const el of all) {
      const cs = getComputedStyle(el);
      const td = cs.transitionDuration.split(',').map((x) => parseFloat(x) || 0); const ad = parseFloat(cs.animationDuration) || 0;
      const hasT = td.some((x) => x > 0) && cs.transitionProperty !== 'none';
      if (hasT || (ad > 0 && cs.animationName !== 'none')) animated.push({ el: desc(el), transition: cs.transitionProperty.slice(0, 60) + ' ' + cs.transitionDuration, animation: ad ? cs.animationName + ' ' + cs.animationDuration : null, inShadow: !!el.getRootNode().host, house: !!(el.closest && el.closest('[data-house], .ah-reveal')) });
    }
    return { animatedCount: animated.length, houseAnimated: animated.filter((a) => a.house).length, packageAnimated: animated.filter((a) => a.inShadow).length, sample: animated.slice(0, 15) };
  })`,

  dgaButtonMotion: `(function () {
    // Figma: Button hover/press = INSTANT. Measures the inner <button> transition of every dga-button / dga-button-v2.
    const res = []; for (const host of document.querySelectorAll('dga-button, dga-button-v2')) { const b = host.shadowRoot && host.shadowRoot.querySelector('button'); if (!b) continue; const cs = getComputedStyle(b); res.push({ host: host.tagName.toLowerCase(), variant: host.getAttribute('variant'), transition: cs.transitionDuration, instant: cs.transitionDuration.split(',').every((x) => parseFloat(x) === 0) }); }
    return { buttons: res.length, instant: res.filter((r) => r.instant).length, sample: res.slice(0, 6) };
  })`,

  activeInfo: `(function () {
    let a = document.activeElement; const path = []; while (a && a.shadowRoot && a.shadowRoot.activeElement) { path.push(a.tagName.toLowerCase()); a = a.shadowRoot.activeElement; }
    if (!a || a === document.body) return { tag: 'body' };
    const r = a.getBoundingClientRect(); const cs = getComputedStyle(a);
    const ring = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || (cs.boxShadow && cs.boxShadow !== 'none');
    return { key: Math.round(r.x) + ',' + Math.round(r.y) + ',' + Math.round(r.width), tag: (path.length ? path.join('>') + '>' : '') + a.tagName.toLowerCase(), text: (a.getAttribute('aria-label') || a.textContent || '').trim().slice(0, 30), visible: r.width > 0 && r.height > 0, inViewport: r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth, ring, focusVisible: a.matches(':focus-visible'), outline: cs.outlineStyle + ' ' + cs.outlineWidth, w: Math.round(r.width), h: Math.round(r.height) };
  })`,

  measure: `(function (hostSel, innerSel, index) {
    const hosts = document.querySelectorAll(hostSel); const host = hosts[index || 0]; if (!host) return { error: 'host not found: ' + hostSel };
    const el = innerSel ? (host.shadowRoot ? host.shadowRoot.querySelector(innerSel) : host.querySelector(innerSel)) : host; if (!el) return { error: 'inner not found: ' + innerSel };
    const cs = getComputedStyle(el); const r = el.getBoundingClientRect();
    const toHex = (c) => { const m = c.match(/rgba?\\(([^)]+)\\)/); if (!m) return c; const p = m[1].split(',').map((x) => parseFloat(x)); if (p.length > 3 && p[3] === 0) return 'transparent'; return '#' + p.slice(0, 3).map((x) => Math.round(x).toString(16).padStart(2, '0')).join(''); };
    const borderW = Math.max(parseFloat(cs.borderTopWidth) || 0, parseFloat(cs.outlineStyle !== 'none' ? cs.outlineWidth : 0) || 0);
    const borderColor = parseFloat(cs.borderTopWidth) > 0 ? toHex(cs.borderTopColor) : (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 ? toHex(cs.outlineColor) : null);
    return { height: Math.round(r.height * 10) / 10, width: Math.round(r.width), radius: parseFloat(cs.borderTopLeftRadius), background: toHex(cs.backgroundColor), backgroundImage: cs.backgroundImage !== 'none' ? cs.backgroundImage.slice(0, 80) : null, borderColor, borderWidth: borderW, boxShadow: cs.boxShadow !== 'none' ? cs.boxShadow.slice(0, 80) : null, color: toHex(cs.color), fontSize: cs.fontSize, lineHeight: cs.lineHeight, fontFamily: cs.fontFamily.split(',')[0].replace(/"/g, ''), padding: cs.paddingTop + ' ' + cs.paddingRight + ' ' + cs.paddingBottom + ' ' + cs.paddingLeft };
  })`,

  focusInner: `(function (hostSel, innerSel, index) { const host = document.querySelectorAll(hostSel)[index || 0]; const el = host && (innerSel ? (host.shadowRoot || host).querySelector(innerSel) : host); if (el) { el.focus(); return true; } return false; })`,

  landmarks: `(function () {
    const q = (s) => document.querySelectorAll(s).length;
    const h1 = document.querySelectorAll('h1'); const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => parseInt(h.tagName[1]));
    let skips = 0; for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) skips++;
    return { lang: document.documentElement.lang, dir: document.documentElement.dir, title: document.title, h1: h1.length, headingSkips: skips, headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].slice(0, 12).map((h) => h.tagName.toLowerCase() + ':' + h.textContent.trim().slice(0, 18)), main: q('main'), header: q('header'), footer: q('footer'), nav: q('nav, dga-nav-header'), skipLink: !!document.querySelector('a[href="#main"]'), imagesWithoutAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length, imagesWithoutLicence: [...document.querySelectorAll('img')].filter((i) => !i.dataset.licence && !i.src.startsWith('data:') && !/placehold\\.co/.test(i.src)).length };
  })`,

  clsInit: `(function () { window.__cls = 0; try { new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true }); } catch (e) {} })`,
};
