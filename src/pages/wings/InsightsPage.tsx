import React from 'react';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ResourcesSection } from '../../wings/ResourcesSection';

export default function WingsInsightsPage() {
  usePageMeta({ title: 'Insights & Guides | Wings Consultants BD', lang: 'en' });

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guides and insights"
        subtitle="Practical guides on tax, industry setup, project profiles and NGO proposals in Bangladesh."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Insights' }]}
      />
      <ResourcesSection />
    </>
  );
}
