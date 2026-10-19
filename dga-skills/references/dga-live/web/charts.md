# Charts — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `19850:4603`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 19850-4603

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Charts

> A chart component visually represents data with options like pie, line, and bar charts. Pie charts show parts of a whole as slices; line charts track trends over time with connected points, and bar charts compare quantities across categories using bars. This component offers flexible visualization for clear data insights.

> Resources

## Component sets on this page (12)

- **_Y-axis line** — 3 variants · `20302:3916`
- **_Y-axis** — 3 variants · `20302:3972`
- **Pie Chart** — 48 variants · `20335:723`
- **_Line Chart** — 2 variants · `20368:860`
- **_Legend** — 2 variants · `20374:1893`
- **_Mark** — 2 variants · `20375:2298`
- **_X-axis label** — 2 variants · `20451:4912`
- **_Y-axis label** — 2 variants · `20451:4915`
- **Line Chart** — 2 variants · `20470:1259`
- **Bar Chart** — 2 variants · `20470:1382`
- **_Bar Chart** — 2 variants · `20466:5037`
- **_X-axis** — 2 variants · `20473:6563`

---
## _Y-axis line

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Label | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, Label=True`)

- `RTL=False, Label=True` [COMP] — 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
  - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="1,000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Divider` [FRAM] — 1170×1
    - `Divider` [LINE] — 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Label=True (+1 more) | 1216×22 | H/MIN/CENTER · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Label=True**
- `Number`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="1,000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Divider`: 1170×1
- `Divider › Divider`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

**RTL=False, Label=False**
- `Divider`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Y-axis

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Label | VARIANT: False · True |

### Anatomy (first variant: `RTL=False, Label=False`)

- `RTL=False, Label=False` [COMP] — 1216×173 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=0
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
  - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=False** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Divider` [LINE] — 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Label=False | 1216×173 | V/CENTER/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Label=True | 1216×173 | V/MAX/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Label=False**
- `_Y-axis line`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#2`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#2`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#3`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#3`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#4`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#4`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#5`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#5`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#6`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#6`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#7`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#7`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#8`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#8`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#9`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Divider#9`: 1216×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

**RTL=False, Label=True**
- `_Y-axis line`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="800" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider`: 1170×1
- `_Y-axis line › Divider › Divider`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#2`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#2`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="700" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#2`: 1170×1
- `_Y-axis line › Divider › Divider#2`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#3`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#3`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="600" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#3`: 1170×1
- `_Y-axis line › Divider › Divider#3`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#4`: 1216×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#4`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="500" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#4`: 1170×1
- `_Y-axis line › Divider › Divider#4`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#5`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#5`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="400" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#5`: 1170×1
- `_Y-axis line › Divider › Divider#5`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#6`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#6`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="300" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#6`: 1170×1
- `_Y-axis line › Divider › Divider#6`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#7`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#7`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="200" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#7`: 1170×1
- `_Y-axis line › Divider › Divider#7`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#8`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#8`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="100" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#8`: 1170×1
- `_Y-axis line › Divider › Divider#8`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `_Y-axis line#9`: 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `_Y-axis line › Number#9`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Y-axis line › Divider#9`: 1170×1
- `_Y-axis line › Divider › Divider#9`: 1170×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Pie Chart

### Properties

| Property | Type / options |
|---|---|
| Show Data | BOOLEAN=true |
| RTL | VARIANT: No · Yes |
| Pie Chart | VARIANT: Series 1 · Series 2 · Series3 · Series 4 · Series 5 · Series 6 |
| Hole | VARIANT: False · True |
| Style Color | VARIANT: Brand · Color |

### Anatomy (first variant: `RTL=No, Pie Chart=Series 2, Hole=True, Style Color=Brand`)

- `RTL=No, Pie Chart=Series 2, Hole=True, Style Color=Brand` [COMP] — 500×284 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
  - `Pie Chart` [FRAM] — 240×240
    - `Series 2` [ELLI] — 240×240 · fill=Background/background-neutral-100=#f3f4f6 · rot=-180
    - `Series 3` [ELLI] — 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
    - `Series 6` [ELLI] — 240×240 · fill=Background/background-primary-400=#54c08a · rot=-180
  - `_Legend` [INST] ⟶ instance of **_Legend / RTL=No** — 146×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
    - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 1` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary-400=#54c08a
      - `Series 2` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 3` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 4` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 5` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 6` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Success/utility-success-500=#17b26a
      - `Series 4` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Indigo/utility-indigo-500=#6172f3
      - `Series 5` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Pink/utility-pink-500=#ee46bc
      - `Series 6` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Pie Chart=Series 2, Hole=True, Style Color=Brand (+3 more) | 500×284 | V/CENTER/CENTER · 0 0 0 0 · 24 |  |  |   |  |
| RTL=No, Pie Chart=Series 2, Hole=False, Style Color=Brand (+43 more) | 500×284 | V/MIN/CENTER · 0 0 0 0 · 24 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Pie Chart=Series 2, Hole=True, Style Color=Brand**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-neutral-100=#f3f4f6 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Background/background-primary-400=#54c08a · rot=-180
- `_Legend`: 146×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary-400=#54c08a
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Pie Chart=Series 2, Hole=True, Style Color=Brand**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-neutral-100=#f3f4f6 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Background/background-primary-400=#54c08a · rot=-180
- `_Legend`: 118×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 2`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary-400=#54c08a
- `_Legend › Legend series#2`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 1`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary=#1b8354

**RTL=No, Pie Chart=Series 2, Hole=True, Style Color=Color**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-neutral-100=#f3f4f6 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Charts/Charts-Gold=#f7d54d · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Charts/Charts-Green=#88d8ad · rot=-180
- `_Legend`: 146×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Charts/Charts-Gold=#f7d54d
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Charts/Charts-Green=#88d8ad
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Pie Chart=Series 2, Hole=True, Style Color=Color**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-neutral-100=#f3f4f6 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Charts/Charts-Gold=#f7d54d · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Charts/Charts-Green=#88d8ad · rot=-180
- `_Legend`: 118×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 2`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Charts/Charts-Green=#88d8ad
- `_Legend › Legend series#2`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 1`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Charts/Charts-Gold=#f7d54d

**RTL=No, Pie Chart=Series 2, Hole=False, Style Color=Brand**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Background/background-primary-400=#54c08a · rot=-180
- `_Legend`: 146×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary-400=#54c08a
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Pie Chart=Series 2, Hole=False, Style Color=Brand**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Background/background-primary=#1b8354 · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Background/background-primary-400=#54c08a · rot=-180
- `_Legend`: 118×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 2`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary-400=#54c08a
- `_Legend › Legend series#2`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 1`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary=#1b8354

**RTL=No, Pie Chart=Series 2, Hole=False, Style Color=Color**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-white=#ffffff · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Charts/Charts-Gold=#f7d54d · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Charts/Charts-Green=#88d8ad · rot=-180
- `_Legend`: 146×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Charts/Charts-Gold=#f7d54d
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Charts/Charts-Green=#88d8ad
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Pie Chart=Series 2, Hole=False, Style Color=Color**
- `Pie Chart`: 240×240
- `Pie Chart › Series 2`: 240×240 · fill=Background/background-white=#ffffff · rot=-180
- `Pie Chart › Series 3`: 240×240 · fill=Charts/Charts-Gold=#f7d54d · rot=-180
- `Pie Chart › Series 6`: 240×240 · fill=Charts/Charts-Green=#88d8ad · rot=-180
- `_Legend`: 118×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg, counterAxisSpacing:Global/spacing-lg}
- `_Legend › Legend series`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 2`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Charts/Charts-Green=#88d8ad
- `_Legend › Legend series#2`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › قيمة 1`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Charts/Charts-Gold=#f7d54d

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Line Chart

### Properties

| Property | Type / options |
|---|---|
| Show Series 2 | BOOLEAN=true |
| Show Series 3 | BOOLEAN=true |
| Style | VARIANT: Line Gradual · Line Wavy |

### Anatomy (first variant: `Style=Line Wavy`)

- `Style=Line Wavy` [COMP] — 438×180
  - `Series 1` [GROU] — 438×157
    - `Background` [GROU] — 438×156
      - `Mask` [FRAM] — 438×156 · fill=GRADIENT_LINEAR(#161616@0.00,#16161600@1.00)
      - `Color` [VECT] — 438×158 · fill=Background/background-SA-Flag=#074d31 · op=0.1 · rot=-180
    - `Line` [VECT] — 438×85 · stroke=Background/background-SA-Flag=#074d31 · sw=2 · sa=CENTER · rot=-180
  - `Series 2` [GROU] — 438×44
    - `Line` [VECT] — 438×44 · stroke=Border/border-primary=#1b8354 · sw=2 · sa=CENTER · rot=-180
  - `Series 3` [GROU] — 438×38
    - `Line` [VECT] — 438×38 · stroke=Border/border-primary-light=#b8eacb · sw=2 · sa=CENTER · rot=-180

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Style=Line Wavy (+1 more) | 438×180 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Style=Line Wavy**
- `Series 1`: 438×157
- `Series 1 › Background`: 438×156
- `Series 1 › Background › Mask`: 438×156 · fill=GRADIENT_LINEAR(#161616@0.00,#16161600@1.00)
- `Series 1 › Background › Color`: 438×158 · fill=Background/background-SA-Flag=#074d31 · op=0.1 · rot=-180
- `Series 1 › Line`: 438×85 · stroke=Background/background-SA-Flag=#074d31 · sw=2 · sa=CENTER · rot=-180
- `Series 2`: 438×44
- `Series 2 › Line`: 438×44 · stroke=Border/border-primary=#1b8354 · sw=2 · sa=CENTER · rot=-180
- `Series 3`: 438×38
- `Series 3 › Line`: 438×38 · stroke=Border/border-primary-light=#b8eacb · sw=2 · sa=CENTER · rot=-180

**Style=Line Gradual**
- `Series 1`: 438×137
- `Series 1 › Background`: 438×136
- `Series 1 › Background › Mask`: 438×136 · fill=GRADIENT_LINEAR(#161616@0.00,#16161600@1.00)
- `Series 1 › Background › Color`: 438×137 · fill=Background/background-SA-Flag=#074d31 · op=0.1
- `Series 1 › Line`: 438×37 · stroke=Background/background-SA-Flag=#074d31 · sw=2 · sa=CENTER
- `Series 2`: 438×23
- `Series 2 › Line`: 438×23 · stroke=Border/border-primary=#1b8354 · sw=2 · sa=CENTER
- `Series 3`: 438×62
- `Series 3 › Line`: 438×62 · stroke=Border/border-primary-light=#b8eacb · sw=2 · sa=CENTER

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Legend

### Properties

| Property | Type / options |
|---|---|
| Show Series 1 | BOOLEAN=true |
| Show Series 2 | BOOLEAN=true |
| Show Series 3 | BOOLEAN=true |
| Show Series 4 | BOOLEAN=true |
| Show Series 5 | BOOLEAN=true |
| Show Series 6 | BOOLEAN=true |
| RTL | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=No`)

- `RTL=No` [COMP] — 462×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 1` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 2` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 3` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 4` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 5` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
      - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Series 6` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Success/utility-success-500=#17b26a
    - `Series 4` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4"
  - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Indigo/utility-indigo-500=#6172f3
    - `Series 5` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5"
  - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
    - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Pink/utility-pink-500=#ee46bc
    - `Series 6` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No | 462×20 | H/MIN/MIN/wrap · 0 0 0 0 · 12 |  |  |   |  |
| RTL=Yes | 378×20 | H/MIN/MIN/wrap · 0 0 0 0 · 12 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No**
- `Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark`: 8×8
- `Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark#2`: 8×8
- `Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series#3`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark#3`: 8×8
- `Legend series › _Mark › Circle #3`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 3`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series#4`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark#4`: 8×8
- `Legend series › _Mark › Circle #4`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 4`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series#5`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark#5`: 8×8
- `Legend series › _Mark › Circle #5`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 5`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series#6`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › _Mark#6`: 8×8
- `Legend series › _Mark › Circle #6`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series › Series 6`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes**
- `Legend series`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 6`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark`: 8×8
- `Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series#2`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 5`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark#2`: 8×8
- `Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series#3`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 4`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark#3`: 8×8
- `Legend series › _Mark › Circle #3`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series#4`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 3`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark#4`: 8×8
- `Legend series › _Mark › Circle #4`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series#5`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 2`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark#5`: 8×8
- `Legend series › _Mark › Circle #5`: 8×8 · fill=Background/background-primary=#1b8354
- `Legend series#6`: 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `Legend series › قيمة 1`: 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Legend series › _Mark#6`: 8×8
- `Legend series › _Mark › Circle #6`: 8×8 · fill=Background/background-primary=#1b8354

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Mark

### Properties

| Property | Type / options |
|---|---|
| Square | VARIANT: No · Yes |

### Anatomy (first variant: `Square=Yes`)

- `Square=Yes` [COMP] — 8×8
  - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| Square=Yes (+1 more) | 8×8 |  ·  ·  |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**Square=Yes**
- `Circle `: 8×8 · fill=Background/background-primary=#1b8354

**Square=No**
- `Rectangle`: 8×8 · r=2 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:Radius/radius-xs, topRightRadius:Radius/radius-xs, bottomLeftRadius:Radius/radius-xs, bottomRightRadius:Radius/radius-xs}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _X-axis label

### Properties

| Property | Type / options |
|---|---|
| Text EN | TEXT=Month |
| Text AR | TEXT=الشهر |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 374×28 · lay=H/CENTER/MIN · pad=8 0 0 0 · gap=0 · tokens{paddingTop:Global/spacing-md}
  - `Text` [TEXT] — 41×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Month" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 374×28 | H/CENTER/MIN · 8 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Text`: 41×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Month" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Y-axis label

### Properties

| Property | Type / options |
|---|---|
| Text AR | TEXT=المستخدمين النشطين |
| Text EN | BOOLEAN=true |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 28×240 · lay=V/CENTER/MIN · pad=0 8 0 0 · gap=0 · tokens{paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none}
  - `Text` [TEXT] — 79×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · rot=90 · txt="Active users" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 28×240 | V/CENTER/MIN · 0 8 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Text`: 79×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · rot=90 · txt="Active users" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Line Chart

### Properties

| Property | Type / options |
|---|---|
| Show _X-axis label | BOOLEAN=true |
| Show _Y-axis label | BOOLEAN=true |
| Show _Legend | BOOLEAN=true |
| Show Content | BOOLEAN=true |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 512×277 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
  - `_Legend` [INST] ⟶ instance of **_Legend / RTL=No** — 225×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 1` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 2` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 3` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 4` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 5` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
      - `Series 6` [TEXT] — 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Success/utility-success-500=#17b26a
      - `Series 4` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Indigo/utility-indigo-500=#6172f3
      - `Series 5` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Pink/utility-pink-500=#ee46bc
      - `Series 6` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6"
  - `Chart` [FRAM] — 512×231 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `_Y-axis label` [INST] ⟶ instance of **_Y-axis label / RTL=False** — 28×215 · lay=V/CENTER/MIN · pad=0 8 0 0 · gap=0 · tokens{paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none}
      - `Text` [TEXT] — 79×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · rot=90 · txt="Active users" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Chart` [FRAM] — 484×231 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `_Y-axis` [INST] ⟶ instance of **_Y-axis / RTL=False, Label=True** — 484×173 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="800" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="700" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="600" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="500" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="400" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="300" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="200" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="100" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** — 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 438×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
      - `_X-axis` [INST] ⟶ instance of **_X-axis / RTL=Left** — 436×20 · lay=H/MIN/MIN · pad=0 32 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl, paddingRight:Global/spacing-4xl}
        - `Number` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jan" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Feb" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Mar" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Number` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Apr" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 512×277 | V/MIN/MAX · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `_Legend`: 225×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#3`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#3`: 8×8
- `_Legend › Legend series › _Mark › Circle #3`: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 3`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart`: 512×231 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Chart › _Y-axis label`: 28×215 · lay=V/CENTER/MIN · pad=0 8 0 0 · gap=0 · tokens{paddingRight:Global/spacing-md, paddingBottom:Global/spacing-none}
- `Chart › _Y-axis label › Text`: 79×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · rot=90 · txt="Active users" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart`: 484×231 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis`: 484×173 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Chart › Chart › _Y-axis › _Y-axis line`: 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="800" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider`: 438×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider`: 438×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#2`: 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#2`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="700" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#2`: 438×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#2`: 438×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#3`: 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#3`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="600" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#3`: 438×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#3`: 438×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#4`: 484×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#4`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="500" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#4`: 438×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#4`: 438×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#5`: 484×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#5`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="400" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 40 more layers (data JSON)

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## Bar Chart

### Properties

| Property | Type / options |
|---|---|
| Show _Legend | BOOLEAN=true |
| Show _X-axis label | BOOLEAN=true |
| Show _Y-axis label | BOOLEAN=true |
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=True`)

- `RTL=True` [COMP] — 606×239 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
  - `_Legend` [INST] ⟶ instance of **_Legend / RTL=Yes** — 606×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
    - `Legend series` [FRAM] *(hidden)* — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 6` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 6" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Legend series` [FRAM] *(hidden)* — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 5` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 5" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary-400=#54c08a
    - `Legend series` [FRAM] *(hidden)* — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 4` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 4" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-neutral-200=#e5e7eb
    - `Legend series` [FRAM] — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 3` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-neutral-200=#e5e7eb
    - `Legend series` [FRAM] — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 2` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary-400=#54c08a
    - `Legend series` [FRAM] — 53×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `قيمة 1` [TEXT] — 37×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="قيمة 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `_Mark` [INST] ⟶ instance of **_Mark / Square=Yes** — 8×8
        - `Circle ` [ELLI] — 8×8 · fill=Background/background-primary=#1b8354
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Success/utility-success-500=#17b26a
      - `Series 4` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 4"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Indigo/utility-indigo-500=#6172f3
      - `Series 5` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 5"
    - `Legend series` [FRAM] *(hidden)* — 70×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
      - `Color` [ELLI] — 8×8 · fill=Component colors/Utility/Pink/utility-pink-500=#ee46bc
      - `Series 6` [TEXT] — 54×20 · fill=Colors/Text/text-tertiary (600)=#475467 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 6"
  - `Chart` [FRAM] — 533×191 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Chart` [FRAM] — 497×191
      - `_Y-axis` [INST] ⟶ instance of **_Y-axis / RTL=True, Label=True** — 560×173 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="800" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="700" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="600" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="500" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="400" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="300" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="200" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="100" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=True, Label=True** — 560×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Divider` [FRAM] — 514×1
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
        - `_Y-axis line` [INST] ⟶ instance of **_Y-axis line / RTL=False, Label=True** *(hidden)* — 1216×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
          - `Number` [TEXT] — 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="0" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Divider` [FRAM] — 1170×1
      - `_Bar Chart` [INST] ⟶ instance of **_Bar Chart / RTL=True** — 460×180 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
        - `Data 1` [FRAM] — 56×180 · lay=V/MAX/CENTER · pad=80 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-8xl}
          - `Bar` [FRAM] — 32×72 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
          - `جماد الثاني` [TEXT] — 56×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="جماد الثاني" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Data 2` [FRAM] — 56×180 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-none}
          - `Bar` [FRAM] — 32×152 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
          - `جماد الأول` [TEXT] — 56×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="جماد الأول" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 515×239 | V/MIN/MAX · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `_Legend`: 225×20 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:spacing-lg}
- `_Legend › Legend series`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark`: 8×8
- `_Legend › Legend series › _Mark › Circle `: 8×8 · fill=Background/background-primary=#1b8354
- `_Legend › Legend series › Series 1`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#2`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#2`: 8×8
- `_Legend › Legend series › _Mark › Circle #2`: 8×8 · fill=Background/background-primary-400=#54c08a
- `_Legend › Legend series › Series 2`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Legend › Legend series#3`: 67×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:spacing-md}
- `_Legend › Legend series › _Mark#3`: 8×8
- `_Legend › Legend series › _Mark › Circle #3`: 8×8 · fill=Background/background-neutral-200=#e5e7eb
- `_Legend › Legend series › Series 3`: 51×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Series 3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart`: 515×191 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Chart › _Y-axis label`: 28×191 · lay=V/CENTER/MIN · pad=0 8 0 0 · gap=0 · tokens{paddingRight:Global/spacing-md}
- `Chart › _Y-axis label › Text`: 79×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · rot=90 · txt="Active users" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart`: 487×191
- `Chart › Chart › _Y-axis`: 487×173 · lay=V/MAX/MIN · pad=0 0 0 0 · gap=0
- `Chart › Chart › _Y-axis › _Y-axis line`: 487×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="800" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider`: 441×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider`: 441×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#2`: 487×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#2`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="700" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#2`: 441×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#2`: 441×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#3`: 487×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#3`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="600" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#3`: 441×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#3`: 441×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#4`: 487×22 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#4`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="500" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Chart › Chart › _Y-axis › _Y-axis line › Divider#4`: 441×1
- `Chart › Chart › _Y-axis › _Y-axis line › Divider › Divider#4`: 441×0 · stroke=Border/border-background-white=#f3f4f6 · sw=1 · sa=CENTER
- `Chart › Chart › _Y-axis › _Y-axis line#5`: 487×17 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Chart › Chart › _Y-axis › _Y-axis line › Number#5`: 38×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="400" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 56 more layers (data JSON)

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _Bar Chart

### Properties

| Property | Type / options |
|---|---|
| Show Series 3 | BOOLEAN=true |
| Show Series 2 | BOOLEAN=true |
| RTL | VARIANT: False · True |

### Anatomy (first variant: `RTL=False`)

- `RTL=False` [COMP] — 392×256 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
  - `Data 1` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=80 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-8xl}
    - `Bar` [FRAM] — 32×148 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×148
        - `Series 3` [VECT] — 32×148 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×105 · fill=Background/background-primary-400=#54c08a
        - `Series 1` [VECT] — 32×56 · fill=Background/background-primary=#1b8354
    - `Jan` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jan" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - ` Data 2` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-none}
    - `Bar` [FRAM] — 32×228 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×228
        - `Series 3` [VECT] — 32×228 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×161 · fill=Background/background-primary-400=#54c08a
        - `Series 1` [VECT] — 32×86 · fill=Background/background-primary=#1b8354
    - `Fab` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Data 3` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=128 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-10xl}
    - `Bar` [FRAM] — 32×100 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×100
        - `Series 3` [VECT] — 32×100 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×71 · fill=Background/background-primary-400=#54c08a
        - `Series 1` [VECT] — 32×38 · fill=Background/background-primary=#1b8354
    - `Mar` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Mar" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Data 4` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=96 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-9xl}
    - `Bar` [FRAM] — 32×132 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×132
        - `Series 3` [VECT] — 32×132 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×93 · fill=Background/background-primary-400=#54c08a
        - `Series 1` [VECT] — 32×50 · fill=Background/background-primary=#1b8354
    - `Apr` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Apr" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Data 5` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=24 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-3xl}
    - `Bar` [FRAM] — 32×204 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×204
        - `Series 3` [VECT] — 32×204 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×144 · fill=Background/background-primary-400=#54c08a · tokens{cornerRadius:Radius/radius-none}
        - `Series 1` [VECT] — 32×77 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:Radius/radius-none}
    - `May` [TEXT] — 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="May" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Data 6` [FRAM] — 32×256 · lay=V/MAX/CENTER · pad=48 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-6xl}
    - `Bar` [FRAM] — 32×180 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
      - `Chart bar` [FRAM] — 32×180
        - `Series 3` [VECT] — 32×180 · r=    · fill=Background/background-neutral-200=#e5e7eb
        - `Series 2` [VECT] — 32×127 · fill=Background/background-primary-400=#54c08a
        - `Series 1` [VECT] — 32×68 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:Radius/radius-none}
    - `Jun` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jun" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 392×256 | H/MIN/MAX · 0 0 0 0 · 40 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `Data 1`: 32×256 · lay=V/MAX/CENTER · pad=80 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-8xl}
- `Data 1 › Bar`: 32×148 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Data 1 › Bar › Chart bar`: 32×148
- `Data 1 › Bar › Chart bar › Series 3`: 32×148 · r=    · fill=Background/background-neutral-200=#e5e7eb
- `Data 1 › Bar › Chart bar › Series 2`: 32×105 · fill=Background/background-primary-400=#54c08a
- `Data 1 › Bar › Chart bar › Series 1`: 32×56 · fill=Background/background-primary=#1b8354
- `Data 1 › Jan`: 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jan" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- ` Data 2`: 32×256 · lay=V/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-none}
- ` Data 2 › Bar`: 32×228 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- ` Data 2 › Bar › Chart bar`: 32×228
- ` Data 2 › Bar › Chart bar › Series 3`: 32×228 · r=    · fill=Background/background-neutral-200=#e5e7eb
- ` Data 2 › Bar › Chart bar › Series 2`: 32×161 · fill=Background/background-primary-400=#54c08a
- ` Data 2 › Bar › Chart bar › Series 1`: 32×86 · fill=Background/background-primary=#1b8354
- ` Data 2 › Fab`: 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Fab" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Data 3`: 32×256 · lay=V/MAX/CENTER · pad=128 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-10xl}
- `Data 3 › Bar`: 32×100 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Data 3 › Bar › Chart bar`: 32×100
- `Data 3 › Bar › Chart bar › Series 3`: 32×100 · r=    · fill=Background/background-neutral-200=#e5e7eb
- `Data 3 › Bar › Chart bar › Series 2`: 32×71 · fill=Background/background-primary-400=#54c08a
- `Data 3 › Bar › Chart bar › Series 1`: 32×38 · fill=Background/background-primary=#1b8354
- `Data 3 › Mar`: 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Mar" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Data 4`: 32×256 · lay=V/MAX/CENTER · pad=96 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-9xl}
- `Data 4 › Bar`: 32×132 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Data 4 › Bar › Chart bar`: 32×132
- `Data 4 › Bar › Chart bar › Series 3`: 32×132 · r=    · fill=Background/background-neutral-200=#e5e7eb
- `Data 4 › Bar › Chart bar › Series 2`: 32×93 · fill=Background/background-primary-400=#54c08a
- `Data 4 › Bar › Chart bar › Series 1`: 32×50 · fill=Background/background-primary=#1b8354
- `Data 4 › Apr`: 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Apr" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Data 5`: 32×256 · lay=V/MAX/CENTER · pad=24 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-3xl}
- `Data 5 › Bar`: 32×204 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8
- `Data 5 › Bar › Chart bar`: 32×204
- `Data 5 › Bar › Chart bar › Series 3`: 32×204 · r=    · fill=Background/background-neutral-200=#e5e7eb
- `Data 5 › Bar › Chart bar › Series 2`: 32×144 · fill=Background/background-primary-400=#54c08a · tokens{cornerRadius:Radius/radius-none}
- `Data 5 › Bar › Chart bar › Series 1`: 32×77 · fill=Background/background-primary=#1b8354 · tokens{cornerRadius:Radius/radius-none}
- `Data 5 › May`: 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="May" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Data 6`: 32×256 · lay=V/MAX/CENTER · pad=48 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingTop:Global/spacing-6xl}
- … 6 more layers (data JSON)

### Interactions & motion

*No prototype reactions defined on this component set.*

---
## _X-axis

### Properties

| Property | Type / options |
|---|---|
| Text EN | BOOLEAN=true |
| Text AR | BOOLEAN=true |
| RTL | VARIANT: Left · True |

### Anatomy (first variant: `RTL=Left`)

- `RTL=Left` [COMP] — 404×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
  - `Number` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jan" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Feb" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Mar" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Apr" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="May" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jun" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 19×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jul" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 25×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Aug" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Number` [TEXT] — 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Sep" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=Left | 404×20 | H/MIN/MIN · 0 0 0 0 · 24 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=Left**
- `Number`: 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jan" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#2`: 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Feb" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#3`: 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Mar" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#4`: 23×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Apr" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#5`: 26×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="May" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#6`: 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jun" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#7`: 19×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Jul" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#8`: 25×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Aug" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Number#9`: 24×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Sep" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion

*No prototype reactions defined on this component set.*
