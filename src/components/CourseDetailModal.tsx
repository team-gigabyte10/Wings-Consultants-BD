import React from 'react';
import { TrainingStream } from '../types';
import { X, CheckCircle2, BookOpen, Users, Award, Target, ArrowRight } from 'lucide-react';

interface CourseDetailModalProps {
  stream: TrainingStream | null;
  onClose: () => void;
  onBookCourse: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  stream,
  onClose,
  onBookCourse
}) => {
  if (!stream) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between rounded-t-3xl z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full">
              {stream.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
              {stream.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              {stream.shortDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-900">
          
          {/* Courses List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span>Specialized Modules in this Stream ({stream.courses.length})</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stream.courses.map((course, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    onBookCourse(course);
                  }}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all flex items-start justify-between gap-2 group cursor-pointer"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-bold text-amber-600 mt-0.5">{idx + 1}.</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-amber-800">
                      {course}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    Book
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Target Audience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {stream.deliverables && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Tangible Deliverables</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {stream.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {stream.targetAudience && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-600" />
                  <span>Target Participants</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {stream.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Custom in-house corporate cohorts & multi-day workshops available.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookCourse(stream.courses[0]);
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Stream</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
