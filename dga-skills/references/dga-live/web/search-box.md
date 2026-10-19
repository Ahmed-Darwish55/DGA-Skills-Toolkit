# Search Box — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `19297:16294`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 19297-16294

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Search Box

> The Search Box component allows users to input queries and find relevant results within an application or website. It typically includes a text input field. When users start typing, a delete icon appears, allowing them to quickly clear the input. Additionally, a trailing icon with a tooltip is displayed, which shows more information when the user hovers over it or presses the tab key, helping clarify the button's function. This enhances usability and accessibility, providing a more intuitive user experience.

> Resources

## Component sets on this page (2)

- **Search Box** — 144 variants · `30150:90990`
- **Trailing Icon** — 2 variants · `30150:92875`

---
## Search Box

**Description (component description field):**

> The Search Box component allows users to input queries and find relevant results within an application or website.

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=true |
| 🔁 Swap Helper Icon | INSTANCE_SWAP=31864:189863 |
| Text ENG | TEXT=Search |
| Text AR | TEXT=بحث |
| Show label | BOOLEAN=true |
| Show Helper Text | BOOLEAN=true |
| Helper Text Eng | TEXT=Help Text |
| Helper text AR | TEXT=نص مساعد |
| Show Trailing Icon | BOOLEAN=true |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Hovered · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Size | VARIANT: Medium · Large |
| Style | VARIANT: Default · Filled lighter · Filled darker |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Size=Medium, Style=Default`)

- `RTL=False, State=Default, Filled=True, Size=Medium, Style=Default` [COMP] — 320×104 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
  - `Label` [FRAM] — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Text` [TEXT] — 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Input Field` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Icon-Text-stack` [FRAM] — 320×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
      - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 18×18 · rot=-180
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
      - `Text` [FRAM] — 248×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 50×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Trailing Icon` [INST] ⟶ instance of **Trailing Icon / Open=False** — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
        - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
          - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
  - `Helper text` [FRAM] — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Helper Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Size=Medium, Style=Default (+28 more) | 320×104 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Size=Medium, Style=Default (+5 more) | 320×104 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |
| RTL=False, State=Default, Filled=True, Size=Large, Style=Default (+30 more) | 320×112 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, State=Focused, Filled=True, Size=Large, Style=Default (+5 more) | 320×112 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Pressed · Focused · Read-only · Disabled

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×40 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (29×25)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-focused=#384250 → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Default; RTL=False, Filled=False, Size=Large, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×40 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×40)
- + Input Field › Content › Contents (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Contents › Icon-Text-stack (320×40)
- + Input Field › Content › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Contents › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Default; RTL=False, Filled=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Default; RTL=False, Filled=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Default
- Input Field: stroke: Form/field-border-default=#9da4ae → Form/field-border-hovered=#384250
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×48 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×48)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (29×25)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-neutral-primary=#d2d6db
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → Border/border-disabled=#d2d6db
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Default
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; r: 4 → —; gap: 0 → 4
- + Input Field › Contents (320×48 · fill=Form/field-background-darker=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-default=#9da4ae → —; sw: 1 → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (248×48)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Hovered**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled darker
- (root): h: 112 → 104
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1; h: 48 → 40
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled darker
- (root): h: 112 → 104
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; r: 4 → —; gap: 0 → 10; h: 48 → 40
- + Input Field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2); h: 112 → 104
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10; h: 48 → 40
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (29×25)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled darker
- (root): h: 112 → 104
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1; h: 48 → 40
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled darker
- (root): h: 112 → 104
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1; h: 48 → 40
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 4 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled darker; RTL=False, Filled=False, Size=Large, Style=Filled darker; RTL=False, Filled=False, Size=Medium, Style=Filled lighter; RTL=False, Filled=False, Size=Large, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (248×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled darker; RTL=False, Filled=False, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled darker; RTL=False, Filled=False, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Hovered**  · applies to 3 group(s): RTL=False, Filled=True, Size=Large, Style=Filled darker; RTL=False, Filled=True, Size=Medium, Style=Filled lighter; RTL=False, Filled=True, Size=Large, Style=Filled lighter
- Input Field: stroke: — → Form/field-border-default=#9da4ae; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-hovered=#161616

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; r: 4 → —; gap: 0 → 4
- + Input Field › Contents (320×48 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×48)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Filled darker
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; r: 4 → —; gap: 0 → 4
- + Input Field › Contents (320×48 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Filled darker
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-darker=#f3f4f6 → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (248×48)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×40)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (50×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (29×25)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled lighter; RTL=False, Filled=True, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Form/field-text-readonly=#161616

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=True, Size=Medium, Style=Filled lighter; RTL=False, Filled=True, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; r: 4 → —; gap: 0 → 10
- + Input Field › Contents (320×40 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×40)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×40)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×40 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×40)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (248×40)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Read-only**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled lighter; RTL=False, Filled=False, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-neutral-primary=#d2d6db; sw: — → 1

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Filled=False, Size=Medium, Style=Filled lighter; RTL=False, Filled=False, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; stroke: — → Border/border-disabled=#d2d6db; sw: — → 1
- Input Field › Icon-Text-stack › Leading Icon › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Input Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae
- Helper text › Feedback Icon › help-circle › Helper icon: stroke: Icon/icon-neutral=#384250 → Global/icon-default-disabled=#9da4ae
- Helper text › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; r: 4 → —; gap: 0 → 4
- + Input Field › Contents (320×48 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-pressed=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (211×48)
- + Input Field › Content › Icon-Text-stack › Text › Entered Text (44×20 · fill=Form/field-text-focused=#384250 · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Delete Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements (13×13)
- + Input Field › Content › Icon-Text-stack › Delete Icon › elements › Icon (13×13 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Trailing Icon (29×25)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider (25×1)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Divider › Divider (25×1 · fill=Border/border-neutral-primary=#d2d6db)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Entered Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- … 3 more changes

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Filled lighter
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; r: 4 → —; gap: 0 → 4
- + Input Field › Contents (320×48 · fill=Form/field-background-pressed=#f3f4f6 · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Contents › Icon-Text-stack (320×48)
- + Input Field › Contents › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Contents › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Contents › Icon-Text-stack › Text (248×48)
- + Input Field › Contents › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Contents › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Contents › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Size=Large, Style=Filled lighter
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- Input Field: fill: Form/field-background-lighter=#fcfcfd → —; gap: 0 → 10
- + Input Field › Content (320×48 · fill=Form/field-background-lighter=#fcfcfd · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Input Field › Content › Icon-Text-stack (320×48)
- + Input Field › Content › Icon-Text-stack › Leading Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements (18×18)
- + Input Field › Content › Icon-Text-stack › Leading Icon › elements › Icon (18×18 · fill=Icon/icon-default=#161616)
- + Input Field › Content › Icon-Text-stack › Text (248×48)
- + Input Field › Content › Icon-Text-stack › Text › Type Cursor (1×20 · fill=Form/field-border-pressed=#0d121c)
- + Input Field › Content › Icon-Text-stack › Text › Placeholder Text (44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · txt="Search")
- + Input Field › Content › Icon-Text-stack › Trailing Icon (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon (28×28)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (20×20)
- + Input Field › Content › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (15×18)
- + Input Field › Thin underline (319×2 · fill=#000000)
- − Input Field › Icon-Text-stack (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Leading Icon › elements › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Text (hidden/removed)
- − Input Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements (hidden/removed)
- − Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 50×24 · fill=Form/field-text-focused=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Size=Medium, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=True, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×48 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 44×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Size=Large, Style=Default**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×48 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=True, Size=Medium, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×48 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 50×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Size=Medium, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=True, Size=Large, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×48 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Entered Text`: 44×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, State=Default, Filled=False, Size=Large, Style=Filled darker**
- `Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field`: 320×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-darker=#f3f4f6 · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Input Field › Icon-Text-stack`: 320×48 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Input Field › Icon-Text-stack › Text`: 248×48 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Text › Placeholder Text`: 44×20 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Input Field › Icon-Text-stack › Trailing Icon`: 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
- `Input Field › Icon-Text-stack › Trailing Icon › Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01`: 20×20
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements`: 15×18
- `Input Field › Icon-Text-stack › Trailing Icon › Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Helper text`: 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Trailing Icon ⟶ Trailing Icon :: Open=True | **INSTANT** | 144 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 24 |
| ON_PRESS | CHANGE_TO | State: Hovered→Pressed | **INSTANT** | 24 |
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 24 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 24 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Default | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Default | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Default | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Default | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Filled darker | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Filled darker | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Filled darker | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Filled darker | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Medium, Style=Filled lighter | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Medium, Style=Filled lighter | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=False, State=Default, Filled=True, Size=Large, Style=Filled lighter | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Delete Icon ⟶ Search Box :: RTL=True, State=Default, Filled=True, Size=Large, Style=Filled lighter | **INSTANT** | 1 |

---
## Trailing Icon

**Description (component description field):**

> Trailing icon is positioned at the end, often used for actions like clearing input or searching by voice.

### Properties

| Property | Type / options |
|---|---|
| Swap Icon | INSTANCE_SWAP=18738:4762 |
| Open | VARIANT: True · False |

### Anatomy (first variant: `Open=False`)

- `Open=False` [COMP] — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
  - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
      - `mic-01` [INST] ⟶ instance of **mic-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 15×18
          - `Icon` [VECT] — 15×18 · fill=Icon/icon-default=#161616
    - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center** *(hidden)* — 240×110 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Beak` [FRAM] — 28×6
        - `Polygon 1` [VECT] — 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
      - `Content` [FRAM] — 103×34 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** *(hidden)* — 18×18
          - `bg` [VECT] — 17×17 · fill=Icon/icon-oncolor=#ffffff
          - `Icon` [VECT] — 17×17 · fill=Icon/icon-neutral=#384250
        - `Text wrapper` [FRAM] — 87×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
          - `Title` [TEXT] — 87×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Search by voice"
          - `TooltipString` [TEXT] *(hidden)* — 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Open=False (+1 more) | 20×20 | V/CENTER/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Open=False**
- `Stack`: 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › mic-01`: 20×20
- `Stack › Icon › mic-01 › elements`: 15×18
- `Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616

**Open=True**
- `Stack`: 160×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › mic-01`: 20×20
- `Stack › Icon › mic-01 › elements`: 15×18
- `Stack › Icon › mic-01 › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Stack › Tooltip`: 160×40 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
- `Stack › Tooltip › Content`: 103×34 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Tooltip › Content › Text wrapper`: 87×18 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Stack › Tooltip › Content › Text wrapper › Title`: 87×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Search by voice"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Open: False→True | **INSTANT** | 1 |
