import React from 'react';
import { DgaLink, DgaButtonV2 } from 'platformscode-new-react';
/**
 * Section heading — Figma Home template "Title" row (About / Services / News sections):
 *   Title row  H · CENTER · gap 32: title (Display sm 30/38 bold, text-default) + optional ACTION BUTTON
 *              (Button / Size=Large, Style=Secondary-Outline — e.g. «عرض الكل», «إجراء ثانوي») on the opposite side;
 *   description below (Text md 16/24, text-default, max 720).
 * `action` is what the DGA template uses (`action.variant`: 'secondary-outline' default; the Service template's Related services uses 'subtle'). `link` (text link) is kept for pages whose Figma uses a Link instead.
 */
export function SectionHeading({ title, description, action, link, center = false, level = 2, id }) {
  const HeadingTag = `h${level}`;
  return (
    <div className={`ah-heading ${center ? 'ah-heading--center' : ''}`} data-pattern="section-heading">
      <div className="ah-heading__row">
        <HeadingTag id={id} className="ah-display-sm ah-heading__title">{title}</HeadingTag>
        {action && <DgaButtonV2 variant={action.variant || 'secondary-outline'} size="lg" label={action.label} onOnClick={action.onClick} />}
        {/* DgaLink iconType renders the raw icon name as text in core 0.0.52 (PKG-LINK-01) → link without icon */}
        {!action && link && <DgaLink label={link.label} url={link.href || '#'} icon={false} onOnClick={link.onClick} />}
      </div>
      {description && <p className="ah-text-md ah-heading__desc">{description}</p>}
    </div>
  );
}
