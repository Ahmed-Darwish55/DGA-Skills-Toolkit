# Rating — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `8420:156012`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 8420-156012

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Rating

> Rating enables users to assign a rating to various entities or experiences, including services, forum posts, items listed, and beyond.

> Resources

## Component sets on this page (2)

- **_RatingStar** — 24 variants · `8421:158261`
- **Rating** — 6 variants · `8422:3244`

---
## _RatingStar

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Large · Medium · Small |
| State | VARIANT: Normal · Pressed · Selected · Half |
| Style | VARIANT: Default · Brand |

### Anatomy (first variant: `Size=Large, State=Normal, Style=Default`)

- `Size=Large, State=Normal, Style=Default` [COMP] — 48×48
  - `Star 1` [STAR] — 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large, State=Normal, Style=Default (+5 more) | 48×48 |  ·  ·  |  |  |   |  |
| Size=Large, State=Pressed, Style=Default (+1 more) | 48×48 |  ·  ·  | 9999 |  |   |  |
| Size=Medium, State=Normal, Style=Default (+5 more) | 40×40 |  ·  ·  |  |  |   |  |
| Size=Medium, State=Pressed, Style=Default (+1 more) | 40×40 |  ·  ·  | 9999 |  |   |  |
| Size=Small, State=Normal, Style=Default (+5 more) | 32×32 |  ·  ·  |  |  |   |  |
| Size=Small, State=Pressed, Style=Default (+1 more) | 32×32 |  ·  ·  | 9999 |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Normal · Pressed · Selected · Half

#### Normal → **Half**  · applies to 1 group(s): Size=Large, Style=Default
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (23×45 · fill=Background/background-secondary=#dba102)
- + Star 3 (26×45 · fill=Background/background-neutral-200=#e5e7eb)

#### Normal → **Selected**  · applies to 3 group(s): Size=Large, Style=Default; Size=Medium, Style=Default; Size=Small, Style=Default
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Background/background-secondary=#dba102

#### Normal → **Pressed**  · applies to 2 group(s): Size=Large, Style=Default; Size=Large, Style=Brand
- (root): r: — → 9999
- + ring (54×54 · fill=Background/background-neutral-100=#f3f4f6)

#### Normal → **Half**  · applies to 1 group(s): Size=Large, Style=Brand
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (23×45 · fill=Background/background-primary=#1b8354)
- + Star 3 (26×45 · fill=Background/background-neutral-200=#e5e7eb)

#### Normal → **Selected**  · applies to 3 group(s): Size=Large, Style=Brand; Size=Medium, Style=Brand; Size=Small, Style=Brand
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Background/background-primary=#1b8354

#### Normal → **Half**  · applies to 1 group(s): Size=Medium, Style=Default
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (19×38 · fill=Background/background-secondary=#dba102)
- + Star 3 (22×38 · fill=Background/background-neutral-300=#d2d6db)

#### Normal → **Pressed**  · applies to 1 group(s): Size=Medium, Style=Default
- (root): r: — → 9999
- + ring (46×46 · fill=Background/background-neutral-100=#f3f4f6)

#### Normal → **Half**  · applies to 1 group(s): Size=Medium, Style=Brand
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (19×38 · fill=Background/background-primary=#1b8354)
- + Star 3 (22×38 · fill=Background/background-neutral-300=#d2d6db)

#### Normal → **Pressed**  · applies to 1 group(s): Size=Medium, Style=Brand
- (root): r: — → 9999
- + ring (46×46 · fill=Background/background-neutral-100=#f3f4f6)
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/200=#e5e7eb

#### Normal → **Half**  · applies to 1 group(s): Size=Small, Style=Default
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (15×30 · fill=Background/background-secondary=#dba102)
- + Star 3 (17×30 · fill=Background/background-neutral-300=#d2d6db)

#### Normal → **Pressed**  · applies to 2 group(s): Size=Small, Style=Default; Size=Small, Style=Brand
- (root): r: — → 9999
- + ring (38×38 · fill=Background/background-neutral-100=#f3f4f6)

#### Normal → **Half**  · applies to 1 group(s): Size=Small, Style=Brand
- Star 1: fill: Background/background-neutral-200=#e5e7eb → Colors/Gray neutral/300=#d2d6db
- + Star 2 (15×30 · fill=Background/background-primary=#1b8354)
- + Star 3 (17×30 · fill=Background/background-neutral-300=#d2d6db)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large, State=Normal, Style=Default**
- `Star 1`: 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Large, State=Normal, Style=Brand**
- `Star 1`: 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Medium, State=Normal, Style=Default**
- `Star 1`: 40×40 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Medium, State=Normal, Style=Brand**
- `Star 1`: 40×40 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Small, State=Normal, Style=Default**
- `Star 1`: 32×32 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Small, State=Normal, Style=Brand**
- `Star 1`: 32×32 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | State: Normal→Pressed | **SMART_ANIMATE 300ms EASE_OUT** | 6 |
| ON_CLICK | CHANGE_TO | State: Pressed→Selected | **SMART_ANIMATE 300ms EASE_OUT** | 6 |

---
## Rating

### Properties

| Property | Type / options |
|---|---|
| Size | VARIANT: Large · Meduim · Small |
| Brand | VARIANT: No · Yes |

### Anatomy (first variant: `Size=Large, Brand=No`)

- `Size=Large, Brand=No` [COMP] — 256×48 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
  - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Large, State=Selected, Style=Default** — 48×48
    - `Star 1` [STAR] — 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
  - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Large, State=Selected, Style=Default** — 48×48
    - `Star 1` [STAR] — 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
  - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Large, State=Selected, Style=Default** — 48×48
    - `Star 1` [STAR] — 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
  - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Large, State=Half, Style=Default** — 48×48
    - `Star 1` [STAR] — 48×48 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
    - `Star 2` [VECT] — 23×45 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
    - `Star 3` [VECT] — 26×45 · r=2 · fill=Background/background-neutral-200=#e5e7eb · rot=-180 · tokens{cornerRadius:radius-xs}
  - `_RatingStar` [INST] ⟶ instance of **_RatingStar / Size=Large, State=Normal, Style=Default** — 48×48
    - `Star 1` [STAR] — 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Size=Large, Brand=No (+1 more) | 256×48 | H/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Meduim, Brand=No (+1 more) | 216×40 | H/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |
| Size=Small, Brand=No (+1 more) | 176×32 | H/MIN/MIN · 0 0 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Size=Large, Brand=No**
- `_RatingStar`: 48×48
- `_RatingStar › Star 1`: 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 48×48
- `_RatingStar › Star 1#2`: 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 48×48
- `_RatingStar › Star 1#3`: 48×48 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 48×48
- `_RatingStar › Star 1#4`: 48×48 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 23×45 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 26×45 · r=2 · fill=Background/background-neutral-200=#e5e7eb · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 48×48
- `_RatingStar › Star 1#5`: 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Large, Brand=Yes**
- `_RatingStar`: 48×48
- `_RatingStar › Star 1`: 48×48 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 48×48
- `_RatingStar › Star 1#2`: 48×48 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 48×48
- `_RatingStar › Star 1#3`: 48×48 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 48×48
- `_RatingStar › Star 1#4`: 48×48 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 23×45 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 26×45 · r=2 · fill=Background/background-neutral-200=#e5e7eb · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 48×48
- `_RatingStar › Star 1#5`: 48×48 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Meduim, Brand=No**
- `_RatingStar`: 40×40
- `_RatingStar › Star 1`: 40×40 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 40×40
- `_RatingStar › Star 1#2`: 40×40 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 40×40
- `_RatingStar › Star 1#3`: 40×40 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 40×40
- `_RatingStar › Star 1#4`: 40×40 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 19×38 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 22×38 · r=2 · fill=Background/background-neutral-300=#d2d6db · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 40×40
- `_RatingStar › Star 1#5`: 40×40 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Meduim, Brand=Yes**
- `_RatingStar`: 40×40
- `_RatingStar › Star 1`: 40×40 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 40×40
- `_RatingStar › Star 1#2`: 40×40 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 40×40
- `_RatingStar › Star 1#3`: 40×40 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 40×40
- `_RatingStar › Star 1#4`: 40×40 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 19×38 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 22×38 · r=2 · fill=Background/background-neutral-300=#d2d6db · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 40×40
- `_RatingStar › Star 1#5`: 40×40 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Small, Brand=No**
- `_RatingStar`: 32×32
- `_RatingStar › Star 1`: 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 32×32
- `_RatingStar › Star 1#2`: 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 32×32
- `_RatingStar › Star 1#3`: 32×32 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 32×32
- `_RatingStar › Star 1#4`: 32×32 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 15×30 · r=2 · fill=Background/background-secondary=#dba102 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 17×30 · r=2 · fill=Background/background-neutral-300=#d2d6db · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 32×32
- `_RatingStar › Star 1#5`: 32×32 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

**Size=Small, Brand=Yes**
- `_RatingStar`: 32×32
- `_RatingStar › Star 1`: 32×32 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#2`: 32×32
- `_RatingStar › Star 1#2`: 32×32 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#3`: 32×32
- `_RatingStar › Star 1#3`: 32×32 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar#4`: 32×32
- `_RatingStar › Star 1#4`: 32×32 · r=2 · fill=Colors/Gray neutral/300=#d2d6db · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 2`: 15×30 · r=2 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:radius-xs}
- `_RatingStar › Star 3`: 17×30 · r=2 · fill=Background/background-neutral-300=#d2d6db · rot=-180 · tokens{cornerRadius:radius-xs}
- `_RatingStar#5`: 32×32
- `_RatingStar › Star 1#5`: 32×32 · r=2 · fill=Background/background-neutral-200=#e5e7eb · tokens{cornerRadius:radius-xs}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _RatingStar ⟶ _RatingStar :: Size=Large, State=Pressed, Style=Default | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _RatingStar ⟶ _RatingStar :: Size=Medium, State=Pressed, Style=Default | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
| ON_HOVER | CHANGE_TO | _RatingStar ⟶ _RatingStar :: Size=Small, State=Pressed, Style=Default | **SMART_ANIMATE 300ms EASE_OUT** | 2 |
