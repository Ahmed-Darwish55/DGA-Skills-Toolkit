// Centralised icon registration for DGA components (<dga-icon>, DgaButton lead/trail icons, …).
// Primary source: @platformscode/icons (D1). Fallback: Hugeicons Free (D2), only when the primary key is missing
// (or policy says so). Packages are injected by the caller, so this file works in React, Angular, ExB and vanilla
// and never imports anything itself.
import { parseIconName, platformscodeKey, hugeiconsFreeExport, isAutoMirrored } from './names.js';
import { hugeiconToDataUrl, isHugeiconData } from './hugeicons.js';

/**
 * Validate an icon payload before it is handed to addIcons. dga-icon (core 0.0.52) accepts only the raw
 * `data:image/svg+xml;utf8,<svg…>` form (PKG-ICON-03) — a URI-encoded or malformed payload renders an EMPTY reserved
 * box with a console warning, which is the "invisible icon" failure this guard prevents. Untrusted SVG (scripts,
 * event handlers, external references) is rejected outright.
 * @returns {{ ok: boolean, reason?: string }}
 */
export function validateIconData(url) {
  if (typeof url !== 'string' || !url) return { ok: false, reason: 'icon payload is not a string' };
  if (!url.startsWith('data:image/svg+xml;utf8,<svg')) return { ok: false, reason: 'payload must be a raw data:image/svg+xml;utf8,<svg…> URL (URI-encoded SVG is not parsed by dga-icon — PKG-ICON-03)' };
  if (!/<\/svg>\s*$/.test(url)) return { ok: false, reason: 'SVG is truncated (no closing </svg>)' };
  if (/<script|javascript:|\son[a-z]+\s*=|<foreignObject|xlink:href\s*=\s*["']?(?!#)|href\s*=\s*["']?https?:/i.test(url)) return { ok: false, reason: 'unsafe SVG content refused (script / event handler / external reference)' };
  return { ok: true };
}

/** dga-icon elements that rendered nothing (no <svg> inside their shadow/light DOM) — the "invisible reserved gap" check. */
export function auditRenderedIcons(root = typeof document !== 'undefined' ? document : null) {
  if (!root) return { checked: 0, empty: [] };
  const all = []; const walk = (scope) => { for (const icon of scope.querySelectorAll('dga-icon')) all.push(icon); for (const element of scope.querySelectorAll('*')) if (element.shadowRoot) walk(element.shadowRoot); };
  walk(root);
  const empty = all.filter((icon) => !(icon.shadowRoot || icon).querySelector('svg') && !icon.querySelector('svg')).map((icon) => ({ name: icon.getAttribute('name') || icon.name || null, host: icon.getRootNode().host ? icon.getRootNode().host.tagName.toLowerCase() : null }));
  return { checked: all.length, empty };
}

/**
 * @param {object} o
 * @param {(icons: Record<string,string>) => void} o.addIcons  addIcons from '@platformscode/core/components'
 * @param {Record<string,string>} [o.primary]   @platformscode/icons exports (or a subset: { arrowRight02Stroke })
 * @param {Record<string,any>}    [o.fallback]  @hugeicons/core-free-icons exports (or a subset: { ArrowRight02Icon })
 * @param {'primary-first'|'primary-only'|'fallback-first'} [o.policy]
 * @param {(info:{name:string,reason:string}) => void} [o.onMissing]
 */
export function createIconRegistry({ addIcons, primary = {}, fallback = {}, policy = 'primary-first', onMissing } = {}) {
  if (typeof addIcons !== 'function') throw new TypeError('createIconRegistry: addIcons function is required (from @platformscode/core/components)');
  const registered = new Map();   // name -> { source, key, base, variant }
  const missing = new Map();

  function resolve(name) {
    const { base, variant } = parseIconName(name);
    const pKey = platformscodeKey(base, variant);
    const fKey = hugeiconsFreeExport(base);
    let fromPrimary = typeof primary[pKey] === 'string' ? { source: '@platformscode/icons', key: pKey, url: primary[pKey] } : null;
    let primaryProblem = null;
    if (fromPrimary) {                                   // a present-but-unloadable primary glyph counts as "load failure" → fallback allowed
      const validation = validateIconData(fromPrimary.url);
      if (!validation.ok) { primaryProblem = `${pKey}: ${validation.reason}`; fromPrimary = null; }
    }
    const fallbackAllowed = variant === 'stroke';         // Hugeicons Free = stroke-rounded only
    let fromFallback = fallbackAllowed && isHugeiconData(fallback[fKey]) ? { source: '@hugeicons/core-free-icons', key: fKey, url: hugeiconToDataUrl(fallback[fKey]) } : null;
    if (fromFallback && !validateIconData(fromFallback.url).ok) fromFallback = null;
    const order = policy === 'fallback-first' ? [fromFallback, fromPrimary] : policy === 'primary-only' ? [fromPrimary] : [fromPrimary, fromFallback];
    const hit = order.find(Boolean);
    if (hit) return { ...hit, base, variant, ...(primaryProblem && hit.source !== '@platformscode/icons' ? { fallbackBecause: primaryProblem } : {}) };
    return { base, variant, reason: primaryProblem ? `primary unusable (${primaryProblem})${fallbackAllowed ? ` and no ${fKey} fallback provided` : `; Hugeicons Free has no ${variant} style`}` : !fallbackAllowed ? `no ${pKey} in primary; Hugeicons Free has no ${variant} style` : `neither ${pKey} (primary) nor ${fKey} (fallback) provided` };
  }

  /** Register names; returns a report. Registers both "base" and "base-variant" keys (dga-icon looks up either). */
  function register(names) {
    const batch = {};
    const report = { registered: [], missing: [] };
    for (const name of names) {
      const resolved = resolve(name);
      if (!resolved.url) {
        missing.set(name, resolved.reason); report.missing.push({ name, reason: resolved.reason });
        if (onMissing) onMissing({ name, reason: resolved.reason });
        continue;
      }
      batch[`${resolved.base}-${resolved.variant}`] = resolved.url;
      if (resolved.variant === 'stroke') batch[resolved.base] = resolved.url;
      registered.set(name, { source: resolved.source, key: resolved.key, base: resolved.base, variant: resolved.variant, ...(resolved.fallbackBecause ? { fallbackBecause: resolved.fallbackBecause } : {}) });
      missing.delete(name);
      report.registered.push({ name, source: resolved.source, key: resolved.key, ...(resolved.fallbackBecause ? { fallbackBecause: resolved.fallbackBecause } : {}) });
      if (resolved.fallbackBecause && onMissing) onMissing({ name, reason: 'primary glyph unusable → Hugeicons Free used: ' + resolved.fallbackBecause, level: 'warning' });
    }
    if (Object.keys(batch).length) addIcons(batch);
    return report;
  }

  return {
    register,
    resolve,
    has: (name) => registered.has(name),
    sourceOf: (name) => (registered.get(name) || {}).source || null,
    report: () => ({ registered: [...registered].map(([name, entry]) => ({ name, ...entry })), missing: [...missing].map(([name, reason]) => ({ name, reason })) }),
  };
}

/**
 * Props for DGA icon slots (DgaButton leadIconProps / DgaButtonV2 leadIconProps / <dga-icon>).
 * mirror: 'never' (default — verified for Button arrow-right-02: Figma RTL=True keeps the glyph) or 'auto'
 * (let dga-icon auto-flip arrows/chevrons in RTL). Check the component's RTL=True variant before choosing 'auto'.
 */
export function iconProps(name, { size, mirror = 'never', withName = false } = {}) {
  const { base, variant } = parseIconName(name);
  const props = { variant, ...(size != null ? { size } : {}) };
  if (withName) props.name = base;
  if (mirror === 'never' && isAutoMirrored(base)) props.flipRtl = false;
  if (mirror === 'always') props.flipRtl = true;
  return props;
}

/** Icon sizes per DGA Button size (Figma: Large 24 / Medium 20 / Small 16). */
export const BUTTON_ICON_SIZE = Object.freeze({ lg: 24, md: 20, sm: 16 });

/**
 * Props for a DgaButton / DgaButtonV2 icon slot, using only props that exist in the package API.
 * v1 (DgaButton):  { leadIconType, leadIconProps } | { trailIconType, trailIconProps } | { iconOnly, iconType, iconProps }
 * v2 (DgaButtonV2): { leadIcon: true, leadIconProps: { name, … } } | { trailIcon: true, trailIconProps } | { iconOnly, leadIcon, leadIconProps }
 * If a registry is given and the icon is not registered, returns {} (no empty 24px slot) and calls onMissing.
 */
export function buttonIcon(name, { api = 'v1', position = 'lead', size, mirror, registry, onMissing } = {}) {
  if (registry && !registry.has(name)) {
    const missingInfo = { name, reason: 'icon not registered — rendering the button without the icon slot' };
    if (onMissing) onMissing(missingInfo); else if (typeof console !== 'undefined') console.warn('[dga-skills]', missingInfo.reason, name);
    return {};
  }
  const { base } = parseIconName(name);
  if (api === 'v2') {
    const slotProps = iconProps(name, { size, mirror, withName: true });
    if (position === 'icon') return { iconOnly: true, leadIcon: true, leadIconProps: slotProps };
    return position === 'trail' ? { trailIcon: true, trailIconProps: slotProps } : { leadIcon: true, leadIconProps: slotProps };
  }
  const slotProps = iconProps(name, { size, mirror });
  if (position === 'icon') return { iconOnly: true, iconType: base, iconProps: slotProps };
  return position === 'trail' ? { trailIconType: base, trailIconProps: slotProps } : { leadIconType: base, leadIconProps: slotProps };
}
