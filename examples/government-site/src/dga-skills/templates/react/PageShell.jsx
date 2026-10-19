import React from 'react';
import { SiteHeader, SiteFooter, SiteProvider, LastModified, RatingStrip, useSiteConfig, useSiteThemeStyle } from '../../patterns/react/index.js';
import { content } from './content.js';
/**
 * Shared page chrome for every template: Digital Stamp · Second Nav Header · Nav Header → main → «تاريخ آخر تعديل» →
 * (Rating strip) → (Feedback strip) → Footer. Header, navigation order, footer variant and theme come ONLY from the site configuration
 * (SiteProvider / lib/site/site-config.js; the sample content's site when the app has none) — a page template chooses its content
 * blocks (`feedback`, `rating`, `lastModified`) and names its own route (`pageRoute`, the active menu item without a NavProvider)
 * but never the header or footer design (patterns/site-config.md).
 */
export function PageShell({ dir, pageRoute, feedback = true, lastModified = true, rating, children }) {
  const sampleContent = content(dir);
  const siteConfig = useSiteConfig(sampleContent.site);
  const themeStyle = useSiteThemeStyle(siteConfig);
  return (
    <SiteProvider siteConfig={siteConfig}>
      <div className="ah-page" style={themeStyle} data-footer-variant={siteConfig.theme.footerVariant}>
        <SiteHeader pageRoute={pageRoute} />
        <main id="main" tabIndex={-1}>{children}</main>
        {lastModified && <LastModified dir={siteConfig.dir} date={sampleContent.lastModified.date} time={sampleContent.lastModified.time} />}
        {rating && <RatingStrip dir={siteConfig.dir} average={rating.average} count={rating.count} onRate={rating.onRate} />}
        <SiteFooter feedback={feedback} />
      </div>
    </SiteProvider>
  );
}
