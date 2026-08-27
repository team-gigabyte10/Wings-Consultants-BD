import React, { useRef } from 'react';
import { useCms } from '../context/CmsContext';
import { TeamMember } from '../types';
import {
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
  Quote,
  CheckCircle2,
  Users,
  Building2,
  Camera,
  Upload
} from 'lucide-react';

interface TeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMember }) => {
  const { teamMembers, updateTeamMemberPhoto } = useCms();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, memberId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateTeamMemberPhoto(memberId, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="team" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            The Building Blocks: Our People
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Distinguished Consultants & Leadership
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            "Client at our hearts and talent in our brains, we establish relationships that are professional, win-win and long-lasting. We strongly believe that nothing is more important than talented brains."
          </p>
        </div>

        {/* Lead Consultant Spotlight (Md Monirul Hasan) */}
        {teamMembers.length > 0 && (
          <div className="mb-14 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-7 sm:p-10 shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo & Badge */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <div className="relative group inline-block w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl mx-auto">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider shadow">
                    Lead Consultant
                  </div>

                  {/* Upload Overlay Button */}
                  <label
                    htmlFor="monirul-photo-upload"
                    className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-opacity cursor-pointer text-white p-3 text-center"
                    title="Click to select or upload original image"
                  >
                    <Camera className="w-6 h-6 text-amber-400" />
                    <span className="text-[11px] font-semibold bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full shadow">
                      Change / Upload Photo
                    </span>
                    <span className="text-[9px] text-slate-300">Supports JPG, PNG</span>
                  </label>
                  <input
                    id="monirul-photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handlePhotoUpload(e, teamMembers[0].id)}
                  />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mt-4">
                  {teamMembers[0].name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-400 font-semibold">
                  {teamMembers[0].designation}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {teamMembers[0].qualifications}
                </p>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-8">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  {teamMembers[0].role}
                </div>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {teamMembers[0].bioParagraphs[0]}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {teamMembers[0].bioParagraphs[1]}
                </p>

                {/* Quote and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <div className="bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 max-w-lg">
                    <p className="text-xs italic text-amber-200">
                      "{teamMembers[0].quote}"
                    </p>
                    <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 block">
                      — {teamMembers[0].quoteAuthor}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectMember(teamMembers[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 px-3.5 py-2 rounded-lg border border-amber-500/30 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Full Biography</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Rest of Consultant Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Member Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-amber-700 leading-tight">
                      {member.designation}
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {member.qualifications}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 mb-3 line-clamp-2">
                  <strong>Specialization:</strong> {member.specialization}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {member.bioParagraphs[0]}
                </p>

                {member.quote && (
                  <div className="bg-amber-50/70 border-l-2 border-amber-500 p-2.5 rounded-r text-[11px] italic text-slate-700 mb-4">
                    "{member.quote}"
                    <span className="block font-bold text-amber-900 text-[10px] not-italic mt-0.5">
                      — {member.quoteAuthor}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Profile Details
                </span>
                <button
                  onClick={() => onSelectMember(member)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Administration Pillars (Page 5) */}
        <div className="mt-14 bg-slate-100 rounded-2xl p-6 border border-slate-200 text-center max-w-2xl mx-auto">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            Administration & Finance Operations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="text-sm font-bold text-slate-900">Nil Ratan Barai</div>
              <div className="text-xs text-amber-700 font-medium">Senior Officer, Accounts</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="text-sm font-bold text-slate-900">Kalpona Rani Chakroborti</div>
              <div className="text-xs text-amber-700 font-medium">Officer, Admin</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
