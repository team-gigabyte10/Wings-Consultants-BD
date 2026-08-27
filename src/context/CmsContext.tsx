import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CompanyInfo,
  TrainingStream,
  TeamMember,
  ClientPartner,
  TrainingObjective,
  TrainingMethod,
  LearningOutcome,
  InspirationalQuote,
  ConsultationLead,
  LeadStatus,
  CourseRegistration,
  ClientReview
} from '../types';
import {
  initialCompanyInfo,
  initialTrainingStreams,
  initialTeamMembers,
  initialClientPartners,
  initialTrainingObjectives,
  initialTrainingMethods,
  initialLearningOutcomes,
  initialInspirationalQuotes,
  initialLeads
} from '../data/initialData';
import {
  db,
  collection,
  doc,
  setDoc,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc
} from '../lib/firebase';

interface CmsContextType {
  companyInfo: CompanyInfo;
  trainingStreams: TrainingStream[];
  teamMembers: TeamMember[];
  clientPartners: ClientPartner[];
  trainingObjectives: TrainingObjective[];
  trainingMethods: TrainingMethod[];
  learningOutcomes: LearningOutcome[];
  inspirationalQuotes: InspirationalQuote[];
  
  // Realtime Firestore Data Collections
  leads: ConsultationLead[];
  registrations: CourseRegistration[];
  reviews: ClientReview[];
  isFirestoreConnected: boolean;
  lastSyncedAt: Date | null;

  // Actions
  updateCompanyInfo: (updated: Partial<CompanyInfo>) => void;
  updateTeamMemberPhoto: (id: string, newPhoto: string) => void;
  addLead: (lead: Omit<ConsultationLead, 'id' | 'createdAt' | 'status'>, userId?: string) => Promise<string>;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;

  // Registrations & Reviews
  addCourseRegistration: (registration: Omit<CourseRegistration, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateRegistrationStatus: (id: string, status: CourseRegistration['status']) => Promise<void>;
  addReview: (review: Omit<ClientReview, 'id' | 'createdAt'>) => Promise<string>;

  // Selected State
  selectedStreamForDetail: TrainingStream | null;
  setSelectedStreamForDetail: (stream: TrainingStream | null) => void;
  selectedTeamMemberForDetail: TeamMember | null;
  setSelectedTeamMemberForDetail: (member: TeamMember | null) => void;
  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;
  selectedCourseForBooking: string;
  setSelectedCourseForBooking: (courseName: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;

  resetToDefaults: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COMPANY: 'wings_profile_company_v2',
  TEAM: 'wings_profile_team_v2',
  LEADS: 'wings_profile_leads_v2',
  REGS: 'wings_profile_regs_v2',
  REVIEWS: 'wings_profile_reviews_v2'
};

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPANY);
      return saved ? JSON.parse(saved) : initialCompanyInfo;
    } catch {
      return initialCompanyInfo;
    }
  });

  const [trainingStreams] = useState<TrainingStream[]>(initialTrainingStreams);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TEAM);
      return saved ? JSON.parse(saved) : initialTeamMembers;
    } catch {
      return initialTeamMembers;
    }
  });
  const [clientPartners] = useState<ClientPartner[]>(initialClientPartners);
  const [trainingObjectives] = useState<TrainingObjective[]>(initialTrainingObjectives);
  const [trainingMethods] = useState<TrainingMethod[]>(initialTrainingMethods);
  const [learningOutcomes] = useState<LearningOutcome[]>(initialLearningOutcomes);
  const [inspirationalQuotes] = useState<InspirationalQuote[]>(initialInspirationalQuotes);

  // Firestore Collections State
  const [leads, setLeads] = useState<ConsultationLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
      return saved ? JSON.parse(saved) : initialLeads;
    } catch {
      return initialLeads;
    }
  });

  const [registrations, setRegistrations] = useState<CourseRegistration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviews, setReviews] = useState<ClientReview[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return saved ? JSON.parse(saved) : [
        {
          id: 'rev-1',
          userName: 'Khandaker Rafiqul Islam',
          company: 'Renata Agro Industries',
          streamId: 'sales',
          courseTitle: 'Sales Techniques for Better Performance',
          rating: 5,
          comment: 'Wings Consultants transformed our regional sales force mindset. The experiential case studies and practical frameworks delivered immediate double-digit conversion gains.',
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
        },
        {
          id: 'rev-2',
          userName: 'Nazmul Haque',
          company: 'Bengal Group of Industries',
          streamId: 'leadership',
          courseTitle: 'Swarm Behavior & Leadership in Turbulence',
          rating: 5,
          comment: 'High caliber corporate facilitation. Mr. Monirul Hasan and team bring genuine battlefield wisdom from multinational FMCGs to the training room.',
          createdAt: new Date(Date.now() - 86400000 * 12).toISOString()
        },
        {
          id: 'rev-3',
          userName: 'Syeda Fatima',
          company: 'BRAC Enterprises',
          streamId: 'communication',
          courseTitle: 'Win-Win Negotiation Skills',
          rating: 5,
          comment: 'Outstanding workshop. The role-playing exercises and reasoned decision-making tools were top notch.',
          createdAt: new Date(Date.now() - 86400000 * 18).toISOString()
        }
      ];
    } catch {
      return [];
    }
  });

  const [isFirestoreConnected, setIsFirestoreConnected] = useState<boolean>(true);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(new Date());

  // Modal & Selection States
  const [selectedStreamForDetail, setSelectedStreamForDetail] = useState<TrainingStream | null>(null);
  const [selectedTeamMemberForDetail, setSelectedTeamMemberForDetail] = useState<TeamMember | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>('Sales Techniques for Better Performance');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to LocalStorage as safety net
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(companyInfo));
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
      localStorage.setItem(STORAGE_KEYS.REGS, JSON.stringify(registrations));
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
  }, [companyInfo, leads, registrations, reviews]);

  // Firestore Realtime Listeners
  useEffect(() => {
    // 1. Leads collection listener
    const leadsCol = collection(db, 'leads');
    const unsubscribeLeads = onSnapshot(
      leadsCol,
      (snapshot) => {
        setIsFirestoreConnected(true);
        setLastSyncedAt(new Date());
        if (!snapshot.empty) {
          const fetchedLeads: ConsultationLead[] = snapshot.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: docSnap.id,
              fullName: data.fullName || '',
              company: data.company || '',
              email: data.email || '',
              phone: data.phone || '',
              serviceRequired: data.serviceRequired || '',
              participantCount: data.participantCount || '',
              projectDescription: data.projectDescription || '',
              preferredDate: data.preferredDate || '',
              preferredTime: data.preferredTime || '',
              preferredContactMethod: data.preferredContactMethod || 'Phone',
              status: (data.status as LeadStatus) || 'New',
              notes: data.notes || '',
              assignedStaff: data.assignedStaff || '',
              userId: data.userId || '',
              createdAt: data.createdAt || new Date().toISOString(),
              syncedToFirebase: true
            };
          });
          
          // Sort newest first
          fetchedLeads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setLeads(fetchedLeads);
        }
      },
      (error) => {
        console.warn('Firestore leads snapshot listener warning (using cached state):', error);
      }
    );

    // 2. Registrations collection listener
    const regsCol = collection(db, 'registrations');
    const unsubscribeRegs = onSnapshot(
      regsCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const fetchedRegs: CourseRegistration[] = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...(docSnap.data() as Omit<CourseRegistration, 'id'>)
          }));
          fetchedRegs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setRegistrations(fetchedRegs);
        }
      },
      (error) => {
        console.warn('Firestore registrations snapshot warning:', error);
      }
    );

    // 3. Reviews collection listener
    const reviewsCol = collection(db, 'reviews');
    const unsubscribeReviews = onSnapshot(
      reviewsCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const fetchedReviews: ClientReview[] = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...(docSnap.data() as Omit<ClientReview, 'id'>)
          }));
          fetchedReviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setReviews(fetchedReviews);
        }
      },
      (error) => {
        console.warn('Firestore reviews snapshot warning:', error);
      }
    );

    return () => {
      unsubscribeLeads();
      unsubscribeRegs();
      unsubscribeReviews();
    };
  }, []);

  const updateCompanyInfo = (updated: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => ({ ...prev, ...updated }));
  };

  const updateTeamMemberPhoto = (memberId: string, newPhoto: string) => {
    setTeamMembers((prev) => {
      const updated = prev.map((m) => (m.id === memberId ? { ...m, image: newPhoto } : m));
      try {
        localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not cache team member photo update:', e);
      }
      return updated;
    });
  };

  const addLead = async (
    leadData: Omit<ConsultationLead, 'id' | 'createdAt' | 'status'>,
    userId?: string
  ): Promise<string> => {
    const createdAt = new Date().toISOString();
    const payload = {
      ...leadData,
      status: 'New' as LeadStatus,
      userId: userId || '',
      createdAt
    };

    try {
      const docRef = await addDoc(collection(db, 'leads'), payload);
      const newLead: ConsultationLead = {
        ...payload,
        id: docRef.id,
        syncedToFirebase: true
      };
      setLeads((prev) => [newLead, ...prev.filter((l) => l.id !== docRef.id)]);
      return docRef.id;
    } catch (err) {
      console.warn('Failed to write directly to Firestore (saving local):', err);
      const localId = `lead-${Date.now()}`;
      const fallbackLead: ConsultationLead = {
        ...payload,
        id: localId,
        syncedToFirebase: false
      };
      setLeads((prev) => [fallbackLead, ...prev]);
      return localId;
    }
  };

  const updateLeadStatus = async (id: string, status: LeadStatus, notes?: string) => {
    // Optimistic UI
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status, notes: notes !== undefined ? notes : lead.notes } : lead
      )
    );

    try {
      const leadRef = doc(db, 'leads', id);
      await updateDoc(leadRef, {
        status,
        ...(notes !== undefined ? { notes } : {})
      });
    } catch (err) {
      console.warn('Firestore lead update error:', err);
    }
  };

  const deleteLead = async (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    try {
      const leadRef = doc(db, 'leads', id);
      await deleteDoc(leadRef);
    } catch (err) {
      console.warn('Firestore delete error:', err);
    }
  };

  const addCourseRegistration = async (
    regData: Omit<CourseRegistration, 'id' | 'createdAt' | 'status'>
  ): Promise<string> => {
    const createdAt = new Date().toISOString();
    const payload = {
      ...regData,
      status: 'Pending' as const,
      createdAt
    };

    try {
      const docRef = await addDoc(collection(db, 'registrations'), payload);
      const newReg: CourseRegistration = {
        ...payload,
        id: docRef.id
      };
      setRegistrations((prev) => [newReg, ...prev]);
      return docRef.id;
    } catch (err) {
      console.warn('Failed to write registration to Firestore:', err);
      const localId = `reg-${Date.now()}`;
      const localReg: CourseRegistration = {
        ...payload,
        id: localId
      };
      setRegistrations((prev) => [localReg, ...prev]);
      return localId;
    }
  };

  const updateRegistrationStatus = async (id: string, status: CourseRegistration['status']) => {
    setRegistrations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
    try {
      const docRef = doc(db, 'registrations', id);
      await updateDoc(docRef, { status });
    } catch (err) {
      console.warn('Firestore update registration error:', err);
    }
  };

  const addReview = async (
    reviewData: Omit<ClientReview, 'id' | 'createdAt'>
  ): Promise<string> => {
    const createdAt = new Date().toISOString();
    const payload = {
      ...reviewData,
      createdAt
    };

    try {
      const docRef = await addDoc(collection(db, 'reviews'), payload);
      const newReview: ClientReview = {
        ...payload,
        id: docRef.id
      };
      setReviews((prev) => [newReview, ...prev]);
      return docRef.id;
    } catch (err) {
      console.warn('Failed to write review to Firestore:', err);
      const localId = `rev-${Date.now()}`;
      const localReview: ClientReview = {
        ...payload,
        id: localId
      };
      setReviews((prev) => [localReview, ...prev]);
      return localId;
    }
  };

  const resetToDefaults = () => {
    setCompanyInfo(initialCompanyInfo);
    setLeads(initialLeads);
    localStorage.clear();
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo,
        trainingStreams,
        teamMembers,
        clientPartners,
        trainingObjectives,
        trainingMethods,
        learningOutcomes,
        inspirationalQuotes,
        leads,
        registrations,
        reviews,
        isFirestoreConnected,
        lastSyncedAt,
        updateCompanyInfo,
        updateTeamMemberPhoto,
        addLead,
        updateLeadStatus,
        deleteLead,
        addCourseRegistration,
        updateRegistrationStatus,
        addReview,
        selectedStreamForDetail,
        setSelectedStreamForDetail,
        selectedTeamMemberForDetail,
        setSelectedTeamMemberForDetail,
        isConsultationModalOpen,
        setIsConsultationModalOpen,
        selectedCourseForBooking,
        setSelectedCourseForBooking,
        isAdminOpen,
        setIsAdminOpen,
        resetToDefaults
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
