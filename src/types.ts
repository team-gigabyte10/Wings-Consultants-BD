export type LeadStatus = 'New' | 'Contacted' | 'In Progress' | 'Completed' | 'Archived' | 'Cancelled';

export type LeadItem = ConsultationLead;

export interface CompanyInfo {
  name: string;
  tagline: string;
  motto: string;
  positioning: string;
  subTitle: string;
  mainAddress: string;
  liaisonAddress: string;
  phones: string[];
  email: string;
  website: string;
  businessHours: string;
  stats: {
    corporateClients: string;
    trainingModules: string;
    keyConsultants: string;
    satisfactionRate: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface TrainingStream {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  tag: string;
  color: string;
  courses: string[];
  deliverables?: string[];
  targetAudience?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  qualifications: string;
  specialization: string;
  bioParagraphs: string[];
  quote?: string;
  quoteAuthor?: string;
  image: string;
  affiliations?: string[];
}

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  logoText?: string;
  colorTheme?: string;
}

export interface TrainingObjective {
  title: string;
  description: string;
  icon: string;
}

export interface TrainingMethod {
  title: string;
  description: string;
  icon: string;
}

export interface LearningOutcome {
  action: string;
  outcome: string;
}

export interface InspirationalQuote {
  quote: string;
  author: string;
  category?: string;
}

export interface ConsultationLead {
  id: string;
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  serviceRequired: string;
  participantCount?: string;
  budgetRange?: string;
  projectDescription: string;
  preferredDate?: string;
  preferredTime?: string;
  preferredContactMethod: 'Phone' | 'Email' | 'WhatsApp';
  status: LeadStatus;
  notes?: string;
  assignedStaff?: string;
  userId?: string;
  createdAt: string;
  syncedToFirebase?: boolean;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'client';
  company?: string;
  phone?: string;
  savedCourses?: string[];
  photoURL?: string;
  createdAt: string;
}

export interface CourseRegistration {
  id: string;
  userId?: string;
  courseTitle: string;
  streamId?: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  companyName?: string;
  participantCount: string;
  preferredDate?: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface ClientReview {
  id: string;
  userId?: string;
  userName: string;
  company?: string;
  streamId: string;
  courseTitle?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

