# Buttons — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `1:1183`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 1-1183

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Menu Button

> A button triggers an action or event. Use buttons for important actions like submitting a response, committing a change, or moving to the next step. If you need to navigate to another place, try a link instead. A toggle button is a two-state behavior that switches a state between on and off. A button’s rest state indicates “off” while the selected state indicates “on.”

> Resources

> Close Button

> Fab Button

> Button

> A button triggers an action or event. Use buttons for important actions like submitting a response, committing a change, or moving to the next step. If you need to navigate to another place, try a link instead.

## Component sets on this page (4)

- **Button** — 960 variants · `407:510376`
- **Fab_Button** — 120 variants · `8379:70060`
- **Button-menu** — 360 variants · `411:4377`
- **Button-Close** — 24 variants · `2763:420129`

---
## Button

### Properties

| Property | Type / options |
|---|---|
| 🔁 Lead icon | INSTANCE_SWAP=10909:60605 |
| 🔁 Trail icon | INSTANCE_SWAP=10750:63767 |
| Trail icon | BOOLEAN=false |
| Lead icon | BOOLEAN=true |
| Text EN | TEXT=Button |
| Text AR | TEXT=إجراء |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium · Small |
| State | VARIANT: Default · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary-Neutral · Primary-Brand · Secondary-Solid · Secondary-Outline · Subtle · Transparent |
| Icon only | VARIANT: False · True |
| On-color | VARIANT: False · True |
| Destructive | VARIANT: NO · YES |

### Anatomy (first variant: `RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO`)

- `RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO` [COMP] — 110×44 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 12×18 · rot=-90
      - `Icon` [VECT] — 18×12 · fill=Icon/icon-oncolor=#ffffff
  - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"
  - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
    - `elements` [GROU] — 22×22
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO (+1 more) | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO (+16 more) | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO (+1 more) | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO (+16 more) | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO (+1 more) | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO (+16 more) | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO (+16 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO (+1 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO (+1 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO (+16 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO (+1 more) | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO (+1 more) | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO (+16 more) | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO (+1 more) | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 110×44 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO (+1 more) | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 92×40 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO (+1 more) | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO (+1 more) | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO | 74×32 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO (+1 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO (+1 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| … 178 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Selected · Focused · Disabled

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (110×44 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-selected=#ffffff@0.7

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (110×44 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-hovered=#ffffff@0.8

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (110×44 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (110×44 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb
- Text wrapper › Text: ts: — → Text md/Medium

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb
- Text wrapper › Text: ts: — → Text md/Medium

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 2
- Text wrapper › Text: ts: — → Text md/Medium

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae; ts: — → Text md/Medium

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-selected=#ffffff@0.3; stroke: — → Border/border-white=#ffffff; sw: — → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=False, Destructive=NO …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=False, Destructive=NO …
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO …
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=True, Destructive=NO …
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO …
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Icon/icon-oncolor=#ffffff; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 24 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=False, Destructive=NO …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=False, Destructive=NO …
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Subtle, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: — → Button/button-background-transparent-hovered=#ffffff@0.2

#### Default → **Focused**  · applies to 12 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=True, Destructive=NO …
- (root): stroke: — → Icon/icon-oncolor=#ffffff; sw: — → 2

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=True, Destructive=NO …
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=False, On-color=False, Destructive=NO
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=False, On-color=False, Destructive=NO
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-selected=#14573a

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=False, On-color=True, Destructive=NO
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Icon/icon-primary-400=#54c08a
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Link/link-primary-pressed=#88d8ad

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=False, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=False, On-color=True, Destructive=NO
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Icon/icon-primary-400=#54c08a
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Link/link-primary-hovered=#54c08a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (92×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (92×40 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (92×40 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (92×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Pressed**  · applies to 5 group(s): RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 5 group(s): RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 5 group(s): RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (74×32 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (74×32 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (74×32 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (74×32 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (44×44 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (44×44 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (44×44 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (44×44 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=False, Destructive=NO …
- arrow-right-02 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Subtle, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=True, Destructive=NO …
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=True, Destructive=NO …
- *(no visual difference captured at root/child level)*

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=False, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=True, On-color=False, Destructive=NO
- *(no visual difference captured at root/child level)*

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Medium, Style=Transparent, Icon only=True, On-color=True, Destructive=NO; RTL=False, Size=Small, Style=Transparent, Icon only=True, On-color=True, Destructive=NO
- arrow-right-02 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Icon/icon-primary-400=#54c08a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (32×32 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (32×32 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (32×32 · stroke=Border/border-black=#161616 · sw=3)

- … 24 more state signatures (see data JSON)
### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO**
- `arrow-right-02`: 24×24
- `arrow-right-02 › elements`: 12×18 · rot=-90
- `arrow-right-02 › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Brand/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Neutral/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Brand/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Solid/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Outline/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Outline/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Transparent/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Transparent/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Large/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Large/Hovered/Transparent/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Large/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Large/Hovered/Transparent/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Medium/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Medium/Hovered/Transparent/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Medium/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Medium/Hovered/Transparent/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Brand/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Neutral/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Brand/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Primary-Neutral/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Solid/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Solid/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Outline/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Secondary-Outline/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Subtle/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/False/Small/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/False/Small/Hovered/Transparent/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=False, Destructive=NO ⟶ Button/True/Small/Hovered/Transparent/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True, On-color=True, Destructive=NO ⟶ Button/True/Small/Hovered/Transparent/True/True | **INSTANT** | 1 |

---
## Fab_Button

### Properties

| Property | Type / options |
|---|---|
| 🔁 Lead icon | INSTANCE_SWAP=11214:99622 |
| Lead icon | BOOLEAN=true |
| Text EN | TEXT=Button |
| Text AR | TEXT=إجراء |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary-Neutral · Primary-Brand · Secondary-Solid |
| Icon only | VARIANT: False · True |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, Style=Primary-Brand, Icon only=False, On-color=False`)

- `RTL=False, State=Default, Style=Primary-Brand, Icon only=False, On-color=False` [COMP] — 102×44 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Global/spacing-lg, paddingRight:Global/spacing-lg, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `add-01` [INST] ⟶ instance of **add-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 18×18
      - `Icon` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff
  - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Style=Primary-Brand, Icon only=False, On-color=False (+1 more) | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Default, Style=Primary-Brand, Icon only=True, On-color=False (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, State=Default, Style=Primary-Neutral, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=False, On-color=False (+1 more) | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Pressed, Style=Primary-Neutral, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=True, On-color=False (+1 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Pressed, Style=Primary-Neutral, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Selected, Style=Primary-Neutral, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Selected, Style=Primary-Neutral, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Selected, Style=Primary-Neutral, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Selected, Style=Primary-Neutral, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, State=Focused, Style=Primary-Brand, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-focused=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Primary-Neutral, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-oncolor-focused=#ffffff | Colors/Base/white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=Primary-Brand, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-primary-focused=#1b8354 | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=Primary-Neutral, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Secondary-Solid, Icon only=False, On-color=False | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Secondary-Solid, Icon only=False, On-color=True | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-transparent-focused=#ffffff@0 | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=Primary-Brand, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-focused=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Primary-Neutral, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-oncolor-focused=#ffffff | Colors/Base/white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=Primary-Brand, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-primary-focused=#1b8354 | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Focused, Style=Primary-Neutral, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Secondary-Solid, Icon only=True, On-color=False | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 2 |  |
| RTL=False, State=Focused, Style=Secondary-Solid, Icon only=True, On-color=True | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-transparent-focused=#ffffff@0 | Border/border-white=#ffffff 2 |  |
| RTL=False, State=Disabled, Style=Primary-Brand, Icon only=False, On-color=False (+2 more) | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary-Neutral, Icon only=False, On-color=True (+2 more) | 102×44 | H/CENTER/CENTER · 0 12 0 12 · 4 | 9999 | Button/button-background-disabled-on-color=#ffffff@0.2 |   |  |
| RTL=False, State=Disabled, Style=Primary-Brand, Icon only=True, On-color=False (+2 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary-Neutral, Icon only=True, On-color=True (+2 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 4 | 9999 | Button/button-background-disabled-on-color=#ffffff@0.2 |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Selected · Focused · Disabled

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=False; RTL=False, Style=Primary-Brand, Icon only=True, On-color=False; RTL=False, Style=Primary-Brand, Icon only=True, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=False; RTL=False, Style=Primary-Brand, Icon only=True, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (102×44 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=True; RTL=False, Style=Primary-Neutral, Icon only=True, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=True; RTL=False, Style=Primary-Neutral, Icon only=True, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-selected=#ffffff@0.7

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Colors/Base/white=#ffffff; sw: — → 2
- + Focus outline (102×44 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary=#0d121c → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Text/text-oncolor-primary=#ffffff

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=True; RTL=False, Style=Primary-Brand, Icon only=True, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (102×44 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=False; RTL=False, Style=Primary-Neutral, Icon only=True, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=False; RTL=False, Style=Primary-Neutral, Icon only=True, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (102×44 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=False, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=False; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=False; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=False; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=True; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=True; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=True; RTL=False, Style=Secondary-Solid, Icon only=True, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-focused=#ffffff@0; stroke: — → Border/border-white=#ffffff; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-primary_on-color=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (44×44 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=True, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Colors/Base/white=#ffffff; sw: — → 2
- + Focus outline (44×44 · stroke=Colors/Base/black=#000000 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=True, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (44×44 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, On-color=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=True, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (44×44 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary-Neutral, Icon only=True, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- add-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- add-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Style=Primary-Brand, Icon only=False, On-color=False**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Primary-Neutral, Icon only=False, On-color=True**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-primary=#0d121c · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Primary-Brand, Icon only=False, On-color=True**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, On-color=True**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button"

**RTL=False, State=Default, Style=Primary-Brand, Icon only=True, On-color=False**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff

**RTL=False, State=Default, Style=Primary-Neutral, Icon only=True, On-color=True**
- `add-01`: 24×24
- `add-01 › elements`: 18×18
- `add-01 › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Button-menu

### Properties

| Property | Type / options |
|---|---|
| 🔁 Lead icon | INSTANCE_SWAP=10750:63767 |
| Lead icon | BOOLEAN=false |
| Text EN | TEXT=Button |
| Text AR | TEXT=إجراء |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium · Small |
| State | VARIANT: Default · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary-Neutral · Primary-Brand · Secondary-Solid · Secondary-Outline · Subtle · Transparent |
| Icon only | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False`)

- `RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False` [COMP] — 106×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-xxs, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
    - `elements` [GROU] — 22×22
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
  - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Button"
  - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 11×6
      - `Icon` [VECT] — 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False (+5 more) | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False (+5 more) | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False (+5 more) | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True (+5 more) | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True (+5 more) | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Colors/Gray neutral/400=#9da4ae 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True (+5 more) | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Brand, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Brand, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Brand, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Brand, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary-Neutral, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Brand, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary-Neutral, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Brand, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary-Neutral, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Selected, Style=Primary-Brand, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Large, State=Selected, Style=Primary-Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Large, State=Selected, Style=Secondary-Solid, Icon only=False (+1 more) | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Selected, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Selected, Style=Primary-Brand, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Primary-Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Secondary-Solid, Icon only=False (+1 more) | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 2 12 2 12 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Selected, Style=Primary-Brand, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Small, State=Selected, Style=Primary-Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Small, State=Selected, Style=Secondary-Solid, Icon only=False (+1 more) | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Selected, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 2 8 2 8 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Selected, Style=Primary-Brand, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Large, State=Selected, Style=Primary-Neutral, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Large, State=Selected, Style=Secondary-Solid, Icon only=True (+1 more) | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Selected, Style=Secondary-Outline, Icon only=True | 52×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Selected, Style=Primary-Brand, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Primary-Neutral, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Secondary-Solid, Icon only=True (+1 more) | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Selected, Style=Secondary-Outline, Icon only=True | 40×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Selected, Style=Primary-Brand, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Small, State=Selected, Style=Primary-Neutral, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Size=Small, State=Selected, Style=Secondary-Solid, Icon only=True (+1 more) | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Selected, Style=Secondary-Outline, Icon only=True | 28×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-selected=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Focused, Style=Primary-Brand, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-primary-focused=#1b8354 | Border/border-black=#161616 2 |  |
| RTL=False, Size=Large, State=Focused, Style=Primary-Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 2 16 2 16 · 4 | 4 | Button/button-background-black-default=#0d121c | Border/border-black=#161616 2 |  |
| … 34 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Selected · Focused · Disabled

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False; RTL=False, Size=Large, Style=Primary-Brand, Icon only=True …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (106×40 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=False; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False; RTL=False, Size=Small, Style=Primary-Brand, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (106×40 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Colors/Base/black=#000000; sw: — → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb; stroke: Colors/Gray neutral/400=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True …
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb; stroke: Colors/Gray neutral/400=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True …
- (root): stroke: Colors/Gray neutral/400=#9da4ae → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False
- (root): stroke: Colors/Gray neutral/400=#9da4ae → Global/border-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Small, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Subtle, Icon only=True …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Small, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Subtle, Icon only=True …
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 12 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False …
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False; RTL=False, Size=Small, Style=Transparent, Icon only=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False; RTL=False, Size=Small, Style=Transparent, Icon only=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (88×32 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (88×32 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Brand, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (70×24 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Neutral, Icon only=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (70×24 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (52×40 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Brand, Icon only=True; RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True; RTL=False, Size=Small, Style=Primary-Brand, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (52×40 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary-Neutral, Icon only=True; RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=True; RTL=False, Size=Small, Style=Primary-Neutral, Icon only=True
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=True
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=True; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=True
- (root): stroke: Colors/Gray neutral/400=#9da4ae → Global/border-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=True; RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Subtle, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True …
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True; RTL=False, Size=Small, Style=Transparent, Icon only=True
- *(no visual difference captured at root/child level)*

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True; RTL=False, Size=Small, Style=Transparent, Icon only=True
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Brand, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (40×32 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary-Neutral, Icon only=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (40×32 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Brand, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (28×24 · stroke=Border/border-white=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary-Neutral, Icon only=True
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (28×24 · stroke=Border/border-white=#ffffff · sw=3)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Button"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False**
- `Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · txt="Button"
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False**
- `Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · txt="Button"
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Large/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Large/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Large/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Large/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Large/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Large/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Large/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Large/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Large/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Large/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Large/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Large/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Medium/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Medium/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/False/Small/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/False/Small/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=False ⟶ Button-menu/True/Small/Hovered/Primary-Brand/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False ⟶ Button-menu/True/Small/Hovered/Primary-Neutral/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/False/Small/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False ⟶ Button-menu/True/Small/Hovered/Secondary-Solid/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/False/Small/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False ⟶ Button-menu/True/Small/Hovered/Secondary-Outline/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/False/Small/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=False ⟶ Button-menu/True/Small/Hovered/Subtle/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/False/Small/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=False ⟶ Button-menu/True/Small/Hovered/Transparent/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Large/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Large/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Large/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Large/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Large/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Large/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Large/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Large/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Large/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Large/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Large/Hovered/Transparent/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Large, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Large/Hovered/Transparent/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Medium, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Medium/Hovered/Transparent/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Medium, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Medium/Hovered/Transparent/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/False/Small/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/False/Small/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Brand, Icon only=True ⟶ Button-menu/True/Small/Hovered/Primary-Brand/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Primary-Neutral, Icon only=True ⟶ Button-menu/True/Small/Hovered/Primary-Neutral/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/False/Small/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True ⟶ Button-menu/True/Small/Hovered/Secondary-Solid/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/False/Small/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True ⟶ Button-menu/True/Small/Hovered/Secondary-Outline/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/False/Small/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Subtle, Icon only=True ⟶ Button-menu/True/Small/Hovered/Subtle/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Size=Small, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/False/Small/Hovered/Transparent/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Size=Small, State=Default, Style=Transparent, Icon only=True ⟶ Button-menu/True/Small/Hovered/Transparent/True | **INSTANT** | 1 |

---
## Button-Close

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Small · Medium · Large · x Small |
| State | VARIANT: Default · Pressed · Focused |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `Size=x Small, State=Default, On-color=False`)

- `Size=x Small, State=Default, On-color=False` [COMP] — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 12×12
    - `elements` [GROU] — 8×8
      - `Icon` [VECT] — 8×8 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=x Small, State=Default, On-color=False | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Size=Small, State=Default, On-color=False | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Size=Medium, State=Default, On-color=False | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Size=Large, State=Default, On-color=False | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Size=x Small, State=Pressed, On-color=False | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Small, State=Pressed, On-color=False | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Medium, State=Pressed, On-color=False | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Large, State=Pressed, On-color=False | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=x Small, State=Focused, On-color=False | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-black=#161616 2 |  |
| Size=Small, State=Focused, On-color=False | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-black=#161616 2 |  |
| Size=Medium, State=Focused, On-color=False | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-black=#161616 2 |  |
| Size=Large, State=Focused, On-color=False | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-black=#161616 2 |  |
| Size=x Small, State=Default, On-color=True | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-default=#ffffff@0 |   |  |
| Size=Small, State=Default, On-color=True | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-default=#ffffff@0 |   |  |
| Size=Medium, State=Default, On-color=True | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-default=#ffffff@0 |   |  |
| Size=Large, State=Default, On-color=True | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-default=#ffffff@0 |   |  |
| Size=x Small, State=Pressed, On-color=True | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Small, State=Pressed, On-color=True | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Medium, State=Pressed, On-color=True | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Large, State=Pressed, On-color=True | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=x Small, State=Focused, On-color=True | 20×20 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-white=#ffffff 2 |  |
| Size=Small, State=Focused, On-color=True | 24×24 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-white=#ffffff 2 |  |
| Size=Medium, State=Focused, On-color=True | 32×32 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-white=#ffffff 2 |  |
| Size=Large, State=Focused, On-color=True | 40×40 | H/CENTER/CENTER · 8 8 8 8 · 0 | 9999 |  | Border/border-white=#ffffff 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused

#### Default → **Pressed**  · applies to 4 group(s): Size=x Small, On-color=False; Size=Small, On-color=False; Size=Medium, On-color=False; Size=Large, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 4 group(s): Size=x Small, On-color=False; Size=Small, On-color=False; Size=Medium, On-color=False; Size=Large, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → —; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Pressed**  · applies to 4 group(s): Size=x Small, On-color=True; Size=Small, On-color=True; Size=Medium, On-color=True; Size=Large, On-color=True
- (root): fill: Button/button-background-transparent-default=#ffffff@0 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Focused**  · applies to 4 group(s): Size=x Small, On-color=True; Size=Small, On-color=True; Size=Medium, On-color=True; Size=Large, On-color=True
- (root): fill: Button/button-background-transparent-default=#ffffff@0 → —; stroke: — → Border/border-white=#ffffff; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=x Small, State=Default, On-color=False**
- `cancel-01`: 12×12
- `cancel-01 › elements`: 8×8
- `cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616

**Size=Small, State=Default, On-color=False**
- `cancel-01`: 16×16
- `cancel-01 › elements`: 10×10
- `cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616

**Size=Medium, State=Default, On-color=False**
- `cancel-01`: 20×20
- `cancel-01 › elements`: 13×13
- `cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616

**Size=Large, State=Default, On-color=False**
- `cancel-01`: 24×24
- `cancel-01 › elements`: 16×16
- `cancel-01 › elements › Icon`: 16×16 · fill=Icon/icon-default=#161616

**Size=x Small, State=Default, On-color=True**
- `cancel-01`: 12×12
- `cancel-01 › elements`: 8×8
- `cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-oncolor=#ffffff

**Size=Small, State=Default, On-color=True**
- `cancel-01`: 16×16
- `cancel-01 › elements`: 10×10
- `cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-oncolor=#ffffff

**Size=Medium, State=Default, On-color=True**
- `cancel-01`: 20×20
- `cancel-01 › elements`: 13×13
- `cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-oncolor=#ffffff

**Size=Large, State=Default, On-color=True**
- `cancel-01`: 24×24
- `cancel-01 › elements`: 16×16
- `cancel-01 › elements › Icon`: 16×16 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Size=x Small, State=Default, On-color=False ⟶ Button-Close/x Small/Hovered/False | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Small, State=Default, On-color=False ⟶ Button-Close/Small/Hovered/False | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Medium, State=Default, On-color=False ⟶ Button-Close/Medium/Hovered/False | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Large, State=Default, On-color=False ⟶ Button-Close/Large/Hovered/False | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=x Small, State=Default, On-color=True ⟶ Button-Close/x Small/Hovered/True | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Small, State=Default, On-color=True ⟶ Button-Close/Small/Hovered/True | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Medium, State=Default, On-color=True ⟶ Button-Close/Medium/Hovered/True | **DISSOLVE 200ms LINEAR** | 1 |
| ON_HOVER | CHANGE_TO | Size=Large, State=Default, On-color=True ⟶ Button-Close/Large/Hovered/True | **DISSOLVE 200ms LINEAR** | 1 |
