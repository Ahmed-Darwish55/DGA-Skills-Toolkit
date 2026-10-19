# Progress indicator — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `5515:23355`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 5515-23355

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Progress Indicator

> Progress Indicator enables incremental navigation through a series of steps or stages in a process.

> Resources

## Component sets on this page (2)

- **_StepperBase** — 16 variants · `30150:68301`
- **Progress Indicator** — 40 variants · `30150:68350`

---
## _StepperBase

**Description (component description field):**

> Steps in the Platforms Code exhibit three behaviors depending on user interaction.

### Properties

| Property | Type / options |
|---|---|
| Step Number | TEXT=1 |
| Status | VARIANT: Current · Upcomming · Completed |
| Hover | VARIANT: no · yes |
| Focused | VARIANT: no · yes |
| Style | VARIANT: Cricles · dot |

### Anatomy (first variant: `Status=Completed, Hover=no, Focused=no, Style=Cricles`)

- `Status=Completed, Hover=no, Focused=no, Style=Cricles` [COMP] — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
  - `Cricle` [FRAM] — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
    - `tick-02` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 10×8
        - `Icon` [VECT] — 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Status=Completed, Hover=no, Focused=no, Style=Cricles (+7 more) | 32×32 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| Status=Completed, Hover=no, Focused=yes, Style=Cricles (+1 more) | 32×32 | H/MIN/MIN · 0 0 0 0 · 0 | 999 |  |   |  |
| Status=Completed, Hover=no, Focused=no, Style=dot (+5 more) | 16×16 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### State changes (axis `Status`; each state compared with the Default/first state of the same variant group)

States: Current · Upcomming · Completed · ⚠️ spelling as in Figma: `Upcomming` = **Upcoming** (source kept unchanged; treat as the normalised state)

#### Completed → **Current**  · applies to 1 group(s): Hover=no, Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): Hover=no, Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Cricle › 1 (10×24 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Hover=no, Focused=yes, Style=Cricles
- (root): r: 999 → —
- Stroke: sw: 2 → 3
- + Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- − Stroke › Cricle (hidden/removed)
- − Stroke › Cricle › tick-02 (hidden/removed)
- − Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Hover=yes, Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-button-current-hovered=#166a45; sw: — → 2
- + Cricle › 1 (10×24 · fill=Stepper/stepper-button-current-hovered=#166a45 · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): Hover=yes, Focused=no, Style=Cricles
- Cricle: fill: Stepper/stepper-button-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-button-upcomming-hovered=#9da4ae; sw: — → 2
- + Cricle › 1 (10×24 · fill=Stepper/stepper-button-upcomming-hovered=#9da4ae · font=mixed · fs=16 · txt="1")
- − Cricle › tick-02 (hidden/removed)
- − Cricle › tick-02 › elements (hidden/removed)
- − Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Hover=yes, Focused=yes, Style=Cricles
- (root): r: 999 → —
- + Stroke (32×32 · stroke=Border/border-black=#161616 · sw=3)
- + Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current-hovered=#166a45 · sw=2)
- + Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current-hovered=#166a45 · font=mixed · fs=16 · txt="1")
- − Stoke (hidden/removed)
- − Stoke › Cricle (hidden/removed)
- − Stoke › Cricle › tick-02 (hidden/removed)
- − Stoke › Cricle › tick-02 › elements (hidden/removed)
- − Stoke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): Hover=no, Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed=#1b8354 → Stepper/stepper-button-background=#ffffff; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 4

#### Completed → **Upcomming**  · applies to 1 group(s): Hover=no, Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed=#1b8354 → Background/background-white=#ffffff; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2

#### Completed → **Current**  · applies to 1 group(s): Hover=yes, Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed-hovered=#166a45 → Stepper/stepper-button-background=#ffffff; stroke: — → Stepper/stepper-button-current-hovered=#166a45; sw: — → 4

#### Completed → **Upcomming**  · applies to 1 group(s): Hover=yes, Focused=no, Style=dot
- Dot: fill: Stepper/stepper-button-completed-hovered=#166a45 → Background/background-white=#ffffff; stroke: — → Stepper/stepper-button-upcomming-hovered=#9da4ae; sw: — → 2

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Status=Completed, Hover=no, Focused=no, Style=Cricles**
- `Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Cricle › tick-02`: 16×16
- `Cricle › tick-02 › elements`: 10×8
- `Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER

**Status=Completed, Hover=no, Focused=yes, Style=Cricles**
- `Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Stroke › Cricle › tick-02`: 16×16
- `Stroke › Cricle › tick-02 › elements`: 10×8
- `Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER

**Status=Completed, Hover=yes, Focused=no, Style=Cricles**
- `Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45
- `Cricle › tick-02`: 16×16
- `Cricle › tick-02 › elements`: 10×8
- `Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER

**Status=Completed, Hover=yes, Focused=yes, Style=Cricles**
- `Stoke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Stoke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Stoke › Cricle › tick-02`: 16×16
- `Stoke › Cricle › tick-02 › elements`: 10×8
- `Stoke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER

**Status=Completed, Hover=no, Focused=no, Style=dot**
- `Dot`: 16×16 · fill=Stepper/stepper-button-completed=#1b8354

**Status=Completed, Hover=yes, Focused=no, Style=dot**
- `Dot`: 16×16 · fill=Stepper/stepper-button-completed-hovered=#166a45

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Progress Indicator

**Description (component description field):**

> The Steps UI element facilitates step-by-step navigation through a process or sequence, commonly used in forms or multi-step processes to guide users systematically. It provides clear visual cues, indicating the current step, to help users understand their progress and the steps they've completed.

### Properties

| Property | Type / options |
|---|---|
| Next Step | BOOLEAN=true |
| Show Step Name | BOOLEAN=true |
| Show Description | BOOLEAN=true |
| Step Name AR | TEXT=الخطوة الأولى |
| Step Name EN | TEXT=Step One |
| Step Description Eng | TEXT=this is step description |
| Step description AR | TEXT=وصف الخطوة |
| RTL | VARIANT: no · yes |
| Alignment | VARIANT: Horizontal · Vertical |
| State | VARIANT: Current · Completed · Upcomming |
| Hover | VARIANT: no · yes |
| Focused | VARIANT: no · yes |

### Anatomy (first variant: `RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=no`)

- `RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=no` [COMP] — 158×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Progress Indicator/progress-indicator-gap}
  - `Step` [FRAM] — 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `_StepperBase` [INST] ⟶ instance of **_StepperBase / Status=Completed, Hover=no, Focused=no, Style=Cricles** — 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Cricle` [FRAM] — 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
        - `tick-02` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 10×8
    - `Line` [RECT] — 126×2 · fill=Stepper/stepper-line-completed=#1b8354
  - `Text` [FRAM] — 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
    - `Step number` [TEXT] — 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `this is step description` [TEXT] — 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=no | 158×88 | V/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Completed, Hover=no, Focused=no (+3 more) | 95×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=yes (+2 more) | 166×88 | V/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Completed, Hover=no, Focused=yes (+1 more) | 103×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Horizontal, State=Completed, Hover=yes, Focused=no (+4 more) | 158×88 | V/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Current, Hover=no, Focused=no (+1 more) | 97×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Horizontal, State=Current, Hover=no, Focused=yes (+1 more) | 105×88 | V/CENTER/MAX · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Horizontal, State=Current, Hover=yes, Focused=yes | 150×88 | V/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Completed, Hover=no, Focused=no (+5 more) | 198×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Vertical, State=Completed, Hover=no, Focused=no (+3 more) | 119×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Vertical, State=Current, Hover=no, Focused=no (+1 more) | 121×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Completed, Hover=yes, Focused=yes (+1 more) | 206×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Vertical, State=Completed, Hover=yes, Focused=yes (+1 more) | 127×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=no, Alignment=Vertical, State=Current, Hover=no, Focused=yes (+1 more) | 190×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=yes, Alignment=Vertical, State=Current, Hover=no, Focused=yes (+1 more) | 129×128 | H/CENTER/MIN · 0 0 0 0 · 8 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Current · Completed · Upcomming · ⚠️ spelling as in Figma: `Upcomming` = **Upcoming** (source kept unchanged; treat as the normalised state)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=no, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-upcomming=#d2d6db)
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › this is step description: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Step › Line (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=no, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-current=#d2d6db)
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Step › Line (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=no, Focused=no
- + Step › Rectangle 3 (63×2 · fill=Stepper/stepper-line-upcomming=#d2d6db)
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › وصف الخطوة: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Step › Line (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=no, Focused=no
- (root): w: 95 → 97
- Step: w: 95 → 97
- + Step › Rectangle 3 (65×2 · fill=Stepper/stepper-line-current=#d2d6db)
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Text: w: 95 → 97
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › Line (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=no, Focused=yes
- Step › _StepperBase: r: 999 → —
- Step › _StepperBase › Stroke: sw: 2 → 3
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- Wrapper › Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=no, Focused=yes
- (root): w: 103 → 105
- Step: w: 103 → 105
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- Step › _StepperBase: r: 999 → —
- Step › _StepperBase › Stroke: sw: 2 → 3
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Wrapper: w: 103 → 105
- Wrapper › Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=yes, Focused=no
- + Step (158×32)
- + Step › _StepperBase (32×32)
- + Step › _StepperBase › Cricle (32×32 · stroke=Stepper/stepper-line-upcomming-hovered=#9da4ae · sw=2)
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae)
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › this is step description: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Frame 17 (hidden/removed)
- − Frame 17 › _StepperBase (hidden/removed)
- − Frame 17 › _StepperBase › Cricle (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Frame 17 › Rectangle 3 (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=yes, Focused=no
- + Step (158×32)
- + Step › _StepperBase (32×32)
- + Step › _StepperBase › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- + Step › Rectangle 3 (126×2 · fill=Stepper/stepper-line-current=#d2d6db)
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Frame 17 (hidden/removed)
- − Frame 17 › _StepperBase (hidden/removed)
- − Frame 17 › _StepperBase › Cricle (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Frame 17 › Rectangle 3 (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=yes, Focused=no
- + Step (95×32)
- + Step › Rectangle 3 (63×2 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae)
- + Step › _StepperBase (32×32)
- + Step › _StepperBase › Cricle (32×32 · stroke=Stepper/stepper-line-upcomming-hovered=#9da4ae · sw=2)
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae · font=mixed · fs=16 · txt="1")
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › وصف الخطوة: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Frame 17 (hidden/removed)
- − Frame 17 › Rectangle 3 (hidden/removed)
- − Frame 17 › _StepperBase (hidden/removed)
- − Frame 17 › _StepperBase › Cricle (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=yes, Focused=no
- (root): w: 95 → 97
- + Step (97×32)
- + Step › Rectangle 3 (65×2 · fill=Stepper/stepper-line-current=#d2d6db)
- + Step › _StepperBase (32×32)
- + Step › _StepperBase › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Text: w: 95 → 97
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Frame 17 (hidden/removed)
- − Frame 17 › Rectangle 3 (hidden/removed)
- − Frame 17 › _StepperBase (hidden/removed)
- − Frame 17 › _StepperBase › Cricle (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Horizontal, Hover=yes, Focused=yes
- (root): w: 166 → 150
- Step: w: 166 → 150
- Step › _StepperBase: r: 999 → —
- + Step › _StepperBase › Stroke (32×32 · stroke=Border/border-black=#161616 · sw=3)
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- + Step › Line (118×2 · fill=Stepper/stepper-line-current=#d2d6db)
- + Text (150×48 · stroke=Border/border-black=#161616 · sw=2)
- + Text › Step number (68×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="Step One")
- + Text › this is step description (142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="this is step description")
- − Step › _StepperBase › Stoke (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Step › Rectangle 3 (hidden/removed)
- − Wrapper (hidden/removed)
- − Wrapper › Text (hidden/removed)
- − Wrapper › Text › Step number (hidden/removed)
- − Wrapper › Text › this is step description (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Horizontal, Hover=yes, Focused=yes
- (root): w: 103 → 105
- Step: w: 103 → 105
- + Step › Line (73×2 · fill=Stepper/stepper-line-current=#d2d6db)
- Step › _StepperBase: r: 999 → —
- + Step › _StepperBase › Stroke (32×32 · stroke=Border/border-black=#161616 · sw=3)
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Wrapper: w: 103 → 105
- Wrapper › Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › Rectangle 3 (hidden/removed)
- − Step › _StepperBase › Stoke (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=no, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=no, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-line-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-upcomming=#d2d6db
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › this is step description: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=no, Focused=no
- (root): w: 119 → 121
- Text: w: 79 → 81
- Text › Step number: ts: Text md/Regular → Text md/Medium
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-current=#d2d6db
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=no, Focused=no
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › وصف الخطوة: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- Step › _StepperBase › Cricle: fill: Stepper/stepper-button-completed=#1b8354 → —; stroke: — → Stepper/stepper-line-upcomming=#d2d6db; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming=#d2d6db · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed=#1b8354 → Stepper/stepper-line-upcomming=#d2d6db
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=yes, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-line-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-current=#d2d6db
- Text › Step number: ts: Text md/Regular → Text md/Medium
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=yes, Focused=no
- Step › _StepperBase › Cricle: fill: Stepper/stepper-line-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-line-upcomming-hovered=#9da4ae; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-upcomming-hovered=#9da4ae
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › this is step description: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=yes, Focused=no
- (root): w: 119 → 121
- Text: w: 79 → 81
- Text › Step number: ts: Text md/Regular → Text md/Medium
- Step › _StepperBase › Cricle: fill: Stepper/stepper-line-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-button-current=#1b8354; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-current=#d2d6db
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Upcomming**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=yes, Focused=no
- Text › Step number: fill: Stepper/stepper-text-primary=#1f2a37 → Stepper/stepper-text-tertiary=#6c737f
- Text › وصف الخطوة: fill: Stepper/stepper-text-secondary=#384250 → Stepper/stepper-text-tertiary=#6c737f
- Step › _StepperBase › Cricle: fill: Stepper/stepper-line-completed-hovered=#166a45 → —; stroke: — → Stepper/stepper-line-upcomming-hovered=#9da4ae; sw: — → 2
- + Step › _StepperBase › Cricle › 1 (10×24 · fill=Stepper/stepper-line-upcomming-hovered=#9da4ae · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-upcomming-hovered=#9da4ae
- − Step › _StepperBase › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=yes, Focused=yes
- (root): w: 206 → 190
- Step › _StepperBase: r: 999 → —
- + Step › _StepperBase › Stroke (32×32 · stroke=Border/border-black=#161616 · sw=3)
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-current=#d2d6db
- Text: stroke: — → Border/border-black=#161616; sw: — → 2; pad: 0 16 0 0 → 0 4 0 4; w: 166 → 150
- + Text › Step number (68×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="Step One")
- + Text › this is step description (142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="this is step description")
- − Step › _StepperBase › Stoke (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon (hidden/removed)
- − Text › Frame 24 (hidden/removed)
- − Text › Frame 24 › Step number (hidden/removed)
- − Text › Frame 24 › this is step description (hidden/removed)

#### Completed → **Current**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=yes, Focused=yes
- (root): w: 127 → 129
- Text: stroke: — → Border/border-black=#161616; sw: — → 2; pad: 0 0 0 0 → 0 4 0 4; w: 87 → 89
- + Text › Step number (81×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="الخطوة الأولى")
- + Text › وصف الخطوة (74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="وصف الخطوة")
- Step › _StepperBase: r: 999 → —
- + Step › _StepperBase › Stroke (32×32 · stroke=Border/border-black=#161616 · sw=3)
- + Step › _StepperBase › Stroke › White Stroke (32×32 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › White Stroke › Cricle (32×32 · stroke=Stepper/stepper-button-current=#1b8354 · sw=2)
- + Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (10×24 · fill=Stepper/stepper-button-current=#1b8354 · font=mixed · fs=16 · txt="1")
- Step › Rectangle 3: fill: Stepper/stepper-line-completed-hovered=#166a45 → Stepper/stepper-line-current=#d2d6db
- − Text › Frame 24 (hidden/removed)
- − Text › Frame 24 › Step number (hidden/removed)
- − Text › Frame 24 › وصف الخطوة (hidden/removed)
- − Step › _StepperBase › Stoke (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements (hidden/removed)
- − Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon (hidden/removed)

#### Current → **Completed**  · applies to 1 group(s): RTL=no, Alignment=Vertical, Hover=no, Focused=yes
- (root): w: 190 → 206
- Step › _StepperBase: r: — → 999
- Step › _StepperBase › Stroke: sw: 3 → 2
- + Step › _StepperBase › Stroke › Cricle (32×32 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › Cricle › tick-02 (16×16)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements (10×8)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5)
- Step › Rectangle 3: fill: Stepper/stepper-line-current=#d2d6db → Stepper/stepper-line-completed=#1b8354
- Text: stroke: Border/border-black=#161616 → —; sw: 2 → —; pad: 0 4 0 4 → 0 16 0 0; w: 150 → 166
- + Text › Frame 24 (150×48 · stroke=Border/border-black=#161616 · sw=2)
- + Text › Frame 24 › Step number (66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="Step One")
- + Text › Frame 24 › this is step description (142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="this is step description")
- − Step › _StepperBase › Stroke › White Stroke (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (hidden/removed)
- − Text › Step number (hidden/removed)
- − Text › this is step description (hidden/removed)

#### Current → **Completed**  · applies to 1 group(s): RTL=yes, Alignment=Vertical, Hover=no, Focused=yes
- (root): w: 129 → 127
- Text: stroke: Border/border-black=#161616 → —; sw: 2 → —; pad: 0 4 0 4 → 0 0 0 0; w: 89 → 87
- + Text › Frame 24 (87×48 · stroke=Border/border-black=#161616 · sw=2)
- + Text › Frame 24 › Step number (79×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · txt="الخطوة الأولى")
- + Text › Frame 24 › وصف الخطوة (74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · txt="وصف الخطوة")
- Step › _StepperBase: r: — → 999
- Step › _StepperBase › Stroke: sw: 3 → 2
- + Step › _StepperBase › Stroke › Cricle (32×32 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1)
- + Step › _StepperBase › Stroke › Cricle › tick-02 (16×16)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements (10×8)
- + Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon (10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5)
- Step › Rectangle 3: fill: Stepper/stepper-line-current=#d2d6db → Stepper/stepper-line-completed=#1b8354
- − Text › Step number (hidden/removed)
- − Text › وصف الخطوة (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle (hidden/removed)
- − Step › _StepperBase › Stroke › White Stroke › Cricle › 1 (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=no**
- `Step`: 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER
- `Step › Line`: 126×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Text`: 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=yes, Alignment=Horizontal, State=Completed, Hover=no, Focused=no**
- `Step`: 95×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Step › Line`: 63×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Step › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354
- `Step › _StepperBase › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER
- `Text`: 95×48 · lay=V/CENTER/MAX · pad=0 0 0 16 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingLeft:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 79×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الخطوة الأولى" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text › وصف الخطوة`: 74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="وصف الخطوة" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=no, Alignment=Horizontal, State=Completed, Hover=no, Focused=yes**
- `Step`: 166×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stroke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER
- `Step › Rectangle 3`: 134×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Wrapper`: 166×48 · lay=H/CENTER/MIN · pad=0 16 0 0 · gap=0 · tokens{paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Wrapper › Text`: 150×48 · lay=V/MIN/MIN · pad=0 4 0 4 · gap=4 · stroke=Border/border-black=#161616 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs}
- `Wrapper › Text › Step number`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Wrapper › Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=yes, Alignment=Horizontal, State=Completed, Hover=no, Focused=yes**
- `Step`: 103×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Step › Rectangle 3`: 71×2 · fill=Stepper/stepper-line-completed=#1b8354
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stroke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stroke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed=#1b8354 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stroke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stroke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER
- `Wrapper`: 103×48 · lay=H/CENTER/MIN · pad=0 0 0 16 · gap=0 · tokens{paddingLeft:Progress Indicator/progress-text-content-side-padding}
- `Wrapper › Text`: 87×48 · lay=V/MIN/MAX · pad=0 4 0 4 · gap=4 · stroke=Border/border-black=#161616 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs}
- `Wrapper › Text › Step number`: 79×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الخطوة الأولى" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Wrapper › Text › وصف الخطوة`: 74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="وصف الخطوة" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=no, Alignment=Horizontal, State=Completed, Hover=yes, Focused=no**
- `Frame 17`: 158×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Frame 17 › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 17 › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45
- `Frame 17 › _StepperBase › Cricle › tick-02`: 16×16
- `Frame 17 › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER
- `Frame 17 › Rectangle 3`: 126×2 · fill=Stepper/stepper-line-completed-hovered=#166a45
- `Text`: 158×48 · lay=V/CENTER/MIN · pad=0 16 0 0 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=yes, Alignment=Horizontal, State=Completed, Hover=yes, Focused=no**
- `Frame 17`: 95×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Frame 17 › Rectangle 3`: 63×2 · fill=Stepper/stepper-line-completed-hovered=#166a45
- `Frame 17 › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0
- `Frame 17 › _StepperBase › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45
- `Frame 17 › _StepperBase › Cricle › tick-02`: 16×16
- `Frame 17 › _StepperBase › Cricle › tick-02 › elements`: 10×8
- `Frame 17 › _StepperBase › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Border/border-white=#ffffff · sw=1.5 · sa=CENTER
- `Text`: 95×48 · lay=V/CENTER/MAX · pad=0 0 0 16 · gap=4 · tokens{itemSpacing:Spacing/Progress Indicator/progress-text-content-gap, paddingLeft:Progress Indicator/progress-text-content-side-padding}
- `Text › Step number`: 79×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الخطوة الأولى" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text › وصف الخطوة`: 74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="وصف الخطوة" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=no, Alignment=Horizontal, State=Completed, Hover=yes, Focused=yes**
- `Step`: 166×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stoke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stoke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stoke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stoke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER
- `Step › Rectangle 3`: 134×2 · fill=Stepper/stepper-line-completed-hovered=#166a45
- `Wrapper`: 166×48 · lay=H/CENTER/MIN · pad=0 16 0 0 · gap=0 · tokens{paddingRight:Progress Indicator/progress-text-content-side-padding}
- `Wrapper › Text`: 150×48 · lay=V/MIN/MIN · pad=0 4 0 4 · gap=4 · stroke=Border/border-black=#161616 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs}
- `Wrapper › Text › Step number`: 66×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Step One" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Wrapper › Text › this is step description`: 142×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="this is step description" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=yes, Alignment=Horizontal, State=Completed, Hover=yes, Focused=yes**
- `Step`: 103×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Step › Rectangle 3`: 71×2 · fill=Stepper/stepper-line-completed-hovered=#166a45
- `Step › _StepperBase`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999
- `Step › _StepperBase › Stoke`: 32×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · r=999 · stroke=Border/border-black=#161616 · sw=2 · sa=OUTSIDE
- `Step › _StepperBase › Stoke › Cricle`: 32×32 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=999 · fill=Stepper/stepper-button-completed-hovered=#166a45 · stroke=Border/border-white=#ffffff · sw=1 · sa=INSIDE
- `Step › _StepperBase › Stoke › Cricle › tick-02`: 16×16
- `Step › _StepperBase › Stoke › Cricle › tick-02 › elements`: 10×8
- `Step › _StepperBase › Stoke › Cricle › tick-02 › elements › Icon`: 10×8 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-oncolor=#ffffff · sw=1.5 · sa=CENTER
- `Wrapper`: 103×48 · lay=H/CENTER/MIN · pad=0 0 0 16 · gap=0 · tokens{paddingLeft:Progress Indicator/progress-text-content-side-padding}
- `Wrapper › Text`: 87×48 · lay=V/MIN/MAX · pad=0 4 0 4 · gap=4 · stroke=Border/border-black=#161616 · sw=2 · sa=INSIDE · tokens{itemSpacing:Global/spacing-xs}
- `Wrapper › Text › Step number`: 79×24 · fill=Stepper/stepper-text-primary=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="الخطوة الأولى" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Wrapper › Text › وصف الخطوة`: 74×20 · fill=Stepper/stepper-text-secondary=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="وصف الخطوة" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Hover: no→yes | **INSTANT** | 10 |
| ON_CLICK | CHANGE_TO | Hover: yes→no, Focused: no→yes | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Hover: yes→no, Focused: yes→no | **INSTANT** | 4 |
