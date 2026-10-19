import React from 'react';
import { DgaMetric, DgaFeaturedIcon } from 'platformscode-new-react';
import { useMode } from './mode.jsx';
import { Reveal } from './Reveal.jsx';
/**
 * Statistics.
 * variant="template" (DEFAULT — portal pages: home, about, service landing): the DGA page-template "About us" figures
 *   (Figma templates/home-page.md › "About us Section" › Cards; raw: data/templates/home-page.json): per figure a featured icon
 *   (xl · brand · light · circle) above a large number and a short label, centred, 224 px cells, gap 32, no shadow / border.
 * variant="metric" — dashboards only: Exact → real DgaMetric (web/metric.md); Enhanced/Creative → stat tiles [AHMED HOUSE].
 * Values must be real, sourced numbers (pass `source`), never invented.
 */
export function StatsStrip({ items = [], source, variant = 'template' }) {
  const mode = useMode();
  if (variant === 'template') {
    return (
      <div className="ah-stats-t" data-pattern="stats" data-variant="template" data-mode={mode}>
        {items.map((statistic) => (
          <Reveal className="ah-stat-t" key={statistic.label} role="group" aria-label={`${statistic.value} ${statistic.label}`}>
            <DgaFeaturedIcon icon={{ name: statistic.icon || 'user', variant: 'stroke' }} color="brand" size="xl" variant="light" circle />
            <div className="ah-stat-t__content"><div className="ah-stat-t__value">{statistic.value}</div><div className="ah-stat-t__label">{statistic.label}</div></div>
          </Reveal>
        ))}
        {source && <p className="ah-stats-t__source ah-text-sm ah-muted">{source}</p>}
      </div>
    );
  }
  if (mode === 'dga-exact') {
    return (
      <div className="ah-stats" data-pattern="stats" data-variant="metric" data-mode={mode}>
        {items.map((statistic) => <DgaMetric key={statistic.label} label={statistic.label} percentage={String(statistic.value)} showChart={false} showActions={false} showMoreButton={false} showFeaturedIcon={false} showInfo={false} /* PKG-METRIC-01: featuredIcon prints as raw text; PKG-METRIC-02: the change indicator is hard-coded to "100%" in 0.0.52 — hidden so no invented trend is shown */ />)}
      </div>
    );
  }
  return (
    <div className="ah-stats" data-pattern="stats" data-variant="metric" data-mode={mode} data-house="stat-tiles">
      {items.map((statistic) => <Reveal className="ah-stat" key={statistic.label} role="group" aria-label={statistic.label}><div className="ah-stat__value">{statistic.value}</div><div className="ah-stat__label ah-text-md">{statistic.label}</div>{source && <div className="ah-text-sm ah-muted">{source}</div>}</Reveal>)}
    </div>
  );
}
