import React from 'react';
import { Hero, SectionHeading, CardGrid, StatsStrip, ServiceCarousel, PartnersStrip, useNav, patternLabels } from '../../patterns/react/index.js';
import { PageShell } from './PageShell.jsx';
import { content } from './content.js';
/** Home — templates/home-page.md (Figma "Home Page - Desktop AR"): Stamp · Nav · Hero · About · Services · Articles & News · Partners · Last modified · Footer */
export function Home({ dir = 'rtl', media }) {
  const pageContent = content(dir); const homeTexts = pageContent.pages.home; const viewAll = pageContent.pages.viewAll;
  const navigation = useNav(); const navigateTo = (route) => () => navigation?.go(route);
  const [firstSlide] = pageContent.heroSlides;
  // Section order and composition = Figma "Home Page - Desktop AR": Hero (carousel, dots) · About us (title + secondary-outline action,
  // figures) · Services (neutral-50, «عرض الكل», card carousel) · Articles & News (white, «عرض الكل», 3 stroke cards) · Partners ·
  // Last modified · Footer. No feedback question on the Home template.
  return (
    <PageShell dir={dir} pageRoute="home" feedback={false}>   {/* header + footer: site configuration (same on every page) */}
      <Hero dir={dir} slides={pageContent.heroSlides.map((slide, i) => ({ ...slide, actions: slide.actions.map((action) => ({ ...action, onClick: i === 0 ? navigateTo('search') : undefined })) }))}
        title={firstSlide.title} lead={firstSlide.lead} actions={[{ label: firstSlide.actions[0].label, onClick: navigateTo('search') }]} media={media} figures={pageContent.stats.map((statistic) => ({ value: statistic.value, label: statistic.label }))} />
      <section className="ah-section ah-section--white" aria-labelledby="about-h">{/* Figma: About us Section fill = background-white */}<div className="ah-container">
        <SectionHeading id="about-h" title={homeTexts.about.title} description={homeTexts.about.description} action={{ label: homeTexts.about.action, onClick: navigateTo('about') }} />
        <StatsStrip items={pageContent.stats} source={homeTexts.about.figuresSource} />
      </div></section>
      <section className="ah-section ah-section--neutral" aria-labelledby="services-h"><div className="ah-container">
        <SectionHeading id="services-h" title={homeTexts.services.title} description={homeTexts.services.description} action={{ label: viewAll, onClick: navigateTo('search') }} />
        <ServiceCarousel dir={dir} ariaLabel={homeTexts.services.ariaLabel} items={pageContent.services.map((service) => ({ ...service, tags: pageContent.serviceTags }))}
          primaryLabel={patternLabels(dir).startService} secondaryLabel={homeTexts.services.details} onPrimary={navigateTo('service')} onSecondary={navigateTo('service')} />
      </div></section>
      <section className="ah-section ah-section--white" aria-labelledby="news-h"><div className="ah-container">
        <SectionHeading id="news-h" title={homeTexts.news.title} description={homeTexts.news.description} action={{ label: viewAll }} />
        <CardGrid items={pageContent.news} effect="stroke" primaryLabel={homeTexts.news.readMore} ariaLabel={homeTexts.news.ariaLabel} columns={3} />
      </div></section>
      <PartnersStrip dir={dir} title={homeTexts.partnersTitle} partners={pageContent.partners} />
    </PageShell>
  );
}
