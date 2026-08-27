import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCms } from '../context/CmsContext';
import {
  X,
  User,
  Building,
  Phone,
  Mail,
  Bookmark,
  Calendar,
  Clock,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourseForBooking: (courseTitle: string) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  onSelectCourseForBooking
}) => {
  const { user, userProfile, logout, updateProfileDetails, toggleSaveCourse } = useAuth();
  const { leads, registrations } = useCms();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(userProfile?.displayName || '');
  const [company, setCompany] = useState(userProfile?.company || '');
  const [phone, setPhone] = useState(userProfile?.phone || '');
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen || !user) return null;

  // Filter leads and registrations submitted by this user or matching email
  const userLeads = leads.filter(
    (l) => (l.userId && l.userId === user.uid) || (l.email && user.email && l.email.toLowerCase() === user.email.toLowerCase())
  );

  const userRegistrations = registrations.filter(
    (r) => (r.userId && r.userId === user.uid) || (r.userEmail && user.email && r.userEmail.toLowerCase() === user.email.toLowerCase())
  );

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateProfileDetails({
        displayName,
        company,
        phone
      });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 rounded-t-3xl flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-xl">
              {userProfile?.displayName ? userProfile.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-serif font-bold text-white">
                  {userProfile?.displayName || user.displayName || 'Client Account'}
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                  {userProfile?.role === 'admin' ? 'Staff / Admin' : 'Client Profile'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {user.email || 'Anonymous Guest Session'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Profile Overview / Edit Form */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-600" />
                <span>Account Information</span>
              </h4>
              {!isEditing ? (
                <button
                  onClick={() => {
                    setDisplayName(userProfile?.displayName || '');
                    setCompany(userProfile?.company || '');
                    setPhone(userProfile?.phone || '');
                    setIsEditing(true);
                  }}
                  className="text-xs font-bold text-amber-700 hover:underline cursor-pointer"
                >
                  Edit Details
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-500 hover:underline cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Name</label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold shadow cursor-pointer"
                >
                  {isSaving ? 'Saving...' : 'Update Profile'}
                </button>
              </form>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Organization:</span>
                  <span className="font-semibold text-slate-800">{userProfile?.company || '—'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Contact Phone:</span>
                  <span className="font-semibold text-slate-800">{userProfile?.phone || '—'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Firebase UID:</span>
                  <span className="font-mono text-[10px] text-slate-500">{user.uid.slice(0, 10)}...</span>
                </div>
              </div>
            )}
          </div>

          {/* Bookmarked Courses */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-amber-600" />
                <span>Saved Training Modules ({userProfile?.savedCourses?.length || 0})</span>
              </h4>
            </div>

            {(!userProfile?.savedCourses || userProfile.savedCourses.length === 0) ? (
              <p className="text-xs text-slate-400 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                You haven't bookmarked any modules yet. Click the bookmark icon next to any course in the catalog to save it for quick booking.
              </p>
            ) : (
              <div className="space-y-2">
                {userProfile.savedCourses.map((cTitle, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{cTitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectCourseForBooking(cTitle);
                        }}
                        className="text-xs font-bold text-amber-600 hover:text-amber-800 bg-white px-2.5 py-1 rounded border border-slate-200 cursor-pointer"
                      >
                        Book
                      </button>
                      <button
                        onClick={() => toggleSaveCourse(cTitle)}
                        className="text-slate-400 hover:text-red-500 p-1 cursor-pointer"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User's Inquiries & Registrations History */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Your Training Requests & Live Status</span>
            </h4>

            {userLeads.length === 0 && userRegistrations.length === 0 ? (
              <p className="text-xs text-slate-400 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                No active training requests found under your account. Inquire about any training module to see real-time updates from our team here.
              </p>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto">
                {userLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-800">{lead.serviceRequired}</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Submitted on {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        lead.status === 'New'
                          ? 'bg-amber-100 text-amber-800'
                          : lead.status === 'Contacted'
                          ? 'bg-blue-100 text-blue-800'
                          : lead.status === 'In Progress'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logout Action */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Signed in via Firebase Authentication
            </span>
            <button
              onClick={async () => {
                await logout();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
