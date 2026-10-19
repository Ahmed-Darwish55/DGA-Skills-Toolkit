import React from 'react';
import { DgaCard } from 'platformscode-new-react';
import { Reveal } from './Reveal.jsx';
/** Cards & grid — real DgaCard items in a responsive grid (12/6/4 column rhythm). Figma: web/card.md. */
export function CardGrid({ items = [], effect = 'stroke', primaryLabel, onPrimary, ariaLabel, columns }) {
  return (
    <ul className={`ah-cards ${columns === 3 ? 'ah-cards--3' : ''}`} data-pattern="card-grid" aria-label={ariaLabel} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((cardItem) => (
        <Reveal as="li" key={cardItem.title}>
          <DgaCard cardTitle={cardItem.title} description={cardItem.description} showTitle showDescription={!!cardItem.description} effect={effect}
            showFeaturedIcon={!!cardItem.icon} featuredIcon={cardItem.icon ? { name: cardItem.icon, variant: 'stroke' } : undefined} image={cardItem.image} showPrimaryAction={!!(cardItem.primaryLabel || primaryLabel)}
            primaryActionLabel={cardItem.primaryLabel || primaryLabel} showSecondaryAction={!!cardItem.secondaryLabel} secondaryActionLabel={cardItem.secondaryLabel}
            onPrimaryAction={() => (cardItem.onPrimary || onPrimary)?.(cardItem)} />
        </Reveal>
      ))}
    </ul>
  );
}
