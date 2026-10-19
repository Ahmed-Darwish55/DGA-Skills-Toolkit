// Site-level configuration — ONE source for everything that must look the same on every page of a site:
// identity (name, logo, government emblem), the ordered navigation, header options, footer variant and footer content.
// Page templates read it; they cannot change header or footer design on their own (owner rule 2026-10-19).
// Framework-agnostic: used by the React SiteProvider, the vanilla / Angular / ExB builders and the QA fixtures.
import { DEFAULT_LOGO_AR, DEFAULT_LOGO_EN } from './default-logo.js';

/** Header actions (Figma Header Action ×3, icon + text) — a site lists which ones it shows and in which order (`header.actions`). */
export const HEADER_ACTION_IDS = Object.freeze(['search', 'language', 'signIn']);

/** Footer variants of the DGA Footer component (`dga-footer background`). */
export const FOOTER_VARIANTS = Object.freeze({ DARK_GREEN: 'DarkGreen', LIGHT: 'Light' });

/**
 * Brand colours of the site theme — DGA design-token references only (`var(--…)`), never raw colour values, so a site can switch
 * to another token of the DGA palette but cannot leave it. Applied as CSS custom properties on the page root (applySiteTheme);
 * patterns.css reads them for the hero gradient, the light primary bands and the accent borders.
 */
export const SITE_THEME_CSS_VARIABLES = Object.freeze({
  brandStrong: '--ah-site-brand-strong',
  brand: '--ah-site-brand',
  brandSubtle: '--ah-site-brand-subtle',
  accentBorder: '--ah-site-accent-border',
});
export const DEFAULT_BRAND_COLORS = Object.freeze({
  brandStrong: 'var(--colors-primary-sa-flag-800)',
  brand: 'var(--colors-primary-sa-flag-600-primary)',
  brandSubtle: 'var(--background-primary-25)',
  accentBorder: 'var(--border-primary)',
});

/**
 * Site theme defaults. The Figma templates use the Dark green footer on every inner template AND on Home variants
 * (home-page.json has Dark green and Default frames side by side), so nothing requires Home to differ: one variant for the whole site.
 * The Second Nav Header appears on the inner templates and on Home variants → one site-wide setting.
 */
export const DEFAULT_SITE_THEME = Object.freeze({
  footerVariant: FOOTER_VARIANTS.DARK_GREEN,
  showSecondNavHeader: true,
  showDigitalStamp: true,
  brandColors: DEFAULT_BRAND_COLORS,
});

const TOKEN_REFERENCE = /^var\(--[a-z0-9-]+\)$/;
/** Validate and complete a theme: unknown keys, an unknown footer variant or a colour that is not a DGA token reference throw. */
export function resolveSiteTheme(theme = {}) {
  const knownKeys = Object.keys(DEFAULT_SITE_THEME);
  const unknownKeys = Object.keys(theme).filter((key) => !knownKeys.includes(key));
  if (unknownKeys.length) throw new Error(`createSiteConfig: unknown theme option(s) ${unknownKeys.join(', ')} (allowed: ${knownKeys.join(', ')})`);
  const footerVariant = theme.footerVariant ?? DEFAULT_SITE_THEME.footerVariant;
  if (!Object.values(FOOTER_VARIANTS).includes(footerVariant)) throw new Error(`createSiteConfig: footerVariant must be one of ${Object.values(FOOTER_VARIANTS).join(', ')}`);
  const brandColors = { ...DEFAULT_BRAND_COLORS, ...(theme.brandColors || {}) };
  for (const [colorName, colorValue] of Object.entries(brandColors)) {
    if (!(colorName in SITE_THEME_CSS_VARIABLES)) throw new Error(`createSiteConfig: unknown brand colour ${colorName} (allowed: ${Object.keys(SITE_THEME_CSS_VARIABLES).join(', ')})`);
    if (!TOKEN_REFERENCE.test(String(colorValue))) throw new Error(`createSiteConfig: brandColors.${colorName} must be a DGA token reference such as var(--colors-primary-sa-flag-600-primary), got ${colorValue}`);
  }
  return {
    footerVariant,
    showSecondNavHeader: theme.showSecondNavHeader ?? DEFAULT_SITE_THEME.showSecondNavHeader,
    showDigitalStamp: theme.showDigitalStamp ?? DEFAULT_SITE_THEME.showDigitalStamp,
    brandColors,
  };
}

const deepFreeze = (value) => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
};

/** Default logo for a direction when the project gives none. */
export function getDefaultLogo(dir) {
  const isArabic = dir !== 'ltr';
  return { src: isArabic ? DEFAULT_LOGO_AR : DEFAULT_LOGO_EN, alt: isArabic ? 'شعار الجهة' : 'Entity logo', href: '#' };
}

/**
 * Build the frozen site configuration for one direction.
 * @param {object} options
 * @param {'rtl'|'ltr'} options.dir
 * @param {{ name?: string, logo?: {src,alt,href}, governmentLogo?: {src,alt,href} }} [options.identity]
 * @param {Array<{ id: string, label: string, route: string, children?: Array<{label: string, href?: string, route?: string}> }>} options.navigationItems  ordered, as in the approved design
 * @param {{ secondNavItems?: Array, secondNavActions?: Array|false }} [options.header]
 * @param {object} [options.footer]  groups, social, accessibility, legalLinks, extraLinks, copyright, developedBy, logos
 * @param {Partial<typeof DEFAULT_SITE_THEME>} [options.theme]
 */
export function createSiteConfig({ dir = 'rtl', identity = {}, navigationItems = [], header = {}, footer = {}, theme = {} } = {}) {
  const navigationIds = navigationItems.map((item) => item.id);
  if (new Set(navigationIds).size !== navigationIds.length) throw new Error('createSiteConfig: navigation item ids must be unique');
  const headerActions = header.actions || HEADER_ACTION_IDS;
  const unknownActions = headerActions.filter((actionId) => !HEADER_ACTION_IDS.includes(actionId));
  if (unknownActions.length || new Set(headerActions).size !== headerActions.length) throw new Error(`createSiteConfig: header.actions must be unique ids from ${HEADER_ACTION_IDS.join(', ')}`);
  return deepFreeze({
    dir,
    identity: { name: identity.name || '', logo: identity.logo || getDefaultLogo(dir), governmentLogo: identity.governmentLogo || null },
    navigationItems: navigationItems.map((item) => ({ ...item, children: item.children ? item.children.map((child) => ({ ...child })) : [] })),
    header: { secondNavItems: header.secondNavItems || [], secondNavActions: header.secondNavActions, actions: [...headerActions] },
    footer: { ...footer },
    theme: resolveSiteTheme(theme),
  });
}

/**
 * Navigation items for the header, in the configured order. A sub-menu comes only from the item's own `children`
 * (never looked up by label from sample content). `activeRoute` marks the current item; `onNavigate(route)` handles clicks.
 */
export function resolveNavigationItems(siteConfig, { activeRoute, onNavigate } = {}) {
  return siteConfig.navigationItems.map((item) => ({
    id: item.id,
    label: item.label,
    active: item.route === activeRoute,
    onClick: onNavigate ? () => onNavigate(item.route) : undefined,
    children: item.children.map((child) => ({ label: child.label, href: child.href || '#', onClick: onNavigate && child.route ? () => onNavigate(child.route) : undefined })),
  }));
}

/** Props for the shared header (SiteHeader / siteHeader). */
export function resolveHeaderProps(siteConfig, navigationOptions) {
  const { identity, header, theme } = siteConfig;
  return {
    dir: siteConfig.dir,
    logo: identity.logo,
    gov: identity.governmentLogo || undefined,
    links: resolveNavigationItems(siteConfig, navigationOptions),
    stamp: theme.showDigitalStamp,
    actions: header.actions,
    secondNav: theme.showSecondNavHeader ? { items: header.secondNavItems, actions: header.secondNavActions } : [],
  };
}

/** Props for the shared footer (SiteFooter / siteFooter); `feedback` is per page content (the Home template has no question). */
export function resolveFooterProps(siteConfig, { feedback = true } = {}) {
  const { footer, theme, identity } = siteConfig;
  return {
    dir: siteConfig.dir,
    background: theme.footerVariant,
    entity: { title: identity.name },
    showEntityTitle: false,
    feedback,
    feedbackStats: footer.feedbackStats,
    groups: footer.groups || [],
    social: footer.social || [],
    accessibility: footer.accessibility || [],
    links: footer.legalLinks || [],
    extraLinks: footer.extraLinks || [],
    copyright: [footer.copyright, footer.developedBy].filter(Boolean).join(' · '),
    // logos: not passed — dga-footer renders bottomImages without alt (PKG-FOOTER-05)
  };
}

/** The theme as CSS custom properties: `{ '--ah-site-brand': 'var(--…)', … }` (React `style`, vanilla / Angular / ExB applySiteTheme). */
export function resolveSiteThemeVariables(siteConfig) {
  return Object.fromEntries(Object.entries(siteConfig.theme.brandColors).map(([colorName, colorValue]) => [SITE_THEME_CSS_VARIABLES[colorName], colorValue]));
}

/** Apply the site theme to the page root element (`.ah-page`); returns the element. */
export function applySiteTheme(pageElement, siteConfig) {
  for (const [variableName, variableValue] of Object.entries(resolveSiteThemeVariables(siteConfig))) pageElement.style.setProperty(variableName, variableValue);
  pageElement.dataset.footerVariant = siteConfig.theme.footerVariant;
  return pageElement;
}
