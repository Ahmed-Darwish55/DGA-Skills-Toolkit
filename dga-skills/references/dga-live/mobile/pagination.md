# Pagination — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `225:7288`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 225-7288

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Pagination

> Pagination provides horizontal navigation between chunks (pages) of a dataset.

> Resources

## Component sets on this page (2)

- **Pagination** — 3 variants · `8414:143999`
- **_PaginationItem** — 18 variants · `8414:144025`

---
## Pagination

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Small · Large · Meduim |

### Anatomy (first variant: `Size=Large`)

- `Size=Large` [COMP] — 328×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Pagination/pagination-Items-padding}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-left-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 7×13
        - `Icon` [VECT] — 7×13 · fill=Icon/icon-default=#161616
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Current Page, Overflow=no, Size=Large** — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=0 · r=4 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"
    - `Selector` [RECT] — 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Overflow=no, Size=Large** — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2"
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Overflow=no, Size=Large** — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3"
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Overflow=no, Size=Large** — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `1` [TEXT] — 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Overflow=no, Size=Large** — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
    - `1` [TEXT] — 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999"
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 14×8 · rot=91
        - `Icon` [VECT] — 7×13 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large | 328×40 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| Size=Small | 216×24 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| Size=Meduim | 272×32 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large**
- `Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 24×24
- `Button › Leading Icon › elements`: 7×13
- `Button › Leading Icon › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=0 · r=4 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `_PaginationItem › 1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"
- `_PaginationItem › Selector`: 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#2`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2"
- `_PaginationItem#3`: 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#3`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3"
- `_PaginationItem#4`: 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#4`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."
- `_PaginationItem#5`: 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#5`: 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999"
- `Button#2`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 24×24
- `Button › Leading Icon › elements#2`: 14×8 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 7×13 · fill=Icon/icon-default=#161616

**Size=Small**
- `Button`: 24×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-sm-gap, paddingLeft:Button/buttons-sm-padding, paddingTop:spacing-none, paddingRight:Button/buttons-sm-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 16×16
- `Button › Leading Icon › elements`: 5×9
- `Button › Leading Icon › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 24×24 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=0 · r=4 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `_PaginationItem › 1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"
- `_PaginationItem › Selector`: 16×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 24×24 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#2`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2"
- `_PaginationItem#3`: 24×24 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#3`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3"
- `_PaginationItem#4`: 24×24 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#4`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."
- `_PaginationItem#5`: 24×24 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#5`: 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999"
- `Button#2`: 24×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-sm-gap, paddingLeft:Button/buttons-sm-padding, paddingTop:spacing-none, paddingRight:Button/buttons-sm-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 16×16
- `Button › Leading Icon › elements#2`: 9×5 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616

**Size=Meduim**
- `Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 20×20
- `Button › Leading Icon › elements`: 6×11
- `Button › Leading Icon › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 32×32 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=0 · r=4 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `_PaginationItem › 1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"
- `_PaginationItem › Selector`: 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 32×32 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#2`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2"
- `_PaginationItem#3`: 32×32 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#3`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3"
- `_PaginationItem#4`: 32×32 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#4`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."
- `_PaginationItem#5`: 32×32 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
- `_PaginationItem › 1#5`: 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999"
- `Button#2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 20×20
- `Button › Leading Icon › elements#2`: 11×6 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 6×11 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem/Hover/no/Large | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem/Hover/no/Small | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem/Hover/no/Meduim | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Icon only=True, On-color=False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Icon only=True, On-color=False | **INSTANT** | 2 |

---
## _PaginationItem

### Properties

| Property | Type / options |
|---|---|
| Number | TEXT=1 |
| State | VARIANT: Default · Current Page · Focsed · Opened |
| Overflow | VARIANT: no · yes |
| Size | VARIANT: Meduim · Large · Small |

### Anatomy (first variant: `State=Default, Overflow=no, Size=Large`)

- `State=Default, Overflow=no, Size=Large` [COMP] — 40×40 · lay=V/CENTER/CENTER · pad=10 16 10 16 · gap=10 · tokens{paddingLeft:spacing-xl, paddingRight:spacing-xl}
  - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, Overflow=no, Size=Large (+1 more) | 40×40 | V/CENTER/CENTER · 10 16 10 16 · 10 |  |  |   |  |
| State=Default, Overflow=no, Size=Small (+1 more) | 24×24 | V/CENTER/CENTER · 10 16 10 16 · 10 |  |  |   |  |
| State=Default, Overflow=no, Size=Meduim (+1 more) | 32×32 | V/CENTER/CENTER · 10 16 10 16 · 10 |  |  |   |  |
| State=Focsed, Overflow=no, Size=Large | 40×40 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Focsed, Overflow=no, Size=Small | 24×24 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Focsed, Overflow=no, Size=Meduim | 32×32 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Current Page, Overflow=no, Size=Large | 40×40 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  |   |  |
| State=Current Page, Overflow=no, Size=Small | 24×24 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  |   |  |
| State=Current Page, Overflow=no, Size=Meduim | 32×32 | V/CENTER/CENTER · 10 16 10 16 · 0 | 4 |  |   |  |
| State=Focsed, Overflow=yes, Size=Large | 40×40 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  | #000000 2 |  |
| State=Focsed, Overflow=yes, Size=Small | 24×24 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  | #000000 2 |  |
| State=Focsed, Overflow=yes, Size=Meduim | 32×32 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  | #000000 2 |  |
| State=Opened, Overflow=yes, Size=Large | 40×40 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  |   |  |
| State=Opened, Overflow=yes, Size=Small | 24×24 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  |   |  |
| State=Opened, Overflow=yes, Size=Meduim | 32×32 | V/CENTER/CENTER · 10 16 10 16 · 10 | 4 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Current Page · Focsed · Opened · ⚠️ spelling as in Figma: `Focsed` = **Focused**, `Opened` = **Open** (source kept unchanged; treat as the normalised state)

#### Default → **Focsed**  · applies to 3 group(s): Overflow=no, Size=Large; Overflow=no, Size=Small; Overflow=no, Size=Meduim
- (root): stroke: — → Border/border-black=#161616; sw: — → 2; r: — → 4; gap: 10 → 0

#### Default → **Current Page**  · applies to 2 group(s): Overflow=no, Size=Large; Overflow=no, Size=Meduim
- (root): r: — → 4; gap: 10 → 0
- + Selector (24×3 · fill=Background/background-primary=#1b8354)

#### Default → **Current Page**  · applies to 1 group(s): Overflow=no, Size=Small
- (root): r: — → 4; gap: 10 → 0
- + Selector (16×3 · fill=Background/background-primary=#1b8354)

#### Default → **Focsed**  · applies to 3 group(s): Overflow=yes, Size=Large; Overflow=yes, Size=Small; Overflow=yes, Size=Meduim
- (root): stroke: — → #000000; sw: — → 2; r: — → 4

#### Default → **Opened**  · applies to 3 group(s): Overflow=yes, Size=Large; Overflow=yes, Size=Small; Overflow=yes, Size=Meduim
- (root): r: — → 4
- + List Sections (68×332 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (60×324)
- + List Sections › Section › Dropdown List Item (60×36)
- + List Sections › Section › Dropdown List Item › Text (16×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (16×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="4")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › Icon (13×9 · stroke=Icon/icon-default=#161616 · sw=1.5)
- + List Sections › Section › Dropdown List Item#2 (60×36)
- + List Sections › Section › Dropdown List Item › Text#2 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="5")
- + List Sections › Section › Dropdown List Item#3 (60×36)
- + List Sections › Section › Dropdown List Item › Text#3 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="6")
- + List Sections › Section › Dropdown List Item#4 (60×36)
- + List Sections › Section › Dropdown List Item › Text#4 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="7")
- + List Sections › Section › Dropdown List Item#5 (60×36)
- + List Sections › Section › Dropdown List Item › Text#5 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="8")
- + List Sections › Section › Dropdown List Item#6 (60×36)
- + List Sections › Section › Dropdown List Item › Text#6 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="9")
- + List Sections › Section › Dropdown List Item#7 (60×36)
- + List Sections › Section › Dropdown List Item › Text#7 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="10")
- + List Sections › Section › Dropdown List Item#8 (60×36)
- + List Sections › Section › Dropdown List Item › Text#8 (44×20)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#8 (44×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="11")
- + List Sections › Section › Dropdown List Item#9 (60×36)
- … 2 more changes

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, Overflow=no, Size=Large**
- `1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"

**State=Default, Overflow=no, Size=Small**
- `1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"

**State=Default, Overflow=no, Size=Meduim**
- `1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1"

**State=Default, Overflow=yes, Size=Large**
- `...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."

**State=Default, Overflow=yes, Size=Small**
- `...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."

**State=Default, Overflow=yes, Size=Meduim**
- `...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..."

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 27 |
| AFTER_TIMEOUT(100ms) | CHANGE_TO | State: Focsed→Current Page | **INSTANT** | 3 |
| ON_CLICK | CHANGE_TO | State: Opened→Default | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=no, Size=Large ⟶ _PaginationItem/Hover/no/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=no, Size=Small ⟶ _PaginationItem/Hover/no/Small | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=no, Size=Meduim ⟶ _PaginationItem/Hover/no/Meduim | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Current Page, Overflow=no, Size=Large ⟶ _PaginationItem/Hover/no/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Current Page, Overflow=no, Size=Small ⟶ _PaginationItem/Hover/no/Small | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Current Page, Overflow=no, Size=Meduim ⟶ _PaginationItem/Hover/no/Meduim | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=yes, Size=Large ⟶ _PaginationItem/Hover/yes/Large | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=yes, Size=Small ⟶ _PaginationItem/Hover/yes/Small | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | State=Default, Overflow=yes, Size=Meduim ⟶ _PaginationItem/Hover/yes/Meduim | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Large | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Small | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Overflow=yes, Size=Meduim | **INSTANT** | 1 |
