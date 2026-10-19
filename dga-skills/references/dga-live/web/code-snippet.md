# Code Snippet — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `18613:449`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 18613-449

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Code Snippet

> The Code Snippet component is a UI element used to display blocks of code in a readable and formatted way. It's commonly used in documentation, developer tools, or programming tutorials to showcase code examples.

> Resources

## Component sets on this page (1)

- **Code Snippet** — 2 variants · `18632:730`

---
## Code Snippet

**Description (component description field):**

> The Code Snippet component is a UI element designed to display blocks of code within an interface in a visually structured and organized manner.

### Properties

| Property | Type / options |
|---|---|
| Show Sidebar | BOOLEAN=true |
| Show Tab List | BOOLEAN=true |
| Show Button | BOOLEAN=true |
| Type | VARIANT: Multi-Line · Single-Line |

### Anatomy (first variant: `Type=Multi-Line`)

- `Type=Multi-Line` [COMP] — 743×587 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=0 · r=16 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
  - `Horizontal Tab List` [INST] ⟶ instance of **Horizontal Tab List / RTL=False, Size=Large, Tab Icons=True, Flush=False** — 743×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Divider` [RECT] — 743×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Tabs` [FRAM] — 370×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=True, More Tab=No** — 64×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 32×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Java" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Selection indicator` [FRAM] — 64×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
          - `Selector` [RECT] — 32×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=False, More Tab=No** — 78×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 46×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 46×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Python"
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=False, More Tab=No** — 41×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 9×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 9×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="C"
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=False, More Tab=No** — 58×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 26×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="C++"
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=False, More Tab=No** — 69×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 37×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="HTML"
      - `Horizontal Tab` [INST] ⟶ instance of **Horizontal Tab / RTL=False, State=Default, Size=Large, Selected=False, More Tab=No** — 60×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **home-05 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
          - `Icon` [VECT] — 14×14 · fill=Icon/icon-default=#161616
        - `Tab title` [FRAM] — 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="PHP"
  - `Frame 1` [FRAM] — 743×535 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Sidebar` [FRAM] — 68×535 · lay=V/MIN/MIN · pad=24 24 24 24 · gap=0 · fill=Background/background-neutral-50=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=0 1 0 0 · sa=INSIDE · tokens{paddingLeft:spacing-3xl, paddingTop:spacing-3xl, paddingRight:spacing-3xl, paddingBottom:spacing-3xl}
      - `Line numbers` [TEXT] — 20×439 · fill=Colors/Text/text-quarterary (500)=#667085 · font=mixed · fs=16 · lh=auto · txt="1
2
3
4
5
6
7
8
9
10
11
12
13
"
    - `Content` [FRAM] — 675×535 · lay=V/MAX/MAX · pad=24 24 32 24 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-3xl, paddingTop:spacing-3xl, paddingRight:spacing-3xl, paddingBottom:spacing-4xl}
      - `Frame 669` [FRAM] — 627×439 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
        - `Code` [TEXT] — 587×439 · font=mixed · fs=16 · lh=auto · txt="// Imports
import mongoose, { "
        - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `copy-01` [INST] ⟶ instance of **copy-01 / Style=Stroke, Type=Rounded** — 24×24
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Subtle, Destructive=no, Icon only=False, On-color=False** — 120×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Leading Icon` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 11×6
        - `Text wrapper` [FRAM] — 72×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 72×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Show More" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trailing icon` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 11×6

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Multi-Line | 743×587 | V/CENTER/MAX · 0 0 0 0 · 0 | 16 | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 1 |  |
| Type=Single-Line | 743×80 | H/MIN/CENTER · 24 24 24 24 · 24 | 16 | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Multi-Line**
- `Horizontal Tab List`: 743×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Divider`: 743×3 · r=9999 · fill=Border/border-neutral-primary=#d2d6db · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Horizontal Tab List › Tabs`: 370×52 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab`: 64×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title`: 32×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text`: 32×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Bold · txt="Java" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-bold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Selection indicator`: 64×3 · lay=V/CENTER/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `Horizontal Tab List › Tabs › Horizontal Tab › Selection indicator › Selector`: 32×3 · r=9999 · fill=Border/border-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Horizontal Tab List › Tabs › Horizontal Tab#2`: 78×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title#2`: 46×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text#2`: 46×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Python"
- `Horizontal Tab List › Tabs › Horizontal Tab#3`: 41×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title#3`: 9×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text#3`: 9×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="C"
- `Horizontal Tab List › Tabs › Horizontal Tab#4`: 58×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title#4`: 26×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text#4`: 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="C++"
- `Horizontal Tab List › Tabs › Horizontal Tab#5`: 69×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title#5`: 37×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text#5`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="HTML"
- `Horizontal Tab List › Tabs › Horizontal Tab#6`: 60×52 · lay=H/CENTER/CENTER · pad=16 16 16 16 · gap=4 · r=4 · tokens{itemSpacing:Tab/tab-button-gap, paddingLeft:Tab/horizontal-tab-md-button-h-padding, paddingTop:Tab/horizontal-tab-md-button-h-padding, paddingRight:Tab/horizontal-tab-md-button-h-padding, paddingBottom:Tab/horizontal-tab-md-button-h-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title#6`: 28×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Horizontal Tab List › Tabs › Horizontal Tab › Tab title › Text#6`: 28×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="PHP"
- `Frame 1`: 743×535 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 1 › Sidebar`: 68×535 · lay=V/MIN/MIN · pad=24 24 24 24 · gap=0 · fill=Background/background-neutral-50=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=0 1 0 0 · sa=INSIDE · tokens{paddingLeft:spacing-3xl, paddingTop:spacing-3xl, paddingRight:spacing-3xl, paddingBottom:spacing-3xl}
- `Frame 1 › Sidebar › Line numbers`: 20×439 · fill=Colors/Text/text-quarterary (500)=#667085 · font=mixed · fs=16 · lh=auto · txt="1
2
3
4
5
6
7
8
9
10
11
12
13
"
- `Frame 1 › Content`: 675×535 · lay=V/MAX/MAX · pad=24 24 32 24 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:spacing-3xl, paddingTop:spacing-3xl, paddingRight:spacing-3xl, paddingBottom:spacing-4xl}
- `Frame 1 › Content › Frame 669`: 627×439 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 1 › Content › Frame 669 › Code`: 587×439 · font=mixed · fs=16 · lh=auto · txt="// Imports
import mongoose, { "
- `Frame 1 › Content › Frame 669 › Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1 › Content › Frame 669 › Button › copy-01`: 24×24
- `Frame 1 › Content › Frame 669 › Button › copy-01 › elements`: 22×22
- `Frame 1 › Content › Frame 669 › Button › copy-01 › elements › Icon`: 22×22 · fill=Icon/icon-default=#161616
- `Frame 1 › Content › Button`: 120×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1 › Content › Button › Text wrapper`: 72×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 1 › Content › Button › Text wrapper › Text`: 72×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Show More" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 3 more layers (data JSON)

**Type=Single-Line**
- `Frame 668`: 639×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=12
- `Frame 668 › npm`: 29×24 · fill=Text/text-secondary=#dba102 · font=Roboto Mono Regular · fs=16 · lh=24 · txt="npm"
- `Frame 668 › npm install nds-design-system@^0.0.1`: 346×24 · fill=Text/text-primary=#1b8354 · font=Roboto Mono Regular · fs=16 · lh=24 · txt="npm install nds-design-system@"
- `Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 20×20
- `Button › Leading Icon › elements`: 18×18
- `Button › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Horizontal Tab ⟶ Horizontal Tab :: RTL=False, State=Hovered, Size=Large, Selected=False, More Tab=No | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 1 |
