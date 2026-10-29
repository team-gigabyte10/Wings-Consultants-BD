import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { IndustriesSection } from '../../wings/IndustriesSection';
import { CTASection } from '../../wings/CTASection';

export default function WingsIndustriesPage() {
  const navigate = useNavigate();
  const { openConsultation } = useCms();

  usePageMeta({ title: 'Industries | Wings Consultants BD', lang: 'en' });

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise across Bangladesh"
        subtitle="Advisory shaped by the rules, risks and growth drivers of each industry we serve."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Industries' }]}
      />
      <IndustriesSection onBookConsultation={(name) => openConsultation(name)} />
      <CTASection onBookConsultation={() => openConsultation()} onContactClick={() => navigate('/wings/contact')} />
    </>
  );
}
