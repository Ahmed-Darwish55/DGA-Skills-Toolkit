# Filtration — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `23075:1094`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 23075-1094

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Filtration

> A filtration component helps users refine content by selecting specific criteria, such as categories or attributes. It simplifies navigation by narrowing results, allowing users to quickly find relevant information.

> Resources

> تصفية

> اختيار

> النوع ( 2 من الاختيارات)

> البحث

> Search by voice

> Max width of tooltips is 240px - text will wrap automatically

> بحث

> نص مساعد

> خيار (٢٢)

> عرض المزيد ١٩

> النوع

> إختيار

> اختيار 1

> يكتب المحتوى الإضافي هنا في حال ان عنوان الاختيار يحتاج الى شرح أو تفصيل.

> رسالة خطأ أو تحذير

> اختيار طويـــــــــل

> عنوان

> الأعلى

> 100000

> الأقل

> التاريخ

> يوم/شهر/سنة

> يتم تلقائيا تحويل التاريخ هجري ام ميلادي

> الأعلى(٨)

> الأقل(١٢)

> SWAP WITH CONTENT COMPONENT استبدل هذا العنصر بأي عنصر آخر

> إزالة التصفية

> تطبيق الاختيارات(٨)

> Month DD, YYYY

> 2024

> يناير

> سبت

> جمعة

> خميس

> أربعاء

> ثلاثاء

## Component sets on this page (4)

- **_Filtration list** — 4 variants · `30150:36417`
- **_Multi Select Checkbox Filter** — 4 variants · `30150:36646`
- **Filtration** — 20 variants · `30150:36683`
- **_Text Range** — 2 variants · `30150:36844`

---
## _Filtration list

### Properties

| Property | Type / options |
|---|---|
| Rating text based  | BOOLEAN=true |
| Range-Text | BOOLEAN=true |
| Single-select  | BOOLEAN=true |
| Radio Button  | BOOLEAN=true |
| Date | BOOLEAN=true |
| Multi-chips  | BOOLEAN=true |
|  Multi-Checkbox | BOOLEAN=true |
| Range-Slider  | BOOLEAN=true |
| Scroll bar | BOOLEAN=true |
| Custom Contnet | BOOLEAN=true |
| Apply Filters | BOOLEAN=true |
| RTL | VARIANT: True · False |
| Overlay | VARIANT: True · False |

### Anatomy (first variant: `RTL=True, Overlay=True`)

- `RTL=True, Overlay=True` [COMP] — 320×1894 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
  - `_Multi Select Checkbox Filter` [INST] ⟶ instance of **_Multi Select Checkbox Filter / RTL=True, more options=True** — 320×319 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
    - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Semibold, Size=Medium, Disabled=False** — 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Text` [TEXT] — 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Search Box` [INST] ⟶ instance of **Search Box / RTL=True, State=Default, Filled=False, Size=Medium, Style=Default** — 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
      - `Label` [FRAM] *(hidden)* — 320×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
        - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Regular (Default), Size=Medium, Disabled=False** — 34×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
          - `Text` [TEXT] — 34×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="البحث" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Input Field` [FRAM] — 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Icon-Text-stack` [FRAM] — 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
          - `Trailing Icon` [INST] ⟶ instance of **Trailing Icon / Open=False** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Text` [FRAM] — 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
          - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** — 20×20
      - `Helper text` [FRAM] *(hidden)* — 85×28 · lay=H/MAX/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
        - `Helper Text` [TEXT] — 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
          - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
    - `Single select options` [FRAM] — 304×135 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (٢٢)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
          - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (٢٢)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=True, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
          - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Checked** — 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (٢٢)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=True, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
          - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Checked** — 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
    - `Button` [INST] ⟶ instance of **Button / RTL=True, Size=Medium, State=Default, Style=Transparent, Destructive=no, Icon only=False, On-color=False** — 134×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×6
          - `Icon` [VECT] — 6×11 · fill=Icon/icon-default=#161616 · rot=90
      - `Text wrapper` [FRAM] — 86×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 86×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="عرض المزيد 19" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
        - `elements` [GROU] — 10×15 · rot=-90
          - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
  - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 304×1
    - `Divider` [RECT] — 304×1 · fill=Border/border-neutral-primary=#d2d6db
  - `Single select Filter` [FRAM] — 320×305 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
    - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Semibold, Size=Medium, Disabled=False** — 28×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
      - `Text` [TEXT] — 28×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Single select options` [FRAM] — 304×233 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 13×10
        - `Text` [FRAM] — 260×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="إختيار" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="إختيار" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="إختيار" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="إختيار" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
      - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Check` [INST] ⟶ instance of **tick-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 13×10
        - `Text` [FRAM] — 288×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 288×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="إختيار" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Overlay=True | 320×1842 | V/MIN/CENTER · 0 0 0 0 · 8 | 4 | Background/background-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 | DROP_SHADOW(#10182808 0,8 b8 s-4);DROP_SHADOW(#10182814 0,20 b24 s-4) |
| RTL=False, Overlay=False | 320×1738 | V/MIN/CENTER · 0 0 0 0 · 8 | 4 | Background/background-white=#ffffff | Border/border-neutral-primary=#d2d6db 1 |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Overlay=True**
- `_Multi Select Checkbox Filter`: 320×307 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `_Multi Select Checkbox Filter › Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `_Multi Select Checkbox Filter › Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `_Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `_Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#3`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#3`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark#2`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon#2`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Button`: 141×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Button › Text wrapper`: 93×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Button › Text wrapper › Text`: 93×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Show 19 more" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Button › arrow-down-01`: 20×20
- `_Multi Select Checkbox Filter › Button › arrow-down-01 › elements`: 11×6
- … 71 more layers (data JSON)

**RTL=False, Overlay=False**
- `_Multi Select Checkbox Filter`: 320×203 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `_Multi Select Checkbox Filter › Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `_Multi Select Checkbox Filter › Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#3`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#3`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark#2`: 16×16
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon#2`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `_Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Divider`: 304×1
- `Divider › Divider`: 304×1 · fill=Border/border-neutral-primary=#d2d6db
- `Single select Filter`: 320×305 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Single select Filter › Label`: 47×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Single select Filter › Label › Text`: 47×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select Filter › Single select options`: 304×233 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Single select Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select Filter › Single select options › Dropdown List Item › Text`: 260×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select Filter › Single select options › Dropdown List Item › Text › Entered Text`: 260×21 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select Filter › Single select options › Dropdown List Item › Check`: 20×20
- `Single select Filter › Single select options › Dropdown List Item › Check › elements`: 13×10
- `Single select Filter › Single select options › Dropdown List Item › Check › elements › Icon`: 13×10 · fill=Icon/icon-default=#161616
- `Single select Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- … 70 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Radio ⟶ Radio :: State=Hovered, Style=Primary, Selected=False | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Chip ⟶ Chip :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Chip ⟶ Chip :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | **INSTANT** | 16 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Single Select | **INSTANT** | 14 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 14 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ None | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Prefix ⟶ None | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Multi Select | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Multi Select | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Trailing Icon ⟶ Trailing Icon :: Open=True | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=True, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=True, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=False, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=False, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_CLICK | OVERLAY | _Date field ⟶ Date Picker | **INSTANT** | 1 |

---
## _Multi Select Checkbox Filter

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |
| more options | VARIANT: True · False |

### Anatomy (first variant: `RTL=False, more options=True`)

- `RTL=False, more options=True` [COMP] — 320×307 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
  - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Semibold, Size=Medium, Disabled=False** — 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
    - `Text` [TEXT] — 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Search Box` [INST] ⟶ instance of **Search Box / RTL=False, State=Default, Filled=False, Size=Medium, Style=Default** — 304×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
    - `Label` [FRAM] *(hidden)* — 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
      - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Regular (Default), Size=Medium, Disabled=False** — 44×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
        - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Text` [TEXT] — 44×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Input Field` [FRAM] — 304×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Icon-Text-stack` [FRAM] — 304×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
        - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** — 20×20
          - `elements` [GROU] — 18×18 · rot=-180
        - `Text` [FRAM] — 260×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
          - `Placeholder Text` [TEXT] — 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Trailing Icon` [INST] ⟶ instance of **Trailing Icon / Open=False** *(hidden)* — 20×20 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Tooltip/tooltip-gap}
          - `Stack` [FRAM] — 28×28 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=0
    - `Helper text` [FRAM] *(hidden)* — 84×28 · lay=H/CENTER/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
        - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
          - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
      - `Helper Text` [TEXT] — 60×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Help Text" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
  - `Single select options` [FRAM] — 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
    - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Multi Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=False, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
        - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Unchecked** — 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
      - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
    - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Multi Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=True, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
        - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Checked** — 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
          - `checkmark` [FRAM] — 16×16
      - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
    - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=False, State=Default, Type=Multi Select** — 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Checkbox` [INST] ⟶ instance of **Checkbox / Checked=True, Indeterminate=False, State=Default, Size=x Small, Style=Neutral** — 16×16
        - `_CheckboxBase1` [INST] ⟶ instance of **_CheckboxBase1 / Status=Checked** — 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
          - `checkmark` [FRAM] — 16×16
      - `Text` [FRAM] — 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
        - `Entered Text` [TEXT] — 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Divider` [FRAM] *(hidden)* — 304×1 · lay=H/CENTER/CENTER · pad=0 8 0 8 · gap=8 · r=4 · tokens{itemSpacing:spacing-md, paddingLeft:spacing-md, paddingTop:spacing-none, paddingRight:spacing-md, paddingBottom:spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
        - `Line` [RECT] — 288×1 · fill=Colors/Neutral/300=#d2d6db
  - `Button` [INST] ⟶ instance of **Button / RTL=False, Size=Medium, State=Default, Style=Transparent, Destructive=no, Icon only=False, On-color=False** — 141×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
    - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
      - `elements` [GROU] — 10×15 · rot=-90
        - `Icon` [VECT] — 15×10 · fill=Icon/icon-default=#161616
    - `Text wrapper` [FRAM] — 93×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
      - `Text` [TEXT] — 93×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Show 19 more" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
      - `elements` [GROU] — 11×6
        - `Icon` [VECT] — 6×11 · fill=Icon/icon-default=#161616 · rot=90

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, more options=True | 320×307 | V/MIN/MIN · 16 8 16 8 · 16 |  |  |   |  |
| RTL=False, more options=False | 320×203 | V/MIN/MIN · 16 8 16 8 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, more options=True**
- `Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Search Box`: 304×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Search Box › Input Field`: 304×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Search Box › Input Field › Icon-Text-stack › Leading Icon › elements › Icon`: 18×18 · fill=Icon/icon-default=#161616
- `Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Single select options`: 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select options › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox#3`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#3`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark#2`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon#2`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Button`: 141×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-md-gap, paddingLeft:Button/buttons-md-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-md-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Button › Text wrapper`: 93×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Button › Text wrapper › Text`: 93×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="Show 19 more" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Button › arrow-down-01`: 20×20
- `Button › arrow-down-01 › elements`: 11×6
- `Button › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-default=#161616 · rot=90

**RTL=False, more options=False**
- `Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select options`: 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Single select options › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Single select options › Dropdown List Item › Checkbox#3`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#3`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark#2`: 16×16
- `Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark › Icon#2`: 8×6 · fill=Icon/icon-oncolor=#ffffff
- `Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 8 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Multi Select | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Multi Select | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Trailing Icon ⟶ Trailing Icon :: Open=True | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=False, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=True, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 2 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 1 |

---
## Filtration

### Properties

| Property | Type / options |
|---|---|
| Show Results | BOOLEAN=true |
| RTL | VARIANT: Yes · No |
| Open | VARIANT: Yes · No |
| Result | VARIANT: Yes · No |
| Placement | VARIANT: Center · Right · Left |

### Anatomy (first variant: `RTL=Yes, Open=Yes, Result=Yes, Placement=Left`)

- `RTL=Yes, Open=Yes, Result=Yes, Placement=Left` [COMP] — 123×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `Stack` [FRAM] — 123×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
    - `Button-menu` [INST] ⟶ instance of **Button-menu / RTL=True, Size=Large, State=Default, Style=Neutral, Icon only=False** — 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 20×20
        - `elements` [GROU] — 11×6
          - `Icon` [VECT] — 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
      - `Text wrapper` [FRAM] — 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
        - `Text` [TEXT] — 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
      - `filter` [INST] ⟶ instance of **filter / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 19×20
          - `Icon` [VECT] — 19×20 · fill=Icon/icon-oncolor=#ffffff
    - `Results` [FRAM] — 256×32 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
      - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Selected, Style=Primary, Size=Large, Rounded=False, On-color=False** — 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
        - `Lead icon` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 18×18
          - `elements` [GROU] — 12×12
        - `Text` [TEXT] — 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 18×18
          - `elements` [GROU] — 16×15
      - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Selected, Style=Primary, Size=Large, Rounded=False, On-color=False** — 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
        - `Lead icon` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 18×18
          - `elements` [GROU] — 12×12
        - `Text` [TEXT] — 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 18×18
          - `elements` [GROU] — 16×15
      - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Selected, Style=Primary, Size=Large, Rounded=False, On-color=False** — 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
        - `Lead icon` [INST] ⟶ instance of **cancel-01 / Style=Stroke, Type=Rounded** — 18×18
          - `elements` [GROU] — 12×12
        - `Text` [TEXT] — 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
        - `Trail icon` [INST] ⟶ instance of **alert-02 / Style=Stroke, Type=Rounded** *(hidden)* — 18×18
          - `elements` [GROU] — 16×15
    - `_Filtration list` [INST] ⟶ instance of **_Filtration list / RTL=True, Overlay=False** — 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `_Multi Select Checkbox Filter` [INST] ⟶ instance of **_Multi Select Checkbox Filter / RTL=True, more options=True** — 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
        - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Semibold, Size=Medium, Disabled=False** — 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
          - `Text` [TEXT] — 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Search Box` [INST] ⟶ instance of **Search Box / RTL=True, State=Default, Filled=False, Size=Medium, Style=Default** — 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
          - `Label` [FRAM] *(hidden)* — 320×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
          - `Input Field` [FRAM] — 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Helper text` [FRAM] *(hidden)* — 85×28 · lay=H/MAX/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
        - `Single select options` [FRAM] — 304×135 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Multi Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
        - `Button` [INST] ⟶ instance of **Button / RTL=True, Size=Large, State=Default, Style=Transparent, Destructive=no, Icon only=False, On-color=False** — 159×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingTop:Global/spacing-none, paddingRight:Button/buttons-lg-padding, paddingBottom:Global/spacing-none, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 24×24
          - `Text wrapper` [FRAM] — 99×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Leading Icon` [INST] ⟶ instance of **arrow-right-02 / Style=Stroke, Type=Rounded** *(hidden)* — 24×24
      - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 304×1
        - `Divider` [RECT] — 304×1 · fill=Border/border-neutral-primary=#d2d6db
      - `Single select Filter` [FRAM] — 320×305 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
        - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Semibold, Size=Medium, Disabled=False** — 28×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
          - `Text` [TEXT] — 28×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Single select options` [FRAM] — 304×233 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
          - `Dropdown List Item` [INST] ⟶ instance of **Dropdown List Item / RTL=True, State=Default, Type=Single Select** — 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 304×1
        - `Divider` [RECT] — 304×1 · fill=Border/border-neutral-primary=#d2d6db
      - `Radio Button Filter` [FRAM] — 320×280 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
        - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Semibold, Size=Medium, Disabled=False** — 28×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
          - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Text` [TEXT] — 28×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Radio Button options` [FRAM] — 304×208 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
          - `Radio Label` [INST] ⟶ instance of **Radio Label / RTL=True** — 304×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Radio Label` [INST] ⟶ instance of **Radio Label / RTL=True** — 304×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Radio Label` [INST] ⟶ instance of **Radio Label / RTL=True** — 304×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Radio Label` [INST] ⟶ instance of **Radio Label / RTL=True** — 304×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
          - `Radio Label` [INST] ⟶ instance of **Radio Label / RTL=True** — 304×32 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0 · r=4 · tokens{itemSpacing:Global/spacing-none, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
      - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 304×1
        - `Divider` [RECT] — 304×1 · fill=Border/border-neutral-primary=#d2d6db
      - `Chips Multi select filter` [FRAM] — 320×216 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
        - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Semibold, Size=Medium, Disabled=False** — 28×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
          - `Required asterisk` [TEXT] *(hidden)* — 8×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
          - `Text` [TEXT] — 28×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Chips Stack` [FRAM] — 304×144 · lay=H/MAX/MIN/wrap · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 67×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 108×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 67×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 67×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 108×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 108×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 108×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
          - `Chip` [INST] ⟶ instance of **Chip / RTL=True, State=Default, Style=Primary, Size=Medium, Rounded=True, On-color=False** — 67×24 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=9999 · fill=Background/background-primary-50=#f3fcf6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none, topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `Divider` [INST] ⟶ instance of **Divider / Color=Neutral, Line Type=Horizontal** — 304×1
        - `Divider` [RECT] — 304×1 · fill=Border/border-neutral-primary=#d2d6db
      - `Slider Filter` [FRAM] — 320×90 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
        - `Label` [INST] ⟶ instance of **Label / RTL=False, Type=Semibold, Size=Medium, Disabled=False** — 28×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=Yes, Open=Yes, Result=Yes, Placement=Left (+16 more) | 123×40 | V/MIN/MAX · 0 0 0 0 · 16 |  |  |   |  |
| RTL=Yes, Open=No, Result=Yes, Placement=Left (+2 more) | 123×40 | V/MIN/MAX · 6 0 0 0 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=Yes, Open=Yes, Result=Yes, Placement=Left**
- `Stack`: 123×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results`: 256×32 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Stack › Results › Chip`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon`: 18×18
- `Stack › Results › Chip › Lead icon › elements`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#2`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#2`: 18×18
- `Stack › Results › Chip › Lead icon › elements#2`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#2`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#2`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#3`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#3`: 18×18
- `Stack › Results › Chip › Lead icon › elements#3`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#3`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#3`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- … 69 more layers (data JSON)

**RTL=Yes, Open=Yes, Result=No, Placement=Left**
- `Stack`: 123×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 72 more layers (data JSON)

**RTL=Yes, Open=Yes, Result=No, Placement=Right**
- `Stack`: 123×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 72 more layers (data JSON)

**RTL=Yes, Open=Yes, Result=Yes, Placement=Right**
- `Stack`: 123×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results`: 256×32 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Stack › Results › Chip`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon`: 18×18
- `Stack › Results › Chip › Lead icon › elements`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#2`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#2`: 18×18
- `Stack › Results › Chip › Lead icon › elements#2`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#2`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#2`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#3`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#3`: 18×18
- `Stack › Results › Chip › Lead icon › elements#3`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#3`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#3`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- … 69 more layers (data JSON)

**RTL=Yes, Open=Yes, Result=No, Placement=Center**
- `Stack`: 123×40 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MAX/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#3`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#3`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="خيار (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- … 72 more layers (data JSON)

**RTL=Yes, Open=Yes, Result=Yes, Placement=Center**
- `Stack`: 123×40 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="تصفية" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results`: 256×32 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Stack › Results › Chip`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon`: 18×18
- `Stack › Results › Chip › Lead icon › elements`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#2`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#2`: 18×18
- `Stack › Results › Chip › Lead icon › elements#2`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#2`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#2`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip#3`: 80×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Lead icon#3`: 18×18
- `Stack › Results › Chip › Lead icon › elements#3`: 12×12
- `Stack › Results › Chip › Lead icon › elements › Icon#3`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip › Text#3`: 34×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="اختيار" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list`: 320×1902 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×327 · lay=V/MIN/MAX · pad=16 8 16 8 · gap=20 · tokens{itemSpacing:Global/spacing-2xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 129×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 129×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="النوع ( 2 من الاختيارات)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MAX/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 30×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="بحث" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- … 69 more layers (data JSON)

**RTL=No, Open=Yes, Result=Yes, Placement=Right**
- `Stack`: 123×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · fill=Background/background-white=#ffffff · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Filter" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › Results`: 262×32 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Stack › Results › Chip`: 82×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Text`: 36×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip › Trail icon`: 18×18
- `Stack › Results › Chip › Trail icon › elements`: 12×12
- `Stack › Results › Chip › Trail icon › elements › Icon`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip#2`: 82×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Text#2`: 36×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip › Trail icon#2`: 18×18
- `Stack › Results › Chip › Trail icon › elements#2`: 12×12
- `Stack › Results › Chip › Trail icon › elements › Icon#2`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Results › Chip#3`: 82×32 · lay=H/CENTER/CENTER · pad=0 12 0 12 · gap=4 · r=4 · fill=Background/background-primary=#1b8354 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-none, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-none}
- `Stack › Results › Chip › Text#3`: 36×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Item" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Results › Chip › Trail icon#3`: 18×18
- `Stack › Results › Chip › Trail icon › elements#3`: 12×12
- `Stack › Results › Chip › Trail icon › elements › Icon#3`: 12×12 · fill=Icon/icon-oncolor=#ffffff
- `Stack › _Filtration list`: 320×1842 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, width:Width/width-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×307 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- … 69 more layers (data JSON)

**RTL=No, Open=Yes, Result=No, Placement=Right**
- `Stack`: 123×40 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Stack › Button-menu`: 123×40 · lay=H/CENTER/CENTER · pad=0 16 0 16 · gap=4 · r=4 · fill=Button/button-background-black-default=#0d121c · tokens{itemSpacing:Button/buttons-lg-gap, paddingLeft:Button/buttons-lg-padding, paddingRight:Button/buttons-lg-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › Button-menu › filter`: 24×24
- `Stack › Button-menu › filter › elements`: 19×20
- `Stack › Button-menu › filter › elements › Icon`: 19×20 · fill=Icon/icon-oncolor=#ffffff
- `Stack › Button-menu › Text wrapper`: 39×24 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `Stack › Button-menu › Text wrapper › Text`: 39×24 · fill=Text/text-oncolor-primary=#ffffff · font=mixed · fs=16 · lh=24 · ts=Text md/Medium · txt="Filter" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › Button-menu › arrow-down-01`: 20×20
- `Stack › Button-menu › arrow-down-01 › elements`: 11×6
- `Stack › Button-menu › arrow-down-01 › elements › Icon`: 6×11 · fill=Icon/icon-oncolor=#ffffff · rot=90
- `Stack › _Filtration list`: 320×1842 · lay=V/MIN/CENTER · pad=0 0 0 0 · gap=8 · r=4 · fill=Background/background-white=#ffffff · stroke=Border/border-neutral-primary=#d2d6db · sw=1 · sa=INSIDE · tokens{itemSpacing:Global/spacing-md, width:Width/width-xxs, topLeftRadius:radius-sm, topRightRadius:radius-sm, bottomLeftRadius:radius-sm, bottomRightRadius:radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter`: 320×307 · lay=V/MIN/MIN · pad=16 8 16 8 · gap=16 · tokens{itemSpacing:Global/spacing-xl, paddingLeft:spacing-md, paddingTop:Global/spacing-xl, paddingRight:spacing-md, paddingBottom:Global/spacing-xl}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label`: 138×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Label › Text`: 138×20 · font=mixed · fs=14 · lh=20 · ts=Text sm/Semibold · txt="Variant (2 selections)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box`: 304×40 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field`: 304×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack`: 304×40 · lay=H/MIN/CENTER · pad=0 8 0 8 · gap=8 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-left}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon`: 20×20
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Leading Icon › elements`: 18×18 · rot=-180
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text`: 260×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Search Box › Input Field › Icon-Text-stack › Text › Placeholder Text`: 50×24 · fill=Form/field-text-placeholder=#6c737f · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Search" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options`: 304×135 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1`: 16×16 · r=2 · stroke=Controls/control-border=#6c737f · sw=1 · sa=INSIDE · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#2`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#2`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#2`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1 › checkmark`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text#2`: 264×21 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Text › Entered Text#2`: 264×21 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Option (22)" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item#3`: 304×37 · lay=H/MIN/CENTER · pad=8 8 8 8 · gap=8 · r=4 · tokens{itemSpacing:Global/spacing-md, paddingLeft:Global/spacing-md, paddingTop:Global/spacing-md, paddingRight:Global/spacing-md, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox#3`: 16×16
- `Stack › _Filtration list › _Multi Select Checkbox Filter › Single select options › Dropdown List Item › Checkbox › _CheckboxBase1#3`: 16×16 · r=2 · fill=Controls/control-neutral-checked=#0d121c · tokens{topLeftRadius:radius-xs, topRightRadius:radius-xs, bottomLeftRadius:radius-xs, bottomRightRadius:radius-xs}
- … 72 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Radio ⟶ Radio :: State=Hovered, Style=Primary, Selected=False | **INSTANT** | 80 |
| ON_HOVER | CHANGE_TO | Chip ⟶ Chip :: RTL=True, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | **INSTANT** | 80 |
| ON_HOVER | CHANGE_TO | Chip ⟶ Chip :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Rounded=True, On-color=False | **INSTANT** | 80 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Single Select | **INSTANT** | 70 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Single Select | **INSTANT** | 70 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=True, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 40 |
| ON_HOVER | CHANGE_TO | Suffix ⟶ None | **INSTANT** | 40 |
| ON_HOVER | CHANGE_TO | Prefix ⟶ None | **INSTANT** | 40 |
| ON_CLICK | CHANGE_TO | Chip ⟶ Chip :: RTL=True, State=Default, Style=Primary, Size=Large, Rounded=False, On-color=False | **INSTANT** | 30 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=True, State=Hovered, Type=Multi Select | **INSTANT** | 30 |
| ON_CLICK | CHANGE_TO | Chip ⟶ Chip :: RTL=False, State=Default, Style=Primary, Size=Large, Rounded=False, On-color=False | **INSTANT** | 30 |
| ON_HOVER | CHANGE_TO | Dropdown List Item ⟶ Dropdown List Item :: RTL=False, State=Hovered, Type=Multi Select | **INSTANT** | 30 |
| ON_HOVER | CHANGE_TO | Trailing Icon ⟶ Trailing Icon :: Open=True | **INSTANT** | 20 |
| ON_HOVER | CHANGE_TO | Checkbox ⟶ Checkbox :: Checked=False, Indeterminate=False, State=Hovered, Size=x Small, Style=Neutral | **INSTANT** | 20 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Secondary-Solid, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 20 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Primary, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 20 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=True, Size=Large, State=Hovered, Style=Neutral, Icon only=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=True, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=True, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button-menu ⟶ Button-menu :: RTL=False, Size=Large, State=Hovered, Style=Neutral, Icon only=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Search Box ⟶ Search Box :: RTL=False, State=Hovered, Filled=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=False, Size=Medium, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 10 |
| ON_HOVER | CHANGE_TO | _Date field ⟶ _Date field :: RTL=False, State=Hovered, Filled=False, Error=False, Size=Large, Style=Default | **INSTANT** | 10 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ Filtration :: RTL=Yes, Open=No, Result=No, Placement=Center | **INSTANT** | 6 |
| ON_HOVER | CHANGE_TO | Button ⟶ Button :: RTL=True, Size=Large, State=Hovered, Style=Transparent, Destructive=no, Icon only=False, On-color=False | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | Button ⟶ Filtration :: RTL=Yes, Open=No, Result=No, Placement=Center | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | Button ⟶ Filtration :: RTL=Yes, Open=No, Result=Yes, Placement=Left | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | Button-menu ⟶ Filtration :: RTL=No, Open=No, Result=No, Placement=Center | **INSTANT** | 6 |
| ON_CLICK | CHANGE_TO | Open: No→Yes, Placement: Center→Left | **INSTANT** | 2 |
| ON_CLICK | CHANGE_TO | Open: Yes→No, Placement: Right→Center | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: Yes→No, Placement: Left→Center | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: Yes→No, Result: Yes→No, Placement: Left→Center | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: Yes→No | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: Yes→No, Result: Yes→No | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: No→Yes, Placement: Center→Right | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: No→Yes | **INSTANT** | 1 |
| ON_CLICK | CHANGE_TO | Open: No→Yes, Placement: Right→Left | **INSTANT** | 1 |

---
## _Text Range

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: True · False |

### Anatomy (first variant: `RTL=True`)

- `RTL=True` [COMP] — 312×60 · lay=H/CENTER/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `➡️   Left` [INST] ⟶ instance of **Text Input / RTL=True, State=Default, Filled=True, Error=False, Size=Medium, Style=Default** — 128×60 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
    - `Label` [FRAM] — 128×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
      - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Regular (Default), Size=Medium, Disabled=False** — 27×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
        - `Text` [TEXT] — 27×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="الأقل" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Input Field` [FRAM] — 128×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Suffix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium** — 46×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
        - `Text wrapper` [FRAM] — 22×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 22×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="ريال" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Icon-Text-stack` [FRAM] — 82×32 · lay=H/MAX/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
        - `Text` [FRAM] — 58×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 51×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="100000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18 · rot=-180
      - `Prefix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium** *(hidden)* — 46×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
        - `Text wrapper` [FRAM] — 9×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 9×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="$" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Helper text` [FRAM] *(hidden)* — 85×28 · lay=H/MAX/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
      - `Helper Text` [TEXT] — 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
        - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
          - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER
  - `remove-01` [INST] ⟶ instance of **remove-01 / Style=Stroke, Type=Rounded** — 24×24
    - `elements` [GROU] — 18×2
      - `Icon` [VECT] — 18×2 · fill=Icon/icon-default-400=#9da4ae
  - `➡️   Right` [INST] ⟶ instance of **Text Input / RTL=True, State=Default, Filled=True, Error=False, Size=Medium, Style=Default** — 128×60 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
    - `Label` [FRAM] — 128×20 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=0
      - `Label` [INST] ⟶ instance of **Label / RTL=True, Type=Regular (Default), Size=Medium, Disabled=False** — 32×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
        - `Text` [TEXT] — 32×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="الأعلى" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Required asterisk` [TEXT] *(hidden)* — 7×20 · fill=Form/field-border-error=#b42318 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="*" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Input Field` [FRAM] — 128×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
      - `Suffix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium** — 46×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
        - `Text wrapper` [FRAM] — 22×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 22×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="ريال" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Icon-Text-stack` [FRAM] — 82×32 · lay=H/MAX/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
        - `Text` [FRAM] — 58×32 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=0
          - `Entered Text` [TEXT] — 51×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="100000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
        - `Leading Icon` [INST] ⟶ instance of **search-01 / Style=Stroke, Type=Rounded** *(hidden)* — 20×20
          - `elements` [GROU] — 18×18 · rot=-180
      - `Prefix` [INST] ⟶ instance of **_Input Prefix-Suffix / RTL=True, Type=Text, State=Default, Style=Solid, Size=Medium** *(hidden)* — 46×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
        - `Text wrapper` [FRAM] — 9×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
          - `Text` [TEXT] — 9×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="$" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Helper text` [FRAM] *(hidden)* — 85×28 · lay=H/MAX/CENTER · pad=4 0 4 0 · gap=8 · tokens{itemSpacing:Form/icon-helpertext, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-xs, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-xs}
      - `Helper Text` [TEXT] — 61×20 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="نص مساعد" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `Feedback Icon` [INST] ⟶ instance of **Feedback Icon / Type=Neutral-?, Style=Icon only, Size=16, Ring=No** — 16×16
        - `help-circle` [INST] ⟶ instance of **help-circle** — 16×16
          - `Helper icon` [VECT] — 13×13 · stroke=Icon/icon-neutral=#384250 · sw=1.5 · sa=CENTER

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False | 312×60 | H/CENTER/MAX · 0 0 0 0 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False**
- `➡️   Left`: 128×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `➡️   Left › Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `➡️   Left › Label › Label`: 26×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `➡️   Left › Label › Label › Text`: 26×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Max" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `➡️   Left › Input Field`: 128×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `➡️   Left › Input Field › Icon-Text-stack`: 77×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `➡️   Left › Input Field › Icon-Text-stack › Text`: 53×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `➡️   Left › Input Field › Icon-Text-stack › Text › Entered Text`: 42×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="10000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `➡️   Left › Input Field › Suffix`: 51×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `➡️   Left › Input Field › Suffix › Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `➡️   Left › Input Field › Suffix › Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="SAR" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `remove-01`: 24×24
- `remove-01 › elements`: 18×2
- `remove-01 › elements › Icon`: 18×2 · fill=Icon/icon-default-400=#9da4ae
- `➡️   Right`: 128×60 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Form/field-label-gap}
- `➡️   Right › Label`: 320×20 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=0
- `➡️   Right › Label › Label`: 23×20 · lay=H/MIN/MAX · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Form/label-gap}
- `➡️   Right › Label › Label › Text`: 23×20 · fill=Form/field-text-label=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="Min" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `➡️   Right › Input Field`: 128×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0 · r=4 · fill=Form/field-background-default=#ffffff · stroke=Form/field-border-default=#9da4ae · sw=1 · sa=INSIDE · tokens{itemSpacing:Form/input-gap, paddingLeft:Form/input-padding, paddingTop:Form/input-padding, paddingRight:Form/input-padding, paddingBottom:Form/input-padding, topLeftRadius:Radius/radius-sm, topRightRadius:Radius/radius-sm, bottomLeftRadius:Radius/radius-sm, bottomRightRadius:Radius/radius-sm}
- `➡️   Right › Input Field › Icon-Text-stack`: 77×32 · lay=H/MIN/CENTER · pad=0 16 0 8 · gap=8 · tokens{itemSpacing:Form/icon-enteredtext, paddingLeft:Form/Input-container-padding-left, paddingRight:Form/Input-container-padding-right}
- `➡️   Right › Input Field › Icon-Text-stack › Text`: 53×32 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=0
- `➡️   Right › Input Field › Icon-Text-stack › Text › Entered Text`: 42×20 · fill=Form/field-text-filled=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="10000" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `➡️   Right › Input Field › Suffix`: 51×32 · lay=H/CENTER/CENTER · pad=2 12 2 12 · gap=4 · fill=Button/button-background-neutral-default=#f3f4f6 · tokens{itemSpacing:Global/spacing-xs, paddingLeft:Global/spacing-lg, paddingTop:Global/spacing-xxs, paddingRight:Global/spacing-lg, paddingBottom:Global/spacing-xxs, topLeftRadius:radius-none, topRightRadius:radius-none, bottomLeftRadius:radius-none, bottomRightRadius:radius-none}
- `➡️   Right › Input Field › Suffix › Text wrapper`: 27×20 · lay=H/CENTER/CENTER · pad=0 0 0 0 · gap=0
- `➡️   Right › Input Field › Suffix › Text wrapper › Text`: 27×20 · fill=Text/text-secondary-paragraph=#6c737f · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="SAR" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Suffix ⟶ None | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Prefix ⟶ None | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=True, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | ➡️   Left ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 1 |
| ON_HOVER | CHANGE_TO | ➡️   Right ⟶ Text Input :: RTL=False, State=Hovered, Filled=True, Error=False, Size=Medium, Style=Default | **INSTANT** | 1 |
