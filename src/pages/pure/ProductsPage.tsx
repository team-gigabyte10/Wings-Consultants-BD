import React from 'react';
import { useNavigate } from 'react-router';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { ProductsSection } from '../../components/ProductsSection';

export default function ProductsPage() {
  const navigate = useNavigate();
  const { openDealerModal } = useCms();

  usePageMeta({
    title: 'পণ্য ও ব্র্যান্ড | পিওর এন্টারপ্রাইজ লিমিটেড',
    description: 'দেশী ও সুলভ আয়োডিনযুক্ত লবণ, BLRI প্রযুক্তির মিনামিক্স এবং ইন্ডাস্ট্রিয়াল সল্ট।',
    lang: 'bn'
  });

  return (
    <>
      <PageHero
        eyebrow="Products & Brands"
        title="পণ্য ও ব্র্যান্ড"
        subtitle="কক্সবাজারের নিজস্ব পরিশোধন কমপ্লেক্সে প্রস্তুত মানসম্মত লবণ ও প্রাণিসম্পদ পুষ্টি পণ্য।"
        crumbs={[{ label: 'হোম', to: '/' }, { label: 'পণ্য ও ব্র্যান্ড' }]}
      />
      <ProductsSection
        onSelectProduct={(p) => navigate(`/products/${p.slug}`)}
        onOpenDealershipForProduct={(name) => openDealerModal(name)}
      />
    </>
  );
}
