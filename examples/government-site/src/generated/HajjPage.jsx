import React from 'react';
import { CardGrid, Hero, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Hajj Template — generated from lib/templates/templates-map.json (hajj) by tools/new_template.py.
 * Sections: Seasonal hero · Services · Guides · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 * SEASONAL identity (colours/artwork) is a design decision per campaign — the chrome and tokens stay DGA; mark any custom art [AHMED HOUSE].
 */
export function HajjPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Seasonal hero */}
      <Hero title={isArabic ? 'Seasonal hero' : 'Seasonal hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Services */}
      <section className="ah-section" aria-labelledby="s1-h"><div className="ah-container"><SectionHeading id="s1-h" title={isArabic ? 'Services' : 'Services'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Services' : 'Services'} /></div></section>
      {/* Figma section: Guides */}
      <section className="ah-section" aria-labelledby="s2-h"><div className="ah-container"><SectionHeading id="s2-h" title={isArabic ? 'Guides' : 'Guides'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Guides' : 'Guides'} /></div></section>
    </PageShell>
  );
}
