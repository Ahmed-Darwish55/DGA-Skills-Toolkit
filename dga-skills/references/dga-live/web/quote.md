# Quote — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `2213:119791`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 2213-119791

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Quote

> Use a quote to highlight important or impactful statements. Quotes are best for capturing attention, emphasizing key messages, or citing external sources.

> Resources

## Component sets on this page (1)

- **Quote** — 8 variants · `30150:69027`

---
## Quote

### Properties

| Property | Type / options |
|---|---|
| Quote Title AR | TEXT=عنوان الاقتباس |
| Quote Description AR | TEXT=تُوضع هنا عبارة الاقتباس لتسلي |
| Author Name AR | TEXT=اسم المؤلف |
| Author Title AR | TEXT=نبذة أو وصف |
| Show Quote Title | BOOLEAN=true |
| Show Description | BOOLEAN=true |
| Show Author Details | BOOLEAN=true |
| Show Avatar | BOOLEAN=false |
| Quote Title EN | TEXT=Title of quote |
| Author Name EN | TEXT=Author's name |
| Author Title EN | TEXT=brief or description. |
| Quote Description EN | TEXT=The quote is placed here to hi |
| RTL | VARIANT: No · Yes |
| Size | VARIANT: Small · Large |
| White Background | VARIANT: No · Yes |

### Anatomy (first variant: `RTL=Yes, Size=Large, White Background=Yes`)

- `RTL=Yes, Size=Large, White Background=Yes` [COMP] — 846×270 · lay=V/MIN/MAX · pad=20 20 20 20 · gap=48 · r=16 · fill=Background/background-neutral-50=#f9fafb · tokens{itemSpacing:Global/spacing-6xl, paddingLeft:Global/spacing-2xl, paddingTop:Global/spacing-2xl, paddingRight:Global/spacing-2xl, paddingBottom:Global/spacing-2xl, topLeftRadius:Radius/radius-lg, topRightRadius:Radius/radius-lg, bottomLeftRadius:Radius/radius-lg, bottomRightRadius:Radius/radius-lg}
  - `body` [FRAM] — 806×108 · lay=V/MIN/MAX · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
    - `عنوان الاقتباس` [TEXT] — 678×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="عنوان الاقتباس" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
    - `تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو مفهوم مهم.` [TEXT] — 678×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="تُوضع هنا عبارة الاقتباس لتسلي" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
  - `Author Details` [FRAM] — 95×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
    - `Author Info` [FRAM] — 95×74 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `اسم المؤلف` [TEXT] — 95×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="اسم المؤلف" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
      - `نبذة أو وصف` [TEXT] — 90×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="نبذة أو وصف" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
    - `Avatar` [INST] ⟶ instance of **Avatar / Type=Image, Square=False, Size=80px** *(hidden)* — 80×80
      - `bg` [RECT] — 80×80 · r=9999 · fill=Background/background-white=#ffffff · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Image` [RECT] — 80×80 · r=9999 · fill=IMAGE:FILL · stroke=Border/border-white=#ffffff · sw=2 · sa=OUTSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
      - `Ring` [RECT] *(hidden)* — 80×80 · r=9999 · stroke=Alpha/alpha-black-20=#161616@0.2 · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius/round, topRightRadius:radius/round, bottomLeftRadius:radius/round, bottomRightRadius:radius/round}
  - `”` [TEXT] — 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="”"
  - `“` [TEXT] — 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="“"

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=Yes, Size=Large, White Background=Yes | 846×270 | V/MIN/MAX · 20 20 20 20 · 48 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=No, Size=Large, White Background=Yes | 846×270 | V/MIN/MIN · 20 20 20 20 · 48 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=No, Size=Large, White Background=No | 846×270 | V/MIN/MIN · 20 20 20 20 · 48 | 16 |  |   |  |
| RTL=Yes, Size=Small, White Background=Yes | 640×270 | V/MIN/MAX · 20 20 20 20 · 48 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=Yes, Size=Small, White Background=No | 640×270 | V/MIN/MAX · 20 20 20 20 · 48 | 16 |  |   |  |
| RTL=Yes, Size=Large, White Background=No | 846×270 | V/MIN/MAX · 20 20 20 20 · 48 | 16 |  |   |  |
| RTL=No, Size=Small, White Background=Yes | 640×300 | V/MIN/MIN · 20 20 20 20 · 48 | 16 | Background/background-neutral-50=#f9fafb |   |  |
| RTL=No, Size=Small, White Background=No | 640×300 | V/MIN/MIN · 20 20 20 20 · 48 | 16 |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=Yes, Size=Large, White Background=Yes**
- `body`: 806×108 · lay=V/MIN/MAX · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › عنوان الاقتباس`: 678×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="عنوان الاقتباس" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو مفهوم مهم.`: 678×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="تُوضع هنا عبارة الاقتباس لتسلي" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 95×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 95×74 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › اسم المؤلف`: 95×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="اسم المؤلف" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › نبذة أو وصف`: 90×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="نبذة أو وصف" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="“"

**RTL=No, Size=Large, White Background=Yes**
- `body`: 806×108 · lay=V/MIN/MIN · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › Title of quote`: 678×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="Title of quote" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.`: 678×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="The quote is placed here to hi" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 159×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 159×74 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › Author's name`: 135×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="Author's name" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › brief or description.`: 159×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="brief or description." · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="“"

**RTL=No, Size=Large, White Background=No**
- `body`: 806×108 · lay=V/MIN/MIN · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › Title of quote`: 678×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="Title of quote" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.`: 678×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="The quote is placed here to hi" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 159×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 159×74 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › Author's name`: 135×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="Author's name" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › brief or description.`: 159×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="brief or description." · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="“"

**RTL=Yes, Size=Small, White Background=Yes**
- `body`: 600×108 · lay=V/MIN/MAX · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › عنوان الاقتباس`: 472×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="عنوان الاقتباس" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو مفهوم مهم.`: 472×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="تُوضع هنا عبارة الاقتباس لتسلي" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 95×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 95×74 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › اسم المؤلف`: 95×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="اسم المؤلف" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › نبذة أو وصف`: 90×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="نبذة أو وصف" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="“"

**RTL=Yes, Size=Small, White Background=No**
- `body`: 600×108 · lay=V/MIN/MAX · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › عنوان الاقتباس`: 472×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="عنوان الاقتباس" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو مفهوم مهم.`: 472×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="تُوضع هنا عبارة الاقتباس لتسلي" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 95×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 95×74 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › اسم المؤلف`: 95×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="اسم المؤلف" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › نبذة أو وصف`: 90×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="نبذة أو وصف" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="“"

**RTL=Yes, Size=Large, White Background=No**
- `body`: 806×108 · lay=V/MIN/MAX · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › عنوان الاقتباس`: 678×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="عنوان الاقتباس" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › تُوضع هنا عبارة الاقتباس لتسليط الضوء على مقولة معينة أو تقديم اقتباس مختصر يعبر عن فكرة أو مفهوم مهم.`: 678×60 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="تُوضع هنا عبارة الاقتباس لتسلي" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 95×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 95×74 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › اسم المؤلف`: 95×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="اسم المؤلف" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › نبذة أو وصف`: 90×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="نبذة أو وصف" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · txt="“"

**RTL=No, Size=Small, White Background=Yes**
- `body`: 600×138 · lay=V/MIN/MIN · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › Title of quote`: 472×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="Title of quote" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.`: 472×90 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="The quote is placed here to hi" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 159×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 159×74 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › Author's name`: 135×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="Author's name" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › brief or description.`: 159×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="brief or description." · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="“"

**RTL=No, Size=Small, White Background=No**
- `body`: 600×138 · lay=V/MIN/MIN · pad=0 64 0 64 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-7xl, paddingRight:Global/spacing-7xl}
- `body › Title of quote`: 472×32 · fill=Text/text-default=#161616 · font=mixed · fs=24 · lh=32 · ts=Display xs/Medium · txt="Title of quote" · tokens{fontSize:Size/Display/typo-size-display-xs, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-display, paragraphSpacing:Paragraph Spacing/Display/paragraph-spacing-display-xs, lineHeight:Line Height/Display/line-heights-display-xs}
- `body › The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.`: 472×90 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=20 · lh=30 · ts=Text xl/Regular · txt="The quote is placed here to hi" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details`: 159×74 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:Global/spacing-none, paddingRight:Global/spacing-none}
- `Author Details › Author Info`: 159×74 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Author Details › Author Info › Author's name`: 135×30 · fill=Text/text-default=#161616 · font=mixed · fs=20 · lh=30 · ts=Text xl/Medium · txt="Author's name" · tokens{fontSize:Size/Text/typo-size-text-xl, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-xl, lineHeight:Line Height/Text/line-heights-text-xl}
- `Author Details › Author Info › brief or description.`: 159×28 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=18 · lh=28 · ts=Text lg/Regular · txt="brief or description." · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `”`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="”"
- `“`: 61×89 · fill=Text/text-primary-sa-flag=#14573a · font=IBM Plex Sans Arabic Regular · fs=128 · lh=32 · rot=-180 · txt="“"

### Interactions & motion

*No prototype reactions defined on this component set.*
