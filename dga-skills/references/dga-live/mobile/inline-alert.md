# Inline Alert — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `1730:46041`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 1730-46041

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Inline Alert

> Alerts are an important method of communicating with important users and providing feedback. Alerts can serve as informational messages, where they provide additional information to users that may not be tied to their current action or task. They can also be used to provide direct feedback to users and actions.

> Resources

## Component sets on this page (1)

- **Inline Alert** — 20 variants · `1730:46048`

---
## Inline Alert

### Properties

| Property | Type / options |
|---|---|
| Actions | BOOLEAN=true |
| Helper text | BOOLEAN=true |
| Close Button | BOOLEAN=true |
| Lead Text EN | TEXT=Alert message title  |
| Helper Text EN | TEXT=When a Notification/Alert need |
| Lead Text AR | TEXT=عنوان رسالة الاشعار أو التنبيه |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| RTL | VARIANT: False · True |
| Type | VARIANT: Neutral · Info · Destructive · Warning · Success |
| Background | VARIANT: White · Color |

### Anatomy (first variant: `RTL=False, Type=Neutral, Background=White`)

- `RTL=False, Type=Neutral, Background=White` [COMP] — 343×140 · lay=V/MIN/MIN · pad=16 16 16 16 · gap=8 · r=8 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Title` [FRAM] — 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Small, Color=Gray, Style=Light, Circle=True** — 32×32 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `help-circle` [INST] ⟶ instance of **help-circle / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 14×14
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default-400=#9da4ae
    - `Text and supporting text` [FRAM] — 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
      - `Lead Text` [TEXT] — 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
      - `Helper Text` [TEXT] — 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Small, State=Default, On-color=False** — 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 10×10
          - `Icon` [VECT] — 10×10 · fill=Icon/icon-default=#161616
  - `Actions` [FRAM] — 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO** — 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 8×12 · rot=-90
          - `Icon` [VECT] — 12×8 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 14×14
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Small, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO** — 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 8×12 · rot=-90
          - `Icon` [VECT] — 12×8 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 14×14
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
  - `Vertical line` [FRAM] — 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Neutral, Background=White (+4 more) | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Neutral, Background=Color | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-neutral-25=#fcfcfd | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, Type=Info, Background=Color | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-info-25=#f5faff | Border/border-info-light=#b2ddff 1 |  |
| RTL=False, Type=Destructive, Background=Color | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-error-25=#fffbfa | Border/border-error-light=#fecdca 1 |  |
| RTL=False, Type=Warning, Background=Color | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-warning-25=#fffcf5 | Border/border-secondary-light=#fcf3bd 1 |  |
| RTL=False, Type=Success, Background=Color | 343×140 | V/MIN/MIN · 16 16 16 16 · 8 | 8 | Background/background-success-25=#f6fef9 | Border/border-success-light=#abefc6 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Neutral, Background=White**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Icon/icon-default-400=#9da4ae
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

**RTL=False, Type=Info, Background=White**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Tag/tag-icon-info=#1849a9
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef

**RTL=False, Type=Destructive, Background=White**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › old-info-circle`: 16×16
- `Title › Featured icon › old-info-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.3333333730697632 · sa=CENTER
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20

**RTL=False, Type=Warning, Background=White**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-warning-light=#fffaeb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-01`: 16×16
- `Title › Featured icon › alert-01 › elements`: 14×14
- `Title › Featured icon › alert-01 › elements › Icon`: 14×14 · fill=Tag/tag-icon-warning=#93370d
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803

**RTL=False, Type=Success, Background=White**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-success-light=#ecfdf3 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › tick-02`: 16×16
- `Title › Featured icon › tick-02 › elements`: 10×8
- `Title › Featured icon › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455

**RTL=False, Type=Neutral, Background=Color**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Icon/icon-default-400=#9da4ae
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7

**RTL=False, Type=Info, Background=Color**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Tag/tag-icon-info=#1849a9
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef

**RTL=False, Type=Destructive, Background=Color**
- `Title`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › old-info-circle`: 16×16
- `Title › Featured icon › old-info-circle › Icon`: 13×13 · stroke=Icon/icon-error=#b42318 · sw=1.3333333730697632 · sa=CENTER
- `Title › Text and supporting text`: 231×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 231×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 231×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 24×24 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 16×16
- `Title › Button-Close › cancel-01 › elements`: 10×10
- `Title › Button-Close › cancel-01 › elements › Icon`: 10×10 · fill=Icon/icon-default=#161616
- `Actions`: 311×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/Small/Hovered/False | **DISSOLVE 200ms LINEAR** | 20 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Small/Hovered/Subtle/False/False | **INSTANT** | 20 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Subtle/False/False | **INSTANT** | 20 |
