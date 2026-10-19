import React from 'react';
import { CardGrid, FeedbackRating, Hero, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Home Page Template - Platforms Code — generated from lib/templates/templates-map.json (home-page) by tools/new_template.py.
 * Sections: Digital Stamp · Nav Header · Hero (gradient primary 800→600, search) · About us · Services (cards) · Articles & News (cards) · Partners (logos) · Feedback · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function HomePagePage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero (gradient primary 800→600, search) */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: About us */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container ah-stack ah-prose"><h2 id="s3-h" className="ah-display-xs">{isArabic ? 'About us' : 'About us'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Services (cards) */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container"><SectionHeading id="s4-h" title={isArabic ? 'Services' : 'Services'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Services' : 'Services'} /></div></section>
      {/* Figma section: Articles & News (cards) */}
      <section className="ah-section" aria-labelledby="s5-h"><div className="ah-container ah-stack ah-prose"><h2 id="s5-h" className="ah-display-xs">{isArabic ? 'Articles & News' : 'Articles & News'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
      {/* Figma section: Partners (logos) */}
      <section className="ah-section" aria-labelledby="s6-h"><div className="ah-container"><SectionHeading id="s6-h" title={isArabic ? 'Partners' : 'Partners'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Partners' : 'Partners'} /></div></section>
      {/* Figma section: Feedback */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </PageShell>
  );
}
