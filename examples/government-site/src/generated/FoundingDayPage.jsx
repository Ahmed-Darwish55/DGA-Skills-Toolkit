import React from 'react';
import { Hero } from '../dga-skills/patterns/react/index.js';
import { PageShell } from '../dga-skills/templates/react/PageShell.jsx';
/**
 * @kind page
 * Saudi Founding Day — generated from lib/templates/templates-map.json (founding-day) by tools/new_template.py.
 * Sections: Seasonal identity hero · Content sections · Footer.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 * SEASONAL identity (colours/artwork) is a design decision per campaign — the chrome and tokens stay DGA; mark any custom art [AHMED HOUSE].
 */
export function FoundingDayPage({ dir = 'rtl' }) {
  const isArabic = dir === 'rtl';
  return (
    <PageShell dir={dir}>
      {/* Figma section: Seasonal identity hero */}
      <Hero title={isArabic ? 'Seasonal identity hero' : 'Seasonal identity hero'} lead={isArabic ? 'نص تمهيدي توضيحي — TODO(content)' : 'Placeholder lead — TODO(content)'} actions={[{ label: isArabic ? 'ابدأ' : 'Start' }]} />
      {/* Figma section: Content sections */}
      <section className="ah-section" aria-labelledby="s1-h"><div className="ah-container ah-stack ah-prose"><h2 id="s1-h" className="ah-display-xs">{isArabic ? 'Content sections' : 'Content sections'}</h2><p className="ah-text-md">{isArabic ? 'فقرة توضيحية — TODO(content)' : 'Placeholder paragraph — TODO(content)'}</p></div></section>
    </PageShell>
  );
}
