import React from 'react';
import { useCms } from '../context/CmsContext';
import { Users, Award, ShieldCheck, Briefcase, GraduationCap } from 'lucide-react';

export const BoardOfDirectors: React.FC = () => {
  const { boardMembers } = useCms();

  return (
    <section id="board" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0b1e3b] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>নেতৃত্ব ও পরিচালনা পর্ষদ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            সম্মানিত পরিচালনা পর্ষদ (Board of Directors)
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            পিওর এন্টারপ্রাইজ লিমিটেডের সুযোগ্য পরিচালনা পর্ষদের দিকনির্দেশনা ও ব্যবস্থাপনা পরিচালকের প্রত্যক্ষ তত্ত্বাবধানে প্রতিষ্ঠানটির শিল্প ও বাণিজ্যিক কার্যক্রম সফলভাবে পরিচালিত হচ্ছে।
          </p>
        </div>

        {/* 8 Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-5 hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Badge with Initials */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${member.avatarBg} text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-105 transition-transform`}
                  >
                    {member.nameBn.split(' ').slice(-1)[0]?.[0] || 'পি'}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0b1e3b]">
                    {member.roleBn}
                  </span>
                </div>

                {/* Name & Designation */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {member.nameBn}
                </h3>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {member.name}
                </div>

                {member.qualificationBn && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold">
                    <GraduationCap className="w-3 h-3 text-amber-700" />
                    <span>{member.qualificationBn}</span>
                  </div>
                )}

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {member.bioBn}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>পিওর এন্টারপ্রাইজ লি:</span>
                <span className="text-sky-700 font-semibold">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supervision Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-sky-50/70 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0b1e3b]">ব্যবস্থাপনা পরিচালকের প্রত্যক্ষ তত্ত্বাবধান</h4>
              <p className="text-xs text-slate-600">কক্সবাজার প্ল্যান্টের উৎপাদন এবং দেশব্যাপী সেলস টিম ব্যবস্থাপনা পরিচালকের তত্ত্বাবধানে পরিচালিত।</p>
            </div>
          </div>
          <span className="text-xs font-bold text-sky-800 bg-white px-3 py-1.5 rounded-lg border border-sky-200">
            কক্সবাজার • ঢাকা
          </span>
        </div>

      </div>
    </section>
  );
};
