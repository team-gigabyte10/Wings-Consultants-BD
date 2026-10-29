import React from 'react';

/** Structured data for search engines. `<` is escaped so the JSON cannot close the script tag. */
export const JsonLd: React.FC<{ data: object }> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }}
  />
);
