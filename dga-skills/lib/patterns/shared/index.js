// Shared, framework-agnostic logic of the pattern and template layers (React, vanilla, Angular, ArcGIS ExB).
// Each technology keeps its own view layer (JSX, DOM builders, Angular components); the texts and the rules they render
// are defined ONCE here, so the same label or the same filter logic is never written twice (rules/code-quality.md).
import { pickByDirection } from '../../core/direction.js';

/** Built-in texts of the shared patterns (header, footer, cards, service blocks). Page texts live in templates/content.js. */
export function patternLabels(dir) {
  const pick = (arabicText, englishText) => pickByDirection(dir, arabicText, englishText);
  return {
    skipToContent: pick('تخطَّ إلى المحتوى', 'Skip to content'),
    search: pick('البحث', 'Search'),
    otherLanguage: pick('English', 'العربية'),
    signIn: pick('تسجيل الدخول', 'Sign in'),
    feedbackQuestion: pick('هل كانت هذه الصفحة مفيدة؟', 'Was this page useful?'),
    yes: pick('نعم', 'Yes'),
    no: pick('لا', 'No'),
    feedbackStats: ({ percent, total }) => pick(`${percent}% من المستخدمين قالوا نعم من ${total} تقييمًا`, `${percent}% of users said Yes from ${total} feedbacks`),
    defaultCopyright: pick('© هيئة الحكومة الرقمية', '© Digital Government Authority'),
    followUs: pick('تابعنا على', 'Follow us'),
    accessibilityTools: pick('أدوات الإتاحة والوصول', 'Accessibility tools'),
    lastModifiedPrefix: pick('تاريخ آخر تعديل: ', 'Last modified: '),
    saudiTimeSuffix: pick(' بتوقيت السعودية', ''),
    previous: pick('السابق', 'Previous'),
    next: pick('التالي', 'Next'),
    startService: pick('ابدأ الخدمة', 'Start'),
    reviewCount: (count) => pick(`${count} تقييم`, `${count} reviews`),
    carouselPage: (pageNumber, pageCount) => pick(`الصفحة ${pageNumber} من ${pageCount}`, `Page ${pageNumber} of ${pageCount}`),
    carouselRole: pick('عرض دوّار', 'carousel'),
    serviceCard: pick('بطاقة الخدمة', 'Service card'),
    playVideo: pick('تشغيل الفيديو التعريفي', 'Play the introduction video'),
    rateService: pick('قيم هذه الخدمة', 'Rate this service'),
    ratedAverage: (average) => pick(`تم تقييم هذه الخدمة بمتوسط ${average}`, `This service is rated with an average of ${average}`),
    applyFilters: pick('تطبيق', 'Apply'),
    clearFilters: pick('إزالة التصفية', 'Clear filters'),
    submit: pick('إرسال', 'Submit'),
  };
}

/** The «تاريخ آخر تعديل» sentence (date · time · «بتوقيت السعودية» in Arabic). */
export function lastModifiedText(dir, { date, time } = {}) {
  const labels = patternLabels(dir);
  return `${labels.lastModifiedPrefix}${date}${time ? ` - ${time}${labels.saudiTimeSuffix}` : ''}`;
}

/**
 * Header actions of the Figma Home template (Header Action ×3, icon + text, no fill) in the order the site configuration lists them
 * (`header.actions`, default search · language · sign in).
 */
export function defaultHeaderActions(dir, { onSearch, onLanguage, onSignIn } = {}, actionIds = ['search', 'language', 'signIn']) {
  const labels = patternLabels(dir);
  const actionsById = {
    search: { label: labels.search, icon: 'search-01', onClick: onSearch },
    language: { label: labels.otherLanguage, icon: 'translation', onClick: onLanguage },
    signIn: { label: labels.signIn, icon: 'user', onClick: onSignIn },
  };
  return actionIds.map((actionId) => actionsById[actionId]);
}

/**
 * Header / footer DESIGN options that belong to the site configuration only (lib/site/site-config.js). The shared header and
 * footer of every technology ignore them and warn once, so a page can never restyle the chrome on its own.
 */
export const SITE_CHROME_DESIGN_OPTIONS = Object.freeze(['background', 'footerBackground', 'logo', 'gov', 'links', 'secondNav', 'stamp', 'groups', 'social', 'accessibility', 'extraLinks', 'logos', 'copyright', 'entity', 'showEntityTitle']);
const warnedComponents = new Set();
export function warnIgnoredDesignOptions(componentName, options = {}) {
  const ignoredOptions = SITE_CHROME_DESIGN_OPTIONS.filter((optionName) => options[optionName] !== undefined);
  if (ignoredOptions.length && !warnedComponents.has(componentName) && typeof console !== 'undefined') {
    warnedComponents.add(componentName);
    console.warn(`[dga-skills] ${componentName} ignores ${ignoredOptions.join(', ')} — header and footer design come from createSiteConfig() (patterns/site-config.md).`);
  }
  return ignoredOptions;
}

/** Split a list into pages of `pageSize` (the services carousel shows one page per slide). */
export function splitIntoPages(items, pageSize) {
  const pages = [];
  for (let startIndex = 0; startIndex < items.length; startIndex += pageSize) pages.push(items.slice(startIndex, startIndex + pageSize));
  return pages;
}

/* ---------- Services catalogue (templates Services / services): one implementation of search, filter, sort and paging ---------- */

/** Sample audience / channel attributes for the filter demo (a real catalogue supplies them per service). */
export function withSampleServiceAttributes(services, serviceTags) {
  const audiences = ['ind', 'biz', 'gov'];
  return services.map((service, index) => ({ ...service, tags: serviceTags, audience: audiences[index % audiences.length], channel: index % 2 ? 'app' : 'web' }));
}

/**
 * The visible page of the catalogue.
 * @param {Array} services  services with `title`, `description`, `audience`, `channel`
 * @param {{ query?: string, filters?: Record<string, string[]>, sortAscending?: boolean|null, pageNumber?: number, pageSize?: number, dir?: string }} options
 * @returns {{ matchingCount: number, pageCount: number, pageNumber: number, visibleServices: Array }}
 */
export function queryServiceCatalogue(services, { query = '', filters = {}, sortAscending = null, pageNumber = 1, pageSize = 9, dir = 'rtl' } = {}) {
  const matchesFilters = (service) => Object.entries(filters).every(([attributeName, acceptedValues]) => !acceptedValues?.length || acceptedValues.includes(service[attributeName]));
  const matchesQuery = (service) => !query || `${service.title} ${service.description}`.includes(query);
  let matchingServices = services.filter((service) => matchesFilters(service) && matchesQuery(service));
  if (sortAscending != null) {
    const locale = dir === 'rtl' ? 'ar' : 'en';
    matchingServices = [...matchingServices].sort((first, second) => (sortAscending ? 1 : -1) * first.title.localeCompare(second.title, locale));
  }
  const pageCount = Math.max(1, Math.ceil(matchingServices.length / pageSize));
  const currentPage = Math.min(Math.max(1, pageNumber), pageCount);
  return {
    matchingCount: matchingServices.length,
    pageCount,
    pageNumber: currentPage,
    visibleServices: matchingServices.slice((currentPage - 1) * pageSize, currentPage * pageSize),
  };
}

/** The text typed in a <dga-search-box> (its input lives in the light DOM or the shadow root depending on the build). */
export function readSearchBoxValue(searchBox) {
  const input = searchBox && ((searchBox.shadowRoot && searchBox.shadowRoot.querySelector('input')) || searchBox.querySelector?.('input'));
  return ((input && input.value) || '').trim();
}

/** Selected values of a filter menu panel: `{ [blockId]: string[] }` (dga-checkbox / dga-radio-button hosts carry data-block / data-value). */
export function readFilterSelection(panel, blocks, { clear = false } = {}) {
  const selection = {};
  blocks.forEach((block) => {
    const hosts = panel ? [...panel.querySelectorAll(`[data-block="${block.id}"]`)] : [];
    selection[block.id] = clear ? [] : hosts.filter((host) => host.checked || (host.shadowRoot || host).querySelector?.('input:checked')).map((host) => host.dataset.value);
  });
  return selection;
}
