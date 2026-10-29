import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ServicesSection } from '../../wings/ServicesSection';

export default function WingsServicesPage() {
  const navigate = useNavigate();
  const { openConsultation } = useCms();

  usePageMeta({
    title: 'Services | Wings Consultants BD',
    description: 'Tax consultancy, company profiles, NGO programmes, project profiles and raw material supply.',
    lang: 'en'
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our practice areas"
        subtitle="End-to-end advisory for businesses, industries and development organisations in Bangladesh."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Services' }]}
      />
      <ServicesSection
        onSelectService={(s) => navigate(`/wings/services/${s.slug}`)}
        onBookConsultationForService={(title) => openConsultation(title)}
      />
    </>
  );
}
