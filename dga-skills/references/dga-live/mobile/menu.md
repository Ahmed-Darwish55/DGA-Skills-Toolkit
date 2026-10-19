# Menu — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5822:20153`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5822-20153

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Menu

> A Menu is a UI component that provides a list of options or actions that users can select from. It helps organize and present various functionalities or navigational links within an application.

> Resources

## Component sets on this page (3)

- **Menu list item** — 48 variants · `5822:20178`
- **Menu** — 2 variants · `5995:7640`
- **Toggle** — 4 variants · `10464:41581`

---
## Menu list item

### Properties

| Property | Type / options |
|---|---|
| Lead Icon | BOOLEAN=true |
| 🔁 Lead icon | INSTANCE_SWAP=10750:73533 |
| Trail text | BOOLEAN=true |
| Label EN | TEXT=Item Lebel |
| trail text | TEXT=+99 |
| 🔁 Trail Icon | INSTANCE_SWAP=3463:404964 |
| Label AR | TEXT=نص العنصر |
| RTL | VARIANT: False · True |
| Trail element | VARIANT: None · Text · Button · Tag · Switch · Icon |
| State | VARIANT: Default · Pressed · Focused · Disabled |

### Anatomy (first variant: `RTL=False, Trail element=None, State=Default`)

- `RTL=False, Trail element=None, State=Default` [COMP] — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 19×22
      - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
  - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
  - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Trail element=None, State=Default (+11 more) | 225×40 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  |   |  |
| RTL=False, Trail element=Switch, State=Default (+1 more) | 225×48 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  |   |  |
| RTL=False, Trail element=None, State=Pressed (+3 more) | 225×40 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Trail element=Switch, State=Pressed | 225×48 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 | Button/button-background-neutral-pressed=#e5e7eb |   |  |
| RTL=False, Trail element=None, State=Focused (+3 more) | 225×40 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  | Border/border-black=#161616 2 |  |
| RTL=False, Trail element=Switch, State=Focused | 225×48 | H/MIN/CENTER · 8 8 8 8 · 8 | 4 |  | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Disabled

#### Default → **Pressed**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Tag …
- (root): fill: — → Button/button-background-neutral-pressed=#e5e7eb

#### Default → **Focused**  · applies to 5 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Text; RTL=False, Trail element=Icon; RTL=False, Trail element=Tag …
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Disabled**  · applies to 2 group(s): RTL=False, Trail element=None; RTL=False, Trail element=Button
- file-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Text
- file-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Trail text: fill: Text/text-secondary-paragraph=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Icon
- file-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- check › Icon: stroke: Icon/icon-default-500=#6c737f → Global/icon-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Trail element=Button
- *(no visual difference captured at root/child level)*

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Trail element=Button
- *(no visual difference captured at root/child level)*

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Tag
- file-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Tag: op: — → 0.4

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Trail element=Switch
- file-01 › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default=#161616 → —; sw: 0 → —
- Content Wrapper › Entered Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- Switch › Track: stroke: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae
- Switch › Thumb: fill: Controls/control-border=#6c737f → Global/border-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Trail element=None, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"

**RTL=False, Trail element=Text, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 140×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 140×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Trail text`: 29×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · txt="+99"

**RTL=False, Trail element=Icon, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `check`: 24×24
- `check › Icon`: 16×11 · stroke=Icon/icon-default-500=#6c737f · sw=1.5 · sa=CENTER

**RTL=False, Trail element=Button, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Button`: 24×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:spacing-none, paddingTop:spacing-none, paddingRight:spacing-none, paddingBottom:spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › edit-02`: 16×16
- `Button › edit-02 › Icon`: 13×13 · r=    · stroke=#000000 · sw=1.5 · sa=CENTER

**RTL=False, Trail element=Tag, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Tag`: 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Tag › Text`: 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label"

**RTL=False, Trail element=Switch, State=Default**
- `file-01`: 24×24
- `file-01 › elements`: 19×22
- `file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Content Wrapper`: 117×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Content Wrapper › Entered Text`: 117×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Switch`: 52×32
- `Switch › Track`: 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Switch › Thumb`: 28×28 · fill=Controls/control-border=#6c737f
- `Switch › Thumb › Thumb`: 28×28 · fill=neutral/white=#ffffff

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Small/Hovered/Subtle/True/False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/False/Hovered/False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Subtle/True/False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Switch ⟶ Switch/True/Hovered/False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | RTL=False, Trail element=None, State=Default ⟶ Menu list item/None/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Trail element=Text, State=Default ⟶ Menu list item/Text/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Trail element=Icon, State=Default ⟶ Menu list item/Icon/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Trail element=Tag, State=Default ⟶ Menu list item/Badge/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, Trail element=Switch, State=Default ⟶ Menu list item/Switch/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Trail element=None, State=Default ⟶ Menu list item/None/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Trail element=Text, State=Default ⟶ Menu list item/Text/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Trail element=Icon, State=Default ⟶ Menu list item/Icon/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Trail element=Tag, State=Default ⟶ Menu list item/Badge/Hovered/True | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, Trail element=Switch, State=Default ⟶ Menu list item/Switch/Hovered/True | **INSTANT** | 1 |

---
## Menu

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 241×596 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=8 · fill=neutral/white=#ffffff · stroke=border/border-default=#cbd5e1 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018282e 0,24 b48 s-12) · tokens{topLeftRadius:radius/8, topRightRadius:radius/8, bottomLeftRadius:radius/8, bottomRightRadius:radius/8}
  - `Section` [FRAM] — 241×164 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×28 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · txt="GROUP LABEL"
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Icon, State=Default** — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `check` [INST] ⟶ instance of **check** — 24×24
        - `Icon` [VECT] — 16×11 · stroke=Icon/icon-default-500=#6c737f · sw=1.5 · sa=CENTER
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=None, State=Default** — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
  - `Section` [FRAM] — 241×188 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×28 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · txt="GROUP LABEL"
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×48 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 117×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 117×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 52×32
        - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Thumb` [BOOL] — 28×28 · fill=Controls/control-border=#6c737f
          - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×48 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 117×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 117×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 52×32
        - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Thumb` [BOOL] — 28×28 · fill=Controls/control-border=#6c737f
          - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Switch, State=Default** — 225×48 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 117×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 117×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Switch` [INST] ⟶ instance of **Switch / RTL=False, State=Default, On=False** — 52×32
        - `Track` [RECT] — 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
        - `Thumb` [BOOL] — 28×28 · fill=Controls/control-border=#6c737f
          - `Thumb` [ELLI] — 28×28 · fill=neutral/white=#ffffff
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
  - `Section` [FRAM] — 241×244 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
    - `Dropdown List - Group Label` [FRAM] — 225×28 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Text` [FRAM] — 201×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Group Label` [TEXT] — 201×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · txt="GROUP LABEL"
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `file-01` [INST] ⟶ instance of **file-01 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×22
          - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
      - `Content Wrapper` [FRAM] — 123×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 123×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
      - `Tag` [INST] ⟶ instance of **Tag / RTL=False, Size=Small, Color=Gray, Outline=False, Rounded=False, Icon only=False** — 46×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Tag/tag-background-neutral-light=#f9fafb · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-none, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Lead icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `elements` [GROU] — 9×7
        - `Text` [TEXT] — 30×18 · fill=Tag/tag-text-neutral=#1f2a37 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Label"
        - `Trail icon` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 14×14
          - `elements` [GROU] — 9×7
      - `Divider` [FRAM] *(hidden)* — 225×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 209×1 · fill=gray/300=#cbd5e1
    - `Menu list item` [INST] ⟶ instance of **Menu list item / RTL=False, Trail element=Tag, State=Default** — 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 241×596 | V/MIN/MIN · 0 0 0 0 · 0 | 8 | neutral/white=#ffffff | border/border-default=#cbd5e1 1 | DROP_SHADOW(#1018282e 0,24 b48 s-12) |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Section`: 241×164 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
- `Section › Dropdown List - Group Label`: 225×28 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Dropdown List - Group Label › Text`: 201×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Dropdown List - Group Label › Text › Group Label`: 201×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · txt="GROUP LABEL"
- `Section › Menu list item`: 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Menu list item › file-01`: 24×24
- `Section › Menu list item › file-01 › elements`: 19×22
- `Section › Menu list item › file-01 › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Section › Menu list item › Content Wrapper`: 145×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Menu list item › Content Wrapper › Entered Text`: 145×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Section › Menu list item › check`: 24×24
- `Section › Menu list item › check › Icon`: 16×11 · stroke=Icon/icon-default-500=#6c737f · sw=1.5 · sa=CENTER
- `Section › Menu list item#2`: 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Menu list item › file-01#2`: 24×24
- `Section › Menu list item › file-01 › elements#2`: 19×22
- `Section › Menu list item › file-01 › elements › Icon#2`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Section › Menu list item › Content Wrapper#2`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Menu list item › Content Wrapper › Entered Text#2`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Section › Menu list item#3`: 225×40 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Menu list item › file-01#3`: 24×24
- `Section › Menu list item › file-01 › elements#3`: 19×22
- `Section › Menu list item › file-01 › elements › Icon#3`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Section › Menu list item › Content Wrapper#3`: 177×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Menu list item › Content Wrapper › Entered Text#3`: 177×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Section#2`: 241×188 · lay=V/MIN/MIN · pad=8 8 8 8 · gap=0 · stroke=border/border-default=#cbd5e1 · sw=0 0 1 0 · sa=INSIDE · tokens{itemSpacing:spacing-none, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md}
- `Section › Dropdown List - Group Label#2`: 225×28 · lay=H/MIN/MIN · pad=8 16 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:size/16, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Dropdown List - Group Label › Text#2`: 201×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Dropdown List - Group Label › Text › Group Label#2`: 201×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=18 · txt="GROUP LABEL"
- `Section › Menu list item#4`: 225×48 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Section › Menu list item › file-01#4`: 24×24
- `Section › Menu list item › file-01 › elements#4`: 19×22
- `Section › Menu list item › file-01 › elements › Icon#4`: 19×22 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default=#161616 · sw=0 · sa=CENTER
- `Section › Menu list item › Content Wrapper#4`: 117×24 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Section › Menu list item › Content Wrapper › Entered Text#4`: 117×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Item Lebel"
- `Section › Menu list item › Switch`: 52×32
- `Section › Menu list item › Switch › Track`: 52×32 · r=9999 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- … 57 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Badge/Hovered/False | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Badge/Hovered/True | **INSTANT** | 5 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Switch/Hovered/False | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Switch/Hovered/True | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/None/Hovered/False | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/None/Hovered/True | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Icon/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Menu list item ⟶ Menu list item/Icon/Hovered/True | **INSTANT** | 1 |

---
## Toggle

### Properties

| Property | Type / options |
|---|---|
| State | VARIANT: Off · On |
| Mode | VARIANT: Dark · Light |

### Anatomy (first variant: `State=Off, Mode=Dark`)

- `State=Off, Mode=Dark` [COMP] — 51×31 · r=100 · fill=#787880@0.32
  - `Knob` [FRAM] — 27×27 · r=100 · fill=#ffffff · fx=DROP_SHADOW(#0000000f 0,3 b1);DROP_SHADOW(#00000026 0,3 b8);DROP_SHADOW(#0000000a 0,0 b0 s1)

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Off, Mode=Dark | 51×31 |  ·  ·  | 100 | #787880@0.32 |   |  |
| State=On, Mode=Dark | 51×31 |  ·  ·  | 100 | #30d158 |   |  |
| State=Off, Mode=Light | 51×31 |  ·  ·  | 100 | #787880@0.16 |   |  |
| State=On, Mode=Light | 51×31 |  ·  ·  | 100 | #34c759 |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Off · On

#### Off → **On**  · applies to 1 group(s): Mode=Dark
- (root): fill: #787880@0.32 → #30d158

#### Off → **On**  · applies to 1 group(s): Mode=Light
- (root): fill: #787880@0.16 → #34c759

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Off, Mode=Dark**
- `Knob`: 27×27 · r=100 · fill=#ffffff · fx=DROP_SHADOW(#0000000f 0,3 b1);DROP_SHADOW(#00000026 0,3 b8);DROP_SHADOW(#0000000a 0,0 b0 s1)

**State=Off, Mode=Light**
- `Knob`: 27×27 · r=100 · fill=#ffffff · fx=DROP_SHADOW(#0000000f 0,3 b1);DROP_SHADOW(#00000026 0,3 b8);DROP_SHADOW(#0000000a 0,0 b0 s1)

### Interactions & motion

*No prototype reactions defined on this component set.*
