import React from 'react';
import { DgaAccordion } from 'platformscode-new-react';
import { CardGrid, Hero, SectionHeading } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Help & Support Template - Platforms Code — generated from lib/templates/templates-map.json (help-support) by tools/new_template.py.
 * Sections: Stamp · Nav · Hero (search) · Topics (cards) · FAQ · Contact · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function HelpSupportPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Hero (search) */}
      <Hero title={isArabic ? 'Hero' : 'Hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Topics (cards) */}
      <section className="ah-section" aria-labelledby="s3-h"><div className="ah-container"><SectionHeading id="s3-h" title={isArabic ? 'Topics' : 'Topics'} description={isArabic ? 'TODO(content)' : 'TODO(content)'} /><CardGrid items={[1, 2, 3].map((itemNumber) => ({ title: isArabic ? `عنصر ${itemNumber} — TODO(content)` : `Item ${itemNumber} — TODO(content)`, description: isArabic ? 'وصف قصير.' : 'Short description.', icon: 'home-05' }))} primaryLabel={isArabic ? 'المزيد' : 'More'} ariaLabel={isArabic ? 'Topics' : 'Topics'} /></div></section>
      {/* Figma section: FAQ */}
      <section className="ah-section" aria-labelledby="s4-h"><div className="ah-container ah-stack"><h2 id="s4-h" className="ah-display-xs">{isArabic ? 'FAQ' : 'FAQ'}</h2><div role="list">{[1, 2, 3].map((itemNumber) => <div role="listitem" key={itemNumber}><DgaAccordion title={isArabic ? `سؤال ${itemNumber} — TODO(content)` : `Question ${itemNumber} — TODO(content)`} content={isArabic ? 'إجابة توضيحية.' : 'Placeholder answer.'} size="lg" /></div>)}</div></div></section>
      {/* Figma section: Contact */}
      <section className="ah-section" aria-labelledby="s5-h"><div className="ah-container ah-stack ah-prose"><h2 id="s5-h" className="ah-display-xs">{isArabic ? 'Contact' : 'Contact'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
    </PageShell>
  );
}
