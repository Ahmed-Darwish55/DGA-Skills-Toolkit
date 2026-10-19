# Modals — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `172:4293`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 172-4293

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Modals

> A modal is a secondary window that communicates or provides an action inside the same process. They’re incredibly useful for communicating additional information, collecting information, or directing users without forcing them to leave the page. When modals are used unnecessarily, they can become intrusive and annoying for the user. Nobody likes pop-ups.

> Resources

> Examples in use

> Below are some example of these components in use.

> Modals Elements

## Component sets on this page (5)

- **Modal** — 2 variants · `1823:27452`
- **Modal Header** — 4 variants · `1823:27407`
- **Modal Actions** — 4 variants · `1823:26717`
- **Modal Body** — 6 variants · `1823:28654`
- **Swap Placeholder** — 1 variants · `1823:28658`

---
## Modal

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Mobile | VARIANT: False |

### Anatomy (first variant: `RTL=False, Mobile=False`)

- `RTL=False, Mobile=False` [COMP] — 375×430 · lay=V/MIN/MIN · pad=8 16 8 16 · gap=8 · r=16 16 0 0 · fill=Background/background-menu=#ffffff · fx=DROP_SHADOW(#10182824 0,32 b64 s-12) · tokens{itemSpacing:Model/modal-gap, paddingLeft:Model/modal-padding, paddingTop:Model/modal-content-bottom-padding, paddingRight:Model/modal-padding, paddingBottom:Model/modal-content-bottom-padding, topLeftRadius:radius-lg, topRightRadius:radius-lg, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `Modal Header` [INST] ⟶ instance of **Modal Header / RTL=False, Actions=False** — 343×52 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
    - `Handle` [INST] ⟶ instance of **Handle / Orientation=Bottom-sheet** — 343×12 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
      - `Handle` [RECT] — 36×4 · r=2 · fill=Border/border-neutral-primary=#d2d6db
    - `Title` [FRAM] — 343×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
      - `Lead Text` [TEXT] — 200×20 · fill=Form/text-form-title=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Title goes here"
      - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 13×13
  - `Modal Body` [INST] ⟶ instance of **Modal Body / RTL=False, Center Align=False, Content=Placeholder** — 343×282 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `Swap Placeholder` [INST] ⟶ instance of **Swap Placeholder** — 343×282 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Helper Text` [TEXT] — 237×20 · fill=Text/text-brand-primary=#14573a · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT"
  - `Modal Actions` [INST] ⟶ instance of **Modal Actions / RTL=False, Stack=True** — 343×64 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Frame 19` [FRAM] — 343×40 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
      - `Primary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO** — 343×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
        - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
      - `Secondary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO** *(hidden)* — 480×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
        - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
      - `Tertiary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Icon only=False, On-color=False, Destructive=NO** *(hidden)* — 480×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
        - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
        - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18
    - `Home indicator` [FRAM] — 343×24
      - `Home indicator` [RECT] — 134×5 · r=100 · fill=Background/background-black=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Mobile=False | 375×430 | V/MIN/MIN · 8 16 8 16 · 8 | 16 16 0 0 | Background/background-menu=#ffffff |   | DROP_SHADOW(#10182824 0,32 b64 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Mobile=False**
- `Modal Header`: 343×52 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `Modal Header › Handle`: 343×12 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Modal Header › Handle › Handle`: 36×4 · r=2 · fill=Border/border-neutral-primary=#d2d6db
- `Modal Header › Title`: 343×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Modal Header › Title › Lead Text`: 200×20 · fill=Form/text-form-title=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Title goes here"
- `Modal Header › Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Modal Header › Title › Button-Close › cancel-01`: 20×20
- `Modal Header › Title › Button-Close › cancel-01 › elements`: 13×13
- `Modal Header › Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616
- `Modal Body`: 343×282 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Modal Body › Swap Placeholder`: 343×282 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Modal Body › Swap Placeholder › Helper Text`: 237×20 · fill=Text/text-brand-primary=#14573a · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT"
- `Modal Actions`: 343×64 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Modal Actions › Frame 19`: 343×40 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `Modal Actions › Frame 19 › Primary Action`: 343×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Modal Actions › Frame 19 › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Modal Actions › Frame 19 › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Modal Actions › Home indicator`: 343×24
- `Modal Actions › Home indicator › Home indicator`: 134×5 · r=100 · fill=Background/background-black=#161616

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Modal Header

### Properties

| Property | Type / options |
|---|---|
| Title EN | TEXT=Title goes here |
| Title AR | TEXT=عنوان الرسالة يُكتب هنا |
| RTL | VARIANT: False · True |
| Actions | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Actions=False`)

- `RTL=False, Actions=False` [COMP] — 480×52 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
  - `Handle` [INST] ⟶ instance of **Handle / Orientation=Bottom-sheet** — 480×12 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
    - `Handle` [RECT] — 36×4 · r=2 · fill=Border/border-neutral-primary=#d2d6db
  - `Title` [FRAM] — 480×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
    - `Lead Text` [TEXT] — 200×20 · fill=Form/text-form-title=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Title goes here"
    - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=Medium, State=Default, On-color=False** — 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 13×13
          - `Icon` [VECT] — 13×13 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Actions=False (+1 more) | 480×52 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Actions=False**
- `Handle`: 480×12 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Handle › Handle`: 36×4 · r=2 · fill=Border/border-neutral-primary=#d2d6db
- `Title`: 480×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8
- `Title › Lead Text`: 200×20 · fill=Form/text-form-title=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Title goes here"
- `Title › Button-Close`: 32×32 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Title › Button-Close › cancel-01`: 20×20
- `Title › Button-Close › cancel-01 › elements`: 13×13
- `Title › Button-Close › cancel-01 › elements › Icon`: 13×13 · fill=Icon/icon-default=#161616

**RTL=False, Actions=True**
- `Handle`: 480×12 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Handle › Handle`: 36×4 · r=2 · fill=Border/border-neutral-primary=#d2d6db
- `Title`: 480×32 · lay=H/SPACE_BETWEEN/CENTER · pad=0 0 0 0 · gap=8
- `Title › Primary Action`: 74×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Primary Action › arrow-right-02`: 16×16
- `Title › Primary Action › arrow-right-02 › elements`: 8×12 · rot=-90
- `Title › Primary Action › arrow-right-02 › elements › Icon`: 12×8 · fill=Icon/icon-default=#161616
- `Title › Primary Action › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Title › Primary Action › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"
- `Title › Lead Text`: 200×20 · fill=Form/text-form-title=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Title goes here"
- `Title › Primary Action#2`: 54×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Title › Primary Action › Text wrapper#2`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Title › Primary Action › Text wrapper › Text#2`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Button"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button/False/Small/Hovered/Subtle/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button/True/Small/Hovered/Subtle/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/Medium/Hovered/False | **DISSOLVE 200ms LINEAR** | 1 |

---
## Modal Actions

### Properties

| Property | Type / options |
|---|---|
| Secondary Action | BOOLEAN=true |
| Tertiary Action | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Stack | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Stack=False`)

- `RTL=False, Stack=False` [COMP] — 480×64 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0
  - `Frame 21` [FRAM] — 480×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
    - `Secondary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Outline, Icon only=False, On-color=False, Destructive=NO** — 236×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
    - `Primary Action` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO** — 236×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-oncolor=#ffffff
      - `Text wrapper` [FRAM] — 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff
  - `Home indicator` [FRAM] — 480×24
    - `Home indicator` [RECT] — 134×5 · r=100 · fill=Background/background-black=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Stack=False | 480×64 | V/CENTER/CENTER · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Stack=True | 480×160 | V/MIN/CENTER · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Stack=False**
- `Frame 21`: 480×40 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `Frame 21 › Secondary Action`: 236×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 21 › Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 21 › Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Frame 21 › Primary Action`: 236×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 21 › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 21 › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Home indicator`: 480×24
- `Home indicator › Home indicator`: 134×5 · r=100 · fill=Background/background-black=#161616

**RTL=False, Stack=True**
- `Frame 19`: 480×136 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Model/modal-gap}
- `Frame 19 › Primary Action`: 480×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 19 › Primary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 19 › Primary Action › Text wrapper › Text`: 44×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Frame 19 › Secondary Action`: 480×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 19 › Secondary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 19 › Secondary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Frame 19 › Tertiary Action`: 480×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 19 › Tertiary Action › Text wrapper`: 44×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 19 › Tertiary Action › Text wrapper › Text`: 44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Button"
- `Home indicator`: 480×24
- `Home indicator › Home indicator`: 134×5 · r=100 · fill=Background/background-black=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button/False/Medium/Hovered/Secondary-Outline/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button/False/Medium/Hovered/Primary-Neutral/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Primary Action ⟶ Button/True/Medium/Hovered/Primary-Neutral/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Secondary Action ⟶ Button/True/Medium/Hovered/Secondary-Outline/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button/False/Medium/Hovered/Subtle/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Tertiary Action ⟶ Button/True/Medium/Hovered/Subtle/False/False | **INSTANT** | 1 |

---
## Modal Body

### Properties

| Property | Type / options |
|---|---|
| 🔁 Content Swap | INSTANCE_SWAP=1823:28658 |
| RTL | VARIANT: False · True |
| Center Align | VARIANT: False · True |
| Content | VARIANT: Text · Placeholder |

### Anatomy (first variant: `RTL=False, Center Align=False, Content=Text`)

- `RTL=False, Center Align=False, Content=Text` [COMP] — 480×36 · lay=V/MIN/MIN · pad=0 0 16 0 · gap=8 · tokens{paddingBottom:Model/modal-content-bottom-padding}
  - `Helper Text` [TEXT] — 480×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Center Align=False, Content=Text | 480×36 | V/MIN/MIN · 0 0 16 0 · 8 |  |  |   |  |
| RTL=False, Center Align=True, Content=Text | 480×36 | V/MIN/CENTER · 0 0 16 0 · 8 |  |  |   |  |
| RTL=False, Center Align=False, Content=Placeholder | 480×52 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Center Align=False, Content=Text**
- `Helper Text`: 480×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d"

**RTL=False, Center Align=True, Content=Text**
- `Helper Text`: 480×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="When a Modal needs a further d"

**RTL=False, Center Align=False, Content=Placeholder**
- `Swap Placeholder`: 480×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Swap Placeholder › Helper Text`: 237×20 · fill=Text/text-brand-primary=#14573a · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT"

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Swap Placeholder

*Single component (not a component set) — it has no variants; count = 1 by definition.*

### Anatomy (first variant: `Swap Placeholder`)

- `Swap Placeholder` [COMP] — 269×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=8 · r=4 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=1 · sa=INSIDE · dash=2,2 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xl, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Helper Text` [TEXT] — 237×20 · fill=Text/text-brand-primary=#14573a · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="SWAP WITH CONTENT COMPONENT"

### Interactions & motion

*No prototype reactions defined on this component set.*
