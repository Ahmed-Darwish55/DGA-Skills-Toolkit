# Progress indicator — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `5515:23355`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 5515-23355

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Progress Indicator

> Progress Indicator enables incremental navigation through a series of steps or stages in a process.

> Resources

## Component sets on this page (2)

- **_StepperBase** — 8 variants · `5515:24011`
- **Stepper** — 20 variants · `5522:8665`

---
## _StepperBase

### Properties

| Property | Type / options |
|---|---|
| Step Number | TEXT=1 |
| Status | VARIANT: Current · Upcomming · Completed |
| Focused | VARIANT: no · yes |
| Style | VARIANT: Cricles · dot |

### Anatomy (first variant: `Status=Completed, Focused=no, Style=Cricles`)

- `Status=Completed, Focused=no, Style=Cricles` [COMP] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Cricle` [FRAM] — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
    - `tick-02` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 10×8
        - `Icon` [VECT] — 10×8 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Status=Completed, Focused=no, Style=Cricles (+3 more) | 32×32 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Status=Completed, Focused=yes, Style=Cricles | 32×32 | H/MIN/MIN · 0 0 0 0 · 0 | 999 |  |   |  |
| Status=Completed, Focused=no, Style=dot (+2 more) | 16×16 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### State changes (axis `Status`; each state compared with the Default/first state of the same variant group)

States: Current · Upcomming · Completed · ⚠️ spelling as in Figma: `Upcomming` = **Upcoming** (source kept unchanged; treat as the normalised state)

#### Completed → **Current**  · applies to 1 group(s): Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Cricle › 1 (10×20 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Focused=yes, Style=Cricles
- (root): r: 999 → —
- Stroke: sw: 2 → 3
- + Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Stroke › White Stroke › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- − Stroke › Cricle (hidden/removed)
- − Stroke › Cricle › tick-02 (hidden/removed)
- − Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed=#1b8354 → Background/background-white=#ffffff; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 4

#### Completed → **Upcomming**  · applies to 1 group(s): Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed=#1b8354 → Background/background-white=#ffffff; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Status=Completed, Focused=no, Style=Cricles**
- `Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Cricle › tick-02`: 16×16
- `Cricle › tick-02 › elements`: 10×8
- `Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff

**Status=Completed, Focused=yes, Style=Cricles**
- `Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Controls/control-neutral-focused=#0d121c · sw=2 · sa=OUTSIDE
- `Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Stroke › Cricle › tick-02`: 16×16
- `Stroke › Cricle › tick-02 › elements`: 10×8
- `Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff

**Status=Completed, Focused=no, Style=dot**
- `Dot`: 16×16 · fill=Stepper/stepper-button-completed=#1b8354

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Stepper

### Properties

| Property | Type / options |
|---|---|
| Next Step | BOOLEAN=true |
| Step Name | TEXT=Step One |
| Show Step Name | BOOLEAN=true |
| Step Description | TEXT=this is step description |
| Show Description | BOOLEAN=true |
| RTL | VARIANT: no · yes |
| Alignment | VARIANT: Horizontal · Vertical |
| State | VARIANT: Current · Completed · Upcomming |
| Focused | VARIANT: no · yes |

### Anatomy (first variant: `RTL=no, Alignment=Horizontal, State=Completed, Focused=no`)

- `RTL=no, Alignment=Horizontal, State=Completed, Focused=no` [COMP] — 158×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Progress Indicator/progress-indicator-gap}
  - `Step` [FRAM] — 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `_StepperBase` [INST] ⟶ instance of **_StepperBase / Status=Completed, Focused=no, Style=Cricles** — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Cricle` [FRAM] — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
        - `tick-02` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 10×8
    - `Line` [RECT] — 126×2 · fill=Stepper/stepper-line-completed=#1b8354
  - `Text` [FRAM] — 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4
    - `Step One` [TEXT] — 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
    - `this is step description` [TEXT] — 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=no, Alignment=Horizontal, State=Completed, Focused=no | 158×88 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Completed, Focused=no (+2 more) | 158×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Horizontal, State=Completed, Focused=yes (+1 more) | 166×88 | V/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Completed, Focused=yes (+1 more) | 166×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Horizontal, State=Upcomming, Focused=no (+1 more) | 158×88 | V/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Completed, Focused=no (+2 more) | 198×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Vertical, State=Completed, Focused=no (+2 more) | 182×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Current, Focused=yes (+2 more) | 190×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Completed, Focused=yes | 206×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Current · Completed · Upcomming · ⚠️ spelling as in Figma: `Upcomming` = **Upcoming** (source kept unchanged; treat as the normalised state)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-upcomming=#d2d6db)
- Text › Step One: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-secondary=#384250
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Step › Line (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-current=#d2d6db)
- Text › Step One: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Step › Line (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Focused=no
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-upcomming=#d2d6db)
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Text › Step One: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-secondary=#384250
- − Step › Line (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Focused=no
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-button-upcomming=#d2d6db)
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Text › Step One: ts: Text md/Regular → Text md/Medium
- − Step › Line (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Focused=yes
- Step › _StepperBase: r: 999 → —
- Step › _StepperBase › Stroke: sw: 2 → 3
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- Wrapper › Text: stroke: Controls/control-neutral-focused=#0d121c → #000000
- Wrapper › Text › Step One: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Focused=yes
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-button-upcomming=#d2d6db
- Step › _StepperBase: r: 999 → —
- Step › _StepperBase › Stroke: sw: 2 → 3
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Wrapper › Text › Step One: ts: Text md/Regular → —
- − Step › _StepperBase › Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- Text › Step One: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-line-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-line-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-upcomming=#d2d6db
- Text › Step One: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-secondary=#384250
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Focused=no
- Text › Step One: ts: Text md/Regular → Text md/Medium
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-button-upcomming=#d2d6db
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Focused=no
- Text › Step One: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-secondary=#384250
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-line-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×20 · fill=Stepper/stepper-line-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-upcomming=#d2d6db
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Current → **Completed**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Focused=yes
- (root): w: 190 → 206
- Step › _StepperBase: r: — → 999
- Step › _StepperBase › Stroke: sw: 3 → 2
- + Step › _StepperBase › Stroke › Cricle (32×32 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › Cricle › tick-02 (16×16)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements (10×8)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (10×8 · fill=Icon/icon-oncolor=#ffffff)
- Step › Rectangle 3: fill: Stepper/stepper-line-current=#d2d6db → Stepper/stepper-line-completed=#1b8354
- Text: stroke: #000000 → —; sw: 2 → —; pad: 0 4 0 4 → 0 16 0 0; gap: 4 → 10; w: 150 → 166
- + Text › Frame 24 (150×48 · stroke=Controls/control-neutral-focused=#0d121c · sw=2)
- + Text › Frame 24 › Step One (66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="Step One")
- + Text › Frame 24 › this is step description (142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="this is step description")
- − Step › _StepperBase › Stroke › White Stroke (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (hidden/removed)
- − Text › Step One (hidden/removed)
- − Text › this is step description (hidden/removed)

#### Current → **Completed**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Focused=yes
- Text: stroke: #000000 → —; sw: 2 → —; pad: 0 4 0 4 → 0 0 0 0; gap: 4 → 10
- + Text › Frame 24 (150×48 · stroke=#000000 · sw=2)
- + Text › Frame 24 › Step One (66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="Step One")
- + Text › Frame 24 › this is step description (142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="this is step description")
- Step › _StepperBase: r: — → 999
- Step › _StepperBase › Stroke: sw: 3 → 2
- + Step › _StepperBase › Stroke › Cricle (32×32 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › Cricle › tick-02 (16×16)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements (10×8)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (10×8 · fill=Icon/icon-oncolor=#ffffff)
- Step › Rectangle 3: fill: Stepper/stepper-button-upcomming=#d2d6db → Stepper/stepper-line-completed=#1b8354
- − Text › Step One (hidden/removed)
- − Text › this is step description (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=no, Alignment=Horizontal, State=Completed, Focused=no**
- `Step`: 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Step › Line`: 126×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Text`: 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4
- `Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=yes, Alignment=Horizontal, State=Completed, Focused=no**
- `Step`: 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › Line`: 126×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Text`: 158×48 · lay=V/CENTER/MAX · pad=0 16 0 0 · gap=4
- `Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=no, Alignment=Horizontal, State=Completed, Focused=yes**
- `Step`: 166×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Controls/control-neutral-focused=#0d121c · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stroke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Step › Rectangle 3`: 134×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Wrapper`: 166×48 · lay=H/CENTER/MIN · pad=0 16 0 0 · gap=10
- `Wrapper › Text`: 150×48 · lay=V/MIN/MIN · pad=0 4 0 4 · gap=4 · stroke=Controls/control-neutral-focused=#0d121c · sw=2 · sa=INSIDE
- `Wrapper › Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Wrapper › Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=yes, Alignment=Horizontal, State=Completed, Focused=yes**
- `Step`: 166×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › Rectangle 3`: 134×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Controls/control-neutral-focused=#0d121c · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stroke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Wrapper`: 166×48 · lay=H/CENTER/MIN · pad=0 0 0 16 · gap=10
- `Wrapper › Text`: 150×48 · lay=V/MIN/MAX · pad=0 4 0 4 · gap=4 · stroke=#000000 · sw=2 · sa=INSIDE
- `Wrapper › Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Wrapper › Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=no, Alignment=Vertical, State=Completed, Focused=no**
- `Step`: 32×128 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Step › Rectangle 3`: 2×96 · fill=Stepper/stepper-line-completed=#1b8354
- `Text`: 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4
- `Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=yes, Alignment=Vertical, State=Completed, Focused=no**
- `Text`: 142×48 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=4
- `Text › Step One`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"
- `Step`: 32×128 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-oncolor=#ffffff
- `Step › Rectangle 3`: 2×96 · fill=Stepper/stepper-line-completed=#1b8354

**RTL=no, Alignment=Vertical, State=Current, Focused=yes**
- `Step`: 32×128 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Controls/control-neutral-focused=#0d121c · sw=3 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › White Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Border/border-white=#ffffff · sw=1 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › White Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2 · sa=INSIDE
- `Step › _StepperBase › Stroke › White Stroke › Cricle › 1`: 10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · lh=20 · txt="1"
- `Step › Rectangle 3`: 2×96 · fill=Stepper/stepper-line-current=#d2d6db
- `Text`: 150×48 · lay=V/MIN/MIN · pad=0 4 0 4 · gap=4 · stroke=#000000 · sw=2 · sa=INSIDE
- `Text › Step One`: 68×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"

**RTL=yes, Alignment=Vertical, State=Current, Focused=yes**
- `Text`: 150×48 · lay=V/CENTER/MAX · pad=0 4 0 4 · gap=4 · stroke=#000000 · sw=2 · sa=INSIDE
- `Text › Step One`: 68×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Step One"
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description"
- `Step`: 32×128 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Controls/control-neutral-focused=#0d121c · sw=3 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › White Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=10 · r=999 · stroke=Border/border-white=#ffffff · sw=1 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › White Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=10 · r=999 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2 · sa=INSIDE
- `Step › _StepperBase › Stroke › White Stroke › Cricle › 1`: 10×20 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · lh=20 · txt="1"
- `Step › Rectangle 3`: 2×96 · fill=Stepper/stepper-button-upcomming=#d2d6db

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | RTL=no, Alignment=Horizontal, State=Completed, Focused=no ⟶ Stepper/Horizontal/Completed/yes/no/no | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=yes, Alignment=Horizontal, State=Completed, Focused=no ⟶ Stepper/Horizontal/Completed/yes/no/yes | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=no, Alignment=Horizontal, State=Completed, Focused=yes ⟶ Stepper/Horizontal/Completed/yes/yes/no | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=yes, Alignment=Horizontal, State=Completed, Focused=yes ⟶ Stepper/Horizontal/Completed/yes/yes/yes | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=no, Alignment=Horizontal, State=Upcomming, Focused=no ⟶ Stepper/Horizontal/Upcomming/yes/no/no | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=yes, Alignment=Horizontal, State=Upcomming, Focused=no ⟶ Stepper/Horizontal/Upcomming/yes/no/yes | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=no, Alignment=Horizontal, State=Current, Focused=no ⟶ Stepper/Horizontal/Current/yes/no/no | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=yes, Alignment=Horizontal, State=Current, Focused=no ⟶ Stepper/Horizontal/Current/yes/no/yes | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=no, Alignment=Horizontal, State=Current, Focused=yes ⟶ Stepper/Horizontal/Current/yes/yes/no | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | RTL=yes, Alignment=Horizontal, State=Current, Focused=yes ⟶ Stepper/Horizontal/Current/yes/yes/yes | **INSTANT** | 1 |
