# Date Picker — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5822:2`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5822-2

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Date Picker

> A Date Picker is a UI component that enables users to select dates via a pop-up or dropdown calendar. This tool is often triggered by clicking a calendar icon or input field. It is widely used in forms and applications for tasks like scheduling events, booking appointments, or entering birthdates.

> Resources

## Component sets on this page (3)

- **Date cell** — 26 variants · `5928:1820`
- **Date Picker ** — 4 variants · `5928:2080`
- **_Date field** — 40 variants · `11287:55452`

---
## Date cell

### Properties

| Property | Type / options |
|---|---|
| Range-left | BOOLEAN=false |
| Range-right | BOOLEAN=true |
| Extra-left | BOOLEAN=true |
| Extra-right | BOOLEAN=true |
| Mid-Range | BOOLEAN=true |
| Date | TEXT=21 |
| Secondary Date | TEXT=1/9 |
| 2ndry Date | BOOLEAN=false |
| Selected | VARIANT: False · True |
| Today | VARIANT: False · True |
| Nex/Prev | VARIANT: False · True · End · Start |
| State | VARIANT: Default · Pressed · Disabled |
| Null | VARIANT: False · True |

### Anatomy (first variant: `Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False`)

- `Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False` [COMP] — 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
  - `Range Highlight` [FRAM] — 40×40
    - `Range highlight middle` [RECT] — 44×44 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
  - `state-layer` [FRAM] — 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-today-background-default=#ffffff@0 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
    - `Date` [TEXT] — 20×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"
    - `Secondary Date` [TEXT] *(hidden)* — 19×18 · fill=Text/text-quarterary=#6c737f · font=mixed · fs=12 · lh=auto · txt="1/9"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False (+25 more) | 44×44 | H/CENTER/CENTER · 0 0 0 0 · 0 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Disabled

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → Form/datecell-today-background-pressed=#d2d6db

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-today-background-default=#ffffff@0 → —
- state-layer › Date: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae
- − Range Highlight (hidden/removed)
- − Range Highlight › Range highlight middle (hidden/removed)

#### Default → **Pressed**  · applies to 2 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False; Selected=False, Today=True, Nex/Prev=True, Null=False
- state-layer: fill: — → Form/datecell-background-200=#b8eacb

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=False, Null=False
- state-layer: stroke: Form/datecell-background-600=#1b8354 → Global/border-disabled=#9da4ae
- state-layer › Date: fill: Form/datecell-background-600=#1b8354 → Global/text-default-disabled=#9da4ae
- − Range Highlight (hidden/removed)
- − Range Highlight › Range highlight middle (hidden/removed)

#### Default → **Pressed**  · applies to 3 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False; Selected=True, Today=False, Nex/Prev=True, Null=False; Selected=True, Today=True, Nex/Prev=True, Null=False
- *(no visual difference captured at root/child level)*

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-200=#b8eacb
- state-layer › Today-outline: stroke: Form/datecell-background-default=#1b8354 → Form/datecell-background-200=#b8eacb

#### Pressed → **Disabled**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=False, Null=False
- state-layer: fill: Form/datecell-background-default=#1b8354 → Form/datecell-background-200=#b8eacb

#### Default → **Pressed**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False
- + Range Highlight › Range highlight left (44×44 · fill=Form/datecell-background-100=#dff6e7)
- state-layer: fill: — → Form/datecell-today-background-pressed=#d2d6db
- − Range Highlight › Range highlight middle (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=False, Nex/Prev=True, Null=False
- state-layer › Date: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae; ts: Text md/Regular → —
- − Range Highlight (hidden/removed)
- − Range Highlight › Range highlight middle (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): Selected=False, Today=True, Nex/Prev=True, Null=False
- state-layer: stroke: Form/datecell-background-600=#1b8354 → Global/border-disabled=#9da4ae
- state-layer › Date: fill: Form/datecell-background-600=#1b8354 → Global/text-default-disabled=#9da4ae; ts: Text md/Bold → —
- − Range Highlight (hidden/removed)
- − Range Highlight › Range highlight middle (hidden/removed)

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=False, Nex/Prev=True, Null=False
- state-layer: fill: Form/datecell-background-300=#88d8ad → Form/datecell-background-200=#b8eacb
- state-layer › Date: fill: Text/text-brand-primary=#14573a → Text/text-oncolor-primary=#ffffff

#### Default → **Disabled**  · applies to 1 group(s): Selected=True, Today=True, Nex/Prev=True, Null=False
- state-layer: fill: Form/datecell-background-300=#88d8ad → Form/datecell-background-200=#b8eacb
- state-layer › Date: fill: Text/text-brand-primary=#14573a → Text/text-oncolor-primary=#ffffff
- state-layer › Today-outline: stroke: Form/datecell-background-300=#88d8ad → Form/datecell-background-200=#b8eacb

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False**
- `Range Highlight`: 40×40
- `Range Highlight › Range highlight middle`: 44×44 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-today-background-default=#ffffff@0 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"

**Selected=False, Today=True, Nex/Prev=False, State=Default, Null=False**
- `Range Highlight`: 40×40
- `Range Highlight › Range highlight middle`: 44×44 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · stroke=Form/datecell-background-600=#1b8354 · sw=2 · sa=INSIDE · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Form/datecell-background-600=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21"

**Selected=True, Today=False, Nex/Prev=Start, State=Default, Null=False**
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"

**Selected=True, Today=False, Nex/Prev=End, State=Default, Null=False**
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"

**Selected=True, Today=True, Nex/Prev=False, State=Default, Null=False**
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21"
- `state-layer › Today-outline`: 42×42 · r=9999 · stroke=Form/datecell-background-default=#1b8354 · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}

**Selected=True, Today=False, Nex/Prev=False, State=Pressed, Null=False**
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-background-default=#1b8354 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"

**Selected=False, Today=False, Nex/Prev=True, State=Default, Null=False**
- `Range Highlight`: 40×40
- `Range Highlight › Range highlight middle`: 44×44 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="21"

**Selected=False, Today=True, Nex/Prev=True, State=Default, Null=False**
- `Range Highlight`: 40×40
- `Range Highlight › Range highlight middle`: 44×44 · fill=Form/datecell-background-100=#dff6e7 · rot=-180
- `state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · stroke=Form/datecell-background-600=#1b8354 · sw=2 · sa=INSIDE · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `state-layer › Date`: 20×24 · fill=Form/datecell-background-600=#1b8354 · font=mixed · fs=16 · lh=24 · ts=Text md/Bold · txt="21"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Selected=False, Today=False, Nex/Prev=False, State=Default, Null=False ⟶ Date cell/False/False/False/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Selected=False, Today=True, Nex/Prev=False, State=Default, Null=False ⟶ Date cell/False/True/False/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Selected=False, Today=False, Nex/Prev=True, State=Default, Null=False ⟶ Date cell/False/False/True/Hovered/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Selected=False, Today=True, Nex/Prev=True, State=Default, Null=False ⟶ Date cell/False/True/True/Hovered/False | **INSTANT** | 1 |

---
## Date Picker 

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Type | VARIANT: Range · Select date |

### Anatomy (first variant: `RTL=False, Type=Range`)

- `RTL=False, Type=Range` [COMP] — 375×696 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · fill=Form/field-background-default=#ffffff · tokens{topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
  - `Calendar & Quick options` [FRAM] — 375×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Calendar & Input` [FRAM] — 375×348 · lay=V/MIN/MIN · pad=0 16 0 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:spacing-none, paddingRight:size/16, paddingBottom:spacing-none}
      - `Calendars` [FRAM] — 343×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32
        - `Main Calender` [FRAM] — 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
          - `Calendar` [FRAM] — 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Calendar & Quick options` [FRAM] — 375×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
    - `Calendar & Input` [FRAM] — 375×348 · lay=V/MIN/MIN · pad=0 16 0 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:spacing-none, paddingRight:size/16, paddingBottom:spacing-none}
      - `Calendars` [FRAM] — 343×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32
        - `Main Calender` [FRAM] — 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
          - `Calendar` [FRAM] — 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Range | 375×696 | V/MIN/MIN · 0 0 0 0 · 0 |  | Form/field-background-default=#ffffff |   |  |
| RTL=False, Type=Select date | 375×234 | H/SPACE_BETWEEN/CENTER · 0 32 0 32 · 72 |  | Form/field-background-default=#ffffff |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Range**
- `Calendar & Quick options`: 375×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input`: 375×348 · lay=V/MIN/MIN · pad=0 16 0 16 · gap=16 · tokens{itemSpacing:size/16, paddingLeft:size/16, paddingTop:spacing-none, paddingRight:size/16, paddingBottom:spacing-none}
- `Calendar & Quick options › Calendar & Input › Calendars`: 343×348 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=32
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender`: 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar`: 343×348 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav`: 343×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6`: 343×40 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=8 · tokens{paddingLeft:size/16, paddingRight:size/16}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Month Nav › Frame 6 › Month 2024`: 89×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · txt="Month 2024"
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days`: 343×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#2`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#2`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#3`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#3`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#4`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#4`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#5`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#5`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#6`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#6`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell#7`: 44×44 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · tokens{paddingLeft:spacing-xs, paddingRight:spacing-xs}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Days › Day cell › Wrapper#7`: 36×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid`: 343×264 · lay=H/CENTER/MIN/wrap · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#2`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#2`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#3`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#3`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#4`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#4`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#5`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#5`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell#6`: 44×44 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Calendar & Quick options › Calendar & Input › Calendars › Main Calender › Calendar › Date Grid › Date cell › state-layer#6`: 40×40 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=9999 · fill=Form/datecell-today-background-default=#ffffff@0 · tokens{itemSpacing:spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- … 68 more layers (data JSON)

**RTL=False, Type=Select date**
- `Light/Pickers/Wheel-picker/Selected-item`: 343×36
- `Light/Pickers/Wheel-picker/Selected-item › Background`: 343×36 · r=16 · fill=Colors/SA-Flag/50=#f3fcf6 · stroke=Colors/SA-Flag/600=#1b8354 · sw=2 · sa=INSIDE
- `Frame 8`: 48×234 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Frame 8 › Item - 1`: 10×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="1"
- `Frame 8 › Item - 2`: 10×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="2"
- `Frame 8 › Item - 3`: 12×30 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=20 · lh=30 · txt="3"
- `Frame 8 › Item - 7`: 12×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · txt="4"
- `Frame 8 › Item - 4`: 12×30 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=20 · lh=30 · txt="5"
- `Frame 8 › Item - 5`: 10×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="6"
- `Frame 8 › Item - 6`: 10×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="7"
- `Month`: 215×234 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Month › Item - 1`: 215×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="December"
- `Month › Item - 2`: 215×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="January"
- `Month › Item - 3`: 215×28 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=18 · lh=28 · txt="February"
- `Month › Item - 2#2`: 215×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · txt="March"
- `Month › Item - 4`: 215×28 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=18 · lh=28 · txt="April"
- `Month › Item - 5`: 215×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="May"
- `Month › Item - 6`: 215×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="June"
- `Frame 7`: 48×234 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Frame 7 › Item - 1`: 39×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="2018"
- `Frame 7 › Item - 2`: 39×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="2019"
- `Frame 7 › Item - 3`: 48×30 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=20 · lh=30 · txt="2020"
- `Frame 7 › Item - 8`: 48×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · txt="2021"
- `Frame 7 › Item - 7`: 48×30 · fill=Alpha/alpha-black-60=#161616@0.6 · font=mixed · fs=20 · lh=30 · txt="2022"
- `Frame 7 › Item - 5`: 39×24 · fill=Alpha/alpha-black-40=#161616@0.4 · font=mixed · fs=16 · lh=24 · txt="2023"
- `Frame 7 › Item - 6`: 39×24 · fill=Alpha/alpha-black-20=#161616@0.2 · font=mixed · fs=16 · lh=24 · txt="2024"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell/False/False/False/Hovered/False | **INSTANT** | 117 |
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell/False/False/True/Hovered/False | **INSTANT** | 44 |
| ON_HOVER | CHANGE_TO | Date cell ⟶ Date cell/False/True/False/Hovered/False | **INSTANT** | 3 |

---
## _Date field

### Properties

| Property | Type / options |
|---|---|
| Icon | BOOLEAN=false |
| Prefix | BOOLEAN=false |
| Suffix | BOOLEAN=false |
| Text | TEXT=DD/MM/YY |
| Text AR | TEXT=يوم/شهر/سنة |
| Show Helper Text | BOOLEAN=false |
| Helper text AR | TEXT=نص مساعد |
| 🔁 Icon Swap | INSTANCE_SWAP=11089:90347 |
| Helper Text Eng | TEXT=Help Text |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Pressed · Focused · Read-only · Disabled |
| Filled | VARIANT: False · True |
| Error | VARIANT: False · True |
| Size | VARIANT: Large |
| Style | VARIANT: Default |

### Anatomy (first variant: `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default`)

- `RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default` [COMP] — 320×44 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · r=4 · tokens{itemSpacing:Form/Iable-container, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `Date Field` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Prefix` [INST] ⟶ instance of **Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 74×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f9fafb · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 42×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 42×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Prefix"
    - `Icon-Text-stack` [FRAM] — 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
      - `Leading Icon` [INST] ⟶ instance of **calendar-04 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 17×18
          - `Icon` [VECT] — 17×18 · fill=Icon/icon-default=#161616
      - `Text` [FRAM] — 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY"
    - `Suffix` [INST] ⟶ instance of **Input Prefix-Suffix / RTL=False, Type=Text, State=Default, Style=Solid, Size=Large** *(hidden)* — 63×40 · lay=H/CENTER/CENTER · pad=2 16 2 16 · gap=4 · fill=Button/button-background-neutral-default=#f9fafb · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-xl, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-xl, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
      - `Text wrapper` [FRAM] — 41×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 41×24 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Suffix"
  - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
    - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
      - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
        - `Icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
    - `Help Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default (+15 more) | 320×44 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   |  |
| RTL=False, State=Focused, Filled=True, Error=False, Size=Large, Style=Default (+3 more) | 320×44 | V/MIN/MIN · 0 0 0 0 · 8 | 4 |  |   | DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2) |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Pressed · Focused · Read-only · Disabled

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-pressed=#f9fafb · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-pressed=#f9fafb · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (320×2 · fill=Form/field-border-pressed=#0d121c)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=False, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-pressed=#f9fafb · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Entered Text (79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Thin underline (320×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Entered Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=True, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Entered Text: fill: Form/field-text-filled=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Pressed**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-pressed=#f9fafb · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (112×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Focused**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- (root): fx: — → DROP_SHADOW(#1018280f 0,2 b4 s-2);DROP_SHADOW(#1018281a 0,4 b8 s-2)
- + Date field (320×44)
- + Date field › Contents (320×44 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1)
- + Date field › Contents › Icon-Text-stack (320×44)
- + Date field › Contents › Icon-Text-stack › Text (288×44)
- + Date field › Contents › Icon-Text-stack › Text › Type Cursor (1×24 · fill=Form/field-border-pressed=#0d121c)
- + Date field › Contents › Icon-Text-stack › Text › Placeholder Text (79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · txt="DD/MM/YY")
- + Date field › Thin underline (320×2 · fill=Form/field-border-error=#b42318 · stroke=Form/field-border-error=#b42318 · sw=1)
- − Date Field (hidden/removed)
- − Date Field › Icon-Text-stack (hidden/removed)
- − Date Field › Icon-Text-stack › Text (hidden/removed)
- − Date Field › Icon-Text-stack › Text › Placeholder Text (hidden/removed)

#### Default → **Read-only**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Form/field-text-filled=#161616

#### Default → **Disabled**  · applies to 1 group(s): RTL=False, Filled=False, Error=True, Size=Large, Style=Default
- Date Field: fill: Form/field-background-default=#ffffff → —; stroke: Form/field-border-error=#b42318 → Form/field-border-default=#9da4ae
- Date Field › Icon-Text-stack › Text › Placeholder Text: fill: Form/field-text-placeholder=#6c737f → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default**
- `Date Field`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY"

**RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default**
- `Date Field`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY"

**RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default**
- `Date Field`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Entered Text`: 79×24 · fill=Form/field-text-filled=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY"

**RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default**
- `Date Field`: 320×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-error=#b42318 · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Date Field › Icon-Text-stack`: 320×44 · lay=H/MIN/CENTER · pad=0 16 0 16 · gap=4 · tokens{itemSpacing:Form/dropdown-icon-content, paddingLeft:Form/dropdown-container-padding-left&right, paddingRight:Form/dropdown-container-padding-left&right}
- `Date Field › Icon-Text-stack › Text`: 288×44 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Date Field › Icon-Text-stack › Text › Placeholder Text`: 79×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="DD/MM/YY"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_CLICK | CHANGE_TO | State: Pressed→Focused | **SMART_ANIMATE 150ms EASE_OUT** | 8 |
| MOUSE_LEAVE | CHANGE_TO | State: Pressed→Default | **SMART_ANIMATE 300ms EASE_OUT** | 8 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=False, Size=Large, Style=Default ⟶ _Date field/False/Hovered/True/False/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=False, Size=Large, Style=Default ⟶ _Date field/False/Hovered/False/False/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=True, Error=True, Size=Large, Style=Default ⟶ _Date field/False/Hovered/True/True/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=False, State=Default, Filled=False, Error=True, Size=Large, Style=Default ⟶ _Date field/False/Hovered/False/True/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=True, Size=Large, Style=Default ⟶ _Date field/True/Hovered/False/True/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=True, Size=Large, Style=Default ⟶ _Date field/True/Hovered/True/True/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=False, Error=False, Size=Large, Style=Default ⟶ _Date field/True/Hovered/False/False/Large/Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=True, State=Default, Filled=True, Error=False, Size=Large, Style=Default ⟶ _Date field/True/Hovered/True/False/Large/Default | **INSTANT** | 1 |
