// Site-level header / footer for ArcGIS Experience Builder widgets — the same site configuration (lib/site/site-config.js) and the
// same shared chrome builders (lib/patterns/vanilla siteHeader / siteFooter) as React, vanilla and Angular.
// In ExB the header and the footer are usually two widgets of the page; both read ONE site configuration (e.g. a shared module of the
// app, or the same JSON in each widget's config.json → createSiteConfig(config.site)), so they cannot drift apart page by page.
//
//   const rootRef = React.useRef(null);
//   useSiteChromeWidget(rootRef, { part: 'header', siteConfig, activeRoute: 'services', onNavigate });
//   return <div ref={rootRef} />;
//
// The theme is applied to the widget root only (no global CSS leaks into the ExB app).
import { React } from 'jimu-core';
import { applySiteTheme } from '../site/site-config.js';
import { siteHeader, siteFooter } from '../patterns/vanilla/index.js';

const CHROME_PARTS = Object.freeze({ header: siteHeader, footer: siteFooter });

/**
 * Render the shared header or footer into `hostElement` (framework-free; also used by the hook). Returns an unmount function.
 * @param {HTMLElement} hostElement
 * @param {{ part: 'header'|'footer', siteConfig: object, mode?: string, activeRoute?: string, onNavigate?: Function, feedback?: boolean, onFeedback?: Function, onSearch?: Function, onLanguage?: Function, onSignIn?: Function }} options
 */
export function mountSiteChrome(hostElement, { part, siteConfig, ...chromeOptions }) {
  const buildChrome = CHROME_PARTS[part];
  if (!buildChrome) throw new Error(`[dga-skills] mountSiteChrome: part must be 'header' or 'footer', got ${part}`);
  if (!siteConfig) throw new Error('[dga-skills] mountSiteChrome needs the site configuration: { siteConfig: createSiteConfig({ … }) }');
  applySiteTheme(hostElement, siteConfig);
  hostElement.setAttribute('dir', siteConfig.dir);
  hostElement.classList.add('ah-site-chrome');   // not .ah-page: that one is a full-height page layout
  const chromeElement = buildChrome(hostElement.ownerDocument, { siteConfig, ...chromeOptions });
  hostElement.replaceChildren(chromeElement);
  return () => chromeElement.remove();
}

/** React hook for an ExB widget: mounts the shared header or footer into the widget root and keeps it in sync with its options. */
export function useSiteChromeWidget(rootRef, { part, siteConfig, mode, activeRoute, onNavigate, feedback, onFeedback, onSearch, onLanguage, onSignIn }) {
  React.useEffect(() => {
    const hostElement = rootRef.current;
    if (!hostElement) return undefined;
    return mountSiteChrome(hostElement, { part, siteConfig, mode, activeRoute, onNavigate, feedback, onFeedback, onSearch, onLanguage, onSignIn });
  }, [rootRef, part, siteConfig, mode, activeRoute, onNavigate, feedback, onFeedback, onSearch, onLanguage, onSignIn]);
}
