import React from 'react';
import { DgaFooter, DgaButtonV2 } from 'platformscode-new-react';
import { useMode } from './mode.jsx';
import { useRequiredSiteConfig, useSiteChrome } from './site.jsx';
import { patternLabels, warnIgnoredDesignOptions } from '../shared/index.js';
/**
 * Shared site footer — real DgaFooter + optional Feedback strip. The footer variant (Dark green by default — the same on every page),
 * link groups, social links, accessibility tools, legal links and copyright come from the site configuration (<SiteProvider>);
 * a page decides only whether it shows the feedback question (`feedback`) and handles the answer (`onFeedback`).
 */
export function SiteFooter({ feedback = true, onFeedback, ...ignoredProps }) {
  warnIgnoredDesignOptions('SiteFooter', ignoredProps);
  const mode = useMode();
  const { footerProps } = useSiteChrome(useRequiredSiteConfig('SiteFooter'), { feedback });
  const { dir, background, entity, showEntityTitle, groups, links, extraLinks, copyright, social, accessibility, feedbackStats } = footerProps;
  const labels = patternLabels(dir);
  // <div>: dga-footer renders the <footer> contentinfo landmark itself
  return (
    <div className="ah-footer" data-pattern="site-footer" data-mode={mode}>
      {footerProps.feedback && (
        // Figma "Feedback - Desktop" (feedback-section template): white, 2px top border border-primary, pad 24/80; question (Text md)
        // + Yes/No Button Primary Large (gap 24) · "N% of users said Yes from X" (Text sm) on the other side.
        <div className="ah-feedback"><div className="ah-container ah-feedback__inner">
          <div className="ah-feedback__ask">
            <p className="ah-text-md" id="fb-q">{labels.feedbackQuestion}</p>
            <div className="ah-row" role="group" aria-labelledby="fb-q">
              <DgaButtonV2 variant="primary" size="lg" label={labels.yes} onOnClick={() => onFeedback?.(true)} />
              <DgaButtonV2 variant="primary" size="lg" label={labels.no} onOnClick={() => onFeedback?.(false)} />
            </div>
          </div>
          {feedbackStats && <p className="ah-text-sm ah-feedback__stats">{labels.feedbackStats(feedbackStats)}</p>}
        </div></div>
      )}
      <DgaFooter background={background} mainTitle={showEntityTitle ? entity?.title : ''} mainDescription={showEntityTitle ? entity?.description : ''} bottomImages={[]} extraLinks={extraLinks}
        NavLinks={groups.length > 0} basicLinks={links} groupLinks={groups} copyright={copyright || labels.defaultCopyright}
        socialMediaTitle={labels.followUs} socialMediaLinks={social} accessibilityTitle={labels.accessibilityTools} accessibilityLinks={accessibility} />
    </div>
  );
}
