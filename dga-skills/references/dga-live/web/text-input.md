# Text input — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `954:19434`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 954-19434

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Text Input

> An input allows people to enter short, free form text data. If you need to collect more than one line of information, try a textarea.

> Resources

> Input Prefix-Suffix

## Component sets on this page (3)

- **Text Input** — 288 variants · `30150:130250`
- **Label** — 16 variants · `30150:134187`
- **_Input Prefix-Suffix** — 64 variants · `30150:134236`

---
## Text Input

**Description (component description field):**

> Text input in Platforms Code are interactive elements where users can enter or edit text, numbers, or other data. They provide a means for users to input information, such as usernames, passwords, or search queries, and are commonly found in forms or search bars. Input fields typically feature visual cues like placeholder text or labels to guide users and enhance usability.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| 🔁 Swap Helper Icon | INSTANCE_SWAP=31864:189863 |
| Prefix | BOOLEAN=false |
| Suffix | BOOLEAN=false |
| Text ENG | TEXT=Entered text |
| Text AR | TEXT=نص تلميحي |
| Show label | BOOLEAN=true |
| Show Helper Text | BOOLEAN=false |
| Helper Text Eng | TEXT=Help Text |
| Helper text AR | TEXT=نص مساعد |
| 🔁 Swap Icon | INSTANCE_SWAP=14313:61520 |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Size | VARIANT: Large · Medium |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default` [COMP] — 320×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Input Field` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Prefix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 74×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 42×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 42×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Prefix" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Icon-Text-stack` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
      - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18 · rot=-180
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
      - `Text` [FRAM] — 296×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Suffix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 73×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 41×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 41×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Suffix" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Helper Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default (+59 more) | 320×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Large, Style=Default (+11 more) | 320×68 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=False, State=Default, Filled=True, Error=False, Size=Medium, Style=Default (+59 more) | 320×60 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Medium, Style=Default (+11 more) | 320×60 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40)
- + Input Field › Content › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Contents › Icon-Text-stack (320×40)
- + Input Field › Content › Contents › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default; RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 6 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default; RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker …
- *(no visual difference captured at root/child level)*

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default; RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (78×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Hovered**  · applies to 5 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter …
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → Form/field-background-darker=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (78×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Default
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-focused=#384250

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled darker; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (78×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (78×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×32 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×32)
- + Input Field › Content › Icon-Text-stack › Text (296×32)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=False, Size=Medium, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=False, Size=Medium, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-pressed=#384250
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=True, Error=True, Size=Medium, Style=Filled lighter
- Label › Label › Text: fill: Form/field-text-label=#161616 → Global/input-text-disabled=#9da4ae
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → Form/field-background-pressed=#f3f4f6; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db
- + Input Field › Thin underline (112×2 · fill=Form/field-border-error=#b42318)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-error=#b42318 · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Text (296×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Entered text")
- + Input Field › Thin underline (320×2 · fill=Form/field-border-error=#b42318)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Filled lighter; RTL=False, Filled=False, Error=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: Form/field-border-error=#b42318 → Border/border-neutral-primary=#d2d6db

- … 5 more state signatures (see data JSON)
### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 89×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 89×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, State=Default, Filled=True, Error=False, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 78×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Error=False, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=True, Error=True, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 78×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Error=True, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `Input Field › Icon-Text-stack › Text`: 296×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 78×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Entered text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Prefix ⟶ None | **INSTANT** | 234 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ None | **INSTANT** | 233 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 48 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 48 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 48 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 48 |

---
## Label

**Description (component description field):**

> Displays the title of the input.

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
  - `Required asterisk` [TEXT] — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Regular (Default), Size=Medium, Disabled=False (+1 more) | 46×20 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Semibold, Size=Medium, Disabled=False (+1 more) | 48×20 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Regular (Default), Size=Large, Disabled=False (+1 more) | 51×24 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Semibold, Size=Large, Disabled=False (+1 more) | 54×24 | H/MIN/MAX · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Regular (Default), Size=Medium, Disabled=False**
- `Required asterisk`: 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Regular (Default), Size=Medium, Disabled=True**
- `Required asterisk`: 7×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 35×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Semibold, Size=Medium, Disabled=False**
- `Required asterisk`: 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 36×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Semibold, Size=Medium, Disabled=True**
- `Required asterisk`: 8×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Text`: 36×20 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Regular (Default), Size=Large, Disabled=False**
- `Required asterisk`: 8×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text`: 39×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Type=Regular (Default), Size=Large, Disabled=True**
- `Required asterisk`: 8×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text`: 39×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Type=Semibold, Size=Large, Disabled=False**
- `Required asterisk`: 9×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text`: 41×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Type=Semibold, Size=Large, Disabled=True**
- `Required asterisk`: 9×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text`: 41×24 · fill=Global/input-text-disabled=#9da4ae · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Input Prefix-Suffix

**Description (component description field):**

> Prefix: Information added before the main input field to provide contextual information.
> Suffix: Information added after the main input field to provide contextual information.

### Properties

| Property | Type / options |
|---|---|
| 🔁 Icon | INSTANCE_SWAP=13758:241749 |
| Icon | BOOLEAN=true |
| Text EN | TEXT=Text |
| Text AR | TEXT=نص |
| RTL | VARIANT: False · True |
| Type | VARIANT: Dropdown · Text |
| State | VARIANT: Default · Hovered · Pressed · Selected · Focused · Disabled |
| Style | VARIANT: Solid · Subtle |
| Size | VARIANT: Large · Medium |

### Anatomy (first variant: `RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large`)

- `RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large` [COMP] — 115×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `Icon` [INST] ⟶ instance of **award-05 / Style=Stroke, Type=Rounded** — 24×24
    - `Icon` [VECT] — 17×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=INSIDE
  - `Text wrapper` [FRAM] — 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
    - `Text` [TEXT] — 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
    - `elements` [GROU] — 11×6
      - `Icon` [VECT] — 6×11 · fill=Icon/icon-default=#161616 · rot=90

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
| RTL=False, Type=Dropdown, State=Hovered, Style=Solid, Size=Large (+1 more) | 115×40 | H/CENTER/CENTER · 2 16 2 16 · 4 |  | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
| RTL=False, Type=Dropdown, State=Hovered, Style=Solid, Size=Medium (+1 more) | 95×32 | H/CENTER/CENTER · 2 12 2 12 · 4 |  | Button/button-background-neutral-hovered=#f3f4f6 |   |  |
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

States: Default · Hovered · Pressed · Selected · Focused · Disabled

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-selected=#384250
- Icon › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large; RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-neutral-focused=#f3f4f6; stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Large
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: — → Global/icon-default-disabled=#9da4ae; sw: — → 0

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Text, Style=Solid, Size=Large; RTL=False, Type=Text, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Text wrapper › Text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-neutral-hovered=#f3f4f6

#### Default → **Pressed**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large
- (root): fill: — → Button/button-background-black-selected=#384250
- Icon › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff

#### Default → **Focused**  · applies to 2 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large; RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): stroke: — → Border/border-black=#161616; sw: — → 4

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Large
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: — → Global/icon-default-disabled=#9da4ae; sw: — → 0

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Type=Text, Style=Subtle, Size=Large; RTL=False, Type=Text, Style=Subtle, Size=Medium
- Text wrapper › Text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Button/button-background-black-selected=#384250
- Icon › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Solid, Size=Medium
- (root): fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

#### Default → **Selected**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- (root): fill: — → Button/button-background-black-selected=#384250
- Icon › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Text/text-oncolor-primary=#ffffff
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-oncolor=#ffffff; stroke: Icon/icon-default=#161616 → —; sw: 0 → —

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Type=Dropdown, Style=Subtle, Size=Medium
- Icon › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- arrow-down-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Large**
- `Icon`: 24×24
- `Icon › Icon`: 17×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=INSIDE
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Type=Text, State=Default, Style=Solid, Size=Large**
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Large**
- `Icon`: 24×24
- `Icon › Icon`: 17×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=INSIDE
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `arrow-down-01`: 20×20
- `arrow-down-01 › elements`: 11×6
- `arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large**
- `Text wrapper`: 31×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 31×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Type=Dropdown, State=Default, Style=Solid, Size=Medium**
- `Icon`: 20×20
- `Icon › Icon`: 14×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=INSIDE
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium**
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Dropdown, State=Default, Style=Subtle, Size=Medium**
- `Icon`: 20×20
- `Icon › Icon`: 14×18 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=INSIDE
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `arrow-down-01`: 16×16
- `arrow-down-01 › elements`: 9×5
- `arrow-down-01 › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER · rot=90

**RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium**
- `Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 8 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 8 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **INSTANT** | 8 |
| ON_CLICK | CHANGE_TO | State: Selected→Default | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Solid, Size=Large ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Solid, Size=Large ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Large ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ None | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Type=Text, State=Default, Style=Subtle, Size=Medium ⟶ None | **INSTANT** | 1 |
