# Notification — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `2573:18301`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 2573-18301

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Notification

> Notifications are essential tools for conveying information to users about updates or changes within the system. They are categorized into inline, toast, and actionable notifications, each serving distinct purposes within user interactions.

> Resources

## Component sets on this page (1)

- **Notification** — 10 variants · `30150:56889`

---
## Notification

**Description (component description field):**

> Notifications are prominent UI elements used to convey important information or alerts to users. They typically appear at the top of a webpage or application screen, drawing immediate attention to their content.

### Properties

| Property | Type / options |
|---|---|
| Lead Text | BOOLEAN=true |
| Link | BOOLEAN=false |
| Dismissible | BOOLEAN=true |
| Icon | BOOLEAN=true |
| Button | BOOLEAN=false |
| Helper Text EN | TEXT=This is a very important banne |
| Lead Text EN | TEXT=Important: |
| Lead Text AR | TEXT=مهم: |
| Helper Text AR | TEXT=هذه رسالة تنبيهية مهمة للغاية  |
| RTL | VARIANT: False · True |
| Style | VARIANT: Neutral · Critical · Warning · Success · Info |

### Anatomy (first variant: `RTL=False, Style=Critical`)

- `RTL=False, Style=Critical` [COMP] — 1280×56 · lay=V/MIN/MIN · pad=8 24 8 24 · gap=16 · r=2 · fill=Background/background-error-50=#fef3f2 · tokens{itemSpacing:Notification/notification-gap, paddingLeft:Notification/notification-h-padding, paddingTop:Notification/notification-alert-v-padding, paddingRight:Notification/notification-h-padding, paddingBottom:Notification/notification-alert-v-padding, topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}
  - `Title` [FRAM] — 1232×40 · lay=H/MIN/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
    - `Text and supporting text` [FRAM] — 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Container, Size=24, Ring=No** — 24×24
        - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
        - `Icon` [VECT] — 22×22 · fill=Icon/icon-error=#b42318
      - `Lead Text` [TEXT] — 83×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Helper Text` [TEXT] — 916×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Actions` [FRAM] — 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
        - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Default, Style=Neutral, Size=Medium, Inline=True** *(hidden)* — 82×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Link/link-md-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
          - `Link Text` [TEXT] — 82×24 · fill=Link/link-neutral=#384250 · font=IBM Plex Sans Arabic Regular · fs=16 · lh=24 · ts=Text md/Regular underlined · txt="Learn more" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
          - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False** *(hidden)* — 137×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `Text wrapper` [FRAM] — 89×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×11
          - `Icon` [VECT] — 11×11 · fill=Icon/icon-default=#161616
  - `Vertical line` [FRAM] — 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Style=Critical | 1280×56 | V/MIN/MIN · 8 24 8 24 · 16 | 2 | Background/background-error-50=#fef3f2 |   |  |
| RTL=False, Style=Warning | 1280×56 | V/MIN/MIN · 8 24 8 24 · 16 | 2 | Background/background-warning-50=#fffaeb |   |  |
| RTL=False, Style=Success | 1280×56 | V/MIN/MIN · 8 24 8 24 · 16 | 2 | Background/background-success-50=#ecfdf3 |   |  |
| RTL=False, Style=Info | 1280×56 | V/MIN/MIN · 8 24 8 24 · 16 | 2 | Background/background-info-50=#eff8ff |   |  |
| RTL=False, Style=Neutral | 1280×56 | V/MIN/MIN · 8 24 8 24 · 16 | 2 | Background/background-neutral-50=#f9fafb |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Style=Critical**
- `Title`: 1232×40 · lay=H/MIN/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
- `Title › Text and supporting text`: 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
- `Title › Text and supporting text › Feedback Icon`: 24×24
- `Title › Text and supporting text › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-error=#b42318
- `Title › Text and supporting text › Lead Text`: 83×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 916×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Actions`: 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Vertical line`: 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

**RTL=False, Style=Warning**
- `Title`: 1232×40 · lay=H/CENTER/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
- `Title › Text and supporting text`: 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
- `Title › Text and supporting text › Feedback Icon`: 24×24
- `Title › Text and supporting text › Feedback Icon › bg`: 22×19 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Feedback Icon › Icon`: 22×19 · fill=Icon/icon-warning=#b54708
- `Title › Text and supporting text › Lead Text`: 83×24 · fill=Text/text-warning=#b54708 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 916×24 · fill=Text/text-warning=#b54708 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Actions`: 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Vertical line`: 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803 · op=0.6

**RTL=False, Style=Success**
- `Title`: 1232×40 · lay=H/CENTER/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
- `Title › Text and supporting text`: 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
- `Title › Text and supporting text › Feedback Icon`: 24×24
- `Title › Text and supporting text › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text › Lead Text`: 83×24 · fill=Text/text-success=#067647 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 916×24 · fill=Text/text-success=#067647 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Actions`: 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Vertical line`: 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455 · op=0.6

**RTL=False, Style=Info**
- `Title`: 1232×40 · lay=H/CENTER/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
- `Title › Text and supporting text`: 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
- `Title › Text and supporting text › Feedback Icon`: 24×24
- `Title › Text and supporting text › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-info=#175cd3
- `Title › Text and supporting text › Lead Text`: 83×24 · fill=Text/text-info=#175cd3 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 916×24 · fill=Text/text-info=#175cd3 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Actions`: 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Vertical line`: 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.6

**RTL=False, Style=Neutral**
- `Title`: 1232×40 · lay=H/CENTER/CENTER · pad=0 24 0 24 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:Global/spacing-3xl, paddingRight:Global/spacing-3xl}
- `Title › Text and supporting text`: 1184×40 · lay=H/MIN/CENTER/wrap · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, counterAxisSpacing:Global/spacing-md}
- `Title › Text and supporting text › Feedback Icon`: 24×24
- `Title › Text and supporting text › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-neutral=#384250
- `Title › Text and supporting text › Lead Text`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Helper Text`: 916×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Title › Text and supporting text › Actions`: 137×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Button-Close › multiplication-sign`: 20×20
- `Title › Button-Close › multiplication-sign › elements`: 11×11
- `Title › Button-Close › multiplication-sign › elements › Icon`: 11×11 · fill=Icon/icon-default=#161616
- `Vertical line`: 1280×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-black=#161616 · op=0.6

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=Medium, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 10 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Medium, Inline=True | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Medium, Inline=True | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 5 |
