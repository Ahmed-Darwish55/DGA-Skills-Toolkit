# Other frameworks — compatibility rules (vanilla tested; Vue / Svelte / Lit / Next.js smoke-tested)

The universal path is the **custom-elements build** of `@platformscode/core` + `lib/vanilla` (tested: `tests/integration/vanilla`, 49 checks, same results as React/Angular).

```js
import '@platformscode/core/dist/core/core.css';              // or scoped variables (see ExB adapter)
import { addIcons } from '@platformscode/core/components';
import { defineCustomElement as defButton } from '@platformscode/core/components/dga-button.js';
import { setupDgaWeb, createDgaButton, createDgaDropdown } from './dga-skills/vanilla/index.js';
const dga = setupDgaWeb({ defines: { 'dga-button': defButton }, addIcons, primary, fallback, icons: ['arrow-right-02'] });
document.body.append(createDgaButton(document, { variant: 'primary-brand', label: 'متابعة', icon: 'arrow-right-02', registry: dga.registry, onClick: next }));
```
Rules for any framework:
1. Register custom elements with the per-tag `defineCustomElement` (tree-shakeable) — not the lazy loader (it has no `setAssetPath`).
2. Pass objects/arrays/functions as **properties**, not attributes (Vue: `.prop` modifier or `:leadIconProps.prop`; Svelte 4: bind via `use:` action calling `setProps`; Lit: `.leadIconProps=${…}`).
3. Listen to Stencil events by their DOM name (`onClick`).
4. One central icon registration (`setupDgaWeb` / `createIconRegistry`).
5. SSR (Next.js, Nuxt, Angular SSR): define elements and register icons only in the browser (custom elements need `window`). Verified for Next.js 15 app router: the server emits the plain `<dga-button …>` tag, a `'use client'` component registers the element in `useEffect`. Nuxt / Angular SSR NOT VERIFIED.
6. Run `tools/check_dga_props.py` (scans .vue/.svelte/.html too).
## Smoke results (`@platformscode/core` **0.0.53**)

| Framework | Version | Setup that works | Result |
|---|---|---|---|
| Vue | 3.5.13 (+ @vitejs/plugin-vue 5.2.1) | `isCustomElement: (t) => t.startsWith('dga-')`; per-tag `defineCustomElement` | **PASS** — `dga-button` hydrated, shadow button, label, no console errors |
| Svelte | 5.19.0 (+ @sveltejs/vite-plugin-svelte 5.0.3, needs **Vite 6**) | `mount()` + per-tag registration | **PASS** |
| Lit | 3.2.1 | light-DOM host (`createRenderRoot() { return this }`) + per-tag registration | **PASS** |
| Next.js | 15.1.6 (app router, React 18.3.1) | SSR emits the tag; client component registers in `useEffect` | **PASS** (SSR HTML contains `<dga-button>`, hydrates in the browser) |

Scope of the smoke: one component (`dga-button`) rendering + hydration + console cleanliness in RTL. The 8-component matrix was run on React / Angular / vanilla only; on these frameworks it is **NOT VERIFIED**.
What failed on the way and is now a rule: the Stencil **lazy loader** (`@platformscode/core/loader`) breaks under Vite (`Failed to fetch dynamically imported module …/dga-accordion_26.entry.js` → "Constructor for dga-button#undefined was not found") — use the per-tag `components/<tag>.js` build (rule 1).
