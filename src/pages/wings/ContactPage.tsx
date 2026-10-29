import React from 'react';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ContactSection } from '../../wings/WingsContact';

export default function WingsContactPage() {
  usePageMeta({
    title: 'Contact | Wings Consultants BD',
    description: 'Contact Wings Consultants BD in Dhaka for a consultation.',
    lang: 'en'
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our advisory team"
        subtitle="Call, email or send an inquiry. A senior consultant will respond within one business day."
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Contact' }]}
      />
      <ContactSection />
    </>
  );
}
