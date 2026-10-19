// DGA Skills Toolkit — resource resolver for Node tools (mirror of tools/dga_res.py for the files Node reads).
// Full release: files on disk. Claude Desktop / Cowork edition: raw data packed in references/dga-live/DATA-PACK.json.gz
// (same bytes, SHA-256 verified on read). No network, read-only.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';

const packs = new Map();
function pack(skillDir) {
  if (!packs.has(skillDir)) {
    const packPath = path.join(skillDir, 'references/dga-live/DATA-PACK.json.gz');
    packs.set(skillDir, fs.existsSync(packPath) ? JSON.parse(zlib.gunzipSync(fs.readFileSync(packPath)).toString('utf8')).files : {});
  }
  return packs.get(skillDir);
}

export function readText(skillDir, relativePath) {
  const filePath = path.join(skillDir, relativePath);
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf8');
  const packedEntry = pack(skillDir)[relativePath.split(path.sep).join('/')];
  if (!packedEntry) throw new Error(`not found (disk or DATA-PACK): ${relativePath}`);
  const digest = crypto.createHash('sha256').update(Buffer.from(packedEntry.text, 'utf8')).digest('hex');
  if (digest !== packedEntry.sha256) throw new Error(`${relativePath}: packed content does not match its recorded SHA-256`);
  return packedEntry.text;
}

export function exists(skillDir, relativePath) {
  return fs.existsSync(path.join(skillDir, relativePath)) || Boolean(pack(skillDir)[relativePath.split(path.sep).join('/')]);
}

// ---- helpers shared by the Node tools (run.mjs, icon-fidelity.mjs, site-consistency.mjs) ----
/** Value following `flagName` on the command line, or `fallback` when the flag is absent. */
export function readArgument(flagName, fallback) {
  const index = process.argv.indexOf(flagName);
  return index > 0 ? process.argv[index + 1] : fallback;
}

/** True when `flagName` appears on the command line. */
export function hasFlag(flagName) {
  return process.argv.includes(flagName);
}

/** The project's own Playwright `chromium` (playwright, playwright-core or @playwright/test, resolved through `projectRequire`), or undefined. */
export async function loadChromium(projectRequire) {
  for (const packageName of ['playwright', 'playwright-core', '@playwright/test']) {
    try { const playwrightModule = await import(pathToFileURL(projectRequire.resolve(packageName)).href); const chromium = playwrightModule.chromium || playwrightModule.default?.chromium; if (chromium) return chromium; } catch { /* try the next package */ }
  }
  return undefined;
}
