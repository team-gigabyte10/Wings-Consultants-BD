import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ProductItem } from '../types';
import {
  Sparkles,
  ShieldCheck,
  Award,
  ChevronRight,
  CheckCircle2,
  Package,
  Clock,
  FlaskConical,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenDealershipForProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenDealershipForProduct
}) => {
  const { products } = useCms();
  const [activeCategory, setActiveCategory] = useState<'all' | 'edible' | 'cattle' | 'industrial'>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>আমাদের ৪টি শীর্ষ ব্র্যান্ড ও পণ্য পোর্টফোলিও</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            গুণমান ও পুষ্টির নির্ভরযোগ্য সমাধান
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            কক্সবাজারের নিজস্ব পরিশোধন কমপ্লেক্সে প্রস্তুত দেশী ও সুলভ লবণ, বিএলআরআই অনুমোদিত মিনামিক্স এবং টেক্সটাইল-ডাইং খাতের ইন্ডাস্ট্রিয়াল সল্ট।
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0b1e3b] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            সকল পণ্য (৪টি ব্র্যান্ড)
          </button>
          <button
            onClick={() => setActiveCategory('edible')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'edible'
                ? 'bg-[#0b1e3b] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            ভোজ্য লবণ (দেশী ও সুলভ)
          </button>
          <button
            onClick={() => setActiveCategory('cattle')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'cattle'
                ? 'bg-[#0b1e3b] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            প্রাণিসম্পদ পুষ্টি (মিনামিক্স)
          </button>
          <button
            onClick={() => setActiveCategory('industrial')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'industrial'
                ? 'bg-[#0b1e3b] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            শিল্প লবণ (Industrial Salt)
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Banner */}
                <div className={`p-6 bg-gradient-to-r ${prod.accentColor} text-white relative`}>
                  {prod.isPioneer && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                      পায়োনিয়ার পণ্য
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    {prod.categoryLabelBn} • {prod.tagBn}
                  </div>
                  <h3 className="text-2xl font-bold mt-1 text-white">
                    {prod.nameBn}
                  </h3>
                  <div className="text-xs text-white/90 font-mono mt-0.5">
                    {prod.name}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {prod.shortDescBn}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-[#0b1e3b] uppercase tracking-wider">
                      প্রধান সুবিধাসমূহ:
                    </div>
                    {prod.keyBenefitsBn.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Specs Grid */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>মেয়াদ: <strong>{prod.shelfLifeBn}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Package className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>প্যাকেজিং: <strong>{prod.packagingOptionsBn[0]}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-sky-900 bg-sky-100/70 hover:bg-sky-200/80 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>বিস্তারিত স্পেসিফিকেশন</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDealershipForProduct(prod.nameBn)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0b1e3b] text-white hover:bg-sky-900 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>অর্ডার বা ডিলারশিপ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Future Expansion Plans Strip (From PDF Page 3) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#07172b] via-[#0b2247] to-[#0f2c59] text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>ভবিষ্যত পণ্য সম্প্রসারণ ও উদ্ভাবন পরিকল্পনা</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                বাজার সম্প্রসারণ ও নতুন পণ্য লাইন
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                পিওর এন্টারপ্রাইজ লিমিটেড শীঘ্রই বাজারে আনতে চলেছে বিশেষায়িত <strong>রান্নার লবণ (Cooking Salt)</strong> এবং ডেইরি গরুর জন্য বিশেষায়িত মিনামিক্স ভ্যারিয়েন্ট। একই সাথে ফিড মিল, পোল্ট্রি ও মৎস্য খামারে প্রাতিষ্ঠানিক সরবরাহ ব্যাপকভাবে বৃদ্ধির কাজ চলমান রয়েছে।
              </p>
            </div>
            <button
              onClick={() => onOpenDealershipForProduct('নতুন উদ্ভাবনী পণ্যসমূহ')}
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
            >
              প্রাতিষ্ঠানিক অগ্রিম যোগাযোগ
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
