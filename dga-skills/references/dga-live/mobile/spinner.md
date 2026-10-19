# Spinner — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5698:11129`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5698-11129

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Spinner

> A Spinner, also known as a Loading Indicator, is a UI component that provides visual feedback to users that a process is ongoing. It typically appears as a rotating icon or animation.

> Resources

## Component sets on this page (1)

- **Spinner** — 84 variants · `5698:11136`

---
## Spinner

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: tiny · x-small · small · medium · large · x-large · huge |
| Style | VARIANT: Neutral · On-color · Brand |
| Indicator | VARIANT: 1 · 2 · 3 · 4 |

### Anatomy (first variant: `Size=tiny, Style=Neutral, Indicator=2`)

- `Size=tiny, Style=Neutral, Indicator=2` [COMP] — 20×20
  - `Track` [ELLI] — 20×20 · fill=Background/background-neutral-100=#f3f4f6
  - `Tail` [ELLI] — 20×20 · r=4 · fill=Background/background-black=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=tiny, Style=Neutral, Indicator=2 (+11 more) | 20×20 |  ·  ·  |  |  |   |  |
| Size=x-small, Style=Neutral, Indicator=2 (+11 more) | 24×24 |  ·  ·  |  |  |   |  |
| Size=small, Style=Neutral, Indicator=2 (+11 more) | 28×28 |  ·  ·  |  |  |   |  |
| Size=medium, Style=Neutral, Indicator=2 (+11 more) | 32×32 |  ·  ·  | 1000 |  |   |  |
| Size=large, Style=Neutral, Indicator=2 (+11 more) | 36×36 |  ·  ·  |  |  |   |  |
| Size=x-large, Style=Neutral, Indicator=2 (+11 more) | 40×40 |  ·  ·  |  |  |   |  |
| Size=huge, Style=Neutral, Indicator=2 (+11 more) | 44×44 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=tiny, Style=Neutral, Indicator=2**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-black=#161616

**Size=tiny, Style=Brand, Indicator=2**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-primary=#1b8354

**Size=tiny, Style=On-color, Indicator=2**
- `Track`: 20×20 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Tail`: 20×20 · r=4 · fill=Background/surface-oncolor=#ffffff

**Size=tiny, Style=Neutral, Indicator=3**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-black=#161616 · rot=-90

**Size=tiny, Style=Brand, Indicator=3**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-primary=#1b8354 · rot=-90

**Size=tiny, Style=On-color, Indicator=3**
- `Track`: 20×20 · fill=Alpha/alpha-white-30=#ffffff@0.3
- `Tail`: 20×20 · r=4 · fill=Background/surface-oncolor=#ffffff · rot=-90

**Size=tiny, Style=Neutral, Indicator=4**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-black=#161616 · rot=180

**Size=tiny, Style=Brand, Indicator=4**
- `Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Tail`: 20×20 · r=4 · fill=Background/background-primary=#1b8354 · rot=180

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Indicator: 2→3 | **SMART_ANIMATE 250ms LINEAR** | 21 |
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Indicator: 3→4 | **SMART_ANIMATE 250ms LINEAR** | 21 |
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Indicator: 4→1 | **SMART_ANIMATE 250ms LINEAR** | 21 |
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Indicator: 1→2 | **SMART_ANIMATE 250ms LINEAR** | 21 |
