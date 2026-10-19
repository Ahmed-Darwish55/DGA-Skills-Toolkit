# Dropdown Input — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `18:0`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 18-0

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Dropdown Input

> A dropdown lets people choose one or more options from a list. It can be used in forms where the options require custom styling [or as a component to filter or sort information]. If you’re designing a form, especially for mobile platforms, consider using a native select for baked-in accessibility. If you need to let someone type in the visible field to submit a free form answer, try a Text Input.

> Resources

> Dropdown List Item

## Component sets on this page (2)

- **Dropdown List Item** — 22 variants · `3262:27949`
- **Dropdown Input** — 288 variants · `3534:49934`

---
## Dropdown List Item

**Description (component description field):**

> A list of options to choose from, displayed as an open state.

### Properties

| Property | Type / options |
|---|---|
| Selected | BOOLEAN=true |
| Text EN | TEXT=Option |
| Divider | BOOLEAN=false |
| Text AR | TEXT=إختيار |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Hovered · Pressed · Focused · Disabled |
| Type | VARIANT: Single Select · Multi Select · Group label |

### Anatomy (first variant: `RTL=False, State=Default, Type=Single Select`)

- `RTL=False, State=Default, Type=Single Select` [COMP] — 320×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Text` [FRAM] — 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Entered Text` [TEXT] — 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 13×10
      - `Icon` [VECT] — 13×10 · fill=Icon/icon-default=#161616
  - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Type=Single Select (+3 more) | 320×37 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  |   |  |
| RTL=False, State=Default, Type=Group label | 320×28 | H/MIN/MIN · 8 8 0 8 · 8 |  |  |   |  |
| RTL=False, State=Hovered, Type=Single Select (+1 more) | 320×37 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 | Form/option-background-hover=#f3f4f6 |   |  |
| RTL=False, State=Pressed, Type=Single Select (+1 more) | 320×37 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 | Form/option-background-pressed=#e5e7eb |   |  |
| RTL=False, State=Focused, Type=Single Select (+1 more) | 320×37 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Disabled

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Type=Single Select; RTL=False, Type=Multi Select
- (root): fill: — → Form/option-background-hover=#f3f4f6

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Single Select; RTL=False, Type=Multi Select
- (root): fill: — → Form/option-background-pressed=#e5e7eb

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Single Select; RTL=False, Type=Multi Select
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Single Select
- Text › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Check › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Multi Select
- Checkbox › _CheckboxBase1: fill: Controls/control-neutral-checked=#0d121c → Global/background-disabled=#e5e7eb
- Text › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Type=Single Select**
- `Text`: 276×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 276×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Check`: 20×20
- `Check › elements`: 13×10
- `Check › elements › Icon`: 13×10 · fill=Icon/icon-default=#161616

**RTL=False, State=Default, Type=Group label**
- `Text`: 304×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 304×21 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Group label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Type=Multi Select**
- `Checkbox`: 16×16
- `Checkbox › _CheckboxBase1`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Checkbox › _CheckboxBase1 › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Text`: 280×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 280×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 4 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 4 |

---
## Dropdown Input

**Description (component description field):**

> Dropdowns present a list of options from which a user can select one option, or several.

### Properties

| Property | Type / options |
|---|---|
| Scroll Bar | BOOLEAN=false |
| Multi-section | BOOLEAN=false |
| Icon | BOOLEAN=false |
| Clear | BOOLEAN=false |
| Type Cursor | BOOLEAN=false |
| Show label | BOOLEAN=true |
| Leading icon | INSTANCE_SWAP=13682:115875 |
| Helper Text AR | TEXT=نص مساعد |
| Show Helper text | BOOLEAN=false |
| 🔁 Swap Icon | INSTANCE_SWAP=31864:189865 |
| Helper Text Eng | TEXT=Help Text |
| RTL | VARIANT: False · True |
| Size | VARIANT: Large · Medium |
| Filled | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Error | VARIANT: False · True |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Default`)

- `RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Default` [COMP] — 320×388 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/Iable-container}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Dropdown Field` [FRAM] — 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Contents` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
      - `Icon-Text-stack` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
        - `Leading Icon` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 15×18
        - `Text` [FRAM] — 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Type Cursor` [RECT] *(hidden)* — 1×24 · fill=Colors/Neutral/950=#0d121c
          - `Placeholder Text` [TEXT] — 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Chevron` [INST] ⟶ instance of **arrow-up-01 / Style=Stroke, Type=Rounded** — 20×20 · rot=180
          - `elements` [GROU] — 11×6
    - `Thin underline` [RECT] — 320×2 · fill=Form/field-border-pressed=#0d121c
  - `List Sections` [FRAM] — 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Section` [FRAM] — 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Group label** *(hidden)* — 304×28 · lay=H/MIN/MIN · pad=8 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:spacing-md, paddingRight:Global/spacing-md, paddingBottom:spacing-none}
        - `Text` [FRAM] — 288×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Group label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
    - `Section` [FRAM] *(hidden)* — 320×332 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=Colors/Neutral/200=#e5e7eb · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Group label** — 304×28 · lay=H/MIN/MIN · pad=8 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:spacing-md, paddingRight:Global/spacing-md, paddingBottom:spacing-none}
        - `Text` [FRAM] — 288×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Group label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 304×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Single Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Default (+11 more) | 320×388 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=Medium, Filled=False, State=Focused, Error=False, Style=Default (+11 more) | 320×380 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=Large, Filled=False, State=Default, Error=False, Style=Default (+59 more) | 320×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=Medium, Filled=False, State=Default, Error=False, Style=Default (+59 more) | 320×60 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Default
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- + List Sections › Section › Dropdown List Item › Text#8 (288×21)
- … 1 more changes

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Default; RTL=False, Size=Medium, Filled=False, Error=False, Style=Default; RTL=False, Size=Large, Filled=True, Error=False, Style=Default; RTL=False, Size=Medium, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Default; RTL=False, Size=Medium, Filled=False, Error=False, Style=Default; RTL=False, Size=Large, Filled=True, Error=False, Style=Default; RTL=False, Size=Medium, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Default; RTL=False, Size=Medium, Filled=False, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Default; RTL=False, Size=Medium, Filled=False, Error=False, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled lighter
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Hovered**  · applies to 8 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Large, Filled=False, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled darker …
- Dropdown Field › Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Large, Filled=True, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled darker
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled darker; RTL=False, Size=Large, Filled=True, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=False, Error=False, Style=Default
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- + List Sections › Section › Dropdown List Item › Text#8 (288×21)
- … 1 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled lighter
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=False, Error=False, Style=Filled darker
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Default; RTL=False, Size=Large, Filled=False, Error=True, Style=Filled lighter
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- + List Sections › Section › Dropdown List Item › Text#8 (288×21)
- … 1 more changes

#### Default → **Hovered**  · applies to 12 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Default; RTL=False, Size=Large, Filled=False, Error=True, Style=Filled lighter; RTL=False, Size=Large, Filled=False, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=True, Style=Default …
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Default; RTL=False, Size=Medium, Filled=False, Error=True, Style=Default; RTL=False, Size=Large, Filled=True, Error=True, Style=Default; RTL=False, Size=Medium, Filled=True, Error=True, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Read-only**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Default; RTL=False, Size=Large, Filled=False, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=True, Style=Default; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Default; RTL=False, Size=Large, Filled=False, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=True, Style=Default; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled lighter; RTL=False, Size=Large, Filled=True, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-pressed=#f3f4f6
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Filled darker
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Pressed**  · applies to 4 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled darker; RTL=False, Size=Large, Filled=True, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6
- + Dropdown Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=False, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Medium, Filled=False, Error=True, Style=Default; RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled lighter
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- + List Sections › Section › Dropdown List Item › Text#8 (288×21)
- … 1 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=False, Error=True, Style=Filled darker
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×37)
- … 2 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Default
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- … 4 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Default; RTL=False, Size=Medium, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Default; RTL=False, Size=Medium, Filled=True, Error=False, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled lighter
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled darker
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=False, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Global/border-disabled=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=True, Error=False, Style=Default
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- … 4 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled lighter
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=True, Error=False, Style=Filled darker
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Default; RTL=False, Size=Large, Filled=True, Error=True, Style=Filled lighter
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- … 4 more changes

#### Default → **Read-only**  · applies to 4 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Default; RTL=False, Size=Large, Filled=True, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=True, Style=Default; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 4 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Default; RTL=False, Size=Large, Filled=True, Error=True, Style=Filled lighter; RTL=False, Size=Medium, Filled=True, Error=True, Style=Default; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Filled darker
- (root): h: 68 → 388
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-default-400=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Size=Large, Filled=True, Error=True, Style=Filled darker; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Global/border-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Size=Medium, Filled=True, Error=True, Style=Default; RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled lighter
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- + List Sections › Section › Dropdown List Item › Text#7 (288×21)
- … 4 more changes

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Size=Medium, Filled=True, Error=True, Style=Filled darker
- (root): h: 60 → 380
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → 180
- Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon: rot: 90 → -90
- + Dropdown Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + List Sections (320×312 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×312)
- + List Sections › Section › Dropdown List Item (304×37)
- + List Sections › Section › Dropdown List Item › Text (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×37)
- + List Sections › Section › Dropdown List Item › Text#2 (260×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×37)
- + List Sections › Section › Dropdown List Item › Text#3 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×37)
- + List Sections › Section › Dropdown List Item › Text#4 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×37)
- + List Sections › Section › Dropdown List Item › Text#5 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×37)
- + List Sections › Section › Dropdown List Item › Text#6 (288×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×37)
- … 5 more changes

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Filled lighter**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Large, Filled=False, State=Focused, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Medium, Filled=False, State=Focused, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 103×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Medium, Filled=False, State=Focused, Error=False, Style=Filled lighter**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 103×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Medium, Filled=False, State=Focused, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 103×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-pressed=#0d121c
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Large, Filled=False, State=Focused, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-error=#b42318
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

**RTL=False, Size=Large, Filled=False, State=Focused, Error=True, Style=Filled lighter**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Dropdown Field`: 320×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fx=DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) · tokens{itemSpacing:Form/select-gap, paddingLeft:Form/select-padding, paddingTop:Form/select-padding, paddingRight:Form/select-padding, paddingBottom:Form/select-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Dropdown Field › Contents`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20 · rot=180
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=-90
- `Dropdown Field › Thin underline`: 320×2 · fill=Form/field-border-error=#b42318
- `List Sections`: 320×312 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `List Sections › Section`: 320×312 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `List Sections › Section › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#2`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#2`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#3`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#3`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#4`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#4`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#4`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#5`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#5`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#5`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#6`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#6`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#6`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#7`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `List Sections › Section › Dropdown List Item › Text#7`: 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `List Sections › Section › Dropdown List Item › Text › Entered Text#7`: 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `List Sections › Section › Dropdown List Item#8`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 2 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 384 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Single Select | **INSTANT** | 384 |
| ON_CLICK | CHANGE_TO | State: Focused→Default | **SMART_ANIMATE 150ms EASE_OUT** | 48 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 48 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 48 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 48 |
