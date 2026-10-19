# Number Input — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `21073:6160`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 21073-6160

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Number Input

> The Number Input component allows users to input numerical values. To ensure easy and accurate number entry, improving user experience in forms and data input fields.

> Resources

> Input Prefix-Suffix

> An input allows people to enter short, free form text data. If you need to collect more than one line of information, try a textarea.

## Component sets on this page (2)

- **Input Prefix-Suffix** — 48 variants · `30150:60916`
- **Number Input** — 288 variants · `30150:61013`

---
## Input Prefix-Suffix

### Properties

| Property | Type / options |
|---|---|
| Type | VARIANT: Plus · Minus |
| State | VARIANT: Default · Hovered · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Solid · Subtle |
| Size | VARIANT: Large · Medium |

### Anatomy (first variant: `Type=Plus, State=Default, Style=Solid, Size=Large`)

- `Type=Plus, State=Default, Style=Solid, Size=Large` [COMP] — 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `plus-sign` [INST] ⟶ instance of **plus-sign / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 18×18
      - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Plus, State=Default, Style=Solid, Size=Large (+1 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Type=Plus, State=Default, Style=Subtle, Size=Large (+3 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  |  |   |  |
| Type=Plus, State=Default, Style=Solid, Size=Medium (+1 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| Type=Plus, State=Default, Style=Subtle, Size=Medium (+3 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  |  |   |  |
| Type=Plus, State=Hovered, Style=Solid, Size=Large (+3 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Type=Plus, State=Hovered, Style=Solid, Size=Medium (+3 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| Type=Plus, State=Pressed, Style=Solid, Size=Large (+3 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Type=Plus, State=Pressed, Style=Solid, Size=Medium (+3 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| Type=Plus, State=Selected, Style=Solid, Size=Large (+3 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-black-selected=#384250 |   |  |
| Type=Plus, State=Selected, Style=Solid, Size=Medium (+3 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-black-selected=#384250 |   |  |
| Type=Plus, State=Focused, Style=Solid, Size=Large (+1 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 4 |  |
| Type=Plus, State=Focused, Style=Subtle, Size=Large (+1 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  |  | Border/border-black=#161616 4 |  |
| Type=Plus, State=Focused, Style=Solid, Size=Medium (+1 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 4 |  |
| Type=Plus, State=Focused, Style=Subtle, Size=Medium (+1 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  |  | Border/border-black=#161616 4 |  |
| Type=Plus, State=Disabled, Style=Solid, Size=Large (+1 more) | 56×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Global/background-disabled=#e5e7eb |   |  |
| Type=Plus, State=Disabled, Style=Solid, Size=Medium (+1 more) | 44×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Global/background-disabled=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Selected · Focused · Disabled

#### Default → **Hovered**  · applies to 1 group(s): Type=Plus, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6
- + Icon (24×24)
- + Icon › elements (18×18)
- + Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- − plus-sign (hidden/removed)
- − plus-sign › elements (hidden/removed)
- − plus-sign › elements › Icon (hidden/removed)

#### Default → **Pressed**  · applies to 1 group(s): Type=Plus, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb
- + Icon (24×24)
- + Icon › elements (18×18)
- + Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- − plus-sign (hidden/removed)
- − plus-sign › elements (hidden/removed)
- − plus-sign › elements › Icon (hidden/removed)

#### Default → **Selected**  · applies to 1 group(s): Type=Plus, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-selected=#384250
- + Icon (24×24)
- + Icon › elements (18×18)
- + Icon › elements › Icon (18×18 · fill=Icon/icon-oncolor=#ffffff)
- − plus-sign (hidden/removed)
- − plus-sign › elements (hidden/removed)
- − plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): Type=Plus, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 4
- + Icon (24×24)
- + Icon › elements (18×18)
- + Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- − plus-sign (hidden/removed)
- − plus-sign › elements (hidden/removed)
- − plus-sign › elements › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): Type=Plus, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Icon (24×24)
- + Icon › elements (18×18)
- + Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- − plus-sign (hidden/removed)
- − plus-sign › elements (hidden/removed)
- − plus-sign › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 3 group(s): Type=Minus, Style=Solid, Size=Large; Type=Plus, Style=Solid, Size=Medium; Type=Minus, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 3 group(s): Type=Minus, Style=Solid, Size=Large; Type=Plus, Style=Solid, Size=Medium; Type=Minus, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 3 group(s): Type=Minus, Style=Solid, Size=Large; Type=Plus, Style=Solid, Size=Medium; Type=Minus, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-selected=#384250
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Focused**  · applies to 3 group(s): Type=Minus, Style=Solid, Size=Large; Type=Plus, Style=Solid, Size=Medium; Type=Minus, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 3 group(s): Type=Minus, Style=Solid, Size=Large; Type=Plus, Style=Solid, Size=Medium; Type=Minus, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Hovered**  · applies to 4 group(s): Type=Plus, Style=Subtle, Size=Large; Type=Minus, Style=Subtle, Size=Large; Type=Plus, Style=Subtle, Size=Medium; Type=Minus, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 4 group(s): Type=Plus, Style=Subtle, Size=Large; Type=Minus, Style=Subtle, Size=Large; Type=Plus, Style=Subtle, Size=Medium; Type=Minus, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 4 group(s): Type=Plus, Style=Subtle, Size=Large; Type=Minus, Style=Subtle, Size=Large; Type=Plus, Style=Subtle, Size=Medium; Type=Minus, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-black-selected=#384250
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Focused**  · applies to 4 group(s): Type=Plus, Style=Subtle, Size=Large; Type=Minus, Style=Subtle, Size=Large; Type=Plus, Style=Subtle, Size=Medium; Type=Minus, Style=Subtle, Size=Medium
- (root): stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 4 group(s): Type=Plus, Style=Subtle, Size=Large; Type=Minus, Style=Subtle, Size=Large; Type=Plus, Style=Subtle, Size=Medium; Type=Minus, Style=Subtle, Size=Medium
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Plus, State=Default, Style=Solid, Size=Large**
- `plus-sign`: 24×24
- `plus-sign › elements`: 18×18
- `plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616

**Type=Minus, State=Default, Style=Solid, Size=Large**
- `Icon`: 24×24
- `Icon › elements`: 18×2
- `Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**Type=Plus, State=Default, Style=Subtle, Size=Large**
- `Icon`: 24×24
- `Icon › elements`: 18×18
- `Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER

**Type=Minus, State=Default, Style=Subtle, Size=Large**
- `Icon`: 24×24
- `Icon › elements`: 18×2
- `Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**Type=Plus, State=Default, Style=Solid, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×15
- `Icon › elements › Icon`: 15×15 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER

**Type=Minus, State=Default, Style=Solid, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×1
- `Icon › elements › Icon`: 1×15 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**Type=Plus, State=Default, Style=Subtle, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×15
- `Icon › elements › Icon`: 15×15 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER

**Type=Minus, State=Default, Style=Subtle, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×1
- `Icon › elements › Icon`: 1×15 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 8 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 8 |

---
## Number Input

### Properties

| Property | Type / options |
|---|---|
| 🔁 Swap Helper Icon | INSTANCE_SWAP=31864:189863 |
| Prefix | BOOLEAN=true |
| Suffix | BOOLEAN=true |
| Text | TEXT=00000 |
| Show label | BOOLEAN=true |
| Show Helper Text | BOOLEAN=false |
| Helper Text Eng | TEXT=Help Text |
| Helper text AR | TEXT=نص مساعد |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Size | VARIANT: Large · Medium |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default` [COMP] — 183×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
  - `Label` [FRAM] — 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Input Field` [FRAM] — 183×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Prefix` [INST] ⟶ instance of **Input Prefix-Suffix / Type=Plus, State=Default, Style=Solid, Size=Large** — 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `plus-sign` [INST] ⟶ instance of **plus-sign / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Icon-Text-stack` [FRAM] — 71×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
      - `Text` [FRAM] — 55×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Suffix` [INST] ⟶ instance of **Input Prefix-Suffix / Type=Minus, State=Default, Style=Solid, Size=Large** — 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Icon` [INST] ⟶ instance of **minus-sign / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 18×2
          - `Icon` [VECT] — 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90
  - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Helper Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default (+59 more) | 183×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Large, Style=Default (+11 more) | 183×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=False, State=Default, Filled=True, Error=False, Size=Medium, Style=Default (+59 more) | 183×60 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Medium, Style=Default (+11 more) | 183×60 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40)
- + Input Field › Content › Contents (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Contents › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6)
- + Input Field › Content › Contents › Prefix › plus-sign (24×24)
- + Input Field › Content › Contents › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Contents › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Contents › Icon-Text-stack (71×40)
- + Input Field › Content › Contents › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Placeholder Text (48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Contents › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6)
- + Input Field › Content › Contents › Suffix › Icon (24×24)
- + Input Field › Content › Contents › Suffix › Icon › elements (18×2)
- + Input Field › Content › Contents › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker …
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (42×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 5 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter …
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (42×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-focused=#384250

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Prefix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 0 1 1; r: — → 4 0 0 4
- Input Field › Suffix: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1 1 1 0; r: — → 0 4 4 0
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Suffix (56×40 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (42×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (42×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 0 1 1)
- + Input Field › Content › Prefix › plus-sign (24×24)
- + Input Field › Content › Prefix › plus-sign › elements (18×18)
- + Input Field › Content › Prefix › plus-sign › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack (71×32)
- + Input Field › Content › Icon-Text-stack › Text (55×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="00000")
- + Input Field › Content › Suffix (56×32 · fill=Button/button-background-neutral-default=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 1 1 0)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Prefix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- + Input Field › Prefix › Icon (24×24)
- + Input Field › Prefix › Icon › elements (18×18)
- + Input Field › Prefix › Icon › elements › Icon (18×18 · fill=Global/icon-default-disabled=#9da4ae)
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Input Field › Suffix: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- − Input Field › Prefix › plus-sign (hidden/removed)
- − Input Field › Prefix › plus-sign › elements (hidden/removed)
- − Input Field › Prefix › plus-sign › elements › Icon (hidden/removed)

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×40)
- + Input Field › Content › Prefix › Icon (24×24)
- + Input Field › Content › Prefix › Icon › elements (18×18)
- + Input Field › Content › Prefix › Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › Icon (hidden/removed)
- − Input Field › Prefix › Icon › elements (hidden/removed)
- − Input Field › Prefix › Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Prefix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- + Input Field › Thin underline (25×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Prefix (56×40)
- + Input Field › Content › Prefix › Icon (24×24)
- + Input Field › Content › Prefix › Icon › elements (18×18)
- + Input Field › Content › Prefix › Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Suffix (56×40)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › Icon (hidden/removed)
- − Input Field › Prefix › Icon › elements (hidden/removed)
- − Input Field › Prefix › Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Prefix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Input Field › Suffix › Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (25×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (183×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Prefix (56×40)
- + Input Field › Content › Prefix › Icon (24×24)
- + Input Field › Content › Prefix › Icon › elements (18×18)
- + Input Field › Content › Prefix › Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Content › Icon-Text-stack (71×40)
- + Input Field › Content › Icon-Text-stack › Text (55×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="00000")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Suffix (56×40)
- + Input Field › Content › Suffix › Icon (24×24)
- + Input Field › Content › Suffix › Icon › elements (18×2)
- + Input Field › Content › Suffix › Icon › elements › Icon (2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0)
- + Input Field › Thin underline (183×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Prefix (hidden/removed)
- − Input Field › Prefix › Icon (hidden/removed)
- − Input Field › Prefix › Icon › elements (hidden/removed)
- − Input Field › Prefix › Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Suffix (hidden/removed)
- − Input Field › Suffix › Icon (hidden/removed)
- − Input Field › Suffix › Icon › elements (hidden/removed)
- − Input Field › Suffix › Icon › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

- … 9 more state signatures (see data JSON)
### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Suffix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Suffix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 48×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Suffix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 48×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Suffix`: 56×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=True, Error=False, Size=Medium, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×32 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 42×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Suffix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=False, Error=False, Size=Medium, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×32 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Suffix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=True, Error=True, Size=Medium, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×32 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 42×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Suffix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

**RTL=False, State=Default, Filled=False, Error=True, Size=Medium, Style=Default**
- `Label`: 183×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 183×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Prefix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Prefix › plus-sign`: 24×24
- `Input Field › Prefix › plus-sign › elements`: 18×18
- `Input Field › Prefix › plus-sign › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack`: 71×32 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Text`: 55×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 42×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="00000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Suffix`: 56×32 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `Input Field › Suffix › Icon`: 24×24
- `Input Field › Suffix › Icon › elements`: 18×2
- `Input Field › Suffix › Icon › elements › Icon`: 2×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=-90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Prefix ⟶ Input Prefix-Suffix :: Type=Plus, State=Hovered, Style=Solid, Size=Large | **INSTANT** | 168 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ Input Prefix-Suffix :: Type=Minus, State=Hovered, Style=Solid, Size=Large | **INSTANT** | 168 |
| ON_HOVER | CHANGE_TO | Prefix ⟶ Input Prefix-Suffix :: Type=Plus, State=Hovered, Style=Subtle, Size=Large | **INSTANT** | 80 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ Input Prefix-Suffix :: Type=Minus, State=Hovered, Style=Subtle, Size=Large | **INSTANT** | 80 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 48 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 48 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 48 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 48 |
