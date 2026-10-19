# File upload — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `856:31729`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 856-31729

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> File upload

> File uploader facilitates selecting and uploading files from the user's device to a web platform. Users initiate the process through a designated area, review selections, and monitor upload progress. Upon completion, they receive confirmation, ensuring a smooth experience.

> Resources

## Component sets on this page (4)

- **_Drop Zone** — 6 variants · `30146:36921`
- **_File** — 6 variants · `30146:36958`
- **File Upload / Multiple** — 2 variants · `30146:37007`
- **File Upload / Single** — 6 variants · `30146:37020`

---
## _Drop Zone

**Description (component description field):**

> The area where users can drop files.

### Properties

| Property | Type / options |
|---|---|
| Button | BOOLEAN=true |
| Show Helper Text | BOOLEAN=true |
| Helper Text  | TEXT=Maximum file size allowed is 2 |
| Helper Text | TEXT=الحد الأقصى لحجم الملف المسموح |
| State | VARIANT: Default · Drag+hover · Disabled |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `State=Default, RTL=False`)

- `State=Default, RTL=False` [COMP] — 318×220 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=24 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-3xl, paddingLeft:size/24, paddingTop:size/24, paddingRight:size/24, paddingBottom:size/24, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `file-upload` [INST] ⟶ instance of **file-upload / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 19×22
      - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616
  - `Text wrapper` [FRAM] — 270×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
    - `Lead Text` [TEXT] — 270×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Drag and drop files here to up" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Helper Text` [TEXT] — 270×36 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False** — 106×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 10×15 · rot=-90
        - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
    - `Text wrapper` [FRAM] — 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 18×18
        - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, RTL=False | 318×220 | V/CENTER/CENTER · 24 24 24 24 · 24 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| State=Drag+hover, RTL=False | 318×220 | V/CENTER/CENTER · 24 24 24 24 · 24 | 4 | Background/background-success-25=#f6fef9 | Border/border-success=#067647 2 |  |
| State=Disabled, RTL=False | 318×220 | V/CENTER/CENTER · 24 24 24 24 · 24 | 4 |  | Global/border-disabled=#9da4ae 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Drag+hover · Disabled

#### Default → **Drag+hover**  · applies to 1 group(s): RTL=False
- (root): fill: Background/background-neutral-100=#f3f4f6 → Background/background-success-25=#f6fef9; stroke: Border/border-neutral-primary=#d2d6db → Border/border-success=#067647; sw: 1 → 2
- file-upload › elements › Icon: fill: Icon/icon-default=#161616 → Icon/icon-success=#067647
- Text wrapper › Lead Text: fill: Text/text-display=#1f2a37 → Text/text-success=#067647
- Text wrapper › Helper Text: fill: Text/text-primary-paragraph=#384250 → Text/text-success=#067647
- Button: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Button › Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

#### Default → **Disabled**  · applies to 1 group(s): RTL=False
- (root): fill: Background/background-neutral-100=#f3f4f6 → —; stroke: Border/border-neutral-primary=#d2d6db → Global/border-disabled=#9da4ae
- file-upload: op: — → 0.7
- file-upload › elements › Icon: fill: Icon/icon-default=#161616 → Global/icon-default-disabled=#9da4ae
- Text wrapper › Lead Text: fill: Text/text-display=#1f2a37 → Global/text-default-disabled=#9da4ae
- Text wrapper › Helper Text: fill: Text/text-primary-paragraph=#384250 → Global/text-default-disabled=#9da4ae
- Button: fill: Button/button-background-neutral-default=#f3f4f6 → Global/background-disabled=#e5e7eb
- Button › Text wrapper › Text: fill: Text/text-default=#161616 → Global/text-default-disabled=#9da4ae

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, RTL=False**
- `file-upload`: 24×24
- `file-upload › elements`: 19×22
- `file-upload › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616
- `Text wrapper`: 270×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Text wrapper › Lead Text`: 270×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Drag and drop files here to up" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Text wrapper › Helper Text`: 270×36 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Button`: 106×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Text wrapper`: 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button › Text wrapper › Text`: 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

---
## _File

**Description (component description field):**

> Displays the name of the uploaded or currently uploading files names.

### Properties

| Property | Type / options |
|---|---|
| File Name EN | TEXT=File-name.csv |
| Error Message EN | TEXT=Here goes the helper text. |
| Error Message AR | TEXT=تكتب هنا رسالة المساعدة. |
| File Name AR | TEXT=اسم الملف.csv |
| State | VARIANT: Uploaded · Loading · Error |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `State=Loading, RTL=False`)

- `State=Loading, RTL=False` [COMP] — 318×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `Indicator + file name + remove` [FRAM] — 318×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
    - `Text wrapper` [FRAM] — 274×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
      - `Loading` [INST] ⟶ instance of **Loading / Size=xx Small, Style=Neutral, Indicator=1** — 20×20
        - `Track` [ELLI] — 20×20 · fill=Background/background-neutral-100=#f3f4f6
        - `Tail` [ELLI] — 20×20 · r=4 · fill=Background/background-black=#161616 · rot=90
      - `File Name` [TEXT] — 246×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
      - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `multiplication-sign` [INST] ⟶ instance of **multiplication-sign / Style=Stroke, Type=Rounded** — 16×16
          - `elements` [GROU] — 9×9

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Loading, RTL=False (+1 more) | 318×36 | V/MIN/MIN · 0 0 0 0 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-neutral-primary=#d2d6db 1 |  |
| State=Error, RTL=False | 318×72 | V/MIN/MIN · 0 0 0 0 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-error=#b42318 1 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Uploaded · Loading · Error

#### Loading → **Uploaded**  · applies to 1 group(s): RTL=False
- + Indicator + file name + remove › Text wrapper › Feedback Icon (20×20)
- + Indicator + file name + remove › Text wrapper › Feedback Icon › bg (18×18 · fill=Icon/icon-oncolor=#ffffff)
- + Indicator + file name + remove › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-success=#067647)
- − Indicator + file name + remove › Text wrapper › Loading (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Loading › Track (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Loading › Tail (hidden/removed)

#### Loading → **Error**  · applies to 1 group(s): RTL=False
- (root): stroke: Border/border-neutral-primary=#d2d6db → Border/border-error=#b42318; h: 36 → 72
- + Frame 4 (318×36)
- + Frame 4 › Text wrapper (274×20)
- + Frame 4 › Text wrapper › Feedback Icon (20×20)
- + Frame 4 › Text wrapper › Feedback Icon › bg (18×18 · fill=Icon/icon-oncolor=#ffffff)
- + Frame 4 › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-error=#b42318)
- + Frame 4 › Text wrapper › File Name (246×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="File-name.csv")
- + Frame 4 › Trail wrapper (20×20)
- + Frame 4 › Trail wrapper › Button-Close (20×20)
- + Frame 4 › Trail wrapper › Button-Close › multiplication-sign (16×16)
- + Frame 4 › Trail wrapper › Button-Close › multiplication-sign › elements (9×9)
- + Frame 4 › Trail wrapper › Button-Close › multiplication-sign › elements › Icon (9×9 · fill=Icon/icon-default=#161616)
- + Error message (318×36 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 0 0 0)
- + Error message › Text wrapper (302×20)
- + Error message › Text wrapper › Text (302×20 · fill=text/text-error-primary=#ce281c · font=mixed · fs=14 · txt="Here goes the helper text.")
- − Indicator + file name + remove (hidden/removed)
- − Indicator + file name + remove › Text wrapper (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Loading (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Loading › Track (hidden/removed)
- − Indicator + file name + remove › Text wrapper › Loading › Tail (hidden/removed)
- − Indicator + file name + remove › Text wrapper › File Name (hidden/removed)
- − Indicator + file name + remove › Trail wrapper (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements (hidden/removed)
- − Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements › Icon (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Loading, RTL=False**
- `Indicator + file name + remove`: 318×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
- `Indicator + file name + remove › Text wrapper`: 274×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Indicator + file name + remove › Text wrapper › Loading`: 20×20
- `Indicator + file name + remove › Text wrapper › Loading › Track`: 20×20 · fill=Background/background-neutral-100=#f3f4f6
- `Indicator + file name + remove › Text wrapper › Loading › Tail`: 20×20 · r=4 · fill=Background/background-black=#161616 · rot=90
- `Indicator + file name + remove › Text wrapper › File Name`: 246×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0 · r=4 · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign`: 16×16
- `Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements`: 9×9
- `Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 6 |
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Loading ⟶ Loading :: Size=xx Small, Style=Neutral, Indicator=2 | **SMART_ANIMATE 250ms LINEAR** | 2 |

---
## File Upload / Multiple

**Description (component description field):**

> File uploader facilitates selecting and uploading files from the user's device to a web platform. Users initiate the process through a designated area, review selections, and monitor upload progress. Upon completion, they receive confirmation, ensuring a smooth experience.

### Properties

| Property | Type / options |
|---|---|
| File 2 | BOOLEAN=false |
| File 3 | BOOLEAN=false |
| Uploaded | BOOLEAN=true |
| RTL | VARIANT: no · yes |

### Anatomy (first variant: `RTL=no`)

- `RTL=no` [COMP] — 334×272 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `_Drop Zone` [INST] ⟶ instance of **_Drop Zone / State=Default, RTL=False** — 334×220 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=24 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-3xl, paddingLeft:size/24, paddingTop:size/24, paddingRight:size/24, paddingBottom:size/24, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `file-upload` [INST] ⟶ instance of **file-upload / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 19×22
        - `Icon` [VECT] — 19×22 · fill=Icon/icon-default=#161616
    - `Text wrapper` [FRAM] — 286×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
      - `Lead Text` [TEXT] — 286×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Drag and drop files here to up" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Helper Text` [TEXT] — 286×36 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
    - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False** — 106×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:spacing-xs, paddingLeft:Button/buttons-md-padding, paddingTop:spacing-xxs, paddingRight:Button/buttons-md-padding, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
      - `Text wrapper` [FRAM] — 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-default=#161616
  - `Files` [FRAM] — 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
    - `File 1` [INST] ⟶ instance of **_File / State=Uploaded, RTL=False** — 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Indicator + file name + remove` [FRAM] — 334×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:size/8, paddingTop:size/8, paddingRight:size/8, paddingBottom:size/8}
        - `Text wrapper` [FRAM] — 290×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Success-check, Style=Container, Size=24, Ring=No** — 20×20
          - `File Name` [TEXT] — 262×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `File 2` [INST] ⟶ instance of **_File / State=Loading, RTL=False** *(hidden)* — 318×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Indicator + file name + remove` [FRAM] — 318×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md}
        - `Text wrapper` [FRAM] — 274×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Loading` [INST] ⟶ instance of **Loading / Size=xx Small, Style=Neutral, Indicator=1** — 20×20
          - `File Name` [TEXT] — 246×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
    - `File 3` [INST] ⟶ instance of **_File / State=Error, RTL=False** *(hidden)* — 318×72 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-error=#b42318 · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Frame 4` [FRAM] — 318×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:size/8, paddingTop:size/8, paddingRight:size/8, paddingBottom:size/8}
        - `Text wrapper` [FRAM] — 274×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
          - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Error-!, Style=Container, Size=24, Ring=No** — 20×20
          - `File Name` [TEXT] — 246×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Trail wrapper` [FRAM] — 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
          - `Button-Close` [INST] ⟶ instance of **Button-Close / Size=x Small, State=Default, On-color=False** — 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Error message` [FRAM] — 318×36 · lay=H/MIN/MIN · pad=8 8 8 8 · gap=8 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 0 0 0 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, paddingLeft:size/8, paddingTop:size/8, paddingRight:size/8, paddingBottom:size/8}
        - `Text wrapper` [FRAM] — 302×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 302×20 · fill=text/text-error-primary=#ce281c · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Here goes the helper text." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=no (+1 more) | 334×272 | V/MIN/MIN · 0 0 0 0 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=no**
- `_Drop Zone`: 334×220 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=24 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-3xl, paddingLeft:size/24, paddingTop:size/24, paddingRight:size/24, paddingBottom:size/24, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Drop Zone › file-upload`: 24×24
- `_Drop Zone › file-upload › elements`: 19×22
- `_Drop Zone › file-upload › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616
- `_Drop Zone › Text wrapper`: 286×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `_Drop Zone › Text wrapper › Lead Text`: 286×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Drag and drop files here to up" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Drop Zone › Text wrapper › Helper Text`: 286×36 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `_Drop Zone › Button`: 106×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:spacing-xs, paddingLeft:Button/buttons-md-padding, paddingTop:spacing-xxs, paddingRight:Button/buttons-md-padding, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `_Drop Zone › Button › Text wrapper`: 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Drop Zone › Button › Text wrapper › Text`: 82×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Files`: 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Files › File 1`: 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Files › File 1 › Indicator + file name + remove`: 334×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:size/8, paddingTop:size/8, paddingRight:size/8, paddingBottom:size/8}
- `Files › File 1 › Indicator + file name + remove › Text wrapper`: 290×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon`: 20×20
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Files › File 1 › Indicator + file name + remove › Text wrapper › File Name`: 262×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="File-name.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign`: 16×16
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements`: 9×9
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616

**RTL=yes**
- `_Drop Zone`: 334×220 · lay=V/CENTER/CENTER · pad=24 24 24 24 · gap=24 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · dash=10,5 · tokens{itemSpacing:Global/spacing-3xl, paddingLeft:size/24, paddingTop:size/24, paddingRight:size/24, paddingBottom:size/24, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Drop Zone › file-upload`: 24×24
- `_Drop Zone › file-upload › elements`: 19×22
- `_Drop Zone › file-upload › elements › Icon`: 19×22 · fill=Icon/icon-default=#161616
- `_Drop Zone › Text wrapper`: 286×68 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `_Drop Zone › Text wrapper › Lead Text`: 286×24 · fill=Text/text-display=#1f2a37 · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اسحب و أفلت الملفات هنا للرفع" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Drop Zone › Text wrapper › Helper Text`: 286×36 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="الحد الأقصى لحجم الملف المسموح" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `_Drop Zone › Button`: 101×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · r=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:spacing-xs, paddingLeft:Button/buttons-md-padding, paddingTop:spacing-xxs, paddingRight:Button/buttons-md-padding, paddingBottom:spacing-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `_Drop Zone › Button › Text wrapper`: 77×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Drop Zone › Button › Text wrapper › Text`: 77×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="تصفح الملفات" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Files`: 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8
- `Files › File 1`: 334×36 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0 · r=4 · fill=Background/background-neutral-100=#f3f4f6 · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Files › File 1 › Indicator + file name + remove`: 334×36 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:size/8, paddingTop:size/8, paddingRight:size/8, paddingBottom:size/8}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper`: 20×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:size/4}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close`: 20×20 · lay=H/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{paddingLeft:spacing-md, paddingTop:spacing-md, paddingRight:spacing-md, paddingBottom:spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign`: 16×16
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements`: 9×9
- `Files › File 1 › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements › Icon`: 9×9 · fill=Icon/icon-default=#161616
- `Files › File 1 › Indicator + file name + remove › Text wrapper`: 290×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:size/8}
- `Files › File 1 › Indicator + file name + remove › Text wrapper › File Name`: 262×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="اسم الملف.csv" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon`: 20×20
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › bg`: 18×18 · fill=Icon/icon-oncolor=#ffffff
- `Files › File 1 › Indicator + file name + remove › Text wrapper › Feedback Icon › Icon`: 18×18 · fill=Icon/icon-success=#067647

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 6 |
| AFTER_TIMEOUT(1ms) | CHANGE_TO | Loading ⟶ Loading :: Size=xx Small, Style=Neutral, Indicator=2 | **SMART_ANIMATE 250ms LINEAR** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

---
## File Upload / Single

**Description (component description field):**

> File uploader facilitates selecting and uploading files from the user's device to a web platform. Users initiate the process through a designated area, review selections, and monitor upload progress. Upon completion, they receive confirmation, ensuring a smooth experience.

### Properties

| Property | Type / options |
|---|---|
| Show Helper Text | BOOLEAN=true |
| Helper Text EN | TEXT=Maximum file size allowed is 2 |
| Helper Text AR | TEXT=الحد الأقصى لحجم الملف المسموح |
| RTL | VARIANT: True · False |
| State | VARIANT: Default · Disabled · Uploaded |

### Anatomy (first variant: `RTL=False, State=Default`)

- `RTL=False, State=Default` [COMP] — 326×116 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `Header` [FRAM] — 326×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
    - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Large, Disabled=False** — 326×24 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Required asterisk` [TEXT] *(hidden)* — 8×24 · fill=Form/field-border-error=#b42318 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `Text` [TEXT] — 86×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Helper Text` [TEXT] — 326×36 · fill=text/text-tertiary=#64748b · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Neutral, Destructive=no, Icon only=False, On-color=False** — 106×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 10×15 · rot=-90
        - `Icon` [VECT] — 15×10 · fill=Icon/icon-oncolor=#ffffff
    - `Text wrapper` [FRAM] — 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 82×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Trailing icon` [INST] ⟶ instance of **add-circle / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 18×18
        - `Icon` [VECT] — 18×18 · fill=Icon/icon-oncolor=#ffffff

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
- + _File › Indicator + file name + remove › Text wrapper › Feedback Icon › bg (18×18 · fill=Icon/icon-oncolor=#ffffff)
- + _File › Indicator + file name + remove › Text wrapper › Feedback Icon › Icon (18×18 · fill=Icon/icon-success=#067647)
- + _File › Indicator + file name + remove › Text wrapper › File Name (254×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="File-name.csv")
- + _File › Indicator + file name + remove › Trail wrapper (20×20)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close (20×20)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign (16×16)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements (9×9)
- + _File › Indicator + file name + remove › Trail wrapper › Button-Close › multiplication-sign › elements › Icon (9×9 · fill=Icon/icon-default=#161616)
- − Button (hidden/removed)
- − Button › Text wrapper (hidden/removed)
- − Button › Text wrapper › Text (hidden/removed)

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, State=Default**
- `Header`: 326×68 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Text/text-content-gap}
- `Header › Label`: 326×24 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Header › Label › Text`: 86×24 · fill=Form/field-text-label=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Upload files" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Header › Helper Text`: 326×36 · fill=text/text-tertiary=#64748b · font=mixed · fs=12 · lh=18 · ts=Text xs/Regular · txt="Maximum file size allowed is 2" · tokens{fontSize:Size/Text/typo-size-text-xs, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xs, lineHeight:Line Height/Text/line-heights-text-xs}
- `Button`: 106×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Text wrapper`: 82×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button › Text wrapper › Text`: 82×20 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Browse Files" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Button-Close ⟶ Button-Close :: Size=x Small, State=Hovered, On-color=False | **DISSOLVE 200ms LINEAR** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Neutral, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
