import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { AboutSection } from '../../components/AboutSection';
import { BoardOfDirectors } from '../../components/BoardOfDirectors';
import { ComplianceSection } from '../../components/ComplianceSection';

export default function AboutPage() {
  const navigate = useNavigate();
  const { openDealerModal } = useCms();

  usePageMeta({
    title: 'আমাদের সম্পর্কে | পিওর এন্টারপ্রাইজ লিমিটেড',
    description: 'পিওর এন্টারপ্রাইজ লিমিটেডের ইতিহাস, লক্ষ্য, পরিচালনা পর্ষদ এবং মান ও লাইসেন্স।',
    lang: 'bn'
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="আমাদের সম্পর্কে"
        subtitle="কোম্পানি আইন ১৯৯৪-এর অধীন নিবন্ধিত প্রতিষ্ঠান। জাতির পুষ্টি ও টেকসই শিল্প উন্নয়নে অঙ্গীকারবদ্ধ।"
        crumbs={[{ label: 'হোম', to: '/' }, { label: 'আমাদের সম্পর্কে' }]}
      />
      <AboutSection onOpenDealership={() => openDealerModal()} onOpenSisterConcern={() => navigate('/wings')} />
      <BoardOfDirectors />
      <ComplianceSection />
    </>
  );
}
