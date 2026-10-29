import React from 'react';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ContactSection } from '../../components/ContactSection';

export default function ContactPage() {
  usePageMeta({
    title: 'যোগাযোগ | পিওর এন্টারপ্রাইজ লিমিটেড',
    description: 'ডিলারশিপ, পাইকারি ক্রয় বা প্রাতিষ্ঠানিক লবণ সরবরাহের জন্য পিওর এন্টারপ্রাইজ লিমিটেডের সাথে যোগাযোগ করুন।',
    lang: 'bn'
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="যোগাযোগ করুন"
        subtitle="কক্সবাজার কারখানা বা ঢাকা কর্পোরেট অফিসে আমাদের সাথে যোগাযোগ করুন।"
        crumbs={[{ label: 'হোম', to: '/' }, { label: 'যোগাযোগ' }]}
      />
      <ContactSection />
    </>
  );
}
