export type InquiryType = 'Product Purchase' | 'Dealership Application' | 'Sister Concern Consultation' | 'Institutional Bulk Salt' | 'General';

export interface CompanyInfo {
  name: string;
  nameBn: string;
  tagline: string;
  taglineBn: string;
  brandMessage: string;
  brandMessageBn: string;
  positioningBn: string;
  establishmentYear: number;
  operationStartDate: string;
  registrationNumber: string;
  governingLaw: string;
  productionCenter: string;
  corporateOffice: string;
  phones: string[];
  email: string;
  website: string;
  businessHoursBn: string;
  stats: {
    saltIndustryEmployment: string;
    shelfLifeYears: string;
    blriPartnership: string;
    nationwideDealers: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface BoardMember {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  designationBn: string;
  qualificationBn?: string;
  bioBn: string;
  avatarBg: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  brandTitleBn: string;
  category: 'edible' | 'cattle' | 'industrial';
  categoryLabelBn: string;
  tagBn: string;
  shortDescBn: string;
  fullDescBn: string;
  keyBenefitsBn: string[];
  specificationsBn: { [key: string]: string };
  shelfLifeBn: string;
  packagingOptionsBn: string[];
  targetAudienceBn: string;
  accentColor: string;
  image: string;
  isPioneer?: boolean;
}

export interface ComplianceCertification {
  id: string;
  titleBn: string;
  authorityBn: string;
  descBn: string;
  badgeBn: string;
  icon: string;
}

export interface SisterConcernInfo {
  name: string;
  nameBn: string;
  subtitleBn: string;
  experienceYears: number;
  descriptionBn: string;
  relationshipBn: string;
  servicesBn: {
    id: string;
    titleBn: string;
    descBn: string;
    featuresBn: string[];
    icon: string;
  }[];
  contactPersonBn: string;
  phones: string[];
  email: string;
  addressBn: string;
  synergyHighlightBn: string;
}

export interface FaqItem {
  id: string;
  questionBn: string;
  answerBn: string;
  categoryBn: string;
}

export interface DealerInquiry {
  fullName: string;
  phone: string;
  email?: string;
  district: string;
  businessName?: string;
  inquiryType: InquiryType;
  interestedProducts: string[];
  message: string;
}
