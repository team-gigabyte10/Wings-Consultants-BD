import React from 'react';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { FAQSection } from '../../components/FAQSection';

export default function FaqPage() {
  const { openDealerModal } = useCms();

  usePageMeta({ title: 'সাধারণ জিজ্ঞাসা | পিওর এন্টারপ্রাইজ লিমিটেড', lang: 'bn' });

  return (
    <>
      <PageHero eyebrow="FAQ" title="সাধারণ জিজ্ঞাসা" crumbs={[{ label: 'হোম', to: '/' }, { label: 'সাধারণ জিজ্ঞাসা' }]} />
      <FAQSection onOpenDealership={() => openDealerModal()} />
    </>
  );
}
