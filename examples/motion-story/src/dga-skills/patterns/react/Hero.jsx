import React from 'react';
import { DgaButtonV2, DgaSearchBox, DgaCarousel } from 'platformscode-new-react';
import { useMode } from './mode.jsx';
import { pickByDirection } from '../../core/direction.js';
import { patternLabels } from '../shared/index.js';
import { useDgaCarouselA11y } from './HomeBlocks.jsx';
import { Reveal } from './Reveal.jsx';
/**
 * Hero.  Exact   → Figma Home hero: primary gradient band, title, lead, actions / search (DGA tokens only).
 *        Enhanced→ split layout with project media (image must be real + licensed; `media.licence` required)  [AHMED HOUSE]
 *        Creative→ full-bleed photographic hero with overlay + figures                                          [AHMED HOUSE]
 * Controls inside stay DGA (DgaButtonV2 on-color, DgaSearchBox).
 */
export function Hero({ title, lead, actions = [], search, media, figures = [], light = false, level = 1, slides, dir = 'rtl', size }) {
  const mode = useMode();
  const carouselRef = useDgaCarouselA11y();
  const HeadingTag = `h${level}`;
  const HeroButtons = () => actions.length > 0 && (
    <div className="ah-hero__actions">
      {actions.map((heroAction, i) => <DgaButtonV2 key={heroAction.label} variant={heroAction.variant || (i === 0 ? (light ? 'primary' : 'neutral') : 'secondary-outline')} onColor={!light} size="lg" label={heroAction.label} onOnClick={heroAction.onClick} />)}
    </div>
  );
  if (mode === 'dga-creative' && media) {
    return (
      <section className="ah-hero ah-hero--creative" data-pattern="hero" data-mode={mode} data-house="creative-hero" aria-labelledby="hero-title">
        <img className="ah-hero__bg" src={media.src} alt="" data-licence={media.licence} />
        <div className="ah-container ah-hero__inner">
          <Reveal className="ah-stack"><HeadingTag id="hero-title" className="ah-display-lg ah-hero__title">{title}</HeadingTag>{lead && <p className="ah-text-xl ah-hero__lead">{lead}</p>}<HeroButtons /></Reveal>
          {figures.length > 0 && <Reveal className="ah-hero__figures">{figures.map((figure) => <div className="ah-figure" key={figure.label}><div className="ah-figure__num">{figure.value}</div><div className="ah-text-sm">{figure.label}</div></div>)}</Reveal>}
        </div>
      </section>
    );
  }
  // Figma Home template hero: gradient band, title 60/72 (Display xl desktop), lead Text xl 20/30, ONE Button Neutral on-color Large,
  // Carousel / Style=Dots Only when there is more than one slide.
  if (slides?.length > 1 && !(mode !== 'dga-exact' && media)) {
    return (
      <section className={`ah-hero ah-hero--slides ${light ? 'ah-hero--light' : ''}`} data-pattern="hero" data-mode={mode} aria-labelledby="hero-title" aria-roledescription={patternLabels(dir).carouselRole}>
        <div className="ah-container ah-hero__inner">
          {/* Figma: Carousel / Style=Dots Only under the content. Package 0.0.52: "dots-only" never renders dots (it counts slides
              from a container it does not render — PKG-CAROUSEL-01) → real slides in variant="dots" (one slide visible, dots below). */}
          <DgaCarousel ref={carouselRef} variant="dots" Dir={dir} showDots steps={1} size="md">
            {slides.map((slide, i) => (
                <div className="ah-stack ah-hero__slide" key={i} role="group" aria-roledescription={pickByDirection(dir, 'شريحة', 'slide')} aria-label={`${i + 1} / ${slides.length}`}>
                  {i === 0 ? <HeadingTag id="hero-title" className="ah-hero__title ah-hero__title--xl">{slide.title}</HeadingTag> : <p className="ah-hero__title ah-hero__title--xl" aria-hidden="false">{slide.title}</p>}
                  {slide.lead && <p className="ah-text-xl ah-hero__lead">{slide.lead}</p>}
                  {slide.actions?.length > 0 && <div className="ah-hero__actions">{slide.actions.map((slideAction, j) => <DgaButtonV2 key={slideAction.label} variant={slideAction.variant || (j === 0 ? 'neutral' : 'secondary-outline')} onColor={!light} size="lg" label={slideAction.label} onOnClick={slideAction.onClick} />)}</div>}
                </div>
            ))}
          </DgaCarousel>
        </div>
      </section>
    );
  }
  const split = mode === 'dga-enhanced' && media;
  return (
    <section className={`ah-hero ${light ? 'ah-hero--light' : ''} ${split ? 'ah-hero--split' : ''}`} data-pattern="hero" data-mode={mode} data-house={split ? 'split-hero' : undefined} aria-labelledby="hero-title">
      <div className="ah-container ah-hero__inner">
        <Reveal className="ah-stack">
          <HeadingTag id="hero-title" className={`${size === 'xl' ? 'ah-hero__title--xl' : 'ah-display-lg'} ah-hero__title`}>{title}</HeadingTag>
          {lead && <p className="ah-text-xl ah-hero__lead">{lead}</p>}
          {search && <div style={{ maxWidth: 640 }}><DgaSearchBox label={search.label} placeholder={search.placeholder} fullwidth size="lg" speechLang={search.lang || 'ar'} /></div>}
          <HeroButtons />
        </Reveal>
        {split && <Reveal className="ah-hero__media"><img src={media.src} alt={media.alt || ''} data-licence={media.licence} /></Reveal>}
      </div>
    </section>
  );
}
