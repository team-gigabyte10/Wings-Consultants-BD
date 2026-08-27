import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { useAuth } from '../context/AuthContext';
import { Star, MessageSquare, Plus, CheckCircle2, User, Building, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { reviews, addReview, trainingStreams } = useCms();
  const { user, userProfile, setIsAuthModalOpen } = useAuth();

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [company, setCompany] = useState('');
  const [streamId, setStreamId] = useState('sales');
  const [courseTitle, setCourseTitle] = useState('Sales Techniques for Better Performance');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenForm = () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setUserName(userProfile?.displayName || user.displayName || '');
    setCompany(userProfile?.company || '');
    setShowReviewForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment || !userName) return;

    setIsSubmitting(true);
    try {
      await addReview({
        userId: user?.uid,
        userName,
        company,
        streamId,
        courseTitle,
        rating,
        comment
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowReviewForm(false);
        setComment('');
      }, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Participant & Corporate Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
              Client Testimonials & Outcomes
            </h2>
            <div className="w-20 h-1 bg-amber-500 mt-4 rounded-full" />
          </div>

          <div>
            <button
              onClick={handleOpenForm}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Submit Corporate Review</span>
            </button>
          </div>
        </div>

        {/* Review Form Modal / Drawer */}
        {showReviewForm && (
          <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-amber-300 shadow-xl animate-fadeIn">
            {submitted ? (
              <div className="py-6 text-center text-emerald-700">
                <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-emerald-600" />
                <h4 className="text-base font-bold">Review Published to Cloud Database!</h4>
                <p className="text-xs text-slate-500 mt-1">Thank you for sharing your experience.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    Share Your Training Feedback
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="text-xs text-slate-400 hover:text-slate-700"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Md. Hasan"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Paragon Group"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                    <div className="flex items-center gap-1 py-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="cursor-pointer text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              rating >= star ? 'fill-amber-400' : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Training Stream</label>
                    <select
                      value={streamId}
                      onChange={(e) => setStreamId(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      {trainingStreams.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Course Title</label>
                    <input
                      type="text"
                      value={courseTitle}
                      onChange={(e) => setCourseTitle(e.target.value)}
                      placeholder="e.g. Sales Techniques for Better Performance"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Detailed Review & Key Takeaway *</label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe how the training contributed to team productivity, behavioral change, or operational performance..."
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow cursor-pointer"
                >
                  {isSubmitting ? 'Publishing to Cloud...' : 'Publish Testimonial'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {new Date(rev.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.userName}</h4>
                  <p className="text-[10px] text-amber-700 font-semibold">{rev.company || 'Corporate Client'}</p>
                </div>
                {rev.courseTitle && (
                  <span className="text-[9px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 max-w-[120px] truncate">
                    {rev.courseTitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
