# Notification Toast — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `8680:37365`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 8680-37365

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Notifications Toast

> Notifications are peripheral messages in digital products that communicate information or feedback to the user. Notifications serve an essential function in product usability, but should be non-intrusive and avoid obscuring the interface. As a general rule, notifications should appear at the top or bottom, or near the corners of the UI.

> Resources

## Component sets on this page (1)

- **Notification Toast** — 20 variants · `8680:37527`

---
## Notification Toast

**Description (component description field):**

> These are transient, non-modal messages that appear at the top of the screen to provide brief alerts, disappearing after a set duration.

### Properties

| Property | Type / options |
|---|---|
| Actions | BOOLEAN=true |
| Helper Text | BOOLEAN=true |
| Close Button | BOOLEAN=true |
| Lead Text EN | TEXT=Notification/Alert message tit |
| Helper Text EN | TEXT=When a Notification/Alert need |
| Lead Text AR | TEXT=عنوان رسالة الاشعار أو التنبيه |
| Helper Text AR | TEXT=يكتب المحتوى الإضافي هنا في حا |
| Secondary Action | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Type | VARIANT: Neutral · Info · Critical/Error · Warning · Success |
| Mobile | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Type=Neutral, Mobile=False`)

- `RTL=False, Type=Neutral, Mobile=False` [COMP] — 484×148 · lay=V/MIN/MIN · pad=16 24 16 24 · gap=16 · r=8 · fill=Background/background-notification-white=#ffffff · fx=DROP_SHADOW(#10182824 0,32 b64 s-12) · tokens{itemSpacing:Notification/notification-gap, paddingLeft:Notification/notification-toast-desktop-h-padding, paddingTop:Notification/notification-toast-v-padding, paddingRight:Notification/notification-toast-desktop-h-padding, paddingBottom:Notification/notification-toast-v-padding, topLeftRadius:radius-md, topRightRadius:radius-md, bottomLeftRadius:radius-md, bottomRightRadius:radius-md}
  - `Title` [FRAM] — 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Medium, Color=Gray, Style=Light, Circle=True** — 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `information-circle` [INST] ⟶ instance of **information-circle / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Text and supporting text` [FRAM] — 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
      - `Lead Text` [TEXT] — 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Helper Text` [TEXT] — 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×11
          - `Icon` [VECT] — 11×11 · fill=Icon/icon-default=#161616
  - `Actions` [FRAM] — 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
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
  - `Vertical line` [FRAM] — 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7 · tokens{itemSpacing:Global/spacing-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Neutral, Mobile=False (+4 more) | 484×148 | V/MIN/MIN · 16 24 16 24 · 16 | 8 | Background/background-notification-white=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |
| RTL=False, Type=Neutral, Mobile=True (+4 more) | 343×260 | V/MIN/MIN · 16 16 16 16 · 16 | 8 | Background/background-notification-white=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Neutral, Mobile=False**
- `Title`: 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Text and supporting text`: 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Info, Mobile=False**
- `Title`: 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-info=#175cd3 · stroke=Icon/icon-info=#175cd3 · sw=0 · sa=CENTER
- `Title › Text and supporting text`: 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Critical/Error, Mobile=False**
- `Title`: 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-02`: 20×20
- `Title › Featured icon › alert-02 › elements`: 18×17
- `Title › Featured icon › alert-02 › elements › Icon`: 18×17 · fill=Background/background-error=#d92d20
- `Title › Text and supporting text`: 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Warning, Mobile=False**
- `Title`: 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-warning-light=#fffaeb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-circle`: 20×20
- `Title › Featured icon › alert-circle › elements`: 18×18
- `Title › Featured icon › alert-circle › elements › Icon`: 18×18 · fill=Icon/icon-warning=#b54708
- `Title › Text and supporting text`: 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803 · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Success, Mobile=False**
- `Title`: 436×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-success-light=#ecfdf3 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › checkmark-circle-02`: 20×20
- `Title › Featured icon › checkmark-circle-02 › elements`: 18×18
- `Title › Featured icon › checkmark-circle-02 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text`: 340×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 340×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 340×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Actions`: 436×32 · lay=H/MIN/MIN · pad=0 40 0 40 · gap=8 · tokens{itemSpacing:Button/button-menu-gap, paddingLeft:Global/spacing-5xl, paddingRight:Global/spacing-5xl}
- `Actions › Button`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions › Button#2`: 68×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Vertical line`: 8×148 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455 · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Neutral, Mobile=True**
- `Title`: 311×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Title › Featured icon`: 40×40 · r=9999 · fill=Background/background-neutral-50=#f9fafb · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Title#2`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Text and supporting text`: 311×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 311×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions`: 311×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/button-menu-gap}
- `Actions › Button`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical line`: 343×8 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-neutral-200=#e5e7eb · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Info, Mobile=True**
- `Title`: 311×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-info-light=#eff8ff · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › information-circle`: 20×20
- `Title › Featured icon › information-circle › elements`: 18×18
- `Title › Featured icon › information-circle › elements › Icon`: 18×18 · fill=Icon/icon-info=#175cd3 · stroke=Icon/icon-info=#175cd3 · sw=0 · sa=CENTER
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Title#2`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Text and supporting text`: 311×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 311×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions`: 311×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/button-menu-gap}
- `Actions › Button`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical line`: 343×8 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7 · tokens{itemSpacing:Global/spacing-md}

**RTL=False, Type=Critical/Error, Mobile=True**
- `Title`: 311×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Title › Featured icon`: 40×40 · r=9999 · fill=Icon/background-error-light=#fef3f2 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Featured icon › alert-02`: 20×20
- `Title › Featured icon › alert-02 › elements`: 18×17
- `Title › Featured icon › alert-02 › elements › Icon`: 18×17 · fill=Background/background-error=#d92d20
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Title#2`: 311×68 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Title › Text and supporting text`: 311×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Title › Text and supporting text › Lead Text`: 311×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Semibold · txt="Notification/Alert message tit" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 311×40 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Notification/Alert need" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Actions`: 311×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Button/button-menu-gap}
- `Actions › Button`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Actions › Button#2`: 311×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Actions › Button › Text wrapper#2`: 50×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Actions › Button › Text wrapper › Text#2`: 50×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Button" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Vertical line`: 343×8 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7 · tokens{itemSpacing:Global/spacing-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 20 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
