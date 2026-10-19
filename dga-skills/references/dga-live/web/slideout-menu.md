# Slideout Menu — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `23333:6177`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 23333-6177

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Slideout Menu

> A slideout menu is a navigation element that slides in from the side of the screen, typically triggered by a button or gesture. It provides easy access to menu options or additional content without cluttering the main interface, enhancing the user experience on both mobile and web applications.

> Resources

## Component sets on this page (2)

- **Slideout Menu** — 8 variants · `23360:17219`
- **Slideout Menu Header** — 2 variants · `23521:31454`

---
## Slideout Menu

### Properties

| Property | Type / options |
|---|---|
| Nav Header | BOOLEAN=true |
| Scroll Bar | BOOLEAN=true |
| Border | BOOLEAN=true |
| Swap Custom Content | INSTANCE_SWAP=30150:55097 |
| Show Divider | BOOLEAN=true |
| Show Actions | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Background Color | VARIANT: White · Gray |
| Style | VARIANT: Default · Custom Style |

### Anatomy (first variant: `RTL=False, Background Color=Gray, Style=Custom Style`)

- `RTL=False, Background Color=Gray, Style=Custom Style` [COMP] — 346×912 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-100=#f3f4f6
  - `Border` [RECT] — 1×912 · fill=Border/border-neutral-primary=#d2d6db
  - `Slideout Menu Header` [INST] ⟶ instance of **Slideout Menu Header / RTL=False** — 346×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Header` [FRAM] — 346×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
      - `Content` [FRAM] — 294×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
        - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Small, Color=Brand, Style=Light, Circle=True** — 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `add-circle` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** — 16×16
        - `Content` [FRAM] — 254×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
          - `Title` [TEXT] — 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
          - `Description gose here.` [TEXT] — 254×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
      - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 9×9
    - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** *(hidden)* — 260×1
      - `Divider` [RECT] — 260×1 · fill=Border/border-neutral-primary=#d2d6db
  - `Slide out Menu Items` [FRAM] — 346×834 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
    - `_Swap Placeholder` [INST] ⟶ instance of **_Swap Placeholder / Size=Default** — 314×673 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Helper Text` [TEXT] — 282×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 314×1
      - `Divider` [RECT] — 314×1 · fill=Border/border-neutral-primary=#d2d6db
    - `Actions` [FRAM] — 148×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False** — 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 42×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Primary, Destructive=no, Icon only=False, On-color=False** — 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 42×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
    - `Scroll bar` [FRAM] — 16×834 · lay=H/CENTER/MIN · pad=0 4 0 4 · gap=8 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
      - `Rectangle 6203` [RECT] — 8×100 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Background Color=Gray, Style=Custom Style | 346×912 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=False, Background Color=White, Style=Custom Style | 346×912 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-menu=#ffffff |   |  |
| RTL=False, Background Color=Gray, Style=Default | 346×938 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=False, Background Color=White, Style=Default | 346×938 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-menu=#ffffff |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Background Color=Gray, Style=Custom Style**
- `Border`: 1×912 · fill=Border/border-neutral-primary=#d2d6db
- `Slideout Menu Header`: 346×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Slideout Menu Header › Header`: 346×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `Slideout Menu Header › Header › Content`: 294×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Slideout Menu Header › Header › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Slideout Menu Header › Header › Content › Featured icon › add-circle`: 16×16
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements`: 14×14
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-success=#067647
- `Slideout Menu Header › Header › Content › Content`: 254×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Slideout Menu Header › Header › Content › Content › Title`: 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slideout Menu Header › Header › Content › Content › Description gose here.`: 254×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slideout Menu Header › Header › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slideout Menu Header › Header › Button-Close › multiplication-sign`: 16×16
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements`: 9×9
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Slide out Menu Items`: 346×834 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Slide out Menu Items › _Swap Placeholder`: 314×673 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › _Swap Placeholder › Helper Text`: 282×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Divider`: 314×1
- `Slide out Menu Items › Divider › Divider`: 314×1 · fill=Border/border-neutral-primary=#d2d6db
- `Slide out Menu Items › Actions`: 148×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Slide out Menu Items › Actions › Button`: 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Actions › Button › Text wrapper`: 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Actions › Button › Text wrapper › Text`: 42×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Actions › Button#2`: 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Actions › Button › Text wrapper#2`: 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Actions › Button › Text wrapper › Text#2`: 42×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Scroll bar`: 16×834 · lay=H/CENTER/MIN · pad=0 4 0 4 · gap=8 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Slide out Menu Items › Scroll bar › Rectangle 6203`: 8×100 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Background Color=White, Style=Custom Style**
- `Border`: 1×912 · fill=Border/border-neutral-primary=#d2d6db
- `Slideout Menu Header`: 346×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Slideout Menu Header › Header`: 346×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `Slideout Menu Header › Header › Content`: 294×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Slideout Menu Header › Header › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Slideout Menu Header › Header › Content › Featured icon › add-circle`: 16×16
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements`: 14×14
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-success=#067647
- `Slideout Menu Header › Header › Content › Content`: 254×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Slideout Menu Header › Header › Content › Content › Title`: 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slideout Menu Header › Header › Content › Content › Description gose here.`: 254×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slideout Menu Header › Header › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slideout Menu Header › Header › Button-Close › multiplication-sign`: 16×16
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements`: 9×9
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Slide out Menu Items`: 346×834 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Slide out Menu Items › _Swap Placeholder`: 314×673 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Background/background-primary-50=#f3fcf6 · stroke=Border/border-primary=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › _Swap Placeholder › Helper Text`: 282×54 · fill=Text/text-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT
اس" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Divider`: 314×1 · fill=#ffffff
- `Slide out Menu Items › Divider › Divider`: 314×1 · fill=Border/border-neutral-primary=#d2d6db
- `Slide out Menu Items › Actions`: 148×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Slide out Menu Items › Actions › Button`: 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Actions › Button › Text wrapper`: 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Actions › Button › Text wrapper › Text`: 42×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Actions › Button#2`: 66×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-primary-default=#1b8354 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Actions › Button › Text wrapper#2`: 42×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Actions › Button › Text wrapper › Text#2`: 42×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Action" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Slide out Menu Items › Scroll bar`: 16×834 · lay=H/CENTER/MIN · pad=0 4 0 4 · gap=8 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Slide out Menu Items › Scroll bar › Rectangle 6203`: 8×100 · r=9999 · fill=Background/background-neutral-300=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**RTL=False, Background Color=Gray, Style=Default**
- `Border`: 1×938 · fill=Border/border-neutral-primary=#d2d6db
- `Slideout Menu Header`: 346×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Slideout Menu Header › Header`: 346×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `Slideout Menu Header › Header › Content`: 294×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Slideout Menu Header › Header › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Slideout Menu Header › Header › Content › Featured icon › add-circle`: 16×16
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements`: 14×14
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-success=#067647
- `Slideout Menu Header › Header › Content › Content`: 254×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Slideout Menu Header › Header › Content › Content › Title`: 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slideout Menu Header › Header › Content › Content › Description gose here.`: 254×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slideout Menu Header › Header › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slideout Menu Header › Header › Button-Close › multiplication-sign`: 16×16
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements`: 9×9
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Slide out Menu Items`: 346×860 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Slide out Menu Items › Items`: 314×699 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Slide out Menu Items › Items › Group Label`: 314×150 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Slide out Menu Items › Items › Group Label › Text`: 69×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slide out Menu Items › Items › Group Label › Frame 11`: 314×120 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper`: 266×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper › Entered Text`: 266×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item#2`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01#2`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements#2`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon#2`: 19×22 · fill=Icon/icon-default=#161616
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper#2`: 266×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper › Entered Text#2`: 266×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item#3`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01#3`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements#3`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon#3`: 19×22 · fill=Icon/icon-default=#161616
- … 62 more layers (data JSON)

**RTL=False, Background Color=White, Style=Default**
- `Border`: 1×938 · fill=Border/border-neutral-primary=#d2d6db
- `Slideout Menu Header`: 346×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Slideout Menu Header › Header`: 346×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `Slideout Menu Header › Header › Content`: 294×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Slideout Menu Header › Header › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Slideout Menu Header › Header › Content › Featured icon › add-circle`: 16×16
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements`: 14×14
- `Slideout Menu Header › Header › Content › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-success=#067647
- `Slideout Menu Header › Header › Content › Content`: 254×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Slideout Menu Header › Header › Content › Content › Title`: 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slideout Menu Header › Header › Content › Content › Description gose here.`: 254×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slideout Menu Header › Header › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slideout Menu Header › Header › Button-Close › multiplication-sign`: 16×16
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements`: 9×9
- `Slideout Menu Header › Header › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Slide out Menu Items`: 346×860 · lay=V/MIN/MIN · pad=16 16 80 16 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-8xl}
- `Slide out Menu Items › Items`: 314×699 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Slide out Menu Items › Items › Group Label`: 314×150 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Slide out Menu Items › Items › Group Label › Text`: 69×18 · fill=Text/text-display=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Bold · txt="Group Label" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Slide out Menu Items › Items › Group Label › Frame 11`: 314×120 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper`: 266×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper › Entered Text`: 266×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item#2`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01#2`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements#2`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon#2`: 19×22 · fill=Icon/icon-default=#161616
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper#2`: 266×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › Content Wrapper › Entered Text#2`: 266×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Label" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item#3`: 314×40 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Button/button-menu-h-padding, paddingTop:Button/button-menu-v-padding, paddingRight:Button/button-menu-h-padding, paddingBottom:Button/button-menu-v-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01#3`: 24×24
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements#3`: 19×22
- `Slide out Menu Items › Items › Group Label › Frame 11 › Menu list item › file-01 › elements › Icon#3`: 19×22 · fill=Icon/icon-default=#161616
- … 62 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 8 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=None, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Text, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Button, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=False, Trail element=Icon, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=None, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Text, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Button, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item :: RTL=True, Trail element=Icon, State=Hovered | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Outline, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |

---
## Slideout Menu Header

### Properties

| Property | Type / options |
|---|---|
| Show Featured icon | BOOLEAN=true |
| Title Text | TEXT=Title |
| Description Text | TEXT=Description gose here. |
| Show Divider | BOOLEAN=false |
| Title AR | TEXT=عنوان |
| Description AR | TEXT=هنا يوضع الوصف. |
| Show Description | BOOLEAN=true |
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 260×78 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-neutral-50=#f9fafb · tokens{paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `Header` [FRAM] — 260×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
    - `Content` [FRAM] — 208×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Small, Color=Brand, Style=Light, Circle=True** — 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `add-circle` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 14×14
      - `Content` [FRAM] — 168×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
        - `Title` [TEXT] — 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Description gose here.` [TEXT] — 168×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×9
          - `Icon` [VECT] — 9×9 · fill=Icon/icon-default=#161616
  - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** *(hidden)* — 260×1
    - `Divider` [RECT] — 260×1 · fill=Border/border-neutral-primary=#d2d6db

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 260×78 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-neutral-50=#f9fafb |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Header`: 260×78 · lay=H/SPACE_BETWEEN/MIN · pad=16 16 16 16 · gap=51 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl}
- `Header › Content`: 208×46 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Header › Content › Featured icon`: 32×32 · r=9999 · fill=Icon/background-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Header › Content › Featured icon › add-circle`: 16×16
- `Header › Content › Featured icon › add-circle › elements`: 14×14
- `Header › Content › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-success=#067647
- `Header › Content › Content`: 168×46 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Header › Content › Content › Title`: 34×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Title" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header › Content › Content › Description gose here.`: 168×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Description gose here." · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Header › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Header › Button-Close › multiplication-sign`: 16×16
- `Header › Button-Close › multiplication-sign › elements`: 9×9
- `Header › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 2 |
