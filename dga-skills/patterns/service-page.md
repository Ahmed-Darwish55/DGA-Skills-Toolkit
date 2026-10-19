# Service page — exact composition of the DGA Service Page Template

Source: Figma "Service Page Template - Platforms Code", frame **Service Page - AR** (1440 × 2782) and **Service Page - AR** mobile (430) —
raw tree `references/dga-live/data/templates/service-page.json`, text `references/dga-live/templates/service-page.md`.
Code: React `lib/templates/react/Service.jsx` + `lib/patterns/react/ServiceBlocks.jsx`; vanilla/Angular/ExB `lib/templates/vanilla/index.js`
(`service()`) + `lib/patterns/vanilla/index.js`; content `lib/templates/content.js` (`service`). Owner request 2026-10-18: «خليها بالظبط».
**Read this before writing ANY service-details page, also when you write the markup yourself.**

| # | Section | Must look like (Figma) | Never |
|---|---|---|---|
| 1 | **Digital Stamp** | `dga-digital-signature` | omit it |
| 2 | **Second Nav Header** (Style=Gray, 40 high, neutral-100) | content: `sub-header-Item` = icon 24 + Text md (text-primary-paragraph): **weather `cloud` · date `calendar-04` · time `time-02` · location `location-01`**; actions at the far end: **Button Subtle Medium icon-only** with tooltip: `view` · `zoom-in-area` · `zoom-out-area` · `mic-01` (working tools: `lib/core/page-tools.js`). Hidden < 600 px (the mobile frames have none — PKG-NAV-03) | text links in this bar; dead icon buttons |
| 3 | **Nav Header** | same as Home (`home-page.md` row 2) | |
| 4 | **Service** (pad 40/80, gap 32) | a **primary-25 band** behind the top 154 px; **main 832** (gap 64): *Description* (gap 16) = Title row [breadcrumb (`dga-breadcrumbs`) + **H1 Display sm 30/38 bold**] with **Primary Large «بدء الخدمة»** on the opposite side, bottom-aligned · **Tags Small** (Info «الجهة» · Success «رحلة الحياة» · Neutral «المنصة») · description (Text md, max 720) · **Link Medium + `link-04`** «اتفاقية مستوى الخدمة»; *Info* (gap 24) = **Horizontal Tab List** (Medium, tab icons, flush) · **Video** 832×344 r16 neutral-50 with **Featured icon Large Brand Dark** (play) · **ordered Steps** (List item Ordered / Neutral, gap 16) | a 48 px green hero; tabs without icons; a dl/alert block instead of the card |
| 5 | **Service Card** (416, pad 40 [mobile 40/16], r16, stroke border-background-neutral, white, gap 24) | rows icon 24 + label / value (gap 8 / 4): `user` الفئة المستهدفة · `clock-01` مدة الخدمة · `computer-phone-sync` قنوات الخدمة · `riyal-circular` تكلفة الخدمة · قنوات الدفع (payment marks) — Line — الأسئلة الشائعة + link · `call` الهاتف · `mail-01` البريد الإلكتروني · **Secondary-Solid Large** «تحميل دليل المستخدم» — Line — «تطبيقات الجوال» (Text lg/Bold) + store buttons 120×40 r6 (App Store · Google Play · AppGallery, wrap, gap 12) | |
| 6 | **Related services** (primary-25, pad 40/80, gap 24) | title Display sm + **Subtle Large «عرض الكل»** (not outline — differs from Home) · description · **Carousel / Dots** of Card Stroke (icon · title · text · tags · primary) | a static grid |
| 7 | **Comments & suggestions** (white, pad 40/80) | **Card Stroke 1280**: featured icon light `checkmark-circle-02` · «التعليقات والاقتراحات» (Text lg/Bold) · text · **Primary Large «تواصل معنا»** | |
| 8 | **Last modified** | as Home | |
| 9 | **Rating strip** (white, **2px top border-primary**, pad 24/80) | «تم تقييم هذه الخدمة بمتوسط 3.9» · stars (Rating) · «1544 تقييم» · **Primary Large «قيم هذه الخدمة»** at the far end (opens the interactive rating) | |
| 10 | **Feedback strip** | as the inner templates (`home-page.md`) | |
| 11 | **Footer** | **Dark green**; no footer stamp (the stamp is at the top) | |

Mobile (430): the Service Card follows the main column; Description stacks (button under the title); everything 16 px gutters.

## Values below the extraction depth — REVIEW REQUIRED
The local Figma extraction stops at depth 3 inside the Service Card and the Card instances. Measured/assumed:
info-row label **Text md / Semibold, text-default**; value **Text md / Regular, text-primary-paragraph** (as the Rating template's Contact Card);
Related-services cards show tags + one primary action (Card defaults; the Comments card in the same frame hides the secondary action);
tab icons (`sort-by-down-02`, `checkmark-circle-02`, `file-01`) are placeholders for the Figma "Leading icon" swap. Confirm against the Figma file when the
owner shares its link; payment marks and store badges are brand assets — pass the official images (`logo` / `badge`), the toolkit never bundles them.

## Package facts that shape the code (@platformscode/core 0.0.52)
- `dga-second-nav-header`: content in `slot="content"`, actions in `slot="actions"`; item icon in `slot="icon"`; never wraps (PKG-NAV-03).
- `dga-card-v2`: width props are read once in the constructor → inner card stuck at 360 px (PKG-CARDV2-02) → `stretchCardV2()`.
- `dga-list-item`: row fixed at 24 px → wrapped steps overlap (PKG-LIST-01) → `.ah-steps … { height: auto }`.
- `dga-tabs`: never wraps or scrolls (PKG-TABS-02) → `overflow-x: auto` on the list; tab icons via `tabIcon` + `iconProps` (registered names).
- `dga-link` `iconType` prints the icon name (PKG-LINK-01) → `IconLink` (decorative `dga-icon` + `dga-link`).
- `dga-icon` has `role="img"`; decorative icons get `aria-hidden="true"` (inherited attribute) so axe does not need a name.
