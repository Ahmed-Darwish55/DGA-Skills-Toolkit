import React, { createContext, useContext, useMemo } from 'react';
import { resolveHeaderProps, resolveFooterProps, resolveSiteThemeVariables } from '../../site/site-config.js';
import { useNav } from './nav.jsx';
/**
 * Site-level configuration for React (lib/site/site-config.js): wrap the app once —
 *   <SiteProvider siteConfig={createSiteConfig({ dir, identity, navigationItems, header, footer, theme })}>…</SiteProvider>
 * Every page then renders the same header, navigation order, footer variant and theme. Pages cannot override them.
 */
const SiteConfigContext = createContext(null);

export function SiteProvider({ siteConfig, children }) {
  return <SiteConfigContext.Provider value={siteConfig}>{children}</SiteConfigContext.Provider>;
}

/** The provided site configuration, or `fallbackSiteConfig` (sample content) when the app has no SiteProvider. */
export function useSiteConfig(fallbackSiteConfig) {
  return useContext(SiteConfigContext) || fallbackSiteConfig;
}

/** The site configuration a header / footer must render; throws when the app gave none. */
export function useRequiredSiteConfig(componentName) {
  const siteConfig = useContext(SiteConfigContext);
  if (!siteConfig) throw new Error(`[dga-skills] <${componentName}> needs a <SiteProvider siteConfig={createSiteConfig(…)}> above it (patterns/site-config.md)`);
  return siteConfig;
}

/** Header and footer props for the current page: navigation order from the site, active item and clicks from NavProvider. */
export function useSiteChrome(siteConfig, { feedback = true, pageRoute } = {}) {
  const navigation = useNav();
  const activeRoute = navigation?.active ?? pageRoute;   // the router decides; a template only names its own route as a fallback
  const handleNavigationClick = navigation?.go;
  return useMemo(() => ({
    headerProps: resolveHeaderProps(siteConfig, { activeRoute, onNavigate: handleNavigationClick }),
    footerProps: resolveFooterProps(siteConfig, { feedback }),
  }), [siteConfig, activeRoute, handleNavigationClick, feedback]);
}

/** The site theme as a React `style` object of CSS custom properties (applied on `.ah-page`). */
export function useSiteThemeStyle(siteConfig) {
  return useMemo(() => resolveSiteThemeVariables(siteConfig), [siteConfig]);
}
