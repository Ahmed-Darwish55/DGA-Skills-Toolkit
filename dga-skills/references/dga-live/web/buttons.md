# Buttons — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `1:1183`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 1-1183

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Button

> A button triggers an action or event. Use buttons for important actions like submitting a response, committing a change, or moving to the next step. If you need to navigate to another place, try a link instead.

> Resources

> Menu Button

> A button triggers an action or event. Use buttons for important actions like submitting a response, committing a change, or moving to the next step. If you need to navigate to another place, try a link instead. A toggle button is a two-state behavior that switches a state between on and off. A button’s rest state indicates “off” while the selected state indicates “on.”

> Close Button

## Component sets on this page (3)

- **Button** — 1344 variants · `407:510376`
- **Button-menu** — 432 variants · `411:4377`
- **Button-Close** — 32 variants · `2763:420129`

---
## Button

**Description (component description field):**

> Buttons are interactive components that trigger specific actions. The label on a button describes the action that will occur when it is clicked by the user.

### Properties

| Property | Type / options |
|---|---|
| Trail icon | BOOLEAN=false |
| Text EN | TEXT=Button |
| Text AR | TEXT=إجراء |
| Lead Icon | BOOLEAN=true |
| 🔁 Swap Trail Icon | INSTANCE_SWAP=13758:238512 |
| 🔁 Swap Lead Icon | INSTANCE_SWAP=13758:241700 |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium · Small |
| State | VARIANT: Default · Hovered · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary · Neutral · Secondary-Solid · Secondary-Outline · Subtle · Transparent |
| Destructive | VARIANT: no · yes |
| Icon only | VARIANT: False · True |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False`)

- `RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False` [COMP] — 110×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 12×18 · rot=-90
      - `Icon` [VECT] — 18×12 · fill=Icon/icon-oncolor=#ffffff
  - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
    - `elements` [GROU] — 22×22
      - `Icon` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+1 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True (+2 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False (+21 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+1 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True (+2 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False (+21 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+1 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True (+2 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False (+21 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False (+1 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True (+2 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False (+21 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False (+1 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True (+2 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False (+21 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary, Destructive=no, Icon only=True, On-color=False | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Destructive=no, Icon only=True, On-color=False | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False (+1 more) | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True (+2 more) | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False (+21 more) | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+2 more) | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 110×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+2 more) | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 92×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=True (+1 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False (+2 more) | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True | 74×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False (+2 more) | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | 40×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False (+2 more) | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 | Border/border-neutral-secondary=#e5e7eb 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True | 32×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 | Border/border-white-40=#ffffff@0.4 1 |  |
| RTL=False, Size=Small, State=Hovered, Style=Primary, Destructive=no, Icon only=True, On-color=False | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Neutral, Destructive=no, Icon only=True, On-color=True (+1 more) | 24×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| … 232 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Selected · Focused · Disabled

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (110×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 12 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-hovered=#ffffff@0.8

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-selected=#ffffff@0.7

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (110×40 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-hovered=#1f2a37

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (110×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True …
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True …
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Focused**  · applies to 18 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True …
- (root): stroke: — → Icon/icon-oncolor=#ffffff; sw: — → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False …
- (root): fill: — → Button/button-background-neutral-default=#f3f4f6; stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=False …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=False …
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False …
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=True …
- (root): fill: — → Button/button-background-transparent-hovered=#ffffff@0.2

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=True …
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=True …
- (root): fill: — → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True …
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Icon/icon-oncolor=#ffffff; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=True, On-color=False …
- (root): fill: — → Button/button-background-neutral-default=#f3f4f6

#### Default → **Focused**  · applies to 18 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=False …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=False …
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=True …
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-hovered=#166a45
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-pressed=#104631
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-selected=#14573a
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-selected=#14573a

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/Button-icon-transparent-hovered-on-color=#54c08a
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Button/button-label-transparent-hovered-on-color=#54c08a

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-icon-transparent-pressed-on-color=#88d8ad
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Button/button-label-transparent-pressed-on-color=#88d8ad

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=False, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-icon-transparent-selected-on-color=#54c08a
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Button/button-label-transparent-selected-on-color=#54c08a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (92×32 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=False, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (92×32 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (92×32 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (74×24 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=True; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=False, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (74×24 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=False, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (74×24 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (40×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Primary, Destructive=no, Icon only=True, On-color=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=True
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; stroke: — → Border/border-white=#ffffff; sw: — → 2
- + Focus outline (40×40 · stroke=Border/border-black=#161616 · sw=3)

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Large, Style=Primary, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Primary, Destructive=no, Icon only=True, On-color=True …
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (40×40 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Neutral, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Neutral, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Neutral, Destructive=no, Icon only=True, On-color=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Small, Style=Secondary-Solid, Destructive=no, Icon only=True, On-color=True
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Small, Style=Secondary-Outline, Destructive=no, Icon only=True, On-color=True
- (root): stroke: Border/border-white-40=#ffffff@0.4 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=False …
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Subtle, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=True …
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=False
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=False; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=False
- *(no visual difference captured at root/child level)*

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/Button-icon-transparent-hovered-on-color=#54c08a

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-icon-transparent-pressed-on-color=#88d8ad

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Medium, Style=Transparent, Destructive=no, Icon only=True, On-color=True; RTL=False, Size=Small, Style=Transparent, Destructive=no, Icon only=True, On-color=True
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Button/button-icon-transparent-selected-on-color=#54c08a

- … 45 more state signatures (see data JSON)
### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-default=#161616
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=True**
- `Leading Icon`: 24×24
- `Leading Icon › elements`: 12×18 · rot=-90
- `Leading Icon › elements › Icon`: 18×12 · fill=Icon/icon-oncolor=#ffffff
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 264 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 264 |

---
## Button-menu

**Description (component description field):**

> Menu button functions as a toggle to reveal a menu presenting various options.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Swap Lead icon | INSTANCE_SWAP=13758:241591 |
| Lead icon | BOOLEAN=false |
| Text EN | TEXT=Button |
| Text AR | TEXT=إجراء |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium · Small |
| State | VARIANT: Default · Hovered · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Primary · Neutral · Secondary-Solid · Secondary-Outline · Subtle · Transparent |
| Icon only | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Size=Large, State=Default, Style=Primary, Icon only=False`)

- `RTL=False, Size=Large, State=Default, Style=Primary, Icon only=False` [COMP] — 106×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Leading Icon` [INST] ⟶ instance of **folder-library / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
    - `elements` [GROU] — 19×21
      - `Icon` [VECT] — 19×21 · fill=Icon/icon-oncolor=#ffffff
  - `Text wrapper` [FRAM] — 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 11×6
      - `Icon` [VECT] — 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, State=Default, Style=Primary, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False (+6 more) | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False (+6 more) | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False (+6 more) | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Default, Style=Primary, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Large, State=Default, Style=Neutral, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True (+6 more) | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 |  |   |  |
| RTL=False, Size=Medium, State=Default, Style=Primary, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Neutral, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=True (+6 more) | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 |  |   |  |
| RTL=False, Size=Small, State=Default, Style=Primary, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, Size=Small, State=Default, Style=Neutral, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Solid, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Default, Style=Secondary-Outline, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=True (+6 more) | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 |  |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Primary, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Icon only=False (+1 more) | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Primary, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Icon only=False (+1 more) | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Hovered, Style=Primary, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Solid, Icon only=False (+1 more) | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Hovered, Style=Primary, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Neutral, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Icon only=True (+1 more) | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Large, State=Hovered, Style=Secondary-Outline, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Hovered, Style=Primary, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Neutral, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Icon only=True (+1 more) | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Hovered, Style=Primary, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Neutral, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Solid, Icon only=True (+1 more) | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Size=Small, State=Hovered, Style=Secondary-Outline, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-hovered=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Neutral, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=False | 88×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Neutral, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=False (+1 more) | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=False | 70×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Pressed, Style=Primary, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Neutral, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Large, State=Pressed, Style=Secondary-Outline, Icon only=True | 80×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Medium, State=Pressed, Style=Primary, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Neutral, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Medium, State=Pressed, Style=Secondary-Outline, Icon only=True | 64×32 | H/CENTER/CENTER · 0 12 0 12 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Small, State=Pressed, Style=Primary, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Neutral, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Solid, Icon only=True (+1 more) | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Size=Small, State=Pressed, Style=Secondary-Outline, Icon only=True | 48×24 | H/CENTER/CENTER · 0 8 0 8 · 4 | 4 | Button/button-background-neutral-pressed=#e5e7eb | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Size=Large, State=Selected, Style=Primary, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, Size=Large, State=Selected, Style=Neutral, Icon only=False | 106×40 | H/CENTER/CENTER · 0 16 0 16 · 4 | 4 | Button/button-background-black-selected=#384250 |   |  |
| … 58 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Selected · Focused · Disabled

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Icon only=False; RTL=False, Size=Medium, Style=Primary, Icon only=False; RTL=False, Size=Small, Style=Primary, Icon only=False; RTL=False, Size=Large, Style=Primary, Icon only=True …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Icon only=False; RTL=False, Size=Medium, Style=Primary, Icon only=False; RTL=False, Size=Small, Style=Primary, Icon only=False; RTL=False, Size=Large, Style=Primary, Icon only=True …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Primary, Icon only=False; RTL=False, Size=Medium, Style=Primary, Icon only=False; RTL=False, Size=Small, Style=Primary, Icon only=False; RTL=False, Size=Large, Style=Primary, Icon only=True …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (106×40 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary, Icon only=False; RTL=False, Size=Medium, Style=Primary, Icon only=False; RTL=False, Size=Small, Style=Primary, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=False; RTL=False, Size=Medium, Style=Neutral, Icon only=False; RTL=False, Size=Small, Style=Neutral, Icon only=False; RTL=False, Size=Large, Style=Neutral, Icon only=True …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-hovered=#1f2a37

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=False; RTL=False, Size=Medium, Style=Neutral, Icon only=False; RTL=False, Size=Small, Style=Neutral, Icon only=False; RTL=False, Size=Large, Style=Neutral, Icon only=True …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=False; RTL=False, Size=Medium, Style=Neutral, Icon only=False; RTL=False, Size=Small, Style=Neutral, Icon only=False; RTL=False, Size=Large, Style=Neutral, Icon only=True …
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (106×40 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=False; RTL=False, Size=Medium, Style=Neutral, Icon only=False; RTL=False, Size=Small, Style=Neutral, Icon only=False
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True …
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=False; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=False
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False …
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 12 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False …
- (root): fill: — → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Focused**  · applies to 6 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True …
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-black=#161616; sw: 1 → 2

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=False; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 12 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=False; RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Subtle, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False …
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False; RTL=False, Size=Small, Style=Transparent, Icon only=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-hovered=#166a45
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False; RTL=False, Size=Small, Style=Transparent, Icon only=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-pressed=#104631
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=False; RTL=False, Size=Medium, Style=Transparent, Icon only=False; RTL=False, Size=Small, Style=Transparent, Icon only=False
- Text wrapper › Text: fill: Text/text-default=#161616 → Button/button-background-primary-selected=#14573a
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (88×32 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Neutral, Icon only=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (88×32 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary, Icon only=False
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (70×24 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Neutral, Icon only=False
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (70×24 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Primary, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (80×40 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Primary, Icon only=True; RTL=False, Size=Medium, Style=Primary, Icon only=True; RTL=False, Size=Small, Style=Primary, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (80×40 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Neutral, Icon only=True; RTL=False, Size=Medium, Style=Neutral, Icon only=True; RTL=False, Size=Small, Style=Neutral, Icon only=True
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Solid, Icon only=True; RTL=False, Size=Medium, Style=Secondary-Solid, Icon only=True; RTL=False, Size=Small, Style=Secondary-Solid, Icon only=True
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): RTL=False, Size=Large, Style=Secondary-Outline, Icon only=True; RTL=False, Size=Medium, Style=Secondary-Outline, Icon only=True; RTL=False, Size=Small, Style=Secondary-Outline, Icon only=True
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-neutral-secondary=#e5e7eb
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 6 group(s): RTL=False, Size=Large, Style=Subtle, Icon only=True; RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Subtle, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True …
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True; RTL=False, Size=Small, Style=Transparent, Icon only=True
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-hovered=#166a45
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True; RTL=False, Size=Small, Style=Transparent, Icon only=True
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-pressed=#104631
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 3 group(s): RTL=False, Size=Large, Style=Transparent, Icon only=True; RTL=False, Size=Medium, Style=Transparent, Icon only=True; RTL=False, Size=Small, Style=Transparent, Icon only=True
- Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-selected=#14573a
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Button/button-background-primary-selected=#14573a

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Primary, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (64×32 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Style=Neutral, Icon only=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (64×32 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Primary, Icon only=True
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (48×24 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Small, Style=Neutral, Icon only=True
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-focused=#0d121c; stroke: — → Border/border-black=#161616; sw: — → 2
- + Focus outline (48×24 · stroke=Alpha/alpha-white-100=#ffffff · sw=3)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, State=Default, Style=Primary, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Large, State=Default, Style=Neutral, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Large, State=Default, Style=Secondary-Solid, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Secondary-Outline, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Large, State=Default, Style=Transparent, Icon only=False**
- `Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Size=Medium, State=Default, Style=Primary, Icon only=False**
- `Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90

**RTL=False, Size=Medium, State=Default, Style=Neutral, Icon only=False**
- `Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 72 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 72 |

---
## Button-Close

**Description (component description field):**

> The Close Button component is a small, interactive element used to dismiss modals, dialogs, or popups. It typically features an "X" icon and supports accessibility features like keyboard navigation and ARIA labels.

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Small · Medium · Large · x Small |
| State | VARIANT: Default · Hovered · Pressed · Focused |
| On-color | VARIANT: False · True |

### Anatomy (first variant: `Size=x Small, State=Default, On-color=False`)

- `Size=x Small, State=Default, On-color=False` [COMP] — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 16×16
    - `elements` [GROU] — 9×9
      - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=x Small, State=Default, On-color=False (+1 more) | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  |   |  |
| Size=Small, State=Default, On-color=False (+1 more) | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  |   |  |
| Size=Medium, State=Default, On-color=False (+1 more) | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  |   |  |
| Size=Large, State=Default, On-color=False (+1 more) | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  |   |  |
| Size=x Small, State=Hovered, On-color=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Size=Small, State=Hovered, On-color=False | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Size=Medium, State=Hovered, On-color=False | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Size=Large, State=Hovered, On-color=False | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Size=x Small, State=Pressed, On-color=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Small, State=Pressed, On-color=False | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Medium, State=Pressed, On-color=False | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=Large, State=Pressed, On-color=False | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Size=x Small, State=Focused, On-color=False | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| Size=Small, State=Focused, On-color=False | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| Size=Medium, State=Focused, On-color=False | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| Size=Large, State=Focused, On-color=False | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| Size=x Small, State=Hovered, On-color=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| Size=Small, State=Hovered, On-color=True | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| Size=Medium, State=Hovered, On-color=True | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| Size=Large, State=Hovered, On-color=True | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| Size=x Small, State=Pressed, On-color=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Small, State=Pressed, On-color=True | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Medium, State=Pressed, On-color=True | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=Large, State=Pressed, On-color=True | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| Size=x Small, State=Focused, On-color=True | 20×20 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-white=#ffffff 2 |  |
| Size=Small, State=Focused, On-color=True | 24×24 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-white=#ffffff 2 |  |
| Size=Medium, State=Focused, On-color=True | 32×32 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-white=#ffffff 2 |  |
| Size=Large, State=Focused, On-color=True | 40×40 | H/CENTER/CENTER · 0 0 0 0 · 0 | 4 |  | Border/border-white=#ffffff 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused

#### Default → **Hovered**  · applies to 4 group(s): Size=x Small, On-color=False; Size=Small, On-color=False; Size=Medium, On-color=False; Size=Large, On-color=False
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 4 group(s): Size=x Small, On-color=False; Size=Small, On-color=False; Size=Medium, On-color=False; Size=Large, On-color=False
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 4 group(s): Size=x Small, On-color=False; Size=Small, On-color=False; Size=Medium, On-color=False; Size=Large, On-color=False
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Hovered**  · applies to 4 group(s): Size=x Small, On-color=True; Size=Small, On-color=True; Size=Medium, On-color=True; Size=Large, On-color=True
- (root): fill: — → Button/button-background-transparent-hovered=#ffffff@0.2

#### Default → **Pressed**  · applies to 4 group(s): Size=x Small, On-color=True; Size=Small, On-color=True; Size=Medium, On-color=True; Size=Large, On-color=True
- (root): fill: — → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Focused**  · applies to 4 group(s): Size=x Small, On-color=True; Size=Small, On-color=True; Size=Medium, On-color=True; Size=Large, On-color=True
- (root): stroke: — → Border/border-white=#ffffff; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=x Small, State=Default, On-color=False**
- `multiplication-sign`: 16×16
- `multiplication-sign › elements`: 9×9
- `multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616

**Size=Small, State=Default, On-color=False**
- `multiplication-sign`: 20×20
- `multiplication-sign › elements`: 11×11
- `multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616

**Size=Medium, State=Default, On-color=False**
- `multiplication-sign`: 20×20
- `multiplication-sign › elements`: 11×11
- `multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616

**Size=Large, State=Default, On-color=False**
- `multiplication-sign`: 24×24
- `multiplication-sign › elements`: 14×14
- `multiplication-sign › elements › Icon`: 14×14 · fill=Icon/icon-default=#161616

**Size=x Small, State=Default, On-color=True**
- `multiplication-sign`: 16×16
- `multiplication-sign › elements`: 9×9
- `multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-oncolor=#ffffff

**Size=Small, State=Default, On-color=True**
- `multiplication-sign`: 20×20
- `multiplication-sign › elements`: 11×11
- `multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-oncolor=#ffffff

**Size=Medium, State=Default, On-color=True**
- `multiplication-sign`: 20×20
- `multiplication-sign › elements`: 11×11
- `multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-oncolor=#ffffff

**Size=Large, State=Default, On-color=True**
- `multiplication-sign`: 24×24
- `multiplication-sign › elements`: 14×14
- `multiplication-sign › elements › Icon`: 14×14 · fill=Icon/icon-oncolor=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **DISSOLVE 200ms LINEAR** | 8 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 8 |
