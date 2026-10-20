[English](TEMPLATES.md) | **العربية**

<div dir="rtl">

# القوالب

تعرف حزمة الأدوات جميع **قوالب الصفحات العشرين** في كود المنصات (DGA Platforms Code). لكل قالب صفحة مرجعية في [`dga-skills/references/dga-live/templates/`](../dga-skills/references/dga-live/templates/) تتضمن بنية أقسامه، مستخلصة من ملفات DGA في Figma Community. وخريطة الحالة الكاملة موجودة في [`dga-skills/lib/templates/templates-map.json`](../dga-skills/lib/templates/templates-map.json).

هناك ثلاثة مستويات من الدعم:

| المستوى | المعنى |
|---|---|
| **Implemented** (مُنفَّذ) | صفحة أو كتلة جاهزة في `lib/templates` أو `lib/patterns` |
| **Skeleton** (هيكل) | يُولَّد بواسطة `tools/new_template.py`: يُترجَم (compiles) دون أخطاء، ويعرض كل أقسام القالب بمحتوى افتراضي معنوَن، ويُعلِّم ما يجب عليك تعبئته بالوسم `TODO(content)`. وهو **نقطة انطلاق، وليس صفحة متحققًا منها** |
| **Builder only** (المُنشئ فقط) | الكتل البنائية موجودة، لكن الصفحة غير مجمّعة لتلك التقنية |

## القوالب العشرون

| # | القالب (slug) | React | Vanilla / Web Components | Angular |
|---|---|---|---|---|
| 1 | الصفحة الرئيسية (Home Page) (`home-page`) | Implemented (`Home.jsx`) | Implemented (`home()`) | عبر مُنشئ vanilla |
| 2 | صفحة الخدمة (Service Page) (`service-page`) | Implemented (`Service.jsx`) | Implemented (`service()`) | مُخطَّط (mapped) |
| 3 | صفحة البحث (Search Page) (`search-page`) ودليل الخدمات | Implemented (`SearchPage.jsx`، `Services.jsx`) | دليل الخدمات مُنفَّذ (`services()`) | — |
| 4 | النموذج (Form) (`form`) | Implemented (`FormPage.jsx`) | Builder only (`formPattern`) | مُخطَّط (mapped) |
| 5 | الأسئلة الشائعة (FAQ) (`faq`) | Implemented (`Faq.jsx`) | Implemented | Implemented (عناصر مخصصة) |
| 6 | الصفحة غير موجودة (Page Not Found) (`page-not-found`) | Implemented (`NotFound.jsx`) | Implemented | Implemented (عناصر مخصصة) |
| 7 | تواصل معنا (Contact Us) (`contact-us`) | Implemented (`ContactPage.jsx`) | — | — |
| 8 | قسم الملاحظات (Feedback Section) (`feedback-section`) | Implemented (كتلة الملاحظات + شريط التذييل) | شريط التذييل | شريط التذييل |
| 9 | قسم التقييم (Rating Section) (`rating-section`) | Implemented (كتلة التقييم) | — | — |
| 10 | عن الجهة (About the Entity) (`about-entity`) | Skeleton | — | — |
| 11 | روبوت المحادثة (Chatbot) (`chatbot`) | Skeleton | — | — |
| 12 | صفحة المحتوى (Content Page) (`content-page`) | Skeleton | — | — |
| 13 | شريط ملفات تعريف الارتباط (Cookies Banner) (`cookies-banner`) | Skeleton | — | — |
| 14 | المشاركة الإلكترونية (e-Participation) (`e-participation`) | Skeleton | — | — |
| 15 | المساعدة والدعم (Help & Support) (`help-support`) | Skeleton | — | — |
| 16 | رحلات الحياة (Life Journeys) (`life-journeys`) | Skeleton | — | — |
| 17 | خريطة الموقع (Site Map) (`site-map`) | Skeleton | — | — |
| 18 | **اليوم الوطني السعودي (Saudi National Day)** (`national-day`) | Skeleton (موسمي) | — | — |
| 19 | **يوم التأسيس السعودي (Saudi Founding Day)** (`founding-day`) | Skeleton (موسمي) | — | — |
| 20 | **الحج (Hajj)** (`hajj`) | Skeleton (موسمي) | — | — |

تُبنى الهياكل العشرون جميعها وتُعرض بالعربية والإنجليزية. وتعني الخلايا "—" أنه لا يوجد شيء مُعَدّ مسبقًا لتلك التقنية؛ ومع ذلك يبني Claude الصفحة من المرجع عندما تطلب ذلك، مستخدمًا مكونات DGA نفسها.

## توليد هيكل

```bash
python3 dga-skills/tools/new_template.py --list
python3 dga-skills/tools/new_template.py --template national-day --dest src/pages --lib ../dga-skills/patterns/react
python3 dga-skills/tools/new_template.py --all --dest src/pages --lib ../dga-skills/patterns/react
```

بعد التثبيت تكون الأداة في `~/.claude/skills/dga-skills/tools/new_template.py`. يكتب المولّد صفحات React؛ و`--lib` هو مسار الاستيراد من الصفحة المولَّدة إلى مجلد `patterns/react` المنسوخ.

## استخدام الصفحات المُنفَّذة

React:

```jsx
import { Home, Services, Service, Faq, FormPage, SearchPage, ContactPage, NotFound } from './dga-skills/templates/react/index.js';
```

Vanilla:

```js
import { home, services, service, faq, notFound } from './dga-skills/templates/vanilla/index.js';
```

تأخذ كل صفحة الترويسة والتنقل والتذييل من إعداد الموقع؛ انظر [GETTING-STARTED.ar.md](GETTING-STARTED.ar.md#5-one-site-configuration-all-technologies).

## لقطات الشاشة

مُعروضة من `lib/templates` بمحتوى افتراضي (React، DGA Exact، RTL):

| الصفحة الرئيسية | دليل الخدمات | الأسئلة الشائعة |
|---|---|---|
| <img src="images/v5.0.3-home-desktop.png" width="260" alt="قالب الصفحة الرئيسية، سطح المكتب"> | <img src="images/v5.0.3-services-desktop.png" width="260" alt="دليل الخدمات، سطح المكتب"> | <img src="images/v5.0.3-faq-desktop.png" width="260" alt="صفحة الأسئلة الشائعة، سطح المكتب"> |

مطابقات الأقسام قسمًا قسمًا: [home-page.md](../dga-skills/patterns/home-page.md) · [service-page.md](../dga-skills/patterns/service-page.md) · [services-page.md](../dga-skills/patterns/services-page.md).

</div>
