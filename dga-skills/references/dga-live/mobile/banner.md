# Banner — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `2573:18301`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 2573-18301

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Banner

> An accordion groups sections of related content that can be opened and closed. Accordions decrease cognitive load by letting people choose which sections of content they see, like questions in an FAQ. Never put information that’s required for the current task inside an accordion. Consider a treatment that gives it more prominence.

> Resources

## Component sets on this page (1)

- **Banner** — 10 variants · `2551:52916`

---
## Banner

### Properties

| Property | Type / options |
|---|---|
| Lead Text | BOOLEAN=true |
| Link | BOOLEAN=false |
| Dismissible | BOOLEAN=true |
| Icon | BOOLEAN=true |
| Helper Text EN | TEXT=This is a very important banne |
| Helper Text AR | TEXT=رسالة لائحة رئيسية مهمة جداً ت |
| Lead Text AR | TEXT=مهم: |
| Lead Text EN | TEXT=Important: |
| Button | BOOLEAN=false |
| RTL | VARIANT: False · True |
| Style | VARIANT: Neutral · Critical · Warning · Success · Info |

### Anatomy (first variant: `RTL=False, Style=Critical`)

- `RTL=False, Style=Critical` [COMP] — 343×128 · lay=V/MIN/MIN · pad=8 16 8 16 · gap=8 · fill=Background/background-error-50=#fef3f2 · tokens{itemSpacing:Notification/notification-gap, paddingLeft:Notification/notification-toast-mobile-h-padding, paddingTop:Notification/notification-alert-v-padding, paddingRight:Notification/notification-toast-mobile-h-padding, paddingBottom:Notification/notification-alert-v-padding, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `Title` [FRAM] — 311×112 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
    - `Text and supporting text` [FRAM] — 311×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
      - `Title` [FRAM] — 287×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
        - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Container, Size=24, Ring=No** — 24×24
          - `bg` [VECT] — 22×22 · fill=Icon/icon-oncolor=#ffffff
          - `Icon` [VECT] — 22×22 · fill=Icon/icon-error=#b42318
        - `Lead Text` [TEXT] — 83×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
      - `Body` [FRAM] — 311×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
        - `Helper Text` [TEXT] — 311×48 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
        - `Frame 22` [FRAM] — 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
          - `Link` [INST] ⟶ instance of **Link / RTL=False, Size=Medium (16px), Style=Neutral, Inline=True, State=Default** *(hidden)* — 82×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · r=2 · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
          - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO** *(hidden)* — 74×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 13×13
          - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616
  - `Vertical line` [FRAM] — 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Style=Critical | 343×128 | V/MIN/MIN · 8 16 8 16 · 8 |  | Background/background-error-50=#fef3f2 |   |  |
| RTL=False, Style=Warning | 343×128 | V/MIN/MIN · 8 16 8 16 · 16 |  | Background/background-warning-50=#fffaeb |   |  |
| RTL=False, Style=Success | 343×128 | V/MIN/MIN · 8 16 8 16 · 16 |  | Background/background-success-50=#ecfdf3 |   |  |
| RTL=False, Style=Info | 343×128 | V/MIN/MIN · 8 16 8 16 · 16 |  | Background/background-info-50=#eff8ff |   |  |
| RTL=False, Style=Neutral | 343×128 | V/MIN/MIN · 8 16 8 16 · 16 |  | Background/background-neutral-50=#f9fafb |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Style=Critical**
- `Title`: 311×112 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
- `Title › Text and supporting text`: 311×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Title`: 287×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Title › Feedback Icon`: 24×24
- `Title › Text and supporting text › Title › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Title › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-error=#b42318
- `Title › Text and supporting text › Title › Lead Text`: 83×24 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
- `Title › Text and supporting text › Body`: 311×80 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Body › Helper Text`: 311×48 · fill=Text/text-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
- `Title › Text and supporting text › Body › Frame 22`: 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Vertical line`: 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-error=#d92d20 · op=0.7

**RTL=False, Style=Warning**
- `Title`: 311×112 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
- `Title › Text and supporting text`: 311×112 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Title`: 115×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Title › Feedback Icon`: 24×24
- `Title › Text and supporting text › Title › Feedback Icon › bg`: 22×19 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Title › Feedback Icon › Icon`: 22×19 · fill=Icon/icon-warning=#b54708
- `Title › Text and supporting text › Title › Lead Text`: 83×24 · fill=Text/text-warning=#b54708 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
- `Title › Text and supporting text › Body`: 311×80 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Body › Helper Text`: 311×48 · fill=Text/text-warning=#b54708 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
- `Title › Text and supporting text › Body › Frame 21`: 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Vertical line`: 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-warning=#dc6803 · op=0.7

**RTL=False, Style=Success**
- `Title`: 311×112 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
- `Title › Text and supporting text`: 311×112 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Title › Text and supporting text › Title`: 115×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Title › Feedback Icon`: 24×24
- `Title › Text and supporting text › Title › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Title › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-success=#067647
- `Title › Text and supporting text › Title › Lead Text`: 83×24 · fill=Text/text-success=#067647 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
- `Title › Text and supporting text › Body`: 311×80 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Body › Helper Text`: 311×48 · fill=Text/text-success=#067647 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
- `Title › Text and supporting text › Body › Frame 21`: 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Vertical line`: 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-success=#079455 · op=0.7

**RTL=False, Style=Info**
- `Title`: 311×112 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
- `Title › Text and supporting text`: 311×112 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Title › Text and supporting text › Frame 10`: 115×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Frame 10 › Feedback Icon`: 24×24
- `Title › Text and supporting text › Frame 10 › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Frame 10 › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-info=#175cd3
- `Title › Text and supporting text › Frame 10 › Lead Text`: 83×24 · fill=Text/text-info=#175cd3 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
- `Title › Text and supporting text › Frame 14`: 311×80 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Frame 14 › Helper Text`: 311×48 · fill=Text/text-info=#175cd3 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
- `Title › Text and supporting text › Frame 14 › Frame 22`: 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Vertical line`: 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-info=#1570ef · op=0.7

**RTL=False, Style=Neutral**
- `Title`: 311×112 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, paddingLeft:spacing-none, paddingRight:spacing-none}
- `Title › Text and supporting text`: 311×112 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Title › Text and supporting text › Frame 11`: 115×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Frame 11 › Feedback Icon`: 24×24
- `Title › Text and supporting text › Frame 11 › Feedback Icon › bg`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Title › Text and supporting text › Frame 11 › Feedback Icon › Icon`: 22×22 · fill=Icon/icon-neutral=#384250
- `Title › Text and supporting text › Frame 11 › Lead Text`: 83×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="Important:"
- `Title › Text and supporting text › Frame 13`: 311×80 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8
- `Title › Text and supporting text › Frame 13 › Helper Text`: 311×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="This is a very important banne"
- `Title › Text and supporting text › Frame 13 › Frame 22`: 311×24 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Vertical line`: 343×2 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · fill=Background/background-black=#161616 · op=0.7

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/Medium/Hovered/False | **DISSOLVE 200ms LINEAR** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link/True/Medium (16px)/Neutral/True/Hovered | **INSTANT** | 1 |
