# Notification Toast — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `176:4256`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 176-4256

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Notifications Toast

> Notifications are peripheral messages in digital products that communicate information or feedback to the user. Notifications serve an essential function in product usability, but should be non-intrusive and avoid obscuring the interface. As a general rule, notifications should appear at the top or bottom, or near the corners of the UI.

> Resources

## Component sets on this page (1)

- **Notification Toast** — 10 variants · `1730:37567`

---
## Notification Toast

### Properties

| Property | Type / options |
|---|---|
| Actions | BOOLEAN=true |
| Helper Text | BOOLEAN=true |
| Close Button | BOOLEAN=true |
| Lead Text EN | TEXT=Alert message title  |
| Helper Text EN | TEXT=When a Notification/Alert need |
| Lead Text AR | TEXT=عنوان رسالة الاشعار أو التنبيه |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| RTL | VARIANT: True · False |
| Type | VARIANT: Neutral · Info · Critical/Error · Warning · Success |

### Anatomy (first variant: `RTL=False, Type=Neutral`)

- `RTL=False, Type=Neutral` [COMP] — 343×148 · lay=V/MIN/MIN · pad=16 24 16 24 · gap=16 · r=8 · fill=Background/background-card=#ffffff · fx=DROP_SHADOW(#10182824 0,32 b64 s-12) · tokens{itemSpacing:Notification/notification-gap, paddingLeft:Notification/notification-alert-h-padding, paddingTop:Notification/notification-toast-v-padding, paddingRight:Notification/notification-alert-h-padding, paddingBottom:Notification/notification-toast-v-padding, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Title` [FRAM] — 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Small, Color=Gray, Style=Light, Circle=True** — 32×32 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `help-circle` [INST] ⟶ instance of **help-circle / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 14×14
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default-400=#9da4ae
    - `Text and supporting text` [FRAM] — 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
      - `Lead Text` [TEXT] — 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
      - `Helper Text` [TEXT] — 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 13×13
          - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
  - `Actions` [FRAM] — 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
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
  - `Vertical line` [FRAM] — 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7 · tokens{itemSpacing:Global/spacing-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Neutral (+4 more) | 343×148 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-card=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Neutral**
- `Title`: 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Icon/icon-default-400=#9da4ae
- `Title › Text and supporting text`: 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Actions`: 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Info**
- `Title`: 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › help-circle`: 16×16
- `Title › Featured icon › help-circle › elements`: 14×14
- `Title › Featured icon › help-circle › elements › Icon`: 14×14 · fill=Icon/icon-info=#175cd3
- `Title › Text and supporting text`: 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Actions`: 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7

**RTL=False, Type=Critical/Error**
- `Title`: 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › add-circle`: 16×16
- `Title › Featured icon › add-circle › elements`: 14×14
- `Title › Featured icon › add-circle › elements › Icon`: 14×14 · fill=Icon/icon-error=#b42318
- `Title › Text and supporting text`: 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Actions`: 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

**RTL=False, Type=Warning**
- `Title`: 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-warning-light=#fffaeb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-01`: 16×16
- `Title › Featured icon › alert-01 › elements`: 14×14
- `Title › Featured icon › alert-01 › elements › Icon`: 14×14 · fill=Icon/icon-warning=#b54708
- `Title › Text and supporting text`: 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Actions`: 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803 · op=0.7

**RTL=False, Type=Success**
- `Title`: 295×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 32×32 · r=9999 · fill=Icon/Bg-icon-brand-light=#f3fcf6 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › tick-02`: 16×16
- `Title › Featured icon › tick-02 › elements`: 10×8
- `Title › Featured icon › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text`: 207×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4
- `Title › Text and supporting text › Lead Text`: 207×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Alert message title "
- `Title › Text and supporting text › Helper Text`: 207×40 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Actions`: 295×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Actions › Button#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455 · op=0.7

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/Medium/Hovered/False | **DISSOLVE 200ms LINEAR** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Small/Hovered/Subtle/False/False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Subtle/False/False | **INSTANT** | 10 |
