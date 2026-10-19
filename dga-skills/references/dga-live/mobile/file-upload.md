# File upload — DGA Platforms Code (mobile)

> Source: **Mobile Components - Platforms Code (community copy)** · page `856:31729`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Mobile Components» community file (figma.com/@sdga), node 856-31729

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> File upload

> File uploader facilitates selecting and uploading files from the user's device to a web platform. Users initiate the process through a designated area, review selections, and monitor upload progress. Upon completion, they receive confirmation, ensuring a smooth experience.

> Resources

## Component sets on this page (4)

- **_Drop Zone** — 6 variants · `5698:34485`
- **_File** — 6 variants · `5698:34504`
- **File Upload / Multiple** — 2 variants · `10746:17644`
- **File Upload / Single** — 6 variants · `11261:13363`

---
## _Drop Zone

### Properties

| Property | Type / options |
|---|---|
| Button | BOOLEAN=true |
| Helper Text | BOOLEAN=true |
| RTL | VARIANT: False · True |
| State | VARIANT: Default · Drag+hover · Disabled |

### Anatomy (first variant: `RTL=False, State=Default`)

- `RTL=False, State=Default` [COMP] — 328×200 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=16 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-3xl, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-3xl, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
  - `file-upload` [INST] ⟶ instance of **file-upload / Style=Stroke, Type=Rounded** — 32×32
    - `elements` [GROU] — 25×29
      - `Icon` [VECT] — 25×29 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default-500=#6c737f · sw=0.10000000149011612 · sa=INSIDE
  - `Text wrapper` [FRAM] — 280×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
    - `Lead Text` [TEXT] — 280×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
    - `Helper Text` [TEXT] — 280×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="csv, pdf, png, jpeg"
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO** — 106×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 10×15 · rot=-90
        - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
    - `Text wrapper` [FRAM] — 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files"
    - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 18×18
        - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default | 328×200 | V/CENTER/CENTER · 24 24 24 24 · 16 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, State=Drag+hover | 328×200 | V/CENTER/CENTER · 24 24 24 24 · 16 | 4 | Background/background-success-25=#f6fef9 | Border/border-success=#067647 2 |  |
| RTL=False, State=Disabled | 328×200 | V/CENTER/CENTER · 24 24 24 24 · 16 | 4 |  | Global/border-disabled=#9da4ae 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Drag+hover · Disabled

#### Default → **Drag+hover**  · applies to 1 group(s): RTL=False
- (root): fill: Background/background-neutral-100=#f3f4f6 → Background/background-success-25=#f6fef9; stroke: Border/border-neutral-primary=#d2d6db → Border/border-success=#067647; sw: 1 → 2
- file-upload › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-success=#067647; stroke: Icon/icon-default-500=#6c737f → Icon/icon-success=#067647
- Text wrapper › Lead Text: fill: Text/text-display=#1f2a37 → Text/text-success=#067647
- Text wrapper › Helper Text: fill: Text/text-primary-paragraph=#384250 → Text/text-success=#067647
- Button: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Button › Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False
- (root): fill: Background/background-neutral-100=#f3f4f6 → —; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- file-upload › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae; stroke: Icon/icon-default-500=#6c737f → Icon/icon-default-400=#9da4ae
- Text wrapper › Lead Text: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Text wrapper › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae
- Button: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Button › Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default**
- `file-upload`: 32×32
- `file-upload › elements`: 25×29
- `file-upload › elements › Icon`: 25×29 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default-500=#6c737f · sw=0.10000000149011612 · sa=INSIDE
- `Text wrapper`: 280×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Text wrapper › Lead Text`: 280×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
- `Text wrapper › Helper Text`: 280×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="csv, pdf, png, jpeg"
- `Button`: 106×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Text wrapper`: 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button › Text wrapper › Text`: 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Medium/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Medium/Hovered/Secondary-Solid/False/False | **INSTANT** | 1 |

---
## _File

### Properties

| Property | Type / options |
|---|---|
| File Name | TEXT=File-name.csv |
| Error Message | TEXT=Here goes the helper text. |
| File Name AR | TEXT=اسم الملف.csv |
| Error Message AR | TEXT=تكتب هنا رسالة المساعدة. |
| RTL | VARIANT: False · True |
| State | VARIANT: Uploaded · Loading · Error |

### Anatomy (first variant: `RTL=False, State=Loading`)

- `RTL=False, State=Loading` [COMP] — 328×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
  - `Indicator + file name + remove` [FRAM] — 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
    - `Text wrapper` [FRAM] — 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Spinner` [INST] ⟶ instance of **Spinner / Size=tiny, Style=Neutral, Indicator=1** — 20×20
        - `Track` [ELLI] — 20×20 · fill=Background/background-neutral-100=#f3f4f6
        - `Tail` [ELLI] — 20×20 · r=4 · fill=Background/background-black=#161616 · rot=90
      - `File Name` [TEXT] — 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
    - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
      - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
        - `cancel-01` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 12×12
          - `elements` [GROU] — 8×8

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Loading (+1 more) | 328×36 | V/MIN/MIN · 0 0 0 0 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| RTL=False, State=Error | 328×72 | V/MIN/MIN · 0 0 0 0 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-error=#b42318 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Uploaded · Loading · Error

#### Loading → **Uploaded**  · applies to 1 group(s): RTL=False
- + Indicator + file name + remove › Text wrapper › Feedback Icon (20×20)
- + Indicator + file name + remove › Text wrapper › Feedback Icon › bg (18×18 · fill=Background/background-white=#ffffff)
- + Indicator + file name + remove › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-success=#067647)
- Indicator + file name + remove › Trail wrapper › Button-Close: fill: Button/button-background-neutral-hovered=#f3f4f6 → Button/button-background-neutral-default=#f3f4f6
- − Indicator + file name + remove › Text wrapper › Spinner (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Spinner › Track (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Spinner › Tail (hidden/removed)

#### Loading → **Error**  · applies to 1 group(s): RTL=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-error=#b42318; h: 36 → 72
- + Frame 4 (328×36)
- + Frame 4 › Text wrapper (284×20)
- + Frame 4 › Text wrapper › Feedback Icon (20×20)
- + Frame 4 › Text wrapper › Feedback Icon › bg (18×18 · fill=Background/background-white=#ffffff)
- + Frame 4 › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-error=#b42318)
- + Frame 4 › Text wrapper › File Name (256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="File-name.csv")
- + Frame 4 › Trail wrapper (20×20)
- + Frame 4 › Trail wrapper › Button-Close (20×20 · fill=Button/button-background-neutral-default=#f3f4f6)
- + Frame 4 › Trail wrapper › Button-Close › cancel-01 (12×12)
- + Frame 4 › Trail wrapper › Button-Close › cancel-01 › elements (8×8)
- + Frame 4 › Trail wrapper › Button-Close › cancel-01 › elements › Icon (8×8 · fill=Icon/icon-default=#161616)
- + Error message (328×36 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0)
- + Error message › Text wrapper (312×20)
- + Error message › Text wrapper › Text (312×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · txt="Here goes the helper text.")
- − Indicator + file name + remove (hidden/removed)
- − Indicator + file name + remove › Text wrapper (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Spinner (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Spinner › Track (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Spinner › Tail (hidden/removed)
- − Indicator + file name + remove › Text wrapper › File Name (hidden/removed)
- − Indicator + file name + remove › Trail wrapper (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements › Icon (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Loading**
- `Indicator + file name + remove`: 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Indicator + file name + remove › Text wrapper`: 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Indicator + file name + remove › Text wrapper › Spinner`: 20×20
- `Indicator + file name + remove › Text wrapper › Spinner › Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Indicator + file name + remove › Text wrapper › Spinner › Tail`: 20×20 · r=4 · fill=Background/background-black=#161616 · rot=90
- `Indicator + file name + remove › Text wrapper › File Name`: 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
- `Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01`: 12×12
- `Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements`: 8×8
- `Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Spinner ⟶ Spinner :: Size=tiny, Style=Neutral, Indicator=2 | **SMART_ANIMATE 250ms LINEAR** | 2 |
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close/x Small/Hovered/False | **DISSOLVE 200ms LINEAR** | 2 |

---
## File Upload / Multiple

### Properties

| Property | Type / options |
|---|---|
| File 2 | BOOLEAN=true |
| File 3 | BOOLEAN=true |
| Uploaded | BOOLEAN=true |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 328×376 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `_Drop Zone` [INST] ⟶ instance of **_Drop Zone / RTL=False, State=Default** — 328×200 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=16 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-3xl, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-3xl, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
    - `file-upload` [INST] ⟶ instance of **file-upload / Style=Stroke, Type=Rounded** — 32×32
      - `elements` [GROU] — 25×29
        - `Icon` [VECT] — 25×29 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default-500=#6c737f · sw=0.10000000149011612 · sa=INSIDE
    - `Text wrapper` [FRAM] — 280×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
      - `Lead Text` [TEXT] — 280×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
      - `Helper Text` [TEXT] — 280×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="csv, pdf, png, jpeg"
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Icon only=False, On-color=False, Destructive=NO** — 106×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files"
      - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
  - `Files` [FRAM] — 328×160 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `File 1` [INST] ⟶ instance of **_File / RTL=False, State=Uploaded** — 328×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE
      - `Indicator + file name + remove` [FRAM] — 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
        - `Text wrapper` [FRAM] — 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Success-check, Style=Container, Size=24, Ring=No** — 20×20
          - `File Name` [TEXT] — 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `File 2` [INST] ⟶ instance of **_File / RTL=False, State=Loading** — 328×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
      - `Indicator + file name + remove` [FRAM] — 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
        - `Text wrapper` [FRAM] — 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Spinner` [INST] ⟶ instance of **Spinner / Size=tiny, Style=Neutral, Indicator=1** — 20×20
          - `File Name` [TEXT] — 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `File 3` [INST] ⟶ instance of **_File / RTL=False, State=Error** — 328×72 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-error=#b42318 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
      - `Frame 4` [FRAM] — 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
        - `Text wrapper` [FRAM] — 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Container, Size=24, Ring=No** — 20×20
          - `File Name` [TEXT] — 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=9999
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Error message` [FRAM] — 328×36 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · stroke=Border/border-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
        - `Text wrapper` [FRAM] — 312×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 312×20 · fill=Text/text-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Here goes the helper text."

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 328×376 | V/MIN/MIN · 0 0 0 0 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `_Drop Zone`: 328×200 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=16 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-3xl, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-3xl, topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `_Drop Zone › file-upload`: 32×32
- `_Drop Zone › file-upload › elements`: 25×29
- `_Drop Zone › file-upload › elements › Icon`: 25×29 · fill=Icon/icon-default=#161616 · stroke=Icon/icon-default-500=#6c737f · sw=0.10000000149011612 · sa=INSIDE
- `_Drop Zone › Text wrapper`: 280×48 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `_Drop Zone › Text wrapper › Lead Text`: 280×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
- `_Drop Zone › Text wrapper › Helper Text`: 280×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="csv, pdf, png, jpeg"
- `_Drop Zone › Button`: 106×40 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-md-padding, paddingRight:Button/buttons-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Drop Zone › Button › Text wrapper`: 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Drop Zone › Button › Text wrapper › Text`: 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files"
- `Files`: 328×160 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Files › File 1`: 328×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE
- `Files › File 1 › Indicator + file name + remove`: 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Files › File 1 › Indicator + file name + remove › Text wrapper`: 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon`: 20×20
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › bg`: 18×18 · fill=Background/background-white=#ffffff
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Files › File 1 › Indicator + file name + remove › Text wrapper › File Name`: 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
- `Files › File 1 › Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01`: 12×12
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements`: 8×8
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616
- `Files › File 2`: 328×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- `Files › File 2 › Indicator + file name + remove`: 328×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Files › File 2 › Indicator + file name + remove › Text wrapper`: 284×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Files › File 2 › Indicator + file name + remove › Text wrapper › Spinner`: 20×20
- `Files › File 2 › Indicator + file name + remove › Text wrapper › Spinner › Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Files › File 2 › Indicator + file name + remove › Text wrapper › Spinner › Tail`: 20×20 · r=4 · fill=Background/background-black=#161616 · rot=90
- `Files › File 2 › Indicator + file name + remove › Text wrapper › File Name`: 256×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv"
- `Files › File 2 › Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Files › File 2 › Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · fill=Button/button-background-neutral-hovered=#f3f4f6 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Files › File 2 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01`: 12×12
- `Files › File 2 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements`: 8×8
- `Files › File 2 › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements › Icon`: 8×8 · fill=Icon/icon-default=#161616
- `Files › File 3`: 328×72 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-error=#b42318 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/4, topRightRadius:radius/4, bottomLeftRadius:radius/4, bottomRightRadius:radius/4}
- … 14 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Spinner ⟶ Spinner :: Size=tiny, Style=Neutral, Indicator=2 | **SMART_ANIMATE 250ms LINEAR** | 2 |

---
## File Upload / Single

### Properties

| Property | Type / options |
|---|---|
| Show Helper Text | BOOLEAN=true |
| Helper Text  | TEXT=Maximum file size allowed is 2 |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Disabled · Uploaded |

### Anatomy (first variant: `RTL=False, State=Default`)

- `RTL=False, State=Default` [COMP] — 326×116 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `Header` [FRAM] — 326×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Large, Disabled=False** — 326×24 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 8×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*"
      - `Text` [TEXT] — 86×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
    - `Helper Text` [TEXT] — 326×36 · fill=text/text-tertiary=#64748b · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Maximum file size allowed is 2"
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Small, State=Default, Style=Primary-Neutral, Icon only=False, On-color=False, Destructive=NO** — 87×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `arrow-right-02` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
      - `elements` [GROU] — 8×12 · rot=-90
        - `Icon` [VECT] — 12×8 · fill=Icon/icon-oncolor=#ffffff
    - `Text wrapper` [FRAM] — 71×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 71×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Browse Files"
    - `add-circle-half-dot` [INST] ⟶ instance of **add-circle-half-dot / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
      - `elements` [GROU] — 14×14
        - `Icon` [VECT] — 14×14 · fill=Icon/icon-oncolor=#ffffff

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, State=Default (+1 more) | 326×116 | V/MIN/MIN · 0 0 0 0 · 16 |  |  |   |  |
| RTL=False, State=Uploaded | 326×120 | V/MIN/MIN · 0 0 0 0 · 16 |  |  |   |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Disabled · Uploaded

#### Default → **Disabled**  · applies to 1 group(s): RTL=False
- + Frame 6 (326×68)
- + Frame 6 › Label (326×24)
- + Frame 6 › Label › Text (86×24 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=16 · txt="Upload files")
- + Frame 6 › Helper Text (326×36 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=12 · txt="Maximum file size allowed is 2")
- Button: fill: Button/button-background-black-default=#0d121c → Global/background-disabled=#e5e7eb
- Button › Text wrapper › Text: fill: Text/text-oncolor-primary=#ffffff → Global/text-default-disabled=#9da4ae
- − Header (hidden/removed)
- − Header › Label (hidden/removed)
- − Header › Label › Text (hidden/removed)
- − Header › Helper Text (hidden/removed)

#### Default → **Uploaded**  · applies to 1 group(s): RTL=False
- (root): h: 116 → 120
- + _File (326×36 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1)
- + _File › Indicator + file name + remove (326×36)
- + _File › Indicator + file name + remove › Text wrapper (282×20)
- + _File › Indicator + file name + remove › Text wrapper › Feedback Icon (20×20)
- + _File › Indicator + file name + remove › Text wrapper › Feedback Icon › bg (18×18 · fill=Background/background-white=#ffffff)
- + _File › Indicator + file name + remove › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-success=#067647)
- + _File › Indicator + file name + remove › Text wrapper › File Name (254×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="File-name.csv")
- + _File › Indicator + file name + remove › Trail wrapper (20×20)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close (20×20 · fill=Button/button-background-neutral-default=#f3f4f6)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 (12×12)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements (8×8)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › cancel-01 › elements › Icon (8×8 · fill=Icon/icon-default=#161616)
- − Button (hidden/removed)
- − Button › Text wrapper (hidden/removed)
- − Button › Text wrapper › Text (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default**
- `Header`: 326×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Header › Label`: 326×24 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Header › Label › Text`: 86×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files"
- `Header › Helper Text`: 326×36 · fill=text/text-tertiary=#64748b · font=mixed · fs=12 · lh=auto · ts=Text xs/Regular · txt="Maximum file size allowed is 2"
- `Button`: 87×32 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-sm-padding, paddingRight:Button/buttons-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Text wrapper`: 71×18 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button › Text wrapper › Text`: 71×18 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=12 · lh=18 · ts=Text xs/Medium · txt="Browse Files"

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button/False/Small/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button/True/Small/Hovered/Primary-Neutral/False/False | **INSTANT** | 1 |
