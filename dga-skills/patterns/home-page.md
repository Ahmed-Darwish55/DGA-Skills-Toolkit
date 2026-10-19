# Home page — exact composition of the DGA Home Page Template

Source: Figma "Home Page Template - Platforms Code (Community)", frame **Home Page - Desktop AR** (1440 × 3019) — raw tree
`references/dga-live/data/templates/home-page.json`, text `references/dga-live/templates/home-page.md`.
Code: React `lib/templates/react/Home.jsx`, vanilla/Angular/ExB `lib/templates/vanilla/index.js` (`home()`), content `lib/templates/content.js`.
**Read this before writing ANY home / landing / portal page, also when you write the markup yourself.** (Owner corrections 2026-10-18.)
Header, navigation and footer are **site-level** (one configuration for all pages): `site-config.md` (owner rule 2026-10-19).

| # | Section | Must look like (Figma) | Never |
|---|---|---|---|
| 1 | **Digital Stamp** | `dga-digital-signature` (neutral-100 strip, flag, «موقع حكومي مسجل…», «كيف تتحقق؟») | omit it |
| 2 | **Nav Header** (72, white, divider) | Logo (Logo Placeholder Medium/Side) · **Header Menu Items** (tabs; a tab with a sub-menu shows the **chevron** `arrow-down-01` and opens the DGA sub-menu) · **3 Header Actions** at the far end: `search-01` «البحث» · `translation` «English» · `user` «تسجيل الدخول» — **icon + text, no fill** (Selected=False) | a filled green «تسجيل الدخول» button; dropping search / language |
| 3 | **Hero** (491, gradient #14573a → #1b8354, pad 40/80) | title **60/72 bold white**, lead **20/30 white** (max 624), **ONE** button **Neutral on-color Large** (white, dark text) «إجراء رئيسي», **carousel dots** under the content | a search box, two primary buttons, images (Exact) |
| 4 | **About us** (white, pad 40/80, gap 32) | Title row: «قسم من نحن» (Display sm 30/38 bold) + **Secondary-Outline Large** button «إجراء ثانوي» on the opposite side; description (Text md); **figures** row (`StatsStrip variant="template"`, see `stats.md`): featured icon xl light circle · number 48 regular #14573a · label | Metric cards with shadow, label above number |
| 5 | **Services** (**neutral-50**, pad 40/80) | Title + **«عرض الكل»** (Secondary-Outline Large) · description (max 720) · **Carousel / Dots** whose slides are rows of **Card / Effect=Stroke** (320 wide, pad 16, gap 24, r16): featured icon (Large, brand, light, circle) · title (Text lg bold) · text (Text md) · **Tags** (Small) · actions **primary + secondary-outline** (Large) — `ServiceCarousel` / `serviceCarousel()` | a green text link «كل الخدمات»; a static grid with one button |
| 6 | **Articles & News** (white) | Title + **«عرض الكل»** · description · **3 × Card Stroke 416** (image 384×250 r8 · title · 4-line text · primary «قراءة المزيد») — `CardGrid columns={3}` | |
| 7 | **Partners** (white) | «قسم الشركاء» (Display sm) · row: **icon-only Secondary-Solid Large arrow** · **logo cards 98×100** (stroke neutral-primary, r16, pad 16, Logo Placeholder Small/Top) · arrow — `PartnersStrip` / `partnersStrip()` | omit the section |
| 8 | **Last modified** (white, pad 16/80) | «تاريخ آخر تعديل: dd/mm/yyyy - h:mm م بتوقيت السعودية» (Text sm 14) — `LastModified` | |
| 9 | **Footer** — the **site** footer variant (`theme.footerVariant`, default **Dark green**; the Home template file has Dark green and Default frames — see `site-config.md`) | groups **ملخص · روابط مهمة · الاتصال والدعم** (title + underline, links) · **تابعنا على** (X, LinkedIn, Instagram icon buttons) · **أدوات الإتاحة والوصول** (sign-language, zoom, view) · legal row: **خريطة الموقع · RSS · تطبيق الجوال**, «جميع الحقوق محفوظة … ©», «تم تطويره وصيانته بواسطة …», logos (**not passed by default: PKG-FOOTER-05** — the package renders them without alt) | a big entity title in the footer (`mainTitle`); a footer variant chosen by the page; a feedback question on Home |

Inner pages (FAQ, content, contact, service): light **primary-25** title band (title 48 text-default + description) — `Hero light`; same site header + footer (`site-config.md`); above it «تاريخ آخر تعديل» then the **feedback strip** (white, 2px top border-primary, «هل كانت هذه الصفحة مفيدة؟» + «نعم»/«لا» **Primary Large** + «N% من المستخدمين قالوا نعم من X تقييمًا»).

Content width = **1280** (1440 frame − 2 × 80): `.ah-container` = 1280 + 2 × 32 padding.

## Package facts that shape the code (@platformscode/core 0.0.52)
- `dga-nav-header-link`: `icon` is drawn **after** the label (used as the chevron for menu tabs and as the icon of header actions); sub-menu goes in the named slot `dga-nav-header-sub-menu`.
- `dga-footer`: link groups render **only with `NavLinks=true`** (PKG-FOOTER-04).
- `dga-card-v2`: renders only the named slots `card-content` / `card-actions` (PKG-CARDV2-01) — needed for cards with tags + two actions (`dga-card` has no tags).
- `dga-carousel`: `variant="dots"` shows ONE child at a time (child width = first child) → each slide must be a full-width row; `variant="dots-only"` **never renders dots** (it counts slides from a container it does not render — PKG-CAROUSEL-01) → the hero uses `dots` with real slides.
- Icons used by the template (all in `registry/icons/icon-map.json`): search-01, translation, user, arrow-down-01, give-blood, star, add-01, user-group, checkmark-circle-02, arrow-left-01, arrow-right-01, new-twitter, linkedin-02, instagram, sign-language-c, search-add, view.

## Mobile (430 frame)
Header collapses actions into the package overflow menu (…); figures 2 per row (number 36/44); service cards 1 per row inside the carousel; news cards stacked; partners row scrolls with the arrows; footer groups stack.
