# Floating Button — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `19393:1343`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 19393-1343

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Floating Button

> The floating button enables users to initiate file uploads easily. It remains visible on the screen, allowing users to start the process, review their selections, and track progress. Once the upload is complete, users receive confirmation, ensuring a smooth and efficient experience.

> Resources

## Component sets on this page (1)

- **Floating Button** — 288 variants · `19488:124656`

---
## Floating Button

**Description (component description field):**

> A Floating Button is a circular button that “floats” above the user interface and is typically used to represent a primary or most important action on a screen. It is designed to grab attention and encourage user interaction.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Lead Icon | INSTANCE_SWAP=19478:124492 |
| Text AR | TEXT=إجراء |
| Text EN | TEXT=Button |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Selected · Disabled · Foucsed · Hovered |
| Style | VARIANT: Primary-Brand · Primary- Neutral · Secondary-Solid |
| Icon only | VARIANT: False · True |
| Size | VARIANT: Large · Small |
| On color | VARIANT: Yes · No |

### Anatomy (first variant: `RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No`)

- `RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No` [COMP] — 56×56 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=10 · r=9999 · fill=Button/button-background-black-default=#0d121c · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
  - `plus-sign` [INST] ⟶ instance of **plus-sign / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 18×18
      - `Icon` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No | 116×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No | 116×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes | 116×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-oncolor-default=#ffffff |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes | 116×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No | 116×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No | 116×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-black-hovered=#1f2a37 |   |  |
| RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes | 116×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes | 116×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-oncolor-hovered=#ffffff@0.8 |   |  |
| RTL=False, State=Default, Style=Primary-Brand, Icon only=True, Size=Small, On color=No (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Style=Primary-Brand, Icon only=True, Size=Small, On color=No (+2 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Default, Style=Primary-Brand, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Style=Primary-Brand, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Default, Style=Primary-Brand, Icon only=False, Size=Small, On color=No (+1 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Style=Primary-Brand, Icon only=False, Size=Small, On color=No (+2 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Default, Style=Primary-Brand, Icon only=False, Size=Large, On color=No (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-primary-default=#1b8354 |   |  |
| RTL=False, State=Hovered, Style=Primary-Brand, Icon only=False, Size=Large, On color=No (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-primary-hovered=#166a45 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No (+2 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No (+1 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes (+1 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, State=Hovered, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No (+2 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, State=Default, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-transparent-hovered=#ffffff@0.2 |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-oncolor-focused=#ffffff |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-oncolor-focused=#ffffff |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No (+2 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes (+2 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-disabled-on-color=#ffffff@0.2 |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No (+2 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-oncolor-pressed=#ffffff@0.6 |   |  |
| RTL=False, State=Pressed, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-black-pressed=#4d5761 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, State=Selected, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-oncolor-selected=#ffffff@0.7 |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-oncolor-focused=#ffffff |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-black-default=#0d121c |   |  |
| RTL=False, State=Foucsed, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-oncolor-focused=#ffffff |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No (+2 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes (+2 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-disabled-on-color=#ffffff@0.2 |   |  |
| RTL=False, State=Disabled, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No (+2 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=True, Size=Small, On color=No (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Foucsed, Style=Primary-Brand, Icon only=True, Size=Small, On color=No (+1 more) | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-primary-focused=#1b8354 |   |  |
| RTL=False, State=Foucsed, Style=Primary-Brand, Icon only=True, Size=Large, On color=No (+1 more) | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-primary-focused=#1b8354 |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=False, Size=Small, On color=No (+1 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Pressed, Style=Primary-Brand, Icon only=False, Size=Large, On color=No (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-primary-pressed=#104631 |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=False, Size=Small, On color=No | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Selected, Style=Primary-Brand, Icon only=False, Size=Large, On color=No (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-primary-selected=#14573a |   |  |
| RTL=False, State=Foucsed, Style=Primary-Brand, Icon only=False, Size=Small, On color=No (+1 more) | 114×56 | H/CENTER/CENTER · 16 16 16 16 · 8 | 9999 | Button/button-background-primary-focused=#1b8354 |   |  |
| RTL=False, State=Foucsed, Style=Primary-Brand, Icon only=False, Size=Large, On color=No (+1 more) | 122×64 | H/CENTER/CENTER · 20 20 20 20 · 8 | 9999 | Button/button-background-primary-focused=#1b8354 |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Pressed, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-transparent-pressed=#ffffff@0.4 |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes | 56×56 | H/CENTER/CENTER · 16 16 16 16 · 10 | 9999 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-neutral-selected=#e5e7eb |   |  |
| RTL=False, State=Selected, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes | 64×64 | H/CENTER/CENTER · 20 20 20 20 · 10 | 9999 | Button/button-background-transparent-selected=#ffffff@0.3 |   |  |
| … 16 more distinct rows (see data JSON) | | | | | | |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Selected · Disabled · Foucsed · Hovered · ⚠️ spelling as in Figma: `Foucsed` = **Focused** (source kept unchanged; treat as the normalised state)

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No; RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No; RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-hovered=#1f2a37

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No
- + Focus outline (66×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes; RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-hovered=#ffffff@0.8

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-selected=#ffffff@0.7

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff
- + Focus outline (66×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2
- plus-sign › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No
- + Focus outline (74×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff
- + Focus outline (74×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761; w: 116 → 114

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250; w: 116 → 114

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No
- (root): w: 116 → 114
- + Focus outline (124×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb; w: 116 → 114
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Button: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-pressed=#ffffff@0.6; w: 116 → 114

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-selected=#ffffff@0.7; w: 116 → 114

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-oncolor-focused=#ffffff; w: 116 → 114
- + Focus outline (124×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-oncolor-default=#ffffff → Button/button-background-disabled-on-color=#ffffff@0.2; w: 116 → 114
- plus-sign › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Button: fill: Text/text-default=#161616 → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-pressed=#4d5761; w: 116 → 122

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Button/button-background-black-selected=#384250; w: 116 → 122

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No
- (root): w: 116 → 122
- + Focus outline (132×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb; w: 116 → 122
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Button: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-oncolor-hovered=#ffffff@0.8

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb; w: 116 → 122

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-oncolor-selected=#ffffff@0.7; w: 116 → 122

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-oncolor-focused=#ffffff; w: 116 → 122
- + Focus outline (132×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-disabled-on-color=#ffffff@0.2; w: 116 → 122
- plus-sign › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Button: fill: Text/text-default=#161616 → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Hovered**  · applies to 8 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=Yes …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 8 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=Yes …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Selected**  · applies to 6 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=No …
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-selected=#14573a

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (66×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=No; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (66×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-disabled-on-color=#ffffff@0.2
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (74×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (74×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (124×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=No; RTL=False, Style=Primary-Brand, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae
- Button: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (124×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Small, On color=Yes; RTL=False, Style=Primary-Brand, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-disabled-on-color=#ffffff@0.2
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Button: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (132×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Primary-Brand, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (132×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-selected=#e5e7eb

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6
- + Focus outline (66×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- plus-sign › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-pressed=#ffffff@0.4

#### Default → **Selected**  · applies to 4 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-selected=#ffffff@0.3

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-focused=#ffffff@0
- + Focus outline (66×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6
- + Focus outline (74×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=True, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-focused=#ffffff@0
- + Focus outline (74×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6
- + Focus outline (124×66 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=No; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- plus-sign › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Button: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-focused=#ffffff@0
- + Focus outline (124×66 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Small, On color=Yes; RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-disabled-on-color=#ffffff@0.2
- plus-sign › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-oncolor-disabled=#ffffff@0.4
- Button: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-oncolor-disabled=#ffffff@0.4

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=No
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6
- + Focus outline (132×74 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Foucsed**  · applies to 1 group(s): RTL=False, Style=Secondary-Solid, Icon only=False, Size=Large, On color=Yes
- (root): fill: Button/button-background-transparent-hovered=#ffffff@0.2 → Button/button-background-transparent-focused=#ffffff@0
- + Focus outline (132×74 · stroke=Icon/icon-oncolor=#ffffff · sw=3)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=No**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Small, On color=Yes**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Large, On color=No**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=True, Size=Large, On color=Yes**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Small, On color=No**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Button`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Small, On color=Yes**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Button`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Large, On color=No**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Button`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Style=Primary- Neutral, Icon only=False, Size=Large, On color=Yes**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Button`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 48 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 48 |
