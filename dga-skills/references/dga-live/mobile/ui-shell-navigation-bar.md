# UI Shell - Navigation Bar — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `8335:15199`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 8335-15199

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Top Bar

> The Top Bar, also known as the App Bar or Navigation Bar, is a component positioned at the top of a mobile or web application. It provides essential navigational and interactive elements, helping users to quickly access core functionalities and information.

> Resources

## Component sets on this page (1)

- **Top Bar** — 10 variants · `8335:15376`

---
## Top Bar

### Properties

| Property | Type / options |
|---|---|
| Show Info Text | BOOLEAN=true |
| Title EN | TEXT=Title |
| Info Text EN | TEXT=Info Text if needed |
| Title AR | TEXT=عنوان |
| Info Text AR | TEXT=يكون وصف الشاشة هنا |
| RTL | VARIANT: True · False |
| Style | VARIANT: Three Actions · Two Actions · Text Actions · Title · Logo |
| Usage | VARIANT: Internal Top Bar · Main Top Bar |

### Anatomy (first variant: `RTL=False, Style=Three Actions, Usage=Internal Top Bar`)

- `RTL=False, Style=Three Actions, Usage=Internal Top Bar` [COMP] — 375×102 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-secondary=#e5e7eb · sw=0 0 1 0 · sa=INSIDE
  - `Button` [INST] ⟶ instance of **Button / Property 1=Icon** *(hidden)* — 40×38
    - `Rectangle` [RECT] — 40×38 · r=10 · fill=#ffffff · stroke=#eaeff3 · sw=1 · sa=INSIDE
    - `Icon / Wishlist` [INST] ⟶ instance of **Icon / Wishlist** — 24×23
      - `Vector` [VECT] — 24×23
      - `Vector` [VECT] — 20×18 · stroke=#121826 · sw=1.5 · sa=CENTER
  - `Bars / Statusbar` [FRAM] — 375×44
    - `iPhone X/Status Bars/Status Bar (Black)` [FRAM] — 375×44
      - `Rectangle` [RECT] — 375×44
      - `Battery` [GROU] — 24×11
        - `Border` [RECT] — 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
        - `Cap` [VECT] — 1×4 · fill=Text/text-default=#161616 · op=0.4
        - `Capacity` [RECT] — 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
      - `Wifi` [BOOL] — 15×11 · fill=Text/text-default=#161616
        - `Wifi-path` [VECT] — 15×5 · fill=#000000
        - `Wifi-path` [VECT] — 10×4 · fill=#000000
        - `Wifi-path` [VECT] — 5×3 · fill=#000000
      - `Cellular Connection` [BOOL] — 17×11 · fill=Text/text-default=#161616
        - `Cellular_Connection-path` [VECT] — 3×4 · fill=#000000
        - `Cellular_Connection-path` [VECT] — 3×6 · fill=#000000
        - `Cellular_Connection-path` [VECT] — 3×8 · fill=#000000
        - `Cellular_Connection-path` [VECT] — 3×11 · fill=#000000
      - `Time Style` [FRAM] — 54×21
        - `↳ Time` [TEXT] — 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
  - `Frame 1000007783` [FRAM] — 375×58 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 12 · gap=86 · tokens{paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
    - `Frame 1000007785` [FRAM] — 72×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · op=0 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
    - `Frame 1000007786` [FRAM] — 207×42 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=4
      - `Title` [TEXT] — 207×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Title"
      - `Info Text if needed` [TEXT] — 207×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Info Text if needed"
    - `Frame 1000007784` [FRAM] — 72×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90
      - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=True, On-color=False, Destructive=NO** — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 10×15 · rot=-90

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Style=Three Actions, Usage=Internal Top Bar (+2 more) | 375×102 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 0 0 1 0 |  |
| RTL=False, Style=Text Actions, Usage=Internal Top Bar | 375×101 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 0 0 1 0 |  |
| RTL=False, Style=Title, Usage=Main Top Bar | 375×92 | V/MIN/MIN · 0 0 0 0 · 0 |  | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 0 0 1 0 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Style=Three Actions, Usage=Internal Top Bar**
- `Bars / Statusbar`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black)`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Rectangle`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery`: 24×11
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Border`: 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Cap`: 1×4 · fill=Text/text-default=#161616 · op=0.4
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Capacity`: 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi`: 15×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path`: 15×5 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#2`: 10×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#3`: 5×3 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection`: 17×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path`: 3×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#2`: 3×6 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#3`: 3×8 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#4`: 3×11 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style`: 54×21
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style › ↳ Time`: 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
- `Frame 1000007783`: 375×58 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 12 · gap=86 · tokens{paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
- `Frame 1000007783 › Frame 1000007785`: 72×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007783 › Frame 1000007785 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02`: 20×20
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007785 › Button#2`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · op=0 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02#2`: 20×20
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02 › elements#2`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007785 › Button › arrow-right-02 › elements › Icon#2`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007786`: 207×42 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=4
- `Frame 1000007783 › Frame 1000007786 › Title`: 207×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Title"
- `Frame 1000007783 › Frame 1000007786 › Info Text if needed`: 207×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Info Text if needed"
- `Frame 1000007783 › Frame 1000007784`: 72×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007783 › Frame 1000007784 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007784 › Button › arrow-right-02`: 20×20
- `Frame 1000007783 › Frame 1000007784 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007784 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- … 4 more layers (data JSON)

**RTL=False, Style=Two Actions, Usage=Internal Top Bar**
- `Bars / Statusbar`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black)`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Rectangle`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery`: 24×11
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Border`: 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Cap`: 1×4 · fill=Text/text-default=#161616 · op=0.4
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Capacity`: 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi`: 15×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path`: 15×5 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#2`: 10×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#3`: 5×3 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection`: 17×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path`: 3×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#2`: 3×6 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#3`: 3×8 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#4`: 3×11 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style`: 54×21
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style › ↳ Time`: 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
- `Frame 1000007784`: 375×58 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 12 · gap=86 · tokens{paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
- `Frame 1000007784 › Frame 1000007785`: 32×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007784 › Frame 1000007785 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007784 › Frame 1000007785 › Button › arrow-right-02`: 20×20
- `Frame 1000007784 › Frame 1000007785 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007784 › Frame 1000007785 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007784 › Frame 1000007786`: 287×42 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Frame 1000007784 › Frame 1000007786 › Title`: 287×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Title"
- `Frame 1000007784 › Frame 1000007786 › Info Text if needed`: 287×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Info Text if needed"
- `Frame 1000007784 › Frame 1000007784`: 32×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007784 › Frame 1000007784 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007784 › Frame 1000007784 › Button › arrow-right-02`: 20×20
- `Frame 1000007784 › Frame 1000007784 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007784 › Frame 1000007784 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616

**RTL=False, Style=Text Actions, Usage=Internal Top Bar**
- `Bars / Statusbar`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black)`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Rectangle`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery`: 24×11
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Border`: 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Cap`: 1×4 · fill=Text/text-default=#161616 · op=0.4
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Capacity`: 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi`: 15×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path`: 15×5 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#2`: 10×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#3`: 5×3 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection`: 17×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path`: 3×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#2`: 3×6 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#3`: 3×8 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#4`: 3×11 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style`: 54×21
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style › ↳ Time`: 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
- `Frame 1000007783`: 375×57 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 12 · gap=86 · tokens{paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
- `Frame 1000007783 › Button`: 74×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Button › Text wrapper`: 38×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 1000007783 › Button › Text wrapper › Text`: 38×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Cancel"
- `Frame 1000007783 › Frame 1000007786`: 203×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=4
- `Frame 1000007783 › Frame 1000007786 › Title`: 203×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Title"
- `Frame 1000007783 › Button#2`: 74×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Button › Text wrapper#2`: 26×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Frame 1000007783 › Button › Text wrapper › Text#2`: 26×18 · fill=Text/text-default=#161616 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Next"

**RTL=False, Style=Title, Usage=Main Top Bar**
- `Bars / Statusbar`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black)`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Rectangle`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery`: 24×11
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Border`: 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Cap`: 1×4 · fill=Text/text-default=#161616 · op=0.4
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Capacity`: 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi`: 15×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path`: 15×5 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#2`: 10×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#3`: 5×3 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection`: 17×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path`: 3×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#2`: 3×6 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#3`: 3×8 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#4`: 3×11 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style`: 54×21
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style › ↳ Time`: 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
- `Frame 1000007783`: 375×48 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 16 · gap=86 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
- `Frame 1000007783 › Title`: 211×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Semibold · txt="Title"
- `Frame 1000007783 › Frame 1000007789`: 112×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007783 › Frame 1000007789 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007789 › Button#2`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02#2`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements#2`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon#2`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007789 › Button#3`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02#3`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements#3`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon#3`: 15×10 · fill=Icon/icon-default=#161616

**RTL=False, Style=Logo, Usage=Main Top Bar**
- `Bars / Statusbar`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black)`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Rectangle`: 375×44
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery`: 24×11
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Border`: 22×11 · r=2.6666667461395264 · stroke=Text/text-default=#161616 · sw=1 · sa=INSIDE · op=0.35
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Cap`: 1×4 · fill=Text/text-default=#161616 · op=0.4
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Battery › Capacity`: 18×7 · r=1.3333333730697632 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi`: 15×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path`: 15×5 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#2`: 10×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Wifi › Wifi-path#3`: 5×3 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection`: 17×11 · fill=Text/text-default=#161616
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path`: 3×4 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#2`: 3×6 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#3`: 3×8 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Cellular Connection › Cellular_Connection-path#4`: 3×11 · fill=#000000
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style`: 54×21
- `Bars / Statusbar › iPhone X/Status Bars/Status Bar (Black) › Time Style › ↳ Time`: 54×17 · fill=#121826 · font=mixed · fs=14 · lh=auto · txt="9:41"
- `Frame 1000007783`: 375×58 · lay=H/SPACE_BETWEEN/CENTER · pad=8 12 8 16 · gap=86 · tokens{paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-md}
- `Frame 1000007783 › Logo Placeholder`: 125×42 · lay=H/MIN/CENTER · pad=5 4 5 4 · gap=8 · fill=Background/background-white=#ffffff
- `Frame 1000007783 › Logo Placeholder › Palm & Swords`: 32×32 · fill=Background/background-neutral-400=#9da4ae
- `Frame 1000007783 › Logo Placeholder › Platform Logo`: 77×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Platform Logo"
- `Frame 1000007783 › Frame 1000007789`: 112×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Frame 1000007783 › Frame 1000007789 › Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007789 › Button#2`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02#2`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements#2`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon#2`: 15×10 · fill=Icon/icon-default=#161616
- `Frame 1000007783 › Frame 1000007789 › Button#3`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02#3`: 20×20
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements#3`: 10×15 · rot=-90
- `Frame 1000007783 › Frame 1000007789 › Button › arrow-right-02 › elements › Icon#3`: 15×10 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Medium/Hovered/Secondary-Solid/True/False | **INSTANT** | 23 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Small/Hovered/Transparent/False/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Transparent/False/False | **INSTANT** | 2 |
