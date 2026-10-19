import React from 'react';
import { CardGrid, FeedbackRating, PageHeading, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Content Page Template - Platforms Code — generated from lib/templates/templates-map.json (content-page) by tools/new_template.py.
 * Sections: Stamp · Nav · Breadcrumb · Article (title, meta, body, table of contents) · Related · Feedback · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function ContentPagePage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Breadcrumb */}
      <PageHeading dir={dir} crumbs={[{ label: isArabic ? 'الرئيسية' : 'Home', href: '#' }, { label: isArabic ? 'Breadcrumb' : 'Breadcrumb' }]} title={isArabic ? 'Breadcrumb' : 'Breadcrumb'} lead={isArabic ? 'وصف توضيحي — TODO(content)' : 'Placeholder description — TODO(content)'} />
      {/* Figma section: Article (title, meta, body, table of contents) */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container ah-stack ah-prose"><h2 id="s3-h" className="ah-display-xs">{isArabic ? 'Article' : 'Article'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Related */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container"><SectionHeading id="s4-h" title={isArabic ? 'Related' : 'Related'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Related' : 'Related'} /></div></section>
      {/* Figma section: Feedback */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </PageShell>
  );
}
