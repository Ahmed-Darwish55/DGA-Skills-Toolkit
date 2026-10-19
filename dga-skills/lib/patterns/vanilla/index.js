// Vanilla / Angular / ExB pattern builders — same anatomy and CSS classes as the React patterns, built with the real
// @platformscode/core custom elements (props set as DOM properties). Returns DOM nodes. Mode: 'dga-exact' | 'dga-enhanced' | 'dga-creative'.
// Texts and shared rules come from ../shared (one definition for every technology); DOM creation from core/elements documentBuilders.
import { documentBuilders } from '../../core/elements.js';
import { prefersReducedMotion } from '../../core/motion.js';
import { buttonIcon, BUTTON_ICON_SIZE } from '../../core/icons.js';
import { requireAccessibleName } from '../../core/a11y.js';
import { enhanceDgaCarousel, enhanceScrollStrip, stretchCardV2 } from '../../core/carousel-a11y.js';
import { defaultPageTools, restorePageTools } from '../../core/page-tools.js';
import { resolveHeaderProps, resolveFooterProps, applySiteTheme } from '../../site/site-config.js';
import { patternLabels, lastModifiedText, defaultHeaderActions, warnIgnoredDesignOptions, splitIntoPages, readFilterSelection } from '../shared/index.js';

export { defaultHeaderActions };

const requireSiteConfig = (componentName, siteConfig) => {
  if (!siteConfig) throw new Error(`[dga-skills] ${componentName} needs the site configuration: pass { siteConfig: createSiteConfig({ … }) } (patterns/site-config.md)`);
  return siteConfig;
};
const listenToDgaClick = (dgaElement, handler) => { if (handler) dgaElement.addEventListener('onClick', handler); return dgaElement; };

export function reveal(ownerDocument, revealedNode, mode) {
  if (mode === 'dga-exact' || prefersReducedMotion()) return revealedNode;
  revealedNode.classList.add('ah-reveal'); revealedNode.dataset.house = 'reveal';
  if ('IntersectionObserver' in globalThis) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { revealedNode.classList.add('is-in'); observer.unobserve(revealedNode); }
    }), { threshold: 0.1 });
    queueMicrotask(() => observer.observe(revealedNode));
  } else revealedNode.classList.add('is-in');
  return revealedNode;
}

/* ---------- Site chrome: header and footer read the site configuration ONLY (lib/site/site-config.js) ---------- */

/** Second Nav Header (Figma "Second Nav Header / Style=Gray"): items (icon + Text md) · actions (Subtle Medium icon-only page tools). */
function secondNavHeader(ownerDocument, { dir, secondNav }) {
  const { node, dgaNode, iconNode } = documentBuilders(ownerDocument);
  const secondNavItems = secondNav.items || secondNav;
  const header = dgaNode('dga-second-nav-header', { variant: 'gray' });
  const headerContent = node('dga-second-nav-header-content', { slot: 'content' });
  secondNavItems.forEach((secondNavItem) => {
    const itemOptions = typeof secondNavItem === 'string' ? { label: secondNavItem } : secondNavItem;
    const itemElement = dgaNode('dga-second-nav-header-item', { label: itemOptions.label });
    if (itemOptions.icon) { const icon = iconNode(itemOptions.icon); icon.setAttribute('slot', 'icon'); itemElement.append(icon); }
    headerContent.append(itemElement);
  });
  header.append(headerContent);
  if (secondNav.actions !== false) {
    const headerActions = node('dga-second-nav-header-actions', { slot: 'actions' });
    const pageTools = Array.isArray(secondNav.actions) ? secondNav.actions : defaultPageTools(dir === 'rtl');
    pageTools.forEach((pageTool) => {
      const toolButton = dgaNode('dga-button-v2', { variant: 'subtle', size: 'md', iconOnly: true, label: pageTool.label, ...buttonIcon(pageTool.icon, { api: 'v2', position: 'icon', size: BUTTON_ICON_SIZE.md }) });
      toolButton.setAttribute('title', pageTool.label);
      listenToDgaClick(toolButton, () => pageTool.run?.());
      headerActions.append(toolButton);
    });
    header.append(headerActions);
  }
  return header;
}

/** Header Menu Item: a link with `children` gets the chevron (arrow-down-01) and a slotted DGA sub-menu; no children → no chevron. */
function navigationLink(ownerDocument, navigationItem) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const hasSubMenu = navigationItem.children?.length > 0;
  const linkElement = dgaNode('dga-nav-header-link', { label: navigationItem.label, active: !!navigationItem.active, icon: hasSubMenu ? 'arrow-down-01' : undefined });
  if (navigationItem.onClick) linkElement.addEventListener('onLinkClicked', navigationItem.onClick);
  if (hasSubMenu) {
    const subMenuColumn = dgaNode('dga-nav-header-sub-menu-column', { label: navigationItem.label });
    navigationItem.children.forEach((childItem) => subMenuColumn.append(dgaNode('dga-nav-header-sub-menu-link', { label: childItem.label, link: childItem.href || '#' })));
    linkElement.append(node('dga-nav-header-sub-menu', { slot: 'dga-nav-header-sub-menu' }, [subMenuColumn]));
  }
  return linkElement;
}

/**
 * Shared site header: dga-digital-signature + dga-second-nav-header + dga-nav-header (logos / menu / actions).
 * Logo, navigation order, sub-menus, Second Nav Header and stamp come from `siteConfig`; a page passes only its route and handlers.
 * Figma Home template: Header Actions ×3 (icon + text, no fill): search-01 «البحث», translation «English», user «تسجيل الدخول».
 */
export function siteHeader(ownerDocument, { siteConfig, mode = 'dga-exact', activeRoute, onNavigate, onSearch, onLanguage, onSignIn, ...ignoredOptions } = {}) {
  warnIgnoredDesignOptions('siteHeader', ignoredOptions);
  const { dir, logo, gov, links, stamp, secondNav, actions } = resolveHeaderProps(requireSiteConfig('siteHeader', siteConfig), { activeRoute, onNavigate });
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const headerWrapper = node('div', { class: `ah-header ${mode !== 'dga-exact' ? 'ah-header--sticky' : ''}`, 'data-pattern': 'site-header', 'data-mode': mode });
  headerWrapper.append(node('a', { class: 'ah-skip', href: '#main', text: labels.skipToContent }));
  if (stamp) headerWrapper.append(dgaNode('dga-digital-signature', { language: dir === 'rtl' ? 'ar' : 'en', extension: '.gov.sa' }));
  if ((secondNav.items || secondNav).length) { headerWrapper.append(secondNavHeader(ownerDocument, { dir, secondNav })); restorePageTools(ownerDocument); }
  const navigationHeader = dgaNode('dga-nav-header', { divider: true });
  const headerMain = node('dga-nav-header-main');
  headerMain.append(dgaNode('dga-nav-header-logos', { logoSrc: logo?.src, logoAlt: logo?.alt || '', logoLink: logo?.href || '#', govSrc: gov?.src, govAlt: gov?.alt || '', govLink: gov?.href || '#' }));
  headerMain.append(node('dga-nav-header-menu', {}, links.map((navigationItem) => navigationLink(ownerDocument, navigationItem))));
  const headerActions = node('dga-nav-header-actions');
  defaultHeaderActions(dir, { onSearch, onLanguage, onSignIn }, actions).forEach((headerAction) => {
    const actionLink = dgaNode('dga-nav-header-link', { label: headerAction.label, icon: headerAction.icon });
    if (headerAction.onClick) actionLink.addEventListener('click', headerAction.onClick);
    headerActions.append(actionLink);
  });
  headerMain.append(headerActions);
  navigationHeader.append(headerMain); headerWrapper.append(navigationHeader);
  return headerWrapper;
}

/** Figma "Feedback - Desktop": 2px top border, Yes/No Primary Large, «N% of users said Yes from X». */
function feedbackStrip(ownerDocument, { dir, feedbackStats, onFeedback }) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const answers = node('div', { class: 'ah-row', role: 'group', 'aria-labelledby': 'fb-q' },
    [[labels.yes, true], [labels.no, false]].map(([answerLabel, answerValue]) => listenToDgaClick(dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: answerLabel }), () => onFeedback?.(answerValue))));
  const stripContent = node('div', { class: 'ah-container ah-feedback__inner' }, [
    node('div', { class: 'ah-feedback__ask' }, [node('p', { class: 'ah-text-md', id: 'fb-q', text: labels.feedbackQuestion }), answers]),
    feedbackStats && node('p', { class: 'ah-text-sm ah-feedback__stats', text: labels.feedbackStats(feedbackStats) }),
  ]);
  return node('div', { class: 'ah-feedback' }, [stripContent]);
}

/**
 * Shared site footer: optional feedback strip + dga-footer. Variant (Dark green by default), link groups, social, accessibility tools,
 * legal links and copyright come from `siteConfig`; a page decides only whether it shows the feedback question.
 */
export function siteFooter(ownerDocument, { siteConfig, mode = 'dga-exact', feedback = true, onFeedback, ...ignoredOptions } = {}) {
  warnIgnoredDesignOptions('siteFooter', ignoredOptions);
  const footerProps = resolveFooterProps(requireSiteConfig('siteFooter', siteConfig), { feedback });
  const { dir, background, entity, showEntityTitle, groups, links, extraLinks, copyright, social, accessibility } = footerProps;
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const footerWrapper = node('div', { class: 'ah-footer', 'data-pattern': 'site-footer', 'data-mode': mode });
  if (footerProps.feedback) footerWrapper.append(feedbackStrip(ownerDocument, { dir, feedbackStats: footerProps.feedbackStats, onFeedback }));
  footerWrapper.append(dgaNode('dga-footer', {
    background, mainTitle: showEntityTitle ? entity?.title : '', mainDescription: showEntityTitle ? entity?.description : '',
    NavLinks: groups.length > 0, basicLinks: links, extraLinks, groupLinks: groups, bottomImages: [],
    copyright: copyright || labels.defaultCopyright, socialMediaTitle: labels.followUs, socialMediaLinks: social,
    accessibilityTitle: labels.accessibilityTools, accessibilityLinks: accessibility,
  }));
  return footerWrapper;
}

/** Section heading — Figma Title row: title (Display sm bold) + optional action button («عرض الكل», Secondary-Outline Large by default) · description. */
export function sectionHeading(ownerDocument, { title, description, action, link, center = false, level = 2, id } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const titleRow = node('div', { class: 'ah-heading__row' }, [node('h' + level, { class: 'ah-display-sm ah-heading__title', text: title, id })]);
  if (action) titleRow.append(listenToDgaClick(dgaNode('dga-button-v2', { variant: action.variant || 'secondary-outline', size: 'lg', label: action.label }), action.onClick));
  else if (link) titleRow.append(dgaNode('dga-link', { label: link.label, url: link.href || '#', icon: false }));
  return node('div', { class: `ah-heading ${center ? 'ah-heading--center' : ''}`, 'data-pattern': 'section-heading' }, [
    titleRow, description && node('p', { class: 'ah-text-md ah-heading__desc', text: description })]);
}

const heroButtons = (ownerDocument, actions, { light, firstVariant }) => {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  return node('div', { class: 'ah-hero__actions' }, actions.map((heroAction, actionIndex) => dgaNode('dga-button-v2', {
    variant: heroAction.variant || (actionIndex === 0 ? firstVariant : 'secondary-outline'), onColor: !light, size: 'lg', label: heroAction.label })));
};

export function hero(ownerDocument, { dir = 'rtl', mode = 'dga-exact', title, lead, actions = [], search, media, figures = [], light = false, level = 1, slides } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  if (slides?.length > 1 && !(mode !== 'dga-exact' && media)) {
    // Figma Home hero: gradient band · title 60/72 · lead 20/30 · ONE Button Neutral on-color · carousel dots. dots-only never renders
    // dots in core 0.0.52 (PKG-CAROUSEL-01) → real slides in variant="dots".
    const carousel = dgaNode('dga-carousel', { variant: 'dots', Dir: dir, showDots: true, steps: 1, size: 'md' });
    slides.forEach((slide, slideIndex) => {
      const slideStack = node('div', { class: 'ah-stack ah-hero__slide', role: 'group', 'aria-label': `${slideIndex + 1} / ${slides.length}` }, [
        node(slideIndex === 0 ? 'h' + level : 'p', { class: 'ah-hero__title ah-hero__title--xl', id: slideIndex === 0 ? 'hero-title' : undefined, text: slide.title }),
        slide.lead && node('p', { class: 'ah-text-xl ah-hero__lead', text: slide.lead })]);
      if (slide.actions?.length) slideStack.append(heroButtons(ownerDocument, slide.actions, { light, firstVariant: 'neutral' }));
      carousel.append(slideStack);
    });
    enhanceDgaCarousel(carousel);
    return node('section', { class: `ah-hero ah-hero--slides ${light ? 'ah-hero--light' : ''}`, 'data-pattern': 'hero', 'data-mode': mode, 'aria-labelledby': 'hero-title' }, [
      node('div', { class: 'ah-container ah-hero__inner' }, [carousel])]);
  }
  const isCreative = mode === 'dga-creative' && media; const isSplit = mode === 'dga-enhanced' && media;
  const heroSection = node('section', { class: `ah-hero ${light ? 'ah-hero--light' : ''} ${isSplit ? 'ah-hero--split' : ''} ${isCreative ? 'ah-hero--creative' : ''}`, 'data-pattern': 'hero', 'data-mode': mode, 'aria-labelledby': 'hero-title' });
  if (isCreative || isSplit) heroSection.dataset.house = isCreative ? 'creative-hero' : 'split-hero';
  if (isCreative) heroSection.append(node('img', { class: 'ah-hero__bg', src: media.src, alt: '', 'data-licence': media.licence }));
  const heroInner = node('div', { class: 'ah-container ah-hero__inner' });
  const heroStack = node('div', { class: 'ah-stack' }, [node('h' + level, { class: 'ah-display-lg ah-hero__title', id: 'hero-title', text: title }), lead && node('p', { class: 'ah-text-xl ah-hero__lead', text: lead })]);
  if (search && !isCreative) {
    const searchWrapper = node('div'); searchWrapper.style.maxWidth = '640px';
    searchWrapper.append(dgaNode('dga-search-box', { label: search.label, placeholder: search.placeholder, fullwidth: true, size: 'lg', speechLang: search.lang || 'ar' }));
    heroStack.append(searchWrapper);
  }
  if (actions.length) heroStack.append(heroButtons(ownerDocument, actions, { light, firstVariant: light ? 'primary' : 'neutral' }));
  heroInner.append(reveal(ownerDocument, heroStack, mode));
  if (isSplit) heroInner.append(reveal(ownerDocument, node('div', { class: 'ah-hero__media' }, [node('img', { src: media.src, alt: media.alt || '', 'data-licence': media.licence })]), mode));
  if (isCreative && figures.length) {
    heroInner.append(reveal(ownerDocument, node('div', { class: 'ah-hero__figures' }, figures.map((figure) => node('div', { class: 'ah-figure' }, [
      node('div', { class: 'ah-figure__num', text: String(figure.value) }), node('div', { class: 'ah-text-sm', text: figure.label })]))), mode));
  }
  heroSection.append(heroInner);
  return heroSection;
}

export function cardGrid(ownerDocument, { items = [], effect = 'stroke', primaryLabel, mode = 'dga-exact', ariaLabel, columns } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const cardList = node('ul', { class: `ah-cards ${columns === 3 ? 'ah-cards--3' : ''}`, 'data-pattern': 'card-grid', 'aria-label': ariaLabel });
  cardList.style.cssText = 'list-style:none;padding:0;margin:0';
  for (const cardItem of items) {
    const actionLabel = cardItem.primaryLabel || primaryLabel;
    const card = dgaNode('dga-card', { cardTitle: cardItem.title, description: cardItem.description, showTitle: true, showDescription: !!cardItem.description, effect,
      showFeaturedIcon: !!cardItem.icon, featuredIcon: cardItem.icon ? { name: cardItem.icon, variant: 'stroke' } : undefined, image: cardItem.image,
      showPrimaryAction: !!actionLabel, primaryActionLabel: actionLabel, showSecondaryAction: false });
    cardList.append(reveal(ownerDocument, node('li', {}, [card]), mode));
  }
  return cardList;
}

/** Statistics. variant 'template' (default) = the DGA page-template "About us" figures (Figma home-page › About us Section › Cards):
 * featured icon (xl, brand, light, circle) · large number · label, centred, no card chrome. variant 'metric' = dashboard DgaMetric
 * (Exact) / house tiles (Enhanced/Creative) — dashboards only. */
export function statsStrip(ownerDocument, { items = [], mode = 'dga-exact', source, variant = 'template' } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  if (variant === 'template') {
    const figuresRow = node('div', { class: 'ah-stats-t', 'data-pattern': 'stats', 'data-variant': 'template', 'data-mode': mode });
    items.forEach((statistic) => figuresRow.append(reveal(ownerDocument, node('div', { class: 'ah-stat-t', role: 'group', 'aria-label': `${statistic.value} ${statistic.label}` }, [
      dgaNode('dga-featured-icon', { icon: { name: statistic.icon || 'user', variant: 'stroke' }, color: 'brand', size: 'xl', variant: 'light', circle: true }),
      node('div', { class: 'ah-stat-t__content' }, [node('div', { class: 'ah-stat-t__value', text: String(statistic.value) }), node('div', { class: 'ah-stat-t__label', text: statistic.label })])]), mode)));
    if (source) figuresRow.append(node('p', { class: 'ah-stats-t__source ah-text-sm ah-muted', text: source }));
    return figuresRow;
  }
  const metricsRow = node('div', { class: 'ah-stats', 'data-pattern': 'stats', 'data-variant': 'metric', 'data-mode': mode });
  if (mode === 'dga-exact') {
    items.forEach((statistic) => metricsRow.append(dgaNode('dga-metric', { label: statistic.label, percentage: String(statistic.value), showChart: false, showActions: false, showMoreButton: false, showFeaturedIcon: false, showInfo: false /* PKG-METRIC-02 */ })));
    return metricsRow;
  }
  metricsRow.dataset.house = 'stat-tiles';
  items.forEach((statistic) => metricsRow.append(reveal(ownerDocument, node('div', { class: 'ah-stat', role: 'group', 'aria-label': statistic.label }, [
    node('div', { class: 'ah-stat__value', text: String(statistic.value) }), node('div', { class: 'ah-stat__label ah-text-md', text: statistic.label }),
    source && node('div', { class: 'ah-text-sm ah-muted', text: source })]), mode)));
  return metricsRow;
}

function formField(ownerDocument, field) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  if (field.type === 'textarea') return dgaNode('dga-textarea', { label: field.label, name: field.name, placeholder: field.placeholder, rows: field.rows || 4, fullwidth: true });
  if (field.type === 'select') return dgaNode('dga-dropdown', { label: field.label, id: field.name, placeholder: field.placeholder, options: field.options, value: field.value, onChange: field.onChange });
  if (field.type === 'checkbox') return dgaNode('dga-checkbox', { label: field.label, name: field.name, value: field.value || 'on', checked: !!field.checked });
  if (field.type === 'radio') {
    return node('fieldset', { class: 'ah-fieldset' }, [node('legend', { text: field.label }),
      ...field.options.map((option) => dgaNode('dga-radio-button', { name: field.name, value: option.value, label: option.name, checked: option.value === field.value }))]);
  }
  return dgaNode('dga-text-input', { type: field.type === 'password' || field.type === 'number' ? field.type : 'text', label: field.label, name: field.name, placeholder: field.placeholder, required: !!field.required, helperText: field.helperText, error: !!field.error, fullwidth: true });
}

export function formPattern(ownerDocument, { dir = 'rtl', title, intro, fields = [], steps, activeStep = 1, submitLabel, cancelLabel, onSubmit } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const form = node('form', { class: 'ah-form-panel ah-stack', 'data-pattern': 'form' }); form.noValidate = true;
  form.addEventListener('submit', (submitEvent) => { submitEvent.preventDefault(); onSubmit?.(new FormData(form)); });
  if (steps) {
    const progress = dgaNode('dga-progress-indicator', { activeStep, alignment: 'horizontal' });
    steps.forEach((stepName, stepIndex) => progress.append(dgaNode('dga-progress-indicator-step', { title: stepName, currentStep: stepIndex + 1, showStepName: true })));
    form.append(progress);
  }
  if (title) form.append(node('h2', { class: 'ah-display-xs', text: title }));
  if (intro) form.append(node('p', { class: 'ah-text-md ah-muted ah-prose', text: intro }));
  const fieldGrid = node('div', { class: 'ah-form' }, fields.map((field) => node('div', { class: field.span === 2 ? 'ah-span-2' : '' }, [formField(ownerDocument, field)])));
  fieldGrid.append(node('div', { class: 'ah-form__actions' }, [
    dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: submitLabel || patternLabels(dir).submit, type: 'submit' }),
    cancelLabel && dgaNode('dga-button-v2', { variant: 'secondary-outline', size: 'lg', label: cancelLabel, type: 'button' })]));
  form.append(fieldGrid);
  return form;
}

/** One Card / Effect=Stroke (dga-card-v2 named slots): image or featured icon · title · text · tags · rating · actions. */
export function serviceCard(ownerDocument, { dir = 'rtl', item: serviceItem, primaryLabel, secondaryLabel, secondaryVariant = 'secondary-outline', headingLevel = 3, onPrimary, onSecondary } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const card = dgaNode('dga-card-v2', { effect: 'stroke', width: '100%', maxWidth: '100%' });
  const cardContent = node('div', { class: 'ah-svc-card', slot: 'card-content' }, [
    serviceItem.image ? node('img', { class: 'ah-svc-card__image', src: serviceItem.image, alt: serviceItem.imageAlt || '' })
      : dgaNode('dga-featured-icon', { icon: { name: serviceItem.icon || 'checkmark-circle-02', variant: 'stroke' }, color: 'brand', size: 'lg', variant: 'light', circle: true }),
    node('div', { class: 'ah-svc-card__content' }, [node('h' + headingLevel, { class: 'ah-svc-card__title', text: serviceItem.title }), serviceItem.description && node('p', { class: 'ah-svc-card__desc', text: serviceItem.description })]),
    serviceItem.tags?.length && node('div', { class: 'ah-svc-card__tags' }, serviceItem.tags.map((tag) => dgaNode('dga-tag', { label: tag.label, variant: tag.variant || 'neutral', size: 'sm' }))),
    serviceItem.rating && node('div', { class: 'ah-svc-card__rating' }, [dgaNode('dga-rating', { value: serviceItem.rating.value, readOnly: true, size: 'sm', direction: dir }), node('span', { class: 'ah-text-sm ah-muted', text: labels.reviewCount(serviceItem.rating.count) })]),
  ]);
  const secondaryActionLabel = serviceItem.secondaryLabel || secondaryLabel;
  const cardActions = node('div', { class: 'ah-svc-card__actions', slot: 'card-actions' }, [
    listenToDgaClick(dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: serviceItem.primaryLabel || primaryLabel || labels.startService }), () => onPrimary?.(serviceItem)),
    secondaryActionLabel && listenToDgaClick(dgaNode('dga-button-v2', { variant: serviceItem.secondaryVariant || secondaryVariant, size: 'lg', label: secondaryActionLabel }), () => onSecondary?.(serviceItem)),
  ]);
  card.append(cardContent, cardActions);
  stretchCardV2(card);   // PKG-CARDV2-02: the inner card keeps 360 px otherwise
  return card;
}

/** Services carousel — Carousel / Style=Dots; each slide = a row of Card / Effect=Stroke (dga-card-v2 named slots card-content / card-actions):
 * featured icon · title · text · tags · primary + secondary-outline Large actions. */
export function serviceCarousel(ownerDocument, { dir = 'rtl', items = [], perSlide = 4, primaryLabel, secondaryLabel, secondaryVariant = 'secondary-outline', ariaLabel, mode = 'dga-exact', onPrimary, onSecondary } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const carouselWrapper = node('div', { class: 'ah-svc-carousel', 'data-pattern': 'service-carousel', 'data-mode': mode, role: 'region', 'aria-label': ariaLabel, 'aria-roledescription': labels.carouselRole });
  const slidePages = splitIntoPages(items, perSlide);
  const slidePage = (pageItems, pageIndex) => node('div', { class: 'ah-svc-page', 'aria-label': labels.carouselPage(pageIndex + 1, slidePages.length) },
    pageItems.map((serviceItem) => serviceCard(ownerDocument, { dir, item: serviceItem, primaryLabel, secondaryLabel, secondaryVariant, onPrimary, onSecondary })));
  if (slidePages.length > 1) {
    const carousel = dgaNode('dga-carousel', { variant: 'dots', Dir: dir, showDots: true, steps: 1, size: 'md' });
    slidePages.forEach((pageItems, pageIndex) => carousel.append(slidePage(pageItems, pageIndex)));
    enhanceDgaCarousel(carousel);
    carouselWrapper.append(carousel);
  } else carouselWrapper.append(slidePage(items, 0));
  return carouselWrapper;
}

/** Partner Section — title + [arrow Button Secondary-Solid icon-only] logo cards 98×100 (stroke, r16) [arrow]. */
export function partnersStrip(ownerDocument, { dir = 'rtl', title, partners = [], id = 'partners-h', registry } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const partnerList = node('ul', { class: 'ah-partners__list' }, partners.map((partner) => node('li', { class: 'ah-partner' }, [
    node('a', { class: 'ah-partner__link', href: partner.href || '#' }, [
      partner.logo ? node('img', { src: partner.logo, alt: partner.name }) : node('span', { class: 'ah-partner__placeholder', 'aria-hidden': 'true' }),
      node('span', { class: 'ah-partner__name', text: partner.name })])])));
  const scrollPartners = (scrollSign) => partnerList.scrollBy({ left: scrollSign * 228 * (dir === 'rtl' ? -1 : 1), behavior: 'smooth' });
  const scrollButton = (iconName, label, scrollSign) => {
    requireAccessibleName({ iconOnly: true, label }, 'dga-button-v2');
    const button = dgaNode('dga-button-v2', { variant: 'secondary-solid', size: 'lg', iconOnly: true, label, ...buttonIcon(iconName, { api: 'v2', position: 'icon', size: BUTTON_ICON_SIZE.lg, registry }) });
    listenToDgaClick(button, () => scrollPartners(scrollSign));
    button.addEventListener('click', () => scrollPartners(scrollSign));
    return button;
  };
  const isRightToLeft = dir === 'rtl';
  const partnersRow = node('div', { class: 'ah-partners__row' }, [
    scrollButton(isRightToLeft ? 'arrow-right-01' : 'arrow-left-01', labels.previous, -1), partnerList,
    scrollButton(isRightToLeft ? 'arrow-left-01' : 'arrow-right-01', labels.next, 1)]);
  enhanceScrollStrip(partnerList);
  return node('section', { class: 'ah-section ah-section--white', 'aria-labelledby': id, 'data-pattern': 'partners' }, [
    node('div', { class: 'ah-container ah-partners' }, [node('h2', { class: 'ah-display-sm ah-heading__title', id, text: title }), partnersRow])]);
}

/** «تاريخ آخر تعديل» strip above the footer (Figma: pad 16/80, white, Text sm 14). */
export function lastModified(ownerDocument, { dir = 'rtl', date, time } = {}) {
  const { node } = documentBuilders(ownerDocument);
  return node('div', { class: 'ah-last-modified', 'data-pattern': 'last-modified' }, [
    node('div', { class: 'ah-container' }, [node('p', { class: 'ah-text-sm', text: lastModifiedText(dir, { date, time }) })])]);
}

/**
 * Page shell shared by every vanilla / Angular / ExB template: header → main → last modified → (rating) → footer.
 * Header, navigation and footer come from `siteConfig`; the site theme is applied on the page root.
 */
export function pageShell(ownerDocument, { siteConfig, mode, activeRoute, onNavigate, headerHandlers = {}, feedback = true, onFeedback, lastModifiedDate, rating, children = [], ...ignoredOptions }) {
  warnIgnoredDesignOptions('pageShell', ignoredOptions);
  const { node } = documentBuilders(ownerDocument);
  const { dir } = requireSiteConfig('pageShell', siteConfig);
  const page = node('div', { class: 'ah-page' }, [
    siteHeader(ownerDocument, { siteConfig, mode, activeRoute, onNavigate, ...headerHandlers }),
    node('main', { id: 'main', tabindex: '-1' }, children),
    lastModifiedDate && lastModified(ownerDocument, { dir, ...lastModifiedDate }),
    rating && ratingStrip(ownerDocument, { dir, ...rating }),
    siteFooter(ownerDocument, { siteConfig, mode, feedback, onFeedback }),
  ]);
  return applySiteTheme(page, siteConfig);
}

/* ---------- Service page blocks (Figma "Service Page Template"; same anatomy/classes as patterns/react/ServiceBlocks.jsx) ---------- */

/** Link + decorative leading icon (DgaLink iconType prints the icon name as text — PKG-LINK-01). */
export function iconLink(ownerDocument, { label, href = '#', icon = 'link-04' } = {}) {
  const { node, dgaNode, iconNode } = documentBuilders(ownerDocument);
  return node('span', { class: 'ah-icon-link' }, [iconNode(icon, 20), dgaNode('dga-link', { label, url: href, icon: false })]);
}

/** Service Card (sidebar): rows · payment · divider · FAQ / phone / email / manual · divider · store buttons. */
export function serviceInfoCard(ownerDocument, { dir = 'rtl', rows = [], payment, faq, contacts = [], manual, apps, mode = 'dga-exact' } = {}) {
  const { node, dgaNode, iconNode } = documentBuilders(ownerDocument);
  const infoText = (label, valueChildren) => node('div', { class: 'ah-svc-info__text' }, [node('p', { class: 'ah-svc-info__label', text: label }), ...valueChildren]);
  const stackedRow = (children) => node('div', { class: 'ah-svc-info__row ah-svc-info__row--stack' }, children);
  const infoCard = node('aside', { class: 'ah-svc-info', 'aria-label': patternLabels(dir).serviceCard, 'data-pattern': 'service-info-card', 'data-mode': mode });
  const detailsGroup = node('div', { class: 'ah-svc-info__group' }, rows.map((row) => node('div', { class: 'ah-svc-info__row' }, [iconNode(row.icon), infoText(row.label, [node('p', { class: 'ah-svc-info__value', text: row.value })])])));   // plain blocks: a dl cannot hold the decorative dga-icon
  if (payment) {
    detailsGroup.append(stackedRow([infoText(payment.label, [node('ul', { class: 'ah-svc-info__payments', 'aria-label': payment.label },
      payment.methods.map((paymentMethod) => node('li', { class: 'ah-pay-method' }, [paymentMethod.logo ? node('img', { src: paymentMethod.logo, alt: paymentMethod.label }) : ownerDocument.createTextNode(paymentMethod.label)])))])]));
  }
  infoCard.append(detailsGroup, dgaNode('dga-divider', {}));
  const helpGroup = node('div', { class: 'ah-svc-info__group' });
  if (faq) helpGroup.append(stackedRow([infoText(faq.label, [iconLink(ownerDocument, { label: faq.linkLabel, href: faq.href })])]));
  contacts.forEach((contact) => helpGroup.append(node('div', { class: 'ah-svc-info__row' }, [iconNode(contact.icon), infoText(contact.label, [
    node('p', { class: 'ah-svc-info__value' }, [node('a', { class: 'ah-svc-info__contact', href: contact.href, dir: 'ltr', text: contact.value })])])])));
  if (manual) helpGroup.append(node('div', {}, [dgaNode('dga-button-v2', { variant: 'secondary-solid', size: 'lg', label: manual.label })]));
  infoCard.append(helpGroup);
  if (apps) {
    const storeList = node('ul', { class: 'ah-store-list' }, apps.stores.map((store) => node('li', {}, [node('a', { class: 'ah-store', href: store.href || '#', 'aria-label': store.ariaLabel || store.label },
      store.badge ? [node('img', { src: store.badge, alt: '' })] : [node('span', { class: 'ah-store__small', 'aria-hidden': 'true', text: store.small }), node('span', { class: 'ah-store__name', 'aria-hidden': 'true', text: store.label })])])));
    infoCard.append(dgaNode('dga-divider', {}), node('div', { class: 'ah-svc-info__apps' }, [node('h2', { class: 'ah-svc-info__apps-title', text: apps.title }), storeList]));
  }
  return infoCard;
}

/** Video area 832×344 r16 neutral-50 + Featured icon (Large, Brand, Dark, play). */
export function videoPlaceholder(ownerDocument, { dir = 'rtl', label, onPlay } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const playButton = node('button', { class: 'ah-video__play', type: 'button', 'aria-label': label || patternLabels(dir).playVideo }, [
    dgaNode('dga-featured-icon', { icon: { name: 'play', variant: 'stroke' }, color: 'brand', size: 'lg', variant: 'dark', circle: true })]);
  if (onPlay) playButton.addEventListener('click', onPlay);
  return node('div', { class: 'ah-video' }, [playButton]);
}

/** Ordered steps — List item / Ordered / Neutral (row height fixed by the package: PKG-LIST-01, CSS fix in patterns.css). */
export function stepsList(ownerDocument, { items = [], ariaLabel } = {}) {
  const { dgaNode } = documentBuilders(ownerDocument);
  const list = dgaNode('dga-list-v2', { type: 'ordered', color: 'neutral' }); list.className = 'ah-steps';
  if (ariaLabel) list.setAttribute('aria-label', ariaLabel);
  items.forEach((stepText, stepIndex) => list.append(dgaNode('dga-list-item', { type: 'ordered', level: 'one', itemNumber: String(stepIndex + 1), itemText: stepText })));
  return list;
}

/** Horizontal Tab List (Medium, icons, flush) + panel; tab i shows tabs[i].content. */
export function serviceTabs(ownerDocument, { tabs = [] } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const tabPanel = node('div', { class: 'ah-svc-tabs__panel', role: 'region' });
  const showTab = (tabIndex) => { tabPanel.replaceChildren(...[].concat(tabs[tabIndex].content)); tabPanel.setAttribute('aria-label', tabs[tabIndex].label); };
  const tabList = dgaNode('dga-tabs', { flush: true, size: 'md', tabsList: tabs.map((tab, tabIndex) => ({ label: tab.label, tabIcon: tab.icon, iconProps: { variant: 'stroke', size: 20, 'aria-hidden': 'true' }, onClick: () => showTab(tabIndex) })) });
  showTab(0);
  return node('div', { class: 'ah-svc-tabs' }, [tabList, tabPanel]);
}

/** Rating strip — 2px top border-primary: «تم تقييم هذه الخدمة بمتوسط N» + stars + «N تقييم» · Primary Large «قيم هذه الخدمة». */
export function ratingStrip(ownerDocument, { dir = 'rtl', average, count, onRate } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const stripContent = node('div', { class: 'ah-container ah-rating-strip__inner' }, [node('div', { class: 'ah-rating-strip__content' }, [
    node('p', { text: labels.ratedAverage(average) }),
    node('div', { class: 'ah-rating-strip__stars' }, [dgaNode('dga-rating', { value: Number(average), readOnly: true, size: 'md', direction: dir }), node('span', { class: 'ah-text-sm ah-rating-strip__count', text: labels.reviewCount(count) })])])]);
  const rateButton = dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: labels.rateService });
  listenToDgaClick(rateButton, () => {
    const ratingInput = dgaNode('dga-rating', { value: -1, size: 'md', direction: dir });
    ratingInput.addEventListener('onRatingChange', (ratingEvent) => onRate?.(Number(ratingEvent.detail)));
    rateButton.replaceWith(node('div', { class: 'ah-rating-strip__rate', role: 'group', 'aria-label': labels.rateService }, [ratingInput]));
  });
  stripContent.append(rateButton);
  return node('div', { class: 'ah-rating-strip', 'data-pattern': 'rating-strip' }, [stripContent]);
}

/** Comments & suggestions — Card Stroke 1280: checkmark featured icon · title · text · Primary «تواصل معنا». */
export function commentsCard(ownerDocument, { title, text, actionLabel, onAction, id = 'comments-h' } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const card = dgaNode('dga-card-v2', { effect: 'stroke', width: '100%', maxWidth: '100%' }); card.className = 'ah-comments-card';
  card.append(
    node('div', { class: 'ah-svc-card', slot: 'card-content' }, [dgaNode('dga-featured-icon', { icon: { name: 'checkmark-circle-02', variant: 'stroke' }, color: 'brand', size: 'lg', variant: 'light', circle: true }),
      node('div', { class: 'ah-svc-card__content' }, [node('h2', { class: 'ah-svc-card__title', id, text: title }), node('p', { class: 'ah-svc-card__desc', text })])]),
    node('div', { class: 'ah-svc-card__actions', slot: 'card-actions' }, [listenToDgaClick(dgaNode('dga-button-v2', { variant: 'primary', size: 'lg', label: actionLabel }), onAction)]));
  stretchCardV2(card);
  return node('section', { class: 'ah-section ah-section--white', 'aria-labelledby': id }, [node('div', { class: 'ah-container' }, [card])]);
}

/** Filtration menu (dga-filteration 0.0.52 is unusable — PKG-FILTER-01): Neutral Large button + panel of DGA checkboxes / radios. */
export function filterMenu(ownerDocument, { dir = 'rtl', label, blocks = [], onApply } = {}) {
  const { node, dgaNode } = documentBuilders(ownerDocument);
  const labels = patternLabels(dir);
  const menuWrapper = node('div', { class: 'ah-filter-menu' });
  const toggleButton = dgaNode('dga-button-v2', { variant: 'neutral', size: 'lg', label, ...buttonIcon('filter', { api: 'v2', position: 'lead', size: 24 }), ...buttonIcon('arrow-down-01', { api: 'v2', position: 'trail', size: 24 }) });
  toggleButton.setAttribute('aria-expanded', 'false');
  let filterPanel = null;
  const closePanel = () => { filterPanel?.remove(); filterPanel = null; toggleButton.setAttribute('aria-expanded', 'false'); };
  const applySelection = (clear) => { onApply?.(readFilterSelection(filterPanel, blocks, { clear })); closePanel(); };
  listenToDgaClick(toggleButton, () => {
    if (filterPanel) { closePanel(); return; }
    filterPanel = node('form', { class: 'ah-filter-menu__panel', 'aria-label': label }, blocks.map((block) => node('fieldset', { class: 'ah-fieldset' }, [node('legend', { text: block.label }),
      ...block.options.map((option) => {
        const choice = dgaNode(block.type === 'radio' ? 'dga-radio-button' : 'dga-checkbox', { name: block.type === 'radio' ? block.id : `${block.id}--${option.id}`, value: option.value, label: option.label });
        choice.dataset.block = block.id; choice.dataset.value = option.value;
        return choice;
      })])));
    filterPanel.append(node('div', { class: 'ah-filter-menu__actions' }, [
      listenToDgaClick(dgaNode('dga-button-v2', { variant: 'primary', size: 'md', label: labels.applyFilters }), () => applySelection(false)),
      listenToDgaClick(dgaNode('dga-button-v2', { variant: 'secondary-outline', size: 'md', label: labels.clearFilters }), () => applySelection(true))]));
    filterPanel.addEventListener('submit', (submitEvent) => { submitEvent.preventDefault(); applySelection(false); });
    menuWrapper.append(filterPanel); toggleButton.setAttribute('aria-expanded', 'true');
  });
  ownerDocument.addEventListener('keydown', (keyEvent) => { if (keyEvent.key === 'Escape' && filterPanel) { closePanel(); toggleButton.focus?.(); } });
  menuWrapper.append(toggleButton);
  return menuWrapper;
}
