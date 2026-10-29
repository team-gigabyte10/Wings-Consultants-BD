import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { Hero } from '../../wings/WingsHero';
import { TrustStats } from '../../wings/WingsTrustStats';
import { ServicesSection } from '../../wings/ServicesSection';
import { WhyChooseUs } from '../../wings/WhyChooseUs';
import { TestimonialsSection } from '../../wings/TestimonialsSection';
import { CTASection } from '../../wings/CTASection';
import { ExpertsSection } from '../../wings/ExpertsSection';

export default function WingsHomePage() {
  const navigate = useNavigate();
  const { openConsultation } = useCms();

  usePageMeta({
    title: 'Wings Consultants BD | Tax, Industry Setup & Business Consultancy in Bangladesh',
    description:
      'Wings Consultants BD — 25 years of tax, industry setup, investment documentation, project profile and NGO consultancy in Dhaka, Bangladesh.',
    lang: 'en'
  });

  return (
    <>
      <Hero onExploreServices={() => navigate('/wings/services')} onBookConsultation={() => openConsultation()} />
      <TrustStats />
      <ServicesSection
        onSelectService={(s) => navigate(`/wings/services/${s.slug}`)}
        onBookConsultationForService={(title) => openConsultation(title)}
      />
      <WhyChooseUs />
      <TestimonialsSection />
      <ExpertsSection compact />
      <CTASection onBookConsultation={() => openConsultation()} onContactClick={() => navigate('/wings/contact')} />
    </>
  );
}
