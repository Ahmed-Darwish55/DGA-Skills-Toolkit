import React, { useRef, useEffect } from 'react';
import { enhanceDgaCarousel, enhanceScrollStrip, stretchCardV2 } from '../../core/carousel-a11y.js';
import { DgaCarousel, DgaCardV2, DgaFeaturedIcon, DgaTag, DgaButtonV2, DgaRating } from 'platformscode-new-react';
import { DgaIconButton } from '../../react/index.js';
import { useMode } from './mode.jsx';
import { patternLabels, splitIntoPages } from '../shared/index.js';
/*
 * Blocks of the DGA Home page template (Figma "Home Page Template - Platforms Code", frame "Home Page - Desktop AR";
 * raw tree: references/dga-live/data/templates/home-page.json). Real DGA components only; layout values from the frames.
 */

/** Services carousel — Carousel / Style=Dots with Card / Effect=Stroke items 320×276:
 *  featured icon (Large, brand, light, circle) · title (Text lg bold) · text (Text md) · Tags (Small) · Actions (Large: primary + secondary-outline). */
/** Hook: inert off-screen slides + re-measure on resize (PKG-CAROUSEL-02/03). */
export function useDgaCarouselA11y() {
  const carouselRef = useRef(null);
  useEffect(() => enhanceDgaCarousel(carouselRef.current), []);
  return carouselRef;
}

/** One Figma Card / Effect=Stroke (dga-card-v2): optional Image (r8) or featured icon · title · text · Tags · optional Rating ·
 *  Actions (primary + optional secondary). Used by ServiceCarousel (Home, Related services) and the services grid. */
export function ServiceCard({ dir = 'rtl', item: serviceItem, primaryLabel, secondaryLabel, secondaryVariant = 'secondary-outline', onPrimary, onSecondary, headingLevel = 3 }) {
  const HeadingTag = `h${headingLevel}`;
  const labels = patternLabels(dir);
  const cardRef = useRef(null);
  useEffect(() => stretchCardV2(cardRef.current), []);
  return (
    <DgaCardV2 ref={cardRef} effect="stroke" width="100%" maxWidth="100%">
      {/* dga-card-v2 renders only its named slots: card-content / card-actions */}
      <div slot="card-content" className="ah-svc-card">
        {serviceItem.image ? <img className="ah-svc-card__image" src={serviceItem.image} alt={serviceItem.imageAlt || ''} loading="lazy" />
          : <DgaFeaturedIcon icon={{ name: serviceItem.icon || 'checkmark-circle-02', variant: 'stroke' }} color="brand" size="lg" variant="light" circle />}
        <div className="ah-svc-card__content"><HeadingTag className="ah-svc-card__title">{serviceItem.title}</HeadingTag>{serviceItem.description && <p className="ah-svc-card__desc">{serviceItem.description}</p>}</div>
        {serviceItem.tags?.length > 0 && <div className="ah-svc-card__tags">{serviceItem.tags.map((tag) => <DgaTag key={tag.label} label={tag.label} variant={tag.variant || 'neutral'} size="sm" />)}</div>}
        {serviceItem.rating && <div className="ah-svc-card__rating"><DgaRating value={serviceItem.rating.value} readOnly size="sm" direction={dir} /><span className="ah-text-sm ah-muted">{labels.reviewCount(serviceItem.rating.count)}</span></div>}
      </div>
      <div slot="card-actions" className="ah-svc-card__actions">
        <DgaButtonV2 variant="primary" size="lg" label={serviceItem.primaryLabel || primaryLabel || labels.startService} onOnClick={() => (serviceItem.onPrimary || onPrimary)?.(serviceItem)} />
        {(serviceItem.secondaryLabel || secondaryLabel) && <DgaButtonV2 variant={serviceItem.secondaryVariant || secondaryVariant} size="lg" label={serviceItem.secondaryLabel || secondaryLabel} onOnClick={() => (serviceItem.onSecondary || onSecondary)?.(serviceItem)} />}
      </div>
    </DgaCardV2>
  );
}

/* Card anatomy (Figma Card): optional Image (r8) · featured icon (when no image) · title · text · Tags ·
   optional Rating (DgaRating read-only + count) · Actions (primary + secondary; secondary style = Figma secondary-outline by default,
   `secondaryVariant="neutral"` for a neutral secondary action). */
export function ServiceCarousel({ dir = 'rtl', items = [], perSlide = 4, primaryLabel, secondaryLabel, secondaryVariant = 'secondary-outline', onPrimary, onSecondary, ariaLabel }) {
  const mode = useMode();
  const labels = patternLabels(dir);
  const carouselRef = useDgaCarouselA11y();
  // Figma: each carousel slide is a ROW of cards ("Card / RTL=Yes" 1232 wide); dga-carousel shows one child at a time.
  const pages = splitIntoPages(items, perSlide);
  const renderCard = (cardItem) => <ServiceCard key={cardItem.title} dir={dir} item={cardItem} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} secondaryVariant={secondaryVariant} onPrimary={onPrimary} onSecondary={onSecondary} />;
  return (
    <div className="ah-svc-carousel" data-pattern="service-carousel" data-mode={mode} role="region" aria-label={ariaLabel} aria-roledescription={labels.carouselRole}>
      {pages.length > 1 ? (
        <DgaCarousel ref={carouselRef} variant="dots" Dir={dir} showDots steps={1} size="md">
          {pages.map((pageItems, i) => <div className="ah-svc-page" key={i} aria-label={labels.carouselPage(i + 1, pages.length)}>{pageItems.map(renderCard)}</div>)}
        </DgaCarousel>
      ) : <div className="ah-svc-page">{items.map(renderCard)}</div>}
    </div>
  );
}

/** Partner Section — title (Display sm) + row: Button Icon only Secondary-Solid Large (arrow) · logo cards 98×100
 *  (stroke neutral-primary, radius 16, pad 16, Logo Placeholder Small/Top) · Button (arrow). Scrolls the logo row. */
export function PartnersStrip({ dir = 'rtl', title, partners = [], id = 'partners-h' }) {
  const labels = patternLabels(dir);
  const partnerListRef = useRef(null);
  useEffect(() => enhanceScrollStrip(partnerListRef.current), []);
  const scrollPartners = (scrollSign) => partnerListRef.current?.scrollBy({ left: scrollSign * 228 * (dir === 'rtl' ? -1 : 1), behavior: 'smooth' });
  const startIcon = dir === 'rtl' ? 'arrow-right-01' : 'arrow-left-01';
  const endIcon = dir === 'rtl' ? 'arrow-left-01' : 'arrow-right-01';
  return (
    <section className="ah-section ah-section--white" aria-labelledby={id} data-pattern="partners"><div className="ah-container ah-partners">
      <h2 id={id} className="ah-display-sm ah-heading__title">{title}</h2>
      <div className="ah-partners__row">
        <DgaIconButton v2 icon={startIcon} label={labels.previous} variant="secondary-solid" size="lg" onOnClick={() => scrollPartners(-1)} />
        <ul className="ah-partners__list" ref={partnerListRef}>
          {partners.map((partner) => (
            <li className="ah-partner" key={partner.name}>
              <a className="ah-partner__link" href={partner.href || '#'}>
                {partner.logo ? <img src={partner.logo} alt={partner.name} /> : <span className="ah-partner__placeholder" aria-hidden="true" />}
                <span className="ah-partner__name">{partner.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <DgaIconButton v2 icon={endIcon} label={labels.next} variant="secondary-solid" size="lg" onOnClick={() => scrollPartners(1)} />
      </div>
    </div></section>
  );
}

/** "Last Modified" strip above the footer — Feedback Section › Last Modified: pad 16/80, white, Text sm 14 text-default. */
export function LastModified({ dir = 'rtl', date, time }) {
  const labels = patternLabels(dir);
  return (
    <div className="ah-last-modified" data-pattern="last-modified"><div className="ah-container">
      <p className="ah-text-sm">{labels.lastModifiedPrefix}<time>{date}{time ? ` - ${time}` : ''}</time>{time ? labels.saudiTimeSuffix : ''}</p>
    </div></div>
  );
}
