import React from 'react';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { FAQSection } from '../../wings/WingsFAQ';

export default function WingsFaqPage() {
  const { openConsultation } = useCms();

  usePageMeta({ title: 'FAQ | Wings Consultants BD', lang: 'en' });

  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" crumbs={[{ label: 'Home', to: '/wings' }, { label: 'FAQ' }]} />
      <FAQSection onBookConsultation={() => openConsultation()} />
    </>
  );
}
