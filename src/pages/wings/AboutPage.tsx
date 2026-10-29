import React from 'react';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { AboutSection } from '../../wings/WingsAbout';
import { ConsultingProcess } from '../../wings/ConsultingProcess';

export default function WingsAboutPage() {
  const { openConsultation } = useCms();

  usePageMeta({
    title: 'About Us | Wings Consultants BD',
    description: 'A Dhaka-based consultancy with 25 years of experience, and a sister concern of Pure Enterprise Limited.',
    lang: 'en'
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="25 years of trusted business advisory"
        subtitle="A Dhaka-based consultancy and a sister concern of Pure Enterprise Limited."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'About' }]}
      />
      <AboutSection onBookConsultation={() => openConsultation('Strategic Corporate Planning')} />
      <ConsultingProcess onBookConsultation={() => openConsultation()} />
    </>
  );
}
