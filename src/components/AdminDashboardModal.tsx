import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  X,
  ShieldAlert,
  Trash2,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  RotateCcw,
  Search,
  Filter
} from 'lucide-react';
import { LeadStatus } from '../types';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
  const { leads, updateLeadStatus, deleteLead, resetToDefaults } = useCms();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  if (!isOpen) return null;

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      (lead.businessName && lead.businessName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      lead.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 bg-[#07172b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                পিওর এন্টারপ্রাইজ এডমিন ও লিড ম্যানেজমেন্ট
              </h2>
              <p className="text-xs text-slate-400">
                ডিলারশিপ আবেদন ও কাস্টমার অনুসন্ধানসমূহ ({leads.length} টি মোট রেকর্ড)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (confirm('আপনি কি ডিফল্ট ডেমো ডাটায় রিসেট করতে চান?')) {
                  resetToDefaults();
                }
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>রিসেট ডাটা</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="নাম, ফোন বা জেলা দিয়ে খুঁজুন..."
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:outline-hidden"
            >
              <option value="All">সকল স্ট্যাটাস</option>
              <option value="New">নতুন (New)</option>
              <option value="Contacted">যোগাযোগকৃত (Contacted)</option>
              <option value="In Progress">চলমান (In Progress)</option>
              <option value="Completed">সম্পন্ন (Completed)</option>
            </select>
          </div>
        </div>

        {/* Leads Table / List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {filteredLeads.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              কোনো অনুসন্ধানের তথ্য পাওয়া যায়নি।
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-sky-300 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {lead.fullName}
                    </span>
                    {lead.businessName && (
                      <span className="text-xs text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded-md">
                        {lead.businessName}
                      </span>
                    )}
                    <span className="text-xs text-slate-500">
                      ({lead.district})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg border cursor-pointer ${
                        lead.status === 'New'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : lead.status === 'Contacted'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : lead.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      <option value="New">New (নতুন)</option>
                      <option value="Contacted">Contacted (যোগাযোগকৃত)</option>
                      <option value="In Progress">In Progress (চলমান)</option>
                      <option value="Completed">Completed (সম্পন্ন)</option>
                      <option value="Cancelled">Cancelled (বাতিল)</option>
                    </select>

                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                      title="মুছে ফেলুন"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <a href={`tel:${lead.phone}`} className="hover:underline font-semibold">
                      {lead.phone}
                    </a>
                  </div>
                  {lead.email && (
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-600" />
                      <span>{lead.email}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>তারিখ: {new Date(lead.createdAt).toLocaleDateString('bn-BD')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-700">ধরন:</span>
                    <span>{lead.inquiryType}</span>
                  </div>
                </div>

                {/* Interested products & message */}
                <div className="pt-2 border-t border-slate-100 text-xs">
                  <div className="font-medium text-slate-500 mb-1">
                    আগ্রহী পণ্য: <strong className="text-slate-800">{lead.interestedProducts.join(', ')}</strong>
                  </div>
                  <p className="text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    "{lead.message}"
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
