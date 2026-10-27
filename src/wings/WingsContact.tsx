import React, { useState } from 'react';
import { useCms } from './WingsCmsContext';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { companyInfo, addLead, services } = useCms();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Income Tax Consultancy',
    budgetRange: 'BDT 50,000 - 100,000',
    projectDescription: '',
    preferredContactMethod: 'Phone' as 'Phone' | 'Email' | 'WhatsApp',
    mathAnswer: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    ...services.map((s) => s.title),
    'Custom Industrial & Corporate Advisory',
    'Other Business Solution'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.projectDescription.trim()) {
      setErrorMessage('Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    // Simple bot verification (4 + 3 = 7)
    if (formData.mathAnswer.trim() !== '7') {
      setErrorMessage('Please answer the security verification question correctly (4 + 3 = 7).');
      return;
    }

    setIsSubmitting(true);

    try {
      await addLead({
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        serviceRequired: formData.serviceRequired,
        budgetRange: formData.budgetRange,
        projectDescription: formData.projectDescription,
        preferredContactMethod: formData.preferredContactMethod
      });

      setSubmittedSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        serviceRequired: 'Income Tax Consultancy',
        budgetRange: 'BDT 50,000 - 100,000',
        projectDescription: '',
        preferredContactMethod: 'Phone',
        mathAnswer: ''
      });
    } catch (err) {
      setErrorMessage('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>Connect with Our Dhaka Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Get in Touch with Our Experts
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need urgent tax filing, factory setup licensing, or a bankable project profile, our senior consultants in Dhaka are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f2c59] text-white p-7 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[11px] font-black uppercase tracking-widest text-amber-400">
                Corporate Office
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-6">
                Wings Consultants BD
              </h3>

              <div className="space-y-5 text-sm text-slate-200">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Principal Location</strong>
                    <span>{companyInfo.location}</span>
                    <p className="text-xs text-slate-400 mt-0.5">Commercial District, Dhaka</p>
                  </div>
                </div>

                {/* Phone Hotline */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Direct Hotlines</strong>
                    <div className="space-y-1 mt-1">
                      <a
                        href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
                        className="block font-medium hover:text-amber-300 transition-colors"
                      >
                        {companyInfo.phones[0]} (Primary)
                      </a>
                      <a
                        href={`tel:${companyInfo.phones[1]?.replace(/[^0-9+]/g, '')}`}
                        className="block font-medium hover:text-amber-300 transition-colors"
                      >
                        {companyInfo.phones[1]} (Secondary)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Email Communication</strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-amber-300 transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Web Portal</strong>
                    <span className="text-slate-300">{companyInfo.website}</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Business Hours</strong>
                    <span>{companyInfo.businessHours}</span>
                  </div>
                </div>

              </div>

              {/* Security & Confidentiality Tag */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>All discussions held under strict professional NDA</span>
              </div>
            </div>

            {/* Quick WhatsApp Box */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">Prefer Instant Messaging?</p>
                <p className="text-[11px] text-emerald-800">Chat with a consultant on WhatsApp</p>
              </div>
              <a
                href="https://wa.me/8801730349633"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            
            {submittedSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0f2c59]">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                  Thank you. Your consultation request has been received by Wings Consultants BD. Our senior advisory team will contact you shortly via your preferred channel.
                </p>
                <p className="text-xs text-slate-500">
                  Notification dispatched to: <strong className="text-slate-800">{companyInfo.email}</strong>
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f2c59] text-white font-bold text-xs hover:bg-sky-900 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#0f2c59]">
                    Submit a Consultation Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Please provide your project parameters. Fields marked with (<span className="text-rose-500">*</span>) are mandatory.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 2-Col: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammad Rahim"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bengal Agro Industries Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* 2-Col: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (with country code) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* 2-Col: Service Required & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Project Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="Under BDT 50,000">Under BDT 50,000</option>
                      <option value="BDT 50,000 - 100,000">BDT 50,000 - 100,000</option>
                      <option value="BDT 100,000 - 250,000">BDT 100,000 - 250,000</option>
                      <option value="BDT 250,000 - 500,000">BDT 250,000 - 500,000</option>
                      <option value="BDT 500,000+ (Turnkey Industrial)">BDT 500,000+ (Turnkey Industrial)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Description / Specific Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current situation, objective (e.g. bank loan amount, factory location, tax query year), and desired timeline..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Preferred Contact Method & Anti-Spam */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {(['Phone', 'Email', 'WhatsApp'] as const).map((method) => (
                        <label key={method} className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            checked={formData.preferredContactMethod === method}
                            onChange={() => setFormData({ ...formData, preferredContactMethod: method })}
                            className="text-sky-600 focus:ring-sky-500"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Security Question: What is 4 + 3 ? <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Answer with number (7)"
                      value={formData.mathAnswer}
                      onChange={(e) => setFormData({ ...formData, mathAnswer: e.target.value })}
                      className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0f2c59] to-[#0284c7] hover:from-[#081a33] hover:to-[#0369a1] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Wings Consultants BD</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Your details remain strictly confidential and will never be shared.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
