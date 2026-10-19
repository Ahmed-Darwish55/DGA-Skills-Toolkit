# UI Shell - Second Level Nav Header — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `18738:4312`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 18738-4312

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Second Nav Header

> The second navigation header in this component provides users with information such as the current weather ("Cloudy"), The buttons on the right may offer additional functionality, such as zoom in, enhancing navigation and accessibility.

> Resources

## Component sets on this page (2)

- **Second Nav Header** — 4 variants · `18800:8281`
- **sub-header-Item** — 4 variants · `18841:25963`

---
## Second Nav Header

**Description (component description field):**

> The Second Nav Header component is a secondary navigation bar that appears above the primary navigation and offers additional controls or context-based information.

### Properties

| Property | Type / options |
|---|---|
| Show Action 3 | BOOLEAN=true |
| Show Divider | BOOLEAN=true |
| Show Item 3 | BOOLEAN=true |
| Show Item 2 | BOOLEAN=true |
| Show Content | BOOLEAN=true |
| Show Actions | BOOLEAN=true |
| Show Action 2 | BOOLEAN=true |
| Show Action 4 | BOOLEAN=true |
| Show Item 4 | BOOLEAN=true |
| RTL | VARIANT: No · Yes |
| Style | VARIANT: Gray · Primary |

### Anatomy (first variant: `RTL=No, Style=Gray`)

- `RTL=No, Style=Gray` [COMP] — 1440×40 · lay=V/CENTER/MAX · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · tokens{paddingLeft:spacing-4xl, paddingRight:spacing-4xl}
  - `Header Content` [FRAM] — 1376×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
    - `Content` [FRAM] — 1214×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
      - `sub-header-Item` [INST] ⟶ instance of **sub-header-Item / RTL=No, Style=Default** — 78×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
        - `cloud` [INST] ⟶ instance of **cloud / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 22×17
        - `Label` [TEXT] — 50×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `sub-header-Item` [INST] ⟶ instance of **sub-header-Item / RTL=No, Style=Default** — 116×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
        - `calendar-04` [INST] ⟶ instance of **calendar-04 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 21×22
        - `Label` [TEXT] — 88×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3-Sep-2024" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `sub-header-Item` [INST] ⟶ instance of **sub-header-Item / RTL=No, Style=Default** — 88×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
        - `time-04` [INST] ⟶ instance of **time-04 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 22×22
        - `Label` [TEXT] — 60×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2:30 PM" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `sub-header-Item` [INST] ⟶ instance of **sub-header-Item / RTL=No, Style=Default** — 98×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
        - `location-01` [INST] ⟶ instance of **location-01 / Style=Stroke, Type=Rounded** — 24×24
          - `elements` [GROU] — 20×22
        - `Label` [TEXT] — 70×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Al-Riyadh " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Actions` [FRAM] — 146×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
      - `Button 1` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **mic-01 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 15×18
      - `Button 2` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **zoom-out-area / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 18×18 · rot=-180
      - `Button 5` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **zoom-in-area / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 18×18 · rot=-180
      - `Button 3` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **view / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 18×13
  - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 1440×1
    - `Divider` [RECT] — 1440×1 · fill=Border/border-neutral-primary=#d2d6db

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Style=Gray (+1 more) | 1440×40 | V/CENTER/MAX · 0 32 0 32 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=No, Style=Primary (+1 more) | 1440×40 | V/CENTER/MAX · 0 32 0 32 · 0 |  | Background/background-primary=#1b8354 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Style=Gray**
- `Header Content`: 1376×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Content`: 1214×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Header Content › Content › sub-header-Item`: 78×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › cloud`: 24×24
- `Header Content › Content › sub-header-Item › cloud › elements`: 22×17
- `Header Content › Content › sub-header-Item › cloud › elements › Icon`: 22×17 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item › Label`: 50×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#2`: 116×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › calendar-04`: 24×24
- `Header Content › Content › sub-header-Item › calendar-04 › elements`: 21×22
- `Header Content › Content › sub-header-Item › calendar-04 › elements › Icon`: 21×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item › Label#2`: 88×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3-Sep-2024" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#3`: 88×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › time-04`: 24×24
- `Header Content › Content › sub-header-Item › time-04 › elements`: 22×22
- `Header Content › Content › sub-header-Item › time-04 › elements › Icon`: 22×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item › Label#3`: 60×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2:30 PM" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#4`: 98×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › location-01`: 24×24
- `Header Content › Content › sub-header-Item › location-01 › elements`: 20×22
- `Header Content › Content › sub-header-Item › location-01 › elements › Icon`: 20×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item › Label#4`: 70×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Al-Riyadh " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Actions`: 146×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Header Content › Actions › Button 1`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 1 › Leading Icon`: 20×20
- `Header Content › Actions › Button 1 › Leading Icon › elements`: 15×18
- `Header Content › Actions › Button 1 › Leading Icon › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 2 › Leading Icon`: 20×20
- `Header Content › Actions › Button 2 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 2 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 5`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 5 › Leading Icon`: 20×20
- `Header Content › Actions › Button 5 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 5 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 3`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 5 more layers (data JSON)

**RTL=Yes, Style=Gray**
- `Header Content`: 1376×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Actions`: 146×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Header Content › Actions › Button 1`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 1 › Leading Icon`: 20×20
- `Header Content › Actions › Button 1 › Leading Icon › elements`: 15×18
- `Header Content › Actions › Button 1 › Leading Icon › elements › Icon`: 15×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 2 › Leading Icon`: 20×20
- `Header Content › Actions › Button 2 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 2 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 5`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 5 › Leading Icon`: 20×20
- `Header Content › Actions › Button 5 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 5 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Header Content › Actions › Button 3`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 3 › Leading Icon`: 20×20
- `Header Content › Actions › Button 3 › Leading Icon › elements`: 18×13
- `Header Content › Actions › Button 3 › Leading Icon › elements › Icon`: 18×13 · fill=Icon/icon-default=#161616
- `Header Content › Content`: 1214×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Header Content › Content › sub-header-Item`: 71×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label`: 43×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الرياض" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › location-01`: 24×24
- `Header Content › Content › sub-header-Item › location-01 › elements`: 20×22
- `Header Content › Content › sub-header-Item › location-01 › elements › Icon`: 20×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item#2`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#2`: 69×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2:30 مساءً" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › time-02`: 24×24
- `Header Content › Content › sub-header-Item › time-02 › elements`: 22×22
- `Header Content › Content › sub-header-Item › time-02 › elements › Icon`: 22×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item#3`: 129×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#3`: 101×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3-سبتمبر-2024" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › calendar-04`: 24×24
- `Header Content › Content › sub-header-Item › calendar-04 › elements`: 21×22
- `Header Content › Content › sub-header-Item › calendar-04 › elements › Icon`: 21×22 · fill=Icon/icon-neutral=#384250
- `Header Content › Content › sub-header-Item#4`: 55×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#4`: 27×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="غائم" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- … 5 more layers (data JSON)

**RTL=No, Style=Primary**
- `Header Content`: 1376×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Content`: 1214×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Header Content › Content › sub-header-Item`: 78×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › cloud`: 24×24
- `Header Content › Content › sub-header-Item › cloud › elements`: 22×17
- `Header Content › Content › sub-header-Item › cloud › elements › Icon`: 22×17 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item › Label`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#2`: 116×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › calendar-04`: 24×24
- `Header Content › Content › sub-header-Item › calendar-04 › elements`: 21×22
- `Header Content › Content › sub-header-Item › calendar-04 › elements › Icon`: 21×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item › Label#2`: 88×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3-Sep-2024" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#3`: 88×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › time-04`: 24×24
- `Header Content › Content › sub-header-Item › time-04 › elements`: 22×22
- `Header Content › Content › sub-header-Item › time-04 › elements › Icon`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item › Label#3`: 60×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2:30 PM" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item#4`: 98×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › location-01`: 24×24
- `Header Content › Content › sub-header-Item › location-01 › elements`: 20×22
- `Header Content › Content › sub-header-Item › location-01 › elements › Icon`: 20×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item › Label#4`: 70×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Al-Riyadh " · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Actions`: 146×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Header Content › Actions › Button 1`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 1 › Leading Icon`: 20×20
- `Header Content › Actions › Button 1 › Leading Icon › elements`: 15×18
- `Header Content › Actions › Button 1 › Leading Icon › elements › Icon`: 15×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 2 › Leading Icon`: 20×20
- `Header Content › Actions › Button 2 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 2 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 5`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 5 › Leading Icon`: 20×20
- `Header Content › Actions › Button 5 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 5 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 3`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 5 more layers (data JSON)

**RTL=Yes, Style=Primary**
- `Header Content`: 1376×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=16
- `Header Content › Actions`: 146×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=6 · tokens{itemSpacing:Global/spacing-sm}
- `Header Content › Actions › Button 1`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 1 › Leading Icon`: 20×20
- `Header Content › Actions › Button 1 › Leading Icon › elements`: 15×18
- `Header Content › Actions › Button 1 › Leading Icon › elements › Icon`: 15×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 2 › Leading Icon`: 20×20
- `Header Content › Actions › Button 2 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 2 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 5`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 5 › Leading Icon`: 20×20
- `Header Content › Actions › Button 5 › Leading Icon › elements`: 18×18 · rot=-180
- `Header Content › Actions › Button 5 › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Actions › Button 3`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header Content › Actions › Button 3 › Leading Icon`: 20×20
- `Header Content › Actions › Button 3 › Leading Icon › elements`: 18×13
- `Header Content › Actions › Button 3 › Leading Icon › elements › Icon`: 18×13 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content`: 1214×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Header Content › Content › sub-header-Item`: 71×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label`: 43×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الرياض" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › location-01`: 24×24
- `Header Content › Content › sub-header-Item › location-01 › elements`: 20×22
- `Header Content › Content › sub-header-Item › location-01 › elements › Icon`: 20×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item#2`: 97×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#2`: 69×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2:30 مساءً" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › time-02`: 24×24
- `Header Content › Content › sub-header-Item › time-02 › elements`: 22×22
- `Header Content › Content › sub-header-Item › time-02 › elements › Icon`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item#3`: 129×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#3`: 101×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3-سبتمبر-2024" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header Content › Content › sub-header-Item › calendar-04`: 24×24
- `Header Content › Content › sub-header-Item › calendar-04 › elements`: 21×22
- `Header Content › Content › sub-header-Item › calendar-04 › elements › Icon`: 21×22 · fill=Icon/icon-oncolor=#ffffff
- `Header Content › Content › sub-header-Item#4`: 55×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header Content › Content › sub-header-Item › Label#4`: 27×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="غائم" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- … 5 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button 1 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 2 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 5 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 3 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 1 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 2 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 5 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 3 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 1 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 2 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 5 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 3 ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 1 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 2 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 5 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button 3 ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=True | **INSTANT** | 1 |

---
## sub-header-Item

**Description (component description field):**

> The Sub-Header Item is used to display contextual details like date, time, and location.

### Properties

| Property | Type / options |
|---|---|
| Swap icon  | INSTANCE_SWAP=18738:4314 |
| Text EN | TEXT=Cloudy |
| Text AR | TEXT=غائم |
| RTL | VARIANT: Yes · No |
| Style | VARIANT: Default · On-color |

### Anatomy (first variant: `RTL=No, Style=Default`)

- `RTL=No, Style=Default` [COMP] — 78×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
  - `cloud` [INST] ⟶ instance of **cloud / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 22×17
      - `Icon` [VECT] — 22×17 · fill=Icon/icon-neutral=#384250
  - `Label` [TEXT] — 50×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Style=Default (+1 more) | 78×24 | H/MIN/CENTER · 0 0 0 0 · 4 |  |  |   |  |
| RTL=Yes, Style=Default (+1 more) | 55×24 | H/MIN/CENTER · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Style=Default**
- `cloud`: 24×24
- `cloud › elements`: 22×17
- `cloud › elements › Icon`: 22×17 · fill=Icon/icon-neutral=#384250
- `Label`: 50×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=Yes, Style=Default**
- `Label`: 27×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="غائم" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `cloud`: 24×24
- `cloud › elements`: 22×17
- `cloud › elements › Icon`: 22×17 · fill=Icon/icon-neutral=#384250

**RTL=Yes, Style=On-color**
- `Label`: 27×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="غائم" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `cloud`: 24×24
- `cloud › elements`: 22×17
- `cloud › elements › Icon`: 22×17 · fill=Icon/icon-oncolor=#ffffff

**RTL=No, Style=On-color**
- `cloud`: 24×24
- `cloud › elements`: 22×17
- `cloud › elements › Icon`: 22×17 · fill=Icon/icon-oncolor=#ffffff
- `Label`: 50×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Cloudy" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion

*No prototype reactions defined on this component set.*
