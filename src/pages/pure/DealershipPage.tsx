import React from 'react';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { DealerNetworkSection } from '../../components/DealerNetworkSection';

export default function DealershipPage() {
  const { openDealerModal } = useCms();

  usePageMeta({
    title: 'ডিলারশিপ | পিওর এন্টারপ্রাইজ লিমিটেড',
    description: 'দেশের ৬৪ জেলায় পিওর এন্টারপ্রাইজ লিমিটেডের ডিলার নেটওয়ার্কে যুক্ত হোন।',
    lang: 'bn'
  });

  return (
    <>
      <PageHero
        eyebrow="Dealership"
        title="ডিলারশিপ ও সাপ্লাই চেইন"
        subtitle="কক্সবাজার কারখানা থেকে সরাসরি ৬৪ জেলায় নিরবচ্ছিন্ন পণ্য সরবরাহ। আমাদের ডিলার নেটওয়ার্কে যুক্ত হোন।"
        crumbs={[{ label: 'হোম', to: '/' }, { label: 'ডিলারশিপ' }]}
      >
        <button
          onClick={() => openDealerModal()}
          className="px-6 py-3 rounded-lg bg-accent text-slate-950 font-bold hover:brightness-110 transition cursor-pointer"
        >
          ডিলারশিপ আবেদন করুন
        </button>
      </PageHero>
      <DealerNetworkSection onOpenDealershipModal={() => openDealerModal()} />
    </>
  );
}
