#!/usr/bin/env node
// DGA Skills Toolkit — Visual QA engine (Playwright). Runs the objective parts of the design-mode gates on real pages.
//
//   node <skill>/tools/qa/run.mjs --config qa.config.json [--out qa-reports] [--only <pageId>] [--skip-axe] [--report-only] [--extended-only] [--checks zoom,widgets,forms,bundle]
//
// Uses the PROJECT's own playwright / @axe-core/playwright (resolved from the current working directory), so nothing is
// installed. Chromium path can be forced with PW_CHROMIUM. Output: results.json, REPORT.md, screenshots/.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pageChecks } from './lib/browser-checks.mjs';
import { expectedFor, tokenPalette, hexColoursIn } from './lib/figma-expected.mjs';
import { buildReport } from './lib/report.mjs';
import { zoom200, widgetKeyboard, formValidation, bundleBudget } from './lib/extended-checks.mjs';
import { readArgument, hasFlag, loadChromium } from './lib/dga-res.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.resolve(readArgument('--config', 'qa.config.json'));
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const cwd = process.cwd();
const outDir = path.resolve(readArgument('--out', config.out || 'qa-reports'));
const skillDir = path.resolve(path.dirname(configPath), config.skillDir || path.join(here, '..', '..'));
const only = readArgument('--only');
// --extended-only: skip the viewport/state/motion runs and execute only the extended checks; --checks zoom,widgets,forms,bundle restricts them
const extendedOnly = hasFlag('--extended-only');
const selectedChecks = readArgument('--checks') ? new Set(readArgument('--checks').split(',')) : null;
const checkSelected = (checkName) => !selectedChecks || selectedChecks.has(checkName);
fs.mkdirSync(path.join(outDir, 'screenshots'), { recursive: true });

const projectRequire = createRequire(path.join(cwd, 'package.json'));
const chromium = await loadChromium(projectRequire);
if (!chromium) { console.error('playwright not found in the current project (install @playwright/test or playwright)'); process.exit(2); }
let AxeBuilder = null;
if (!hasFlag('--skip-axe')) { try { AxeBuilder = (await import(pathToFileURL(projectRequire.resolve('@axe-core/playwright')).href)).default; } catch { AxeBuilder = null; } }

const palette = [...tokenPalette(skillDir)];
const viewports = config.viewports || [1440, 1024, 768, 390];
const dirs = config.dirs || ['rtl', 'ltr'];
/** `{dir}` / `{lang}` tokens in a page url are substituted (lang: rtl→ar, ltr→en); otherwise `dir=` is appended to the query, before any `#fragment`. */
function pageUrl(baseUrl, url, dir) {
  if (url.includes('{dir}') || url.includes('{lang}')) return baseUrl + url.replaceAll('{dir}', dir).replaceAll('{lang}', dir === 'rtl' ? 'ar' : 'en');
  const hashIndex = url.indexOf('#'); const pathPart = hashIndex >= 0 ? url.slice(0, hashIndex) : url; const fragment = hashIndex >= 0 ? url.slice(hashIndex) : '';
  return baseUrl + pathPart + (pathPart.includes('?') ? '&' : '?') + `dir=${dir}` + fragment;
}
const deepAll = pageChecks.deepAll;
const evaluateCheck = (page, name, ...args) => page.evaluate(`(function(){ const deepAll = ${deepAll}; return (${pageChecks[name]})(${args.map((argument) => JSON.stringify(argument)).join(',')}); })()`);
const hexNear = (expected, actual, tolerance = 2) => { if (!expected || !actual || expected[0] !== '#' || actual[0] !== '#') return expected === actual; for (let i = 1; i < 7; i += 2) if (Math.abs(parseInt(expected.slice(i, i + 2), 16) - parseInt(actual.slice(i, i + 2), 16)) > tolerance) return false; return true; };
const COMPARED_PROPERTIES = ['height', 'radius', 'borderWidth', 'background', 'border'];
const desktopContext = () => browser.newContext({ viewport: { width: viewports[0], height: 900 } });

// --report-only: rebuild REPORT.md from an existing results.json (after editing packageDefects attribution, for instance)
if (hasFlag('--report-only')) {
  const previousResults = JSON.parse(fs.readFileSync(path.join(outDir, 'results.json'), 'utf8'));
  previousResults.packageDefects = config.packageDefects || []; previousResults.gates = buildReport(previousResults, outDir);
  fs.writeFileSync(path.join(outDir, 'results.json'), JSON.stringify(previousResults, null, 1));
  console.log(`REPORT.md rebuilt from ${path.join(outDir, 'results.json')}`); process.exit(0);
}
const results = { generated: new Date().toISOString(), config: path.relative(cwd, configPath), baseURL: config.baseURL, viewports, dirs, axe: !!AxeBuilder, pages: [] };
const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM || undefined });

async function openPage(context, url) {
  const page = await context.newPage();
  const logs = [];
  page.on('console', (message) => { if (['error', 'warning'].includes(message.type())) logs.push({ type: message.type(), text: message.text().slice(0, 160) }); });
  page.on('pageerror', (error) => logs.push({ type: 'pageerror', text: error.message.slice(0, 160) }));
  page.on('response', (response) => { if (response.status() >= 400) logs.push({ type: 'http', text: `${response.status()} ${response.url().slice(0, 120)}` }); });
  await page.addInitScript(pageChecks.clsInit.replace(/^\(function \(\) \{|\}\)$/g, ''));
  await page.goto(url, { waitUntil: 'load' });
  if (config.readySelector) await page.waitForSelector(config.readySelector, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(config.settleMs || 1200);
  // scroll through the page so lazy / reveal content is rendered, then back to top (runs in the browser: self-contained)
  await page.evaluate(async () => { const scrollHeight = document.documentElement.scrollHeight; for (let scrollTop = 0; scrollTop < scrollHeight; scrollTop += 400) { scrollTo(0, scrollTop); await new Promise((resolve) => setTimeout(resolve, 40)); } scrollTo(0, 0); });
  await page.waitForTimeout(400);
  return { page, logs };
}

for (const pageConfig of config.pages) {
  if (only && pageConfig.id !== only) continue;
  const pageResult = { id: pageConfig.id, mode: pageConfig.mode || 'dga-exact', template: pageConfig.template || null, patterns: pageConfig.patterns || [], runs: [], states: [], a11y: {}, motion: {}, summary: {}, zoom200: {}, widgets: [], forms: [] };
  console.log(`\n=== ${pageConfig.id} (${pageResult.mode})`);
  for (const dir of dirs) {
    const url = pageUrl(config.baseURL, pageConfig.url, dir);
    if (!extendedOnly) {
    for (const viewportWidth of viewports) {
      const context = await browser.newContext({ viewport: { width: viewportWidth, height: viewportWidth < 500 ? 844 : 900 }, baseURL: config.baseURL });
      const { page, logs } = await openPage(context, url);
      const run = { dir, viewport: viewportWidth, url };
      run.landmarks = await evaluateCheck(page, 'landmarks');
      run.overflow = await evaluateCheck(page, 'overflow');
      run.colors = await evaluateCheck(page, 'colors', palette);
      run.cls = await page.evaluate(() => Math.round((window.__cls || 0) * 1000) / 1000);
      const shot = path.join('screenshots', `${pageConfig.id}-${dir}-${viewportWidth}.png`);
      await page.screenshot({ path: path.join(outDir, shot), fullPage: true });
      run.screenshot = shot;
      run.console = logs.filter((logEntry) => !/favicon/.test(logEntry.text));
      pageResult.runs.push(run);
      const widest = run.overflow.horizontalScroll && run.overflow.culprits[0];
      console.log(`  ${dir} ${viewportWidth}px  overflow=${run.overflow.horizontalScroll ? 'YES' : 'no'}${run.overflow.horizontalScroll && widest ? '(' + (widest.host || widest.el) + ')' : ''} outside=${run.overflow.outsideCount} clipped=${run.overflow.clippedCount} unknownColors=${run.colors.unknownCount}(+${run.colors.packageUnknownCount} package) cls=${run.cls} console=${run.console.length}`);
      await context.close();
    }
    // ---- per direction, desktop: keyboard, axe, motion, house inventory, component states ----
    const context = await desktopContext();
    const { page } = await openPage(context, url);
    const keyboard = { dir, stops: [], withoutRing: 0, offscreen: 0, invisible: 0 };
    await page.evaluate(() => { document.body.focus(); scrollTo(0, 0); });
    const seen = new Set();
    for (let i = 0; i < (config.tabStops || 40); i++) {
      await page.keyboard.press('Tab');
      const activeInfo = await evaluateCheck(page, 'activeInfo');
      if (activeInfo.tag === 'body') break;
      const key = activeInfo.tag + '|' + activeInfo.key; if (seen.has(key)) break; seen.add(key);
      keyboard.stops.push(activeInfo);
      if (!activeInfo.ring && !activeInfo.focusVisible) keyboard.withoutRing++;
      if (!activeInfo.inViewport) keyboard.offscreen++;
      if (!activeInfo.visible) keyboard.invisible++;
    }
    keyboard.count = keyboard.stops.length;
    pageResult.a11y[dir] = { keyboard };
    if (AxeBuilder) {
      try {
        const axeResult = await new AxeBuilder({ page }).analyze();
        pageResult.a11y[dir].axe = { violations: axeResult.violations.map((violation) => ({ id: violation.id, impact: violation.impact, nodes: violation.nodes.length, sample: violation.nodes[0] && violation.nodes[0].target.join(' ').slice(0, 100) })), passes: axeResult.passes.length };
      } catch (error) { pageResult.a11y[dir].axe = { error: String(error).slice(0, 200) }; }
    }
    pageResult.motion[dir] = { normal: await evaluateCheck(page, 'motion'), dgaButtons: await evaluateCheck(page, 'dgaButtonMotion'), house: await evaluateCheck(page, 'houseInventory') };
    // component states against Figma-derived expectations
    for (const stateCheck of pageConfig.componentStates || []) {
      const expected = expectedFor(skillDir, stateCheck.figma);
      const stateRecord = { id: stateCheck.id, dir, selector: stateCheck.selector, figma: stateCheck.figma, expected, states: {} };
      const stateDefs = stateCheck.states || { Default: {} };
      for (const [stateName, how] of Object.entries(stateDefs)) {
        const expectedState = stateName === 'Default' ? expected : expectedFor(skillDir, { ...stateCheck.figma, variant: stateCheck.figma.variant.replace(/State=[A-Za-z-]+/, `State=${stateName}`) });
        const hostIndex = how.index ?? stateCheck.index ?? 0;
        const host = page.locator(stateCheck.selector).nth(hostIndex);
        try {
          await host.scrollIntoViewIfNeeded();
          if (how.action === 'hover') await host.hover();
          if (how.action === 'press') { await host.hover(); await page.mouse.down(); }
          if (how.action === 'focus') { await page.mouse.move(0, 0); await evaluateCheck(page, 'focusInner', stateCheck.selector, stateCheck.inner, hostIndex); await page.keyboard.press('Shift'); }
          await page.waitForTimeout(120);
          const measured = await evaluateCheck(page, 'measure', how.selector || stateCheck.selector, how.inner ?? stateCheck.inner, how.index ?? hostIndex);
          const diffs = []; const info = [];
          // `compare` (per check) limits which properties are judged, e.g. ["radius","background","border"] for content-sized
          // components whose Figma height is only valid for the Figma sample content. Skipped properties are reported as info.
          const compared = new Set(stateCheck.compare || COMPARED_PROPERTIES);
          const findings = (property) => (compared.has(property) ? diffs : info);
          if (expectedState && !expectedState.error && !measured.error) {
            for (const [property, tolerance] of [['height', 0.6], ['radius', 0.6], ['borderWidth', 0.6]]) if (expectedState[property] != null && measured[property] != null && Math.abs(expectedState[property] - measured[property]) > tolerance) findings(property).push(`${property}: expected ${expectedState[property]} got ${measured[property]}`);
            if (expectedState.background && !hexNear(expectedState.background, measured.background)) findings('background').push(`background: expected ${expectedState.background} (${expectedState.backgroundToken}) got ${measured.background}`);
            if (expectedState.borderColor && !hexNear(expectedState.borderColor, measured.borderColor)) findings('border').push(`border: expected ${expectedState.borderColor} (${expectedState.borderToken}) got ${measured.borderColor}`);
            if (!expectedState.borderColor && measured.borderColor && measured.borderWidth > 0 && stateName !== 'Focused') findings('border').push(`border: Figma none, got ${measured.borderColor} ${measured.borderWidth}px`);
          }
          if (measured.error) diffs.push(measured.error);
          const shotName = path.join('screenshots', `${pageConfig.id}-${dir}-state-${stateCheck.id}-${stateName}.png`);
          try { await host.screenshot({ path: path.join(outDir, shotName) }); } catch {}
          stateRecord.states[stateName] = { expected: expectedState, measured, diffs, info, notCompared: [...COMPARED_PROPERTIES].filter((property) => !compared.has(property)), status: expectedState?.error ? 'NOT VERIFIED' : measured.error ? 'FAIL' : diffs.length ? 'FAIL' : 'PASS', screenshot: shotName };
          if (how.action === 'press') await page.mouse.up();
          await page.mouse.move(0, 0);
        } catch (error) { stateRecord.states[stateName] = { status: 'FAIL', error: String(error).slice(0, 200) }; }
      }
      pageResult.states.push(stateRecord);
    }
    await context.close();
    // reduced motion context
    const reducedContext = await browser.newContext({ viewport: { width: viewports[0], height: 900 }, reducedMotion: 'reduce' });
    const { page: reducedPage } = await openPage(reducedContext, url);
    pageResult.motion[dir].reduced = await evaluateCheck(reducedPage, 'motion');
    pageResult.motion[dir].reducedShot = path.join('screenshots', `${pageConfig.id}-${dir}-reduced-motion.png`);
    await reducedPage.screenshot({ path: path.join(outDir, pageResult.motion[dir].reducedShot), fullPage: false });
    await reducedContext.close();
    } // !extendedOnly
    // ---- extended checks (lib/extended-checks.mjs) ----
    if (config.zoom200 !== false && pageConfig.zoom200 !== false && checkSelected('zoom')) {
      pageResult.zoom200[dir] = await zoom200(browser, url, openPage, evaluateCheck, { baseWidth: config.zoomBaseWidth || 1280, shot: path.join(outDir, 'screenshots', `${pageConfig.id}-${dir}-zoom200.png`) });
      const zoomRun = pageResult.zoom200[dir];
      console.log(`  ${dir} zoom200 (${zoomRun.cssWidth}css@2x) ${zoomRun.status} scroll=${zoomRun.horizontalScroll} clipped=${zoomRun.clipped} textClipped=${zoomRun.textClipped.length} offscreenFocusable=${zoomRun.reach.offscreen}`);
    }
    if (pageConfig.widgets && pageConfig.widgets.length && checkSelected('widgets')) {
      const widgetContext = await desktopContext(); const { page: widgetPage } = await openPage(widgetContext, url);
      pageResult.widgets.push(...await widgetKeyboard(widgetPage, pageConfig.widgets, dir)); await widgetContext.close();
      for (const widget of pageResult.widgets.filter((candidate) => candidate.dir === dir)) console.log(`  ${dir} widget ${widget.id} (${widget.type}) ${widget.status} ${widget.error || widget.steps.map((step) => step.case + '=' + step.status).join(' | ')}`);
    }
    if (pageConfig.forms && pageConfig.forms.length && checkSelected('forms')) {
      const formContext = await desktopContext(); const { page: formPage } = await openPage(formContext, url);
      for (const form of await formValidation(formPage, pageConfig.forms)) { form.dir = dir; pageResult.forms.push(form); console.log(`  ${dir} form ${form.id} ${form.status} ${form.error || form.checks.map((check) => check.id + ':' + check.status).join(' ')}`); }
      await formContext.close();
    }
  }
  results.pages.push(pageResult);
}
await browser.close();

// static CSS lint for the project's own stylesheets (hex literals must be palette values; --ahmed-* lines are house)
if (config.cssFiles) {
  const paletteSet = new Set(palette); const found = [];
  for (const relativeFile of config.cssFiles) {
    const file = path.resolve(path.dirname(configPath), relativeFile); if (!fs.existsSync(file)) continue;
    fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => { for (const hex of hexColoursIn(line)) { found.push({ file: relativeFile, line: i + 1, hex, inPalette: paletteSet.has(hex), house: /--ahmed-/.test(line) }); } });
  }
  results.cssLint = { literals: found.length, offPalette: found.filter((literal) => !literal.inPalette && !literal.house), house: found.filter((literal) => literal.house) };
}

if (config.bundle && checkSelected('bundle')) { results.bundle = bundleBudget(path.dirname(configPath), config.bundle); console.log(`bundle (gzip): ${JSON.stringify(results.bundle.totals || results.bundle.error)} → ${results.bundle.status}`); }
results.extendedOnly = extendedOnly;
results.packageDefects = config.packageDefects || [];
results.gates = buildReport(results, outDir);
fs.writeFileSync(path.join(outDir, 'results.json'), JSON.stringify(results, null, 1));
console.log(`\nwritten ${path.join(outDir, 'results.json')} and REPORT.md`);
