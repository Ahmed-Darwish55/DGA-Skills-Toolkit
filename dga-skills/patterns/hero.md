# Hero — `Hero` / `hero()`
Figma: Home template hero frame (`templates/home-page.md`): `lay=V/MAX/CENTER · pad 40 80 · gap 32 · fill GRADIENT primary-800 → primary-600`; FAQ/Help hero: `Background/background-primary-25`.
Exact: gradient band (`--colors-primary-sa-flag-800 → -600-primary`), title (Display lg, h1), lead (`--text-oncolor-secondary`), optional `dga-search-box` (lg, fullwidth) and `dga-button-v2 onColor` actions. `light` variant = primary-25 background with default text colours.
Enhanced [AHMED HOUSE]: `--split` two-column (7/5) with project media (`media.src`, `media.alt`, `media.licence` required), reveal motion (300 ms ease-out, INSTANT under `prefers-reduced-motion`).
Creative [AHMED HOUSE]: full-bleed `img.ah-hero__bg` + overlay `--ahmed-hero-overlay`, Display xl title (`--ahmed-display-xl`), figures column. Controls remain DGA (`dga-button-v2 onColor`).
Content rules: real photography only (no stock/AI decoration), figures must be sourced numbers; placeholders are marked.
Measured: no overflow at 1440/1024/768/390 (React, vanilla); hero on-color Primary button Default/Hovered/Pressed/Focused compared against Figma `On-color=True` variants — see QA report (E6) for the per-state verdicts.
