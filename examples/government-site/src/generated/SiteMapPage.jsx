import React from 'react';
import { CardGrid, PageHeading, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Site Map Template - Platforms Code — generated from lib/templates/templates-map.json (site-map) by tools/new_template.py.
 * Sections: Stamp · Nav · Title · Link columns · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function SiteMapPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Title */}
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'Title' : 'Title' }]} title={isArabic ? 'Title' : 'Title'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />
      {/* Figma section: Link columns */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container"><SectionHeading id="s3-h" title={isArabic ? 'Link columns' : 'Link columns'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Link columns' : 'Link columns'} /></div></section>
    </PageShell>
  );
}
