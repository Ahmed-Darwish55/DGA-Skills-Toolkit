# Chip — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `17196:1419`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 17196-1419

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Chip

> A chip component is a small, interactive element used to display information, trigger actions, or allow selections.

> Resources

## Component sets on this page (1)

- **Chip** — 288 variants · `17276:24471`

---
## Chip

**Description (component description field):**

> A chip component is a small, interactive element used to display information, trigger actions, or allow selections.

### Properties

| Property | Type / options |
|---|---|
| Text EN | TEXT=Item |
| 🔁 Swap Lead Icon | INSTANCE_SWAP=13758:242431 |
| 🔁 Swap Trail Icon | INSTANCE_SWAP=13758:242431 |
| Show Lead Icon | BOOLEAN=false |
| Show Trail Icon | BOOLEAN=false |
| Text AR | TEXT=اختيار |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary · Neutral |
| Size | VARIANT: Large · Medium · Small |
| Rounded | VARIANT: True · False |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, Style=Primary, Size=Small, Rounded=False, On-color=False`)

- `RTL=False, State=Default, Style=Primary, Size=Small, Rounded=False, On-color=False` [COMP] — 47×20 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
  - `Lead icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
    - `elements` [GROU] — 9×9
      - `Icon` [VECT] — 9×9 · fill=Icon/icon-success=#067647
  - `Text` [TEXT] — 23×14 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}
  - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 10×10
    - `elements` [GROU] — 9×9
      - `Icon` [VECT] — 9×9 · fill=Icon/icon-success=#067647

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Style=Primary, Size=Small, Rounded=False, On-color=False (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Small, Rounded=False, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Primary, Size=Small, Rounded=True, On-color=False (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Small, Rounded=True, On-color=False | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=False, On-color=False (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Medium, Rounded=False, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Medium, Rounded=True, On-color=False | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Primary, Size=Large, Rounded=False, On-color=False (+1 more) | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Large, Rounded=False, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Primary, Size=Large, Rounded=True, On-color=False (+1 more) | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-50=#f3fcf6 |   |  |
| RTL=False, State=Default, Style=Neutral, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Neutral, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-hovered=#e5e7eb |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-200=#b8eacb |   |  |
| RTL=False, State=Pressed, Style=Neutral, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-neutral-300=#d2d6db |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary-400=#54c08a |   |  |
| RTL=False, State=Selected, Style=Neutral, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Background/background-primary=#1b8354 |   |  |
| RTL=False, State=Focused, Style=Neutral, Size=Large, Rounded=True, On-color=False | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-neutral-focused=#f3f4f6 |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Small, Rounded=False, On-color=False (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Small, Rounded=True, On-color=False (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Medium, Rounded=False, On-color=False (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Medium, Rounded=True, On-color=False (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Large, Rounded=False, On-color=False (+1 more) | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Large, Rounded=True, On-color=False (+1 more) | 60×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Default, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-diabled=#ffffff@0.2 |   |  |
| RTL=False, State=Focused, Style=Primary, Size=Small, Rounded=False, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-focused=#ffffff |   |  |
| RTL=False, State=Default, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-diabled=#ffffff@0.2 |   |  |
| RTL=False, State=Focused, Style=Primary, Size=Small, Rounded=True, On-color=True (+1 more) | 47×20 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-focused=#ffffff |   |  |
| RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Pressed, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Selected, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Disabled, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-diabled=#ffffff@0.2 |   |  |
| RTL=False, State=Focused, Style=Primary, Size=Medium, Rounded=False, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Chip/chip-background-on-color-focused=#ffffff |   |  |
| RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=True (+1 more) | 51×24 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Chip/chip-background-on-color-hovered=#ffffff@0.8 |   |  |
| … 16 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Selected · Focused · Disabled

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=False
- + Focus outline (55×28 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Background/background-primary-50=#f3fcf6 → Background/background-primary-200=#b8eacb

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Background/background-primary-50=#f3fcf6 → Background/background-primary-400=#54c08a
- Text: fill: Text/text-primary-sa-flag=#14573a → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Background/background-primary-50=#f3fcf6 → Background/background-primary=#1b8354
- Text: fill: Text/text-primary-sa-flag=#14573a → Text/text-oncolor-primary=#ffffff

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Background/background-primary-50=#f3fcf6 → Global/background-disabled=#e5e7eb
- Text: fill: Text/text-primary-sa-flag=#14573a → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Chip/chip-background-neutral-hovered=#e5e7eb

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Background/background-neutral-300=#d2d6db

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Chip/chip-background-neutral-selected=#384250
- Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=False
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Chip/chip-background-neutral-focused=#f3f4f6
- + Focus outline (55×28 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=False …
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=False
- + Focus outline (59×32 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=False
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Chip/chip-background-neutral-focused=#f3f4f6
- + Focus outline (59×32 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Primary, Size=Large, Rounded=False, On-color=False; RTL=False, Style=Primary, Size=Large, Rounded=True, On-color=False
- + Focus outline (68×40 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Neutral, Size=Large, Rounded=False, On-color=False; RTL=False, Style=Neutral, Size=Large, Rounded=True, On-color=False
- (root): fill: Chip/chip-background-neutral-default=#f3f4f6 → Chip/chip-background-neutral-focused=#f3f4f6
- + Focus outline (68×40 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Hovered**  · applies to 12 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=True …
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-hovered=#ffffff@0.8

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=True …
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-pressed=#ffffff@0.6

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=True …
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-selected=#ffffff@0.7

#### Default → **Disabled**  · applies to 12 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=True …
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-diabled=#ffffff@0.2
- Text: fill: Text/text-default=#161616 → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Small, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Small, Rounded=True, On-color=True
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-focused=#ffffff
- + Focus outline (55×28 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Medium, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Medium, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Medium, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Medium, Rounded=True, On-color=True
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-focused=#ffffff
- + Focus outline (59×32 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Style=Primary, Size=Large, Rounded=False, On-color=True; RTL=False, Style=Neutral, Size=Large, Rounded=False, On-color=True; RTL=False, Style=Primary, Size=Large, Rounded=True, On-color=True; RTL=False, Style=Neutral, Size=Large, Rounded=True, On-color=True
- (root): fill: Chip/chip-background-on-color-default=#ffffff → Chip/chip-background-on-color-focused=#ffffff
- + Focus outline (68×40 · stroke=Icon/icon-default=#161616 · sw=3)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Style=Primary, Size=Small, Rounded=False, On-color=False**
- `Text`: 23×14 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Style=Neutral, Size=Small, Rounded=False, On-color=False**
- `Text`: 23×14 · fill=Text/text-default=#161616 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Style=Primary, Size=Small, Rounded=True, On-color=False**
- `Text`: 23×14 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Style=Neutral, Size=Small, Rounded=True, On-color=False**
- `Text`: 23×14 · fill=Text/text-default=#161616 · font=IBM Plex Sans Arabic SemiBold · fs=10 · lh=14 · ts=Text 2xs/SemiBold · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-2xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-2xs, lineHeight:Line Height/Text/line-heights-text-2xs}

**RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=False, On-color=False**
- `Text`: 27×18 · fill=Text/text-primary-sa-flag=#14573a · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, State=Default, Style=Neutral, Size=Medium, Rounded=False, On-color=False**
- `Text`: 27×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False**
- `Text`: 27×18 · fill=Text/text-primary-sa-flag=#14573a · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, State=Default, Style=Neutral, Size=Medium, Rounded=True, On-color=False**
- `Text`: 27×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 48 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 48 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **INSTANT** | 48 |
| ON_CLICK | CHANGE_TO | State: Selected→Default | **INSTANT** | 48 |
