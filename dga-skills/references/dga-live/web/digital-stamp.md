# Digital Stamp — DGA Platforms Code (web)

> Source: **Components Library - Platforms Code (community copy)** · page `17274:104`. Status: **EXTRACTED-FROM-FIGMA** — every value below is read programmatically from the official Figma file (design source of truth). This is NOT a certification of any coded library: production use still requires the screenshot comparison in rules/component-contract.md.
> Open in Figma: DGA Platforms Code «Components Library» community file (figma.com/@sdga), node 17274-104

## Official description & usage (verbatim from the page)

> www.design.dga.gov.sa

> Digital Stamp

> The Digital Stamp Component is an interface element that ensures users are interacting with a verified and reliable source, confirming the integrity and authenticity of government sites. It provides an encrypted digital stamp, reinforcing trust and transparency in the website's content.

> Resources

## Component sets on this page (2)

- **Digital Stamp** — 8 variants · `17504:520`
- **Extension** — 24 variants · `25079:5361`

---
## Digital Stamp

**Description (component description field):**

> The Digital Stamp Component is an interface element that ensures users are interacting with a verified and secure source, confirming the integrity and authenticity of government sites. It provides an encrypted digital stamp, reinforcing trust and transparency in the website's content.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: Yes · No |
| Opened | VARIANT: yes · no |
| Device | VARIANT: Mobile · Desktop |

### Anatomy (first variant: `RTL=No, Opened=no, Device=Desktop`)

- `RTL=No, Opened=no, Device=Desktop` [COMP] — 1728×32 · lay=H/MIN/CENTER · pad=0 32 0 32 · gap=0 · fill=Background/background-neutral-100=#f3f4f6 · tokens{paddingLeft:Section/section-padding, paddingTop:Global/spacing-none, paddingRight:Section/section-padding, paddingBottom:Global/spacing-none}
  - `Content` [FRAM] — 617×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
    - `Country Flags` [INST] ⟶ instance of **Country Flags / Flags=Saudi Arabia, Size=Medium, Shape=Square** — 20×14 · fill=#ffffff
      - `flag` [GROU] — 20×14
        - `contents` [GROU] — 20×14
          - `base` [RECT] — 20×14 · fill=#006923
          - `Frame 1` [FRAM] — 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
    - `A government website registered with the Digital Government Authority.` [TEXT] — 462×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="A government website registere" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
    - `Link` [INST] ⟶ instance of **Link / RTL=False, State=Default, Style=Primary, Size=Small, Inline=False** — 119×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
      - `Link Text` [TEXT] — 99×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="How you know?" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
      - `arrow-down-01` [INST] ⟶ instance of **arrow-down-01 / Style=Stroke, Type=Rounded** — 16×16
        - `elements` [GROU] — 9×5
          - `Icon` [VECT] — 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=90

### Variant matrix (root box; identical rows collapsed)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=No, Opened=no, Device=Desktop | 1728×32 | H/MIN/CENTER · 0 32 0 32 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=No, Opened=yes, Device=Desktop | 1728×273 | V/MIN/MIN · 6 32 32 32 · 40 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=No, Opened=no, Device=Mobile | 390×80 | H/MIN/CENTER · 6 16 6 16 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=No, Opened=yes, Device=Mobile | 390×514 | V/MIN/MIN · 6 16 16 16 · 40 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=Yes, Opened=no, Device=Desktop | 1728×32 | H/MAX/CENTER · 0 32 0 32 · 10 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=Yes, Opened=yes, Device=Desktop | 1728×241 | V/MIN/MAX · 6 32 32 32 · 40 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=Yes, Opened=no, Device=Mobile | 390×60 | H/MAX/CENTER · 6 16 6 16 · 0 |  | Background/background-neutral-100=#f3f4f6 |   |  |
| RTL=Yes, Opened=yes, Device=Mobile | 390×442 | V/MIN/MAX · 6 16 16 16 · 40 |  | Background/background-neutral-100=#f3f4f6 |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=No, Opened=no, Device=Desktop**
- `Content`: 617×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Country Flags › flag`: 20×14
- `Content › Country Flags › flag › contents`: 20×14
- `Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › A government website registered with the Digital Government Authority.`: 462×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="A government website registere" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link`: 119×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › Link Text`: 99×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="How you know?" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link › arrow-down-01`: 16×16
- `Content › Link › arrow-down-01 › elements`: 9×5
- `Content › Link › arrow-down-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=90

**RTL=No, Opened=yes, Device=Desktop**
- `Content`: 1664×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Country Flags › flag`: 20×14
- `Content › Country Flags › flag › contents`: 20×14
- `Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › A government website registered with the Digital Government Authority.`: 462×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="A government website registere" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link`: 119×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › Link Text`: 99×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="How you know?" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link › arrow-up-01`: 16×16
- `Content › Link › arrow-up-01 › elements`: 9×5
- `Content › Link › arrow-up-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=-90
- `Extension`: 1664×88 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Extension › Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Extension › Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Extension › Domain Verfication › Featured icon › link-04`: 24×24
- `Extension › Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Extension › Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Extension › Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Extension › Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Domain Verfication › Text › Text Content › Official Saudi Government websites URL ends with .gov.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi Government webs" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Extension › Domain Verfication › Text › Text Content › Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Extension › Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Extension › Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Extension › Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Extension › Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Extension › Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Extension › Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Extension › Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Section`: 1664×47 · lay=H/MIN/MIN/wrap · pad=8 24 8 24 · gap=18 · r=8 · fill=Background/background-white=#ffffff · tokens{paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Section › Content`: 1616×31 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Section › Content › DGA logo`: 21×31
- `Section › Content › DGA logo › Vector`: 8×12 · fill=GRADIENT_LINEAR(#00abaf@0.00,#0093b4@0.24,#0080ba@0.48,#774896@1.00)
- … 10 more layers (data JSON)

**RTL=No, Opened=no, Device=Mobile**
- `Content`: 358×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content`: 358×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Content › Country Flags › flag`: 20×14
- `Content › Content › Country Flags › flag › contents`: 20×14
- `Content › Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › Content › A government website registered with the Digital Government Authority.`: 330×40 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="A government website registere" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link`: 119×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › Link Text`: 99×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="How you know?" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link › arrow-down-01`: 16×16
- `Content › Link › arrow-down-01 › elements`: 9×5
- `Content › Link › arrow-down-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=90

**RTL=No, Opened=yes, Device=Mobile**
- `Content`: 358×68 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content`: 358×40 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Content › Country Flags › flag`: 20×14
- `Content › Content › Country Flags › flag › contents`: 20×14
- `Content › Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › Content › A government website registered with the Digital Government Authority.`: 330×40 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="A government website registere" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link`: 119×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › Link Text`: 99×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="How you know?" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Link › arrow-up-01`: 16×16
- `Content › Link › arrow-up-01 › elements`: 9×5
- `Content › Link › arrow-up-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=-90
- `Extension`: 358×244 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Extension › Domain Verfication`: 358×140 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Domain Verfication › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Extension › Domain Verfication › Featured icon › link-04`: 16×16
- `Extension › Domain Verfication › Featured icon › link-04 › elements`: 12×12
- `Extension › Domain Verfication › Featured icon › link-04 › elements › Icon`: 12×12 · fill=Icon/icon-success=#067647
- `Extension › Domain Verfication › Text`: 314×140 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Extension › Domain Verfication › Text › Text Content`: 314×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Domain Verfication › Text › Text Content › Official Saudi Government websites URL ends with .gov.sa`: 314×56 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi Government webs" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Extension › Domain Verfication › Text › Text Content › Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .`: 314×72 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Extension › Security Confirmation `: 358×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Security Confirmation  › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Extension › Security Confirmation  › Featured icon › square-lock-password`: 16×16
- `Extension › Security Confirmation  › Featured icon › square-lock-password › elements`: 12×14
- `Extension › Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 12×14 · fill=Icon/icon-success=#067647
- `Extension › Security Confirmation  › Text Content`: 314×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Extension › Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 314×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Extension › Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 314×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Section`: 358×100 · lay=H/MIN/MIN/wrap · pad=8 24 8 24 · gap=18 · r=8 · fill=Background/background-white=#ffffff · tokens{paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Section › Content`: 310×84 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Section › Content › DGA logo`: 21×31
- … 11 more layers (data JSON)

**RTL=Yes, Opened=no, Device=Desktop**
- `Content`: 380×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=10
- `Content › Link`: 86×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › arrow-down-01`: 16×16
- `Content › Link › arrow-down-01 › elements`: 9×5
- `Content › Link › arrow-down-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=90
- `Content › Link › Link Text`: 66×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="كيف تتحقق؟" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › موقع حكومي مسجل لدى هيئة الحكومة الرقمية`: 254×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="موقع حكومي مسجل لدى هيئة الحكو" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Country Flags › flag`: 20×14
- `Content › Country Flags › flag › contents`: 20×14
- `Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff

**RTL=Yes, Opened=yes, Device=Desktop**
- `Content`: 380×20 · lay=H/MIN/CENTER · pad=0 0 0 0 · gap=10
- `Content › Link`: 86×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › arrow-up-01`: 16×16
- `Content › Link › arrow-up-01 › elements`: 9×5
- `Content › Link › arrow-up-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=-90
- `Content › Link › Link Text`: 66×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="كيف تتحقق؟" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › موقع حكومي مسجل لدى هيئة الحكومة الرقمية`: 254×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="موقع حكومي مسجل لدى هيئة الحكو" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Country Flags › flag`: 20×14
- `Content › Country Flags › flag › contents`: 20×14
- `Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content#2`: 1664×143 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=32 · tokens{itemSpacing:Section/section-gap}
- `Content › Extension`: 1664×64 · lay=H/MAX/MIN/wrap · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Content › Extension › Security Confirmation`: 824×64 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Content › Extension › Security Confirmation › Text Content`: 752×64 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Security Confirmation › Text Content › المواقع الإلكترونية الحكومية الموثوقة تستخدم بروتوكول HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="المواقع الإلكترونية الحكومية ا" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Extension › Security Confirmation › Text Content › تحقق من أن الموقع يستخدم بروتوكول HTTPS`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="تحقق من أن الموقع يستخدم بروتو" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Extension › Security Confirmation › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password`: 24×24
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password › elements`: 18×22
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Content › Extension › Domain Verfication`: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Content › Extension › Domain Verfication › Text`: 752×64 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Content › Extension › Domain Verfication › Text › Text Content`: 752×64 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Domain Verfication › Text › Text Content › Head domain AR`: 752×28 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Content › Extension › Domain Verfication › Text › Text Content › Head domain AR › روابط المواقع الإلكترونية الرسمية الحكومية تنتهي بـ gov.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="روابط المواقع الإلكترونية الرس" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Extension › Domain Verfication › Text › Text Content › جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة العربية السعودية تنتهي بـ .gov.sa`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="جميع روابط المواقع الرسمية الت" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Extension › Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Content › Extension › Domain Verfication › Featured icon › link-04`: 24×24
- `Content › Extension › Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Content › Extension › Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Content › Section`: 1664×47 · lay=H/MAX/MIN/wrap · pad=8 24 8 24 · gap=18 · r=8 · fill=Background/background-white=#ffffff · tokens{paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- `Content › Section › Content`: 1616×31 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- … 12 more layers (data JSON)

**RTL=Yes, Opened=no, Device=Mobile**
- `Content`: 358×48 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content`: 358×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content › موقع حكومي مسجل لدى هيئة الحكومة الرقمية`: 330×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="موقع حكومي مسجل لدى هيئة الحكو" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Content › Country Flags › flag`: 20×14
- `Content › Content › Country Flags › flag › contents`: 20×14
- `Content › Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › Link`: 86×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › arrow-down-01`: 16×16
- `Content › Link › arrow-down-01 › elements`: 9×5
- `Content › Link › arrow-down-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=90
- `Content › Link › Link Text`: 66×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="كيف تتحقق؟" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}

**RTL=Yes, Opened=yes, Device=Mobile**
- `Content`: 358×48 · lay=V/CENTER/MAX · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content`: 358×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=8 · tokens{itemSpacing:Global/spacing-md}
- `Content › Content › موقع حكومي مسجل لدى هيئة الحكومة الرقمية`: 330×20 · fill=Text/text-default=#161616 · font=mixed · fs=14 · lh=20 · ts=Text sm/Medium · txt="موقع حكومي مسجل لدى هيئة الحكو" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-medium, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content › Content › Country Flags`: 20×14 · fill=#ffffff
- `Content › Content › Country Flags › flag`: 20×14
- `Content › Content › Country Flags › flag › contents`: 20×14
- `Content › Content › Country Flags › flag › contents › base`: 20×14 · fill=#006923
- `Content › Content › Country Flags › flag › contents › Frame 1`: 14×8 · lay=V/CENTER/CENTER · pad=0 0 0 0 · gap=1.3020967245101929
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector`: 14×5 · fill=#ffffff
- `Content › Content › Country Flags › flag › contents › Frame 1 › Vector#2`: 12×2 · fill=#ffffff
- `Content › Link`: 86×20 · lay=H/MAX/CENTER · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Link/link-sm-gap, paddingLeft:Global/spacing-none, paddingTop:Global/spacing-none, paddingRight:Global/spacing-none, paddingBottom:Global/spacing-none}
- `Content › Link › arrow-up-01`: 16×16
- `Content › Link › arrow-up-01 › elements`: 9×5
- `Content › Link › arrow-up-01 › elements › Icon`: 5×9 · fill=Link/link-icon-primary-focused=#1b8354 · rot=-90
- `Content › Link › Link Text`: 66×20 · fill=Link/link-primary=#1b8354 · font=mixed · fs=14 · lh=20 · ts=Text sm/Regular · txt="كيف تتحقق؟" · tokens{fontSize:Size/Text/typo-size-text-sm, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-sm, lineHeight:Line Height/Text/line-heights-text-sm}
- `Content#2`: 358×332 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=32 · tokens{itemSpacing:Section/section-gap}
- `Content › Extension`: 358×224 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
- `Content › Extension › Domain Verfication`: 358×116 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Domain Verfication › Text`: 314×116 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Content › Extension › Domain Verfication › Text › Text Content`: 314×116 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Domain Verfication › Text › Text Content › Head domain AR`: 314×56 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=4 · tokens{itemSpacing:Global/spacing-xs}
- `Content › Extension › Domain Verfication › Text › Text Content › Head domain AR › روابط المواقع الإلكترونية الرسمية الحكومية تنتهي بـ gov.sa`: 314×56 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="روابط المواقع الإلكترونية الرس" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Extension › Domain Verfication › Text › Text Content › جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة العربية السعودية تنتهي بـ .gov.sa`: 314×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="جميع روابط المواقع الرسمية الت" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Extension › Domain Verfication › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Content › Extension › Domain Verfication › Featured icon › link-04`: 16×16
- `Content › Extension › Domain Verfication › Featured icon › link-04 › elements`: 12×12
- `Content › Extension › Domain Verfication › Featured icon › link-04 › elements › Icon`: 12×12 · fill=Icon/icon-success=#067647
- `Content › Extension › Security Confirmation`: 358×92 · lay=H/MAX/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Security Confirmation › Text Content`: 314×92 · lay=V/MIN/MAX · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Content › Extension › Security Confirmation › Text Content › المواقع الإلكترونية الحكومية الموثوقة تستخدم بروتوكول HTTPS`: 314×56 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="المواقع الإلكترونية الحكومية ا" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Content › Extension › Security Confirmation › Text Content › تحقق من أن الموقع يستخدم بروتوكول HTTPS`: 314×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="تحقق من أن الموقع يستخدم بروتو" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Content › Extension › Security Confirmation › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password`: 16×16
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password › elements`: 12×14
- `Content › Extension › Security Confirmation › Featured icon › square-lock-password › elements › Icon`: 12×14 · fill=Icon/icon-success=#067647
- `Content › Section`: 358×76 · lay=H/MAX/MIN/wrap · pad=8 24 8 24 · gap=18 · r=8 · fill=Background/background-white=#ffffff · tokens{paddingLeft:Global/spacing-3xl, paddingTop:Global/spacing-md, paddingRight:Global/spacing-3xl, paddingBottom:Global/spacing-md, topLeftRadius:Radius/radius-md, topRightRadius:Radius/radius-md, bottomLeftRadius:Radius/radius-md, bottomRightRadius:Radius/radius-md}
- … 13 more layers (data JSON)

### Interactions & motion (prototype reactions, verbatim)

| Trigger | Action | Change | Transition | ×
|---|---|---|---|---|
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Small, Inline=False | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=False, State=Hovered, Style=Primary, Size=Medium, Inline=True | **INSTANT** | 4 |
| ON_HOVER | CHANGE_TO | Link ⟶ Link :: RTL=True, State=Hovered, Style=Primary, Size=Small, Inline=False | **INSTANT** | 4 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=No, Opened=yes, Device=Desktop | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=No, Opened=no, Device=Desktop | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=No, Opened=yes, Device=Mobile | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=No, Opened=no, Device=Mobile | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=Yes, Opened=yes, Device=Desktop | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=Yes, Opened=no, Device=Desktop | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=Yes, Opened=yes, Device=Mobile | **SMART_ANIMATE 300ms EASE_OUT** | 1 |
| ON_CLICK | CHANGE_TO | Link ⟶ Digital Stamp :: RTL=Yes, Opened=no, Device=Mobile | **SMART_ANIMATE 300ms EASE_OUT** | 1 |

---
## Extension

**Description (component description field):**

> The purpose of extensions is to provide clear indications of the authenticity of a website. Key details, such as domain confirmation (e.g., .gov.sa, .edu.sa, .med.sa, .org.sa, .sch.sa), HTTPS usage, and Digital Government Authority registration, reinforce user trust and security.

### Properties

| Property | Type / options |
|---|---|
| RTL | VARIANT: False · True |
| Extension | VARIANT: gov.sa · edu.sa · med.sa · org.sa · sch.sa · .sa |
| Device | VARIANT: Mobile · Desktop |

### Anatomy (first variant: `RTL=False, Extension=gov.sa, Device=Desktop`)

- `RTL=False, Extension=gov.sa, Device=Desktop` [COMP] — 1664×88 · lay=H/MIN/MIN/wrap · pad=0 0 0 0 · gap=16 · tokens{itemSpacing:Global/spacing-xl}
  - `Domain Verfication` [FRAM] — 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Large, Color=Brand, Style=Outline, Circle=True** — 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `link-04` [INST] ⟶ instance of **link-04 / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 18×18
          - `Icon` [VECT] — 18×18 · fill=Icon/icon-success=#067647
    - `Text` [FRAM] — 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
      - `Text Content` [FRAM] — 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
        - `Official Saudi Government websites URL ends with .gov.sa` [TEXT] — 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi Government webs" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
        - `Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .` [TEXT] — 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
  - `Security Confirmation ` [FRAM] — 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
    - `Featured icon` [INST] ⟶ instance of **Featured icon / Size=Large, Color=Brand, Style=Outline, Circle=True** — 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
      - `square-lock-password` [INST] ⟶ instance of **square-lock-password / Style=Stroke, Type=Rounded** — 24×24
        - `elements` [GROU] — 18×22
          - `Icon` [VECT] — 18×22 · fill=Icon/icon-success=#067647
    - `Text Content` [FRAM] — 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
      - `Official Reliable websites use HTTPS` [TEXT] — 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
      - `Ensure the website is using the HTTPS protocol.` [TEXT] — 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Variant matrix (root box; identical rows collapsed; RTL=True mirrors RTL=False — omitted)

| Variants | Size | Layout · padding · gap | Radius | Fill | Stroke | Effects |
|---|---|---|---|---|---|---|
| RTL=False, Extension=gov.sa, Device=Desktop (+4 more) | 1664×88 | H/MIN/MIN/wrap · 0 0 0 0 · 16 |  |  |   |  |
| RTL=False, Extension=med.sa, Device=Desktop | 1664×64 | H/MIN/MIN/wrap · 0 0 0 0 · 16 |  |  |   |  |
| RTL=False, Extension=gov.sa, Device=Mobile (+5 more) | 390×220 | V/MIN/MIN · 0 0 0 0 · 16 |  |  |   |  |

### Child-layer styles (exact) — first variant of each group, max 12; all variants in data JSON

**RTL=False, Extension=gov.sa, Device=Desktop**
- `Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi Government websites URL ends with .gov.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi Government webs" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=edu.sa, Device=Desktop**
- `Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi educational websites URL ends with .edu.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi educational web" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official educational in the Kingdom of Saudi Arabia always ends with .edu.sa or sch.sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=med.sa, Device=Desktop**
- `Domain Verfication`: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×64 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi medical websites URL ends with .med.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi medical website" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official medical in the Kingdom of Saudi Arabia always ends with .med.sa .`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=org.sa, Device=Desktop**
- `Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi non-profit organizations websites URL ends with .org.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi non-profit orga" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official non-profit organizations in the Kingdom of Saudi Arabia always ends with .org.sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=sch.sa, Device=Desktop**
- `Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi educational websites URL ends with .sch.sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi educational web" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official educational in the Kingdom of Saudi Arabia always ends with .edu.sa or sch.sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=.sa, Device=Desktop**
- `Domain Verfication`: 824×88 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Domain Verfication › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 24×24
- `Domain Verfication › Featured icon › link-04 › elements`: 18×18
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 18×18 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 752×88 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 752×88 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi activities and initiatives websites URL ends with .sa`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi activities and " · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official activities and initiatives in the Kingdom of Saudi Arabia always ends with .sa .`: 752×48 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 824×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=24 · tokens{itemSpacing:Global/spacing-3xl}
- `Security Confirmation  › Featured icon`: 48×48 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 24×24
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 18×22
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 18×22 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 752×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 752×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 752×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=gov.sa, Device=Mobile**
- `Domain Verfication`: 390×140 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 16×16
- `Domain Verfication › Featured icon › link-04 › elements`: 12×12
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 12×12 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 346×140 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 346×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi Government websites URL ends with .gov.sa`: 346×56 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi Government webs" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .`: 346×72 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 390×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 16×16
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 12×14
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 12×14 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 346×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 346×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 346×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

**RTL=False, Extension=edu.sa, Device=Mobile**
- `Domain Verfication`: 390×140 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Domain Verfication › Featured icon › link-04`: 16×16
- `Domain Verfication › Featured icon › link-04 › elements`: 12×12
- `Domain Verfication › Featured icon › link-04 › elements › Icon`: 12×12 · fill=Icon/icon-success=#067647
- `Domain Verfication › Text`: 346×140 · lay=V/CENTER/MIN · pad=0 0 0 0 · gap=40 · tokens{itemSpacing:Global/spacing-5xl}
- `Domain Verfication › Text › Text Content`: 346×140 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Domain Verfication › Text › Text Content › Official Saudi educational websites URL ends with .edu.sa`: 346×56 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Saudi educational web" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Domain Verfication › Text › Text Content › Website belongs to an official educational in the Kingdom of Saudi Arabia always ends with .edu.sa or sch.sa .`: 346×72 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Website belongs to an official" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}
- `Security Confirmation `: 390×64 · lay=H/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Featured icon`: 32×32 · r=9999 · stroke=Border/border-success=#067647 · sw=1 · sa=INSIDE · fx=DROP_SHADOW(#1018280d 0,1 b2) · tokens{topLeftRadius:radius-full, topRightRadius:radius-full, bottomLeftRadius:radius-full, bottomRightRadius:radius-full}
- `Security Confirmation  › Featured icon › square-lock-password`: 16×16
- `Security Confirmation  › Featured icon › square-lock-password › elements`: 12×14
- `Security Confirmation  › Featured icon › square-lock-password › elements › Icon`: 12×14 · fill=Icon/icon-success=#067647
- `Security Confirmation  › Text Content`: 346×64 · lay=V/MIN/MIN · pad=0 0 0 0 · gap=12 · tokens{itemSpacing:Global/spacing-lg}
- `Security Confirmation  › Text Content › Official Reliable websites use HTTPS`: 346×28 · font=mixed · fs=18 · lh=28 · ts=Text lg/Semibold · txt="Official Reliable websites use" · tokens{fontSize:Size/Text/typo-size-text-Ig, fontStyle:Font Wieght/font-weight-semibold, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-Ig, lineHeight:Line Height/Text/line-heights-text-Ig}
- `Security Confirmation  › Text Content › Ensure the website is using the HTTPS protocol.`: 346×24 · fill=Text/text-primary-paragraph=#384250 · font=mixed · fs=16 · lh=24 · ts=Text md/Regular · txt="Ensure the website is using th" · tokens{fontSize:Size/Text/typo-size-text-md, fontStyle:Font Wieght/font-weight-regular, fontFamily:Font Family/font-family-text, paragraphSpacing:Paragraph Spacing/Text/paragraph-spacing-text-md, lineHeight:Line Height/Text/line-heights-text-md}

### Interactions & motion

*No prototype reactions defined on this component set.*
