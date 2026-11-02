import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { Hero } from '../../wings/WingsHero';
import { TrustStats } from '../../wings/WingsTrustStats';
import { AboutSection } from '../../wings/WingsAbout';
import { ServicesSection } from '../../wings/ServicesSection';
import { CoursesCatalog } from '../../wings/CoursesCatalog';
import { IndustriesSection } from '../../wings/IndustriesSection';
import { WhyChooseUs } from '../../wings/WhyChooseUs';
import { ExpertsSection } from '../../wings/ExpertsSection';
import { ClientsSection } from '../../wings/ClientsSection';
import { TestimonialsSection } from '../../wings/TestimonialsSection';
import { QuotesSection } from '../../wings/QuotesSection';
import { CTASection } from '../../wings/CTASection';

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
      <AboutSection onBookConsultation={() => openConsultation('Strategic Corporate Planning')} />
      <ServicesSection
        onSelectService={(s) => navigate(`/wings/services/${s.slug}`)}
        onBookConsultationForService={(title) => openConsultation(title)}
      />
      <CoursesCatalog />
      <IndustriesSection onBookConsultation={(indName) => openConsultation(indName)} />
      <WhyChooseUs />
      <ExpertsSection />
      <ClientsSection />
      <TestimonialsSection />
      <QuotesSection />
      <CTASection onBookConsultation={() => openConsultation()} onContactClick={() => navigate('/wings/contact')} />
    </>
  );
}
