// Expected values for a DGA component state, read from the local Figma extraction (references/dga-live/data).
// No Figma access needed. Returns null when the variant is not in the data (never guesses).
import fs from 'node:fs';
import path from 'node:path';
import { readText } from './dga-res.mjs';

const cache = new Map();
export function loadSet(skillDir, platform, file, setName) {
  const key = `${platform}/${file}`;
  if (!cache.has(key)) cache.set(key, JSON.parse(readText(skillDir, `references/dga-live/data/${platform}/${file}.json`)));   // disk or DATA-PACK (Cowork edition)
  const componentData = cache.get(key);
  return componentData.sets.find((componentSet) => componentSet.name === setName) || null;
}

const hexOf = (paint) => (paint && paint.includes('=') ? paint.split('=').pop().trim().toLowerCase() : null);
const tokenOf = (paint) => (paint && paint.includes('=') ? paint.split('=')[0].trim() : null);

/** Find a variant whose "v" string contains every key=value of `variant` (order-insensitive). */
export function findVariant(set, variant) {
  const wanted = variant.split(',').map((part) => part.trim()).filter(Boolean);
  return set.variants.find((candidate) => wanted.every((pair) => candidate.v.split(',').map((part) => part.trim()).includes(pair))) || null;
}

/** Normalise a variant to the properties the harness can measure in a browser. */
export function expectedFromVariant(variantData) {
  if (!variantData) return null;
  const strokeWeights = variantData.sw == null ? null : (typeof variantData.sw === 'string' ? variantData.sw.split(' ').map(Number) : [variantData.sw]);
  return {
    variant: variantData.v,
    height: variantData.h ?? null,
    width: variantData.w ?? null,
    radius: variantData.r ?? 0,
    padding: variantData.pad ?? null,
    gap: variantData.gap ?? null,
    background: hexOf(variantData.fill),
    backgroundToken: tokenOf(variantData.fill),
    borderColor: hexOf(variantData.stroke),
    borderToken: tokenOf(variantData.stroke),
    borderWidth: strokeWeights ? Math.max(...strokeWeights) : 0,
    shadow: variantData.fx || null,
    gradient: variantData.fill && variantData.fill.startsWith('GRADIENT') ? variantData.fill : null,
  };
}

/** Parse one `kids` entry ("Name:{json} > [ ... ]") into { name, props }. Returns null when it cannot be parsed. */
export function parseKid(entry) {
  const i = entry.indexOf(':{'); if (i < 0) return null;
  const name = entry.slice(0, i).trim(); let depth = 0;
  for (let j = i + 1; j < entry.length; j++) {
    if (entry[j] === '{') depth++; else if (entry[j] === '}') { depth--; if (depth === 0) { try { return { name, props: JSON.parse(entry.slice(i + 1, j + 1)) }; } catch { return null; } } }
  }
  return null;
}

/** Find a named child frame of a variant (first level of `kids`), e.g. "Input Field" or "Accordion header". */
export function findChild(variantData, childName) {
  for (const kidEntry of variantData.kids || []) { const kid = parseKid(kidEntry); if (kid && kid.name.toLowerCase() === childName.toLowerCase()) return { v: `${variantData.v} » ${kid.name}`, ...kid.props }; }
  return null;
}

/**
 * Expected values for { platform, file, set, variant, child? }. With `child`, the named first-level child frame of the
 * variant is used (the measurable box of composite components, e.g. Text Input » "Input Field"), never the variant root.
 */
export function expectedFor(skillDir, { platform = 'web', file, set, variant, child }) {
  const componentSet = loadSet(skillDir, platform, file, set);
  if (!componentSet) return { error: `set ${set} not found in ${platform}/${file}` };
  const variantData = findVariant(componentSet, variant);
  if (!variantData) return { error: `variant not found: ${variant}`, available: componentSet.variants.length };
  if (child) { const childData = findChild(variantData, child); if (!childData) return { error: `child "${child}" not found in variant (kids: ${(variantData.kids || []).map((kidEntry) => kidEntry.split(':')[0]).join(', ')})` }; return { ...expectedFromVariant(childData), child }; }
  return expectedFromVariant(variantData);
}

/** All hex colours that appear anywhere in the token file (palette for the token lint). */
export function tokenPalette(skillDir) {
  const json = fs.readFileSync(path.join(skillDir, 'references/dga-live/foundations/dga-tokens.json'), 'utf8');
  const css = fs.readFileSync(path.join(skillDir, 'references/dga-live/foundations/dga-tokens.css'), 'utf8');
  const palette = new Set();
  for (const hex of hexColoursIn(json + css)) palette.add(hex);
  palette.add('#ffffff'); palette.add('#000000');
  return palette;
}

/** Every hex colour literal (#rgb / #rrggbb) in `text`, in order, as '#' + lowercase 6 digits (shorthand expanded). Shared with the CSS lint in run.mjs. */
export function hexColoursIn(text) {
  return [...text.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)].map((match) => {
    let digits = match[1].toLowerCase(); if (digits.length === 3) digits = digits.split('').map((digit) => digit + digit).join('');
    return '#' + digits;
  });
}
