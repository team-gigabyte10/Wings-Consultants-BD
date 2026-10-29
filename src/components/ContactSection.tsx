import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Factory,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { InquiryType } from '../types';

export const ContactSection: React.FC = () => {
  const { companyInfo, sendInquiry } = useCms();

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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const productOptions = [
    'দেশী আয়োডিনযুক্ত লবণ',
    'সুলভ আয়োডিনযুক্ত লবণ',
    'মিনামিক্স (খনিজ মিশ্রণ)',
    'ইন্ডাস্ট্রিয়াল সল্ট (শিল্প লবণ)',
    'উইংস কনসালট্যান্টস বিডি সেবা'
  ];

  const handleCheckboxChange = (prod: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(prod);
      if (exists) {
        return { ...prev, interestedProducts: prev.interestedProducts.filter((p) => p !== prod) };
      } else {
        return { ...prev, interestedProducts: [...prev.interestedProducts, prod] };
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
        interestedProducts: formData.interestedProducts.length > 0 ? formData.interestedProducts : ['সাধারণ অনুসন্ধান'],
        message: formData.message || 'ডিলারশিপ বা সাধারণ অনুসন্ধানের জন্য আগ্রহ প্রকাশ।'
      });
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        district: '',
        businessName: '',
        inquiryType: 'Dealership Application',
        interestedProducts: [],
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0b1e3b] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-700" />
            <span>যোগাযোগ ও অনুসন্ধান</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            ডিলারশিপ, পাইকারি ক্রয়, প্রাতিষ্ঠানিক লবণ সরবরাহ অথবা সহযোগী প্রতিষ্ঠান উইংস কনসালট্যান্টস বিডি’র সেবার জন্য নিচের ফর্মটি পূরণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Factory & Office Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cox's Bazar Plant Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">উৎপাদন কেন্দ্র (Plant)</h3>
                  <span className="text-xs text-sky-600 font-semibold">লবণ পরিশোধন ও মিনামিক্স কারখানা</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {companyInfo.productionCenter}
              </p>
              <div className="mt-3 text-xs text-slate-500">
                কক্সবাজার সমুদ্র উপকূলের স্থানীয় লবণচাষীদের থেকে সরাসরি সংগৃহীত ও পরিশোধিত।
              </div>
            </div>

            {/* Corporate Office Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">কর্পোরেট প্রধান কার্যালয়</h3>
                  <span className="text-xs text-amber-600 font-semibold">রেজিস্টার্ড ও বাণিজ্যিক দপ্তর</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {companyInfo.corporateOffice}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{companyInfo.phones[0]} (প্রধান হটলাইন)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{companyInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{companyInfo.businessHoursBn}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-900">জরুরি হোয়াটসঅ্যাপ সহায়তা</div>
                  <div className="text-xs text-emerald-700">সরাসরি প্রতিনিধির সাথে মেসেজে কথা বলুন</div>
                </div>
              </div>
              <a
                href={companyInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-xs"
              >
                হোয়াটসঅ্যাপ
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Bengali Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold text-[#0b1e3b] mb-1">
              ডিলারশিপ বা সাধারণ অনুসন্ধানের ফর্ম
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              আপনার সঠিক তথ্য প্রদান করুন, আমাদের সংশ্লিষ্ট সেলস বা কনসালটেন্সি টিম দ্রুত যোগাযোগ করবে।
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">
                  WhatsApp-এ আপনার বার্তা প্রস্তুত
                </h4>
                <p className="text-xs text-emerald-800">
                  নতুন ট্যাবে WhatsApp খুলেছে। বার্তাটি পাঠাতে সেখানে Send চাপুন। WhatsApp না খুললে সরাসরি ফোন করুন: {companyInfo.phones[0]}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-3 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                >
                  আরেকটি অনুসন্ধান পাঠান
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      আপনার পূর্ণ নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="যেমন: মো: কামরুল হাসান"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      ব্যবসার নাম / প্রতিষ্ঠান (যদি থাকে)
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="যেমন: মেসার্স হাসান ট্রেডার্স"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      জেলা / অঞ্চল
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="যেমন: বগুড়া, চট্টগ্রাম, ঢাকা"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    অনুসন্ধানের ধরন (Inquiry Type)
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as InquiryType })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden bg-white"
                  >
                    <option value="Dealership Application">ডিলারশিপের জন্য আবেদন</option>
                    <option value="Product Purchase">পাইকারি পণ্য ক্রয় (Retail/Wholesale)</option>
                    <option value="Institutional Bulk Salt">ইন্ডাস্ট্রিয়াল / প্রাতিষ্ঠানিক লবণ সরবরাহ</option>
                    <option value="Sister Concern Consultation">সহযোগী প্রতিষ্ঠান: Wings Consultants BD পরামর্শ</option>
                    <option value="General">অন্যান্য সাধারণ অনুসন্ধান</option>
                  </select>
                </div>

                {/* Interested Products Checkboxes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    আগ্রহী পণ্য বা সেবা নির্বাচন করুন:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {productOptions.map((prod, pIdx) => (
                      <label key={pIdx} className="flex items-center gap-2 cursor-pointer text-slate-700">
                        <input
                          type="checkbox"
                          checked={formData.interestedProducts.includes(prod)}
                          onChange={() => handleCheckboxChange(prod)}
                          className="rounded-sm text-sky-600 focus:ring-sky-500"
                        />
                        <span>{prod}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    আপনার বার্তা বা বিস্তারিত তথ্য
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="আপনার চাহিদা, প্রত্যাশিত পরিমাণ বা নির্দিষ্ট প্রশ্ন লিখুন..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#0b1e3b] text-white font-bold text-sm hover:bg-sky-900 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp-এ বার্তা পাঠান</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
