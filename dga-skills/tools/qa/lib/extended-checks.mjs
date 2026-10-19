// DGA Skills Toolkit — extended QA checks. All objective; each returns PASS / FAIL / NOT VERIFIED with evidence.
//
//  zoom200     WCAG 1.4.4 / 1.4.10 — the page at 200 % browser zoom (CSS viewport = base/2, deviceScaleFactor 2):
//              no horizontal scroll, no clipped text, focusable controls still reachable. (Browser zoom; text-only
//              resize is not emulated — DGA tokens are px-based, noted in the report.)
//  widgets     (button activations are contained — click counted in the capture phase at the host and stopped, so the
//              test does not navigate away; set allowSideEffects:true to let the app handler run)
//  widgets     keyboard operation of interactive widgets: Enter / Space / Arrow keys / Escape per widget type
//              (dropdown, accordion, tabs, modal, button, checkbox, radio). Real key presses (page.keyboard), state
//              read through open shadow roots. Vendor defects stay FAIL (attribution only).
//  forms       validation behaviour: empty submit shows an error summary (role=alert), marks invalid fields,
//              moves focus to the first invalid field; Enter inside a text field submits (implicit submission).
//  bundle      size budget of the built app (gzip), per type and total.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// ---------- in-page helpers (serialised into page.evaluate) ----------
const DEEP = `
  const deepAll = (root, out = []) => { for (const e of root.querySelectorAll('*')) { out.push(e); if (e.shadowRoot) deepAll(e.shadowRoot, out); } return out; };
  const deepQ = (root, sel) => { const d = root.querySelector(sel); if (d) return d; for (const e of root.querySelectorAll('*')) if (e.shadowRoot) { const f = deepQ(e.shadowRoot, sel); if (f) return f; } return null; };
  const host = (sel, i) => document.querySelectorAll(sel)[i || 0] || null;
  const active = () => { let a = document.activeElement; while (a && a.shadowRoot && a.shadowRoot.activeElement) a = a.shadowRoot.activeElement; return a; };
  const visible = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0'; };
  const sig = (h) => { if (!h) return 'missing'; const parts = []; for (const e of [h, ...deepAll(h.shadowRoot || h)]) { const c = typeof e.className === 'string' ? e.className.split(/\\s+/).filter((x) => /open|active|selected|expanded|checked|show|visible|collapsed/i.test(x)).join('.') : ''; const a = ['aria-expanded', 'aria-selected', 'aria-checked', 'aria-hidden', 'open', 'checked', 'hidden'].map((k) => e.getAttribute && e.getAttribute(k)).join(','); const chk = e.tagName === 'INPUT' ? String(e.checked) : ''; const vis = /panel|content|list|body|dialog|menu/i.test(typeof e.className === 'string' ? e.className : '') ? String(visible(e)) : ''; if (c || a.replace(/,/g, '') || chk || vis) parts.push(e.tagName + ':' + c + ':' + a + ':' + chk + ':' + vis); } return parts.join('|'); };
  const describe = (el) => el ? (el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(/\\s+/)[0] : '') + (el.textContent ? '(' + el.textContent.trim().slice(0, 18) + ')' : '')) : 'none';
`;
export const inPage = (body) => new Function('arg', DEEP + body);   // eslint-disable-line no-new-func

const FOCUS_DEFAULT = {
  dropdown: '.dropdown__btn, button', accordion: 'button, [role="button"], a[href], [tabindex="0"]', tabs: '[role="tab"], button',
  modal: 'button, a', button: 'button, a', checkbox: 'input[type="checkbox"], [role="checkbox"], button', radio: 'input[type="radio"], [role="radio"], button',
};
// Key CASES per widget type. Each case starts from a freshly loaded page with focus on the widget's control, presses its keys
// in order and asserts the expectation of every key that has one (null = setup key, not asserted):
//   'changed' state differs from before the key · 'restored' back to the initial state · 'focusMoved' active element changed
//   'click' an activation event reached the host · 'dialogOpen' / 'dialogClosed' · '+focusTrigger' focus is back on the trigger.
const CASES = {
  dropdown: { 'Enter opens': [['Enter', 'changed']], 'Escape closes, focus stays on trigger': [['Enter', null], ['Escape', 'restored+focusTrigger']],
    'Space opens': [['Space', 'changed']], 'ArrowDown opens / moves to an option': [['ArrowDown', 'changedOrFocusMoved']] },
  accordion: { 'Enter toggles open': [['Enter', 'changed']], 'Enter toggles back': [['Enter', null], ['Enter', 'restored']], 'Space toggles': [['Space', 'changed']] },
  tabs: { 'Arrow (next) moves focus': [['ArrowNext', 'focusMoved']], 'Arrow (prev) moves focus': [['ArrowPrev', 'focusMoved']], 'Enter/Space activates': [['ArrowNext', null], ['Enter', 'changed']] },
  button: { 'Enter activates': [['Enter', 'click']], 'Space activates': [['Space', 'click']] },
  checkbox: { 'Space toggles': [['Space', 'changed']], 'Space toggles back': [['Space', null], ['Space', 'restored']] },
  radio: { 'Arrow moves selection': [['ArrowDown', 'changedOrFocusMoved']] },
  modal: { 'Enter opens dialog': [['Enter', 'dialogOpen']], 'Escape closes dialog, focus returns': [['Enter', null], ['Escape', 'dialogClosed+focusTrigger']] },
};
const DIALOG_SEL = '[role="dialog"], [aria-modal="true"], dialog[open], .modal--open, .dga-modal--open';

export async function widgetKeyboard(page, widgets, dir, options = {}) {
  const output = [];
  const settle = options.reloadSettleMs || 1500;
  for (const widget of widgets) {
    const record = { id: widget.id, type: widget.type, selector: widget.selector, dir, steps: [] };
    const focusSelector = widget.focus || FOCUS_DEFAULT[widget.type] || 'button';
    const cases = widget.cases || CASES[widget.type];
    if (!cases) { record.status = 'NOT VERIFIED'; record.error = `unknown widget type ${widget.type}`; output.push(record); continue; }
    // in-page argument (the evaluated body reads it as `arg`; its short keys are part of that in-page code)
    const pageArgument = { sel: widget.selector, i: widget.index || 0, f: focusSelector, d: widget.dialog || DIALOG_SEL, contain: widget.type === 'button' && widget.allowSideEffects !== true };
    const prepare = () => page.evaluate(inPage(`const h = host(arg.sel, arg.i); if (!h) return 'host not found'; h.__dgaClicks = 0; if (!h.__dgaClickHook) { h.addEventListener('click', (e) => { h.__dgaClicks++; if (arg.contain) { e.stopPropagation(); e.preventDefault(); } }, true); h.__dgaClickHook = true; } const t = deepQ(h.shadowRoot || h, arg.f) || (h.matches(arg.f) ? h : null); if (!t) return 'focus target not found: ' + arg.f; t.focus(); return active() === t ? true : 'focus did not land (' + describe(active()) + ')';`), pageArgument);
    const snap = () => page.evaluate(inPage(`const h = host(arg.sel, arg.i); if (!h) return { missing: true, sig: 'missing', focus: describe(active()), focusIsTrigger: false, clicks: 0, dialog: false, href: location.href }; const t = deepQ(h.shadowRoot || h, arg.f); const dlg = [...document.querySelectorAll(arg.d)].concat(deepAll(document).filter((e) => e.matches && e.matches(arg.d))).some(visible); return { sig: sig(h), focus: describe(active()), focusIsTrigger: active() === t, clicks: h.__dgaClicks || 0, dialog: dlg };`), pageArgument);
    let first = true;
    for (const [caseName, keys] of Object.entries(cases)) {
      if (!first) { await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(settle); }
      first = false;
      const prepared = await prepare();
      if (prepared !== true) { record.steps.push({ case: caseName, key: '-', expect: '-', status: 'NOT VERIFIED', focus: prepared }); continue; }
      const initial = await snap(); let before = initial; let status = 'PASS'; const trail = []; let changedOnce = false;
      for (const [keyName, expect] of keys) {
        const key = keyName === 'ArrowNext' ? (dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight') : keyName === 'ArrowPrev' ? (dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft') : keyName;
        await page.keyboard.press(key);
        await page.waitForTimeout(widget.settleMs || 350);
        const after = await snap();
        if (after.missing) { status = 'FAIL'; trail.push(`${keyName}: widget disappeared (${after.href})`); break; }
        const changedNow = after.sig !== initial.sig;
        if (expect) {
          const pass = expect.split('+').every((expectation) => ({
            changed: after.sig !== before.sig,
            restored: changedOnce && after.sig === initial.sig,   // 'restored' only counts when the setup key really changed the state
            focusMoved: after.focus !== before.focus,
            changedOrFocusMoved: after.sig !== before.sig || after.focus !== before.focus, click: after.clicks > before.clicks,
            dialogOpen: after.dialog === true, dialogClosed: after.dialog === false, focusTrigger: after.focusIsTrigger,
          })[expectation] === true);
          if (!pass) status = 'FAIL';
          trail.push(`${keyName}→${expect}:${pass ? 'ok' : 'NO'} (focus ${after.focus})`);
        } else trail.push(`${keyName} (setup${changedNow ? '' : ' — no state change'})`);
        if (changedNow) changedOnce = true;
        before = after;
      }
      record.steps.push({ case: caseName, key: keys.map((keyStep) => keyStep[0]).join('+'), expect: keys.filter((keyStep) => keyStep[1]).map((keyStep) => keyStep[1]).join(','), status, focus: trail.join('; ') });
    }
    record.status = record.steps.some((step) => step.status === 'FAIL') ? 'FAIL' : record.steps.every((step) => step.status === 'NOT VERIFIED') ? 'NOT VERIFIED' : 'PASS';
    output.push(record);
  }
  return output;
}

export async function formValidation(page, forms) {
  const output = [];
  for (const form of forms) {
    const record = { id: form.id, selector: form.selector, checks: [] };
    const add = (id, title, passed, evidence) => record.checks.push({ id, title, status: passed ? 'PASS' : 'FAIL', evidence: String(evidence).slice(0, 200) });
    const found = await page.evaluate((selector) => !!document.querySelector(selector), form.selector);
    if (!found) { record.status = 'NOT VERIFIED'; record.error = 'form not found'; output.push(record); continue; }
    // 1) empty submit via the visible submit control
    const clicked = await page.evaluate(inPage(`const form = document.querySelector(arg.f); const h = form.querySelector(arg.s); if (!h) return false; const b = deepQ(h.shadowRoot || h, 'button') || h; b.click(); return true;`), { f: form.selector, s: form.submit || '[type="submit"], dga-button-v2' });
    await page.waitForTimeout(form.settleMs || 500);
    const afterSubmit = await page.evaluate(inPage(`const form = document.querySelector(arg.f); const sum = document.querySelector(arg.sum); const invalid = deepAll(form).filter((e) => e.getAttribute && (e.getAttribute('aria-invalid') === 'true' || (e.tagName.startsWith('DGA-') && (e.hasAttribute('error') || e.error === true)))); const a = active(); const inInvalid = invalid.some((i) => i === a || i.contains(a) || (i.shadowRoot && i.shadowRoot.contains(a))) || (a && a.closest && !!a.closest('[aria-invalid="true"]')); let hostOfA = a; while (hostOfA && hostOfA.getRootNode && hostOfA.getRootNode() !== document) hostOfA = hostOfA.getRootNode().host; const hostInvalid = hostOfA && (hostOfA.hasAttribute && (hostOfA.hasAttribute('error') || hostOfA.error === true)); return { summary: !!sum && visible(sum), summaryRole: sum ? (sum.getAttribute('role') || (sum.closest('[role]') && sum.closest('[role]').getAttribute('role'))) : null, summaryText: sum ? sum.textContent.trim().slice(0, 100) : '', invalid: invalid.length, focus: describe(a), focusOnInvalid: !!(inInvalid || hostInvalid) };`), { f: form.selector, sum: form.summary || '[role="alert"]' });
    add('FV-1', 'empty submit shows a visible error summary', clicked && afterSubmit.summary, `${afterSubmit.summaryText}`);
    add('FV-2', 'error summary is announced (role=alert / aria-live)', /alert|status/.test(String(afterSubmit.summaryRole)), `role=${afterSubmit.summaryRole}`);
    add('FV-3', 'invalid fields are marked (aria-invalid / DGA error prop)', afterSubmit.invalid > 0, `${afterSubmit.invalid} field(s)`);
    add('FV-4', 'focus moves to the first invalid field', afterSubmit.focusOnInvalid, afterSubmit.focus);
    // 2) implicit submission: Enter inside the first text field triggers validation too (reload clears the previous state)
    if (form.implicitSubmit !== false) {
      await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(form.reloadSettleMs || 1500);
      const focused = await page.evaluate(inPage(`const form = document.querySelector(arg.f); const i = deepAll(form).find((e) => e.tagName === 'INPUT' && /^(text|email|tel|search|)$/.test(e.type || '')); if (!i) return false; i.focus(); return true;`), { f: form.selector });
      if (focused) { await page.keyboard.press('Enter'); await page.waitForTimeout(form.settleMs || 500); }
      const summaryAfterEnter = await page.evaluate(inPage(`const s = document.querySelector(arg.sum); return !!s && visible(s);`), { sum: form.summary || '[role="alert"]' });
      add('FV-5', 'Enter in a text field submits the form (implicit submission → validation)', focused && summaryAfterEnter, focused ? (summaryAfterEnter ? 'summary shown' : 'no summary after Enter') : 'no text input');
    }
    record.status = record.checks.every((check) => check.status === 'PASS') ? 'PASS' : 'FAIL';
    output.push(record);
  }
  return output;
}

/** 200 % zoom = the same physical width with half the CSS pixels. Returns overflow / clipping / reachability for one URL. */
export async function zoom200(browser, url, openPage, evaluateCheck, options) {
  const base = options.baseWidth || 1280;
  const context = await browser.newContext({ viewport: { width: Math.round(base / 2), height: 450 }, deviceScaleFactor: 2 });
  try {
    const { page, logs } = await openPage(context, url);
    const overflow = await evaluateCheck(page, 'overflow');
    const reach = await page.evaluate(inPage(`const up = (n) => n.assignedSlot || n.parentElement || (n.getRootNode() && n.getRootNode().host) || null; const inertUp = (n) => { while (n) { if (n.inert) return true; n = up(n); } return false; }; const f = deepAll(document).filter((e) => e.matches && e.matches('a[href], button:not([disabled]), input:not([type=hidden]), select, textarea, [tabindex="0"]') && visible(e) && !inertUp(e)); const W = document.documentElement.clientWidth; const off = f.filter((e) => { const r = e.getBoundingClientRect(); return r.right > W + 1 || r.left < -1; }); return { focusable: f.length, offscreen: off.length, samples: off.slice(0, 4).map(describe) };`), {});
    const textClip = await page.evaluate(inPage(`const W = document.documentElement.clientWidth; const out = []; for (const e of deepAll(document)) { if (!e.childNodes || ![...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue; const cs = getComputedStyle(e); if ((cs.overflowX === 'hidden' || cs.overflow === 'hidden' || cs.textOverflow === 'ellipsis') && e.scrollWidth > e.clientWidth + 2 && cs.whiteSpace !== 'nowrap' && !/sr-only|visually-hidden/.test(e.className)) out.push(describe(e)); } return out.slice(0, 8);`), {});
    const shot = options.shot; if (shot) { try { await page.screenshot({ path: shot, fullPage: false, animations: 'disabled', timeout: 10000 }); } catch { /* screenshot is evidence only */ } }
    return { cssWidth: Math.round(base / 2), deviceScaleFactor: 2, horizontalScroll: overflow.horizontalScroll, culprit: overflow.culprits && overflow.culprits[0] ? (overflow.culprits[0].host || overflow.culprits[0].el) : null, clipped: overflow.clippedCount, textClipped: textClip, reach, console: logs.length, screenshot: shot ? path.basename(shot) : null,
      status: !overflow.horizontalScroll && overflow.clippedCount === 0 && textClip.length === 0 && reach.offscreen === 0 ? 'PASS' : 'FAIL' };
  } finally { await context.close(); }
}

/** gzip sizes of the built assets against budgets (KB). */
export function bundleBudget(configDirectory, bundleConfig) {
  const dist = path.resolve(configDirectory, bundleConfig.dist || 'dist');
  if (!fs.existsSync(dist)) return { status: 'NOT VERIFIED', error: `build output not found: ${dist} (run the build first)` };
  const files = []; const walk = (directory) => { for (const entryName of fs.readdirSync(directory)) { const entryPath = path.join(directory, entryName); const stats = fs.statSync(entryPath); if (stats.isDirectory()) walk(entryPath); else files.push(entryPath); } }; walk(dist);
  const gzipBytes = { js: 0, css: 0, font: 0, legacyFont: 0, other: 0 }; const raw = { js: 0, css: 0, font: 0, legacyFont: 0, other: 0 }; const top = [];
  for (const file of files) {
    if (/\.(html|map)$/.test(file)) continue;
    const buffer = fs.readFileSync(file); const gzipSize = zlib.gzipSync(buffer, { level: 9 }).length;
    const kind = /\.m?js$/.test(file) ? 'js' : file.endsWith('.css') ? 'css' : file.endsWith('.woff2') ? 'font' : /\.(woff|ttf|otf|eot)$/.test(file) ? 'legacyFont' : 'other';
    gzipBytes[kind] += gzipSize; raw[kind] += buffer.length; top.push({ file: path.relative(dist, file), kind, rawKB: +(buffer.length / 1024).toFixed(1), gzipKB: +(gzipSize / 1024).toFixed(1) });
  }
  const toKilobytes = (bytes) => +(bytes / 1024).toFixed(1);
  // totalKB = what a modern browser downloads: JS + CSS + woff2 fonts + other assets (legacy woff/ttf fallbacks are listed, not counted)
  const totals = { jsKB: toKilobytes(gzipBytes.js), cssKB: toKilobytes(gzipBytes.css), fontKB: toKilobytes(gzipBytes.font), otherKB: toKilobytes(gzipBytes.other), legacyFontKB: toKilobytes(gzipBytes.legacyFont), totalKB: toKilobytes(gzipBytes.js + gzipBytes.css + gzipBytes.font + gzipBytes.other), rawJsKB: toKilobytes(raw.js), rawCssKB: toKilobytes(raw.css) };
  const budgets = bundleConfig.budgets || {}; const over = [];
  for (const [budgetKey, limit] of Object.entries(budgets)) if (totals[budgetKey] !== undefined && totals[budgetKey] > limit) over.push(`${budgetKey} ${totals[budgetKey]} > ${limit}`);
  return { dist: path.relative(configDirectory, dist), gzip: true, totals, budgets, over, largest: top.sort((left, right) => right.gzipKB - left.gzipKB).slice(0, 6), status: Object.keys(budgets).length ? (over.length ? 'FAIL' : 'PASS') : 'NOT VERIFIED' };
}
