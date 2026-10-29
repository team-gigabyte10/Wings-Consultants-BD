export interface CompanyInfo {
  name: string;
  tagline: string;
  brandMessage: string;
  positioning: string;
  experienceYears: number;
  experienceBadge: string;
  location: string;
  address: string;
  phones: string[];
  email: string;
  website: string;
  businessHours: string;
  stats: {
    yearsExperience: string;
    completedProjects: string;
    industrySectors: string;
    clientSatisfaction: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  tag: string;
  keyServices: string[];
  deliverables: string[];
  industriesServed: string[];
  benefits: string[];
  ctaText: string;
  image: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  keyConsultingAreas: string[];
  caseHighlight?: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface ConsultingStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  industry: string;
  clientCategory: string;
  servicesProvided: string[];
  description: string;
  completionYear: string;
  image: string;
  isFeatured?: boolean;
  confidentialNotice?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  position: string;
  company: string;
  industry: string;
  testimonial: string;
  rating: number;
  date?: string;
}

export interface ResourceArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Tax & Compliance' | 'Business Setup' | 'Industry Setup' | 'Investment' | 'Project Development' | 'NGO Consultancy' | 'Manufacturing' | 'Business Growth';
  excerpt: string;
  content: string;
  readTime: string;
  publishDate: string;
  author: string;
  downloadableDocName?: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationRequest {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budgetRange?: string;
  projectDescription: string;
  preferredDate?: string;
  preferredTime?: string;
  preferredContactMethod: 'Phone' | 'Email' | 'WhatsApp';
}
