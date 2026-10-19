# Textarea — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `954:20490`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 954-20490

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Textarea

> A text area is a UI element that enables users to input and edit multiple lines of text, providing a larger space than a regular text input field, making it suitable for longer text entries, such as comments, descriptions, or messages.

> Resources

## Component sets on this page (2)

- **Textarea** — 120 variants · `5462:417368`
- **.Resize handler** — 1 variants · `5462:422062`

---
## Textarea

### Properties

| Property | Type / options |
|---|---|
| Scroll Bar | BOOLEAN=true |
| Resize | BOOLEAN=true |
| Show Helper Text | BOOLEAN=false |
| Show label | BOOLEAN=true |
|  Text EN | TEXT=Entered text |
|  Text AR | TEXT=نص تلميحي |
| Helper text AR | TEXT=نص مساعد |
| Helper Text EN | TEXT=Help Text |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Style=Default` [COMP] — 320×124 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
  - `Contents` [FRAM] — 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
    - `Icon-Text-stack` [FRAM] — 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
      - `Text` [FRAM] — 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
    - `Scroll bar` [FRAM] — 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
      - `Bar` [FRAM] — 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
        - `Bar` [RECT] — 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `Spacer` [FRAM] — 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
    - `.Resize handler` [INST] ⟶ instance of **.Resize handler** — 12×12
      - `Vector 1 (Stroke)` [VECT] — 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
      - `Vector 2 (Stroke)` [VECT] — 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
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
| RTL=False, State=Default, Filled=True, Error=False, Style=Default (+43 more) | 320×124 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Style=Default (+11 more) | 320×124 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=False, State=Pressed, Filled=True, Error=False, Style=Filled lighter (+3 more) | 320×96 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Default; RTL=False, Filled=False, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Default; RTL=False, Filled=False, Error=False, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 4 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter; RTL=False, Filled=False, Error=True, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled lighter
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled lighter
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker; RTL=False, Filled=False, Error=False, Style=Filled darker
- Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker; RTL=False, Filled=False, Error=False, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker; RTL=False, Filled=False, Error=True, Style=Filled darker
- + Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker; RTL=False, Filled=False, Error=True, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Contents: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-default=#ffffff
- + Contents › Thin underline (320×2 · fill=Form/field-border-error=#b42318)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter; RTL=False, Filled=False, Error=False, Style=Filled lighter
- (root): h: 124 → 96
- Contents: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-darker=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Contents › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Label (hidden/removed)
- − Label › Label (hidden/removed)
- − Label › Label › Required asterisk (hidden/removed)
- − Label › Label › Text (hidden/removed)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter; RTL=False, Filled=False, Error=False, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Contents: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-default=#ffffff; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Contents › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Filled lighter; RTL=False, Filled=False, Error=True, Style=Filled lighter
- (root): h: 124 → 96
- Contents: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Contents › Thin underline (112×2 · fill=Form/field-border-error=#b42318)
- − Label (hidden/removed)
- − Label › Label (hidden/removed)
- − Label › Label › Required asterisk (hidden/removed)
- − Label › Label › Text (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=False, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=True, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=False, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=True, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=False, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=True, Error=True, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

**RTL=False, State=Default, Filled=False, Error=True, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Label › Label`: 46×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text"
- `Contents › Scroll bar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › Scroll bar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › Scroll bar › Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › Scroll bar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 24 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=False, Style=Default ⟶ Textarea/False/Hovered/True/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=False, Style=Default ⟶ Textarea/False/Hovered/False/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=True, Style=Default ⟶ Textarea/False/Hovered/True/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=True, Style=Default ⟶ Textarea/False/Hovered/False/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=True, Style=Default ⟶ Textarea/True/Hovered/False/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=True, Style=Default ⟶ Textarea/True/Hovered/True/True/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=False, Style=Default ⟶ Textarea/True/Hovered/False/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=False, Style=Default ⟶ Textarea/True/Hovered/True/False/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=False, Style=Filled darker ⟶ Textarea/False/Hovered/True/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=False, Style=Filled darker ⟶ Textarea/False/Hovered/False/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=True, Style=Filled darker ⟶ Textarea/False/Hovered/True/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=True, Style=Filled darker ⟶ Textarea/False/Hovered/False/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=True, Style=Filled darker ⟶ Textarea/True/Hovered/False/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=True, Style=Filled darker ⟶ Textarea/True/Hovered/True/True/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=False, Style=Filled darker ⟶ Textarea/True/Hovered/False/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=False, Style=Filled darker ⟶ Textarea/True/Hovered/True/False/Filled darker | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=False, Style=Filled lighter ⟶ Textarea/False/Hovered/True/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=False, Style=Filled lighter ⟶ Textarea/False/Hovered/False/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=True, Style=Filled lighter ⟶ Textarea/False/Hovered/True/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=True, Style=Filled lighter ⟶ Textarea/False/Hovered/False/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=True, Style=Filled lighter ⟶ Textarea/True/Hovered/False/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=True, Style=Filled lighter ⟶ Textarea/True/Hovered/True/True/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=False, Style=Filled lighter ⟶ Textarea/True/Hovered/False/False/Filled lighter | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=False, Style=Filled lighter ⟶ Textarea/True/Hovered/True/False/Filled lighter | **INSTANT** | 1 |

---
## .Resize handler

*Single component (not a component set) — it has no variants; count = 1 by definition.*

### Anatomy (first variant: `.Resize handler`)

- `.Resize handler` [COMP] — 12×12
  - `Vector 1 (Stroke)` [VECT] — 10×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45
  - `Vector 2 (Stroke)` [VECT] — 6×1 · fill=GRADIENT_LINEAR(#303030@0.37,#bcbcbc@1.00) · rot=45

### Interactions & motion

*No prototype reactions defined on this component set.*
