import React from 'react';
import { DgaFeaturedIcon, DgaButtonV2 } from 'platformscode-new-react';
import { useNav } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/** Page not found — templates/page-not-found.md: Stamp · Second Nav · Nav · Error 404 (icon, title, text, actions) · Footer */
export function NotFound({ dir = 'rtl' }) {
  const navigation = useNav();
  const notFoundTexts = content(dir).pages.notFound;
  return (
    <PageShell dir={dir}>
      <section className="ah-section" aria-labelledby="nf-h"><div className="ah-container" style={{ paddingBlock: 'var(--spacing-20)' }}>
        <div className="ah-stack" style={{ maxWidth: 560, gap: 'var(--spacing-6)' }}>
          <DgaFeaturedIcon icon={{ name: 'search-remove', variant: 'stroke' }} color="gray" size="xl" variant="light" />
          <p className="ah-text-md ah-muted" style={{ fontWeight: 600 }}>{notFoundTexts.kicker}</p>
          <h1 id="nf-h" className="ah-display-md">{notFoundTexts.title}</h1>
          <p className="ah-text-lg ah-muted">{notFoundTexts.text}</p>
          <div className="ah-row" data-qa="nf-cta"><DgaButtonV2 variant="primary" size="lg" label={notFoundTexts.home} onOnClick={() => navigation?.go('home')} /><DgaButtonV2 variant="secondary-outline" size="lg" label={notFoundTexts.contact} onOnClick={() => navigation?.go('contact')} /></div>
        </div>
      </div></section>
    </PageShell>
  );
}
