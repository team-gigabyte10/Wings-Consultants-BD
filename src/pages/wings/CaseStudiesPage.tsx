import React from 'react';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ProjectsPortfolio } from '../../wings/ProjectsPortfolio';
import { CaseStudiesSection } from '../../wings/CaseStudiesSection';
import { TestimonialsSection } from '../../wings/TestimonialsSection';

export default function WingsCaseStudiesPage() {
  const { openConsultation } = useCms();

  usePageMeta({ title: 'Projects & Case Studies | Wings Consultants BD', lang: 'en' });

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Projects and proven results"
        subtitle="Selected engagements and the measurable outcomes they delivered for our clients."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Case Studies' }]}
      />
      <ProjectsPortfolio onBookConsultation={(topic) => openConsultation(topic)} />
      <CaseStudiesSection onBookConsultation={(topic) => openConsultation(topic)} />
      <TestimonialsSection />
    </>
  );
}
