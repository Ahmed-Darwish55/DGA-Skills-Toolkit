import React from 'react';
import { FeedbackRating } from '../dga-skills/patterns/react/index.js';
/**
 * @kind section
 * Rating Section Template - Platforms Code — generated from lib/templates/templates-map.json (rating-section) by tools/new_template.py.
 * Sections: Rating stars · Comment · Submit.
 * Every TODO(content) must be replaced with real content; run tools/qa/run.mjs on the page before claiming any gate.
 */
export function RatingSectionPage({ dir = 'rtl' }) {
  return (
    <div className="ah-page">
      {/* Figma section: Rating stars */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
      {/* Figma section: Comment */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
      {/* Figma section: Submit */}
      <FeedbackRating dir={dir} withRating onSubmit={() => {}} />
    </div>
  );
}
