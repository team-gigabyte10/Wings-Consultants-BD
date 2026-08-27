import React, { useRef } from 'react';
import { useCms } from '../context/CmsContext';
import { TeamMember } from '../types';
import { X, GraduationCap, Briefcase, Award, Quote, Building2, CheckCircle2, Camera } from 'lucide-react';

interface TeamDetailModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onBookConsultant: (name: string) => void;
}

export const TeamDetailModal: React.FC<TeamDetailModalProps> = ({
  member,
  onClose,
  onBookConsultant
}) => {
  const { updateTeamMemberPhoto, teamMembers } = useCms();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!member) return null;

  // Use the latest member state from context
  const currentMember = teamMembers.find((m) => m.id === member.id) || member;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateTeamMemberPhoto(currentMember.id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Top Header */}
        <div className="sticky top-0 bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between rounded-t-3xl z-10">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400 shrink-0 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <label
                htmlFor={`modal-photo-${currentMember.id}`}
                className="absolute inset-0 bg-slate-950/70 rounded-2xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-amber-400"
                title="Change Photo"
              >
                <Camera className="w-5 h-5" />
                <span className="text-[9px] text-white font-bold">Upload</span>
              </label>
              <input
                id={`modal-photo-${currentMember.id}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                Wings Consultants Leadership
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {currentMember.name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-300 font-medium">
                {currentMember.designation}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-900">
          
          {/* Qualifications & Specialization Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Qualifications</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {member.qualifications}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 mb-1">
                <Award className="w-4 h-4" />
                <span>Core Specialization</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {member.specialization}
              </p>
            </div>
          </div>

          {/* Full Detailed Biography */}
          <div>
            <h4 className="text-base font-serif font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Professional Profile & Career Background</span>
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {member.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Institutional Affiliations */}
          {member.affiliations && member.affiliations.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Key Professional Affiliations & Roles:
              </h5>
              <div className="flex flex-wrap gap-2">
                {member.affiliations.map((affil, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white px-2.5 py-1 rounded-md border border-slate-200 font-medium text-slate-800"
                  >
                    {affil}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quote Card */}
          {member.quote && (
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <Quote className="w-5 h-5 text-amber-600 mb-1" />
              <p className="text-xs sm:text-sm italic font-serif text-slate-800">
                "{member.quote}"
              </p>
              <p className="text-xs font-bold text-amber-800 mt-1 text-right">
                — {member.quoteAuthor}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Direct session bookings and corporate consulting inquiries available.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookConsultant(member.name);
              }}
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow transition-colors cursor-pointer"
            >
              Request Session with {member.name.split(' ')[0]}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
