import React, { createContext, useContext } from 'react';
/**
 * Router context — lets a real app (router, hash navigation) drive the templates without changing their props:
 * the active route and `go(route)` for menu items and CTAs. The menu itself comes from the site configuration (site.jsx).
 * Routes are plain strings the app understands (e.g. 'home', 'service', 'form', 'faq', 'search', 'contact').
 */
const NavigationContext = createContext(null);
let hasWarnedAboutLinks = false;
export function NavProvider({ links, active, go, children }) {
  // Navigation ORDER and items live in the site configuration (SiteProvider / createSiteConfig); NavProvider only carries
  // the active route and the router callback. `links` is ignored (one source, no per-page menus).
  if (links && !hasWarnedAboutLinks && typeof console !== 'undefined') { hasWarnedAboutLinks = true; console.warn('[dga-skills] NavProvider links are ignored — define navigationItems in createSiteConfig() and wrap the app in <SiteProvider>.'); }
  return <NavigationContext.Provider value={{ links: [], active, go: go || (() => {}) }}>{children}</NavigationContext.Provider>;
}
/** `{ links, active, go }` or null when no app navigation is provided (templates then render inert placeholders). */
export function useNav() { return useContext(NavigationContext); }
