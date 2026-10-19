#!/usr/bin/env node
// Site-level consistency check (rules/code-quality.md §1): every page of a site must render the SAME header (logo, stamp,
// Second Nav Header, navigation order, sub-menus) and the SAME footer (variant, groups, links) — only the active item may differ.
//
//   node <skill>/tools/qa/site-consistency.mjs --config qa.config.json [--out <dir>] [--widths 1440,1024,390]
//
// Uses the pages / baseURL / dirs of the QA config and the project's own playwright (PW_CHROMIUM to force a binary).
// Writes site-consistency.json + SITE-CONSISTENCY.md; exit 1 when any page differs.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { readArgument, loadChromium } from './lib/dga-res.mjs';

const configPath = path.resolve(readArgument('--config', 'qa.config.json'));
const qaConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const outputDirectory = path.resolve(readArgument('--out', qaConfig.out || 'qa-reports'));
const viewportWidths = readArgument('--widths', '1440,1024,390').split(',').map(Number);
const directions = qaConfig.dirs || ['rtl', 'ltr'];

const projectRequire = createRequire(path.join(process.cwd(), 'package.json'));
const chromium = await loadChromium(projectRequire);
if (!chromium) { console.error('playwright not found in the current project'); process.exit(2); }

function buildPageUrl(baseUrl, pageUrl, direction) {
  const hashIndex = pageUrl.indexOf('#'); const pathPart = hashIndex >= 0 ? pageUrl.slice(0, hashIndex) : pageUrl; const hashPart = hashIndex >= 0 ? pageUrl.slice(hashIndex) : '';
  return baseUrl + pathPart + (pathPart.includes('?') ? '&' : '?') + `dir=${direction}` + hashPart;
}

/** Runs in the page: a comparable description of the shared chrome (no active state, no geometry). */
function readSiteChrome() {
  const visible = (element) => !!element && getComputedStyle(element).display !== 'none' && element.getBoundingClientRect().height > 0;
  const logos = document.querySelector('dga-nav-header-logos');
  const footer = document.querySelector('dga-footer');
  const secondNav = document.querySelector('dga-second-nav-header');
  const footerSurface = footer && (footer.shadowRoot || footer).querySelector('footer, .footer, div');
  return {
    digitalStamp: !!document.querySelector('dga-digital-signature'),
    logo: logos ? String(logos.logoSrc || '').slice(0, 64) + `…(${String(logos.logoSrc || '').length})` : null,
    governmentLogo: logos ? String(logos.govSrc || '').slice(0, 64) : null,
    secondNavPresent: !!secondNav,
    secondNavVisible: visible(secondNav),
    secondNavItems: [...document.querySelectorAll('dga-second-nav-header-item')].map((item) => item.label),
    navigation: [...document.querySelectorAll('dga-nav-header-menu > dga-nav-header-link')].map((link) => ({
      label: link.label, hasChevron: !!link.icon, subMenuLinks: [...link.querySelectorAll('dga-nav-header-sub-menu-link')].map((subLink) => subLink.label),
    })),
    headerActions: [...document.querySelectorAll('dga-nav-header-actions > dga-nav-header-link')].map((action) => action.label),
    footerVariant: footer ? footer.background : null,
    footerBackgroundColor: footerSurface ? getComputedStyle(footerSurface).backgroundColor : null,
    footerGroups: footer ? (footer.groupLinks || []).map((group) => group.title) : [],
    footerLegalLinks: footer ? (footer.basicLinks || []).map((link) => link.name) : [],
  };
}

const differences = []; const samples = {};
const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
for (const direction of directions) {
  for (const viewportWidth of viewportWidths) {
    let reference = null; let referencePageId = null;
    for (const pageEntry of qaConfig.pages) {
      const browserPage = await browser.newPage({ viewport: { width: viewportWidth, height: 900 } });
      await browserPage.goto(buildPageUrl(qaConfig.baseURL, pageEntry.url, direction), { waitUntil: 'networkidle' });
      if (qaConfig.readySelector) await browserPage.waitForSelector(qaConfig.readySelector, { timeout: 15000 }).catch(() => {});
      await browserPage.waitForTimeout(qaConfig.settleMs || 1200);
      const chrome = await browserPage.evaluate(readSiteChrome);
      await browserPage.close();
      samples[`${direction}@${viewportWidth}/${pageEntry.id}`] = chrome;
      if (!reference) { reference = chrome; referencePageId = pageEntry.id; continue; }
      for (const key of Object.keys(chrome)) {
        if (JSON.stringify(chrome[key]) !== JSON.stringify(reference[key])) differences.push({ direction, viewportWidth, page: pageEntry.id, comparedWith: referencePageId, field: key, expected: reference[key], actual: chrome[key] });
      }
    }
  }
}
await browser.close();

fs.mkdirSync(outputDirectory, { recursive: true });
const status = differences.length ? 'FAIL' : 'PASS';
fs.writeFileSync(path.join(outputDirectory, 'site-consistency.json'), JSON.stringify({ status, pages: qaConfig.pages.map((pageEntry) => pageEntry.id), directions, viewportWidths, differences, samples }, null, 2));
const lines = ['# S1 Site consistency — shared header and footer on every page', '', `**Status:** ${status} — ${qaConfig.pages.length} pages × ${directions.join('/')} × ${viewportWidths.join('/')} px; compared: stamp, logo, Second Nav Header, navigation order + chevrons + sub-menus, header actions, footer variant + colour + groups + legal links (active item excluded).`, ''];
if (differences.length) { lines.push('| dir@width | page | vs | field | expected | actual |', '|---|---|---|---|---|---|'); differences.slice(0, 60).forEach((difference) => lines.push(`| ${difference.direction}@${difference.viewportWidth} | ${difference.page} | ${difference.comparedWith} | ${difference.field} | ${JSON.stringify(difference.expected).slice(0, 80)} | ${JSON.stringify(difference.actual).slice(0, 80)} |`)); }
fs.writeFileSync(path.join(outputDirectory, 'SITE-CONSISTENCY.md'), lines.join('\n') + '\n');
console.log(`site consistency: ${status} (${differences.length} differences) → ${path.join(outputDirectory, 'SITE-CONSISTENCY.md')}`);
process.exit(differences.length ? 1 : 0);
