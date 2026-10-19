# UI Shell - Tab Bar — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `8332:23832`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 8332-23832

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> UI Shell - Tab Bar

> A Tab Bar is a UI component used in mobile and web applications to provide easy navigation between different sections or views of an app. It typically appears at the bottom of the screen on mobile devices and contains multiple tabs, each representing a different section of the app. Users can tap on these tabs to switch between sections quickly. The Tab Bar helps improve user experience by making navigation intuitive and efficient.

> Resources

## Component sets on this page (3)

- **Tab Item** — 12 variants · `8332:24169`
- **Tab Bar** — 24 variants · `8332:24453`
- **Positioned** — 3 variants · `8332:25792`

---
## Tab Item

### Properties

| Property | Type / options |
|---|---|
| Show Tag | BOOLEAN=false |
| Text EN | TEXT=Tab 1 |
| Icon | INSTANCE_SWAP=10750:75655 |
| Text AR | TEXT=تبويب 1 |
| RTL | VARIANT: False · True |
| State | VARIANT: Normal · Pressed · Selected |
| Type | VARIANT: Tab Bar Item |
| OnColor | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, State=Normal, Type=Tab Bar Item, OnColor=False`)

- `RTL=False, State=Normal, Type=Tab Bar Item, OnColor=False` [COMP] — 46×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
  - `home-06` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 24×24
    - `Icon` [VECT] — 19×20 · fill=Icon/icon-default-500=#6c737f
  - `Tab 1` [TEXT] — 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
  - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** *(hidden)* — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
    - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Normal, Type=Tab Bar Item, OnColor=False (+3 more) | 46×70 | V/CENTER/CENTER · 12 8 12 8 · 4 |  |  |   |  |
| RTL=False, State=Selected, Type=Tab Bar Item, OnColor=False | 46×70 | V/CENTER/CENTER · 12 8 12 8 · 4 |  |  | Border/border-primary=#1b8354 1 0 0 0 |  |
| RTL=False, State=Selected, Type=Tab Bar Item, OnColor=True | 46×70 | V/CENTER/CENTER · 12 8 12 8 · 4 |  |  | Border/border-background-white=#f3f4f6 1 0 0 0 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Normal · Pressed · Selected

#### Normal → **Pressed**  · applies to 1 group(s): RTL=False, Type=Tab Bar Item, OnColor=False
- home-06 › Icon: fill: Icon/icon-default-500=#6c737f → Icon/icon-primary=#1b8354
- Tab 1: fill: Text/text-secondary-paragraph=#6c737f → Text/text-primary=#1b8354

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Type=Tab Bar Item, OnColor=False
- (root): stroke: — → Border/border-primary=#1b8354; sw: — → 1 0 0 0
- home-06 › Icon: fill: Icon/icon-default-500=#6c737f → Icon/icon-primary=#1b8354
- Tab 1: fill: Text/text-secondary-paragraph=#6c737f → Text/text-primary=#1b8354

#### Normal → **Pressed**  · applies to 1 group(s): RTL=False, Type=Tab Bar Item, OnColor=True
- home-06 › Icon: fill: Alpha/alpha-white-50=#ffffff@0.5 → Alpha/alpha-white-70=#ffffff@0.7
- Tab 1: fill: Alpha/alpha-white-50=#ffffff@0.5 → Alpha/alpha-white-70=#ffffff@0.7

#### Normal → **Selected**  · applies to 1 group(s): RTL=False, Type=Tab Bar Item, OnColor=True
- (root): stroke: — → Border/border-background-white=#f3f4f6; sw: — → 1 0 0 0
- home-06 › Icon: fill: Alpha/alpha-white-50=#ffffff@0.5 → Icon/icon-oncolor=#ffffff
- Tab 1: fill: Alpha/alpha-white-50=#ffffff@0.5 → Text/text-oncolor-primary=#ffffff

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Normal, Type=Tab Bar Item, OnColor=False**
- `home-06`: 24×24
- `home-06 › Icon`: 19×20 · fill=Icon/icon-default-500=#6c737f
- `Tab 1`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"

**RTL=False, State=Normal, Type=Tab Bar Item, OnColor=True**
- `home-06`: 24×24
- `home-06 › Icon`: 19×20 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab 1`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Normal→Pressed | **SMART_ANIMATE 300ms EASE_OUT** | 4 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **SMART_ANIMATE 300ms EASE_OUT** | 4 |

---
## Tab Bar

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Type | VARIANT: No Selected · Tab 1 · Tab 2 · Tab 3 · Tab 4 · Tab 5 |
| OnColor | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Type=Tab 1, OnColor=True`)

- `RTL=False, Type=Tab 1, OnColor=True` [COMP] — 375×84 · lay=H/SPACE_BETWEEN/MIN · pad=0 4 8 4 · gap=10 · fill=Background/background-primary=#1b8354 · stroke=Background/background-primary=#1b8354 · sw=1 0 0 0 · sa=INSIDE · tokens{paddingLeft:Global/spacing-xs, paddingRight:Global/spacing-xs}
  - `Tab Item` [INST] ⟶ instance of **Tab Item / RTL=False, State=Selected, Type=Tab Bar Item, OnColor=True** — 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-background-white=#f3f4f6 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
    - `home-06` [INST] ⟶ instance of **home-06 / Style=Stroke, Type=Rounded** — 24×24
      - `Icon` [VECT] — 19×20 · fill=Icon/icon-oncolor=#ffffff
    - `Tab 1` [TEXT] — 30×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
    - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** *(hidden)* — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
      - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
  - `Tab Item` [INST] ⟶ instance of **Tab Item / RTL=False, State=Normal, Type=Tab Bar Item, OnColor=True** — 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
    - `search-01` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 22×22 · rot=-180
        - `Icon` [VECT] — 22×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
    - `Tab 1` [TEXT] — 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
    - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
      - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
  - `Tab Item` [INST] ⟶ instance of **Tab Item / RTL=False, State=Normal, Type=Tab Bar Item, OnColor=True** — 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
    - `bookmark-02` [INST] ⟶ instance of **bookmark-02 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 18×21
        - `Icon` [VECT] — 18×21 · fill=Alpha/alpha-white-50=#ffffff@0.5
    - `Tab 1` [TEXT] — 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
    - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** *(hidden)* — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
      - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
  - `Tab Item` [INST] ⟶ instance of **Tab Item / RTL=False, State=Normal, Type=Tab Bar Item, OnColor=True** — 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
    - `user` [INST] ⟶ instance of **user / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 20×22
        - `Icon` [VECT] — 20×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
    - `Tab 1` [TEXT] — 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
    - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** *(hidden)* — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
      - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
  - `Tab Item` [INST] ⟶ instance of **Tab Item / RTL=False, State=Normal, Type=Tab Bar Item, OnColor=True** — 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
    - `more-01` [INST] ⟶ instance of **more-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 15×15
        - `Icon` [VECT] — 15×15 · fill=Alpha/alpha-white-50=#ffffff@0.5
    - `Tab 1` [TEXT] — 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
    - `Positioned` [INST] ⟶ instance of **Positioned / Type=Large with max digits** *(hidden)* — 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
      - `99+` [TEXT] — 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
  - `Home Indicator` [GROU] — 134×5
    - `Home Indicator` [RECT] — 134×5 · r=100 · fill=Background/background-white=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Tab 1, OnColor=True (+5 more) | 375×84 | H/SPACE_BETWEEN/MIN · 0 4 8 4 · 10 |  | Background/background-primary=#1b8354 | Background/background-primary=#1b8354 1 0 0 0 |  |
| RTL=False, Type=Tab 1, OnColor=False (+5 more) | 375×84 | H/SPACE_BETWEEN/MIN · 0 4 8 4 · 10 |  | Background/background-white=#ffffff | Border/border-neutral-secondary=#e5e7eb 1 0 0 0 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Tab 1, OnColor=True**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-background-white=#f3f4f6 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Tab Item › Tab 1`: 30×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#2`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#3`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#4`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#5`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-white=#ffffff

**RTL=False, Type=Tab 1, OnColor=False**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-primary=#1b8354 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Icon/icon-primary=#1b8354
- `Tab Item › Tab 1`: 30×18 · fill=Text/text-primary=#1b8354 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#2`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#3`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#4`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-neutral-800=#1f2a37
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#5`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"

**RTL=False, Type=No Selected, OnColor=True**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#2`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#3`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#4`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#5`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-white=#ffffff

**RTL=False, Type=No Selected, OnColor=False**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#2`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#3`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#4`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#5`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-neutral-800=#1f2a37

**RTL=False, Type=Tab 2, OnColor=True**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-background-white=#f3f4f6 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Icon/icon-oncolor=#ffffff
- `Tab Item › Tab 1#2`: 30×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#3`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#4`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#5`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-white=#ffffff

**RTL=False, Type=Tab 2, OnColor=False**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-primary=#1b8354 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Icon/icon-primary=#1b8354
- `Tab Item › Tab 1#2`: 30×18 · fill=Text/text-primary=#1b8354 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#3`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#4`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#5`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-neutral-800=#1f2a37

**RTL=False, Type=Tab 3, OnColor=True**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#2`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-background-white=#f3f4f6 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Icon/icon-oncolor=#ffffff
- `Tab Item › Tab 1#3`: 30×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#4`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Alpha/alpha-white-50=#ffffff@0.5
- `Tab Item › Tab 1#5`: 30×18 · fill=Alpha/alpha-white-50=#ffffff@0.5 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-white=#ffffff

**RTL=False, Type=Tab 3, OnColor=False**
- `Tab Item`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › home-06`: 24×24
- `Tab Item › home-06 › Icon`: 19×20 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#2`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › search-01`: 24×24
- `Tab Item › search-01 › elements`: 22×22 · rot=-180
- `Tab Item › search-01 › elements › Icon`: 22×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#2`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item › Positioned`: 30×16 · lay=H/CENTER/CENTER · pad=0 4 0 4 · gap=0 · r=8 · fill=Tag/tag-background-error=#d92d20 · tokens{paddingLeft:df-space-1x, paddingRight:df-space-1x}
- `Tab Item › Positioned › 99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"
- `Tab Item#3`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · stroke=Border/border-primary=#1b8354 · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › bookmark-02`: 24×24
- `Tab Item › bookmark-02 › elements`: 18×21
- `Tab Item › bookmark-02 › elements › Icon`: 18×21 · fill=Icon/icon-primary=#1b8354
- `Tab Item › Tab 1#3`: 30×18 · fill=Text/text-primary=#1b8354 · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#4`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › user`: 24×24
- `Tab Item › user › elements`: 20×22
- `Tab Item › user › elements › Icon`: 20×22 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#4`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Tab Item#5`: 73×70 · lay=V/CENTER/CENTER · pad=12 8 12 8 · gap=4 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-lg, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-lg}
- `Tab Item › more-01`: 24×24
- `Tab Item › more-01 › elements`: 15×15
- `Tab Item › more-01 › elements › Icon`: 15×15 · fill=Icon/icon-default-500=#6c737f
- `Tab Item › Tab 1#5`: 30×18 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Tab 1"
- `Home Indicator`: 134×5
- `Home Indicator › Home Indicator`: 134×5 · r=100 · fill=Background/background-neutral-800=#1f2a37

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Tab Item ⟶ Tab Item :: RTL=False, State=Pressed, Type=Tab Bar Item, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 25 |
| ON_HOVER | CHANGE_TO | Tab Item ⟶ Tab Item :: RTL=True, State=Pressed, Type=Tab Bar Item, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 25 |
| ON_HOVER | CHANGE_TO | Tab Item ⟶ Tab Item :: RTL=True, State=Pressed, Type=Tab Bar Item, OnColor=True | **SMART_ANIMATE 300ms EASE_OUT** | 25 |
| ON_HOVER | CHANGE_TO | Tab Item ⟶ Tab Item :: RTL=False, State=Pressed, Type=Tab Bar Item, OnColor=False | **SMART_ANIMATE 300ms EASE_OUT** | 25 |

---
## Positioned

### Properties

| Property | Type / options |
|---|---|
| Type | VARIANT: Small · Large · Large with max digits |

### Anatomy (first variant: `Type=Large`)

- `Type=Large` [COMP] — 16×16
  - `Ellipse 4` [ELLI] — 16×16 · fill=Tag/tag-background-error=#d92d20
  - `1` [TEXT] — 4×16 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="1"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Type=Large | 16×16 |  ·  ·  |  |  |   |  |
| Type=Small | 12×12 |  ·  ·  |  |  |   |  |
| Type=Large with max digits | 30×16 | H/CENTER/CENTER · 0 4 0 4 · 0 | 8 | Tag/tag-background-error=#d92d20 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Type=Large**
- `1`: 4×16 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="1"
- `Ellipse 4`: 16×16 · fill=Tag/tag-background-error=#d92d20

**Type=Small**
- `Positioned/Small`: 12×12 · fill=Tag/tag-background-error=#d92d20

**Type=Large with max digits**
- `99+`: 22×18 · fill=Text/text-primary_on-color=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Semibold · txt="99+"

### Interactions & motion

*No prototype reactions defined on this component set.*
