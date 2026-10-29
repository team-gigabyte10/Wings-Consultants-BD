import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { Hero } from '../../components/Hero';
import { TrustStats } from '../../components/TrustStats';
import { ProductsSection } from '../../components/ProductsSection';
import { SisterConcernSection } from '../../components/SisterConcernSection';
import { DealerNetworkSection } from '../../components/DealerNetworkSection';
import { CtaBand } from '../../ui/CtaBand';

export default function HomePage() {
  const navigate = useNavigate();
  const { companyInfo, openDealerModal } = useCms();

  usePageMeta({
    title: 'পিওর এন্টারপ্রাইজ লিমিটেড | Pure Enterprise Limited',
    description:
      'পিওর এন্টারপ্রাইজ লিমিটেড — বিশুদ্ধ আয়োডিনযুক্ত লবণ (দেশী ও সুলভ), প্রাণিসম্পদের খনিজ মিশ্রণ মিনামিক্স এবং ইন্ডাস্ট্রিয়াল সল্ট। কক্সবাজার থেকে দেশব্যাপী সরবরাহ।',
    lang: 'bn'
  });

  return (
    <>
      <Hero
        onExploreProducts={() => navigate('/products')}
        onOpenDealership={() => openDealerModal()}
        onOpenSisterConcern={() => navigate('/wings')}
      />
      <TrustStats />
      <ProductsSection
        onSelectProduct={(p) => navigate(`/products/${p.slug}`)}
        onOpenDealershipForProduct={(name) => openDealerModal(name)}
      />
      <SisterConcernSection onOpenSisterConcernModal={() => navigate('/wings')} />
      <DealerNetworkSection onOpenDealershipModal={() => openDealerModal()} />
      <CtaBand
        title="ডিলারশিপ বা পাইকারি ক্রয়ে আগ্রহী?"
        text="কক্সবাজার কারখানা থেকে সরাসরি ৬৪ জেলায় পণ্য সরবরাহ। আবেদন করুন, আমাদের সেলস টিম আপনার সাথে যোগাযোগ করবে।"
        primary={{ label: 'ডিলারশিপ আবেদন', onClick: () => openDealerModal() }}
        secondary={{ label: companyInfo.phones[0], href: `tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}` }}
      />
    </>
  );
}
