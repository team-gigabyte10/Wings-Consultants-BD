import React, { useState, useEffect } from 'react';
import { useCms } from '../context/CmsContext';
import { X, Send, CheckCircle2, Sparkles, Store, Building } from 'lucide-react';
import { InquiryType } from '../types';

interface DealerModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const DealerModal: React.FC<DealerModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct
}) => {
  const { sendInquiry, companyInfo } = useCms();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    businessName: '',
    inquiryType: 'Dealership Application' as InquiryType,
    interestedProducts: [] as string[],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        interestedProducts: [preselectedProduct],
        message: `${preselectedProduct} পণ্যের ডিলারশিপ বা পাইকারি ক্রয় সংক্রান্ত তথ্যের জন্য যোগাযোগ করতে আগ্রহী।`
      }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const productOptions = [
    'দেশী আয়োডিনযুক্ত লবণ',
    'সুলভ আয়োডিনযুক্ত লবণ',
    'মিনামিক্স (খনিজ মিশ্রণ)',
    'ইন্ডাস্ট্রিয়াল সল্ট (শিল্প লবণ)'
  ];

  const handleCheckbox = (item: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(item);
      if (exists) {
        return { ...prev, interestedProducts: prev.interestedProducts.filter((p) => p !== item) };
      } else {
        return { ...prev, interestedProducts: [...prev.interestedProducts, item] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);
    try {
      sendInquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        district: formData.district || 'উল্লেখ নেই',
        businessName: formData.businessName,
        inquiryType: formData.inquiryType,
        interestedProducts: formData.interestedProducts.length > 0 ? formData.interestedProducts : ['ডিলারশিপ'],
        message: formData.message || 'অনলাইন ডিলারশিপ ফর্মের মাধ্যমে আবেদন।'
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#07172b] to-[#0f2c59] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-2">
            <Store className="w-3.5 h-3.5" />
            <span>ডিলারশিপ ও পাইকারি আবেদন</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold">
            পিওর এন্টারপ্রাইজ ডিলার নিয়োগ ফর্ম
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            কক্সবাজার কারখানা থেকে সরাসরি ৬৪ জেলায় নিরবচ্ছিন্ন পণ্য সরবরাহের নিশ্চয়তা।
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">
                WhatsApp-এ আপনার আবেদন প্রস্তুত
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                নতুন ট্যাবে WhatsApp খুলেছে। আবেদনটি পাঠাতে সেখানে Send চাপুন। WhatsApp না খুললে সরাসরি ফোন করুন: {companyInfo.phones[0]}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#0b1e3b] text-white text-xs font-bold shadow-md"
              >
                ঠিক আছে
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="যেমন: জনাব আরিফুল ইসলাম"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="০১৭১১-XXXXXX"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    দোকান বা ব্যবসা প্রতিষ্ঠানের নাম
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="যেমন: ভাই ভাই ট্রেডার্স"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    আবেদিত জেলা ও উপজেলা
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="যেমন: সিরাজগঞ্জ সদর"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Products selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  যেসব পণ্যের ডিলারশিপে আগ্রহী:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {productOptions.map((prod, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <input
                        type="checkbox"
                        checked={formData.interestedProducts.includes(prod)}
                        onChange={() => handleCheckbox(prod)}
                        className="rounded-sm text-sky-600 focus:ring-sky-500"
                      />
                      <span className="font-medium">{prod}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  আপনার মন্তব্য বা অভিজ্ঞতা
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="বর্তমান ব্যবসার ধরন বা প্রত্যাশিত বিক্রয় পরিমাণ লিখুন..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp-এ আবেদন পাঠান</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
