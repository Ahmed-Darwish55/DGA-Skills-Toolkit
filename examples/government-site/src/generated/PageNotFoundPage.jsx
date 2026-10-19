import React from 'react';
import { DgaFeaturedIcon } from 'platformscode-new-react';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Page Not Found Template - Platforms Code — generated from lib/templates/templates-map.json (page-not-found) by tools/new_template.py.
 * Sections: Digital Stamp · Second Nav Header · Nav Header · Error 404 (featured icon, kicker, title, text, actions) · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function PageNotFoundPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Error 404 (featured icon, kicker, title, text, actions) */}
      <section className="ah-section"><div className="ah-container ah-stack" style={{ textAlign: 'center' }}><DgaFeaturedIcon icon={{ name: 'search-remove', variant: 'stroke' }} size="lg" /><h1 className="ah-display-md">{isArabic ? 'Error 404' : 'Error 404'}</h1><p className="ah-text-lg ah-muted">TODO(content)</p></div></section>
    </PageShell>
  );
}
