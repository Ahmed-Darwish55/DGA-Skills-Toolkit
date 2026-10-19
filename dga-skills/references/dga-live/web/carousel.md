# Carousel — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `17240:195`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 17240-195

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Carousel

> A web-component powered carousel component for cycling through a series of content such as images, text, or cards.

> Resources

## Component sets on this page (3)

- **Carousel** — 3 variants · `17242:4306`
- **Carousel Controls** — 6 variants · `17241:281`
- **Carousel Arrows** — 60 variants · `17241:286`

---
## Carousel

**Description (component description field):**

> A Carousel allows users to browse through a collection of content (like images, text, or other types of media) by sliding or scrolling between items.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Content Swap | INSTANCE_SWAP=30150:55097 |
| Style | VARIANT: Arrows · Dots · Dots Only |

### Anatomy (first variant: `Style=Dots`)

- `Style=Dots` [COMP] — 1296×210 · lay=V/MIN/CENTER · pad=32 24 32 24 · gap=24 · tokens{itemSpacing:Global/spacing-3xl, paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-4xl, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-4xl}
  - `_Swap Placeholder` [INST] ⟶ instance of **_Swap Placeholder / Size=Default** — 1248×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Helper Text` [TEXT] — 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Controls` [FRAM] — 1248×36 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=24
    - `Controls Container` [FRAM] — 96×36 · lay=H/MIN/MIN · pad=12 12 12 12 · gap=8 · r=9999 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-lg, topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
      - `Carousel Controls` [INST] ⟶ instance of **Carousel Controls / Selected=True, Size=Mideum** — 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Dot` [ELLI] — 12×12 · fill=Stepper/stepper-button-completed=#1b8354
      - `Carousel Controls` [INST] ⟶ instance of **Carousel Controls / Selected=False, Size=Mideum** — 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Dot` [ELLI] — 12×12 · fill=Background/background-neutral-200=#e5e7eb
      - `Carousel Controls` [INST] ⟶ instance of **Carousel Controls / Selected=False, Size=Mideum** — 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Dot` [ELLI] — 12×12 · fill=Background/background-neutral-200=#e5e7eb
      - `Carousel Controls` [INST] ⟶ instance of **Carousel Controls / Selected=False, Size=Mideum** — 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Dot` [ELLI] — 12×12 · fill=Background/background-neutral-200=#e5e7eb

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Style=Dots | 1296×210 | V/MIN/CENTER · 32 24 32 24 · 24 |  |  |   |  |
| Style=Arrows | 1296×150 | V/MIN/CENTER · 32 24 32 24 · 24 |  |  |   |  |
| Style=Dots Only | 1296×20 | V/MIN/CENTER · 0 0 0 0 · 24 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Style=Dots**
- `_Swap Placeholder`: 1248×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Swap Placeholder › Helper Text`: 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Controls`: 1248×36 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=24
- `Controls › Controls Container`: 96×36 · lay=H/MIN/MIN · pad=12 12 12 12 · gap=8 · r=9999 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-lg, topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Controls › Controls Container › Carousel Controls`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot`: 12×12 · fill=Stepper/stepper-button-completed=#1b8354
- `Controls › Controls Container › Carousel Controls#2`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#2`: 12×12 · fill=Background/background-neutral-200=#e5e7eb
- `Controls › Controls Container › Carousel Controls#3`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#3`: 12×12 · fill=Background/background-neutral-200=#e5e7eb
- `Controls › Controls Container › Carousel Controls#4`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#4`: 12×12 · fill=Background/background-neutral-200=#e5e7eb

**Style=Arrows**
- `Content`: 1248×86 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=44
- `Content › Carousel Arrows`: 48×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Content › Carousel Arrows › Cricle`: 48×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Content › Carousel Arrows › Cricle › arrow-left-01`: 24×24
- `Content › Carousel Arrows › Cricle › arrow-left-01 › elements`: 7×13
- `Content › Carousel Arrows › Cricle › arrow-left-01 › elements › Icon`: 7×13 · fill=Icon/icon-oncolor=#ffffff
- `Content › _Swap Placeholder`: 1064×86 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › _Swap Placeholder › Helper Text`: 237×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Carousel Arrows#2`: 48×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Content › Carousel Arrows › Cricle#2`: 48×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Content › Carousel Arrows › Cricle › arrow-right-01`: 24×24
- `Content › Carousel Arrows › Cricle › arrow-right-01 › elements`: 14×8 · rot=91
- `Content › Carousel Arrows › Cricle › arrow-right-01 › elements › Icon`: 7×13 · fill=Icon/icon-oncolor=#ffffff

**Style=Dots Only**
- `Controls`: 1296×20 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=24
- `Controls › Controls Container`: 96×20 · lay=H/MIN/MIN · pad=4 12 4 12 · gap=8 · r=9999 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xs, topLeftRadius:Radius/radius-full, topRightRadius:Radius/radius-full, bottomLeftRadius:Radius/radius-full, bottomRightRadius:Radius/radius-full}
- `Controls › Controls Container › Carousel Controls`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot`: 12×12 · fill=Stepper/stepper-button-completed=#1b8354
- `Controls › Controls Container › Carousel Controls#2`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#2`: 12×12 · fill=Background/background-neutral-200=#e5e7eb
- `Controls › Controls Container › Carousel Controls#3`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#3`: 12×12 · fill=Background/background-neutral-200=#e5e7eb
- `Controls › Controls Container › Carousel Controls#4`: 12×12 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Controls › Controls Container › Carousel Controls › Dot#4`: 12×12 · fill=Background/background-neutral-200=#e5e7eb

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Hovered, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |
| ON_PRESS | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Pressed, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |
| ON_KEY_DOWN(keys 13) | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Left, State=Focused, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Hovered, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |
| ON_PRESS | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Pressed, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |
| ON_KEY_DOWN(keys 13) | CHANGE_TO | Carousel Arrows ⟶ Carousel Arrows :: Direction=Right, State=Focused, Style=Primary, Size=Large, Icon only=False | **INSTANT** | 1 |

---
## Carousel Controls

**Description (component description field):**

> It typically refers to the navigation elements used to indicate the current position within the carousel and to provide direct access to any slide/item. These controls are located usually below the carousel content.

### Properties

| Property | Type / options |
|---|---|
| Selected | VARIANT: False · True |
| Size | VARIANT: Large · Mideum · Small |

### Anatomy (first variant: `Selected=True, Size=Large`)

- `Selected=True, Size=Large` [COMP] — 16×16 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Dot` [ELLI] — 16×16 · fill=Stepper/stepper-button-completed=#1b8354

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=True, Size=Large (+1 more) | 16×16 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Selected=True, Size=Mideum (+1 more) | 12×12 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Selected=True, Size=Small (+1 more) | 8×8 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=True, Size=Large**
- `Dot`: 16×16 · fill=Stepper/stepper-button-completed=#1b8354

**Selected=True, Size=Mideum**
- `Dot`: 12×12 · fill=Stepper/stepper-button-completed=#1b8354

**Selected=True, Size=Small**
- `Dot`: 8×8 · fill=Stepper/stepper-button-completed=#1b8354

**Selected=False, Size=Large**
- `Dot`: 16×16 · fill=Background/background-neutral-200=#e5e7eb

**Selected=False, Size=Mideum**
- `Dot`: 12×12 · fill=Background/background-neutral-200=#e5e7eb

**Selected=False, Size=Small**
- `Dot`: 8×8 · fill=Background/background-neutral-200=#e5e7eb

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Carousel Arrows

**Description (component description field):**

> It consists of left and right directional arrows placed on either side of the carousel content. These arrows allow users to manually cycle through the carousel items by clicking or tapping on them.

### Properties

| Property | Type / options |
|---|---|
| Direction | VARIANT: Right · Left |
| State | VARIANT: Hovered · Pressed · Focused · Disabled · Default |
| Style | VARIANT: Primary · Subtle |
| Size | VARIANT: Large · Medium · Small |
| Icon only | VARIANT: False · True |

### Anatomy (first variant: `Direction=Right, State=Default, Style=Primary, Size=Medium, Icon only=False`)

- `Direction=Right, State=Default, Style=Primary, Size=Medium, Icon only=False` [COMP] — 40×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Cricle` [FRAM] — 40×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
    - `arrow-right-01` [INST] ⟶ instance of **arrow-right-01 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 9×5 · rot=91
        - `Icon` [VECT] — 5×9 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Direction=Right, State=Default, Style=Primary, Size=Medium, Icon only=False (+19 more) | 40×40 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Direction=Right, State=Default, Style=Primary, Size=Large, Icon only=False (+19 more) | 48×48 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Direction=Right, State=Default, Style=Primary, Size=Small, Icon only=False (+19 more) | 32×32 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Hovered · Pressed · Focused · Disabled · Default

#### Default → **Hovered**  · applies to 6 group(s): Direction=Right, Style=Primary, Size=Medium, Icon only=False; Direction=Right, Style=Primary, Size=Large, Icon only=False; Direction=Right, Style=Primary, Size=Small, Icon only=False; Direction=Left, Style=Primary, Size=Medium, Icon only=False …
- Cricle: fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-hovered=#166a45

#### Default → **Pressed**  · applies to 6 group(s): Direction=Right, Style=Primary, Size=Medium, Icon only=False; Direction=Right, Style=Primary, Size=Large, Icon only=False; Direction=Right, Style=Primary, Size=Small, Icon only=False; Direction=Left, Style=Primary, Size=Medium, Icon only=False …
- Cricle: fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-pressed=#104631

#### Default → **Focused**  · applies to 2 group(s): Direction=Right, Style=Primary, Size=Medium, Icon only=False; Direction=Left, Style=Primary, Size=Medium, Icon only=False
- + Focus outline (50×50 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): Direction=Right, Style=Primary, Size=Medium, Icon only=False; Direction=Right, Style=Primary, Size=Large, Icon only=False; Direction=Right, Style=Primary, Size=Small, Icon only=False
- Cricle: fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Cricle › arrow-right-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): Direction=Right, Style=Subtle, Size=Medium, Icon only=True; Direction=Right, Style=Subtle, Size=Large, Icon only=True; Direction=Right, Style=Subtle, Size=Small, Icon only=True; Direction=Left, Style=Subtle, Size=Medium, Icon only=True …
- Cricle: fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 6 group(s): Direction=Right, Style=Subtle, Size=Medium, Icon only=True; Direction=Right, Style=Subtle, Size=Large, Icon only=True; Direction=Right, Style=Subtle, Size=Small, Icon only=True; Direction=Left, Style=Subtle, Size=Medium, Icon only=True …
- Cricle: fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 2 group(s): Direction=Right, Style=Subtle, Size=Medium, Icon only=True; Direction=Left, Style=Subtle, Size=Medium, Icon only=True
- + Cricle › Focus outline (50×50 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): Direction=Right, Style=Subtle, Size=Medium, Icon only=True; Direction=Right, Style=Subtle, Size=Large, Icon only=True; Direction=Right, Style=Subtle, Size=Small, Icon only=True
- Cricle › arrow-right-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): Direction=Right, Style=Primary, Size=Large, Icon only=False
- Cricle: fill: Button/button-background-primary-default=#1b8354 → Button/button-background-primary-focused=#1b8354
- + Focus outline (58×58 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 3 group(s): Direction=Right, Style=Subtle, Size=Large, Icon only=True; Direction=Left, Style=Primary, Size=Large, Icon only=False; Direction=Left, Style=Subtle, Size=Large, Icon only=True
- + Focus outline (58×58 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Focused**  · applies to 4 group(s): Direction=Right, Style=Primary, Size=Small, Icon only=False; Direction=Right, Style=Subtle, Size=Small, Icon only=True; Direction=Left, Style=Primary, Size=Small, Icon only=False; Direction=Left, Style=Subtle, Size=Small, Icon only=True
- + Focus outline (42×42 · stroke=Icon/icon-default=#161616 · sw=3)

#### Default → **Disabled**  · applies to 3 group(s): Direction=Left, Style=Primary, Size=Medium, Icon only=False; Direction=Left, Style=Primary, Size=Large, Icon only=False; Direction=Left, Style=Primary, Size=Small, Icon only=False
- Cricle: fill: Button/button-background-primary-default=#1b8354 → Global/background-disabled=#e5e7eb
- Cricle › arrow-left-01 › elements › Icon: fill: Icon/icon-oncolor=#ffffff → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 3 group(s): Direction=Left, Style=Subtle, Size=Medium, Icon only=True; Direction=Left, Style=Subtle, Size=Large, Icon only=True; Direction=Left, Style=Subtle, Size=Small, Icon only=True
- Cricle › arrow-left-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Direction=Right, State=Default, Style=Primary, Size=Medium, Icon only=False**
- `Cricle`: 40×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Cricle › arrow-right-01`: 16×16
- `Cricle › arrow-right-01 › elements`: 9×5 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff

**Direction=Right, State=Default, Style=Subtle, Size=Medium, Icon only=True**
- `Cricle`: 40×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999
- `Cricle › arrow-right-01`: 16×16
- `Cricle › arrow-right-01 › elements`: 9×5 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616

**Direction=Right, State=Default, Style=Primary, Size=Large, Icon only=False**
- `Cricle`: 48×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Cricle › arrow-right-01`: 24×24
- `Cricle › arrow-right-01 › elements`: 14×8 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 7×13 · fill=Icon/icon-oncolor=#ffffff

**Direction=Right, State=Default, Style=Subtle, Size=Large, Icon only=True**
- `Cricle`: 48×48 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999
- `Cricle › arrow-right-01`: 24×24
- `Cricle › arrow-right-01 › elements`: 14×8 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616

**Direction=Right, State=Default, Style=Primary, Size=Small, Icon only=False**
- `Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Cricle › arrow-right-01`: 16×16
- `Cricle › arrow-right-01 › elements`: 9×5 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff

**Direction=Right, State=Default, Style=Subtle, Size=Small, Icon only=True**
- `Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999
- `Cricle › arrow-right-01`: 16×16
- `Cricle › arrow-right-01 › elements`: 9×5 · rot=91
- `Cricle › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616

**Direction=Left, State=Default, Style=Primary, Size=Medium, Icon only=False**
- `Cricle`: 40×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Button/button-background-primary-default=#1b8354
- `Cricle › arrow-left-01`: 16×16
- `Cricle › arrow-left-01 › elements`: 5×9
- `Cricle › arrow-left-01 › elements › Icon`: 5×9 · fill=Icon/icon-oncolor=#ffffff

**Direction=Left, State=Default, Style=Subtle, Size=Medium, Icon only=True**
- `Cricle`: 40×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999
- `Cricle › arrow-left-01`: 16×16
- `Cricle › arrow-left-01 › elements`: 5×9
- `Cricle › arrow-left-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 12 |
| ON_PRESS | CHANGE_TO | State: Default→Pressed | **INSTANT** | 12 |
| ON_KEY_DOWN(keys 13) | CHANGE_TO | State: Default→Focused | **INSTANT** | 12 |
