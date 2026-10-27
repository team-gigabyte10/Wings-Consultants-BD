import React from 'react';
import { ProductItem } from '../types';
import { X, CheckCircle2, Package, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOrderOrDealership: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOrderOrDealership
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header Bar */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${product.accentColor} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            {product.categoryLabelBn} • {product.tagBn}
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
            {product.nameBn}
          </h2>
          <div className="text-xs text-white/90 font-mono mt-0.5">
            {product.name}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              পণ্য পরিচিতি ও কার্যকারিতা
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.fullDescBn}
            </p>
          </div>

          {/* Key Benefits List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              সুবিধাসমূহ ও পুষ্টিগুণ
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {product.keyBenefitsBn.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              ল্যাব ও টেকনিক্যাল স্পেসিফিকেশন
            </h4>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 divide-y divide-slate-200/60 text-xs sm:text-sm">
              {Object.entries(product.specificationsBn).map(([key, val], idx) => (
                <div key={idx} className="py-2 flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-600">{key}:</span>
                  <span className="font-bold text-slate-900 text-right">{val}</span>
                </div>
              ))}
              <div className="py-2 flex items-center justify-between gap-4">
                <span className="font-semibold text-slate-600">সংরক্ষণ মেয়াদ:</span>
                <span className="font-bold text-amber-700 text-right">{product.shelfLifeBn}</span>
              </div>
            </div>
          </div>

          {/* Packaging Options */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              উপলব্ধ প্যাকেজিং সাইজ
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.packagingOptionsBn.map((pack, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200"
                >
                  {pack}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <button
            onClick={() => {
              onClose();
              onOrderOrDealership(product.nameBn);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#0b1e3b] text-white font-bold text-xs sm:text-sm hover:bg-sky-900 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>এই পণ্যের জন্য ডিলারশিপ বা অর্ডার</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </div>
  );
};
