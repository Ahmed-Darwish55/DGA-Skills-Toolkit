# Notices and attributions

**Independent project. Not affiliated with, endorsed by, or certified by the Saudi Digital Government Authority (DGA).**
Created and developed by Ahmed Darwish. The toolkit's own files are MIT-licensed ([LICENSE](LICENSE)). Full ledger: [`dga-skills/LICENSES.md`](dga-skills/LICENSES.md) · identity and brand gate: [`dga-skills/PROJECT-IDENTITY.md`](dga-skills/PROJECT-IDENTITY.md).

| Party | Material | How it is used here | Terms |
|---|---|---|---|
| Saudi Digital Government Authority (DGA) | DGA Platforms Code (Figma Community files) | values, variants, tokens and template instructions extracted as text/JSON into `dga-skills/references/`; no SVG/PNG artwork | **CC BY 4.0** (licence of free Figma Community files). Attribution: "DGA Platforms Code" © Digital Government Authority, figma.com/@sdga. Changes: extracted and restructured as JSON/Markdown |
| `@platformscode/*` authors (npm) | `@platformscode/core` (MIT), `platformscode-new-react` (ISC), `@platformscode/icons` (`UNLICENSED`) | referenced as dependencies of *your* project; API descriptions extracted from type declarations; **never vendored or patched**; no icon SVGs redistributed | per package; official publisher status NOT VERIFIED |
| Hugeicons | Hugeicons Free (`@hugeicons/core-free-icons`, MIT) | icon fallback by name mapping | MIT; **Hugeicons Pro is never bundled** |
| Anthropic | Claude Code, Frontend Design plugin | host runtime; optional helper installed from `anthropics/claude-plugins-official` only with consent | Apache-2.0 (plugin); not bundled |
| nextlevelbuilder | UI/UX Pro Max | optional helper installed from `nextlevelbuilder/ui-ux-pro-max-skill` only with consent | MIT; not bundled |
| IBM | IBM Plex Sans Arabic | named by the design system, loaded by the project | SIL OFL 1.1 |
| GreenSock / three.js authors | GSAP, Three.js | only when the project installs them | their licences |

Not included in this repository or its release archives: Figma SVG exports of DGA icons and any rendered `@platformscode/icons` glyphs (`@platformscode/icons` is published as `UNLICENSED`, so its glyphs are never redistributed here; projects install the package themselves).
