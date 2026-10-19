# Inline Alert — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `1730:46041`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 1730-46041

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Inline Alert

> Alerts are an important method of communicating with important users and providing feedback. Alerts can serve as informational messages, where they provide additional information to users that may not be tied to their current action or task. They can also be used to provide direct feedback to users and actions.

> Resources

## Component sets on this page (1)

- **Inline Alert** — 40 variants · `1730:46048`

---
## Inline Alert

**Description (component description field):**

> Positioned within task flows, these notifications inform users about the status of an ongoing action, typically displayed at the top of the main content area.

### Properties

| Property | Type / options |
|---|---|
| Actions | BOOLEAN=true |
| Helper text | BOOLEAN=true |
| Close Button | BOOLEAN=true |
| Lead Text EN | TEXT=Notification/Alert message tit |
| Helper Text EN | TEXT=When a Notification/Alert need |
| Lead Text AR | TEXT=عنوان رسالة الاشعار أو التنبيه |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Secondary Action | BOOLEAN=true |
| RTL | VARIANT: False · True |
| Type | VARIANT: Neutral · Info · Destructive · Warning · Success |
| Background Color | VARIANT: White · Color |
| Mobile | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Type=Neutral, Background Color=White, Mobile=False`)

- `RTL=False, Type=Neutral, Background Color=White, Mobile=False` [COMP] — 1024×132 · lay=V/MIN/MIN · pad=16 24 16 24 · gap=16 · r=8 · fill=Background/background-notification-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Notification/notification-gap, paddingLeft:Notification/notification-h-padding, paddingTop:Notification/notification-padding, paddingRight:Notification/notification-h-padding, paddingBottom:Notification/notification-padding, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
  - `Title` [FRAM] — 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Medium, Color=Gray, Style=Light, Circle=True** — 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `help-circle` [INST] ⟶ instance of **help-circle / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Text and supporting text` [FRAM] — 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
      - `Lead Text` [TEXT] — 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Helper Text` [TEXT] — 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×11
          - `Icon` [VECT] — 11×11 · fill=Icon/icon-default=#161616
  - `Actions` [FRAM] — 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False** — 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False** — 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
  - `Vertical line` [FRAM] — 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Neutral, Background Color=White, Mobile=False (+4 more) | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-notification-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Neutral, Background Color=Color, Mobile=False | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-neutral-25=#fcfcfd | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Info, Background Color=Color, Mobile=False | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-info-25=#f5faff | Border/border-info-light=#b2ddff 1 |  |
| RTL=False, Type=Destructive, Background Color=Color, Mobile=False | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-error-25=#fffbfa | Border/border-error-light=#fecdca 1 |  |
| RTL=False, Type=Warning, Background Color=Color, Mobile=False | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-warning-25=#fffcf5 | Border/border-warning-light=#fedf89 1 |  |
| RTL=False, Type=Success, Background Color=Color, Mobile=False | 1024×132 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-success-25=#f6fef9 | Border/border-success-light=#abefc6 1 |  |
| RTL=False, Type=Neutral, Background Color=White, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Info, Background Color=White, Mobile=True (+3 more) | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-notification-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Neutral, Background Color=Color, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-neutral-25=#fcfcfd | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Info, Background Color=Color, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-info-25=#f5faff | Border/border-info-light=#b2ddff 1 |  |
| RTL=False, Type=Destructive, Background Color=Color, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-error-25=#fffbfa | Border/border-error-light=#fecdca 1 |  |
| RTL=False, Type=Warning, Background Color=Color, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-warning-25=#fffcf5 | Border/border-warning-light=#fedf89 1 |  |
| RTL=False, Type=Success, Background Color=Color, Mobile=True | 343×252 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-success-25=#f6fef9 | Border/border-success-light=#abefc6 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Neutral, Background Color=White, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

**RTL=False, Type=Info, Background Color=White, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-info=#175cd3
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7

**RTL=False, Type=Destructive, Background Color=White, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-error=#b42318
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

**RTL=False, Type=Warning, Background Color=White, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-warning-light=#fffaeb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-02`: 20×20
- `Title › Featured icon › alert-02 › elements`: 18×17
- `Title › Featured icon › alert-02 › elements › Icon`: 18×17 · fill=Icon/icon-warning=#b54708
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803 · op=0.7

**RTL=False, Type=Success, Background Color=White, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-success-light=#ecfdf3 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › tick-02`: 20×20
- `Title › Featured icon › tick-02 › elements`: 13×10
- `Title › Featured icon › tick-02 › elements › Icon`: 13×10 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455 · op=0.7

**RTL=False, Type=Neutral, Background Color=Color, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

**RTL=False, Type=Info, Background Color=Color, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-info=#175cd3
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-info=#175cd3 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7

**RTL=False, Type=Destructive, Background Color=Color, Mobile=False**
- `Title`: 976×52 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 20×20
- `Title › Featured icon › help-circle › elements`: 18×18
- `Title › Featured icon › help-circle › elements › Icon`: 18×18 · fill=Icon/icon-error=#b42318
- `Title › Text and supporting text`: 880×52 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Title › Text and supporting text › Lead Text`: 880×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 880×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 976×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/buttons-group-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×132 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 40 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 30 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 30 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
