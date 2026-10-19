# Pagination — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `225:7288`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 225-7288

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Pagination

> Pagination provides horizontal navigation between chunks (pages) of a dataset.

> Resources

## Component sets on this page (2)

- **Pagination** — 6 variants · `7936:8133`
- **_PaginationItem** — 24 variants · `7936:16660`

---
## Pagination

**Description (component description field):**

> Pagination is used to divide large sets of content into multiple pages, allowing users to navigate through them sequentially.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Size | VARIANT: Small · Meduim · Large |

### Anatomy (first variant: `RTL=False, Size=Large`)

- `RTL=False, Size=Large` [COMP] — 291×40 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Pagination/pagination-Items-padding, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-left-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 7×13
        - `Icon` [VECT] — 7×13 · fill=Icon/icon-default=#161616
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Current Page, Size=Large, Overflow=No** — 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
    - `Selector` [RECT] — 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Size=Large, Overflow=No** — 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Size=Large, Overflow=No** — 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Size=Large, Overflow=Yes** — 40×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `...` [TEXT] — 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `_PaginationItem` [INST] ⟶ instance of **_PaginationItem / State=Default, Size=Large, Overflow=No** — 45×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `1` [TEXT] — 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Large, State=Default, Style=Subtle, Destructive=no, Icon only=True, On-color=False** — 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-01 / Style=Stroke, Type=Rounded** — 24×24
      - `elements` [GROU] — 14×8 · rot=91
        - `Icon` [VECT] — 7×13 · fill=Icon/icon-default=#161616

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Size=Large | 291×40 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=Small | 226×24 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |
| RTL=False, Size=Meduim | 272×32 | H/MIN/MIN · 0 0 0 0 · 8 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Size=Large**
- `Button`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 24×24
- `Button › Leading Icon › elements`: 7×13
- `Button › Leading Icon › elements › Icon`: 7×13 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem › Selector`: 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#2`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#3`: 26×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#3`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#4`: 40×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › ...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#5`: 45×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#4`: 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Button#2`: 40×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 24×24
- `Button › Leading Icon › elements#2`: 14×8 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 7×13 · fill=Icon/icon-default=#161616

**RTL=False, Size=Small**
- `Button`: 24×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-sm-gap, paddingLeft:Button/buttons-sm-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-sm-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 16×16
- `Button › Leading Icon › elements`: 5×9
- `Button › Leading Icon › elements › Icon`: 5×9 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 24×24 · lay=V/CENTER/CENTER · pad=4 4 4 4 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-sm-padding, paddingTop:Pagination/pagination-Item-sm-padding, paddingRight:Pagination/pagination-Item-sm-padding, paddingBottom:Pagination/pagination-Item-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1`: 9×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_PaginationItem › Selector`: 16×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 24×24 · lay=V/CENTER/CENTER · pad=4 4 4 4 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-sm-padding, paddingTop:Pagination/pagination-Item-sm-padding, paddingRight:Pagination/pagination-Item-sm-padding, paddingBottom:Pagination/pagination-Item-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#2`: 9×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="2" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_PaginationItem#3`: 24×24 · lay=V/CENTER/CENTER · pad=4 4 4 4 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-sm-padding, paddingTop:Pagination/pagination-Item-sm-padding, paddingRight:Pagination/pagination-Item-sm-padding, paddingBottom:Pagination/pagination-Item-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#3`: 9×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="3" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_PaginationItem#4`: 24×24 · lay=V/CENTER/CENTER · pad=4 4 4 4 · gap=0 · r=4 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-sm-padding, paddingTop:Pagination/pagination-Item-sm-padding, paddingRight:Pagination/pagination-Item-sm-padding, paddingBottom:Pagination/pagination-Item-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › ...`: 12×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_PaginationItem#5`: 34×24 · lay=V/CENTER/CENTER · pad=4 4 4 4 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-sm-padding, paddingTop:Pagination/pagination-Item-sm-padding, paddingRight:Pagination/pagination-Item-sm-padding, paddingBottom:Pagination/pagination-Item-sm-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#4`: 26×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="999" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Button#2`: 24×24 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-sm-gap, paddingLeft:Button/buttons-sm-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-sm-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 16×16
- `Button › Leading Icon › elements#2`: 9×5 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 5×9 · fill=Icon/icon-default=#161616

**RTL=False, Size=Meduim**
- `Button`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon`: 20×20
- `Button › Leading Icon › elements`: 6×11
- `Button › Leading Icon › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616
- `_PaginationItem`: 32×32 · lay=V/CENTER/CENTER · pad=6 6 6 6 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-md-padding, paddingTop:Pagination/pagination-Item-md-padding, paddingRight:Pagination/pagination-Item-md-padding, paddingBottom:Pagination/pagination-Item-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem › Selector`: 24×3 · r=9999 · fill=Background/background-primary=#1b8354 · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `_PaginationItem#2`: 32×32 · lay=V/CENTER/CENTER · pad=6 6 6 6 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-md-padding, paddingTop:Pagination/pagination-Item-md-padding, paddingRight:Pagination/pagination-Item-md-padding, paddingBottom:Pagination/pagination-Item-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#2`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="2" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#3`: 32×32 · lay=V/CENTER/CENTER · pad=6 6 6 6 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-md-padding, paddingTop:Pagination/pagination-Item-md-padding, paddingRight:Pagination/pagination-Item-md-padding, paddingBottom:Pagination/pagination-Item-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#3`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="3" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#4`: 32×32 · lay=V/CENTER/CENTER · pad=6 6 6 6 · gap=0 · r=4 · stroke=Border/border-black=#161616 · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-md-padding, paddingTop:Pagination/pagination-Item-md-padding, paddingRight:Pagination/pagination-Item-md-padding, paddingBottom:Pagination/pagination-Item-md-padding, topLeftRadius:pagination-Item-md-radius, topRightRadius:pagination-Item-md-radius, bottomLeftRadius:pagination-Item-md-radius, bottomRightRadius:pagination-Item-md-radius}
- `_PaginationItem › ...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_PaginationItem#5`: 32×32 · lay=V/CENTER/CENTER · pad=6 6 6 6 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-md-padding, paddingTop:Pagination/pagination-Item-md-padding, paddingRight:Pagination/pagination-Item-md-padding, paddingBottom:Pagination/pagination-Item-md-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_PaginationItem › 1#4`: 29×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="999" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Button#2`: 32×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Leading Icon#2`: 20×20
- `Button › Leading Icon › elements#2`: 11×6 · rot=91
- `Button › Leading Icon › elements › Icon#2`: 6×11 · fill=Icon/icon-default=#161616

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Large, Overflow=No | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Small, Overflow=No | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Meduim, Overflow=No | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Large, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Small, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Subtle, Destructive=no, Icon only=True, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Large, Overflow=Yes | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Small, Overflow=Yes | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | _PaginationItem ⟶ _PaginationItem :: State=Hovered, Size=Meduim, Overflow=Yes | **INSTANT** | 2 |

---
## _PaginationItem

**Description (component description field):**

> Pagination component is visually intuitive and easily distinguishable, ensuring that users can quickly recognize their current location within the pages and navigate effortlessly through the available content.

### Properties

| Property | Type / options |
|---|---|
| Number | TEXT=1 |
| State | VARIANT: Default · Hovered · Current Page · Focsed · Opened |
| Size | VARIANT: Small · Meduim · Large |
| Overflow | VARIANT: No · Yes |

### Anatomy (first variant: `State=Default, Size=Large, Overflow=No`)

- `State=Default, Size=Large, Overflow=No` [COMP] — 40×40 · lay=V/CENTER/CENTER · pad=8 8 8 8 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Pagination/pagination-Item-lg-padding, paddingTop:Pagination/pagination-Item-lg-padding, paddingRight:Pagination/pagination-Item-lg-padding, paddingBottom:Pagination/pagination-Item-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
  - `1` [TEXT] — 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| State=Default, Size=Large, Overflow=No (+1 more) | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 |  |   |  |
| State=Default, Size=Small, Overflow=No (+1 more) | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 |  |   |  |
| State=Default, Size=Meduim, Overflow=No (+1 more) | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 |  |   |  |
| State=Hovered, Size=Large, Overflow=No | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 | Background/background-neutral-100=#f3f4f6 |   |  |
| State=Hovered, Size=Small, Overflow=No | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 | Background/background-neutral-100=#f3f4f6 |   |  |
| State=Hovered, Size=Meduim, Overflow=No | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 | Background/background-neutral-100=#f3f4f6 |   |  |
| State=Focsed, Size=Large, Overflow=No | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Focsed, Size=Small, Overflow=No | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Focsed, Size=Meduim, Overflow=No | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 |  | Border/border-black=#161616 2 |  |
| State=Default, Size=Large, Overflow=Yes | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 |  | Border/border-black=#161616 1 |  |
| State=Default, Size=Small, Overflow=Yes | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 |  | Border/border-black=#161616 1 |  |
| State=Default, Size=Meduim, Overflow=Yes | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 |  | Border/border-black=#161616 1 |  |
| State=Hovered, Size=Large, Overflow=Yes | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 1 |  |
| State=Hovered, Size=Small, Overflow=Yes | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 1 |  |
| State=Hovered, Size=Meduim, Overflow=Yes | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 1 |  |
| State=Focsed, Size=Large, Overflow=Yes (+1 more) | 40×40 | V/CENTER/CENTER · 8 8 8 8 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 2 |  |
| State=Focsed, Size=Small, Overflow=Yes (+1 more) | 24×24 | V/CENTER/CENTER · 4 4 4 4 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 2 |  |
| State=Focsed, Size=Meduim, Overflow=Yes (+1 more) | 32×32 | V/CENTER/CENTER · 6 6 6 6 · 0 | 4 | Background/background-neutral-100=#f3f4f6 | Border/border-black=#161616 2 |  |

### State changes (axis `State`; each state compared with the Default/first state of the same variant group)

States: Default · Hovered · Current Page · Focsed · Opened · ⚠️ spelling as in Figma: `Focsed` = **Focused**, `Opened` = **Open** (source kept unchanged; treat as the normalised state)

#### Default → **Hovered**  · applies to 6 group(s): Size=Large, Overflow=No; Size=Small, Overflow=No; Size=Meduim, Overflow=No; Size=Large, Overflow=Yes …
- (root): fill: — → Background/background-neutral-100=#f3f4f6

#### Default → **Focsed**  · applies to 3 group(s): Size=Large, Overflow=No; Size=Small, Overflow=No; Size=Meduim, Overflow=No
- (root): stroke: — → Border/border-black=#161616; sw: — → 2

#### Default → **Current Page**  · applies to 2 group(s): Size=Large, Overflow=No; Size=Meduim, Overflow=No
- + Selector (24×3 · fill=Background/background-primary=#1b8354)

#### Default → **Current Page**  · applies to 1 group(s): Size=Small, Overflow=No
- + Selector (16×3 · fill=Background/background-primary=#1b8354)

#### Default → **Focsed**  · applies to 3 group(s): Size=Large, Overflow=Yes; Size=Small, Overflow=Yes; Size=Meduim, Overflow=Yes
- (root): fill: — → Background/background-neutral-100=#f3f4f6; sw: 1 → 2

#### Default → **Opened**  · applies to 3 group(s): Size=Large, Overflow=Yes; Size=Small, Overflow=Yes; Size=Meduim, Overflow=Yes
- (root): fill: — → Background/background-neutral-100=#f3f4f6; sw: 1 → 2
- + List Sections (68×304 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4))
- + List Sections › Section (60×296)
- + List Sections › Section › Dropdown List Item (60×37)
- + List Sections › Section › Dropdown List Item › Text (16×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text (16×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="4")
- + List Sections › Section › Dropdown List Item › Check (20×20)
- + List Sections › Section › Dropdown List Item › Check › elements (13×10)
- + List Sections › Section › Dropdown List Item › Check › elements › Icon (13×10 · fill=Icon/icon-default=#161616)
- + List Sections › Section › Dropdown List Item#2 (60×37)
- + List Sections › Section › Dropdown List Item › Text#2 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#2 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="5")
- + List Sections › Section › Dropdown List Item#3 (60×37)
- + List Sections › Section › Dropdown List Item › Text#3 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#3 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="6")
- + List Sections › Section › Dropdown List Item#4 (60×37)
- + List Sections › Section › Dropdown List Item › Text#4 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#4 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="7")
- + List Sections › Section › Dropdown List Item#5 (60×37)
- + List Sections › Section › Dropdown List Item › Text#5 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#5 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="8")
- + List Sections › Section › Dropdown List Item#6 (60×37)
- + List Sections › Section › Dropdown List Item › Text#6 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#6 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="9")
- + List Sections › Section › Dropdown List Item#7 (60×37)
- + List Sections › Section › Dropdown List Item › Text#7 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#7 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="10")
- + List Sections › Section › Dropdown List Item#8 (60×37)
- + List Sections › Section › Dropdown List Item › Text#8 (44×21)
- + List Sections › Section › Dropdown List Item › Text › Entered Text#8 (44×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · txt="11")

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**State=Default, Size=Large, Overflow=No**
- `1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**State=Default, Size=Small, Overflow=No**
- `1`: 9×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**State=Default, Size=Meduim, Overflow=No**
- `1`: 10×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="1" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**State=Default, Size=Large, Overflow=Yes**
- `...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**State=Default, Size=Small, Overflow=Yes**
- `...`: 12×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**State=Default, Size=Meduim, Overflow=Yes**
- `...`: 14×24 · fill=Text/text-default=#161616 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="..." · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 24 |
| ON_HOVER | CHANGE_TO | State: Default→Hovered | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | State: Hovered→Focsed | **INSTANT** | 3 |
| AFTER_TIMEOUT(100ms) | CHANGE_TO | State: Focsed→Current Page | **INSTANT** | 3 |
| ON_HOVER | CHANGE_TO | State: Current Page→Hovered | **INSTANT** | 3 |
| ON_CLICK | CHANGE_TO | State: Hovered→Opened | **INSTANT** | 3 |
| ON_CLICK | CHANGE_TO | State: Opened→Default | **INSTANT** | 3 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Size=Large, Overflow=Yes | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Size=Small, Overflow=Yes | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | List Sections ⟶ _PaginationItem :: State=Default, Size=Meduim, Overflow=Yes | **INSTANT** | 1 |
