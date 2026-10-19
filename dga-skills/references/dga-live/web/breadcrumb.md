# Breadcrumb — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `820:20369`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 820-20369

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Breadcrumb

> Breadcrumb navigation is a user interface element that enhances user orientation within a website or application. It outlines a pathway, showing how the current page fits into the overall site hierarchy. This feature improves usability by enabling users to backtrack to more general pages seamlessly.

> Resources

## Component sets on this page (2)

- **_Breadcrumb Item** — 10 variants · `5698:2585`
- **Breadcrumb** — 10 variants · `5698:2597`

---
## _Breadcrumb Item

**Description (component description field):**

> Types of Breadcrumb Item.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Type | VARIANT: Root · Current · Middle · Middle-overflow · Middle-overflow open |

### Anatomy (first variant: `RTL=False, Type=Root`)

- `RTL=False, Type=Root` [COMP] — 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
  - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Default, Style=Neutral, Size=Small, Inline=False** — 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
    - `Link Text` [TEXT] — 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
      - `elements` [GROU] — 12×12
        - `Icon` [VECT] — 12×12 · fill=Icon/icon-neutral=#384250

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Type=Root | 30×20 | H/MIN/CENTER · 0 4 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Middle (+1 more) | 50×20 | H/MIN/CENTER · 0 4 0 0 · 4 |  |  |   |  |
| RTL=False, Type=Middle-overflow (+1 more) | 36×20 | H/MIN/CENTER · 0 4 0 0 · 4 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Type=Root**
- `Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Middle**
- `arrow-right-01`: 16×16
- `arrow-right-01 › elements`: 9×5 · rot=91
- `arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Middle-overflow**
- `arrow-right-01`: 16×16
- `arrow-right-01 › elements`: 9×5 · rot=91
- `arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `Link`: 12×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Link › Link Text`: 12×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Middle-overflow open**
- `arrow-right-01`: 16×16
- `arrow-right-01 › elements`: 9×5 · rot=91
- `arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `Link`: 12×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Link › Link Text`: 12×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Breadcrumb Dropdown`: 153×152 · lay=V/MIN/MIN · pad=4 4 4 4 · gap=0 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-secondary=#e5e7eb · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{paddingLeft:Global/spacing-xs, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-xs, paddingBottom:Global/spacing-xs, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item`: 145×36 · lay=V/CENTER/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item › Entered Text`: 129×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Breadcrumb Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item#2`: 145×36 · lay=V/CENTER/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item › Entered Text#2`: 129×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Breadcrumb Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item#3`: 145×36 · lay=V/CENTER/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item › Entered Text#3`: 129×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Breadcrumb Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item#4`: 145×36 · lay=V/CENTER/MIN · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Breadcrumb Dropdown › Breadcrumb Dropdown Item › Entered Text#4`: 129×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Breadcrumb Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Type=Current**
- `arrow-right-01`: 16×16
- `arrow-right-01 › elements`: 9×5 · rot=91
- `arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Link › Link Text`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Small, Inline=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Small, Inline=False | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Type: Middle-overflow→Middle-overflow open | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Breadcrumb Dropdown ⟶ _Breadcrumb Item :: RTL=False, Type=Middle-overflow | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Breadcrumb Dropdown ⟶ _Breadcrumb Item :: RTL=True, Type=Middle-overflow | **INSTANT** | 1 |

---
## Breadcrumb

**Description (component description field):**

> Breadcrumb navigation is a user interface element that enhances user orientation within a website or application. It outlines a pathway, showing how the current page fits into the overall site hierarchy. This feature improves usability by enabling users to backtrack to more general pages seamlessly.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Levels | VARIANT: 2 · 3 · 4 · 5 · >5 |

### Anatomy (first variant: `RTL=False, Levels=2`)

- `RTL=False, Levels=2` [COMP] — 80×20 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=0 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `_Breadcrumb Item` [INST] ⟶ instance of **_Breadcrumb Item / RTL=False, Type=Root** — 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
    - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Default, Style=Neutral, Size=Small, Inline=False** — 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Link Text` [TEXT] — 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 12×12
          - `Icon` [VECT] — 12×12 · fill=Icon/icon-neutral=#384250
  - `_Breadcrumb Item` [INST] ⟶ instance of **_Breadcrumb Item / RTL=False, Type=Current** — 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Global/spacing-xs}
    - `arrow-right-01` [INST] ⟶ instance of **arrow-right-01 / Style=Stroke, Type=Rounded** — 16×16
      - `elements` [GROU] — 9×5 · rot=91
        - `Icon` [VECT] — 5×9 · fill=Icon/icon-default-400=#9da4ae
    - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Disabled, Style=Neutral, Size=Small, Inline=False** — 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Link Text` [TEXT] — 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** *(hidden)* — 16×16
        - `elements` [GROU] — 12×12
          - `Icon` [VECT] — 12×12 · fill=Global/icon-default-disabled=#9da4ae

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Levels=2 | 80×20 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Levels=3 | 130×20 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Levels=4 | 180×20 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Levels=5 | 230×20 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |
| RTL=False, Levels=>5 | 166×20 | H/MIN/MIN · 0 0 0 0 · 0 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Levels=2**
- `_Breadcrumb Item`: 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#2`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Global/spacing-xs}
- `_Breadcrumb Item › arrow-right-01`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#2`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#2`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Levels=3**
- `_Breadcrumb Item`: 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#2`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#2`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#2`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#3`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#2`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#2`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#2`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#3`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#3`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Levels=4**
- `_Breadcrumb Item`: 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#2`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#2`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#2`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#3`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#2`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#2`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#2`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#3`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#3`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#4`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#3`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#3`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#3`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#4`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#4`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Levels=5**
- `_Breadcrumb Item`: 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#2`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#2`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#2`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#3`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#2`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#2`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#2`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#3`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#3`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#4`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#3`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#3`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#3`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#4`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#4`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#5`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#4`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#4`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#4`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#5`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#5`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=False, Levels=>5**
- `_Breadcrumb Item`: 30×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › Link`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#2`: 36×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#2`: 12×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#2`: 12×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#3`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#2`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#2`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#2`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#3`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#3`: 26×20 · fill=Link/link-neutral=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Breadcrumb Item#4`: 50×20 · lay=H/MIN/CENTER · pad=0 4 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingRight:Link/link-sm-gap}
- `_Breadcrumb Item › arrow-right-01#3`: 16×16
- `_Breadcrumb Item › arrow-right-01 › elements#3`: 9×5 · rot=91
- `_Breadcrumb Item › arrow-right-01 › elements › Icon#3`: 5×9 · fill=Icon/icon-default-400=#9da4ae
- `_Breadcrumb Item › Link#4`: 26×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `_Breadcrumb Item › Link › Link Text#4`: 26×20 · fill=Global/text-default-disabled=#9da4ae · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Link" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Neutral, Size=Small, Inline=False | **INSTANT** | 13 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Neutral, Size=Small, Inline=False | **INSTANT** | 13 |
| ON_CLICK | CHANGE_TO | _Breadcrumb Item ⟶ _Breadcrumb Item :: RTL=False, Type=Middle-overflow open | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | _Breadcrumb Item ⟶ _Breadcrumb Item :: RTL=True, Type=Middle-overflow open | **INSTANT** | 1 |
