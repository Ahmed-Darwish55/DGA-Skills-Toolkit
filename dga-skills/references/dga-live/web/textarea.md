# Textarea — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `954:20490`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 954-20490

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Textarea

> A text area is a UI element that enables users to input and edit multiple lines of text, providing a larger space than a regular text input field, making it suitable for longer text entries, such as comments, descriptions, or messages.

> Resources

## Component sets on this page (2)

- **Textarea** — 144 variants · `5462:417368`
- **_Textarea-Scrollbar** — 2 variants · `11549:106900`

---
## Textarea

**Description (component description field):**

> A text area is a UI element that enables users to input and edit multiple lines of text, providing a larger space than a regular text input field, making it suitable for longer text entries, such as comments, descriptions, or messages.

### Properties

| Property | Type / options |
|---|---|
| Scroll Bar | BOOLEAN=true |
| Resize | BOOLEAN=true |
| Show label | BOOLEAN=true |
| Show Helper Text | BOOLEAN=false |
| 🔁 Swap Icon | INSTANCE_SWAP=31864:189863 |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Style=Default` [COMP] — 320×124 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/Iable-container}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Contents` [FRAM] — 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Icon-Text-stack` [FRAM] — 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
      - `Text` [FRAM] — 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `_Textarea-Scrollbar` [INST] ⟶ instance of **_Textarea-Scrollbar / RTL=En** — 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
      - `Bar` [FRAM] — 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
        - `Bar` [RECT] — 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `Spacer` [FRAM] — 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
    - `.Resize handler` [INST] ⟶ instance of **.Resize handler** — 12×12
      - `Vector 1 (Stroke)` [VECT] — 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
      - `Vector 2 (Stroke)` [VECT] — 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45
  - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Help Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False, Style=Default (+59 more) | 320×124 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Style=Default (+11 more) | 320×124 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Contents: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=True, Error=False, Style=Default; RTL=False, Filled=True, Error=False, Style=Filled darker; RTL=False, Filled=True, Error=False, Style=Filled lighter
- + Content (320×96)
- + Content › Contents (320×96 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Content › Contents › Icon-Text-stack (304×96)
- + Content › Contents › Icon-Text-stack › Text (272×72)
- + Content › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Content › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Content › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Content › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Content › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Content › Contents › .Resize handler (12×12)
- + Content › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Default; RTL=False, Filled=True, Error=False, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-focused=#384250
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Contents: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=False, Error=False, Style=Default; RTL=False, Filled=False, Error=False, Style=Filled darker; RTL=False, Filled=False, Error=False, Style=Filled lighter
- + Content (320×96)
- + Content › Contents (320×96 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Content › Contents › Icon-Text-stack (304×96)
- + Content › Contents › Icon-Text-stack › Text (272×72)
- + Content › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Content › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Content › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Content › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Content › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Content › Contents › .Resize handler (12×12)
- + Content › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Style=Default; RTL=False, Filled=False, Error=False, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-focused=#384250
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled darker; RTL=False, Filled=True, Error=True, Style=Filled lighter
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled darker; RTL=False, Filled=True, Error=True, Style=Filled lighter
- + Content (320×96)
- + Content › Contents (320×96 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1)
- + Content › Contents › Icon-Text-stack (304×96)
- + Content › Contents › Icon-Text-stack › Text (272×72)
- + Content › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Content › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Content › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Content › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Content › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Content › Contents › .Resize handler (12×12)
- + Content › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Thin underline (112×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Style=Default; RTL=False, Filled=True, Error=True, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-focused=#384250
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled darker; RTL=False, Filled=False, Error=True, Style=Filled lighter
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 3 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled darker; RTL=False, Filled=False, Error=True, Style=Filled lighter
- + Content (320×96)
- + Content › Contents (320×96 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1)
- + Content › Contents › Icon-Text-stack (304×96)
- + Content › Contents › Icon-Text-stack › Text (272×72)
- + Content › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Content › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Content › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Content › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Content › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Content › Contents › .Resize handler (12×12)
- + Content › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Content › Thin underline (112×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Style=Default; RTL=False, Filled=False, Error=True, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-focused=#384250
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Default
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker; RTL=False, Filled=True, Error=False, Style=Filled lighter
- Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker; RTL=False, Filled=False, Error=False, Style=Filled lighter
- Contents: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Contents: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-readonly=#161616
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-readonly=#161616
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2
- Contents: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Entered Text (272×72 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-readonly=#161616
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Container (320×96)
- + Container › Contents (320×96 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Container › Contents › Icon-Text-stack (304×96)
- + Container › Contents › Icon-Text-stack › Text (272×72)
- + Container › Contents › Icon-Text-stack › Text › Placeholder Text (272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Placeholder text")
- + Container › Contents › _Textarea-Scrollbar (16×96 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1)
- + Container › Contents › _Textarea-Scrollbar › Bar (16×80 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0)
- + Container › Contents › _Textarea-Scrollbar › Bar › Bar (8×40 · fill=Background/background-neutral-300=#d2d6db)
- + Container › Contents › _Textarea-Scrollbar › Spacer (16×16)
- + Container › Contents › .Resize handler (12×12)
- + Container › Contents › .Resize handler › Vector 1 (Stroke) (10×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Contents › .Resize handler › Vector 2 (Stroke) (6×1 · fill=Form/field-border-pressed=#0d121c)
- + Container › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Contents (hidden/removed)
- − Contents › Icon-Text-stack (hidden/removed)
- − Contents › Icon-Text-stack › Text (hidden/removed)
- − Contents › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Contents › _Textarea-Scrollbar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Bar › Bar (hidden/removed)
- − Contents › _Textarea-Scrollbar › Spacer (hidden/removed)
- − Contents › .Resize handler (hidden/removed)
- − Contents › .Resize handler › Vector 1 (Stroke) (hidden/removed)
- − Contents › .Resize handler › Vector 2 (Stroke) (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Form/field-text-readonly=#161616
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae|#000000@0.2
- Contents: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Contents › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/input-text-disabled=#9da4ae|#000000@0.2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=False, Error=False, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=True, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=False, Error=True, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=True, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=False, Error=False, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=True, Error=True, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Entered Text`: 272×72 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

**RTL=False, State=Default, Filled=False, Error=True, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Contents`: 320×96 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/textarea-gap, paddingLeft:Form/textarea-padding, paddingTop:Form/textarea-padding, paddingRight:Form/textarea-padding, paddingBottom:Form/textarea-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Contents › Icon-Text-stack`: 304×96 · lay=H/MIN/MIN · pad=12 16 12 16 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Form/textarea-container-padding-left&right, paddingTop:Form/textarea-container-padding-top&bottom, paddingRight:Form/textarea-container-padding-left&right, paddingBottom:Form/textarea-container-padding-top&bottom}
- `Contents › Icon-Text-stack › Text`: 272×72 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Contents › Icon-Text-stack › Text › Placeholder Text`: 272×72 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Placeholder text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Contents › _Textarea-Scrollbar`: 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
- `Contents › _Textarea-Scrollbar › Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Contents › _Textarea-Scrollbar › Bar › Bar`: 8×40 · r=9999 · fill=Form/Textarea-scrollbar-bar=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Contents › _Textarea-Scrollbar › Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}
- `Contents › .Resize handler`: 12×12
- `Contents › .Resize handler › Vector 1 (Stroke)`: 10×1 · fill=Form/field-border-pressed=#0d121c · rot=45
- `Contents › .Resize handler › Vector 2 (Stroke)`: 6×1 · fill=Form/field-border-pressed=#0d121c · rot=45

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 24 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 24 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 24 |

---
## _Textarea-Scrollbar

**Description (component description field):**

> Allows users to navigate through the text area's content.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: Ar · En |

### Anatomy (first variant: `RTL=En`)

- `RTL=En` [COMP] — 16×96 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=0 0 0 1 · sa=INSIDE
  - `Bar` [FRAM] — 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
    - `Bar` [RECT] — 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `Spacer` [FRAM] — 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=En (+1 more) | 16×96 | V/MIN/CENTER · 0 0 0 0 · 0 |  | Background/background-neutral-100=#f3f4f6 | Form/field-border-default=#9da4ae 0 0 0 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=En**
- `Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}

**RTL=Ar**
- `Bar`: 16×80 · lay=V/MIN/CENTER · pad=4 4 4 4 · gap=8 · stroke=Form/field-border-default=#9da4ae · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs}
- `Bar › Bar`: 8×40 · r=9999 · fill=Background/background-neutral-300=#d2d6db
- `Spacer`: 16×16 · tokens{paddingLeft:spacing-xs, paddingTop:spacing-xs, paddingRight:spacing-xs, paddingBottom:spacing-xs}

### Interactions & motion

*No prototype reactions defined on this component set.*
