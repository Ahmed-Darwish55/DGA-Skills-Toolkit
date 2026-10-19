# Tooltip — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5286:30929`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5286-30929

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Tooltip

> A tooltip is to provide additional information about a particular element when the user hovers their cursor over it. It typically appears as a small box or pop-up near the element and may contain text, images, or other media to provide context or guidance to the user. Tooltips are commonly used to explain the purpose of buttons, icons, or other interactive elements in an interface, enhancing user understanding and usability.

> Resources

> Help Icon

## Component sets on this page (2)

- **Tooltip** — 52 variants · `5666:4260`
- **Help Icon** — 24 variants · `5666:4465`

---
## Tooltip

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Tooltip title |
| Content EN | TEXT=Max width of tooltips is 240px |
| Title | BOOLEAN=true |
| Icon | BOOLEAN=true |
| Title AR | TEXT=عنوان أداة المساعدة |
| Content AR | TEXT=أقصى عرض لأداة المساعدة هو 240 |
| RTL | VARIANT: False · True |
| Inverted | VARIANT: True · False |
| Beak placement | VARIANT: None · Top · Bottom · Left · Right |
| Beak Alignment | VARIANT: Start · Center · End |

### Anatomy (first variant: `RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start`)

- `RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start` [COMP] — 240×74 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=10 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
  - `Content` [FRAM] — 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
    - `Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?** — 18×18
      - `ring` [VECT] *(hidden)* — 24×24 · fill=Colors/Gray neutral/100=#f3f4f6
      - `bg` [VECT] — 17×17 · fill=Colors/Base/white=#ffffff
      - `Icon` [VECT] — 17×17 · fill=Colors/Gray neutral/600=#4d5761
    - `Text wrapper` [FRAM] — 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
      - `Title` [TEXT] — 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
      - `TooltipString` [TEXT] — 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start (+1 more) | 240×74 | V/MIN/MIN · 0 0 0 0 · 10 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Start (+3 more) | 240×80 | V/MIN/MIN · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center (+3 more) | 240×80 | V/MIN/CENTER · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=End (+3 more) | 240×80 | V/MIN/MAX · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=Start (+3 more) | 240×74 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=Center (+3 more) | 240×74 | H/MIN/CENTER · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |
| RTL=False, Inverted=False, Beak placement=Left, Beak Alignment=End (+3 more) | 240×74 | H/MIN/MAX · 0 0 0 0 · 0 |  |  |   | DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Inverted=False, Beak placement=None, Beak Alignment=Start**
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=True, Beak placement=None, Beak Alignment=Start**
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Gray neutral/800=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Start**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Base/white=#ffffff
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=Start**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Gray neutral/800=#1f2a37
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Gray neutral/800=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=Center**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Base/white=#ffffff
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=Center**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Gray neutral/800=#1f2a37
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Gray neutral/800=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=False, Beak placement=Top, Beak Alignment=End**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Base/white=#ffffff
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

**RTL=False, Inverted=True, Beak placement=Top, Beak Alignment=End**
- `Beak`: 28×6
- `Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Gray neutral/800=#1f2a37
- `Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Gray neutral/800=#1f2a37 · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Content › Icon`: 18×18
- `Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary_on-color=#ffffff@0.7 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Help Icon

### Properties

| Property | Type / options |
|---|---|
| Open | VARIANT: False · True |
| Placement | VARIANT: Top · Bottom · Left · Right |
| Alignment | VARIANT: Start · Center · End |

### Anatomy (first variant: `Open=False, Placement=Top, Alignment=Start`)

- `Open=False, Placement=Top, Alignment=Start` [COMP] — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8
  - `Stack` [FRAM] — 28×28 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
    - `Tooltip` [INST] ⟶ instance of **Tooltip / RTL=False, Inverted=False, Beak placement=Bottom, Beak Alignment=Start** *(hidden)* — 240×110 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
      - `Content` [FRAM] — 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
        - `Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?** — 18×18
          - `ring` [VECT] *(hidden)* — 24×24 · fill=Colors/Gray neutral/100=#f3f4f6
          - `bg` [VECT] — 17×17 · fill=Colors/Base/white=#ffffff
          - `Icon` [VECT] — 17×17 · fill=Colors/Gray neutral/600=#4d5761
        - `Text wrapper` [FRAM] — 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
          - `Title` [TEXT] — 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
          - `TooltipString` [TEXT] — 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"
      - `Beak` [FRAM] — 28×6
        - `Polygon` [VECT] — 12×6 · r=    · fill=Colors/Base/white=#ffffff · rot=180
    - `Icon` [FRAM] — 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
      - `Icon` [VECT] — 20×20 · fill=Colors/Gray neutral/500=#6c737f

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Open=False, Placement=Top, Alignment=Start (+23 more) | 20×20 | V/CENTER/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Open=False, Placement=Top, Alignment=Start**
- `Stack`: 28×28 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/500=#6c737f

**Open=True, Placement=Top, Alignment=Start**
- `Stack`: 240×108 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Stack › Tooltip › Content › Icon`: 18×18
- `Stack › Tooltip › Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Stack › Tooltip › Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Stack › Tooltip › Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Colors/Base/white=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/950=#0d121c

**Open=False, Placement=Top, Alignment=Center**
- `Stack`: 240×28 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/500=#6c737f

**Open=True, Placement=Top, Alignment=Center**
- `Stack`: 240×108 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×80 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Stack › Tooltip › Content › Icon`: 18×18
- `Stack › Tooltip › Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Stack › Tooltip › Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Stack › Tooltip › Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Colors/Base/white=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/950=#0d121c

**Open=False, Placement=Top, Alignment=End**
- `Stack`: 28×28 · lay=V/MAX/MAX · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/500=#6c737f

**Open=True, Placement=Top, Alignment=End**
- `Stack`: 240×108 · lay=V/MAX/MAX · pad=0 0 0 0 · gap=0
- `Stack › Tooltip`: 240×80 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Stack › Tooltip › Content › Icon`: 18×18
- `Stack › Tooltip › Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Stack › Tooltip › Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Stack › Tooltip › Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon`: 12×6 · r=    · fill=Colors/Base/white=#ffffff · rot=180
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/950=#0d121c

**Open=False, Placement=Bottom, Alignment=Start**
- `Stack`: 28×28 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/500=#6c737f

**Open=True, Placement=Bottom, Alignment=Start**
- `Stack`: 240×108 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Stack › Icon`: 28×28 · lay=H/CENTER/CENTER · pad=4 4 4 4 · gap=0
- `Stack › Icon › Icon`: 20×20 · fill=Colors/Gray neutral/950=#0d121c
- `Stack › Tooltip`: 240×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fx=DROP_SHADOW(#10182808 0,4 b6 s-2);DROP_SHADOW(#10182814 0,12 b16 s-4)
- `Stack › Tooltip › Beak`: 28×6
- `Stack › Tooltip › Beak › Polygon 1`: 12×6 · r=    · fill=Colors/Base/white=#ffffff
- `Stack › Tooltip › Content`: 240×74 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · fill=Colors/Base/white=#ffffff · tokens{itemSpacing:Tooltip/tooltip-gap, paddingLeft:Tooltip/tooltip-padding, paddingTop:Tooltip/tooltip-padding, paddingRight:Tooltip/tooltip-padding, paddingBottom:Tooltip/tooltip-padding, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Stack › Tooltip › Content › Icon`: 18×18
- `Stack › Tooltip › Content › Icon › bg`: 17×17 · fill=Colors/Base/white=#ffffff
- `Stack › Tooltip › Content › Icon › Icon`: 17×17 · fill=Colors/Gray neutral/600=#4d5761
- `Stack › Tooltip › Content › Text wrapper`: 198×58 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Stack › Tooltip › Content › Text wrapper › Title`: 198×18 · fill=Text/text-primary=#0d121c · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="Tooltip title"
- `Stack › Tooltip › Content › Text wrapper › TooltipString`: 198×36 · fill=Text/text-secondary=#384250 · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Max width of tooltips is 240px"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Open: False→True | **INSTANT** | 12 |
