# Services catalogue — DGA Search Page Template (grid variant)

The DGA template set has no separate "services list" template; portals publish their catalogue on the **Search Page Template**
(`references/dga-live/data/templates/search-page.json`, frame **Search Page - AR**, the variant with **3 cards per row**). Live DGA-aligned portals use the same
blocks (search box, result count, cards). Code: React `lib/templates/react/Services.jsx`, vanilla `services()`;
content `lib/templates/content.js` (`servicesPage`, `services`).

| # | Section | Must look like (Figma) |
|---|---|---|
| 1–3 | Stamp · Second Nav Header · Nav Header | as `service-page.md` |
| 4 | **Search** (pad 40/80, H gap 16) | **Search Box Medium** filling the row (label hidden in Figma — the placeholder names the field) + **Primary Large «بحث»** |
| 5 | **Body** (pad 40/80, V gap 32, centred) | details row: [**H1 Display sm** «الخدمات الإلكترونية» + count «N خدمة» (Text md, text-secondary-paragraph)] · at the far end **Secondary-Outline Large «ترتيب حسب»** (`sort-by-down-02`) and **Filtration «تصفية»**; **grid of Card Stroke, 3 per row (411, gap 24)** — icon · title (h2) · text · tags · primary «ابدأ الخدمة» + secondary-outline «تفاصيل الخدمة»; **Pagination Large** centred |
| 6 | Last modified · Feedback strip · Footer (Dark green) | as the inner templates |

Responsive: 2 cards per row < 1024, 1 per row < 768; the search button wraps under the box on phones.

Package facts: `dga-filteration` crashes without a full `initvalue` (PKG-FILTER-01) → `FilterMenu` / `filterMenu()` (Neutral Large DGA button +
panel of `dga-checkbox` / `dga-radio-button`, «تطبيق» / «إزالة التصفية», Escape closes); `dga-search-box` label is not associated and its
search button has no name (PKG-SEARCH-01); `--text-secondary-paragraph` resolves to #6c727e instead of the Figma #6c737f (PKG-TOKEN-01, E3).
