// Vanilla templates (custom elements): Home, Service, Services (catalogue), FAQ, Page Not Found. Form is React-only.
// Every template renders through pageShell(), so header, navigation order, footer variant and site theme come ONLY from the
// site configuration (lib/site/site-config.js): pass `siteConfig` once per app, or the sample content's `site` is used.
// Page texts come from ../content.js (shared with the React templates); shared rules from ../../patterns/shared.
import { pageShell, hero, sectionHeading, cardGrid, statsStrip, formPattern, serviceCarousel, partnersStrip, serviceCard, serviceInfoCard, iconLink, videoPlaceholder, stepsList, serviceTabs, commentsCard, filterMenu } from '../../patterns/vanilla/index.js';
import { withSampleServiceAttributes, queryServiceCatalogue, readSearchBoxValue } from '../../patterns/shared/index.js';
import { documentBuilders, setProps } from '../../core/elements.js';
import { content as sampleContent } from '../content.js';

const withSampleContent = (dir, givenContent) => ({ ...sampleContent(dir), ...(givenContent || {}) });

/** A page section with its container: `[section, container]`. */
const pageSection = (ownerDocument, { modifierClass = '', labelledBy, label } = {}) => {
  const { node } = documentBuilders(ownerDocument);
  const container = node('div', { class: 'ah-container' });
  return [node('section', { class: `ah-section ${modifierClass}`, 'aria-labelledby': labelledBy, 'aria-label': label }, [container]), container];
};

/** The shared page shell for one template: site configuration, active route and handlers of the app. */
const renderPage = (ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, feedback = true, rating, children }) => pageShell(ownerDocument, {
  siteConfig: siteConfig || pageContent.site, mode, activeRoute, onNavigate, feedback, rating, lastModifiedDate: pageContent.lastModified, children,
});

const withServiceTags = (pageContent, services) => services.map((service) => ({ ...service, tags: pageContent.serviceTags }));

export function home(ownerDocument, { dir = 'rtl', mode = 'dga-exact', content: givenContent, media, siteConfig, activeRoute = 'home', onNavigate } = {}) {
  const pageContent = withSampleContent(dir, givenContent); const texts = pageContent.pages.home; const viewAll = pageContent.pages.viewAll;
  const [firstSlide] = pageContent.heroSlides;
  // Figma "Home Page - Desktop AR": Hero (slides + dots) · About (secondary-outline action, figures) · Services (neutral-50, «عرض الكل», card carousel)
  // · News (white, «عرض الكل», 3 stroke cards) · Partners · Last modified · Footer. No feedback question on the Home template.
  const [aboutSection, aboutContainer] = pageSection(ownerDocument, { modifierClass: 'ah-section--white', labelledBy: 'about-h' });
  aboutContainer.append(sectionHeading(ownerDocument, { id: 'about-h', title: texts.about.title, description: texts.about.description, action: { label: texts.about.action } }),
    statsStrip(ownerDocument, { items: pageContent.stats, mode, source: texts.about.figuresSource }));
  const [servicesSection, servicesContainer] = pageSection(ownerDocument, { modifierClass: 'ah-section--neutral', labelledBy: 'services-h' });
  servicesContainer.append(sectionHeading(ownerDocument, { id: 'services-h', title: texts.services.title, description: texts.services.description, action: { label: viewAll } }),
    serviceCarousel(ownerDocument, { dir, mode, ariaLabel: texts.services.ariaLabel, items: withServiceTags(pageContent, pageContent.services), secondaryLabel: texts.services.details }));
  const [newsSection, newsContainer] = pageSection(ownerDocument, { modifierClass: 'ah-section--white', labelledBy: 'news-h' });
  newsContainer.append(sectionHeading(ownerDocument, { id: 'news-h', title: texts.news.title, description: texts.news.description, action: { label: viewAll } }),
    cardGrid(ownerDocument, { items: pageContent.news, effect: 'stroke', primaryLabel: texts.news.readMore, mode, ariaLabel: texts.news.ariaLabel, columns: 3 }));
  return renderPage(ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, feedback: false, children: [
    hero(ownerDocument, { dir, mode, slides: pageContent.heroSlides, title: firstSlide.title, lead: firstSlide.lead, actions: firstSlide.actions, media, figures: pageContent.stats.map((statistic) => ({ value: statistic.value, label: statistic.label })) }),
    aboutSection, servicesSection, newsSection, partnersStrip(ownerDocument, { dir, title: texts.partnersTitle, partners: pageContent.partners })] });
}

export function faq(ownerDocument, { dir = 'rtl', mode = 'dga-exact', content: givenContent, siteConfig, activeRoute = 'about', onNavigate } = {}) {
  const pageContent = withSampleContent(dir, givenContent); const texts = pageContent.pages.faq;
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const [questionsSection, questionsContainer] = pageSection(ownerDocument, { labelledBy: 'faq-h' }); questionsContainer.classList.add('ah-stack');
  questionsContainer.append(
    sectionHeading(ownerDocument, { id: 'faq-h', title: texts.byTopic }),
    dgaNode('dga-tabs', { tabsList: texts.topics }),
    node('div', { class: 'ah-stack', role: 'list', 'aria-label': texts.questionsLabel }, pageContent.faqs.map((question) => node('div', { role: 'listitem' }, [
      dgaNode('dga-accordion', { title: question.q, content: question.a, size: 'lg' /* no defaultExpanded: PKG-ACCORDION-03 (an item opened by defaultExpanded can never be collapsed) */ })]))),
    dgaNode('dga-pagination', { currentPage: 1, totalPageCount: texts.pageCount }));
  const [contactSection, contactContainer] = pageSection(ownerDocument, { modifierClass: 'ah-section--neutral', labelledBy: 'contact-h' });
  contactContainer.append(sectionHeading(ownerDocument, { id: 'contact-h', title: texts.contact.title, description: texts.contact.description, center: true }),
    cardGrid(ownerDocument, { items: pageContent.contacts.slice(0, 2), primaryLabel: texts.contact.action, mode }));
  return renderPage(ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, children: [
    hero(ownerDocument, { dir, mode, light: true, title: texts.title, lead: texts.lead, search: texts.search }), questionsSection, contactSection] });
}

export function notFound(ownerDocument, { dir = 'rtl', mode = 'dga-exact', content: givenContent, siteConfig, activeRoute, onNavigate } = {}) {
  const pageContent = withSampleContent(dir, givenContent); const texts = pageContent.pages.notFound;
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const [errorSection, errorContainer] = pageSection(ownerDocument, { labelledBy: 'nf-h' }); errorContainer.style.paddingBlock = 'var(--spacing-20)';
  const kicker = node('p', { class: 'ah-text-md ah-muted', text: texts.kicker }); kicker.style.fontWeight = '600';
  const errorStack = node('div', { class: 'ah-stack' }, [
    dgaNode('dga-featured-icon', { icon: { name: 'search-remove', variant: 'stroke' }, color: 'gray', size: 'xl', variant: 'light' }),
    kicker,
    node('h1', { class: 'ah-display-md', id: 'nf-h', text: texts.title }),
    node('p', { class: 'ah-text-lg ah-muted', text: texts.text }),
    node('div', { class: 'ah-row', 'data-qa': 'nf-cta' }, [
      dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: texts.home }), dgaNode('dga-button-v2', { variant: 'secondary-outline', size: 'lg', label: texts.contact })])]);
  errorStack.style.cssText = 'max-width:560px;gap:var(--spacing-6)';
  errorContainer.append(errorStack);
  return renderPage(ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, children: [errorSection] });
}

/** Service page — Figma "Service Page Template" (frame Service Page - AR); same structure as templates/react/Service.jsx. */
export function service(ownerDocument, { dir = 'rtl', mode = 'dga-exact', content: givenContent, siteConfig, activeRoute = 'services', onNavigate } = {}) {
  const pageContent = withSampleContent(dir, givenContent); const serviceContent = pageContent.service;
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const startButton = dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: serviceContent.start }); startButton.dataset.qa = 'service-cta';
  const description = node('div', { class: 'ah-svc-detail__desc' }, [
    node('div', { class: 'ah-svc-detail__head' }, [
      node('div', { class: 'ah-svc-detail__title' }, [dgaNode('dga-breadcrumbs', { items: serviceContent.crumbs }), node('h1', { class: 'ah-display-sm', id: 'svc-title', text: serviceContent.title })]),
      startButton]),
    node('div', { class: 'ah-svc-card__tags' }, serviceContent.tags.map((tag) => dgaNode('dga-tag', { label: tag.label, variant: tag.variant, size: 'sm' }))),
    node('p', { class: 'ah-text-md ah-svc-detail__text', text: serviceContent.description }),
    iconLink(ownerDocument, { label: serviceContent.sla })]);
  const tabLists = [serviceContent.steps, serviceContent.conditions, serviceContent.documents];
  const serviceInformation = node('div', { class: 'ah-svc-detail__info' }, [serviceTabs(ownerDocument, { tabs: serviceContent.tabs.map((tab, tabIndex) => {
    const tabSteps = stepsList(ownerDocument, { items: tabLists[tabIndex], ariaLabel: tab.label });
    return { ...tab, content: tabIndex === 0 ? [videoPlaceholder(ownerDocument, { dir }), tabSteps] : tabSteps };
  }) })]);
  const detailSection = node('section', { class: 'ah-svc-detail', 'aria-labelledby': 'svc-title' }, [node('div', { class: 'ah-container ah-svc-detail__grid' }, [
    node('div', { class: 'ah-svc-detail__main' }, [description, serviceInformation]),
    serviceInfoCard(ownerDocument, { dir, mode, rows: serviceContent.info, payment: serviceContent.payment, faq: serviceContent.faq, contacts: serviceContent.contacts, manual: { label: serviceContent.manual }, apps: serviceContent.apps })])]);
  const [relatedSection, relatedContainer] = pageSection(ownerDocument, { modifierClass: 'ah-section--brand-25', labelledBy: 'related-h' }); relatedContainer.classList.add('ah-stack-6');
  relatedContainer.append(sectionHeading(ownerDocument, { id: 'related-h', title: serviceContent.related.title, description: serviceContent.related.description, action: { label: serviceContent.related.viewAll, variant: 'subtle' } }),
    serviceCarousel(ownerDocument, { dir, mode, ariaLabel: serviceContent.related.title, items: withServiceTags(pageContent, pageContent.services.slice(1, 9)) }));
  return renderPage(ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, rating: serviceContent.rating, children: [
    detailSection, relatedSection, commentsCard(ownerDocument, { title: serviceContent.comments.title, text: serviceContent.comments.text, actionLabel: serviceContent.comments.action })] });
}

/** Services catalogue — Figma "Search Page Template" grid variant; same structure and the same query logic as templates/react/Services.jsx. */
export function services(ownerDocument, { dir = 'rtl', mode = 'dga-exact', content: givenContent, pageSize = 9, siteConfig, activeRoute = 'services', onNavigate } = {}) {
  const pageContent = withSampleContent(dir, givenContent); const catalogueTexts = pageContent.servicesPage;
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const catalogue = withSampleServiceAttributes(pageContent.services, pageContent.serviceTags);
  const catalogueState = { query: '', filters: {}, sortAscending: null, pageNumber: 1 };
  const searchBox = dgaNode('dga-search-box', { placeholder: catalogueTexts.search.placeholder, size: 'md', speechLang: dir === 'rtl' ? 'ar' : 'en' }); searchBox.className = 'ah-services-search__box';
  const searchButton = dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: catalogueTexts.search.button });
  const searchForm = node('form', { class: 'ah-services-search__form', role: 'search' }, [searchBox, searchButton]);
  const searchSection = node('section', { class: 'ah-services-search', 'aria-label': catalogueTexts.search.label }, [node('div', { class: 'ah-container ah-services-search__row' }, [searchForm])]);
  const resultCount = node('p', { class: 'ah-text-md ah-services-details__count', 'aria-live': 'polite' });
  const sortButton = dgaNode('dga-button-v2', { variant: 'secondary-outline', size: 'lg', label: catalogueTexts.sort, leadIcon: true, leadIconProps: { name: 'sort-by-down-02', variant: 'stroke', size: 24 } });
  const resultGrid = node('ul', { class: 'ah-services-grid', 'aria-label': catalogueTexts.title });
  const pagination = dgaNode('dga-pagination', { currentPage: 1, totalPageCount: 1, size: 'large' });
  const renderResults = () => {
    const result = queryServiceCatalogue(catalogue, { ...catalogueState, pageSize, dir });
    catalogueState.pageNumber = result.pageNumber;
    resultCount.textContent = catalogueTexts.count(result.matchingCount);
    resultGrid.replaceChildren(...result.visibleServices.map((visibleService) => node('li', {}, [serviceCard(ownerDocument, { dir, item: visibleService, headingLevel: 2, secondaryLabel: catalogueTexts.details })])));
    setProps(pagination, { currentPage: result.pageNumber, totalPageCount: result.pageCount }); pagination.hidden = result.pageCount < 2;
  };
  const updateCatalogue = (changes) => { Object.assign(catalogueState, changes); renderResults(); };
  const applySearch = () => updateCatalogue({ query: readSearchBoxValue(searchBox), pageNumber: 1 });
  searchForm.addEventListener('submit', (submitEvent) => { submitEvent.preventDefault(); applySearch(); });
  searchButton.addEventListener('onClick', applySearch);
  sortButton.addEventListener('onClick', () => updateCatalogue({ sortAscending: !catalogueState.sortAscending }));
  pagination.onChange = (pageNumber) => updateCatalogue({ pageNumber });
  const detailsRow = node('div', { class: 'ah-services-details' }, [
    node('div', { class: 'ah-services-details__result' }, [node('h1', { class: 'ah-display-sm', id: 'services-h', text: catalogueTexts.title }), resultCount]),
    node('div', { class: 'ah-services-details__tools' }, [sortButton, filterMenu(ownerDocument, { dir, label: catalogueTexts.filter, blocks: catalogueTexts.filterBlocks, onApply: (filters) => updateCatalogue({ filters, pageNumber: 1 }) })])]);
  renderResults();
  const bodySection = node('section', { class: 'ah-services-body', 'aria-labelledby': 'services-h' }, [node('div', { class: 'ah-container ah-services-body__content' }, [detailsRow, resultGrid, pagination])]);
  return renderPage(ownerDocument, pageContent, { siteConfig, mode, activeRoute, onNavigate, children: [searchSection, bodySection] });
}

export { formPattern };
