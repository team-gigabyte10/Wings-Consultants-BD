import React from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCms } from '../../context/CmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { Container } from '../../ui/Container';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { products, openDealerModal } = useCms();
  const product = products.find((p) => p.slug === slug);

  usePageMeta({
    title: product ? `${product.nameBn} | পিওর এন্টারপ্রাইজ লিমিটেড` : 'পিওর এন্টারপ্রাইজ লিমিটেড',
    description: product?.shortDescBn,
    lang: 'bn'
  });

  if (!product) return <Navigate to="/products" replace />;

  const others = products.filter((p) => p.id !== product.id);

  return (
    <>
      <PageHero
        eyebrow={`${product.categoryLabelBn} • ${product.tagBn}`}
        title={product.nameBn}
        subtitle={product.shortDescBn}
        crumbs={[{ label: 'হোম', to: '/' }, { label: 'পণ্য ও ব্র্যান্ড', to: '/products' }, { label: product.nameBn }]}
      >
        <button
          onClick={() => openDealerModal(product.nameBn)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-slate-950 font-bold hover:brightness-110 transition cursor-pointer"
        >
          এই পণ্যের জন্য ডিলারশিপ বা অর্ডার
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-brand mb-3">পণ্য পরিচিতি ও কার্যকারিতা</h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{product.fullDescBn}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-4">সুবিধাসমূহ ও পুষ্টিগুণ</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.keyBenefitsBn.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-3">লক্ষ্য গ্রাহক</h2>
              <p className="text-slate-700 leading-relaxed">{product.targetAudienceBn}</p>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <img
              src={product.image}
              alt={product.nameBn}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-slate-200 shadow-card"
            />

            <div className="rounded-2xl border border-slate-200 shadow-card overflow-hidden">
              <h2 className="px-5 py-3 bg-brand text-white font-bold">ল্যাব ও টেকনিক্যাল স্পেসিফিকেশন</h2>
              <dl className="divide-y divide-slate-200 text-sm">
                {Object.entries(product.specificationsBn).map(([key, val]) => (
                  <div key={key} className="px-5 py-3 flex justify-between gap-4">
                    <dt className="text-slate-600">{key}</dt>
                    <dd className="font-semibold text-slate-900 text-right">{val}</dd>
                  </div>
                ))}
                <div className="px-5 py-3 flex justify-between gap-4">
                  <dt className="text-slate-600">সংরক্ষণ মেয়াদ</dt>
                  <dd className="font-semibold text-amber-700 text-right">{product.shelfLifeBn}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">উপলব্ধ প্যাকেজিং</h2>
              <div className="flex flex-wrap gap-2">
                {product.packagingOptionsBn.map((pack) => (
                  <span key={pack} className="px-3 py-1.5 rounded-lg bg-brand-soft text-brand text-xs font-bold">
                    {pack}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <Container>
          <h2 className="text-2xl font-bold text-brand mb-6">অন্যান্য পণ্য</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group block bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden hover:border-brand/40 transition-colors"
              >
                <img src={p.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
                <div className="p-5">
                  <div className="text-xs font-semibold text-slate-500">{p.categoryLabelBn}</div>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-brand">{p.nameBn}</h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">{p.shortDescBn}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
