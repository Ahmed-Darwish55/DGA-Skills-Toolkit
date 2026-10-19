import React from 'react';
import { DgaBreadcrumbs, DgaButtonV2, DgaTag } from 'platformscode-new-react';
import { SectionHeading, ServiceCarousel, ServiceInfoCard, IconLink, ServiceTabs, VideoPlaceholder, StepsList, CommentsCard, useNav, patternLabels } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/**
 * Service page — Figma "Service Page Template - Platforms Code", frame "Service Page - AR" (1440×2782), section by section
 * (patterns/service-page.md):
 *  Stamp · Second Nav Header (Gray) · Nav Header ·
 *  Service (pad 40/80, gap 32; primary-25 band 154 px behind the top): [main 832: Description (Title = breadcrumb + H1 Display sm,
 *    Primary Large «بدء الخدمة» · Tags sm · text · SLA link) — gap 64 — Info (Tab List flush + icons · Video · ordered Steps)]
 *    + [Service Card 416] ·
 *  Related services (primary-25: title + Subtle Large «عرض الكل» · description · Carousel/Dots of Card Stroke) ·
 *  Comments & suggestions (Card Stroke: icon · title · text · Primary «تواصل معنا») ·
 *  Last modified · Rating strip · Feedback strip · Footer (Dark green).
 */
export function Service({ dir = 'rtl', onStart }) {
  const pageContent = content(dir); const serviceContent = pageContent.service;
  const navigation = useNav(); const start = onStart || (() => navigation?.go('form'));
  const tabContent = [<StepsList key="s" items={serviceContent.steps} ariaLabel={serviceContent.tabs[0].label} />, <StepsList key="c" items={serviceContent.conditions} ariaLabel={serviceContent.tabs[1].label} />, <StepsList key="d" items={serviceContent.documents} ariaLabel={serviceContent.tabs[2].label} />];
  return (
    <PageShell dir={dir} pageRoute="services" rating={serviceContent.rating}>
      <section className="ah-svc-detail" aria-labelledby="svc-title"><div className="ah-container ah-svc-detail__grid">
        <div className="ah-svc-detail__main">
          <div className="ah-svc-detail__desc">
            <div className="ah-svc-detail__head">
              <div className="ah-svc-detail__title">
                <DgaBreadcrumbs items={serviceContent.crumbs} />
                <h1 id="svc-title" className="ah-display-sm">{serviceContent.title}</h1>
              </div>
              <DgaButtonV2 variant="primary" size="lg" label={serviceContent.start} onOnClick={start} data-qa="service-cta" />
            </div>
            <div className="ah-svc-card__tags">{serviceContent.tags.map((tag) => <DgaTag key={tag.label} label={tag.label} variant={tag.variant} size="sm" />)}</div>
            <p className="ah-text-md ah-svc-detail__text">{serviceContent.description}</p>
            <IconLink label={serviceContent.sla} href="#" />
          </div>
          <div className="ah-svc-detail__info">
            <ServiceTabs dir={dir} tabs={serviceContent.tabs.map((tab, i) => ({ ...tab, content: i === 0 ? <><VideoPlaceholder dir={dir} />{tabContent[0]}</> : tabContent[i] }))} />
          </div>
        </div>
        <ServiceInfoCard dir={dir} rows={serviceContent.info} payment={serviceContent.payment} faq={serviceContent.faq} contacts={serviceContent.contacts} manual={{ label: serviceContent.manual }} apps={serviceContent.apps} />
      </div></section>
      <section className="ah-section ah-section--brand-25" aria-labelledby="related-h"><div className="ah-container ah-stack-6">
        <SectionHeading id="related-h" title={serviceContent.related.title} description={serviceContent.related.description} action={{ label: serviceContent.related.viewAll, variant: 'subtle', onClick: () => navigation?.go('services') }} />
        <ServiceCarousel dir={dir} items={pageContent.services.slice(1, 9).map((relatedService) => ({ ...relatedService, tags: pageContent.serviceTags }))} perSlide={4}
          primaryLabel={patternLabels(dir).startService} onPrimary={() => navigation?.go('service')} ariaLabel={serviceContent.related.title} />
      </div></section>
      <CommentsCard dir={dir} title={serviceContent.comments.title} text={serviceContent.comments.text} actionLabel={serviceContent.comments.action} onAction={() => navigation?.go('contact')} />
    </PageShell>
  );
}
