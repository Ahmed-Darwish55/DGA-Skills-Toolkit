# Text input — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `954:19434`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 954-19434

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Text Input

> An input allows people to enter short, free form text data. If you need to collect more than one line of information, try a textarea.

> Resources

> Input Prefix-Suffix

## Component sets on this page (3)

- **Text Input** — 40 variants · `3149:54894`
- **Label** — 16 variants · `11167:3331`
- **Input Prefix-Suffix** — 56 variants · `3149:63531`

---
## Text Input

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| 🔁 Icon Swap | INSTANCE_SWAP=10750:71181 |
| Feedback icon | BOOLEAN=false |
| Prefix | BOOLEAN=false |
| Suffix | BOOLEAN=false |
| Show Helper Text | BOOLEAN=true |
| Show label | BOOLEAN=true |
| Text AR | TEXT=نص تلميحي |
| Text ENG | TEXT=Entered text |
| Helper Text EN | TEXT=Help Text |
| Helper text AR | TEXT=نص مساعد |
| Swap Helper text | INSTANCE_SWAP=11089:90351 |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False`)

- `RTL=False, State=Default, Filled=True, Error=False` [COMP] — 320×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
  - `Contents` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
    - `Prefix` [INST] ⟶ instance of **Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 63×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:spacing-xl, paddingTop:Form/Prefix-Suffix-padding-Top&Bottom, paddingRight:spacing-xl, paddingBottom:Form/Prefix-Suffix-padding-Top&Bottom, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 42×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 42×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · txt="Prefix"
    - `Icon-Text-stack` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/Input-container-padding-right, paddingRight:Form/Input-container-padding-right}
      - `Leading Icon` [INST] ⟶ instance of **user / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 16×18
          - `Icon` [VECT] — 16×18 · fill=Icon/icon-default=#161616
      - `Text` [FRAM] — 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 89×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Success-check** *(hidden)* — 20×20
        - `ring` [VECT] — 27×27 · fill=Colors/SA-Flag/100=#dff6e7
        - `bg` [VECT] — 18×18 · fill=Colors/Base/white=#ffffff
        - `Icon` [VECT] — 18×18 · fill=Colors/SA-Flag/600=#1b8354
    - `Suffix` [INST] ⟶ instance of **Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 63×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:spacing-xl, paddingTop:Form/Prefix-Suffix-padding-Top&Bottom, paddingRight:spacing-xl, paddingBottom:Form/Prefix-Suffix-padding-Top&Bottom, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 41×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 41×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · txt="Suffix"
  - `Helper Text` [FRAM] — 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
    - `Spacer` [FRAM] — 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-info, Style=Icon only, Size=16, Ring=No** — 16×16
        - `info-circle` [INST] ⟶ instance of **info-circle** — 16×16
          - `Icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
      - `Help Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False (+15 more) | 320×112 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False (+3 more) | 320×112 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False; RTL=False, Filled=False, Error=False
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-default=#9da4ae → Form/field-border-pressed=#0d121c
- + Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=False; RTL=False, Filled=False, Error=False
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-default=#9da4ae → Form/field-border-pressed=#0d121c
- + Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- + Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False
- Contents: fill: Form/field-background-default=#ffffff → —
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False
- Contents: fill: Form/field-background-default=#ffffff → —
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False
- Contents: fill: Form/field-background-default=#ffffff → —
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Text/text-placeholder=#6c737f → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False
- Contents: fill: Form/field-background-default=#ffffff → —
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Text/text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True; RTL=False, Filled=False, Error=True
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=True; RTL=False, Filled=False, Error=True
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- + Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Text/text-placeholder=#6c737f → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Text/text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 320×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/Input-container-padding-right, paddingRight:Form/Input-container-padding-right}
- `Contents › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 89×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Helper Text`: 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
- `Helper Text › Spacer`: 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
- `Helper Text › Spacer › Feedback Icon`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle › Icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper Text › Text wrapper`: 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Helper Text › Text wrapper › Help Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

**RTL=False, State=Default, Filled=False, Error=False**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/Input-container-padding-right, paddingRight:Form/Input-container-padding-right}
- `Contents › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 89×24 · fill=Text/text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Helper Text`: 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
- `Helper Text › Spacer`: 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
- `Helper Text › Spacer › Feedback Icon`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle › Icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper Text › Text wrapper`: 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Helper Text › Text wrapper › Help Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

**RTL=False, State=Default, Filled=True, Error=True**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/Input-container-padding-right, paddingRight:Form/Input-container-padding-right}
- `Contents › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 89×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Helper Text`: 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
- `Helper Text › Spacer`: 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
- `Helper Text › Spacer › Feedback Icon`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
- `Helper Text › Text wrapper`: 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Helper Text › Text wrapper › Help Text`: 60×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

**RTL=False, State=Default, Filled=False, Error=True**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/Input-container-padding-right, paddingRight:Form/Input-container-padding-right}
- `Contents › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 89×24 · fill=Text/text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Helper Text`: 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
- `Helper Text › Spacer`: 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
- `Helper Text › Spacer › Feedback Icon`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle`: 16×16
- `Helper Text › Spacer › Feedback Icon › info-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.5 · sa=CENTER
- `Helper Text › Text wrapper`: 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
- `Helper Text › Text wrapper › Help Text`: 60×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 8 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 8 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=False ⟶ Text Input/False/Hovered/True/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=False ⟶ Text Input/False/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=True ⟶ Text Input/False/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=True ⟶ Text Input/False/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=True ⟶ Text Input/True/Hovered/False/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=True ⟶ Text Input/True/Hovered/True/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=False ⟶ Text Input/True/Hovered/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=False ⟶ Text Input/True/Hovered/True/False | **INSTANT** | 1 |

---
## Label

### Properties

| Property | Type / options |
|---|---|
| Text AR | TEXT=عنوان |
| Required | BOOLEAN=true |
| Text | TEXT=Label |
| RTL | VARIANT: False · True |
| Type | VARIANT: Regular (Default) · Semibold |
| Size | VARIANT: Medium · Large |
| Disabled | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Type=Regular (Default), Size=Medium, Disabled=False`)

- `RTL=False, Type=Regular (Default), Size=Medium, Disabled=False` [COMP] — 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
  - `Required asterisk` [TEXT] — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
  - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Regular (Default), Size=Medium, Disabled=False (+1 more) | 46×20 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Semibold, Size=Medium, Disabled=False (+1 more) | 48×20 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Regular (Default), Size=Large, Disabled=False (+1 more) | 51×24 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Semibold, Size=Large, Disabled=False (+1 more) | 54×24 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Regular (Default), Size=Medium, Disabled=False**
- `Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"

**RTL=False, Type=Regular (Default), Size=Medium, Disabled=True**
- `Required asterisk`: 7×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Text`: 35×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"

**RTL=False, Type=Semibold, Size=Medium, Disabled=False**
- `Required asterisk`: 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*"
- `Text`: 36×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Label"

**RTL=False, Type=Semibold, Size=Medium, Disabled=True**
- `Required asterisk`: 8×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*"
- `Text`: 36×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Label"

**RTL=False, Type=Regular (Default), Size=Large, Disabled=False**
- `Required asterisk`: 8×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*"
- `Text`: 39×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Label"

**RTL=False, Type=Regular (Default), Size=Large, Disabled=True**
- `Required asterisk`: 8×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*"
- `Text`: 39×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Label"

**RTL=False, Type=Semibold, Size=Large, Disabled=False**
- `Required asterisk`: 9×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="*"
- `Text`: 41×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Label"

**RTL=False, Type=Semibold, Size=Large, Disabled=True**
- `Required asterisk`: 9×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="*"
- `Text`: 41×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Label"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Input Prefix-Suffix

### Properties

| Property | Type / options |
|---|---|
| 🔁 Icon | INSTANCE_SWAP=10750:73533 |
| Icon | BOOLEAN=true |
| Text EN | TEXT=Text |
| Text AR | TEXT=نص |
| RTL | VARIANT: False · True |
| Type | VARIANT: Dropdown · Text |
| State | VARIANT: Default · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Solid · Subtle |
| Size | VARIANT: Large · Medium |

### Anatomy (first variant: `RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large`)

- `RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large` [COMP] — 115×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/Prefix-Suffix-padding-left, paddingTop:Form/Prefix-Suffix-padding-Top&Bottom, paddingRight:Form/Prefix-Suffix-padding-right, paddingBottom:Form/Prefix-Suffix-padding-Top&Bottom, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `Icon` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 19×22
      - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
  - `Text wrapper` [FRAM] — 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"
  - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 11×6
      - `Icon` [VECT] — 6×11 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Type=Text, State=Default, Style=Solid, Size=Large | 63×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Large (+1 more) | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  |  |   |  |
| RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large (+1 more) | 63×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  |  |   |  |
| RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Medium | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium | 51×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-default=#f3f4f6 |   |  |
| RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Medium (+1 more) | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  |  |   |  |
| RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium (+1 more) | 51×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  |  |   |  |
| RTL=False, Type=Dropdown, State=Pressed, Style=Solid, Size=Large (+1 more) | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Type=Dropdown, State=Pressed, Style=Solid, Size=Medium (+1 more) | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Type=Dropdown, State=Selected, Style=Solid, Size=Large (+1 more) | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Type=Dropdown, State=Selected, Style=Solid, Size=Medium (+1 more) | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-black-selected=#384250 |   |  |
| RTL=False, Type=Dropdown, State=Focused, Style=Solid, Size=Large | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 4 |  |
| RTL=False, Type=Dropdown, State=Focused, Style=Subtle, Size=Large | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  |  | Border/border-black=#161616 4 |  |
| RTL=False, Type=Dropdown, State=Focused, Style=Solid, Size=Medium | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-focused=#f3f4f6 | Border/border-black=#161616 4 |  |
| RTL=False, Type=Dropdown, State=Focused, Style=Subtle, Size=Medium | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  |  | Border/border-black=#161616 4 |  |
| RTL=False, Type=Dropdown, State=Disabled, Style=Solid, Size=Large | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, Type=Text, State=Disabled, Style=Solid, Size=Large | 63×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, Type=Dropdown, State=Disabled, Style=Solid, Size=Medium | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Global/background-disabled=#e5e7eb |   |  |
| RTL=False, Type=Text, State=Disabled, Style=Solid, Size=Medium | 51×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Global/background-disabled=#e5e7eb |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Selected · Focused · Disabled

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-selected=#384250
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Text, Style=Solid, Size=Large; RTL=False, Type=Text, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-black-selected=#384250
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Text, Style=Subtle, Size=Large; RTL=False, Type=Text, Style=Subtle, Size=Medium
- Text wrapper › Text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large**
- `Icon`: 24×24
- `Icon › elements`: 19×22
- `Icon › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Solid, Size=Large**
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"

**RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Large**
- `Icon`: 24×24
- `Icon › elements`: 19×22
- `Icon › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large**
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text"

**RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×18
- `Icon › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium**
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"

**RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Medium**
- `Icon`: 20×20
- `Icon › elements`: 15×18
- `Icon › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium**
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **INSTANT** | 8 |
| ON_CLICK | CHANGE_TO | State: Selected→Default | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Solid/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/False/Large/Hovered/Secondary-Solid/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Dropdown, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Solid/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Solid, Size=Large ⟶ Input Prefix-Suffix/True/Large/Hovered/Secondary-Solid/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Subtle/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/False/Large/Hovered/Subtle/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Dropdown, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Subtle/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ Input Prefix-Suffix/True/Large/Hovered/Subtle/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Solid/Medium | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/False/Medium/Hovered/Secondary-Solid/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Dropdown, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Solid/Medium | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ Input Prefix-Suffix/True/Medium/Hovered/Secondary-Solid/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/False/Dropdown/Hovered/Subtle/Medium | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/False/Medium/Hovered/Subtle/Dropdown | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Dropdown, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/True/Dropdown/Hovered/Subtle/Medium | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ Input Prefix-Suffix/True/Medium/Hovered/Subtle/Dropdown | **INSTANT** | 1 |
