# Slider — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `17856:9313`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 17856-9313

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Slider

> A switch is a control used to alternate quickly between two possible states. Toggles are used specifically for binary actions that occur immediately when the user "flips the switch". They are most commonly used for "on/off" settings.

> Resources

## Component sets on this page (1)

- **Slider** — 24 variants · `18046:29577`

---
## Slider

**Description (component description field):**

> A slider allows users to select a value or range of values by dragging a handle along a track.

### Properties

| Property | Type / options |
|---|---|
| Show Lable | BOOLEAN=true |
| Show Helper Text | BOOLEAN=true |
| Helper Text | BOOLEAN=true |
| Size | VARIANT: Small · Medium |
| Persentage | VARIANT: 0 · 20 · 50 · 100 · 0 - 50 · 20 - 70 |
| Range | VARIANT: No · Yes |
| RTL | VARIANT: No · Yes |

### Anatomy (first variant: `Size=Small, Persentage=20, Range=No, RTL=No`)

- `Size=Small, Persentage=20, Range=No, RTL=No` [COMP] — 341×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
  - `Label` [FRAM] — 341×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*"
      - `Text` [TEXT] — 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
  - `Frame 5` [FRAM] — 341×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
    - `Progress Bar` [FRAM] — 320×4 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Progress` [FRAM] — 60×4 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Control` [ELLI] — 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
    - `Persentage` [TEXT] — 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="20" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
  - `Helper text` [FRAM] — 75×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Helper Text` [TEXT] — 51×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Small, Persentage=20, Range=No, RTL=No (+1 more) | 341×64 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=20, Range=No, RTL=Yes (+1 more) | 341×64 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=0 - 50, Range=Yes, RTL=No | 355×64 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=0 - 50, Range=Yes, RTL=Yes | 355×64 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=20 - 70, Range=Yes, RTL=No | 362×64 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=20 - 70, Range=Yes, RTL=Yes | 362×64 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=0, Range=No, RTL=No | 334×64 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=0, Range=No, RTL=Yes | 334×64 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=100, Range=No, RTL=No | 348×64 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Persentage=100, Range=No, RTL=Yes | 348×64 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=20, Range=No, RTL=No (+1 more) | 341×70 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=20, Range=No, RTL=Yes (+1 more) | 341×70 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=0, Range=No, RTL=No | 334×70 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=0, Range=No, RTL=Yes | 334×70 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=100, Range=No, RTL=No | 348×70 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=100, Range=No, RTL=Yes | 348×70 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=0 - 50, Range=Yes, RTL=No | 355×70 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=0 - 50, Range=Yes, RTL=Yes | 355×70 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=20 - 70, Range=Yes, RTL=No | 362×70 | V/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Medium, Persentage=20 - 70, Range=Yes, RTL=Yes | 362×70 | V/CENTER/MAX · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Small, Persentage=20, Range=No, RTL=No**
- `Label`: 341×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Frame 5`: 341×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 60×4 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="20" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 75×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 51×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Size=Small, Persentage=20, Range=No, RTL=Yes**
- `Label`: 341×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان"
- `Frame 5`: 341×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="20" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 60×4 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Helper text`: 77×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Helper Text`: 53×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER

**Size=Small, Persentage=0 - 50, Range=Yes, RTL=No**
- `Label`: 355×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Frame 5`: 355×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 8×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 160×4 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Progress Bar › Progress › Control#2`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage#2`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="50" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 75×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 51×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Size=Small, Persentage=0 - 50, Range=Yes, RTL=Yes**
- `Label`: 355×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان"
- `Frame 5`: 355×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="50" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 160×4 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Progress Bar › Progress › Control#2`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage#2`: 8×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 77×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Helper Text`: 53×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER

**Size=Small, Persentage=20 - 70, Range=Yes, RTL=No**
- `Label`: 362×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Frame 5`: 362×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="20" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 146×4 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Progress Bar › Progress › Control#2`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage#2`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="70" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 75×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 51×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Size=Small, Persentage=20 - 70, Range=Yes, RTL=Yes**
- `Label`: 362×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان"
- `Frame 5`: 362×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="70" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 146×4 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Progress Bar › Progress › Control#2`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage#2`: 15×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="20" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 77×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Helper Text`: 53×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER

**Size=Small, Persentage=0, Range=No, RTL=No**
- `Label`: 334×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Label › Label`: 35×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 35×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Label"
- `Frame 5`: 334×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 12×4 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Frame 5 › Persentage`: 8×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text`: 75×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
- `Helper text › Helper Text`: 51×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**Size=Small, Persentage=0, Range=No, RTL=Yes**
- `Label`: 334×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
- `Label › Label`: 30×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Label › Text`: 30×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="عنوان"
- `Frame 5`: 334×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Frame 5 › Persentage`: 8×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Frame 5 › Progress Bar`: 320×4 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=-46 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress`: 12×4 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 5 › Progress Bar › Progress › Control`: 12×12 · fill=Background/background-primary=#1b8354 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE
- `Helper text`: 77×18 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Helper text › Helper Text`: 53×18 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Helper text › Feedback Icon`: 16×16
- `Helper text › Feedback Icon › help-circle`: 16×16
- `Helper text › Feedback Icon › help-circle › Helper icon`: 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER

### Interactions & motion

*No prototype reactions defined on this component set.*
