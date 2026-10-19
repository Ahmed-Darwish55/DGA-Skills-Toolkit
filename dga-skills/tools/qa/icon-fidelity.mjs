#!/usr/bin/env node
// Ahmed Skills — icon fidelity: visual similarity of @platformscode/icons (primary) and Hugeicons Free (fallback) against
// Figma SVG exports of the DGA library instances. NAME coverage is a separate question (registry/icons/icon-map.json
// `verification.name`); this tool only measures SHAPE similarity and never changes which icon is used.
//
//   node <skill>/tools/qa/icon-fidelity.mjs --figma figma-icons.json --map <skill>/registry/icons/icon-map.json \
//        --node-modules ./node_modules --out qa-reports/icon-fidelity [--size 48] [--update-map]
//
// figma-icons.json: { "<name>|<Style>|<Type>": { svg, w, h, src, main } } exported from the DGA Components Library as SVG.
// Method: every SVG is normalised (all paint → black, viewBox → size×size), rasterised in Chromium (Playwright from the
// project's node_modules), thresholded to an ink mask; IoU = |A∩B| / |A∪B|. "iouTolerant" dilates both masks by 1px so a
// stroke-weight difference of ~1px at the chosen size does not dominate. Scores are reported, not graded: a threshold for
// "same icon" is a human decision (see README).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { readArgument, hasFlag, loadChromium } from './lib/dga-res.mjs';

const figmaPath = path.resolve(readArgument('--figma'));
const mapPath = path.resolve(readArgument('--map'));
const nodeModulesDir = path.resolve(readArgument('--node-modules', 'node_modules'));
const outDir = path.resolve(readArgument('--out', 'qa-reports/icon-fidelity'));
const SIZE = parseInt(readArgument('--size', '48'), 10);
fs.mkdirSync(path.join(outDir, 'png'), { recursive: true });

const figma = JSON.parse(fs.readFileSync(figmaPath, 'utf8'));
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const projectRequire = createRequire(path.join(nodeModulesDir, 'x.js'));
const chromium = await loadChromium(projectRequire);
if (!chromium) { console.error('playwright not found under ' + nodeModulesDir); process.exit(2); }

// ---- sources -------------------------------------------------------------------------------------------------------
const platformsCodeDir = path.join(nodeModulesDir, '@platformscode', 'icons');
const hugeDir = path.join(nodeModulesDir, '@hugeicons', 'core-free-icons');
const versions = {};
for (const [packageName, packageDir] of [['@platformscode/icons', platformsCodeDir], ['@hugeicons/core-free-icons', hugeDir]]) { try { const packageJson = JSON.parse(fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8')); versions[packageName] = { version: packageJson.version, license: packageJson.license || 'UNLICENSED/none' }; } catch { versions[packageName] = null; } }

function hugeToSvg(exportName) {
  const file = path.join(hugeDir, 'dist', 'esm', exportName + '.js');
  if (!fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/=\s*(\[[\s\S]*?\]);\s*\n\s*export/); if (!match) return null;
  let elements; try { elements = Function('"use strict"; return (' + match[1] + ')')(); } catch { return null; }
  const attributesOf = (properties) => Object.entries(properties).filter(([name]) => name !== 'key').map(([name, value]) => `${name.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase())}="${value}"`).join(' ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">${elements.map(([tag, properties]) => `<${tag} ${attributesOf(properties)}/>`).join('')}</svg>`;
}

// normalise: every paint black (currentColor/any colour), keep "none"; viewBox kept, rendered at SIZE×SIZE
function normalise(svg) {
  return svg
    .replace(/\s(fill|stroke)="(?!none)[^"]*"/g, ' $1="#000"')
    .replace(/\sstyle="[^"]*"/g, '')
    .replace(/<svg([^>]*)>/, (_match, svgAttributes) => '<svg' + svgAttributes.replace(/\s(width|height|class)="[^"]*"/g, '') + ` width="${SIZE}" height="${SIZE}" style="color:#000">`);
}
const iconDocument = (svg) => `<!doctype html><html><body style="margin:0;background:#fff">${normalise(svg)}</body></html>`;

const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM || undefined });
const page = await browser.newPage({ viewport: { width: SIZE, height: SIZE }, deviceScaleFactor: 1 });
async function mask(svg) {
  await page.setContent(iconDocument(svg));
  // runs in the browser (serialised by page.evaluate): self-contained, no module-scope helpers
  const data = await page.evaluate(async (size) => {
    const svgElement = document.querySelector('svg'); const xml = new XMLSerializer().serializeToString(svgElement);
    const image = new Image(); image.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(xml); await image.decode();
    const canvas = document.createElement('canvas'); canvas.width = size; canvas.height = size; const drawing = canvas.getContext('2d'); drawing.fillStyle = '#fff'; drawing.fillRect(0, 0, size, size); drawing.drawImage(image, 0, 0, size, size);
    const pixels = drawing.getImageData(0, 0, size, size).data; const inkMask = []; for (let i = 0; i < size * size; i++) inkMask.push(pixels[i * 4] < 128 ? 1 : 0); return inkMask;
  }, SIZE);
  return data;
}
const png = async (svg, file) => { await page.setContent(iconDocument(svg)); await page.screenshot({ path: file, clip: { x: 0, y: 0, width: SIZE, height: SIZE } }); };
const dilate = (inkMask, size = SIZE) => { const dilated = inkMask.slice(); for (let row = 0; row < size; row++) for (let column = 0; column < size; column++) if (inkMask[row * size + column]) for (let rowOffset = -1; rowOffset <= 1; rowOffset++) for (let columnOffset = -1; columnOffset <= 1; columnOffset++) { const neighbourRow = row + rowOffset, neighbourColumn = column + columnOffset; if (neighbourRow >= 0 && neighbourRow < size && neighbourColumn >= 0 && neighbourColumn < size) dilated[neighbourRow * size + neighbourColumn] = 1; } return dilated; };
const iou = (maskA, maskB) => { let intersection = 0, union = 0; for (let index = 0; index < maskA.length; index++) { if (maskA[index] && maskB[index]) intersection++; if (maskA[index] || maskB[index]) union++; } return union ? Math.round((intersection / union) * 1000) / 1000 : 0; };
// bbox-aligned IoU: crop both masks to their ink bounding boxes, resample to A×A (nearest) and dilate 1px — separates "same drawing at a
// different optical size / padding" from "different drawing". Mirrored variant catches RTL-flipped Figma instances.
const ALIGNED_SIZE = 40;
const aligned = (inkMask) => { const box = bbox(inkMask); if (!box.ink) return new Array(ALIGNED_SIZE * ALIGNED_SIZE).fill(0); const resampled = []; for (let row = 0; row < ALIGNED_SIZE; row++) for (let column = 0; column < ALIGNED_SIZE; column++) { const sourceColumn = box.x0 + Math.floor((column / ALIGNED_SIZE) * box.w), sourceRow = box.y0 + Math.floor((row / ALIGNED_SIZE) * box.h); resampled.push(inkMask[sourceRow * SIZE + sourceColumn]); } return resampled; };
const flipH = (inkMask, size) => { const flipped = inkMask.slice(); for (let row = 0; row < size; row++) for (let column = 0; column < size; column++) flipped[row * size + column] = inkMask[row * size + (size - 1 - column)]; return flipped; };
const scores = (figmaMask, iconMask) => { const figmaAligned = dilate(aligned(figmaMask), ALIGNED_SIZE), iconAligned = dilate(aligned(iconMask), ALIGNED_SIZE); const result = { iou: iou(figmaMask, iconMask), iouTolerant: iou(dilate(figmaMask), dilate(iconMask)), iouAligned: iou(figmaAligned, iconAligned) }; const mirroredScore = iou(figmaAligned, flipH(iconAligned, ALIGNED_SIZE)); if (mirroredScore > result.iouAligned + 0.1) { result.iouAlignedMirrored = mirroredScore; result.mirrored = true; } return result; };
const bbox = (inkMask) => { const size = SIZE; let minX = size, minY = size, maxX = -1, maxY = -1, inkCount = 0; for (let row = 0; row < size; row++) for (let column = 0; column < size; column++) if (inkMask[row * size + column]) { inkCount++; if (column < minX) minX = column; if (column > maxX) maxX = column; if (row < minY) minY = row; if (row > maxY) maxY = row; } return inkCount ? { x0: minX, y0: minY, w: maxX - minX + 1, h: maxY - minY + 1, ink: inkCount } : { ink: 0 }; };

const results = { generated: new Date().toISOString(), size: SIZE, sources: versions, figmaFile: path.basename(figmaPath), method: 'ink-mask IoU at SIZE px after paint normalisation; iouTolerant = IoU after 1px dilation of both masks', icons: [] };
for (const [key, figmaIcon] of Object.entries(figma)) {
  const [name, style, type] = key.split('|');
  const entry = map.icons.find((icon) => icon.figmaName === name && icon.figmaStyle === style && icon.figmaType === type) || map.icons.find((icon) => icon.figmaName === name);
  const record = { key, name, style, type, figma: { w: figmaIcon.w, h: figmaIcon.h, src: figmaIcon.src, exportedFrom: figmaIcon.main }, primary: null, fallback: null };
  const figmaMask = await mask(figmaIcon.svg); const figmaBox = bbox(figmaMask); record.figma.ink = figmaBox.ink;
  await png(figmaIcon.svg, path.join(outDir, 'png', `${name}__figma.png`));
  if (entry?.primary?.svg) {
    const file = path.join(platformsCodeDir, entry.primary.svg);
    if (fs.existsSync(file)) { const svg = fs.readFileSync(file, 'utf8'); const iconMask = await mask(svg); record.primary = { key: entry.primary.key, file: entry.primary.svg, ...scores(figmaMask, iconMask), bbox: bbox(iconMask), figmaBbox: figmaBox }; await png(svg, path.join(outDir, 'png', `${name}__platformscode.png`)); }
    else record.primary = { key: entry.primary.key, error: 'svg file missing: ' + entry.primary.svg };
  } else record.primary = { error: entry ? 'no primary in icon-map' : 'icon not in icon-map' };
  if (entry?.fallback?.export) {
    const svg = hugeToSvg(entry.fallback.export);
    if (svg) { const iconMask = await mask(svg); record.fallback = { export: entry.fallback.export, ...scores(figmaMask, iconMask), bbox: bbox(iconMask) }; await png(svg, path.join(outDir, 'png', `${name}__hugeicons.png`)); }
    else record.fallback = { export: entry.fallback.export, error: 'export not found in @hugeicons/core-free-icons' };
  } else record.fallback = { error: entry ? 'no fallback in icon-map' : 'icon not in icon-map' };
  results.icons.push(record);
  console.log(`${key.padEnd(40)} ink=${String(figmaBox.ink).padStart(4)}  primary iou=${record.primary?.iou ?? '-'} aligned=${record.primary?.iouAligned ?? '-'}${record.primary?.mirrored ? '(mirror ' + record.primary.iouAlignedMirrored + ')' : ''}  fallback iou=${record.fallback?.iou ?? '-'} aligned=${record.fallback?.iouAligned ?? '-'}${record.fallback?.mirrored ? '(mirror ' + record.fallback.iouAlignedMirrored + ')' : ''}`);
}
await browser.close();

// contact sheet (HTML, local PNGs) + markdown summary
const rows = results.icons.map((icon) => `<tr><td>${icon.key}</td><td><img src="png/${icon.name}__figma.png"></td><td><img src="png/${icon.name}__platformscode.png" onerror="this.replaceWith('—')"><br>${icon.primary?.iou ?? '—'} / ${icon.primary?.iouTolerant ?? '—'}</td><td><img src="png/${icon.name}__hugeicons.png" onerror="this.replaceWith('—')"><br>${icon.fallback?.iou ?? '—'} / ${icon.fallback?.iouTolerant ?? '—'}</td></tr>`).join('\n');
fs.writeFileSync(path.join(outDir, 'contact-sheet.html'), `<!doctype html><meta charset="utf-8"><title>Icon fidelity</title><style>body{font:13px system-ui;padding:16px}table{border-collapse:collapse}td,th{border:1px solid #ddd;padding:6px;text-align:center}img{width:48px;height:48px;image-rendering:pixelated;background:#fff}</style><h1>Icon fidelity — Figma export vs @platformscode/icons vs Hugeicons Free (@${SIZE}px, IoU / IoU-tolerant)</h1><table><tr><th>Figma instance</th><th>Figma</th><th>@platformscode/icons</th><th>Hugeicons Free</th></tr>${rows}</table>`);
const numbersOnly = (values) => values.filter((value) => typeof value === 'number');
const countAtLeast = (values, threshold) => values.filter((value) => value >= threshold).length;
const statAligned = (sourceKey) => { const values = numbersOnly(results.icons.map((icon) => icon[sourceKey] ? Math.max(icon[sourceKey].iouAligned ?? 0, icon[sourceKey].iouAlignedMirrored ?? 0) : undefined)); return { n: values.length, ge80: countAtLeast(values, 0.8), ge90: countAtLeast(values, 0.9), lt50: values.filter((value) => value < 0.5).length }; };
const stat = (sourceKey) => { const values = numbersOnly(results.icons.map((icon) => icon[sourceKey]?.iou)); values.sort((left, right) => left - right); return values.length ? { n: values.length, min: values[0], median: values[Math.floor(values.length / 2)], max: values[values.length - 1], ge80: countAtLeast(values, 0.8), ge90: countAtLeast(values, 0.9) } : { n: 0 }; };
const statTolerant = (sourceKey) => { const values = numbersOnly(results.icons.map((icon) => icon[sourceKey]?.iouTolerant)); return { ge80: countAtLeast(values, 0.8), ge90: countAtLeast(values, 0.9), n: values.length }; };
results.summary = { figmaIcons: results.icons.length, primary: stat('primary'), fallback: stat('fallback'), primaryAligned: statAligned('primary'), fallbackAligned: statAligned('fallback'), primaryTolerant: statTolerant('primary'), fallbackTolerant: statTolerant('fallback') };
const markdown = [`# Icon fidelity — ${results.generated}`, '', `Figma exports compared: **${results.icons.length}** · size ${SIZE}px · sources: ${Object.entries(versions).map(([packageName, packageInfo]) => `${packageName}@${packageInfo?.version} (${packageInfo?.license})`).join(', ')}`, '', '> Name coverage (does the icon exist under this name in the package) is tracked separately in registry/icons/icon-map.json. The numbers here are SHAPE similarity only. IoU is strict pixel overlap at ' + SIZE + 'px (a 20px Figma instance drawn edge-to-edge vs a 24px grid with padding scores low even when the drawing is identical); the tolerant value dilates both masks by 1px; **aligned** crops both to their ink bounding box first (then 1px tolerance), so it answers "is it the same drawing?" independent of optical size. "mirrored" marks a Figma instance that was flipped for RTL. No threshold is applied automatically — read the contact sheet.', '',
  `Primary @platformscode/icons: n=${results.summary.primary.n}, median IoU ${results.summary.primary.median}, ≥0.8: ${results.summary.primary.ge80}, ≥0.9: ${results.summary.primary.ge90} (tolerant ≥0.8: ${results.summary.primaryTolerant.ge80}, ≥0.9: ${results.summary.primaryTolerant.ge90})`,
  `Fallback Hugeicons Free: n=${results.summary.fallback.n}, median IoU ${results.summary.fallback.median}, ≥0.8: ${results.summary.fallback.ge80}, ≥0.9: ${results.summary.fallback.ge90} (tolerant ≥0.8: ${results.summary.fallbackTolerant.ge80}, ≥0.9: ${results.summary.fallbackTolerant.ge90})`, '',
  `Aligned (same drawing?): @platformscode/icons ≥0.8: ${results.summary.primaryAligned.ge80}/${results.summary.primaryAligned.n}, ≥0.9: ${results.summary.primaryAligned.ge90}, <0.5 (different drawing): ${results.summary.primaryAligned.lt50} · Hugeicons Free ≥0.8: ${results.summary.fallbackAligned.ge80}/${results.summary.fallbackAligned.n}, ≥0.9: ${results.summary.fallbackAligned.ge90}, <0.5: ${results.summary.fallbackAligned.lt50}`, '',
  '| Figma instance | Figma px | exported from | @platformscode/icons | IoU | tolerant | aligned | Hugeicons Free | IoU | tolerant | aligned |', '|---|---|---|---|---|---|---|---|---|---|---|'];
const alignedCell = (score) => score ? `${score.iouAligned ?? '—'}${score.mirrored ? ` (mirrored ${score.iouAlignedMirrored})` : ''}` : '—';
for (const icon of results.icons) markdown.push(`| ${icon.key} | ${icon.figma.w}×${icon.figma.h} | ${icon.figma.src} | ${icon.primary?.key || icon.primary?.error || '—'} | ${icon.primary?.iou ?? '—'} | ${icon.primary?.iouTolerant ?? '—'} | ${alignedCell(icon.primary)} | ${icon.fallback?.export || icon.fallback?.error || '—'} | ${icon.fallback?.iou ?? '—'} | ${icon.fallback?.iouTolerant ?? '—'} | ${alignedCell(icon.fallback)} |`);
fs.writeFileSync(path.join(outDir, 'REPORT.md'), markdown.join('\n') + '\n');
fs.writeFileSync(path.join(outDir, 'results.json'), JSON.stringify(results, null, 1));

if (hasFlag('--update-map')) {
  for (const icon of results.icons) {
    const mapEntry = map.icons.find((candidate) => candidate.figmaName === icon.name && candidate.figmaStyle === icon.style && candidate.figmaType === icon.type); if (!mapEntry) continue;
    mapEntry.verification = mapEntry.verification || {};
    const formatScore = (score) => score && typeof score.iou === 'number' ? `${score.iou} (aligned ${score.iouAligned}${score.mirrored ? ', mirrored ' + score.iouAlignedMirrored : ''})` : 'n/a';
    mapEntry.verification.shape = `IoU vs Figma export @${SIZE}px: platformscode ${formatScore(icon.primary)}, hugeicons ${formatScore(icon.fallback)}; Figma source ${icon.figma.src} ${icon.figma.w}px`;
    // heuristic class from the aligned score (documented thresholds; the contact sheet is the evidence, this is only a label)
    const shapeClass = (score) => { if (!score || typeof score.iouAligned !== 'number') return 'NOT VERIFIED'; const best = Math.max(score.iouAligned, score.iouAlignedMirrored || 0); return best >= 0.8 ? 'MATCH (aligned ≥0.8)' : best < 0.5 ? 'DIFFERENT DRAWING (aligned <0.5)' : 'UNCLEAR (0.5–0.8) — look at the contact sheet'; };
    mapEntry.verification.shapeClass = { platformscode: shapeClass(icon.primary), hugeicons: shapeClass(icon.fallback) };
  }
  map.shapeVerification = { date: results.generated.slice(0, 10), figmaExports: results.icons.length, method: results.method, classes: 'MATCH aligned ≥0.8 · UNCLEAR 0.5–0.8 · DIFFERENT DRAWING <0.5 (heuristic labels; contact sheet is the evidence)', summary: results.summary, report: path.relative(path.dirname(mapPath), path.join(outDir, 'REPORT.md')), note: 'Shape verification does NOT change the source policy (primary @platformscode/icons, fallback Hugeicons Free). A per-icon override is a project decision recorded in .claude/dga-skills.json, never silent.' };
  fs.writeFileSync(mapPath, JSON.stringify(map, null, 1));
  console.log('icon-map.json updated (verification.shape for ' + results.icons.length + ' icons)');
}
console.log(`\nwritten ${outDir}/REPORT.md, results.json, contact-sheet.html`);
