// Sample content for the template examples. All numbers are placeholders marked as such (never presented as real data).
// `site` is the site-level configuration built from this sample (lib/site/site-config.js): header, navigation and footer for ALL pages.
import { createSiteConfig } from '../site/site-config.js';

const buildSampleSiteConfig = (dir, sample) => createSiteConfig({
  dir,
  identity: { name: sample.entity.title },   // logo: the toolkit default logo (lib/site/default-logo.js)
  navigationItems: sample.navigationItems,
  header: { secondNavItems: sample.secondNavItems },
  footer: {
    groups: sample.footer.groups, social: sample.footer.social, accessibility: sample.footer.accessibility,
    legalLinks: sample.footer.legal, extraLinks: sample.footer.extra, copyright: sample.footer.copyright, developedBy: sample.footer.developedBy,
    feedbackStats: sample.feedbackStats,
  },
});

const siteCache = new Map();
export const content = (dir) => {
  const sample = sampleContent(dir);
  if (!siteCache.has(dir)) siteCache.set(dir, buildSampleSiteConfig(dir, sample));
  return { ...sample, site: siteCache.get(dir) };
};

const sampleContent = (dir) => {
  const isArabic = dir === 'rtl';
  return {
    entity: { title: isArabic ? 'الجهة الحكومية النموذجية' : 'Sample Government Entity', description: isArabic ? 'نموذج توضيحي — بيانات غير حقيقية' : 'Demo — placeholder data', href: '#', linkTitle: isArabic ? 'الموقع الرئيسي' : 'Main website' },
    // Ordered site navigation (one list for every page — patterns/site-config.md). A sub-menu belongs to its item (`children`).
    navigationItems: [
      { id: 'home', route: 'home', label: isArabic ? 'الرئيسية' : 'Home' },
      { id: 'services', route: 'services', label: isArabic ? 'الخدمات' : 'Services', children: (isArabic ? ['خدمات الأفراد', 'خدمات الأعمال', 'دليل الخدمات'] : ['Individuals', 'Business', 'Service guide']).map((label) => ({ label, href: '#' })) },
      { id: 'news', route: 'news', label: isArabic ? 'الأخبار' : 'News' },
      { id: 'about', route: 'about', label: isArabic ? 'عن الجهة' : 'About', children: (isArabic ? ['من نحن', 'الرؤية والرسالة', 'الهيكل التنظيمي'] : ['Who we are', 'Vision & mission', 'Organisation']).map((label) => ({ label, href: '#' })) },
    ],
    // Second Nav Header (Figma "Style=Gray", every inner template): weather · date · time · location (sample values — a real portal
    // binds them to live data or omits the item); the accessibility actions come from lib/core/page-tools.js
    secondNavItems: [
      { label: isArabic ? 'غائم' : 'Cloudy', icon: 'cloud' }, { label: isArabic ? '18-أكتوبر-2026' : '18-Oct-2026', icon: 'calendar-04' },
      { label: isArabic ? '2:30 مساءً' : '2:30 PM', icon: 'time-02' }, { label: isArabic ? 'الرياض' : 'Riyadh', icon: 'location-01' },
    ],
    // Service page (Figma "Service Page Template", frame Service Page - AR) — sample service «رخصة بناء» as in the template
    service: {
      crumbs: [{ label: isArabic ? 'الرئيسية' : 'Home', path: '#' }, { label: isArabic ? 'الخدمات الإلكترونية' : 'E-services', path: '#' }, { label: isArabic ? 'رخصة بناء' : 'Building permit', path: '' }],
      title: isArabic ? 'رخصة بناء' : 'Building permit',
      start: isArabic ? 'بدء الخدمة' : 'Get started',
      tags: [{ label: isArabic ? 'الجهة' : 'Ministry', variant: 'info' }, { label: isArabic ? 'رحلة الحياة' : 'Life experience', variant: 'success' }, { label: isArabic ? 'المنصة' : 'Related platform', variant: 'neutral' }],
      description: isArabic ? 'مثال على وصف الخدمة لشراء قطعة أرض لبناء منزلك، يتطلب ذلك توثيق عملية البيع والشراء في مكاتب التوثيق أو خدمات كاتب العدل لتسجيل العقار باسمك.'
        : 'Service description example: to buy a plot to build your house, this requires documenting the sale and purchase process in the notarial offices or notary services to register the property in your name.',
      sla: isArabic ? 'اتفاقية مستوى الخدمة' : 'Service Level Agreement',
      tabs: [{ label: isArabic ? 'الخطوات' : 'Steps', icon: 'sort-by-down-02' }, { label: isArabic ? 'الشروط' : 'Conditions', icon: 'checkmark-circle-02' }, { label: isArabic ? 'المستندات المطلوبة' : 'Required documents', icon: 'file-01' }],
      steps: isArabic ? ['قم بالدخول إلى البوابة الوطنية للتسجيل الموحد عبر منصة بلدي.', 'اختيار خدمات تراخيص البناء، ثم إصدار البناء.', 'خدمات الترخيص ثم البلدية المطلوبة.', 'اختيار المكتب الهندسي، ثم إدخال رقم وسنة إصدار مسح البناء، وإرفاق نسخة من السند.', 'تقديم الطلب إلى المكتب الهندسي المحدد، ثم استكمال المعلومات والمرفقات في المكتب الهندسي وإرسالها إلى البلدية.', 'التأكد من بيانات الطلب والمرفقات والموافقات من قبل البلدية.', 'الموافقة على الطلب وإصدار دفعة سداد. دفع الرسوم وطباعة الرخصة.']
        : ['Login to the National Single Sign-on portal via the Balady platform.', 'Select Construction License Services, then Issue Construction.', 'License Services, then the required municipality.', 'Select the engineering office, then enter the number and year of issuance of the building survey, and attach a copy of the deed.', 'Submit the request to the identified engineering office, then complete the information and attachments in the engineering office and send it to the municipality.', 'Verify the information of the request, attachments and approvals by the municipality.', 'Approve the request and issue a SADAD payment. Pay the fees and print the license.'],
      conditions: isArabic ? ['أن يكون المتقدم مالكاً للأرض أو وكيلاً عنه.', 'وجود صك ملكية ساري المفعول.', 'اعتماد المخططات من مكتب هندسي معتمد.'] : ['The applicant owns the plot or is the owner’s agent.', 'A valid title deed.', 'Drawings approved by a licensed engineering office.'],
      documents: isArabic ? ['صورة الهوية الوطنية.', 'صورة صك الملكية.', 'المخططات الهندسية المعتمدة.'] : ['National ID copy.', 'Title deed copy.', 'Approved engineering drawings.'],
      info: [
        { icon: 'user', label: isArabic ? 'الفئة المستهدفة' : 'Target audience', value: isArabic ? 'المواطنين وجنسيات دول مجلس التعاون الخليجي والمستثمرين والأجانب' : 'Citizens, GCC countries nationalities, investors and foreigners' },
        { icon: 'clock-01', label: isArabic ? 'مدة الخدمة' : 'Service duration', value: isArabic ? '5.0 أيام' : '5.0 Day(s)' },
        { icon: 'computer-phone-sync', label: isArabic ? 'قنوات الخدمة' : 'Service channels', value: isArabic ? 'تطبيق الويب والجوال' : 'Web and mobile app' },
        { icon: 'riyal-circular', label: isArabic ? 'تكلفة الخدمة' : 'Service cost', value: isArabic ? 'مجانًا' : 'Free' },
      ],
      payment: { label: isArabic ? 'قنوات الدفع' : 'Payment channels', methods: [{ label: isArabic ? 'مدى' : 'mada' }, { label: 'SADAD' }] },
      faq: { label: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions', linkLabel: isArabic ? 'صفحة الأسئلة الشائعة للجهة' : 'Ministry FAQ page', href: '#' },
      contacts: [{ icon: 'call', label: isArabic ? 'الهاتف' : 'Phone', value: '920000000', href: 'tel:920000000' }, { icon: 'mail-01', label: isArabic ? 'البريد الإلكتروني' : 'Email', value: 'help@example.gov.sa', href: 'mailto:help@example.gov.sa' }],
      manual: isArabic ? 'تحميل دليل المستخدم' : 'Download user manual',
      apps: { title: isArabic ? 'تطبيقات الجوال' : 'Mobile Application', stores: [{ small: 'Download on the', label: 'App Store', ariaLabel: isArabic ? 'التطبيق على App Store' : 'App on the App Store' }, { small: 'GET IT ON', label: 'Google Play', ariaLabel: isArabic ? 'التطبيق على Google Play' : 'App on Google Play' }, { small: 'EXPLORE IT ON', label: 'AppGallery', ariaLabel: isArabic ? 'التطبيق على AppGallery' : 'App on AppGallery' }] },
      related: { title: isArabic ? 'خدمات ذات صلة' : 'Related Services', description: isArabic ? 'خدمات أخرى قد تحتاجها مع هذه الخدمة.' : 'Other services you may need with this one.', viewAll: isArabic ? 'عرض الكل' : 'View all' },
      comments: { title: isArabic ? 'التعليقات والاقتراحات' : 'Comments & suggestions', text: isArabic ? 'لأي استفسار أو ملاحظات حول الخدمات الحكومية، يرجى ملء المعلومات المطلوبة.' : 'For any inquiry or feedback on Government Services, please fill the required information.', action: isArabic ? 'تواصل معنا' : 'Contact us' },
      rating: { average: '3.9', count: 1544 },
    },
    services: [
      { title: isArabic ? 'إصدار رخصة بناء' : 'Building permit', description: isArabic ? 'تقديم طلب رخصة بناء إلكترونياً' : 'Apply for a building permit online', icon: 'home-05' },
      { title: isArabic ? 'رخصة نشاط تجاري' : 'Business licence', description: isArabic ? 'أصدر رخصة محلك أو جدّدها' : 'Issue or renew a shop licence', icon: 'checkmark-circle-02' },
      { title: isArabic ? 'الاستعلام عن معاملة' : 'Track a request', description: isArabic ? 'تابع حالة طلبك برقم المعاملة' : 'Follow your request by number', icon: 'search-01' },
      { title: isArabic ? 'حجز موعد' : 'Book an appointment', description: isArabic ? 'احجز موعداً في أحد الفروع' : 'Book a branch appointment', icon: 'calendar-04' },
      { title: isArabic ? 'بلاغات ومقترحات' : 'Reports & suggestions', description: isArabic ? 'أرسل بلاغاً أو مقترحاً' : 'Send a report or suggestion', icon: 'alert-02' },
      { title: isArabic ? 'طلب تصريح فعالية' : 'Event permit', description: isArabic ? 'قدّم طلب تصريح لإقامة فعالية' : 'Apply for an event permit', icon: 'calendar-04' },
      { title: isArabic ? 'شهادة إتمام بناء' : 'Building completion certificate', description: isArabic ? 'اطلب شهادة إتمام البناء بعد التنفيذ' : 'Request the completion certificate', icon: 'checkmark-circle-02' },
      { title: isArabic ? 'الاستعلام عن المخالفات' : 'Violations inquiry', description: isArabic ? 'استعلم عن المخالفات المسجلة' : 'Look up recorded violations', icon: 'search-01' },
      { title: isArabic ? 'تجديد رخصة بناء' : 'Renew a building permit', description: isArabic ? 'جدّد رخصة البناء قبل انتهائها' : 'Renew a permit before it expires', icon: 'home-05' },
    ],
    // Services catalogue (Figma "Search Page Template", grid variant: 3 cards per row + Pagination)
    servicesPage: {
      title: isArabic ? 'الخدمات الإلكترونية' : 'E-services',
      count: (serviceCount) => (isArabic ? `${serviceCount} خدمة` : `${serviceCount} services`),
      search: { label: isArabic ? 'ابحث عن خدمة' : 'Search services', placeholder: isArabic ? 'ابحث باسم الخدمة' : 'Search by service name', button: isArabic ? 'بحث' : 'Search' },
      filter: isArabic ? 'تصفية' : 'Filter', sort: isArabic ? 'ترتيب حسب' : 'Sort by',
      filterBlocks: [
        { id: 'audience', label: isArabic ? 'الفئة المستهدفة' : 'Audience', type: 'checkbox', options: [{ id: 'ind', label: isArabic ? 'أفراد' : 'Individuals', value: 'ind' }, { id: 'biz', label: isArabic ? 'أعمال' : 'Business', value: 'biz' }, { id: 'gov', label: isArabic ? 'جهات حكومية' : 'Government', value: 'gov' }] },
        { id: 'channel', label: isArabic ? 'قناة الخدمة' : 'Channel', type: 'radio', options: [{ id: 'web', label: isArabic ? 'الويب' : 'Web', value: 'web' }, { id: 'app', label: isArabic ? 'تطبيق الجوال' : 'Mobile app', value: 'app' }] },
      ],
      details: isArabic ? 'تفاصيل الخدمة' : 'Service details',
    },
    news: [1, 2, 3].map((newsNumber) => ({ title: isArabic ? `خبر توضيحي رقم ${newsNumber}` : `Sample news ${newsNumber}`, description: isArabic ? 'نص توضيحي قصير للخبر' : 'Short placeholder summary', image: `https://placehold.co/768x500/f3f4f6/4d5761?text=${newsNumber}` })),   // Figma news image 384×250, radius 8
    // Home "About us" figures — Figma icons: give-blood · star · add-01 · user-group; values are placeholders until the entity supplies sourced numbers
    stats: [{ value: '+120', label: isArabic ? 'خدمة إلكترونية (قيمة توضيحية)' : 'e-services (placeholder)', icon: 'give-blood' }, { value: '+35,000', label: isArabic ? 'مستفيد (قيمة توضيحية)' : 'beneficiaries (placeholder)', icon: 'star' }, { value: '+80,000', label: isArabic ? 'طلب مكتمل (قيمة توضيحية)' : 'completed requests (placeholder)', icon: 'add-01' }, { value: '92%', label: isArabic ? 'رضا المستفيدين (قيمة توضيحية)' : 'satisfaction (placeholder)', icon: 'user-group' }],
    // Home hero slides (Figma: Carousel / Style=Dots Only)
    heroSlides: [
      { title: isArabic ? 'خدمات رقمية متكاملة للمستفيدين' : 'Integrated digital services for beneficiaries', lead: isArabic ? 'قدّم طلبك، وتابع معاملتك، واحجز موعدك إلكترونياً بلا مراجعة للفروع.' : 'Apply, track and book online without visiting a branch.', actions: [{ label: isArabic ? 'تصفح الخدمات' : 'Browse services' }] },
      { title: isArabic ? 'تراخيص البناء خلال أيام' : 'Building permits in days', lead: isArabic ? 'نص توضيحي للشريحة الثانية.' : 'Placeholder text for slide two.', actions: [{ label: isArabic ? 'ابدأ الطلب' : 'Start' }] },
      { title: isArabic ? 'شاركنا رأيك' : 'Share your view', lead: isArabic ? 'نص توضيحي للشريحة الثالثة.' : 'Placeholder text for slide three.', actions: [{ label: isArabic ? 'شارك' : 'Participate' }] },
    ],
    // Home services carousel cards (Figma Card: featured icon · title · text · Tags · primary + secondary actions)
    serviceTags: [{ label: isArabic ? 'أفراد' : 'Individuals', variant: 'success' }, { label: isArabic ? 'أعمال' : 'Business', variant: 'info' }, { label: isArabic ? 'مجانية' : 'Free', variant: 'neutral' }],
    partners: Array.from({ length: 10 }, (_, partnerIndex) => ({ name: isArabic ? `شريك ${partnerIndex + 1}` : `Partner ${partnerIndex + 1}`, href: '#' })),
    feedbackStats: { percent: 60, total: 2843 },   // Figma sample — real pages pass their own numbers or omit it
    lastModified: { date: '15/10/2026', time: isArabic ? '4:13 م' : '4:13 PM' },
    // Footer — Figma Home template footer content (groups, social, accessibility tools, legal row)
    footer: {
      groups: [
        { title: isArabic ? 'ملخص' : 'Overview', links: (isArabic ? ['حول [اسم البوابة]', 'الخصوصية وشروط الاستخدام', 'كيفية استخدام [اسم البوابة]', 'الأخبار والأحداث', 'إحصائيات اتفاقية مستوى الخدمة'] : ['About [portal name]', 'Privacy & terms of use', 'How to use [portal name]', 'News & events', 'SLA statistics']).map((name) => ({ name, target: '#' })) },
        { title: isArabic ? 'روابط مهمة' : 'Important links', links: (isArabic ? ['بوابة الخدمة الوطنية', 'البيانات الحكومية المفتوحة', 'الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي', 'بوابة البيانات المفتوحة', 'بوابة المشاركة الإلكترونية'] : ['National service portal', 'Open government data', 'National data & AI strategy', 'Open data portal', 'e-Participation portal']).map((name) => ({ name, target: '#' })) },
        // DGA-required policy pages (as published by live DGA-aligned portals); each maps to templates/content-page
        { title: isArabic ? 'السياسات' : 'Policies', links: (isArabic ? ['سياسة أمن المنصة', 'سياسة الاستخدام الآمن', 'سياسة حق الحصول على المعلومة', 'سياسة المشاركة الإلكترونية', 'سياسة إمكانية الوصول الرقمي'] : ['Platform security policy', 'Safe usage policy', 'Right to information policy', 'e-Participation policy', 'Digital accessibility policy']).map((name) => ({ name, target: '#' })) },
        { title: isArabic ? 'الاتصال والدعم' : 'Contact & support', links: (isArabic ? ['تواصل معنا', 'اتفاقية مستوى الخدمة', 'الأسئلة الشائعة', 'قنوات تقديم الخدمة', 'الإبلاغ عن الفساد'] : ['Contact us', 'Service level agreement', 'FAQ', 'Service channels', 'Report corruption']).map((name) => ({ name, target: '#' })) },
      ],
      social: [{ title: 'X', target: '#', icon: { name: 'new-twitter', variant: 'stroke' } }, { title: 'LinkedIn', target: '#', icon: { name: 'linkedin-02', variant: 'stroke' } }, { title: 'Instagram', target: '#', icon: { name: 'instagram', variant: 'stroke' } }],
      accessibility: [{ title: isArabic ? 'لغة الإشارة' : 'Sign language', target: '#', icon: { name: 'sign-language-c', variant: 'stroke' } }, { title: isArabic ? 'تكبير' : 'Zoom', target: '#', icon: { name: 'search-add', variant: 'stroke' } }, { title: isArabic ? 'تباين الألوان' : 'Contrast', target: '#', icon: { name: 'view', variant: 'stroke' } }],
      legal: (isArabic ? ['خريطة الموقع', 'RSS', 'تطبيق الجوال'] : ['Sitemap', 'RSS', 'Mobile app']).map((name) => ({ name, target: '#' })),
      extra: (isArabic ? ['الشروط والأحكام', 'سياسة الخصوصية'] : ['Terms & conditions', 'Privacy policy']).map((name) => ({ name, target: '#' })),   // SDGA footer meta links
      logos: ['https://placehold.co/212x84/ffffff/6c737f?text=Partner', 'https://placehold.co/212x84/ffffff/6c737f?text=Platform'],          // partner + platform logo slots
      copyright: isArabic ? 'جميع الحقوق محفوظة للجهة الحكومية النموذجية © 2026 (نص توضيحي)' : 'All rights reserved © 2026 (placeholder)',
      developedBy: isArabic ? 'تم تطويره وصيانته بواسطة [أدخل اسم الجهة]' : 'Developed and maintained by [entity name]',
    },
    faqs: [1, 2, 3, 4, 5].map((questionNumber) => ({ q: isArabic ? `سؤال شائع رقم ${questionNumber}؟` : `Frequently asked question ${questionNumber}?`, a: isArabic ? 'إجابة توضيحية مختصرة على السؤال.' : 'Short placeholder answer.' })),
    contacts: [{ title: isArabic ? 'البريد الإلكتروني' : 'Email', description: 'info@example.gov.sa', icon: 'mail-02' }, { title: isArabic ? 'الهاتف' : 'Phone', description: '19xxx', icon: 'call' }, { title: isArabic ? 'الزيارة' : 'Visit', description: isArabic ? 'العنوان الرئيسي (عنوان توضيحي)' : 'Head office — placeholder address', icon: 'location-01' }],
    cities: [{ name: isArabic ? 'الرياض' : 'Riyadh', value: 'ryd' }, { name: isArabic ? 'جدة' : 'Jeddah', value: 'jed' }, { name: isArabic ? 'الدمام' : 'Dammam', value: 'dmm' }],
    // Page texts shared by the React and the vanilla / Angular / ExB templates (one copy — rules/code-quality.md)
    pages: {
      viewAll: isArabic ? 'عرض الكل' : 'View all',
      home: {
        about: { title: isArabic ? 'عن الجهة' : 'About us', description: isArabic ? 'نبذة توضيحية قصيرة عن الجهة ودورها.' : 'A short placeholder description of the entity and its role.', action: isArabic ? 'تعرّف على الجهة' : 'About the entity', figuresSource: isArabic ? 'قيم توضيحية' : 'placeholder values' },
        services: { title: isArabic ? 'الخدمات الإلكترونية' : 'e-Services', description: isArabic ? 'أكثر الخدمات استخداماً من الأفراد والمنشآت' : 'Most used services', ariaLabel: isArabic ? 'الخدمات' : 'Services', details: isArabic ? 'التفاصيل' : 'Details' },
        news: { title: isArabic ? 'الأخبار والمقالات' : 'News & articles', description: isArabic ? 'آخر مستجدات الجهة ومشاريعها' : 'Latest updates', readMore: isArabic ? 'قراءة المزيد' : 'Read more', ariaLabel: isArabic ? 'الأخبار' : 'News' },
        partnersTitle: isArabic ? 'شركاؤنا' : 'Our partners',
      },
      faq: {
        title: isArabic ? 'الأسئلة الشائعة' : 'Frequently asked questions',
        lead: isArabic ? 'ابحث عن إجابتك أو تصفح حسب الموضوع' : 'Search for an answer or browse by topic',
        search: { label: isArabic ? 'ابحث في الأسئلة' : 'Search questions', placeholder: isArabic ? 'اكتب كلمة' : 'Type a keyword', lang: isArabic ? 'ar' : 'en' },
        byTopic: isArabic ? 'حسب الموضوع' : 'By topic',
        topics: [{ id: 'all', label: isArabic ? 'الكل' : 'All' }, { id: 'svc', label: isArabic ? 'الخدمات' : 'Services' }, { id: 'acc', label: isArabic ? 'الحساب' : 'Account' }],
        questionsLabel: isArabic ? 'الأسئلة' : 'Questions',
        filter: { label: isArabic ? 'تصفية' : 'Filter', placeholder: isArabic ? 'كلمة مفتاحية' : 'Keyword', topic: isArabic ? 'الموضوع' : 'Topic', choose: isArabic ? 'اختر' : 'Choose', activeTopic: isArabic ? 'الخدمات' : 'Services' },
        pageCount: 4,
        contact: { title: isArabic ? 'لم تجد إجابتك؟' : "Didn't find your answer?", description: isArabic ? 'تواصل معنا عبر إحدى القنوات' : 'Contact us through one of the channels', action: isArabic ? 'تواصل' : 'Contact' },
      },
      notFound: {
        kicker: isArabic ? 'خطأ 404' : 'Error 404',
        title: isArabic ? 'الصفحة غير موجودة' : 'Page not found',
        text: isArabic ? 'الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.' : "The page you are looking for isn't available or has moved.",
        home: isArabic ? 'العودة للرئيسية' : 'Back to home',
        contact: isArabic ? 'تواصل معنا' : 'Contact us',
      },
    },
  };
};
