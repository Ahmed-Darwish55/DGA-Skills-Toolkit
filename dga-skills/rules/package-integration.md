# DGA package & icon integration rules

Applies whenever code uses `platformscode-new-react`, `@platformscode/core`, `@platformscode/icons`, Hugeicons, or generates any DGA UI.

## 1. Reuse first (before generating anything)
1. Run `python3 ${CLAUDE_SKILL_DIR}/tools/find_existing.py --project <root>` and read its DECISION lines.
2. If DGA packages are installed → use their components directly. If the project already has Dga* wrappers, an icon registration, or an `ahmed-lib.json` copy → **reuse/extend them**. Never add a second icon registration path or a duplicate wrapper.
3. Library code comes from `lib/` via `python3 ${CLAUDE_SKILL_DIR}/tools/copy_lib.py --framework <react|angular|vanilla|exb> --dest <src>/dga-skills` (copy-in, version-aware, keeps local edits). Do not hand-write equivalents of `createIconRegistry`, `buttonIcon`, `useDirection`, `useReducedMotion`, `DirectionService`, …
4. **No unnecessary wrappers.** Do not wrap DgaButton/DgaDropdown/etc. to "simplify" them. The only shipped wrapper is `DgaIconButton` (React) / `dga-skills-icon-button` (Angular), justified by defect PKG-BTN-07 (accessible name). New wrappers need a documented package gap.
5. Real packages are preferred over CSS recreations (D4). A CSS recreation from `references/dga-live` is allowed only when no compatible package is installed/approved — label it `CSS recreation from spec` in code and report.

## 2. No invented props, elements or behaviours
- Props/events must exist in `registry/packages/platformscode-core@<installed version>.json` (the version the wrappers actually use — e.g. 0.0.52 nested in `platformscode-new-react@0.1.45`). Version not in the registry → run `python3 ${CLAUDE_SKILL_DIR}/tools/extract_package_api.py <node_modules/@platformscode/core> registry/packages/platformscode-core@<v>.json` first.
- After writing code run `python3 ${CLAUDE_SKILL_DIR}/tools/check_dga_props.py --project <root>`; it must print `OK — no invented props`.
- Known non-existent APIs (do not use, do not simulate silently): Button `selected`/`pressed`/`aria-label` props, `text` prop, children text (use `label`), Dropdown `onSelect`, elements that are not in the installed version (e.g. `dga-dropdown-menu` exists only from 0.0.53).
- Figma states the package lacks (e.g. Button State=Selected, PKG-BTN-03) → **STOP before writing code**: tell the user the installed API has no such prop (cite the PKG ID) and ask which option they want: (a) leave it out, (b) a documented house extension `[AHMED HOUSE]` that they approve, (c) wait for a package version that supports it. Do not create a new wrapper or restyle the component without that approval. Never add a fake prop.
- DGA components render inside **shadow DOM**: page/global CSS selectors such as `.dga-btn--primary-brand` cannot reach their internals. Only inherited CSS custom properties (tokens) and exposed `::part()` can — check the component before proposing any styling override, and never claim such a change works without a browser measurement.

## 3. Icons (decisions D1/D2)
- ONE central registration per app: React `<DgaProvider>`, Angular `provideDgaSkills()`, vanilla `setupDgaWeb()`, ExB `useDgaWidget()` — all built on `createIconRegistry`.
- Primary `@platformscode/icons` (import only the needed camelCase exports). Fallback Hugeicons Free only for names the primary set lacks or when the project opts in (`policy`). Use deep default imports for Hugeicons: `import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon'`. Never bundle Hugeicons Pro.
- Names come from `registry/icons/icon-map.json` (Figma names → package keys, with verification status). Shape fidelity is verified for 4 icons only; say "name-verified, shape NOT VERIFIED" for the rest.
- Use `buttonIcon(name, {api, position, size, registry})` for DgaButton/V2 icon props: correct prop names per API, sizes 24/20/16, `flipRtl:false` for arrows (Figma Button keeps arrow direction), and no empty slot when an icon is missing.
- Icon-only buttons always have a translated `label` (`requireAccessibleName`).

## 4. Framework pitfalls (measured)
- Angular: bind camelCase props as properties (`[leadIconType]="'arrow-right-02'"`); static attributes do not reach Stencil props. Use `CUSTOM_ELEMENTS_SCHEMA` + `@platformscode/core/components/<tag>.js` defineCustomElement. `platformscode-new-angular@2.0.0` is not recommended (PKG-NG-01).
- React 18 without the wrapper package (e.g. ExB): set objects/arrays as DOM properties (`DgaElement`).
- ExB: no second React, no global `core.css` — apply tokens to the widget root (`cssVars` JSON produced by copy_lib).
- `dga-dropdown` takes direction from `<html dir>` (PKG-DD-01): keep one direction per document.

## 5. Claims
- Never write "DGA compliant", "official", "matches Figma" for package output. Report per component: `MATCHED (measured)`, `DEVIATION (PKG-…)`, or `NOT VERIFIED`. Cite defect IDs from `registry/packages.json` whenever a component with known defects is used (e.g. Secondary hover PKG-BTN-01, Dropdown keyboard PKG-DD-03).
- Package publisher status is NOT VERIFIED; Hugeicons as official DGA library is NOT VERIFIED (`rules/policies.md` D2, D5).

## Vendor accessibility defects — the only allowed workaround shape
- Never patch `node_modules`, never inject restyles into a component's shadow DOM, never suppress axe rules.
- Prefer a supported alternative when the mode allows it (e.g. a native `<select>` styled with DGA tokens in Enhanced/Creative).
- When DGA Exact needs the package component AND keyboard/ARIA access is mandatory, the project may **opt in** to the isolated compat layer `lib/core/dropdown-a11y.js` (`useDropdownA11y` in React, `createAccessibleDgaDropdown` in vanilla/Angular/ExB). It is version-scoped (`DROPDOWN_A11Y_SCOPE`), self-disabling, removable (`destroy()`), marks the host with `data-dga-a11y-compat="dropdown"` so QA reports it, and does not change the defect status in `registry/packages.json`.
- Icons: `validateIconData()` guards every payload before `addIcons` (PKG-ICON-03 encoded form, unsafe SVG); a present-but-unusable primary glyph falls back to Hugeicons Free *for that name only* with `fallbackBecause` recorded; `auditRenderedIcons()` lists empty `dga-icon` boxes. A visual mismatch (icon-fidelity) never triggers an automatic source switch.

