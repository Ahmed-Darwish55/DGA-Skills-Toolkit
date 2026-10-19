// Maps raw measurements to the design-mode gates (rules/design-modes.md) and writes REPORT.md.
// Objective gates get PASS/FAIL; subjective ones get REVIEW REQUIRED with the evidence attached — never auto-PASS.
import fs from 'node:fs';
import path from 'node:path';

/** Tag a piece of evidence with the registry defect ids whose `match` regex hits it (config.packageDefects). Attribution only — the gate still FAILS. */
export function attribute(text, defects) {
  const ids = (defects || []).filter((defect) => { try { return new RegExp(defect.match, 'i').test(text); } catch { return false; } }).map((defect) => defect.id);
  return ids.length ? ` ⟵ package: ${[...new Set(ids)].join(', ')}` : '';
}

const sum = (values) => values.reduce((total, value) => total + value, 0);
const hasLayoutProblem = (run) => run.overflow.horizontalScroll || run.overflow.outsideCount > 0 || run.overflow.clippedCount > 0;

function baseGates(pageResult, defects = []) {
  const gates = {};
  const describeOverflow = (run) => {
    const { overflow } = run; const widest = overflow.culprits && overflow.culprits[0]; const firstClipped = overflow.clippedCount ? overflow.clippedText[0] : undefined;
    return `${run.dir}@${run.viewport}(scroll=${overflow.horizontalScroll},outside=${overflow.outsideCount},clipped=${overflow.clippedCount}${overflow.horizontalScroll && widest ? '; widest: ' + (widest.host ? widest.host + ' » ' : '') + widest.el + ' ' + widest.width + 'px' + attribute(widest.host + ' ' + widest.el, defects) : ''}${overflow.clippedCount && firstClipped ? '; clipped: ' + firstClipped.el + ' "' + firstClipped.text.slice(0, 24) + '"' + attribute(firstClipped.el, defects) : ''})`;
  };
  const runs = pageResult.runs; const directions = [...new Set(runs.map((run) => run.dir))];
  const stateRecords = pageResult.states.flatMap((component) => Object.entries(component.states).map(([stateName, state]) => ({ id: component.id, dir: component.dir, state: stateName, ...state })));
  const failedStates = stateRecords.filter((state) => state.status === 'FAIL'); const unverifiedStates = stateRecords.filter((state) => state.status === 'NOT VERIFIED');
  gates.E1 = { title: 'State table with citations', status: pageResult.states.length ? 'REVIEW REQUIRED' : 'NOT VERIFIED', evidence: pageResult.states.length ? `${pageResult.states.length} component(s) × ${Object.keys(pageResult.states[0].states).length} state(s) measured against references/dga-live data (see E2/E6); the written table with citations is produced by the author` : 'no componentStates configured' };
  gates.E2 = { title: 'Screenshots of every state (RTL + LTR)', status: stateRecords.length ? (stateRecords.every((state) => state.screenshot) && directions.length === 2 ? 'PASS' : 'FAIL') : 'NOT VERIFIED', evidence: `${stateRecords.length} state screenshots, dirs=${directions.join('/')}` };
  const unknownColours = sum(runs.map((run) => run.colors.unknownCount));
  const packageUnknownColours = Math.max(...runs.map((run) => run.colors.packageUnknownCount || 0));
  const packageSamples = runs.flatMap((run) => run.colors.packageUnknown || []).slice(0, 3).map((unknown) => `${unknown.hex} ${unknown.prop} in ${unknown.package}${attribute(unknown.package + ' ' + unknown.sample, defects)}`);
  const tokenLintSamples = JSON.stringify(runs.flatMap((run) => run.colors.unknown).slice(0, 4));
  gates.E3 = { title: 'Token lint (no colour outside dga-tokens)', status: unknownColours === 0 ? 'PASS' : 'FAIL', evidence: `${unknownColours} off-palette colour/prop combos on page-authored elements across ${runs.length} runs${unknownColours ? attribute(tokenLintSamples, defects) : ''}; samples: ${tokenLintSamples}` + (packageUnknownColours ? `; package-owned light DOM: ${packageUnknownColours} (not counted; ${packageSamples.join(' / ')})` : '') };
  const keyboards = directions.map((direction) => pageResult.a11y[direction]?.keyboard).filter(Boolean);
  const keyboardProblems = sum(keyboards.map((keyboard) => keyboard.withoutRing + keyboard.invisible));
  gates.E4 = { title: 'Keyboard: Tab order reachable, visible focus', status: keyboards.length && keyboards.every((keyboard) => keyboard.count > 0) && keyboardProblems === 0 ? 'PASS' : 'FAIL', evidence: keyboards.map((keyboard) => `${keyboard.dir}: ${keyboard.count} stops, ${keyboard.withoutRing} without visible ring, ${keyboard.offscreen} off-screen`).join('; ') };
  const buttonMotion = directions.map((direction) => pageResult.motion[direction]?.dgaButtons).filter(Boolean);
  const reducedHouseAnimated = sum(directions.map((direction) => pageResult.motion[direction]?.reduced?.houseAnimated || 0));
  gates.E5 = { title: 'Motion: DGA buttons INSTANT; house motion off under prefers-reduced-motion', status: buttonMotion.every((motion) => motion.buttons === motion.instant) && reducedHouseAnimated === 0 ? 'PASS' : 'FAIL', evidence: `buttons instant ${buttonMotion.map((motion) => `${motion.instant}/${motion.buttons}`).join(',')}; house animated under reduce: ${reducedHouseAnimated}; package animated: ${directions.map((direction) => pageResult.motion[direction]?.normal?.packageAnimated).join('/')}` };
  gates.E6 = { title: 'Compliance statement per component (MATCHED / DEVIATION / NOT VERIFIED)', status: stateRecords.length ? (failedStates.length ? 'DEVIATION' : unverifiedStates.length ? 'NOT VERIFIED' : 'MATCHED (measured)') : 'NOT VERIFIED', evidence: stateRecords.map((state) => `${state.id}/${state.dir}/${state.state}: ${state.status}${state.diffs && state.diffs.length ? ' — ' + state.diffs.join('; ') + attribute(state.id + ' ' + state.diffs.join(' '), defects) : ''}`).join(' | ') };
  if (pageResult.mode !== 'dga-exact') {
    gates.N1 = { title: 'Storyboard per motion', status: 'REVIEW REQUIRED', evidence: `house motion elements: ${JSON.stringify(directions.map((direction) => pageResult.motion[direction]?.house?.houseElements))} — storyboard is a written artefact` };
    const viewportWidths = [...new Set(runs.map((run) => run.viewport))];
    const problemRuns = runs.filter(hasLayoutProblem);
    gates.N2 = { title: 'Screenshots at 1440/1024/768/390 RTL+LTR without overflow/clipping', status: viewportWidths.length >= 4 && directions.length === 2 && problemRuns.length === 0 ? 'PASS' : 'FAIL', evidence: `${runs.length} runs; overflow/clipping in ${problemRuns.length}: ${problemRuns.map(describeOverflow).join(', ')}` };
    gates.N3 = { title: 'prefers-reduced-motion static state', status: reducedHouseAnimated === 0 && directions.every((direction) => pageResult.motion[direction]?.reducedShot) ? 'PASS' : 'FAIL', evidence: `screenshots: ${directions.map((direction) => pageResult.motion[direction]?.reducedShot).join(', ')}` };
    const houseInventories = directions.map((direction) => pageResult.motion[direction]?.house); gates.N4 = { title: 'House-value inventory', status: houseInventories.some((house) => house && (house.houseTokens.length || Object.keys(house.houseElements).length)) ? 'PASS' : 'FAIL', evidence: JSON.stringify(houseInventories[0]) };
    const maxLayoutShift = Math.max(...runs.map((run) => run.cls));
    gates.N5 = { title: 'Performance: CLS ≤ 0.1, no console errors', status: maxLayoutShift <= 0.1 && runs.every((run) => !run.console.some((logEntry) => logEntry.type !== 'warning')) ? 'PASS' : 'FAIL', evidence: `max CLS ${maxLayoutShift}; console entries ${sum(runs.map((run) => run.console.length))}` };
  } else {
    const problemRuns = runs.filter(hasLayoutProblem);
    gates.R1 = { title: 'Responsive (Exact): no overflow/clipping at 4 widths × 2 dirs', status: problemRuns.length === 0 ? 'PASS' : 'FAIL', evidence: problemRuns.map(describeOverflow).join(', ') || 'clean' };
  }
  if (pageResult.mode === 'dga-creative') {
    gates.C1 = { title: 'Three concept previews + visual-approval sheet', status: 'REVIEW REQUIRED', evidence: 'authoring artefact (templates/visual-approval.md)' };
    gates.C2 = { title: 'Visual score (rules/visual-qa.md)', status: 'REVIEW REQUIRED', evidence: 'human review of screenshots: ' + runs.map((run) => run.screenshot).slice(0, 2).join(', ') };
    gates.C3 = { title: 'Recording / notes for motion & 3D, WebGL fallback', status: 'REVIEW REQUIRED', evidence: 'no 3D in this page' };
    const imagesWithoutLicence = runs[0]?.landmarks?.imagesWithoutLicence ?? 0;
    gates.C4 = { title: 'Asset licence list (every <img> declares data-licence)', status: imagesWithoutLicence === 0 ? 'PASS' : 'FAIL', evidence: `${imagesWithoutLicence} image(s) without data-licence` };
    gates.C5 = { title: 'Statement: creative DGA-based experience, not DGA Exact', status: 'REVIEW REQUIRED', evidence: 'must appear in the delivery report' };
  }
  // accessibility summary (axe) feeds E4/E6 narrative and the overall verdict
  const axeResults = directions.map((direction) => pageResult.a11y[direction]?.axe).filter(Boolean);
  const serious = axeResults.flatMap((axeResult) => (axeResult.violations || []).filter((violation) => ['serious', 'critical'].includes(violation.impact)));
  gates.AXE = { title: 'axe-core: no serious/critical violations', status: axeResults.length ? (serious.length ? 'FAIL' : 'PASS') : 'NOT VERIFIED', evidence: axeResults.length ? [...new Set(serious.map((violation) => `${violation.id} (${violation.impact}, ${violation.nodes} nodes; ${violation.sample})${attribute(violation.id + ' ' + violation.sample, defects)}`))].join(', ') || 'clean' : 'axe not available' };
  const landmarks = runs[0]?.landmarks || {};
  gates.LANDMARKS = { title: 'Document structure: lang/dir set, one h1, main landmark, skip link, no heading skips', status: landmarks.lang && landmarks.dir && landmarks.h1 === 1 && landmarks.main >= 1 && landmarks.skipLink && landmarks.headingSkips === 0 ? 'PASS' : 'FAIL', evidence: JSON.stringify(landmarks) + (landmarks.headingSkips ? ` headings: ${(landmarks.headings || []).join(' ')}` : '') };
  return gates;
}

/** Extended gates — present only when the check ran (zoom runs by default; widgets/forms only when configured). */
function extendedGates(pageResult, defects = []) {
  const gates = {};
  const zoomRuns = Object.entries(pageResult.zoom200 || {});
  if (zoomRuns.length) {
    const failedZoomRuns = zoomRuns.filter(([, zoomRun]) => zoomRun.status !== 'PASS');
    const evidence = zoomRuns.map(([direction, zoomRun]) => `${direction}: ${zoomRun.cssWidth}css@2x scroll=${zoomRun.horizontalScroll}${zoomRun.culprit ? '(' + zoomRun.culprit + ')' : ''} clipped=${zoomRun.clipped} textClipped=${zoomRun.textClipped.length} offscreenFocusable=${zoomRun.reach.offscreen}/${zoomRun.reach.focusable}`).join('; ');
    gates.Z1 = { title: 'Zoom 200 % (WCAG 1.4.4/1.4.10): no horizontal scroll, no clipped text, controls reachable', status: failedZoomRuns.length ? 'FAIL' : 'PASS', evidence: evidence + (failedZoomRuns.length ? attribute(evidence, defects) : '') };
  }
  if (pageResult.widgets && pageResult.widgets.length) {
    const failedWidgets = pageResult.widgets.filter((widget) => widget.status === 'FAIL'); const unverifiedWidgets = pageResult.widgets.filter((widget) => widget.status === 'NOT VERIFIED');
    const evidence = pageResult.widgets.map((widget) => `${widget.dir} ${widget.id}(${widget.type}): ${widget.error || widget.steps.map((step) => `${step.case}:${step.status}`).join(' / ')}`).join('; ');
    gates.K1 = { title: 'Widget keyboard: Enter / Space / Arrow keys / Escape per widget type', status: failedWidgets.length ? 'FAIL' : unverifiedWidgets.length === pageResult.widgets.length ? 'NOT VERIFIED' : 'PASS', evidence: evidence + (failedWidgets.length ? attribute(failedWidgets.map((widget) => widget.type + ' ' + widget.id + ' ' + widget.steps.filter((step) => step.status === 'FAIL').map((step) => step.key + ' ' + step.case).join(' ')).join(' '), defects) : '') };
  }
  if (pageResult.forms && pageResult.forms.length) {
    const failedForms = pageResult.forms.filter((form) => form.status === 'FAIL');
    gates.F1 = { title: 'Form validation: error summary announced, invalid fields marked, focus to first invalid, Enter submits', status: failedForms.length ? 'FAIL' : pageResult.forms.every((form) => form.status === 'NOT VERIFIED') ? 'NOT VERIFIED' : 'PASS', evidence: pageResult.forms.map((form) => `${form.dir} ${form.id}: ${form.error || form.checks.map((check) => `${check.id}:${check.status}(${check.evidence.slice(0, 40)})`).join(' ')}`).join('; ') };
  }
  return gates;
}

export function gatesForPage(pageResult, defects = []) {
  return { ...(pageResult.runs && pageResult.runs.length ? baseGates(pageResult, defects) : {}), ...extendedGates(pageResult, defects) };
}

export function buildReport(results, outDir) {
  const allGates = {};
  const lines = [`# Visual QA report — ${results.generated}`, '', `Base URL: ${results.baseURL} · viewports: ${results.viewports.join('/')} · dirs: ${results.dirs.join('/')} · axe: ${results.axe ? 'yes' : 'NOT AVAILABLE'}`, '',
    '> Statuses: PASS / FAIL are measured. **REVIEW REQUIRED** = subjective gate — a human must look at the screenshots; it is never auto-PASS. NOT VERIFIED = no data.',
    '> "⟵ package: PKG-…" attributes a failure to a registered @platformscode package defect (registry/packages.json). Attribution never turns a FAIL into a PASS — DGA Exact compliance is NOT claimed while any required component fails.', ''];
  for (const pageResult of results.pages) {
    const gates = gatesForPage(pageResult, results.packageDefects); allGates[pageResult.id] = gates;
    const failing = Object.entries(gates).filter(([, gate]) => ['FAIL', 'DEVIATION'].includes(gate.status)).map(([gateId]) => gateId);
    const claim = pageResult.mode === 'dga-exact' ? (failing.length ? `DGA Exact — target; NOT compliant (failing: ${failing.join(', ')})` : `DGA Exact — all objective gates passed; E1 still needs the written state table (REVIEW REQUIRED)`) : `${pageResult.mode} — ${failing.length ? 'failing: ' + failing.join(', ') : 'objective gates passed'}; subjective gates REVIEW REQUIRED`;
    lines.push(`## ${pageResult.id} — ${pageResult.mode}${pageResult.template ? ` — template ${pageResult.template}` : ''}`, '', `**Verdict:** ${claim}`, '', '| Gate | Status | Evidence |', '|---|---|---|');
    for (const [gateId, gate] of Object.entries(gates)) lines.push(`| ${gateId} ${gate.title} | **${gate.status}** | ${String(gate.evidence).replace(/\|/g, '\\|').slice(0, 400)} |`);
    lines.push('', '| Run | overflow | outside | clipped | off-palette | CLS | console | screenshot |', '|---|---|---|---|---|---|---|---|');
    for (const run of (pageResult.runs || [])) lines.push(`| ${run.dir} ${run.viewport}px | ${run.overflow.horizontalScroll ? 'YES' : 'no'} | ${run.overflow.outsideCount} | ${run.overflow.clippedCount} | ${run.colors.unknownCount} | ${run.cls} | ${run.console.length} | ${run.screenshot} |`);
    for (const direction of results.dirs) {
      const accessibility = pageResult.a11y[direction]; if (!accessibility) continue;
      lines.push('', `**Keyboard (${direction}):** ${accessibility.keyboard.count} tab stops; ${accessibility.keyboard.withoutRing} without visible ring; ${accessibility.keyboard.offscreen} off-screen. First stops: ${accessibility.keyboard.stops.slice(0, 6).map((stop) => stop.tag + (stop.text ? `(${stop.text})` : '')).join(' → ')}`);
      if (accessibility.axe) lines.push(`**axe (${direction}):** ${accessibility.axe.violations ? accessibility.axe.violations.map((violation) => `${violation.id}[${violation.impact}×${violation.nodes}]`).join(', ') || 'no violations' : accessibility.axe.error}`);
    }
    if (pageResult.states.length) {
      lines.push('', '| Component | dir | state | status | diffs | screenshot |', '|---|---|---|---|---|---|');
      for (const component of pageResult.states) for (const [stateName, state] of Object.entries(component.states)) lines.push(`| ${component.id} | ${component.dir} | ${stateName} | ${state.status} | ${((state.diffs && state.diffs.length ? state.diffs : [state.error || state.expected?.error || '']).join('; ') + (state.diffs && state.diffs.length ? attribute(component.id + ' ' + state.diffs.join(' '), results.packageDefects) : '') + (state.info && state.info.length ? ` (info, not compared: ${state.info.join('; ')})` : '')).slice(0, 260)} | ${state.screenshot || ''} |`);
    }
    lines.push('');
  }
  for (const pageResult of results.pages) {
    const widgets = (pageResult.widgets || []); const forms = (pageResult.forms || []);
    if (!widgets.length && !forms.length) continue;
    lines.push(`### ${pageResult.id} — keyboard & form detail`, '', '| dir | item | type | key / check | expected | status | focus / evidence |', '|---|---|---|---|---|---|---|');
    for (const widget of widgets) { if (widget.error) lines.push(`| ${widget.dir} | ${widget.id} | ${widget.type} | — | — | ${widget.status} | ${widget.error} |`); for (const step of (widget.steps || [])) lines.push(`| ${widget.dir} | ${widget.id} | ${widget.type} | ${step.case} (${step.key}) | ${step.expect} | ${step.status} | ${String(step.focus).replace(/\|/g, '/').slice(0, 220)} |`); }
    for (const form of forms) for (const check of (form.checks || [])) lines.push(`| ${form.dir} | ${form.id} | form | ${check.id} | ${check.title} | ${check.status} | ${check.evidence.replace(/\|/g, '/')} |`);
    lines.push('');
  }
  if (results.bundle) {
    const bundle = results.bundle;
    lines.push('## B1 Bundle budget (gzip)', '', `**Status:** ${bundle.status}${bundle.error ? ' — ' + bundle.error : ''}${bundle.status === 'FAIL' ? attribute('bundle ' + bundle.largest.map((asset) => asset.file).join(' '), results.packageDefects) : ''}`, '');
    if (bundle.totals) lines.push(`dist: \`${bundle.dist}\` · JS ${bundle.totals.jsKB} KB · CSS ${bundle.totals.cssKB} KB · fonts (woff2) ${bundle.totals.fontKB} KB · other ${bundle.totals.otherKB} KB · total ${bundle.totals.totalKB} KB (legacy woff/ttf not counted: ${bundle.totals.legacyFontKB} KB) (raw JS ${bundle.totals.rawJsKB} KB) · budgets ${JSON.stringify(bundle.budgets)}${bundle.over.length ? ' · OVER: ' + bundle.over.join(', ') : ''}`, '', 'Largest: ' + bundle.largest.map((asset) => `${asset.file} ${asset.gzipKB} KB`).join(' · '), '');
  }
  if (results.cssLint) lines.push(`## CSS source lint`, '', `${results.cssLint.literals} hex literals; off-palette (not house): ${results.cssLint.offPalette.length} ${JSON.stringify(results.cssLint.offPalette.slice(0, 6))}; house (--ahmed-*): ${results.cssLint.house.length}`, '');
  fs.writeFileSync(path.join(outDir, 'REPORT.md'), lines.join('\n'));
  return allGates;
}
