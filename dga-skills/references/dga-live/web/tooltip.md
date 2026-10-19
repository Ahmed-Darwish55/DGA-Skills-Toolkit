# Tooltip — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5286:30929`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5286-30929

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Tooltip

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

> Resources

> Help Icon

## Component sets on this page (2)

- **Tooltip** — 52 variants · `30150:139266`
- **Help Icon** — 48 variants · `30150:139675`

---
## Tooltip

**Description (component description field):**

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Tooltip title |
| Content EN | TEXT=Max width of tooltips is 240px |
| Title | BOOLEAN=true |
| Icon | BOOLEAN=true |
| Title AR | TEXT=عنوان التلميح |
| Content AR | TEXT=أقصى عرض للتلميحات هو 240px -  |
| RTL | VARIANT: False · True |
| Inverted | VARIANT: True · False |
| Beak placement | VARIANT: None · Top · Bottom · Left · Right |
| Beak Alignment | VARIANT: Start · Center · End |

### Anatomy (first variant: `RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start`)

- `RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start` [COMP] — 240×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) · tokens{itemSpacing:Tooltip/tooltip-gap}
  - `Content` [FRAM] — 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** — 18×18
      - `bg` [VECT] — 17×17 · fill=Icon/icon-oncolor=#ffffff
      - `Icon` [VECT] — 17×17 · fill=Icon/icon-neutral=#384250
    - `Text wrapper` [FRAM] — 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
      - `Title` [TEXT] — 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `TooltipString` [TEXT] — 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start (+1 more) | 240×78 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Start (+3 more) | 240×84 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center (+3 more) | 240×84 | V/MIN/CENTER · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=End (+3 more) | 240×84 | V/MIN/MAX · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=Start (+3 more) | 240×78 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=Center (+3 more) | 240×78 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=End (+3 more) | 240×78 | H/MIN/MAX · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start**
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=True, Beak placement=None, Beak Alignment=Start**
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-dark=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-dark=#f9fafb · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-dark=#f3f4f6 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Start**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=Start**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-dark=#1f2a37
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-dark=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-dark=#f9fafb · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-dark=#f3f4f6 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=Center**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-dark=#1f2a37
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-dark=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-dark=#f9fafb · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-dark=#f3f4f6 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=End**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=End**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-dark=#1f2a37
- `Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-dark=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Content › Feedback Icon`: 18×18
- `Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-dark=#f9fafb · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-dark=#f3f4f6 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Help Icon

**Description (component description field):**

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Open | VARIANT: False · True |
| Placement | VARIANT: Top · Bottom · Left · Right |
| Alignment | VARIANT: Start · Center · End |

### Anatomy (first variant: `RTL=False, Open=False, Placement=Top, Alignment=Start`)

- `RTL=False, Open=False, Placement=Top, Alignment=Start` [COMP] — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
  - `Stack` [FRAM] — 28×28 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
    - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Bottom, Beak Alignment=Start** *(hidden)* — 240×84 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Content` [FRAM] — 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** — 18×18
          - `bg` [VECT] — 17×17 · fill=Icon/icon-oncolor=#ffffff
          - `Icon` [VECT] — 17×17 · fill=Icon/icon-neutral=#384250
        - `Text wrapper` [FRAM] — 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
          - `Title` [TEXT] — 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
          - `TooltipString` [TEXT] — 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Beak` [FRAM] — 28×6
        - `Polygon` [VECT] — 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff · rot=180
    - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Container, Size=24, Ring=No** — 20×20
        - `bg` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff
        - `Icon` [VECT] — 18×18 · fill=Icon/icon-default-400=#9da4ae

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Open=False, Placement=Top, Alignment=Start (+23 more) | 20×20 | V/CENTER/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Open=False, Placement=Top, Alignment=Start**
- `Stack`: 28×28 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-default-400=#9da4ae

**RTL=False, Open=True, Placement=Top, Alignment=Start**
- `Stack`: 240×112 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×84 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Tooltip › Content › Feedback Icon`: 18×18
- `Stack › Tooltip › Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Tooltip › Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Stack › Tooltip › Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-neutral=#384250

**RTL=False, Open=False, Placement=Top, Alignment=Center**
- `Stack`: 28×28 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-default-400=#9da4ae

**RTL=False, Open=True, Placement=Top, Alignment=Center**
- `Stack`: 240×112 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×84 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Tooltip › Content › Feedback Icon`: 18×18
- `Stack › Tooltip › Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Tooltip › Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Stack › Tooltip › Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-neutral=#384250

**RTL=False, Open=False, Placement=Top, Alignment=End**
- `Stack`: 28×28 · lay=V/MAX/MAX · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-default-400=#9da4ae

**RTL=False, Open=True, Placement=Top, Alignment=End**
- `Stack`: 240×112 · lay=V/MAX/MAX · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×84 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Tooltip › Content › Feedback Icon`: 18×18
- `Stack › Tooltip › Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Tooltip › Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Stack › Tooltip › Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-neutral=#384250

**RTL=False, Open=False, Placement=Bottom, Alignment=Start**
- `Stack`: 28×28 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-default-400=#9da4ae

**RTL=False, Open=True, Placement=Bottom, Alignment=Start**
- `Stack`: 240×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Feedback Icon`: 20×20
- `Stack › Icon › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Icon › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-neutral=#384250
- `Stack › Tooltip`: 240×84 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon 1`: 12×6 · r=    · fill=Tooltip/tooltip-background-light=#ffffff
- `Stack › Tooltip › Content`: 240×78 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Tooltip/tooltip-background-light=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Tooltip › Content › Feedback Icon`: 18×18
- `Stack › Tooltip › Content › Feedback Icon › bg`: 17×17 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Tooltip › Content › Feedback Icon › Icon`: 17×17 · fill=Icon/icon-neutral=#384250
- `Stack › Tooltip › Content › Text wrapper`: 198×62 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Tooltip/tooltip-text-heading-light=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Tooltip/tooltip-text-paragraph-light=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Max width of tooltips is 240px" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Open: False→True | **INSTANT** | 24 |
