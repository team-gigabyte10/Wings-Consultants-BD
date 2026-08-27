import React, { useState, useEffect } from 'react';
import { useCms } from '../context/CmsContext';
import { useAuth } from '../context/AuthContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Users,
  Building,
  Sparkles,
  BookOpen,
  CloudCheck,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { companyInfo, addLead, trainingStreams } = useCms();
  const { user, userProfile } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Sales and Customer Service',
    participantCount: '15-20 Participants',
    projectDescription: '',
    preferredDate: '',
    preferredTime: '',
    preferredContactMethod: 'Phone' as 'Phone' | 'Email' | 'WhatsApp'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user || userProfile) {
      setFormData((prev) => ({
        ...prev,
        fullName: prev.fullName || userProfile?.displayName || user?.displayName || '',
        email: prev.email || userProfile?.email || user?.email || '',
        company: prev.company || userProfile?.company || '',
        phone: prev.phone || userProfile?.phone || ''
      }));
    }
  }, [user, userProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) return;

    setIsSubmitting(true);
    try {
      await addLead(
        {
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          serviceRequired: formData.serviceRequired,
          participantCount: formData.participantCount,
          projectDescription: formData.projectDescription,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          preferredContactMethod: formData.preferredContactMethod
        },
        user?.uid
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Schedule a Corporate Training Session
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ready to elevate your team's skills, leadership, and operational performance? Reach out to our lead consultants today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Authentic Addresses & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Head Office
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 font-medium">
                    {companyInfo.mainAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Liaison Office Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Liaison Office
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 font-medium">
                    {companyInfo.liaisonAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Direct Mobile Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Direct Contact Numbers
                  </h3>
                  <div className="mt-1 space-y-1">
                    <a
                      href={`tel:${companyInfo.phones[0]}`}
                      className="text-base font-bold text-amber-400 hover:underline block"
                    >
                      {companyInfo.phones[0]}
                    </a>
                    <a
                      href={`tel:${companyInfo.phones[1]}`}
                      className="text-base font-bold text-amber-400 hover:underline block"
                    >
                      {companyInfo.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Official E-mail
                  </h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-semibold text-sky-400 hover:underline mt-1 block"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quote of David Ogilvy (from Page 14) */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-5 rounded-2xl border border-amber-500/30">
              <p className="text-xs sm:text-sm font-serif italic text-amber-200">
                "If we hire people who are smaller, we shall become a company of dwarfs."
              </p>
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest mt-1">
                — David Ogilvy
              </div>
            </div>

          </div>

          {/* Right Column: Training Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700 shadow-2xl backdrop-blur-md">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Training Request Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Wings Consultants. Your inquiry has been successfully registered. Our Lead Consultant will contact you at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-white">
                      Request Corporate Training or Advisory
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill out the form below to receive a tailored module outline and facilitation proposal.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Md. Aminul Islam"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Paragon Group / BRAC"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 01711-XXXXXX"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Official E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. aminul@company.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Training Domain / Topic
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {trainingStreams.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Expected Participants
                      </label>
                      <select
                        value={formData.participantCount}
                        onChange={(e) => setFormData({ ...formData, participantCount: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="1-10 Executives">1-10 Executives (Intensive)</option>
                        <option value="15-25 Participants">15-25 Participants (Workshop)</option>
                        <option value="30-50 Participants">30-50 Participants (Departmental)</option>
                        <option value="50+ Full Enterprise">50+ Full Enterprise Conclave</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Specific Objectives / Operational Challenges
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Describe what specific outcomes or skill gaps your team aims to address..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Training Inquiry'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
