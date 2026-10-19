# Licences and usage notes — DGA Skills Toolkit

This is a summary to support decisions; it is not legal advice. Unknown terms are marked **UNKNOWN**.

| Material | Where in the skill | Licence / terms | Notes |
|---|---|---|---|
| Toolkit's own files: rules, tools, installer, patterns, templates, `lib/` adapters, QA engine, motion lib, docs, tests, examples | `rules/`, `tools/`, `patterns/`, `templates/`, `lib/`, `../install*`, `../tests`, `../examples` | **MIT** — © 2026 Ahmed Darwish (`../LICENSE`) | applies to the toolkit's own files only, not to the third-party material below |
| DGA Platforms Code design data (specs, tokens, template instructions) | `references/dga-live/`, `registry/components.json` | extracted from the Digital Government Authority's free Figma Community files (figma.com/@sdga). Free Figma Community files are published under **CC BY 4.0** (Figma Help Center, "Figma Community copyright and licensing") | attribution: DGA Platforms Code © Digital Government Authority, CC BY 4.0; **changed**: values, variants and instructions extracted to text/JSON, no artwork. Not an official DGA distribution |
| `@platformscode/core` | not bundled (project dependency) | `MIT` per its package.json | publisher official status NOT VERIFIED |
| `platformscode-new-react` | not bundled | `ISC` per its package.json | same |
| `@platformscode/icons` | not bundled | package.json says **`UNLICENSED`** → redistribution terms UNKNOWN | primary icon source by decision D1; ask the publisher/DGA before redistributing SVGs |
| Hugeicons Free (`@hugeicons/core-free-icons`) | not bundled | MIT (package metadata); hugeicons.com FAQ: free icons usable commercially without credit | fallback by decision D2 |
| Hugeicons Pro | never bundled (note: `@platformscode/core@0.0.17` itself depended on `@hugeicons/react-pro` and fetched icons from `hugeicons-cdn.vercel.app` — later versions no longer do; projects must not reuse that CDN without a Pro licence) | commercial licence; no redistribution of the raw set | requires the user's own licence |
| IBM Plex Sans Arabic | not bundled | SIL Open Font License 1.1 | load from the project/Google Fonts |
| GSAP, Three.js | not bundled | per the version the project installs (Three.js MIT; GSAP standard "no charge" licence — check the installed version) | |

Not bundled = the toolkit only references the package; nothing is copied into the skill.

## Toolkit code and examples
- `lib/` is copied into projects (`tools/copy_lib.py`); it contains no third-party code. Packages (`@platformscode/*`, Hugeicons Free) are imported by the project, never vendored.
- `registry/packages/*.json` are API descriptions of the MIT-licensed `@platformscode/core` type declarations.
- `registry/icons/icon-map.json` lists names only (no SVG data).
- `examples/government-site`, `examples/motion-story`: own code + own placeholder art (`coast-poster.svg`, drawn for the example, `data-licence` set). Photos are placehold.co placeholders only.
- `lib/motion`: own code; GSAP / Three.js are imported from the project's own install (not vendored).
- **Not distributed (D16):** Figma SVG exports of the DGA icons and rendered glyphs of `@platformscode/icons` (UNLICENSED).
- Name/brand: "DGA" identifies the followed design system; no trademark right is claimed and no affiliation, endorsement or certification is implied (`PROJECT-IDENTITY.md`).

## Optional upstream skills (not bundled)
| Material | How it reaches the user | Licence (verified 2026-10-17) |
|---|---|---|
| Frontend Design plugin — Anthropic, `anthropics/claude-plugins-official` → `plugins/frontend-design` | `claude plugin install frontend-design@claude-plugins-official`, only via `tools/deps.py setup` with consent, or the user's own Customize > Plugins | Apache-2.0 (`plugins/frontend-design/LICENSE`, commit ea10b213686c) |
| UI/UX Pro Max — nextlevelbuilder, `nextlevelbuilder/ui-ux-pro-max-skill` | `claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill`, same conditions | MIT (`LICENSE`, commit 56ea9cf174ed, v2.15.0) |
The toolkit stores only their names, sources and licence facts in `registry/dependencies.json`. `tools/deps.py verify-source` re-checks the licence text at install time and refuses a mismatch.
