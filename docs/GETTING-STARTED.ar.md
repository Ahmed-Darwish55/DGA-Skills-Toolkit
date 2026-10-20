[English](GETTING-STARTED.md) | **العربية**

<div dir="rtl">

# البدء

يأخذك هذا الدليل من التثبيت الجديد حتى إنشاء أول صفحة والحصول على تقرير ضمان الجودة (QA). ثبّت حزمة الأدوات أولًا: [INSTALLATION.ar.md](INSTALLATION.ar.md).

هناك طريقتان لاستخدام حزمة الأدوات:

1. **اطلب من Claude.** تبدأ المهارة (skill) تلقائيًا عند طلبات واجهات DGA والواجهات الحكومية (الأقسام 1–3).
2. **استخدم المكتبة مباشرةً** في مشروعك: `dga-skills/lib/`، التي تنسخها الأداة `tools/copy_lib.py` (الأقسام 4–9).

جميع المحتوى النموذجي في هذا المستودع بيانات افتراضية. تفترض المسارات أدناه أن المكتبة نُسخت إلى `src/dga-skills/`، وأن `<toolkit>` هو نسختك المستنسخة من هذا المستودع (أو `~/.claude/skills/dga-skills/..` بعد التثبيت).

## 1. طلبك الأول

افتح مجلد مشروع في Claude Code (أو مهمة جديدة في Cowork) واكتب:

```text
Build a DGA service page for "Building Permit Issuance". Arabic first, with an English version.
```

عند أول طلب في المشروع تطرح المهارة **سؤالًا واحدًا في كل مرة**:

1. **نمط التصميم** — `DGA Exact` أو `DGA Enhanced` أو `DGA Creative` ([DESIGN-MODES.ar.md](DESIGN-MODES.ar.md)).
2. **التقنية** — React أو Angular أو ArcGIS Experience Builder أو Other (تحددها أنت) أو Auto Detect، الذي يقرأ ملفات مشروعك ([SUPPORTED-FRAMEWORKS.ar.md](SUPPORTED-FRAMEWORKS.ar.md)).

تُحفظ الإجابتان في `.claude/dga-skills.json`، فلا يُعاد طرح السؤالين في الطلبات اللاحقة ضمن المشروع نفسه. ولتغييرهما لاحقًا يكفي أن تطلب ذلك (*"switch this project to DGA Creative"*).

## 2. كيف تبدو الإجابة الجيدة

- تسأل عن نمط التصميم قبل كتابة الشيفرة، ثم عن التقنية.
- تستخدم مكونات DGA حقيقية من `@platformscode/core` أو `platformscode-new-react`، دون خصائص (props) مُختلَقة.
- تشترك جميع صفحات الموقع في إعداد موقع واحد؛ ولا تحدد أي صفحة تصميم الترويسة (header) أو التذييل (footer) الخاص بها.
- تُشغّل الفحوصات الواردة في القسم 9 وتُبلغ بالنتيجة **PASS / FAIL / REVIEW REQUIRED**، مع تسمية عيوب الحزم المعروفة بمعرّفاتها `PKG-…`. ولا تدّعي أبدًا أن النتيجة "معتمدة من DGA" ("DGA certified").

## 3. مزيد من الطلبات

تجد في [PROMPT-EXAMPLES.ar.md](PROMPT-EXAMPLES.ar.md) اثني عشر طلبًا كاملًا جاهزًا للنسخ — الصفحة الرئيسية، ودليل الخدمات، وتفاصيل الخدمة، ولوحة المؤشرات التنفيذية، واليوم الوطني، ويوم التأسيس، والحج، وبوابة ثنائية اللغة، وArcGIS Experience Builder، وAngular، وتدقيق UI/UX، وتشغيل لضمان الجودة. أما قوالب الصفحات العشرون فمدرجة في [TEMPLATES.ar.md](TEMPLATES.ar.md).

## 4. نسخ المكتبة إلى مشروع

```bash
# React (+ patterns and templates)
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework react   --dest src/dga-skills --with-patterns
# Angular (copies site, patterns/shared, patterns/vanilla and patterns.css automatically)
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework angular --dest src/app/dga-skills --with-patterns
# Vanilla / Web Components
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework vanilla --dest src/dga-skills --with-patterns
# ArcGIS Experience Builder widget
python3 <toolkit>/dga-skills/tools/copy_lib.py --framework exb     --dest client/your-extensions/widgets/<widget>/src/dga-skills
```

يسجّل `copy_lib.py` بصمة SHA-256 لكل ملف منسوخ في `dga-skills-lib.json`. وعند تشغيله مرة أخرى يُبقي على الملفات التي عدّلها المشروع
ويُبلغ عنها بالحالة `kept-local-edit`؛ أضف `--force` لاستعادة نسخة المكتبة. ولا يكتب أبدًا داخل `node_modules`.

<a id="5-one-site-configuration-all-technologies"></a>
## 5. إعداد موقع واحد (لجميع التقنيات)

```js
// src/site-config.js — the ONLY place that defines header, navigation, footer and theme
import { createSiteConfig } from './dga-skills/site/site-config.js';

export const buildSiteConfig = (dir) => {
  const isArabic = dir === 'rtl';
  return createSiteConfig({
    dir,
    identity: { name: isArabic ? 'الجهة الحكومية النموذجية' : 'Sample Government Entity' },  // no logo → default logo
    navigationItems: [                                    // the order of this list = the menu order on every page
      { id: 'home', route: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
      { id: 'services', route: 'services', label: isArabic ? 'الخدمات' : 'Services',
        children: [{ label: isArabic ? 'خدمات الأفراد' : 'Individuals', route: 'services' }] },   // children → chevron + sub-menu
      { id: 'news', route: 'news', label: isArabic ? 'الأخبار' : 'News' },                         // no children → no chevron
      { id: 'about', route: 'about', label: isArabic ? 'عن الجهة' : 'About' },
    ],
    header: {
      secondNavItems: [{ label: isArabic ? 'الدمام' : 'Dammam', icon: 'location-01' }],
      actions: ['search', 'language', 'signIn'],          // which header actions, in which order
    },
    footer: {
      groups: [{ title: isArabic ? 'روابط مهمة' : 'Important links', links: [{ name: isArabic ? 'الأسئلة الشائعة' : 'FAQ', target: '#' }] }],
      legalLinks: [{ name: isArabic ? 'خريطة الموقع' : 'Sitemap', target: '#' }],
      copyright: isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved',
    },
    theme: {
      footerVariant: 'DarkGreen',                          // 'DarkGreen' (default) | 'Light' — one footer for every page
      showSecondNavHeader: true,
      showDigitalStamp: true,
      brandColors: { brand: 'var(--colors-primary-sa-flag-600-primary)' },   // DGA token references only
    },
  });
};
```

القواعد التي يفرضها `createSiteConfig`:

- يجب أن تكون معرّفات عناصر التنقل فريدة.
- لا يقبل `header.actions` إلا `search` و`language` و`signIn`، وكلٌّ منها مرة واحدة على الأكثر.
- يجب أن تكون قيمة `footerVariant` إما `DarkGreen` أو `Light`.
- لا يقبل `brandColors` إلا `brandStrong` و`brand` و`brandSubtle` و`accentBorder`، وتُضبط كل منها على رمز تصميم (token) بصيغة `var(--…)`. أما القيم الست عشرية (hex) أو قيم rgb فتؤدي إلى رمي خطأ.

تكون النتيجة مُجمَّدة بعمق (deeply frozen)، فلا تستطيع الصفحات تغييرها.

## 6. React

```jsx
import { SiteProvider, NavProvider, ModeProvider } from './dga-skills/patterns/react/index.js';
import { Home, Services, Service, FormPage, NotFound } from './dga-skills/templates/react/index.js';
import { buildSiteConfig } from './site-config.js';

export function App({ dir, route, navigateTo }) {
  const pages = { home: <Home dir={dir} />, services: <Services dir={dir} />, service: <Service dir={dir} />, form: <FormPage dir={dir} /> };
  return (
    <ModeProvider mode="dga-exact">
      <SiteProvider siteConfig={buildSiteConfig(dir)}>
        <NavProvider active={route} go={navigateTo}>{pages[route] || <NotFound dir={dir} />}</NavProvider>
      </SiteProvider>
    </ModeProvider>
  );
}
```

تستخدم صفحتك الخاصة الإطار المشترك (shell) وتمرّر **المحتوى فقط**:

```jsx
import { PageShell } from './dga-skills/templates/react/PageShell.jsx';

export function AboutPage({ dir }) {
  return (
    <PageShell dir={dir} pageRoute="about" feedback>   {/* no logo / links / footer props — they come from the site configuration */}
      <section className="ah-section"><div className="ah-container"><h1 className="ah-display-sm">…</h1></div></section>
    </PageShell>
  );
}
```

لا يأخذ `<SiteHeader>` و`<SiteFooter>` إلا `pageRoute` و`feedback` ومعالجات الأحداث (`onSearch` و`onLanguage` و`onSignIn` و`onFeedback`). أما خصائص التصميم مثل
`logo` أو `links` أو `secondNav` أو `background` فتُتجاهل مع ظهور تحذير في وحدة التحكم (console).

لتوليد هيكل صفحة لأي من قوالب DGA العشرين:

```bash
python3 <toolkit>/dga-skills/tools/new_template.py --list
python3 <toolkit>/dga-skills/tools/new_template.py --template national-day --dest src/pages --lib ../dga-skills/patterns/react
```

## 7. Vanilla / Web Components

```js
import { setupDgaWeb } from './dga-skills/vanilla/index.js';
import { home, services } from './dga-skills/templates/vanilla/index.js';
import { pageShell } from './dga-skills/patterns/vanilla/index.js';
import { buildSiteConfig } from './site-config.js';

setupDgaWeb({ defines, addIcons, primary, icons });          // custom elements + icons, once per page
const siteConfig = buildSiteConfig('rtl');

// a template
document.getElementById('root').replaceWith(home(document, { dir: 'rtl', siteConfig, activeRoute: 'home', onNavigate: (route) => go(route) }));

// your own page inside the shared shell
const content = document.createElement('section');
document.body.append(pageShell(document, { siteConfig, activeRoute: 'about', lastModifiedDate: { date: '15/10/2026' }, children: [content] }));
```

## 8. Angular وArcGIS Experience Builder

**Angular** (Angular 19، مكونات مستقلة (standalone)، الوضع الصارم (strict mode)):

```ts
// app.config.ts
import { provideDgaSkills, provideDgaSite } from './dga-skills/angular';
import { createSiteConfig } from './dga-skills/site/site-config.js';

export const appConfig = { providers: [provideDgaSkills({ defines, addIcons, primary, icons }), provideDgaSite(createSiteConfig({ dir: 'rtl', navigationItems }))] };
```

```html
<!-- any page component (imports: [SiteShellComponent]) -->
<dga-skills-site-shell activeRoute="services" [lastModifiedDate]="{ date: '15/10/2026' }" (navigate)="router.navigate([$event])">
  <section class="ah-section">…page content…</section>
</dga-skills-site-shell>
```

للمكوّن المخرجات (outputs) التالية: `navigate` و`feedbackAnswer` و`search` و`languageSwitch` و`signIn`.

**ArcGIS Experience Builder.** لم يُتحقق منه بعد في بيئة تشغيل Experience Builder حقيقية. استخدم عنصر واجهة (widget) واحدًا للترويسة وآخر للتذييل يعتمدان على الإعداد نفسه:

```tsx
import { React } from 'jimu-core';
import { useDgaWidget, useSiteChromeWidget } from '../dga-skills/exb/index.js';
import { siteConfig } from '../shared/site-config';     // one shared module (or the same JSON in each widget's config.json)

export default function HeaderWidget () {
  const rootRef = React.useRef<HTMLDivElement>(null);
  useDgaWidget(rootRef, { cssVars, defines, addIcons, primary, icons });
  useSiteChromeWidget(rootRef, { part: 'header', siteConfig, activeRoute: 'services', onNavigate: (route) => { /* ExB page navigation */ } });
  return <div ref={rootRef} />;
}
```

## 9. فحص النتيجة

```bash
# naming, dead code, duplicated helpers / blocks / texts, pages that set header/footer design
python3 <toolkit>/dga-skills/tools/code_quality_check.py --path src --pages src/pages

# no invented DGA props
python3 <toolkit>/dga-skills/tools/check_dga_props.py --project .

# same header / footer on every page (needs a running preview and a QA config)
node <toolkit>/dga-skills/tools/qa/site-consistency.mjs --config qa.config.json

# visual QA: responsive, zoom 200 %, keyboard, axe, motion, tokens
node <toolkit>/dga-skills/tools/qa/run.mjs --config qa.config.json
```

يوجد إعداد ضمان جودة كامل في [`examples/government-site/qa.config.json`](../examples/government-site/qa.config.json).

</div>
