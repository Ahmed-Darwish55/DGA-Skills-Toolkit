import React from 'react';
import { CardGrid, FormSteps, Hero, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Life Journeys Template - Platform Code — generated from lib/templates/templates-map.json (life-journeys) by tools/new_template.py.
 * Sections: Stamp · Nav · Hero · Journey cards · Steps (progress indicator) · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function LifeJourneysPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Journey cards */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container"><SectionHeading id="s3-h" title={isArabic ? 'Journey cards' : 'Journey cards'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Journey cards' : 'Journey cards'} /></div></section>
      {/* Figma section: Steps (progress indicator) */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack"><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'Steps' : 'Steps'}</h2><FormSteps steps={[isArabic ? 'خطوة 1' : 'Step 1', isArabic ? 'خطوة 2' : 'Step 2', isArabic ? 'خطوة 3' : 'Step 3']} active={1} /></div></section>
    </PageShell>
  );
}
