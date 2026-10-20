[English](KNOWN-LIMITATIONS.md) | **العربية**

<div dir="rtl">

# القيود المعروفة

تسرد هذه الصفحة ما لا تقوم به حزمة DGA Skills Toolkit 5.0.3، وما لم يُتحقق منه، والعيوب المعروفة في حزم DGA التي تعتمد عليها. ولا يُحتسب أي شيء هنا ناجحًا.

## 1. لم يُتحقق منه بعد

| المجال | الحالة |
|---|---|
| التثبيت على Windows (`install.ps1`، `install.cmd`) | كُتب ورُوجع، ولم يُشغَّل بعد على جهاز Windows حقيقي |
| ArcGIS Experience Builder | تعمل عناصر الواجهة (widgets) في بيئة Experience Builder محاكاة؛ ولم تُشغَّل بعد في Experience Builder حقيقي بالإصدارات 1.14–1.18 |
| رفع ملف ZIP للإصدار 5.0.3 إلى Cowork | يستوفي ملف ZIP حدود الرفع في Cowork ويجتاز مدقق صيغة المهارات؛ ولم يُتحقق بعد من رفعه إلى حساب فعلي — انظر [INSTALLATION.ar.md › التحقق في Cowork](INSTALLATION.ar.md#verify-in-cowork) |
| مطابقة الصفحات الكاملة لنمط DGA Exact | متعذرة بسبب عيوب الحزم (القسم 3) |
| صفة الناشر الرسمي لحزم `@platformscode/*` | لم يُتحقق منها |

## 2. قيود حزمة الأدوات نفسها

| ID | القيد |
|---|---|
| OWN-01 | بعض الكتل البنائية في React (عنوان الصفحة، وتقييم الملاحظات، ومكدّس التنبيهات، وكتلة الحالة، وكتلة القائمة، وموفّر التنقل) ليس لها مقابل في Angular أو vanilla؛ وتُركّب هذه التقنيات عناصر DGA نفسها مباشرةً. |
| OWN-02 | 9 من القوالب العشرين مُنفَّذة في React؛ أما الـ 11 الأخرى فهي **هياكل** مولَّدة تُترجَم وتُعرض لكنها ليست صفحات مكتملة ([TEMPLATES.ar.md](TEMPLATES.ar.md)). |
| OWN-04 | تفشل بوابة حجم الحزمة (B1) لأن استيراد مُغلِّف React واحد يجلب مجموعة مكونات DGA كاملة (PKG-BUNDLE-01). |
| OWN-05 | تُدعم Vue وSvelte وLit وNext.js عبر مسار Web Components مع فحوصات على مستوى المكوّن الواحد فقط. |
| OWN-06 | يحتاج مثال الحركة (motion) إلى العرض من جهة الخادم (SSR) لإظهار المحتوى بدون JavaScript. |
| OWN-07 | تعرض قوالب الأسئلة الشائعة جميع العناصر مطويّة، لأن العنصر المفتوح افتراضيًا لا يمكن إغلاقه (PKG-ACCORDION-03). |
| REVIEW | بوابات ضمان الجودة الذاتية التقدير (المفاهيم الإبداعية، والدرجة البصرية، ولوحة قصة الحركة، وجداول الحالات) تكون دائمًا **REVIEW REQUIRED**، ولا تكون PASS تلقائيًا أبدًا. |
| COWORK | في Cowork لا تستطيع المهارة تثبيت مهارات أخرى، لذا تُكتشف الأدوات المساعدة الاختيارية ولا تُثبَّت ([INSTALLATION.ar.md](INSTALLATION.ar.md#platform-limitation-helpers-in-cowork)). |

## 3. العيوب في حزم `@platformscode/*`

هذه عيوب في حزم DGA نفسها، وليست في حزمة الأدوات. لا تُعدّل حزمة الأدوات `node_modules` أبدًا؛ بل توثّق حلًا بديلًا حيثما وُجد، ويُبلغ محرك ضمان الجودة عن المعرّف في كل صفحة متأثرة. **وما دامت هذه العيوب قائمة، فلا يمكن الإبلاغ عن أي صفحة تستخدم مكوّنًا متأثرًا بأنها مطابقة بالكامل لنمط DGA Exact** (core 0.0.52 و0.0.53). وطبقة القائمة المنسدلة الاختيارية (opt-in) تُصلح لوحة المفاتيح/ARIA فقط حيث يفعّلها المشروع؛ ويبقى عيب المورّد مفتوحًا.

يعرض الجدول العيوب الأكبر أثرًا. وجميع العيوب المسجلة البالغ عددها 60 موجودة في السجل المرتبط أدناه.

| ID | المكوّن | الملخص | الحل البديل في حزمة الأدوات | الخطورة | الحالة في 0.0.53 |
|---|---|---|---|---|---|
| PKG-BTN-01 | DgaButton/V2 | خلفية Secondary(-Solid) في حالتي Hovered/Pressed شفافة (خطأ إملائي في متغير CSS '-hoverd'، وغياب '-default-selected') | لا يوجد في المكتبة (لا تُعِد تنسيقه)؛ أبلغ عنه بوصفه DEVIATION | عالية | لم يُعَد اختباره |
| PKG-BTN-02 | DgaButton/V2 | حالة Pressed تستخدم رموز Selected | — | متوسطة | لم يُعَد اختباره |
| PKG-BTN-03 | DgaButton/V2 | لا توجد حالة Selected ولا واجهة aria-pressed | — | متوسطة | لم يُعَد اختباره |
| PKG-BTN-04 | DgaButton | الحد الافتراضي لـ Secondary-Outline هو ‎#e5e7eb (في Figma ‎#d2d6db) | — | متوسطة | لم يُعَد اختباره |
| PKG-BTN-05 | DgaButton | حالة Focused في Primary تفتقد الحلقة البيضاء الداخلية | — | متوسطة | لم يُعَد اختباره |
| PKG-BTN-06 | DgaButton | ارتفاع سطر التسمية في v1 هو normal | — | منخفضة | لم يُعَد اختباره |
| PKG-BTN-07 | DgaButton/V2 | زر الأيقونة فقط بدون تسمية ← يصبح اسمه بالإنجليزية 'Button with icon' | DgaIconButton / requireAccessibleName في المكتبة (التسمية إلزامية) — متحقق منه في React/Angular/vanilla | متوسطة | لم يُعَد اختباره |
| PKG-BTN-08 | DgaButton | يُسقَط النص الممرَّر كعناصر أبناء (لا يوجد slot) | استخدم label؛ ويُصدر validateProps تحذيرًا | متوسطة | لم يُعَد اختباره |
| PKG-BTN-09 | DgaButton | role=button زائد عن الحاجة | — | منخفضة | لم يُعَد اختباره |
| PKG-REACT-01 | platformscode-new-react | حزمة بحجم ‎~4.1 MB (تستورد جميع المكونات) + ملف core.css عام | — | متوسطة | لم يُعَد اختباره |
| PKG-CORE-01 | dependency tree | نسختان من @platformscode/core عندما يثبّت التطبيق إصدارًا مختلفًا عن platformscode-new-react | ثبّت core على 0.0.52 مع platformscode-new-react@0.1.45 | متوسطة | لم يُعَد اختباره |
| PKG-ICON-01 | dga-icon | تحتاج الأيقونات إلى تسجيل عبر addIcons أو مسار للأصول؛ والمحمِّل لا يوفر setAssetPath ← 'Invalid base URL' | createIconRegistry في المكتبة (addIcons مركزي) | عالية (الإعداد) | لم يُعَد اختباره |
| PKG-ICON-02 | dga-icon | انعكاس تلقائي لأيقونات الأسهم/الشيفرون عبر :host-context([dir=rtl]) — يخالف زر Figma ويتسرّب إلى محتوى LTR المتداخل | تضبط iconProps(...) القيمة flipRtl:false (MIRROR-* PASS في 3 أطر) | متوسطة | لم يُعَد اختباره |
| PKG-ICON-03 | dga-icon | تفشل روابط data URL المرمَّزة بصيغة URI ('Could not parse svg')؛ ولا يعمل إلا ';utf8,<svg…>' الخام | تُخرج hugeiconToDataUrl في المكتبة SVG خامًا \| وأصبحت validateIconData في lib/core/icons.js ترفض الحمولات المرمَّزة/غير الآمنة قبل addIcons وتلجأ إلى Hugeicons Free (stroke) بديلًا مع سبب صريح في fallbackBecause؛ ويكشف auditRenderedIcons مربعات dga-icon الفارغة. | منخفضة | لم يُعَد اختباره |
| PKG-ICON-04 | dga-icon (in dga-dropdown) | يعرض dga-icon الدور role=img دون اسم يمكن الوصول إليه (axe role-img-alt خطيرة) — أيقونات الشيفرون في القوائم المنسدلة؛ وتُظهر كل صفحة 6–19 عقدة (ترويسة التنقل، والتوقيع الرقمي، والبطاقات، والتنبيه المضمّن) | الأيقونات التي تضيفها الصفحة: aria-hidden أو تسمية؛ أما الأيقونات الداخلية في الحزمة فلا يمكن إصلاحها من الخارج؛ والصفحة DGA Exact NOT compliant ما دام العيب قائمًا | خطيرة (axe) | persists |
| PKG-DD-01 | dga-dropdown | تُنسخ قيمة dir للمضيف من document.documentElement — فالقائمة المنسدلة داخل dir=ltr في صفحة RTL تُعرض بـ RTL | طبقة توافق OPT-IN في lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): تضيف أدوار aria-haspopup/aria-expanded/listbox، ومعالجة مفاتيح ArrowDown/Up/Home/End/Escape، وتصحيح dir المتداخل من خارج الحزمة (سمات + مستمعات أحداث على shadow root المفتوح، دون إعادة تنسيق ودون تعديل node_modules). وهي محصورة في بنية core 0.0.52، وتعطّل نفسها في غير ذلك. النتيجة المقيسة: DDX-* 7/7 PASS في React + vanilla. ويبقى عيب المورّد نفسه مفتوحًا (ما زالت صفوف DD-* بالحالة FAIL على العنصر الخام). | متوسطة | persists |
| PKG-DD-02 | dga-dropdown | زر التشغيل لا يحتوي aria-expanded / aria-haspopup | طبقة توافق OPT-IN في lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): تضيف أدوار aria-haspopup/aria-expanded/listbox، ومعالجة مفاتيح ArrowDown/Up/Home/End/Escape، وتصحيح dir المتداخل من خارج الحزمة (سمات + مستمعات أحداث على shadow root المفتوح، دون إعادة تنسيق ودون تعديل node_modules). وهي محصورة في بنية core 0.0.52، وتعطّل نفسها في غير ذلك. النتيجة المقيسة: DDX-* 7/7 PASS في React + vanilla. ويبقى عيب المورّد نفسه مفتوحًا (ما زالت صفوف DD-* بالحالة FAIL على العنصر الخام). | متوسطة (إمكانية الوصول) | persists |
| PKG-DD-03 | dga-dropdown | لا يوجد تنقّل بمفاتيح الأسهم (ArrowDown لا ينقل إلى الخيارات؛ ولا يوجد معالج keydown في الشيفرة المصدرية) | طبقة توافق OPT-IN في lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): تضيف أدوار aria-haspopup/aria-expanded/listbox، ومعالجة مفاتيح ArrowDown/Up/Home/End/Escape، وتصحيح dir المتداخل من خارج الحزمة (سمات + مستمعات أحداث على shadow root المفتوح، دون إعادة تنسيق ودون تعديل node_modules). وهي محصورة في بنية core 0.0.52، وتعطّل نفسها في غير ذلك. النتيجة المقيسة: DDX-* 7/7 PASS في React + vanilla. ويبقى عيب المورّد نفسه مفتوحًا (ما زالت صفوف DD-* بالحالة FAIL على العنصر الخام). | عالية (إمكانية الوصول) | persists |
| PKG-DD-04 | dga-dropdown | مفتاح Escape لا يغلق القائمة المفتوحة | طبقة توافق OPT-IN في lib/core/dropdown-a11y.js (enhanceDropdownA11y / useDropdownA11y / createAccessibleDgaDropdown): تضيف أدوار aria-haspopup/aria-expanded/listbox، ومعالجة مفاتيح ArrowDown/Up/Home/End/Escape، وتصحيح dir المتداخل من خارج الحزمة (سمات + مستمعات أحداث على shadow root المفتوح، دون إعادة تنسيق ودون تعديل node_modules). وهي محصورة في بنية core 0.0.52، وتعطّل نفسها في غير ذلك. النتيجة المقيسة: DDX-* 7/7 PASS في React + vanilla. ويبقى عيب المورّد نفسه مفتوحًا (ما زالت صفوف DD-* بالحالة FAIL على العنصر الخام). | متوسطة (إمكانية الوصول) | persists |
| PKG-NG-01 | platformscode-new-angular@2.0.0 | الاعتمادية النظيرة @platformscode/core 0.0.17 ← خطأ ERESOLVE مع 0.0.52؛ ومدخلات المُغلِّف لا تتوافق مع واجهة core ('text' مقابل label)؛ والعناصر لا تُعرَّف بواسطة الوحدة (module) | استخدم العناصر المخصصة من core مباشرةً (lib/angular) | عالية | لم يُعَد اختباره |
| ENV-HUGE-01 | @hugeicons/core-free-icons index import | استيراد أيقونات مسمّاة من ملف الفهرس في الحزمة جعل esbuild يستنفد الذاكرة (5 GB) في بناء Angular | استيرادات افتراضية عميقة (deep default imports) | متوسطة (البناء) | لم يُعَد اختباره |
| PKG-FOOTER-01 | DgaFooter | ‏:host { width: fit-content } — لا يملأ التذييل عرض الصفحة ما لم تحدد الصفحة حجم المضيف | CSS على مستوى المضيف فقط: ‎.ah-footer > dga-footer { width: 100% } ‏(lib/patterns/patterns.css)؛ دون إعادة تنسيق داخلية | متوسطة | لم يُعَد اختباره |
| PKG-FOOTER-02 | DgaFooter | للعنصر section.footer-content حد أدنى للعرض 434px ← تمرير أفقي للصفحة عند 390px في LTR (وفي RTL يُقتطع) — يحدث أيضًا في RTL عند عرض groupLinks ‏(NavLinks=true): تمرير للصفحة بمقدار 25px عند 390 | على مستوى المضيف: ‎.ah-footer { max-width:100%; overflow-x:auto } عند ≤480px (يتمرر شريط التذييل لا الصفحة)؛ ويظل المحتوى قابلًا للوصول | عالية | لم يُعَد اختباره |
| PKG-FOOTER-03 | DgaFooter | تعرض mainImage عنصر <img>/رابطًا دون خاصية alt أو اسم يمكن الوصول إليه | مرّر الشعار فقط مع mainLinkTilte وصفي؛ وإلا فاحذف الصورة | متوسطة | لم يُعَد اختباره |
| PKG-LINK-01 | DgaLink | تُطبع الخاصية iconType / icon نصًا خامًا بدلًا من عرض أيقونة | icon={false}؛ وضع الأيقونات خارج الرابط | متوسطة | لم يُعَد اختباره |
| PKG-METRIC-01 | DgaMetric | تُطبع الخاصية featuredIcon نصًا خامًا | showFeaturedIcon={false} | متوسطة | لم يُعَد اختباره |
| PKG-METRIC-02 | DgaMetric | قيمة مؤشر التغيّر مكتوبة ثابتةً في الشيفرة: Math.abs(100) + '%' — تُظهر دائمًا '100%' مع سهم اتجاه بغض النظر عن البيانات | showInfo={false} حتى لا يُعرض اتجاه مُختلَق؛ وكذلك min-width 360px على المضيف — استخدم grid minmax(min(100%,360px),1fr) | عالية | لم يُعَد اختباره |
| PKG-SEARCH-01 | DgaSearchBox | زر البحث (.dga-search-box__search-btn) ليس له اسم يمكن الوصول إليه ← axe button-name حرجة | لا يوجد من خارج shadow root؛ ولا يمكن ادعاء DGA Exact ما دام قائمًا | حرجة (إمكانية الوصول) | لم يُعَد اختباره |
| PKG-NAV-01 | DgaNavHeader / DgaNavHeaderMenu / DgaNavHeaderLink | ترميز قائمة القائمة: عنصر <li> الذي يعرضه dga-nav-header-link ليس ابنًا مباشرًا لـ <ul> (يوجد عنصر مخصص بينهما) ← axe list / listitem خطيرة | لا يوجد من خارج المكونات | خطيرة (إمكانية الوصول) | لم يُعَد اختباره |
| PKG-CARD-01 | DgaCard | مستوى عنوان البطاقة ثابت (h4) — ولا يمكنه اتباع مخطط الصفحة | أبقِ عنوان h2/h3 فوق كل شبكة بطاقات (SectionHeading) حتى لا يتخطى المخطط أي مستوى | منخفضة | لم يُعَد اختباره |
| PKG-CARD-02 | DgaCard | يتقلّص المضيف إلى عرض المحتوى (في Figma تكون Card = fill container) | CSS على مستوى المضيف: ‎.ah-cards dga-card { display:block; width:100% } | متوسطة | لم يُعَد اختباره |
| PKG-DIGSIG-01 | DgaDigitalSignature | نص الرابط في نسخة LTR ‏(.digital_link) يفشل في تباين الألوان (axe color-contrast خطيرة)؛ وdga-icon بداخله له role=img دون اسم | لا يوجد من الخارج | خطيرة (إمكانية الوصول) | لم يُعَد اختباره |
| PKG-TEXTAREA-01 | DgaTextarea | تُعرض التسمية دون ربط for/id بعنصر <textarea> ‏(shadow DOM) ← axe label حرجة | لا يوجد من خارج shadow root | حرجة (إمكانية الوصول) | لم يُعَد اختباره |
| PKG-ALERT-01 | DgaInlineAlert | زر الإغلاق (.dga-btn--close) ليس له اسم يمكن الوصول إليه ← axe button-name حرجة | أخفِ زر الإغلاق عندما يكون التنبيه إعلاميًا (إن كانت الخاصية موجودة في إصدار المشروع) أو اقبل DEVIATION | حرجة (إمكانية الوصول) | لم يُعَد اختباره |
| PKG-ALERT-02 | DgaInlineAlert / DgaList | مستويات العناوين ثابتة (h4 في التنبيه المضمّن، وh3 في عنوان القائمة) | أبقِ عنوان h2 فوقها حتى يظل المخطط h1→h2→h3→h4 | منخفضة | لم يُعَد اختباره |
| PKG-RADIO-01 | DgaRadioButton | لون حد زر الاختيار ‎#6c727e غير موجود في dga-tokens.json/css (light DOM للحزمة) | لا يوجد؛ ويُحتسب بشكل منفصل عن الألوان التي تضيفها الصفحة | منخفضة | لم يُعَد اختباره |
| PKG-ACCORDION-01 | DgaAccordion | صف الترويسة 60px مقابل 56px لترويسة Accordion Large في Figma | لا يوجد؛ DEVIATION | منخفضة | لم يُعَد اختباره |
| PKG-ACCORDION-02 | DgaAccordion | عنصر defaultExpanded: قيمة max-height للمحتوى تُحسب قبل التخطيط (48px) فتكون أصغر من المحتوى (56px) ← نص مقتطع (أُعيد إنتاجه في vanilla وAngular، وليس في React) | بدّل حالة العنصر بعد componentOnReady بدلًا من defaultExpanded، أو اقبل الاقتطاع؛ وليس إعادة إنشاء بـ CSS | متوسطة | لم يُعَد اختباره |
| PKG-ALERT-03 | dga-inline-alert | الخاصية `title` مُعلنة في واجهة المكوّن (string، اختيارية) لكنها لا تُعرض أبدًا؛ والعنوان المرئي (h4.alert__title) هو `leadText` والمتن هو `helperText` | مرّر العنوان في `leadText` والمتن في `helperText`؛ ولا تعتمد أبدًا على `title` | متوسطة | لم يُعَد اختباره |
| PKG-BUNDLE-01 | platformscode-new-react (all wrappers) | استيراد مُغلِّف React واحد (مثل DgaButtonV2) يجلب مجموعة المكونات كاملة إلى الحزمة: 4.03 MB خام / ‎~598 KB JS مضغوطة gzip لزر واحد (React وحده: 46 KB gzip). ونقطة دخول المُغلِّف تسجّل كل العناصر المخصصة فورًا، فلا يستطيع tree-shaking إزالة المكونات غير المستخدمة. | للميزانيات الصارمة سجّل الوسوم المستخدمة فقط من `@platformscode/core/components/<tag>.js` (مسار vanilla/Angular) واستخدم العناصر المخصصة مباشرةً؛ وإلا فاقبل الحد الأدنى الذي يفرضه المورّد ووثّقه؛ وقسّم المسارات (code-split) حتى تُخزَّن حزمة المورّد مؤقتًا مرة واحدة | متوسطة | لم يُعَد اختباره |
| PKG-ACCORDION-03 | dga-accordion | العنصر المعروض مع defaultExpanded=true لا يمكن طيّه أبدًا: تعيد componentDidRender تعيين isOpen = defaultExpanded بعد كل عرض، فتُلغي أثر handleAccordionClick (يفشل الفأرة وEnter وSpace جميعها) | لا تستخدم defaultExpanded؛ واعرض جميع العناصر مطويّة (DEVIATION عن الإطارات التي تُظهر العنصر الأول مفتوحًا) — وهذا يتجنّب أيضًا PKG-ACCORDION-02 | عالية | لم يُعَد اختباره |
| PKG-INPUT-02 | dga-text-input | حقل الإدخال الأصلي غير مُعنوَن برمجيًا (axe `label`)، وحالة `error` لا تضبط aria-invalid، والنص المساعد/نص الخطأ غير مربوط عبر aria-describedby | أضف التسمية/الوصف من الخارج فقط إن لم توفر الحزمة أي نقطة ربط (hook)؛ وإلا فأبلغ عنه — لا تعدّل shadow DOM. يعرض FormPattern ملخصًا للأخطاء (role=alert) فيظل الإعلان عن الأخطاء قائمًا | عالية | FIXED in @platformscode/core 0.0.53 |
| PKG-TABS-01 | dga-tabs | تُعرض علامات التبويب بوصفها عناصر <a> دون role=tablist/tab/aria-selected؛ ومفاتيح الأسهم لا تنقل بين علامات التبويب، وEnter على علامة تبويب مُركَّز عليها لا يفعّلها (النقر بالفأرة يعمل) | لواجهات التبويب التي تعتمد على لوحة المفاتيح استخدم tablist تضيفه الصفحة وفق نمط APG أو تنقلًا قائمًا على الروابط؛ وسجّله بوصفه DEVIATION في نمط Exact | عالية | persists |
| PKG-MODAL-01 | dga-modal | يُفتح مربع الحوار بالسمة `open` (وليس showModal): لا ينتقل التركيز إلى مربع الحوار، ولا يوجد حصر للتركيز، ولا اسم يمكن الوصول إليه (aria-labelledby)، ومفتاح Escape لا يغلقه | أدِر التركيز في التطبيق المضيف (انقل التركيز إلى عنوان مربع الحوار عند فتحه، وأعده عند إغلاقه) وأغلقه عند Escape عبر مستمع keydown في التطبيق المضيف؛ واجعل ذلك اختياريًا (opt-in) وموثّقًا | عالية | persists |
| PKG-MODAL-02 | dga-modal | الخاصية `featuredIconProps` اختيارية في تعريفات الأنواع، لكن render يقرأ حقولها ← TypeError "reading 'name'" عند حذفها | مرّر دائمًا featuredIconProps { size, color, variant } | متوسطة | FIXED in @platformscode/core 0.0.53 |
| PKG-ALERT-04 | dga-inline-alert | لا يوجد role=alert/status ولا منطقة حيّة (live region) — والدور الوحيد بداخله هو للأيقونة (img)؛ ولا يُعلَن عن التنبيهات المُدرجة لاحقًا | ضع التنبيهات الديناميكية داخل منطقة aria-live (يقوم AlertStack / FormPattern بذلك بالفعل) | متوسطة | persists |

المصدر القابل للقراءة آليًا مع الأدلة: [`dga-skills/registry/packages.json`](../dga-skills/registry/packages.json). أبلغ عن مشكلات الحزم إلى مشرفي `@platformscode` (انظر حقلي `bugs` / repository في كل حزمة npm).

</div>
