[English](SUPPORTED-FRAMEWORKS.md) | **العربية**

<div dir="rtl">

# الأطر والبيئات المدعومة

## بيئات Claude المستضيفة

| البيئة | التثبيت | الأدوات المساعدة الاختيارية | الحالة |
|---|---|---|---|
| Claude Code (الطرفية، وبيئة التطوير IDE، وتبويب Code في تطبيق سطح المكتب) على macOS / Linux | `python3 install.py install` | تُثبَّت تلقائيًا من الأسواق (marketplaces) الرسمية | مدعوم |
| Claude Code على Windows | `.\install.ps1 install` أو `install.cmd install` | كما سبق | مدعوم؛ لم يُتحقق منه بعد على جهاز Windows حقيقي |
| Claude Desktop / Cowork / claude.ai | ارفع `DGA-Skills-Toolkit-V5.0.3-COWORK-UPLOAD.zip` | تُكتشف فقط (لا تستطيع المهارة تثبيت مهارات في Cowork) | مدعوم؛ لم يُتحقق بعد من رفع الإصدار 5.0.3 على حساب فعلي |

التفاصيل: [INSTALLATION.ar.md](INSTALLATION.ar.md).

## تقنيات الواجهة الأمامية

عندما تسأل المهارة عن التقنية تكون الخيارات: **React** و**Angular** و**ArcGIS Experience Builder** و**Other** (تحددها أنت) و**Auto Detect** (يقرأ `package.json` و`angular.json` والملفات المشابهة في مشروعك).

| التقنية | حزمة DGA المستخدمة | شيفرة حزمة الأدوات (`dga-skills/lib/`) | إطار الموقع (ترويسة وتذييل موحّدان) | الحالة |
|---|---|---|---|---|
| **React** 18 | `platformscode-new-react` 0.1.45 + `@platformscode/core` 0.0.52 | `react/`، `patterns/react/`، `templates/react/` | `<SiteProvider>` + `<SiteHeader>` / `<SiteFooter>` / `PageShell` | مدعوم |
| **Angular** 19 (standalone، strict) | العناصر المخصصة (custom elements) من `@platformscode/core` | `angular/` (`provideDgaSkills`، `provideDgaSite`، `<dga-skills-site-shell>`) | `<dga-skills-site-shell>` | مدعوم (البناء الصارم) |
| **Vanilla JS / Web Components** | العناصر المخصصة من `@platformscode/core` | `vanilla/`، `patterns/vanilla/`، `templates/vanilla/` | `pageShell()`، `siteHeader()`، `siteFooter()` | مدعوم |
| **ArcGIS Experience Builder** (الإصدارات المستهدفة 1.14–1.18) | العناصر المخصصة من `@platformscode/core`، مع أنماط محصورة في نطاق عنصر الواجهة (widget) | `exb/` (`useDgaWidget`، `useSiteChromeWidget`، `mountSiteChrome`، قالب عنصر الواجهة) | عنصر واجهة واحد للترويسة + عنصر واجهة واحد للتذييل يعتمدان على الإعداد نفسه | مدعوم؛ لم يُتحقق منه بعد في Experience Builder حقيقي |
| **Vue وSvelte وLit وNext.js** | العناصر المخصصة من `@platformscode/core` عبر مسار vanilla | `vanilla/` + القواعد الواردة في `adapters/other.md` | منشئات vanilla | دعم أساسي |

لا تُستخدم `platformscode-new-angular` 2.0.0: فهي تعتمد على إصدار قديم من core، ومدخلاتها (inputs) لا تتوافق مع واجهة core البرمجية (العيب `PKG-NG-01`). يستخدم Angular العناصر المخصصة من core مباشرةً.

### إصدارات حزم DGA

يصف سجل الواجهات البرمجية (`dga-skills/registry/packages/`) الإصدارات **0.0.17** و**0.0.52** و**0.0.53** من `@platformscode/core`. وتفحص أداة حماية الخصائص `tools/check_dga_props.py` شيفرتك مقابل الإصدار المثبّت في مشروعك، فيُبلَّغ عن أي خاصية مُختلَقة أو مكتوبة خطأً قبل نشرها. وهناك 60 عيبًا معروفًا في الحزم مسجّلة في `registry/packages.json` مع حلولها البديلة؛ ولا يُعدَّل `node_modules` أبدًا.

### الأيقونات

`@platformscode/icons` هي مجموعة الأيقونات الأساسية. وتُستخدم **Hugeicons Free** (`@hugeicons/core-free-icons`، برخصة MIT) بديلًا احتياطيًا فقط للرموز غير المتوفرة. ولا تُضمَّن Hugeicons Pro أبدًا.

## متطلبات الأدوات

| الأداة | الغرض منها | الإصدار |
|---|---|---|
| Python | المثبّت، وإعدادات المشروع، ومدير الاعتماديات، والمولّدات، والفحوصات | 3.8+ (المكتبة القياسية فقط) |
| Node.js + npm | بناء المشاريع، واختبارات الوحدات، ومحرك ضمان الجودة | Node 18+ (اختُبر على 22) |
| Playwright + Chromium | محرك ضمان الجودة وفحص اتساق الموقع | التثبيت الخاص بالمشروع |
| `@axe-core/playwright` | بوابة إمكانية الوصول في محرك ضمان الجودة | اختياري؛ وبدونه يُبلَّغ عن بوابة axe بالحالة NOT VERIFIED |

## اللغات والاتجاه

العربية (RTL) هي الافتراضية، والإنجليزية (LTR) مدعومة بالكامل. يُفحص كل قالب صفحة وإطار الموقع في الاتجاهين، ويُشغّل محرك ضمان الجودة كل صفحة في RTL وLTR بعروض 1440 و1024 و768 و390 px.

ملاحظات كل إطار وشيفرة الإعداد الجاهزة للنسخ: [`dga-skills/adapters/`](../dga-skills/adapters/) · البدء: [GETTING-STARTED.ar.md](GETTING-STARTED.ar.md).

</div>
