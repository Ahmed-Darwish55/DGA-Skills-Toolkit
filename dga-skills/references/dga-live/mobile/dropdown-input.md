# Dropdown Input — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `18:0`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 18-0

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Dropdown List Item

> A modal is a secondary window that communicates or provides an action inside the same process. They’re incredibly useful for communicating additional information, collecting information, or directing users without forcing them to leave the page. When modals are used unnecessarily, they can become intrusive and annoying for the user. Nobody likes pop-ups.

> Resources

> Dropdown Input

> A dropdown lets people choose one or more options from a list. It can be used in forms where the options require custom styling [or as a component to filter or sort information]. If you’re designing a form, especially for mobile platforms, consider using a native select for baked-in accessibility. If you need to let someone type in the visible field to submit a free form answer, try a Text Input.

## Component sets on this page (2)

- **Dropdown List Item** — 18 variants · `3262:27949`
- **Dropdown Input** — 120 variants · `3534:49934`

---
## Dropdown List Item

### Properties

| Property | Type / options |
|---|---|
| Selected | BOOLEAN=true |
| Text EN | TEXT=Option |
| Divider | BOOLEAN=false |
| Text AR | TEXT=إختيار |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Pressed · Focused · Disabled |
| Type | VARIANT: Single Select · Multi Select · Group label |

### Anatomy (first variant: `RTL=False, State=Default, Type=Single Select`)

- `RTL=False, State=Default, Type=Single Select` [COMP] — 320×36 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Text` [FRAM] — 276×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Entered Text` [TEXT] — 276×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option"
  - `Check` [INST] ⟶ instance of **check** — 20×20
    - `Icon` [VECT] — 13×9 · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER
  - `Divider` [FRAM] *(hidden)* — 320×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Line` [RECT] — 304×1 · fill=Colors/Gray neutral/300=#d2d6db

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Type=Single Select (+3 more) | 320×36 | H/MIN/MIN · 8 8 8 8 · 8 | 4 |  |   |  |
| RTL=False, State=Default, Type=Group label | 320×28 | H/MIN/MIN · 8 8 0 8 · 8 | 4 |  |   |  |
| RTL=False, State=Pressed, Type=Single Select (+1 more) | 320×36 | H/MIN/MIN · 8 8 8 8 · 8 | 4 | Form/field-background-pressed=#f3f4f6 |   |  |
| RTL=False, State=Focused, Type=Single Select (+1 more) | 320×36 | H/MIN/MIN · 8 8 8 8 · 8 | 4 |  | Form/field-border-pressed=#0d121c 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Disabled

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Single Select; RTL=False, Type=Multi Select
- (root): fill: — → Form/field-background-pressed=#f3f4f6

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Single Select; RTL=False, Type=Multi Select
- (root): stroke: — → Form/field-border-pressed=#0d121c; sw: — → 2

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Single Select
- Text › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Check › Icon: stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Multi Select
- Checkbox elements › Unchecked: stroke: Colors/Gray neutral/500=#6c737f → Global/background-disabled=#e5e7eb
- Checkbox elements › Checked: fill: Controls/control-neutral-checked=#0d121c → Global/background-disabled=#e5e7eb
- Text › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Type=Single Select**
- `Text`: 276×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 276×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option"
- `Check`: 20×20
- `Check › Icon`: 13×9 · stroke=Icon/icon-default=#161616 · sw=1.5 · sa=CENTER

**RTL=False, State=Default, Type=Group label**
- `Text`: 304×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 304×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · txt="Group label"

**RTL=False, State=Default, Type=Multi Select**
- `Checkbox elements`: 20×20 · lay=H/CENTER/CENTER · pad=2 2 2 2 · gap=8 · tokens{paddingLeft:spacing-xxs, paddingTop:spacing-xxs, paddingRight:spacing-xxs, paddingBottom:spacing-xxs}
- `Checkbox elements › Unchecked`: 16×16 · r=2 · stroke=Colors/Gray neutral/500=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox elements › Checked`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Checkbox elements › Checked › checkmark`: 16×16
- `Checkbox elements › Checked › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Text`: 276×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Text › Entered Text`: 276×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Type=Single Select ⟶ Dropdown List Item/False/Hovered/Single Select | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Type=Single Select ⟶ Dropdown List Item/True/Hovered/Single Select | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Type=Multi Select ⟶ Dropdown List Item/False/Hovered/Multi Select | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Type=Multi Select ⟶ Dropdown List Item/True/Hovered/Multi Select | **INSTANT** | 1 |

---
## Dropdown Input

### Properties

| Property | Type / options |
|---|---|
| Scroll Bar | BOOLEAN=false |
| Multi-section | BOOLEAN=false |
| Icon | BOOLEAN=false |
| Clear | BOOLEAN=false |
| Type Cursor | BOOLEAN=false |
| Leading Icon | INSTANCE_SWAP=10750:73533 |
| Show Helper text | BOOLEAN=false |
| 🔁 Swap Icon | INSTANCE_SWAP=11089:90351 |
| Show label | BOOLEAN=true |
| Helper Text AR | TEXT=نص مساعد |
| Helper Text Eng | TEXT=Help Text |
| RTL | VARIANT: False · True |
| Filled | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |
| Error | VARIANT: False · True |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, Filled=False, State=Default, Error=False, Style=Default`)

- `RTL=False, Filled=False, State=Default, Error=False, Style=Default` [COMP] — 320×72 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
  - `Dropdown Field` [FRAM] — 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Contents` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Colors/Gray neutral/400=#9da4ae · sw=1 · sa=INSIDE
      - `Icon-Text-stack` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
        - `Leading Icon` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 15×18
        - `Text` [FRAM] — 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Placeholder Text` [TEXT] — 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
        - `Chevron` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 11×6
  - `Helper Text` [FRAM] *(hidden)* — 92×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Control/control-switch-error-icon-gap}
    - `Spacer` [FRAM] — 24×24 · lay=H/MIN/MIN · pad=4 4 4 4 · gap=8
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-info, Style=Icon only, Size=16, Ring=No** — 16×16
        - `info-circle` [INST] ⟶ instance of **info-circle** — 16×16
          - `Icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Text wrapper` [FRAM] — 60×32 · lay=H/MIN/CENTER · pad=4 0 4 0 · gap=8 · tokens{paddingTop:spacing-xs, paddingBottom:spacing-xs}
      - `Help Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Filled=False, State=Default, Error=False, Style=Default (+47 more) | 320×72 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Filled=False, State=Focused, Error=False, Style=Default (+11 more) | 320×384 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Style=Default; RTL=False, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×36)
- + List Sections › Section › Dropdown List Item › Text#8 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#8 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Colors/Gray neutral/400=#9da4ae → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Colors/Gray neutral/400=#9da4ae → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Colors/Gray neutral/300=#d2d6db

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled lighter
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×36)
- + List Sections › Section › Dropdown List Item › Text#8 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#8 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Colors/Gray neutral/300=#d2d6db

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter; RTL=False, Filled=True, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-pressed=#f3f4f6; stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×36)
- + List Sections › Section › Dropdown List Item › Text#8 (288×20)
- … 1 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Colors/Gray neutral/300=#d2d6db

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Filled lighter; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → Form/field-background-pressed=#f3f4f6
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker; RTL=False, Filled=True, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×36)
- + List Sections › Section › Dropdown List Item › Text#8 (288×20)
- … 1 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Colors/Gray neutral/300=#d2d6db

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker; RTL=False, Filled=True, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6
- + Dropdown Field › Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#8 (304×36)
- + List Sections › Section › Dropdown List Item › Text#8 (288×20)
- … 1 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Colors/Gray neutral/300=#d2d6db

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (260×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- … 3 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Colors/Gray neutral/400=#9da4ae → Colors/Gray neutral/300=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Colors/Gray neutral/400=#9da4ae → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Colors/Gray neutral/300=#d2d6db

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (260×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- … 3 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Colors/Gray neutral/300=#d2d6db

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (260×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- … 4 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Dropdown Field › Contents: fill: Form/field-background-default=#ffffff → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Colors/Gray neutral/300=#d2d6db

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Colors/Gray neutral/400=#9da4ae; sw: — → 1
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (260×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- … 4 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Colors/Gray neutral/300=#d2d6db; sw: — → 1
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Colors/Gray neutral/300=#d2d6db

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- (root): h: 72 → 384
- Dropdown Field: fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- + Dropdown Field › Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- Dropdown Field › Contents › Icon-Text-stack › Chevron: rot: — → -180
- + List Sections (320×304 · fill=Form/field-background-default=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (320×304)
- + List Sections › Section › Dropdown List Item (304×36)
- + List Sections › Section › Dropdown List Item › Text (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#2 (304×36)
- + List Sections › Section › Dropdown List Item › Text#2 (260×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (260×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#3 (304×36)
- + List Sections › Section › Dropdown List Item › Text#3 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#4 (304×36)
- + List Sections › Section › Dropdown List Item › Text#4 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#5 (304×36)
- + List Sections › Section › Dropdown List Item › Text#5 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#6 (304×36)
- + List Sections › Section › Dropdown List Item › Text#6 (288×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (288×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="Option")
- + List Sections › Section › Dropdown List Item#7 (304×36)
- + List Sections › Section › Dropdown List Item › Text#7 (288×20)
- … 4 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Dropdown Field › Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Colors/Gray neutral/300=#d2d6db
- Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Colors/Gray neutral/300=#d2d6db

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Filled=False, State=Default, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Colors/Gray neutral/400=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=False, State=Default, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=False, State=Default, Error=False, Style=Filled lighter**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=False, State=Default, Error=True, Style=Filled lighter**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=False, State=Default, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=False, State=Default, Error=True, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Placeholder Text`: 118×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=True, State=Default, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Colors/Gray neutral/400=#9da4ae · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text`: 49×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Option"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Filled=True, State=Default, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Dropdown Field`: 320×44 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Dropdown Field › Contents`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Dropdown Field › Contents › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Dropdown Field › Contents › Icon-Text-stack › Text`: 264×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Dropdown Field › Contents › Icon-Text-stack › Text › Entered Text`: 49×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Option"
- `Dropdown Field › Contents › Icon-Text-stack › Chevron`: 20×20
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements`: 11×6
- `Dropdown Field › Contents › Icon-Text-stack › Chevron › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item/False/Hovered/Single Select | **INSTANT** | 192 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item/True/Hovered/Single Select | **INSTANT** | 192 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| ON_CLICK | CHANGE_TO | State: Focused→Default | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=False, Style=Default ⟶ Dropdown Input/False/False/Hovered/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=True, Style=Default ⟶ Dropdown Input/False/False/Hovered/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/False/False/Hovered/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/False/False/Hovered/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/False/False/Hovered/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=False, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/False/False/Hovered/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/True/False/Hovered/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/True/False/Hovered/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/True/False/Hovered/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/True/False/Hovered/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=True, Style=Default ⟶ Dropdown Input/True/False/Hovered/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=False, State=Default, Error=False, Style=Default ⟶ Dropdown Input/True/False/Hovered/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=False, Style=Default ⟶ Dropdown Input/False/True/Hovered/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=True, Style=Default ⟶ Dropdown Input/False/True/Hovered/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/False/True/Hovered/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/False/True/Hovered/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/False/True/Hovered/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Filled=True, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/False/True/Hovered/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=True, Style=Filled darker ⟶ Dropdown Input/True/True/Hovered/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=False, Style=Filled darker ⟶ Dropdown Input/True/True/Hovered/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=True, Style=Filled lighter ⟶ Dropdown Input/True/True/Hovered/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=False, Style=Filled lighter ⟶ Dropdown Input/True/True/Hovered/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=True, Style=Default ⟶ Dropdown Input/True/True/Hovered/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Filled=True, State=Default, Error=False, Style=Default ⟶ Dropdown Input/True/True/Hovered/False/Default | **INSTANT** | 1 |
