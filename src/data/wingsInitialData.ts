import {
  CompanyInfo,
  ServiceItem,
  IndustryItem,
  WhyChoosePillar,
  ConsultingStep,
  ProjectItem,
  CaseStudyItem,
  TestimonialItem,
  ResourceArticle,
  FaqItem,
  ExpertProfile,
  TrainingStream,
  ClientPartner,
  InspirationalQuote
} from '../wingsTypes';

export const initialCompanyInfo: CompanyInfo = {
  name: "Wings Consultants BD",
  tagline: "Your Vision, Our Expertise",
  brandMessage: "Your Success, Our Commitment",
  positioning: "A Professional Consultancy Firm",
  experienceYears: 25,
  experienceBadge: "25 YEARS OF EXPERIENCE YOU CAN TRUST",
  location: "Dhaka, Bangladesh",
  address: "Motijheel / Gulshan Commercial Area, Dhaka, Bangladesh",
  phones: ["+880 1730-349633", "+880 1914-502714"],
  email: "wingsconsultantsbd@gmail.com",
  website: "www.wingsconsultantsbd.com",
  businessHours: "Saturday – Thursday: 9:00 AM – 6:00 PM (Friday Closed)",
  stats: {
    yearsExperience: "25+",
    completedProjects: "100+",
    industrySectors: "Multiple",
    clientSatisfaction: "100%"
  },
  socialLinks: {
    facebook: "https://facebook.com/wingsconsultantsbd",
    linkedin: "https://linkedin.com/company/wingsconsultantsbd",
    whatsapp: "+8801730349633"
  }
};

export const initialServices: ServiceItem[] = [
  {
    id: "income-tax-consultancy",
    slug: "income-tax-consultancy",
    title: "Income Tax Consultancy",
    tag: "Taxation & Compliance",
    shortDesc: "TIN Registration, Tax Return, Tax Clearance, Tax Advice for Individuals & Organizations.",
    fullDesc: "Comprehensive taxation management ensuring statutory compliance, tax optimization, hassle-free filings, and proactive audit advisory for companies, executives, and high-net-worth individuals in Bangladesh under the Income Tax Act.",
    icon: "Receipt",
    keyServices: [
      "e-TIN Registration & Amendments",
      "Individual & Corporate Tax Return Preparation",
      "Tax Clearance Certificate (TCC) Processing",
      "NBR Audit Representation & Appeal Support",
      "Withholding Tax & TDS Advisory",
      "Tax Planning & Wealth Statement Compilation",
      "Corporate Tax Assessment & Settlement",
      "Annual Regulatory Tax Compliance Filing"
    ],
    deliverables: [
      "Accurate Computation Sheets & e-Filing Acknowledgements",
      "Official Tax Clearance Certificates",
      "Audit Defense Dossier & NBR Representation",
      "Year-round Corporate Withholding Tax Schedules"
    ],
    industriesServed: ["Corporate Businesses", "SMEs & Startups", "High-Net-Worth Individuals", "NGOs & Non-Profits", "Exporters & Importers"],
    benefits: [
      "Zero penalty risk through timely regulatory compliance",
      "Optimized allowable deductions & legal rebates",
      "Full representation before Taxes Zones and appellate tribunals"
    ],
    ctaText: "Explore Tax Services",
    image: "/images/stock/photo-1554224155-8d04cb21cd6c.webp"
  },
  {
    id: "company-profile-pitch-deck",
    slug: "company-profile-pitch-deck",
    title: "Company Profile & Pitch Deck",
    tag: "Investment & Documentation",
    shortDesc: "For Investment, Business Proposals, Financial Projections & Feasibility.",
    fullDesc: "Strategic corporate profile writing and high-impact investor pitch decks designed for securing institutional funding, bank credit facilities, joint venture partnerships, and vendor pre-qualifications.",
    icon: "Presentation",
    keyServices: [
      "Corporate Company Profiles (Print & Digital)",
      "High-Conversion Investor Pitch Decks",
      "5-Year Financial Projections & Valuation Models",
      "Comprehensive Business Feasibility Studies",
      "Institutional Business Proposals & Bid Proposals",
      "Executive Summaries & Investment Memorandums",
      "Joint Venture & Partnership Proposals",
      "Corporate Identity & Presentation Collaterals"
    ],
    deliverables: [
      "Executive PDF & Interactive Pitch Decks",
      "Editable Multi-Scenario Financial Excel Models",
      "Comprehensive Bankable Feasibility Reports",
      "Vendor Enlistment & Pre-Qualification Dossiers"
    ],
    industriesServed: ["Commercial Enterprises", "Tech & Logistics Startups", "Industrial Manufacturers", "Hospitality & Healthcare", "Agro-processing"],
    benefits: [
      "Built according to international investment banking standards",
      "Clear financial payback period, IRR, ROI, and sensitivity analyses",
      "Strong corporate storytelling that commands stakeholder confidence"
    ],
    ctaText: "Build Your Business Profile",
    image: "/images/stock/photo-1460925895917-afdab827c52f.webp"
  },
  {
    id: "ngo-programme-consultancy",
    slug: "ngo-programme-consultancy",
    title: "NGO Programme Consultancy",
    tag: "Development & Non-Profit",
    shortDesc: "Project Proposal, Programme Design, Budget, Donor Documentation & Monitoring.",
    fullDesc: "Specialized consultancy for national and international non-governmental organizations, foundations, and civil society bodies across Bangladesh. We craft donor-winning grant proposals, logical frameworks (LogFrames), and transparent financial budgets.",
    icon: "Users2",
    keyServices: [
      "Donor-Aligned Grant Proposal Writing",
      "Logical Framework (LogFrame) & Theory of Change Formulation",
      "Programme Multi-Year Budgeting & Cost Allocation",
      "NGO Affairs Bureau (NGOAB) FD-6 / FD-7 Approval Documentation",
      "Monitoring, Evaluation, Accountability and Learning (MEAL) Frameworks",
      "Community Baseline Studies & Needs Assessments",
      "Donor Reporting & Mid-Term Evaluation Reports",
      "Institutional Capacity Building & Governance Compliance"
    ],
    deliverables: [
      "Complete Donor-Ready Project Proposals (USAID, EU, UN, DFID format)",
      "Detailed Activity-Based Budgets & Cashflow Forecasts",
      "NGOAB Compliance Dossiers & Approval Files",
      "MEAL Indicator Tracking Matrix"
    ],
    industriesServed: ["National NGOs", "International Development Agencies", "Charitable Foundations", "Microfinance Institutions", "Community Trust Funds"],
    benefits: [
      "Deep familiarity with donor compliance and NGO Affairs Bureau protocols",
      "Data-driven baseline framing ensuring high grant success rates",
      "Rigorous financial transparency and audit-ready documentation"
    ],
    ctaText: "Discuss Your NGO Project",
    image: "/images/stock/photo-1531206715517-5c0ba140b2b8.webp"
  },
  {
    id: "project-profile-development",
    slug: "project-profile-development",
    title: "Project Profile Development",
    tag: "Bank Loan & Project Finance",
    shortDesc: "Bank Loan, Industrial, Agro, Food & Other Projects.",
    fullDesc: "Bankable project profile creation for commercial banks, financial institutions (IDCOL, BIFFL), and private equity investors. Includes rigorous market sizing, civil and machinery cost estimations, financial modeling, and DSCR analysis.",
    icon: "ClipboardCheck",
    keyServices: [
      "Bank Loan Project Profiles (Term Loan & Working Capital)",
      "Technical & Financial Feasibility Studies",
      "Capex, Opex & Break-even Financial Analyses",
      "Debt Service Coverage Ratio (DSCR) & Internal Rate of Return (IRR) Computation",
      "Sensitivity & Risk Assessment Matrix",
      "Industrial Infrastructure & Equipment Estimation",
      "Environmental Impact Assessment (EIA) Support Documentation",
      "SME Foundation & Bangladesh Bank Refinance Scheme Profiles"
    ],
    deliverables: [
      "Comprehensive Bankable Project Profile (Spiral & Digital Bound)",
      "Audited Assumptions & Financial Model Sheets",
      "Bank Loan Presentation Support & Query Resolution",
      "Site & Machinery Verification Technical Summary"
    ],
    industriesServed: ["Light Engineering & Manufacturing", "Agro-Food Processing & Cold Storage", "Packaging & Paper Mills", "Garments & Textiles", "Hospital & Diagnostic Facilities"],
    benefits: [
      "Endorsed and trusted by major commercial banks & non-bank financial institutions",
      "Accurate realistic budgeting avoiding project cost overruns",
      "Direct advisory on debt structuring and government incentive schemes"
    ],
    ctaText: "Develop Your Project Profile",
    image: "/images/stock/photo-1454165804606-c3d57bc86b40.webp"
  },
  {
    id: "raw-materials-packaging-supply",
    slug: "raw-material-packaging-supply",
    title: "Raw Materials & Packaging Supply",
    tag: "Sourcing & Industrial Supply",
    shortDesc: "Supply of Quality Raw Materials, Chemicals & Packaging Materials.",
    fullDesc: "Strategic industrial sourcing and reliable supply chain advisory for premium raw materials, active botanical extracts, industrial chemicals, high-grade glass/PET containers, foil packaging, and custom labels for manufacturers.",
    icon: "PackageCheck",
    keyServices: [
      "Industrial Raw Material Procurement & Sourcing",
      "Chemicals, Emulsifiers, Preservatives & Ingredients",
      "Custom Packaging Sourcing (PET Bottles, Glass Vials, Caps, Pumps)",
      "Printed Mono-cartons, Blister Foils & Barrier Lamination Films",
      "Vendor Quality Audits & Certificate of Analysis (CoA) Verification",
      "Import Sourcing, LC Support & Port Clearance Advisory",
      "Buffer Stock Planning & Industrial Inventory Optimization",
      "Sustainable & Eco-friendly Packaging Alternatives"
    ],
    deliverables: [
      "Verified Certificate of Analysis (CoA) & Material Safety Data Sheets (MSDS)",
      "Pre-shipment Sample Batches for Laboratory Trial",
      "Guaranteed Quality Supply Agreements with Batch Traceability",
      "Optimized Material Cost Benchmarking Reports"
    ],
    industriesServed: ["Manufacturing Units", "Food & Beverage Processors", "Household Chemical Manufacturers", "Industrial Laboratories"],
    benefits: [
      "Strict quality control and authenticated botanical/chemical origins",
      "Cost reduction through bulk sourcing and verified manufacturing direct links",
      "Consistency in supply ensuring zero factory downtime"
    ],
    ctaText: "Request Material Sourcing",
    image: "/images/stock/photo-1586528116311-ad8dd3c8310d.webp"
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "tax-financial-services",
    title: "Tax & Financial Services",
    subtitle: "Corporate taxation, audits, financial projections, and statutory compliance",
    description: "Assisting corporate entities, financial institutions, and business owners navigate complex regulatory tax codes, wealth reporting, and statutory filings.",
    icon: "Coins",
    image: "/images/stock/photo-1450133064473-71024230f91b.webp",
    keyConsultingAreas: ["Corporate Income Tax", "Withholding Tax Audits", "TIN & Wealth Filings", "Tax Optimization"],
    caseHighlight: "Successfully resolved long-standing tax assessments for 35+ corporate clients with 100% compliance."
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    subtitle: "Factory establishment, layout engineering, and production optimization",
    description: "End-to-end consulting for industrial machinery installation, greenfield factory development, utility planning, and statutory licensing across Bangladesh.",
    icon: "Factory",
    image: "/images/stock/photo-1581091226825-a6a2a5aee158.webp",
    keyConsultingAreas: ["Factory Blueprints", "DoE & Fire Licensing", "Machine Sourcing", "Process SOPs"],
    caseHighlight: "Designed and facilitated setup of 18+ medium and large-scale manufacturing units in Dhaka and regional industrial parks."
  },
  {
    id: "consumer-goods-fmcg",
    title: "Consumer Goods & FMCG",
    subtitle: "Product launches, brand profiles, and quality compliance",
    description: "Strategic consulting for fast-moving consumer goods, personal care brands, and packaged products navigating BSTI compliance and market distribution.",
    icon: "Sparkles",
    image: "/images/stock/photo-1556228720-195a672e8a03.webp",
    keyConsultingAreas: ["BSTI Quality Certification", "Packaging & Label Standards", "Project Feasibility Profiles", "Supply Chain Sourcing"],
    caseHighlight: "Supported 25+ consumer brands and manufacturing ventures from concept to retail distribution."
  },
  {
    id: "food-agro",
    title: "Food, Agro & Cold Chain",
    subtitle: "Agro-processing plants, cold storage setups, and food safety standards",
    description: "Developing high-feasibility project profiles, technical blueprints, and government subsidy filings for food processing, automated rice mills, and agro infrastructure.",
    icon: "Wheat",
    image: "/images/stock/photo-1500937386664-56d1dfef3854.webp",
    keyConsultingAreas: ["Agro Project Profiles", "Cold Storage Financing", "BSTI Food Licensing", "Supply Chain Design"],
    caseHighlight: "Prepared bank loan project documentation for major agro-processing facilities totaling over BDT 150 Crore in sanctioned funds."
  },
  {
    id: "ngo-development",
    title: "NGO & Development Sector",
    subtitle: "Donor grant proposals, NGOAB documentation, and MEAL frameworks",
    description: "Partnering with civil society organizations to design sustainable social programs, donor budgets, and fulfill NGO Affairs Bureau requirements.",
    icon: "HeartHandshake",
    image: "/images/stock/photo-1488521787991-ed7bbaae773c.webp",
    keyConsultingAreas: ["Donor Proposal Writing", "FD-6/FD-7 Bureau Filing", "Budget Planning", "Project Impact Evaluation"],
    caseHighlight: "Facilitated grant approvals and NGOAB documentation for over 40+ community development initiatives."
  },
  {
    id: "sme-entrepreneurs",
    title: "SME & Entrepreneurship",
    subtitle: "Startup documentation, investor pitch decks, and SME loans",
    description: "Empowering emerging entrepreneurs with solid business plans, Bangladesh Bank SME refinance documentation, and investor-ready pitch materials.",
    icon: "Rocket",
    image: "/images/stock/photo-1519389950473-47ba0277781c.webp",
    keyConsultingAreas: ["SME Business Plans", "Investor Pitch Decks", "Bank Credit Proposals", "Trade License & Setup"],
    caseHighlight: "Helped 60+ SMEs secure seed funding and commercial bank working capital loans."
  },
  {
    id: "investors-joint-ventures",
    title: "Investors & Corporate Groups",
    subtitle: "Feasibility studies, market entry analysis, and investment advisory",
    description: "Providing high-level market feasibility studies, joint venture documentation, and risk mitigation strategies for local and international investors entering Bangladesh.",
    icon: "TrendingUp",
    image: "/images/stock/photo-1486406146926-c627a92ad1ab.webp",
    keyConsultingAreas: ["Bankable Feasibility Studies", "JV Agreements", "BIDA Investment Guidance", "Financial Valuations"],
    caseHighlight: "Conducted market feasibility assessments for multiple industrial expansion projects across high-growth corridors."
  }
];

export const initialWhyChoose: WhyChoosePillar[] = [
  {
    id: "expertise",
    title: "Proven Expertise",
    subtitle: "Technical & Regulatory Mastery",
    description: "Quarter-century of deep domain mastery across taxation laws, industrial engineering, cGMP compliance, and institutional project financing in Bangladesh.",
    icon: "Award"
  },
  {
    id: "reliability",
    title: "Unwavering Reliability",
    subtitle: "Dependable Long-Term Support",
    description: "Consistent, dependable guidance from project inception through licensing, documentation, and operational scale. We stand by our clients at every step.",
    icon: "ShieldCheck"
  },
  {
    id: "quality",
    title: "Gold-Standard Quality",
    subtitle: "Precision Documentation",
    description: "Bankable reports, mathematically sound financial models, and error-free regulatory dossiers recognized and accepted by banks, donors, and government bodies.",
    icon: "FileCheck"
  },
  {
    id: "results",
    title: "Measurable Results",
    subtitle: "Business Growth Driven",
    description: "Solutions designed specifically around commercial viability, loan sanctions, smooth factory commissioning, and tangible enterprise expansion.",
    icon: "TrendingUp"
  },
  {
    id: "experience",
    title: "25 Years of Experience",
    subtitle: "A Heritage of Trust",
    description: "With 25 years of continuous consultancy operations in Dhaka, our seasoned perspective protects clients from costly missteps and delays.",
    icon: "History"
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    subtitle: "Tailored Solutions",
    description: "Every business has unique operational realities. We reject generic templates, delivering bespoke strategies aligned with your specific commercial goals.",
    icon: "Users"
  }
];

export const initialConsultingSteps: ConsultingStep[] = [
  {
    step: "01",
    title: "Consultation & Discovery",
    subtitle: "Requirement Understanding",
    description: "We initiate an in-depth dialogue to thoroughly comprehend your business objectives, operational challenges, regulatory scope, and timeline expectations.",
    deliverable: "Initial Scope Document & Engagement Roadmap"
  },
  {
    step: "02",
    title: "Comprehensive Assessment",
    subtitle: "Technical & Financial Analysis",
    description: "Our senior consultants analyze regulatory criteria, site conditions, taxation parameters, financial viability, and statutory prerequisites.",
    deliverable: "Gap Analysis & Feasibility Check Report"
  },
  {
    step: "03",
    title: "Strategic Blueprint",
    subtitle: "Bespoke Solution Formulation",
    description: "We develop a tailor-made consulting strategy, encompassing detailed architectural layouts, financial models, proposal structures, or compliance pathways.",
    deliverable: "Strategic Action Plan & Execution Matrix"
  },
  {
    step: "04",
    title: "Documentation & Execution",
    subtitle: "Precision Delivery",
    description: "We prepare bankable project profiles, investor pitch decks, donor proposals, or DGDA/BSTI regulatory dossiers with rigorous multi-tier quality checks.",
    deliverable: "Final Bankable Dossier & Regulatory Filings"
  },
  {
    step: "05",
    title: "Follow-up & Ongoing Support",
    subtitle: "Sustained Success",
    description: "Our commitment extends beyond delivery. We assist during bank presentations, regulatory inspections, donor reviews, and operational scale-up.",
    deliverable: "Audit Defense, Query Support & Expansion Advisory"
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Turnkey Industrial Manufacturing Unit Project Profile & Setup",
    industry: "Industrial Manufacturing",
    clientCategory: "Industrial Manufacturer",
    servicesProvided: ["Factory Layout Plan", "BSTI & DoE Compliance", "Machinery Sourcing", "Operational SOPs"],
    description: "Complete turnkey consulting for a 15,000 sq.ft. modern light industrial manufacturing facility in Gazipur, including compliant airflow layout, environmental clearances, and machinery commissioning.",
    completionYear: "2024",
    image: "/images/stock/photo-1581091226825-a6a2a5aee158.webp",
    isFeatured: true,
    confidentialNotice: "Client identity protected under professional NDA"
  },
  {
    id: "proj-2",
    title: "Bank Loan Project Profile for Automatic Agro-Food Processing Plant",
    industry: "Agro & Food Processing",
    clientCategory: "Corporate Agro Business",
    servicesProvided: ["Bankable Project Profile", "Financial Modeling", "DSCR Analysis", "Bank Presentation Support"],
    description: "Formulation of a comprehensive feasibility study and financial projection for a BDT 45 Crore automated flour and grain processing plant, successfully sanctioned by a leading commercial bank.",
    completionYear: "2024",
    image: "/images/stock/photo-1500937386664-56d1dfef3854.webp",
    isFeatured: true
  },
  {
    id: "proj-3",
    title: "Corporate Income Tax Optimization & NBR Audit Settlement",
    industry: "Taxation & Finance",
    clientCategory: "Import & Export Enterprise",
    servicesProvided: ["Corporate Tax Assessment", "Withholding Tax Planning", "TCC Processing", "Taxes Zone Representation"],
    description: "Structured multi-year tax planning and resolved complex withholding tax queries, securing clean Tax Clearance Certificates and substantial allowable rebates under prevailing tax legislation.",
    completionYear: "2025",
    image: "/images/stock/photo-1554224155-8d04cb21cd6c.webp",
    isFeatured: true
  },
  {
    id: "proj-4",
    title: "Multi-Year Donor Grant Proposal & NGOAB Approval Dossier",
    industry: "NGO & Social Development",
    clientCategory: "National Non-Profit Organization",
    servicesProvided: ["Grant Proposal Writing", "LogFrame & MEAL Design", "Budgeting", "FD-6 Filing Support"],
    description: "Developed a comprehensive 3-year community healthcare and skill-development proposal for an international donor consortium, securing approval and full NGO Affairs Bureau clearance.",
    completionYear: "2023",
    image: "/images/stock/photo-1488521787991-ed7bbaae773c.webp",
    isFeatured: false
  },
  {
    id: "proj-5",
    title: "Investor Pitch Deck & Corporate Profile for Tech Logistics Venture",
    industry: "Technology & Logistics",
    clientCategory: "Growth-Stage Startup",
    servicesProvided: ["Investor Pitch Deck", "Financial Model & Valuation", "Market Feasibility", "Corporate Profile"],
    description: "Crafted an executive investor presentation, 5-year unit economic projection, and commercial pitch deck that assisted the client in securing strategic Series-A seed capital.",
    completionYear: "2024",
    image: "/images/stock/photo-1460925895917-afdab827c52f.webp",
    isFeatured: false
  },
  {
    id: "proj-6",
    title: "Industrial Raw Material & Chemical Supply Chain Agreement",
    industry: "Chemicals & Materials",
    clientCategory: "Consumer Goods Brand",
    servicesProvided: ["Raw Material Sourcing", "CoA Verification", "Packaging Supply", "Batch Quality Audits"],
    description: "Established continuous, certified sourcing channels for industrial grade ingredients, emulsifiers, and imported amber glass/PET packaging with zero batch rejection.",
    completionYear: "2025",
    image: "/images/stock/photo-1586528116311-ad8dd3c8310d.webp",
    isFeatured: false
  }
];

export const initialCaseStudies: CaseStudyItem[] = [
  {
    id: "case-1",
    title: "Accelerating Factory Licensing & Quality Compliance for a Consumer Goods Unit",
    industry: "Consumer Goods Manufacturing",
    challenge: "A newly established manufacturing facility faced severe regulatory delays due to non-compliant factory ventilation layout and unverified product quality dossiers required by BSTI and DoE standards.",
    approach: "Wings Consultants BD conducted an on-site engineering audit, redesigned the floorplan blueprint to satisfy safety norms, formulated operational SOPs, and represented the client across statutory inspections.",
    solution: "Delivered compliant architectural drawings, standardized quality dossiers, and facilitated direct technical verification with licensing inspectors.",
    outcome: "Secured operational certifications within 60 days without structural rebuilding penalties, enabling commercial production ahead of schedule.",
    metrics: [
      { label: "Approval Time", value: "60 Days" },
      { label: "Cost Saved", value: "35%" },
      { label: "Compliance Score", value: "100% Validated" }
    ]
  },
  {
    id: "case-2",
    title: "Securing BDT 350 Million Term Loan for Light Engineering Expansion",
    industry: "Industrial Manufacturing",
    challenge: "An established engineering firm required significant debt financing for automated CNC machinery import, but their internal financial projections failed the bank's strict DSCR sensitivity tests.",
    approach: "Our financial consulting team reconstructed a bankable project profile, factoring in multi-shift production capacity, localized raw material pricing, and 7-year cashflow projections.",
    solution: "Produced an audited, highly detailed Bank Project Profile and assisted management throughout the bank's credit risk committee evaluations.",
    outcome: "Full term loan facility approved by the lead commercial bank with competitive interest rates and structured moratorium.",
    metrics: [
      { label: "Sanctioned Amount", value: "BDT 35 Cr" },
      { label: "DSCR Ratio", value: "1.82x" },
      { label: "Bank Approval", value: "Unanimous" }
    ]
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Engr. M. A. Rahman",
    position: "Managing Director",
    company: "Industrial Engineering & Agro Ltd.",
    industry: "Manufacturing & Agro",
    testimonial: "Wings Consultants BD prepared our bank project profile with extraordinary thoroughness. Their 25 years of domain experience is clearly visible in the financial precision and technical clarity that satisfied the bank's credit committee on the very first submission.",
    rating: 5,
    date: "January 2025"
  },
  {
    id: "test-2",
    clientName: "Dr. K. H. Hossain",
    position: "Founder & Managing Director",
    company: "Apex Consumer Products Ltd.",
    industry: "Consumer Goods & Manufacturing",
    testimonial: "Navigating regulatory clearances and factory setup for industrial manufacturing is challenging in Bangladesh. Wings Consultants BD guided our facility layout, quality documentation, and licensing seamlessly. Highly recommended for corporate and industrial consulting.",
    rating: 5,
    date: "November 2024"
  },
  {
    id: "test-3",
    clientName: "Syeda Farhana Kabir",
    position: "Executive Director",
    company: "Development Action Bangladesh (NGO)",
    industry: "Non-Profit & NGO",
    testimonial: "Their NGO programme consulting team developed a winning donor grant proposal for our community initiative. The LogFrame and budget structures were world-class, and their support with NGO Affairs Bureau documentation was invaluable.",
    rating: 5,
    date: "August 2024"
  },
  {
    id: "test-4",
    clientName: "Tanvir Ahmed",
    position: "Director of Finance",
    company: "Apex Global Trading & Imports",
    industry: "Corporate Trade & Taxation",
    testimonial: "We have entrusted our corporate tax compliance, annual tax returns, and advisory to Wings Consultants BD for several years. Their team is prompt, reliable, and provides proactive solutions that give us complete peace of mind.",
    rating: 5,
    date: "February 2025"
  }
];

export const initialResources: ResourceArticle[] = [
  {
    id: "res-1",
    title: "Essential Guide to Corporate Tax Return Filing & Compliance in Bangladesh",
    slug: "corporate-tax-return-filing-guide-bangladesh",
    category: "Tax & Compliance",
    excerpt: "A comprehensive breakdown of the Income Tax Act requirements, mandatory filing deadlines, withholding tax audit preparation, and legal deduction strategies for businesses.",
    content: `Filing corporate tax returns in Bangladesh requires strict adherence to the latest Income Tax legislation. This guide outlines key provisions:

1. Mandatory Corporate Documentation
Every registered company in Bangladesh must submit audited financial statements, a computed tax calculation sheet, withholding tax certificates (TDS/VDS), and bank reconciliation statements alongside Form 35(B).

2. Important Tax Deadlines & Penalties
Corporate returns must be filed on or before Tax Day (the 15th day of the 7th month following the end of the income year). Late filings attract statutory penalties and interest under the Income Tax Act.

3. Maximizing Allowable Deductions
Learn how proper documentation of business expenditures, depreciation allowances on plant & machinery, and amortizations can legitimately reduce taxable profit while maintaining full statutory compliance.

For dedicated assistance with your company's tax assessment, contact Wings Consultants BD.`,
    readTime: "6 min read",
    publishDate: "January 2025",
    author: "Wings Tax Advisory Team",
    downloadableDocName: "Corporate_Tax_Filing_Checklist_BD.pdf",
    tags: ["Income Tax", "NBR Compliance", "Corporate Tax", "Tax Returns"]
  },
  {
    id: "res-2",
    title: "Step-by-Step Guide: Setting Up a Modern Industrial Manufacturing Plant in Bangladesh",
    slug: "industrial-plant-setup-guide-bangladesh",
    category: "Industry Setup",
    excerpt: "From land zoning and industrial factory layout design to DoE clearance and BSTI quality approvals — an authoritative roadmap for prospective industrialists.",
    content: `The light manufacturing and consumer goods sector in Bangladesh is experiencing rapid domestic growth and export demand.

Key Milestones for Factory Setup:
1. Architectural & Floor Layout: Designing unidirectional material and personnel flows to optimize productivity and comply with industrial safety guidelines.
2. Department of Environment (DoE) & Fire Safety Clearance: Securing site clearance, effluent treatment plant (ETP) plans, and structural fire safety approvals.
3. Quality & Standard Licensing: Preparing standard product dossiers, batch manufacturing records (BMR), and equipment qualification files for BSTI certification.
4. Machinery Procurement & Trial Commissioning: Sourcing high-efficiency machinery, calibration, and conducting trial production runs.

Wings Consultants BD provides turnkey industrial consultancy from blueprint design to trial batch commissioning.`,
    readTime: "8 min read",
    publishDate: "December 2024",
    author: "Industrial Consultancy Wing",
    downloadableDocName: "Industrial_Factory_Setup_Checklist.pdf",
    tags: ["Factory Setup", "Manufacturing", "Industrial", "BSTI", "DoE Clearance"]
  },
  {
    id: "res-3",
    title: "Key Elements of a Bankable Project Profile for Commercial Bank Loans",
    slug: "bankable-project-profile-guide",
    category: "Project Development",
    excerpt: "Understand what credit risk officers and bank appraisal committees scrutinize in your project feasibility report, from DSCR ratios to realistic break-even analyses.",
    content: `When commercial banks and financial institutions appraise a project loan, they prioritize repayment capacity, promoter background, and financial realism.

Core Sections Every Project Profile Must Contain:
- Executive Summary & Promoters' Track Record
- Technical Assessment: Machinery capacity, utility balance, site accessibility
- Market Demand & Pricing Sensitivity Analysis
- Comprehensive Financial Modeling: 5 to 7-year Projected Income Statements, Balance Sheets, Cash Flow Statements
- Key Financial Ratios: Debt Service Coverage Ratio (DSCR), Break-Even Analysis, Internal Rate of Return (IRR), and Payback Period.

Wings Consultants BD has formulated over 100+ bankable profiles accepted across leading banks in Bangladesh.`,
    readTime: "7 min read",
    publishDate: "November 2024",
    author: "Project Finance Advisory",
    downloadableDocName: "Bank_Loan_Project_Profile_Template_Guide.pdf",
    tags: ["Bank Loan", "Project Profile", "Feasibility Study", "Financial Model"]
  },
  {
    id: "res-4",
    title: "How to Structure an NGO Project Proposal for International Donors",
    slug: "ngo-project-proposal-writing-guide",
    category: "NGO Consultancy",
    excerpt: "A practical guide to crafting winning grant proposals, Logical Frameworks (LogFrames), and fulfilling NGO Affairs Bureau (FD-6) requirements in Bangladesh.",
    content: `International grant competition demands compelling problem statements supported by verified baseline data and watertight budget allocations.

Key Proposal Components:
1. Situational Analysis & Problem Justification: Backed by empirical research and community need.
2. Logical Framework (LogFrame): Aligning inputs, outputs, outcomes, and verifiable indicators.
3. Activity-Based Multi-Year Budgeting: Ensuring full cost transparency and compliance with donor ceiling guidelines.
4. NGO Affairs Bureau Alignment: Preparing documentation for swift FD-6 or FD-7 project approvals.

Consult with Wings Consultants BD for professional NGO proposal writing and donor compliance support.`,
    readTime: "5 min read",
    publishDate: "October 2024",
    author: "Development Services Group",
    downloadableDocName: "NGO_Grant_Proposal_LogFrame_Template.pdf",
    tags: ["NGO", "Grant Proposal", "LogFrame", "NGO Affairs Bureau"]
  }
];

export const initialFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What consultancy services does Wings Consultants BD provide?",
    answer: "Wings Consultants BD provides comprehensive corporate solutions across five core practices: (1) Income Tax Consultancy, (2) Company Profile & Investor Pitch Decks, (3) NGO Programme Consultancy, (4) Bankable Project Profile Development, and (5) Raw Materials & Packaging Supply.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you provide income tax consultancy for both individuals and companies?",
    answer: "Yes. We offer complete tax services including e-TIN registration, annual income tax return preparation, wealth statements, withholding tax (TDS) management, tax clearance certificates (TCC), and representation before the National Board of Revenue (NBR) for assessment and audit settlement.",
    category: "Taxation"
  },
  {
    id: "faq-3",
    question: "How do you help with company profiles and investor pitch decks?",
    answer: "We craft strategic corporate profiles and investor-grade pitch decks. Our team conducts business model analysis, develops 5-year financial projections (including NPV, IRR, and payback calculations), and creates compelling presentations tailored to secure venture capital, bank facilities, or corporate partnerships.",
    category: "Business Planning"
  },
  {
    id: "faq-4",
    question: "Can you prepare bankable project profiles for bank loan approvals?",
    answer: "Yes. With 25 years of experience in project documentation, we develop detailed, bank-compliant feasibility studies and project profiles for industrial factories, agro-food processors, SME loans, cold storage setups, and manufacturing units. Our profiles are widely recognized by commercial banks and financial institutions in Bangladesh.",
    category: "Project Finance"
  },
  {
    id: "faq-5",
    question: "What support do you provide for industrial project profiles and bank financing?",
    answer: "We offer comprehensive project modeling including Capex/Opex forecasting, technical infrastructure planning, Debt Service Coverage Ratio (DSCR) calculations, break-even analysis, and presentation support during bank appraisal committee evaluations.",
    category: "Project Finance"
  },
  {
    id: "faq-6",
    question: "Do you provide consultancy support for NGOs and donor projects?",
    answer: "Yes. We assist NGOs, foundations, and civil society organizations with donor-aligned grant proposal writing, Logical Framework (LogFrame) design, multi-year budget formulation, and statutory documentation for the NGO Affairs Bureau (FD-6 / FD-7 filings).",
    category: "NGO Services"
  },
  {
    id: "faq-7",
    question: "Can you supply quality raw materials and packaging materials for manufacturers?",
    answer: "Yes. We assist manufacturers in sourcing authenticated raw ingredients, industrial chemicals, laboratory tested materials, and customized packaging materials (bottles, glass vials, barrier foil, mono-cartons) with verified Certificates of Analysis (CoA).",
    category: "Raw Materials"
  },
  {
    id: "faq-8",
    question: "How can I book a consultation with Wings Consultants BD?",
    answer: "You can schedule a consultation directly on this website using our 'Get a Consultation' booking form, or call us at +880 1730-349633 / +880 1914-502714, or email us at wingsconsultantsbd@gmail.com. We also welcome scheduled in-person meetings at our Dhaka office.",
    category: "General"
  }
];

export const HR_TRAINING_PRACTICE = "HR, Training & Capacity Building";

export const initialExperts: ExpertProfile[] = [
  {
    id: "monirul-hasan",
    slug: "md-monirul-hasan",
    name: "Md Monirul Hasan",
    title: "Executive Director & Lead Consultant",
    shortRole: "Executive Director and Lead Consultant",
    academicCredentials: "MBA in Marketing (MIST under Dhaka University), PGDPM",
    coreExpertise:
      "Social Business Specialist, Soft Skill, Lifeskill, Theory of Change, Personality Development & Motivational Trainer",
    highlights: [
      "Mr. Monirul Hasan, ED and Lead Consultant of Wings Consultants, brings over 15 years of experience across Social Marketing, Category Management, Market Planning, and Advisory.",
      "His professional journey includes working with BATB (leading MNC in Bangladesh), BRAC (World's No. 1 NGO), and BDJOBS Training.",
      "He serves as the Managing Director of Pure Enterprise Private Limited (FMCG) and Advisor to Prerona Kallyan Sangstha. He has consulted on key projects for FAO (Rome), NDDB (India), BEPZA, DLS, and Bangladesh Railway.",
      "Conducted 50+ corporate trainings & workshops, 100+ recruitment evaluations, baseline studies, feasibility reports, and market mapping across all 64 districts of Bangladesh, India, and Bhutan."
    ],
    roles: [
      "Social Business Specialist",
      "Soft Skill, Lifeskill & Theory of Change Facilitator",
      "Personality Development & Motivational Trainer",
      "Managing Director, Pure Enterprise Limited"
    ],
    photo: "/images/team/md-monirul-hasan.jpg",
    summary:
      "MBA in Marketing (MIST, Dhaka University) and PGDPM with 15+ years of leadership across BATB, BRAC, and BDJOBS Training. Leads corporate strategy, market feasibility, and experiential leadership transformation across all 64 districts of Bangladesh.",
    profile:
      "Mr Monirul Hasan, the Executive Director and Lead Consultant of Wings Consultants BD, brings over 15 years of multi-sector experience spanning Social Marketing, Business & Enterprises, Market Mapping & Planning, Category Management, Customer Excellence, Forecasting, Market Research & Feasibility Studies, and Operations Management across BATB, BRAC, and BDJOBS Training.",
    bioParagraphs: [
      "Mr Monirul Hasan, the ED and Lead Consultant of Wings Consultants, brings with him over 15 years of working experience in a variety of fields, including Social Marketing, Business and Enterprises, Marketing, Market Mapping and Planning, Training and Workshop, Category Management, Customer Excellence, Forecasting, Market Research and Feasibility Study, Operations Management and Demand-Supply analysis in BATB, one of the leading MNCs in Bangladesh; BRAC, World's No 1 NGO; and BDJOBS Training, the country's leading job and training portal.",
      "Mr Hasan is the Managing Director of Pure Enterprise Private Limited, a fast moving consumer goods (FMCG) company. He is a big picture thinker, talented and driven to impact, while ensuring compliance to policies and procedures. He is a skilled provider of advanced leadership, guidance and motivation. He has extensive facilitation skills on Teambuilding and Leadership, Blue Ocean Strategy, Game Theory and Personality Development.",
      "He has participated in more than 50 trainings and workshops, 100 recruitments and took such opportunities as learning processes on related industries. He has consultation experience on FAO (Rome), NDDB (India), BEPZA, DLS and Bangladesh Railway projects. He has survey, analytical research and baseline study experience across RMG, agriculture and FMCG sectors, visiting extensively in most upazillas of all 64 districts of Bangladesh."
    ],
    facts: [
      { value: "15+ Years", label: "MNC, BRAC & enterprise leadership" },
      { value: "64 Districts", label: "Field research & market mapping" },
      { value: "50+ Workshops", label: "Corporate trainings & 100+ recruitments" }
    ],
    expertise: [
      { area: "Experiential Learning & Leadership", scope: "Teambuilding, executive leadership, personality development, emotional intelligence and workplace attitude transformation." },
      { area: "Blue Ocean Strategy & Game Theory", scope: "Strategic business management, competitive differentiation, market creation and high-stakes corporate decision frameworks." },
      { area: "Market Research & Feasibility Studies", scope: "Nationwide baseline surveys, demand-supply analysis, market mapping and bankable project feasibility assessments." },
      { area: "Social Business & Enterprise Management", scope: "FMCG operations, social marketing, category management, distribution planning and sustainable rural value chains." },
      { area: "Donor & Public Sector Consultation", scope: "Advisory and research execution for FAO (Rome), NDDB (India), BEPZA, Department of Livestock Services (DLS) and Bangladesh Railway." },
      { area: "Theory of Change & NGO Advisory", scope: "Programme design, community mobilization, baseline studies and impact evaluation across RMG, agro and development sectors." }
    ],
    modules: [
      "Blue Ocean Strategy: In Search of Excellence",
      "Game Theory to Shape Corporate Strategy",
      "Teambuilding & Managerial Effectiveness through Leadership",
      "Market Mapping, Segmentation & Planning for Growth",
      "Selling Excellence: Know to Grow — As You Sow",
      "Emotional Intelligence & Right Attitude for Right Business",
      "Social Marketing, Enterprises & Theory of Change",
      "Customer Acquisition, Retention & Service Excellence"
    ],
    methods: [
      "Experiential 'Learning by Doing' methodology and interactive group simulations",
      "Authentic Bangladeshi corporate case studies and negotiation role-plays",
      "Market access mapping and field-tested diagnostic frameworks",
      "Participatory workshops, psychometric reflection and action planning",
      "Baseline survey design, analytical research and feasibility modeling"
    ],
    experience: [
      {
        role: "Executive Director & Lead Consultant",
        organization: "Wings Consultants BD",
        period: "Current",
        detail: "Leads corporate consultancy, feasibility studies, bankable project profiles, NGO advisory and executive training engagements across Bangladesh."
      },
      {
        role: "Managing Director",
        organization: "Pure Enterprise Limited",
        period: "2020 – Present",
        detail: "Directs Cox's Bazar salt production & refinement operations, BLRI-supported Minamix cattle mineral nutrition research, and 64-district distribution network."
      },
      {
        role: "Senior Specialist & Consultant Roles",
        organization: "BATB, BRAC & BDJOBS Training / FAO, NDDB, BEPZA, DLS, Bangladesh Railway",
        period: "15+ years",
        detail: "Extensive track record in social marketing, category management, market feasibility studies, baseline surveys and corporate training across leading MNCs, NGOs and international donor projects."
      }
    ],
    education: [
      "MBA in Marketing — Military Institute of Science and Technology (MIST) under Dhaka University",
      "Post Graduate Diploma in Personnel Management (PGDPM)"
    ],
    sectors: [
      "FMCG & Consumer Goods",
      "Agro & Livestock Value Chains",
      "RMG & Industrial Manufacturing",
      "NGO & International Development",
      "Corporate Training & HRD",
      "Public Sector & Infrastructure Projects"
    ],
    affiliations: [
      "Executive Member, BUPBGA",
      "Member, MIST MBA Association",
      "Deputy Director, Jakat Foundation",
      "Advisor, Prerona Kallyan Sangstha"
    ],
    quote: {
      text: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
      author: "Jack Ma"
    },
    consultationTopic: "Company Profile & Pitch Deck"
  },
  {
    id: "a-saleque",
    slug: "md-a-saleque",
    name: "Md A Saleque",
    title: "Chief Technical Advisor & Senior Consultant",
    shortRole: "Chief Technical Advisor, ACI Animal Health",
    academicCredentials: "MBA in Marketing | Doctor of Veterinary Medicine (DVM)",
    coreExpertise:
      "Agri-Business, Livestock, Microfinance, Food Security & Sustainable Rural Enterprise Specialist",
    highlights: [
      "Chief Technical Advisor at ACI Animal Health; previously served as Adviser (AFSL) at BRAC International, Programme Head (Agro & Salt Industry) at BRAC, and Country Team Coordinator for SAPPLPP.",
      "Extensive consulting experience across IFAD, DANIDA, UNDP, USAID, WFP, ADB, and World Bank on food security, rural SMEs, poultry, dairy, fisheries, seed, and microfinance.",
      "Led over 2,000 staff handling nationwide project implementation, management, administration, and financial operations.",
      "Authored 20+ publications in international journals across Denmark, Indonesia, Malaysia, and India; Co-chairman of FBCCI Standing Committee on Livestock & Poultry."
    ],
    roles: [
      "Agri-Business & Livestock Specialist",
      "Microfinance & Sustainable Rural Enterprise Advisor",
      "International Donor Programme Consultant"
    ],
    photo: "/images/team/md-a-saleque.jpg",
    summary:
      "DVM and MBA in Marketing. Chief Technical Advisor at ACI Animal Health and former Programme Head (Agro & Salt Industry) at BRAC, with 20+ international publications and extensive advisory across IFAD, DANIDA, UNDP, USAID, ADB, and World Bank projects.",
    profile:
      "Md A Saleque is the Chief Technical Advisor at ACI Animal Health and a veteran development and agri-business leader who has managed teams of 2,000+ staff across BRAC, BRAC International, and multilateral donor programmes.",
    bioParagraphs: [
      "Md A Saleque is the Chief Technical Advisor, ACI Animal Health. He worked in different capacities in various organizations as Adviser, AFSL, BRAC International; Programme Head, Agro & Salt Industry of BRAC; and Country Team Coordinator for SAPPLPP.",
      "His experience includes working with government, private sector and international organizations (IFAD, DANIDA, UNDP, USAID, WFP, ADB, World Bank) as Moderator, Consultant, resource person, Guest Speaker on food security and food aid, planning and designing of various SMEs for the poor and marginal farmer, rural development, agriculture (Poultry, Dairy, Fisheries, seed), and microfinance. He has led about 2,000 staff handling project implementation, management, administration and finance.",
      "Mr Saleque has more than 20 publications in reputed journals in Denmark, Indonesia, Malaysia, and India on Microfinance, Poultry Industry, Poultry health and Biosecurity, and Small scale dairy development. He is Co-chairman of FBCCI standing committee on Livestock & Poultry."
    ],
    facts: [
      { value: "2,000+ Staff", label: "Large-scale programme leadership" },
      { value: "20+ Papers", label: "International journal publications" },
      { value: "DVM & MBA", label: "Veterinary Science & Marketing" }
    ],
    expertise: [
      { area: "Livestock, Dairy & Poultry Value Chains", scope: "Commercial and smallholder dairy development, poultry biosecurity, feed & mineral nutrition, and animal health systems." },
      { area: "Agri-Business & Salt Industry Operations", scope: "Enterprise design and operational leadership across agro-processing, seed enterprises and industrial/edible salt programmes." },
      { area: "International Donor & Multilateral Projects", scope: "Project formulation, evaluation and technical advisory for IFAD, DANIDA, UNDP, USAID, WFP, ADB and World Bank initiatives." },
      { area: "Microfinance & Rural SME Design", scope: "Designing pro-poor SMEs, rural value chains and inclusive microfinance models for marginal farmers." }
    ],
    modules: [
      "Commercial Dairy & Livestock Enterprise Development",
      "Poultry Health, Biosecurity & Farm Productivity",
      "Rural SME Design & Value Chain Financing",
      "Food Security & Sustainable Agricultural Programme Management"
    ],
    methods: [
      "Technical feasibility & biosecurity audits for agro-livestock projects",
      "Value-chain mapping for smallholder and commercial farms",
      "Multi-stakeholder policy moderation and donor coordination"
    ],
    experience: [
      {
        role: "Chief Technical Advisor",
        organization: "ACI Animal Health",
        period: "Current",
        detail: "Provides top-level technical and strategic direction on animal health, livestock nutrition and agro-industrial growth."
      },
      {
        role: "Adviser (AFSL) & Programme Head (Agro & Salt Industry)",
        organization: "BRAC & BRAC International",
        period: "Senior Leadership",
        detail: "Directed nationwide agro and salt industry programmes and international agriculture, food security and livelihood initiatives leading 2,000+ personnel."
      },
      {
        role: "International Consultant & Country Team Coordinator",
        organization: "SAPPLPP / IFAD, DANIDA, UNDP, USAID, WFP, ADB, World Bank",
        period: "Multi-decade",
        detail: "Technical consultant and resource person on food security, rural SMEs, poultry, dairy, fisheries and microfinance."
      }
    ],
    education: [
      "MBA in Marketing",
      "Doctor of Veterinary Medicine (DVM)"
    ],
    sectors: [
      "Livestock, Dairy & Poultry",
      "Agro & Salt Industry",
      "Food Security & Rural Development",
      "Microfinance & SME Development",
      "International Donor Programmes"
    ],
    affiliations: [
      "Co-chairman, FBCCI Standing Committee on Livestock & Poultry",
      "Secretary, World's Poultry Science Association (WPSA)",
      "Treasurer, Poultry Breeder Association"
    ],
    quote: {
      text: "It is hard to accept fail, but it is worse never to have tried to succeed.",
      author: "Theodore Roosevelt"
    },
    consultationTopic: "Project Profile Development"
  },
  {
    id: "mokarrom-hossain",
    slug: "md-mokarrom-hossain",
    name: "Md Mokarrom Hossain",
    title: "Senior Consultant & Technical Advisor",
    shortRole: "Consultant (Agro & Fisheries Specialist)",
    academicCredentials: "PhD in Brood Science | M.Sc in Aquaculture | B.Sc. Fisheries (Hons.)",
    coreExpertise:
      "Aquaculture, Rural Development, Baseline Surveys, Natural Resources Management & Agro-Production Specialist",
    highlights: [
      "Served in senior leadership across local and international NGOs as Deputy Chief of Party at Winrock International, Project Leader at WorldFish, and Program Manager (Agro Production & Fisheries Enterprise) at BRAC.",
      "Proven achievements across Fisheries Enterprises, Seed Enterprises, Horticulture Nurseries, Tissue Culture Laboratories, and Soil Analysis Laboratories.",
      "Extensive expertise in community mobilization for rural development and preparing training manuals, feasibility reports, survey questionnaires, and baseline surveys.",
      "Supported FAO, ActionAid, DANIDA, Winrock International, IFAD, DFID, Ford Foundation, and World Bank projects across the UK, Scotland, Malaysia, Philippines, Thailand, India, and Nepal."
    ],
    roles: [
      "Aquaculture & Fisheries Specialist",
      "Rural Development & Agro-Production Advisor",
      "Baseline Surveys & Feasibility Study Expert"
    ],
    photo: "/images/team/md-mokarrom-hossain.jpg",
    summary:
      "PhD in Brood Science and M.Sc in Aquaculture. Former Deputy Chief of Party at Winrock International, Project Leader at WorldFish, and Program Manager at BRAC with consulting experience across 7+ countries.",
    profile:
      "Mr Mokarrom Hossain is a seasoned aquaculture, agro-enterprise, and natural resource management specialist who has led major development programmes at Winrock International, WorldFish, and BRAC.",
    bioParagraphs: [
      "Mr Mokarrom Hossain has worked in local and international NGOs as Deputy Chief of Party at Winrock International, Project Leader at WorldFish, Program Manager (Agro Production) of BRAC, and Program Manager (Fisheries Enterprise) of BRAC.",
      "He has professional achievements across Fisheries Enterprises, Seed Enterprises, Horticulture Nurseries, Tissue Culture Laboratories, and Soil Analysis Laboratories. He has vast capacity in mobilizing community people for rural development initiatives and preparing training manuals, feasibility reports, survey questionnaires, and baseline surveys.",
      "Mr Mokarrom has supported as Consultant at FAO, ActionAid, DANIDA-GOB-CODEC, WINROCK INTERNATIONAL, IFAD, DFID, Ford Foundation, and World Bank supported projects across the UK, Scotland, Malaysia, Philippines, Thailand, India and Nepal."
    ],
    facts: [
      { value: "PhD", label: "Brood Science & Aquaculture" },
      { value: "7+ Countries", label: "International project exposure" },
      { value: "Senior", label: "Winrock, WorldFish & BRAC leadership" }
    ],
    expertise: [
      { area: "Aquaculture & Fisheries Enterprises", scope: "Broodstock science, commercial hatcheries, fisheries value chains and sustainable aquaculture systems." },
      { area: "Seed, Horticulture & Biotech Labs", scope: "Seed enterprises, horticulture nurseries, tissue culture laboratories and soil analysis facilities." },
      { area: "Feasibility Reports & Baseline Surveys", scope: "Technical feasibility studies, baseline survey design, questionnaire formulation and impact evaluation." },
      { area: "Donor Project Proposals & Rural Mobilization", scope: "Grant proposals, training manuals and community mobilization for international development agencies." }
    ],
    modules: [
      "Commercial Aquaculture & Fisheries Enterprise Management",
      "Baseline Survey Design & Rural Feasibility Studies",
      "Seed, Horticulture & Agribusiness Value Chain Development",
      "Community Mobilization & Natural Resource Management"
    ],
    methods: [
      "Empirical baseline surveys and structured field questionnaires",
      "Technical manual development and participatory farmer/community training",
      "Laboratory & production systems feasibility assessment"
    ],
    experience: [
      {
        role: "Deputy Chief of Party / Project Leader",
        organization: "Winrock International & WorldFish",
        period: "Senior Leadership",
        detail: "Directed multi-year international aquaculture, natural resource management and rural livelihood programmes."
      },
      {
        role: "Program Manager (Agro Production & Fisheries Enterprise)",
        organization: "BRAC",
        period: "Senior Management",
        detail: "Managed nationwide fisheries enterprises, seed production, horticulture nurseries, tissue culture and soil testing laboratories."
      },
      {
        role: "International Technical Consultant",
        organization: "FAO, World Bank, IFAD, DFID, DANIDA, ActionAid & Ford Foundation",
        period: "Multi-country",
        detail: "Delivered feasibility reports, baseline surveys and technical consulting across the UK, Scotland, Malaysia, Philippines, Thailand, India, Nepal and Bangladesh."
      }
    ],
    education: [
      "PhD in Brood Science",
      "M.Sc in Aquaculture",
      "B.Sc. in Fisheries (Hons.)"
    ],
    sectors: [
      "Aquaculture & Fisheries",
      "Agro-Production & Seed Enterprises",
      "Tissue Culture & Soil Labs",
      "NGO & Donor Programmes",
      "Rural Development"
    ],
    affiliations: [
      "Consultant, FAO & World Bank Projects",
      "Former Deputy Chief of Party, Winrock International",
      "Former Program Manager, BRAC"
    ],
    quote: {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas A Edison"
    },
    consultationTopic: "NGO Programme Consultancy"
  },
  {
    id: "kamrun-nessa-ahmed",
    slug: "kamrun-nessa-ahmed",
    name: "Kamrun Nessa Ahmed",
    title: "Consultant & HR Specialist",
    shortRole: "Joint Director, HR Dept (NHN - DAB)",
    academicCredentials: "Honours & Masters in Sociology (DU) | PGDPM (BIM)",
    coreExpertise:
      "Human Resource Development, Organizational Policy Formulation, Talent Acquisition & Corporate Culture Transformation",
    highlights: [
      "Serves as Joint Director heading the HR Department of National Health Care Network (NHN), a premier enterprise of the Diabetic Association of Bangladesh (DAB).",
      "Over 20 years of executive HR leadership enhancing organizational capabilities across complex healthcare and institutional networks.",
      "Extensive track record in HR operations, resource mobilization, staff mentoring, multi-cultural team management, and executive reporting systems.",
      "Expert in formulating company policies that harmonize corporate objectives with employee welfare under national labor laws and governance best practices."
    ],
    roles: [
      "Human Resource Development Specialist",
      "Organizational Policy & Labor Law Advisor",
      "Executive Leadership Mentor"
    ],
    photo: "/images/team/kamrun-nessa-ahmed.jpg",
    summary:
      "Honours & Masters in Sociology (Dhaka University) and PGDPM (BIM). Over 20 years as Joint Director heading the HR Department of National Health Care Network (NHN), Diabetic Association of Bangladesh.",
    profile:
      "Kamrun Nessa Ahmed is a senior HR practitioner and organizational policy specialist with more than two decades of executive HR leadership in large healthcare and institutional networks.",
    bioParagraphs: [
      "Kamrun Nessa Ahmed is the Joint Director heading the HR Department of National Health Care Network (NHN), a premier venture of the Diabetic Association of Bangladesh (DAB). She has been working with NHN for more than 20 years, dedicated to enhancing organizational capabilities in complex healthcare environments.",
      "She has extensive exposure in developing and implementing HR operations, resource mobilization, and quality of operations. She has ability to mentor staff, provide guidance for achieving goals, work with multi-cultural groups, and establish effective reporting and presentation systems.",
      "She is an expert in building company policies that harmonize corporate objectives with employee benefits within national labor laws and best practices, championing HR as a strategic pillar for institutional longevity."
    ],
    facts: [
      { value: "20+ Years", label: "Executive HR leadership at NHN (DAB)" },
      { value: "DU & BIM", label: "Sociology (DU) & PGDPM (BIM)" },
      { value: "HR Policy", label: "Labor law & institutional governance" }
    ],
    expertise: [
      { area: "HR Policy Formulation & Compliance", scope: "Drafting service rules, employee handbooks and HR policies aligned with Bangladesh Labor Law and institutional governance." },
      { area: "Talent Acquisition & Workforce Planning", scope: "End-to-end recruitment committees, competency grading, onboarding systems and succession planning." },
      { area: "Performance & Operations Quality", scope: "Appraisal systems, reporting frameworks, staff mentoring and operational quality assurance in complex institutions." },
      { area: "Employee Welfare & Culture Transformation", scope: "Harmonizing corporate goals with employee benefits, multi-cultural team cohesion and workplace ethics." }
    ],
    modules: [
      "Corporate HR Policy Formulation & Labor Law Compliance",
      "Strategic Talent Acquisition & Competency-Based Interviewing",
      "Performance Appraisal Systems & Staff Mentoring",
      "Workplace Communication, Ethics & Culture Transformation"
    ],
    methods: [
      "Institutional HR audit and policy manual drafting",
      "Interactive leadership mentoring and supervisory coaching",
      "Structured reporting and performance evaluation workshops"
    ],
    experience: [
      {
        role: "Joint Director & Head of HR Department",
        organization: "National Health Care Network (NHN), Diabetic Association of Bangladesh (DAB)",
        period: "20+ years",
        detail: "Leads HR operations, recruitment committees, organizational policy formulation, staff development and quality assurance across NHN healthcare centers."
      },
      {
        role: "Consultant & HR Specialist",
        organization: "Wings Consultants BD",
        period: "Current",
        detail: "Advises corporate and non-profit clients on HR systems, service rules, talent development and organizational restructuring."
      }
    ],
    education: [
      "M.S.S. & B.S.S. (Hons) in Sociology — University of Dhaka",
      "Post Graduate Diploma in Personnel Management (PGDPM) — Bangladesh Institute of Management (BIM)"
    ],
    sectors: [
      "Healthcare & Hospital Networks",
      "Corporate HR & Governance",
      "NGO & Trust Institutions",
      "Service Sector Enterprises"
    ],
    affiliations: [
      "Joint Director, HR Department NHN (DAB)",
      "Member, NHN Recruitment & Policy Committee"
    ],
    quote: {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    consultationTopic: HR_TRAINING_PRACTICE
  },
  {
    id: "kawser-uddin-ahmed",
    slug: "kawser-uddin-ahmed",
    name: "Kawser Uddin Ahmed",
    title: "Director, Finance & Banking Consultant",
    shortRole: "Director, Finance and Consultant",
    academicCredentials: "Honours & Masters in Geography (JU) | 28 Years Banking Leadership",
    coreExpertise:
      "Credit Administration, Risk Management, Central Collection, Recovery, Financial Compliance & Pro-Poor Development",
    highlights: [
      "Brings 28 years of senior commercial banking experience across Bangladesh covering credit administration, monitoring, recovery, compliance, and succession planning.",
      "Held senior leadership positions at Mercantile Bank Limited, Prime Bank Limited, Al-Arafah Islami Bank Limited, and National Credit & Commerce Bank Limited.",
      "Served as Executive Vice President (EVP), Head of Monitoring & Early Alert Division, and Head of Branch.",
      "Completed advanced executive programs at BIBM, MBTI, and ABB on Credit Management, Asset Liability Management (ALM), Corporate Governance, and Anti-Money Laundering."
    ],
    roles: [
      "Senior Commercial Banker (Former EVP)",
      "Credit Administration & Risk Management Specialist",
      "Corporate Governance & Financial Compliance Advisor"
    ],
    photo: "/images/team/kawser-uddin-ahmed.jpg",
    summary:
      "28 years of senior banking leadership across Mercantile Bank, Prime Bank, Al-Arafah Islami Bank, and NCC Bank as Executive Vice President, Head of Monitoring & Early Alert, and Head of Branch.",
    profile:
      "Mr Kawser Uddin Ahmed brings 28 years of commercial banking leadership in Bangladesh, specializing in credit administration, project loan appraisal, risk management, recovery, and financial compliance.",
    bioParagraphs: [
      "Mr Kawser Uddin Ahmed brings with him about 28 years of experience in renowned banks in Bangladesh, covering training, performance management, mentoring, succession planning, credit administration, monitoring, recovery, and compliance.",
      "His professional journey includes senior leadership roles at Mercantile Bank Limited, Prime Bank Limited, Al-Arafah Islami Bank Limited, and National Credit & Commerce Bank Limited. He has served as Executive Vice President, Head of Monitoring & Early Alert Division, and Head of Branch.",
      "Mr Ahmed has attended extensive executive programs at BIBM, MBTI, and ABB on Credit Management, Asset Liability Management, Corporate Governance, and Anti-Money Laundering. He has travelled across the UK, USA, Canada, France, UAE, Singapore, Malaysia, and China."
    ],
    facts: [
      { value: "28 Years", label: "Commercial banking leadership" },
      { value: "Former EVP", label: "Head of Branch & Credit Monitoring" },
      { value: "BIBM Fellow", label: "Credit, ALM & AML specialist" }
    ],
    expertise: [
      { area: "Credit Administration & Project Appraisal", scope: "Structuring bankable project proposals, DSCR & credit risk evaluation, loan documentation and sanction readiness." },
      { area: "Risk Management & Early Alert Monitoring", scope: "Portfolio health monitoring, asset-liability management (ALM), non-performing loan prevention and central recovery strategies." },
      { area: "Corporate Governance & AML Compliance", scope: "Regulatory compliance, Anti-Money Laundering (AML) protocols, internal control and banking ethics." },
      { area: "Green & Inclusive Financing", scope: "Pro-poor, environment-friendly and gender-sensitive project finance under Bangladesh Bank refinance schemes." }
    ],
    modules: [
      "Credit Management, Loan Appraisal & Documentation",
      "Early Alert Monitoring, Recovery & Risk Mitigation",
      "Corporate Governance & Anti-Money Laundering (AML) Compliance",
      "Bankable Project Profile Structuring for Entrepreneurs"
    ],
    methods: [
      "Bank credit committee simulation and dossier stress-testing",
      "Financial ratio, cashflow and DSCR sensitivity auditing",
      "Executive banking workshops and branch leadership coaching"
    ],
    experience: [
      {
        role: "Executive Vice President / Head of Monitoring & Early Alert / Head of Branch",
        organization: "Mercantile Bank, Prime Bank, Al-Arafah Islami Bank & NCC Bank Ltd.",
        period: "28 years",
        detail: "Held senior executive responsibilities in credit administration, branch management, central collection, recovery, compliance and banker training."
      },
      {
        role: "Director, Finance & Consultant",
        organization: "Wings Consultants BD",
        period: "Current",
        detail: "Leads project finance advisory, bank loan profile appraisal, credit structuring and financial compliance consulting."
      }
    ],
    education: [
      "M.Sc. & B.Sc. (Hons) in Geography — Jahangirnagar University",
      "Executive Programs on Credit Management, ALM, Corporate Governance & AML — BIBM, MBTI & ABB"
    ],
    sectors: [
      "Commercial & Islamic Banking",
      "Project Finance & Syndication",
      "SME & Green Financing",
      "Financial Compliance & Audit"
    ],
    affiliations: [
      "Former EVP, Banking Sector Bangladesh",
      "Fellow, Bangladesh Institute of Bank Management (BIBM)"
    ],
    quote: {
      text: "Try to be fearful when others are greedy and greedy only when others are fearful.",
      author: "Warren Buffett"
    },
    consultationTopic: "Project Profile Development"
  },
  {
    id: "vaskar-saha",
    slug: "vaskar-saha",
    name: "Vaskar Saha",
    title: "Consultant & Director, Finance",
    shortRole: "Director, Finance and Consultant",
    academicCredentials: "MBA in Marketing (IBA-DU, Valedictorian EMBA) | B.Sc in Fisheries (DU)",
    coreExpertise:
      "Corporate Sales Trainer, Agro-Industry Commercial Specialist, B2B Key Account Management & Market Analysis",
    highlights: [
      "Dynamic corporate sales trainer and commercial strategist who has trained and motivated hundreds of sales executives across Bangladesh.",
      "Over 8 years at BRAC where he served as Manager, Sales and Marketing in the Enterprises wing, generating BDT 10–12 Crore monthly revenue with a 50-member nationwide sales force.",
      "Serves as Head of Sales and Marketing at P&L International Ltd, managing corporate accounts for food-grade and industrial chemicals.",
      "Trusted B2B partner to major conglomerates including Abul Khair Group, Perfetti Van Melle BD Ltd, Nabisco, ACME, and Ispahani Foods."
    ],
    roles: [
      "Corporate Sales Trainer & Commercial Strategist",
      "Agro-Industry & Industrial Chemicals Specialist",
      "B2B Key Account Management Advisor"
    ],
    photo: "/images/team/vaskar-saha.jpg",
    summary:
      "MBA in Marketing from IBA, University of Dhaka (EMBA Valedictorian) and B.Sc in Fisheries (DU). Head of Sales & Marketing at P&L International Ltd and former Sales & Marketing Manager at BRAC Enterprises.",
    profile:
      "Vaskar Saha is a corporate sales trainer, commercial strategist, and industrial B2B leader who has built and led nationwide sales teams generating BDT 10–12 Crore in monthly revenue at BRAC Enterprises and managed major conglomerate accounts across Bangladesh.",
    bioParagraphs: [
      "Vaskar Saha is a dynamic speaker, corporate sales trainer, and commercial strategist who has trained and motivated hundreds of sales executives across Bangladesh.",
      "Mr Saha has more than 8 years of experience at BRAC (the largest development organization in the world), where he was promoted to Manager, Sales and Marketing in the Enterprises wing, ensuring revenue of BDT 10 to 12 crore per month with a nationwide 50-member sales force.",
      "In 2018, he joined P&L International Ltd as Head of Sales and Marketing, managing corporate accounts for food-grade and industrial chemicals with major conglomerates including Abul Khair Group, Perfetti Van Melle BD Ltd, Nabisco, ACME, and Ispahani Foods."
    ],
    facts: [
      { value: "IBA-DU", label: "EMBA Valedictorian (19th Batch)" },
      { value: "BDT 12 Cr/mo", label: "Sales portfolio led at BRAC Enterprises" },
      { value: "B2B & FMCG", label: "Industrial chemicals & agro-enterprise" }
    ],
    expertise: [
      { area: "Corporate & B2B Key Account Management", scope: "Enterprise sales strategy and supply agreements with top FMCG, food and pharmaceutical conglomerates." },
      { area: "Nationwide Sales Force Leadership", scope: "Territory design, target cascading, KPI tracking and motivating large field sales teams." },
      { area: "Food-Grade & Industrial Raw Material Sourcing", scope: "Commercial procurement, technical specification alignment and B2B supply chain management." },
      { area: "Commercial Feasibility & Revenue Modeling", scope: "Pricing strategy, margin optimization and realistic revenue forecasting for growing enterprises." }
    ],
    modules: [
      "Corporate Sales Excellence & B2B Key Account Mastery",
      "Territory Sales Management & Revenue Forecasting",
      "High-Impact Negotiation & Objection Handling",
      "Sales Force Motivation & Performance Leadership"
    ],
    methods: [
      "Practical field-sales playbooks and territory route optimization",
      "Real-world B2B account negotiation simulations",
      "Commercial margin and unit-economics workshops"
    ],
    experience: [
      {
        role: "Head of Sales & Marketing",
        organization: "P&L International Ltd.",
        period: "2018 – Present",
        detail: "Manages strategic B2B accounts for food-grade and industrial chemicals serving Abul Khair Group, Perfetti Van Melle, Nabisco, ACME and Ispahani Foods."
      },
      {
        role: "Manager, Sales & Marketing (Enterprises Wing)",
        organization: "BRAC",
        period: "8+ years",
        detail: "Led a 50-member nationwide sales team delivering BDT 10–12 Crore monthly turnover across BRAC social enterprises."
      }
    ],
    education: [
      "MBA in Marketing — Institute of Business Administration (IBA), University of Dhaka (Valedictorian, EMBA 19th Batch)",
      "B.Sc. in Fisheries — University of Dhaka"
    ],
    sectors: [
      "Industrial & Food-Grade Chemicals",
      "FMCG & Food Processing",
      "Agro & Fisheries Enterprises",
      "B2B Corporate Sales"
    ],
    affiliations: [
      "Valedictorian, IBA-DU EMBA (19th Batch)",
      "Head of Sales & Marketing, P&L International Ltd",
      "Former Manager, Sales & Marketing, BRAC Enterprises"
    ],
    quote: {
      text: "If the rate of change on the outside exceeds the rate of change on the inside, the end is near.",
      author: "Jack Welch"
    },
    consultationTopic: "Raw Materials & Packaging Supply"
  },
  {
    id: "suman-chowdhury",
    slug: "suman-chowdhury",
    name: "Suman Chowdhury",
    title: "Consultant & Director, HR & Training",
    shortRole: "Director, HR and Training",
    academicCredentials: "MBA in Marketing (CU) | Certified Master Trainer (BRAC & Cent Int'l UK)",
    coreExpertise:
      "Certified Master Trainer, Experiential Facilitation, Soft Skills, Leadership & Sales Performance Architect",
    highlights: [
      "Over 12 years of experience training sales, marketing, soft skills, and leadership across leading national and multinational companies.",
      "Facilitator of flagship programs including 'Boost Your Sales: Good to Great', 'Grit for Selling Excellence', 'High Performance Team Building', and 'Essential Habits for Managers'.",
      "Serves as Manager & In-Charge, Training & Development at Impress-Newtex Composite Textiles Ltd, with prior leadership at Abul Khair Tobacco, Lubna Trading, and Well Group.",
      "Completed advanced international trainer certifications at IIM, IMA International (UK), and Cent International (UK)."
    ],
    roles: [
      "Certified Master Trainer (BRAC & Cent International UK)",
      "Soft Skills, Leadership & Sales Performance Architect",
      "Certified Theory of Change Practitioner"
    ],
    photo: "/images/team/suman-chowdhury.jpg",
    summary:
      "MBA in Marketing (University of Chittagong) and Certified Master Trainer (Cent International UK & BRAC) with 12+ years leading corporate training & development across textile, FMCG and industrial groups.",
    profile:
      "Mr Suman Chowdhury is a Certified Master Trainer with over 12 years of experience designing and facilitating high-energy sales, leadership, and soft-skills transformation programmes for national and multinational companies.",
    bioParagraphs: [
      "Mr Suman Chowdhury has vast experience in training sales, marketing, soft skills, and leadership for over 12 years in leading international and national companies. He applies interactive exercises, simulations, and activities to create learning environments full of engagement and lasting behavioral change.",
      "Mr Chowdhury has facilitated numerous premier programs including 'Boost Your Sales: Good to Great', 'Grit for Selling Excellence', 'High Performance Team Building', 'Essential Habits for Managers', 'Stress Management', and 'Managerial Leadership Courses'.",
      "He currently serves as Manager & In-Charge, Training & Development at Impress-Newtex Composite Textiles Ltd, with previous career experience at Abul Khair Tobacco, Lubna Trading, and Well Group, alongside advanced international training at IIM, IMA International (UK), and Cent International (UK)."
    ],
    facts: [
      { value: "12+ Years", label: "Corporate L&D and sales training" },
      { value: "Master Trainer", label: "Cent International (UK) & BRAC" },
      { value: "IIM & IMA UK", label: "International executive credentials" }
    ],
    expertise: [
      { area: "Experiential Sales & Marketing Facilitation", scope: "Signature programs including 'Boost Your Sales: Good to Great' and 'Grit for Selling Excellence'." },
      { area: "Managerial Leadership & Team Building", scope: "High-performance team building, supervisory habits, emotional intelligence and stress mastery." },
      { area: "Industrial & RMG Training Systems", scope: "Establishing structured Training & Development (T&D) departments, TNA and competency matrices in composite textile and manufacturing units." },
      { area: "Theory of Change & Behavioral Facilitation", scope: "Simulation-driven adult learning that translates classroom concepts into measurable workplace habits." }
    ],
    modules: [
      "Boost Your Sales: Good to Great",
      "Grit for Selling Excellence",
      "High Performance Team Building",
      "Essential Habits for Managers & Managerial Leadership",
      "Emotional Intelligence, Stress & Time Management",
      "Workplace Communication & Positive Attitude"
    ],
    methods: [
      "High-engagement experiential simulations and team challenges",
      "Behavioral role-playing and video/peer feedback clinics",
      "Structured post-training action plans for workplace retention"
    ],
    experience: [
      {
        role: "Manager & In-Charge, Training & Development",
        organization: "Impress-Newtex Composite Textiles Ltd.",
        period: "Current",
        detail: "Heads organizational learning, leadership development and workforce skill upgradation."
      },
      {
        role: "Training & Commercial Roles",
        organization: "Abul Khair Tobacco, Well Group & Lubna Trading",
        period: "12+ years",
        detail: "Designed and delivered sales capability, trade marketing and leadership curricula across FMCG and manufacturing conglomerates."
      }
    ],
    education: [
      "MBA in Marketing — University of Chittagong",
      "Certified Master Trainer — BRAC & Cent International (UK)",
      "Advanced Executive Programs — IIM & IMA International (UK)"
    ],
    sectors: [
      "RMG & Composite Textiles",
      "FMCG & Tobacco",
      "Retail & Distribution",
      "Corporate L&D"
    ],
    affiliations: [
      "Master Trainer, Cent International (UK)",
      "Manager & In-Charge (T&D), Impress-Newtex Composite Textiles Ltd"
    ],
    quote: {
      text: "Your attitude, not your aptitude, will determine your altitude.",
      author: "Zig Ziglar"
    },
    consultationTopic: HR_TRAINING_PRACTICE
  },
  {
    id: "rubaiat-bin-tarik",
    slug: "rubaiat-bin-tarik",
    name: "Rubaiat Bin Tarik",
    title: "Consultant & Director, Marketing & Sales",
    shortRole: "Director, Marketing and Sales",
    academicCredentials: "BBA & MBA in Marketing and Finance (IUB)",
    coreExpertise:
      "B2B & Government Sales, Channel Distribution, Brand Development, Strategic Pricing & Team Leadership",
    highlights: [
      "Over 10 years of commercial and corporate sales leadership across banking, real estate, electrical manufacturing, and technology.",
      "Progressed through IFIC Bank Ltd, Impress Group, Bay Developments, Core Knowledge Ltd, Sonic Group (leading 100+ sales personnel), and Super Star Group (SSG).",
      "Managed nationwide corporate and government institutional clients at Super Star Group (SSG) and served as Corporate Sales Manager at BRAC Enterprises.",
      "Currently serves as Head of Sales at Platform Solutions Limited, specializing in client relationship development, market analysis, and sales force motivation."
    ],
    roles: [
      "Corporate Sales Leader",
      "Brand Strategist & Channel Distribution Specialist",
      "B2B & Government Tenders Advisor"
    ],
    photo: "/images/team/rubaiat-bin-tarik.jpg",
    summary:
      "BBA & MBA in Marketing and Finance from Independent University, Bangladesh (IUB). Over 10 years of corporate sales leadership at IFIC Bank, Super Star Group (SSG), BRAC Enterprises, and Platform Solutions Ltd.",
    profile:
      "Rubaiat Bin Tarik is a commercial operations and corporate sales specialist with over a decade of experience leading B2B, government, and channel sales teams across banking, electrical manufacturing, social enterprises, and technology.",
    bioParagraphs: [
      "Rubaiat Bin Tarik has more than 10 years of experience in sales and marketing across high-growth corporations. He started his career at IFIC Bank Ltd and advanced through Impress Group (IPOST Services), Bay Developments, Core Knowledge Ltd, Sonic Group (leading 100+ sales personnel), and Super Star Group (SSG).",
      "At Super Star Group (SSG), he managed corporate and government clients across Bangladesh for industrial lighting and low-voltage electrical systems. He subsequently joined BRAC Enterprises as Corporate Sales Manager and currently serves as Head of Sales at Platform Solutions Limited.",
      "His key strengths include client relationship development, market analysis, workplace communication, sales force motivation, and strategic brand pricing management."
    ],
    facts: [
      { value: "10+ Years", label: "Corporate & institutional sales leadership" },
      { value: "100+ Reps", label: "Sales force management experience" },
      { value: "BBA & MBA", label: "Marketing & Finance (IUB)" }
    ],
    expertise: [
      { area: "B2B & Government Institutional Sales", scope: "Corporate pre-qualification, tender documentation, institutional account management and B2B relationship building." },
      { area: "Channel Distribution & Brand Pricing", scope: "Dealer network expansion, trade promotion, strategic pricing and go-to-market execution." },
      { area: "Corporate Profile & Pitch Positioning", scope: "Crafting compelling commercial value propositions, vendor enlistment dossiers and corporate presentations." },
      { area: "Sales Team Leadership & Motivation", scope: "Recruiting, coaching and driving performance across 100+ member field and corporate sales teams." }
    ],
    modules: [
      "Corporate & Institutional Sales Excellence",
      "Trade & Retail Marketing with Channel Distribution",
      "Strategic Brand Management & Pricing Strategy",
      "Developing Win-Win Corporate Negotiation Skills"
    ],
    methods: [
      "Go-to-market and dealer network diagnostic mapping",
      "B2B pitch deck and institutional proposal structuring",
      "Interactive sales call and objection-handling clinics"
    ],
    experience: [
      {
        role: "Head of Sales",
        organization: "Platform Solutions Limited",
        period: "Current",
        detail: "Directs commercial strategy, enterprise client acquisition and revenue growth."
      },
      {
        role: "Corporate Sales Manager",
        organization: "BRAC Enterprises & Super Star Group (SSG)",
        period: "Senior Management",
        detail: "Managed nationwide corporate and government institutional clients across industrial lighting, electrical systems and enterprise products."
      },
      {
        role: "Sales & Banking Roles",
        organization: "Sonic Group, Bay Developments, Impress Group & IFIC Bank Ltd.",
        period: "Career Progression",
        detail: "Led 100+ sales personnel and built commercial distribution channels across diverse industries."
      }
    ],
    education: [
      "MBA in Marketing & Finance — Independent University, Bangladesh (IUB)",
      "BBA in Marketing & Finance — Independent University, Bangladesh (IUB)"
    ],
    sectors: [
      "Industrial & Electrical Manufacturing",
      "Corporate & Institutional B2B",
      "Real Estate & Technology",
      "Banking & Financial Services"
    ],
    affiliations: [
      "Head of Sales, Platform Solutions Ltd",
      "Former Corporate Sales Manager, BRAC Enterprises",
      "Former Corporate Manager, Super Star Group (SSG)"
    ],
    quote: {
      text: "If we hire people who are smaller, we shall become a company of dwarfs.",
      author: "David Ogilvy"
    },
    consultationTopic: "Company Profile & Pitch Deck"
  },
  {
    id: "nil-ratan-barai",
    slug: "nil-ratan-barai",
    name: "Nil Ratan Barai",
    title: "Senior Officer, Accounts",
    shortRole: "Senior Officer, Accounts",
    academicCredentials: "Master of Commerce in Accounting & Financial Management",
    coreExpertise:
      "Corporate Accounting, Financial Reporting, Tax & VAT Documentation, Budgeting & Audit Readiness",
    highlights: [
      "Leads day-to-day financial accounting, bookkeeping, and ledger reconciliation for Wings Consultants BD and client engagements.",
      "Prepares statutory tax computation sheets, withholding tax (TDS/VDS) schedules, and audit-ready financial documentation.",
      "Supports multi-year donor project budgeting, expenditure tracking, and financial compliance reporting.",
      "Ensures accuracy, fiscal discipline, and timely settlement across corporate accounts and billing operations."
    ],
    roles: [
      "Senior Officer, Accounts",
      "Financial Reporting & Tax Documentation Specialist"
    ],
    photo: "/images/team/nil-ratan-barai.jpg",
    summary:
      "Senior Officer, Accounts at Wings Consultants BD, overseeing corporate accounting, tax and VAT schedules, donor budget tracking, and audit-ready financial documentation.",
    profile:
      "Nil Ratan Barai serves as Senior Officer, Accounts at Wings Consultants BD, managing financial accounting, tax compliance schedules, project budget tracking, and statutory audit readiness.",
    facts: [
      { value: "Accounts", label: "Financial reporting & ledger control" },
      { value: "Tax & VAT", label: "TDS/VDS & compliance schedules" },
      { value: "Audit Ready", label: "Statutory & donor documentation" }
    ],
    expertise: [
      { area: "Corporate Accounting & Bookkeeping", scope: "Financial statements, bank reconciliations, cashflow tracking and voucher management." },
      { area: "Tax & VAT Schedules", scope: "Supporting corporate and individual tax return computations, TDS/VDS schedules and compliance files." }
    ],
    modules: [],
    methods: [
      "Double-entry financial verification and statutory audit checklists",
      "Transparent activity-based budget tracking and variance reporting"
    ],
    experience: [
      {
        role: "Senior Officer, Accounts",
        organization: "Wings Consultants BD",
        period: "Current",
        detail: "Manages corporate accounts, client billing, tax documentation schedules and financial reporting."
      }
    ],
    education: [
      "Master of Commerce in Accounting & Financial Management"
    ],
    sectors: [
      "Corporate Accounting",
      "Taxation & Audit Support",
      "NGO Financial Compliance"
    ],
    consultationTopic: "Income Tax Consultancy"
  },
  {
    id: "kalpona-rani-chakroborti",
    slug: "kalpona-rani-chakroborti",
    name: "Kalpona Rani Chakroborti",
    title: "Officer, Admin",
    shortRole: "Officer, Admin",
    academicCredentials: "Bachelor & Master of Social Science | Office & Operations Administration",
    coreExpertise:
      "Office Administration, Client Coordination, Workshop Logistics, Documentation & Institutional Support",
    highlights: [
      "Oversees daily office administration, front-desk client coordination, and scheduling for Wings Consultants BD.",
      "Manages logistics, training materials, and participant coordination for corporate workshops and consulting sessions.",
      "Maintains regulatory dossier archives, project profile bindings, and confidential client records.",
      "Ensures seamless communication between clients, senior consultants, and regulatory liaison teams."
    ],
    roles: [
      "Officer, Administration",
      "Client Coordination & Workshop Operations"
    ],
    photo: "/images/team/kalpona-rani-chakroborti.jpg",
    summary:
      "Officer, Admin at Wings Consultants BD, coordinating office operations, client scheduling, regulatory dossier preparation, and corporate workshop logistics.",
    profile:
      "Kalpona Rani Chakroborti serves as Officer, Admin at Wings Consultants BD, ensuring smooth administrative operations, client communication, document management, and training workshop coordination.",
    facts: [
      { value: "Admin", label: "Operations & office management" },
      { value: "Logistics", label: "Workshop & training coordination" },
      { value: "Client Care", label: "Scheduling & dossier management" }
    ],
    expertise: [
      { area: "Office & Operations Administration", scope: "Day-to-day administrative management, records archival and procurement support." },
      { area: "Client & Workshop Coordination", scope: "Consultation scheduling, participant registration and training session logistics." }
    ],
    modules: [],
    methods: [
      "Structured document control and client response tracking",
      "End-to-end event and workshop readiness checklists"
    ],
    experience: [
      {
        role: "Officer, Admin",
        organization: "Wings Consultants BD",
        period: "Current",
        detail: "Coordinates office administration, client inquiries, document formatting and workshop logistics."
      }
    ],
    education: [
      "Master of Social Science (M.S.S.)"
    ],
    sectors: [
      "Corporate Administration",
      "Client Relations",
      "Event & Workshop Operations"
    ],
    consultationTopic: HR_TRAINING_PRACTICE
  },
  {
    id: "expert-1",
    slug: "dr-muhammad-abdul-bari",
    name: "Dr. Muhammad Abdul Bari",
    title: "HR Expert",
    shortRole: "HR Expert & Management Consultant",
    academicCredentials: "PhD in Human Resource Management (2007)",
    coreExpertise:
      "Strategic HRM, Leadership & Management, Training of Trainers (ToT), Organizational Development & Development Finance",
    highlights: [
      "Combines a PhD in Human Resource Management with 19+ years of senior experience in the NGO and development sector in Bangladesh.",
      "Provides senior advisory support to NGOs, social enterprises, and institutions on HRM, organizational effectiveness, and programme management.",
      "Serves as Development & Management Consultant at Work Info and Funding & Investment Consultant at Ashroy Angon Society (AAS).",
      "Designs and facilitates executive workshops on Strategic HRM, Leadership, Training of Trainers (ToT), Donor Relations, and Development Finance."
    ],
    roles: [
      "Professional Trainer",
      "HRM & Management Consultant",
      "Development & Capacity-Building Specialist"
    ],
    photo: "/images/team/muhammad-abdul-bari.webp",
    summary:
      "PhD in Human Resource Management with 19+ years in the NGO and development sector. Leads our HR advisory, leadership training and capacity-building work.",
    profile:
      "Senior development and management professional who combines a PhD in Human Resource Management with extensive practical experience in staff development, recruitment, HR systems, programme and project management, organizational effectiveness, strategic partnerships, donor engagement and development finance. Works closely with NGO leadership, management teams, project professionals and community-oriented institutions, and turns complex management and development concepts into practical, participant-focused learning, tools and workplace applications.",
    facts: [
      { value: "19+ Years", label: "NGO & development-sector experience" },
      { value: "PhD", label: "Human Resource Management" },
      { value: "Senior", label: "Advisory engagement with leadership teams" }
    ],
    expertise: [
      { area: "Strategic HRM & Workforce Development", scope: "HR planning, recruitment and selection, onboarding, performance management, staff development, competency frameworks and retention." },
      { area: "Leadership & Management", scope: "Leadership effectiveness, supervision, delegation, decision-making, communication, team management and workplace performance." },
      { area: "Training of Trainers (ToT)", scope: "Training needs assessment, learning objectives, adult-learning principles, session planning, facilitation, presentation and evaluation." },
      { area: "Organizational Development", scope: "Institutional strengthening, organizational effectiveness, change management, culture, role clarity and performance improvement." },
      { area: "Programme & Project Management", scope: "Project cycle management, work planning, implementation, monitoring, reporting, coordination and risk management." },
      { area: "NGO & Development Management", scope: "NGO management, stakeholder engagement, partnership development, donor relations and development-sector practice." },
      { area: "Resource Mobilization & Partnerships", scope: "Donor engagement, funding readiness, strategic partnerships, proposal concepts and resource mobilization." },
      { area: "Development Finance & Social Enterprise", scope: "Investment readiness, blended-finance concepts, enterprise development and community-based economic initiatives." }
    ],
    modules: [
      "Strategic Human Resource Management for NGOs and Development Organizations",
      "Recruitment, Selection, Onboarding and Staff Retention",
      "Performance Management and Staff Development",
      "Leadership and Supervisory Skills for NGO Managers",
      "Team Building, Communication and Workplace Effectiveness",
      "Training of Trainers (ToT) and Professional Facilitation Skills",
      "Organizational Development and Change Management",
      "Project & Programme Management for Development Professionals",
      "Donor Relations, Strategic Partnerships and Resource Mobilization",
      "Funding Readiness, Proposal Concepts and Development Finance",
      "Social Enterprise and Community Enterprise Development",
      "Professional Ethics, Accountability and Institutional Effectiveness"
    ],
    methods: [
      "Training Needs Assessment (TNA) and competency-gap identification",
      "Adult learning, participatory facilitation and experience-based learning",
      "Session design, learning objectives, exercises, case studies and group work",
      "Executive and management workshops and professional development sessions",
      "Training materials, presentations, facilitator notes and practical tools",
      "Pre/post learning checks, participant feedback and training evaluation",
      "Linking training outcomes to organizational performance and workplace application"
    ],
    experience: [
      {
        role: "Development & Management Consultant / HRM & Development Finance Consultant",
        organization: "Work Info, Bangladesh",
        period: "Current",
        detail: "Senior advisory support to NGOs, social enterprises and local institutions on HRM, organizational effectiveness, programme and project management, strategic partnerships, donor engagement, resource mobilization, development finance and funding readiness."
      },
      {
        role: "Funding & Investment Consultant",
        organization: "Ashroy Angon Society (AAS), Bangladesh",
        period: "2026 – Present",
        detail: "Institutional funding strategy, partnership development, donor and investor engagement, project concept development and blended funding initiatives in community enterprise, eco-tourism, green value chains and agriculture."
      },
      {
        role: "Senior NGO / Development Management",
        organization: "NGO & Development Sector, Bangladesh",
        period: "19+ years",
        detail: "Progressive experience in staff development, recruitment, HR systems, project and programme management, institutional development, stakeholder coordination, donor relations and partnership building, including senior management responsibilities."
      }
    ],
    education: [
      "PhD in Human Resource Management — University of Southern California, 2007",
      "Professional and academic development in HRM, management and development practice"
    ],
    sectors: [
      "NGO & development management",
      "Human resources & staff development",
      "Community enterprise",
      "Climate-smart agriculture",
      "Renewable energy",
      "Eco-tourism",
      "Sustainable livelihoods",
      "Inclusive finance",
      "SME & social enterprise",
      "Institutional capacity building"
    ],
    consultationTopic: HR_TRAINING_PRACTICE
  }
];

export const initialTrainingStreams: TrainingStream[] = [
  {
    id: "sales-customer-service",
    title: "Sales and Customer Service",
    shortDesc: "High-impact salesmanship, retail conversations, client negotiation, and exceptional customer retention strategies.",
    icon: "TrendingUp",
    tag: "Revenue & Client Growth",
    color: "from-blue-600 to-sky-700",
    courses: [
      "Sales Techniques for Better Performance",
      "Excellence in Sales Leadership",
      "Salesmanship for Professional and Personal Growth",
      "Selling Skill Development and Salesmanship",
      "Innovation in Sales Techniques",
      "Selling Excellence: Know to grow-as you sow",
      "Effective and Productive Sales Call",
      "Managing Sales for Growth Opportunities",
      "Corporate Sales Excellence",
      "Positive Conversations with Challenging Customers",
      "Asking Great Sales Questions",
      "Mastering Conversations in Retail Sales",
      "Successful Sales Call Habits",
      "Customer Acquisition and Retention Techniques",
      "Customer Service Excellence"
    ],
    deliverables: [
      "Field Sales Conversion Playbook",
      "Objection Handling Frameworks",
      "Retail & Corporate Pitch Templates",
      "Customer Lifetime Value (LTV) Toolkits"
    ],
    targetAudience: ["Territory Sales Managers", "Corporate Account Executives", "Retail Sales Teams", "Customer Experience Leads"]
  },
  {
    id: "marketing-branding",
    title: "Marketing and Branding",
    shortDesc: "Comprehensive market mapping, strategic brand positioning, segmentation, and modern digital trends.",
    icon: "Megaphone",
    tag: "Market Penetration",
    color: "from-amber-600 to-orange-700",
    courses: [
      "Marketing for Non-Marketing Professionals",
      "Market Mapping and Planning for Growth",
      "Customer Identification by Market Segmentation",
      "Building Brand from Scratch",
      "Strategic Brand Management",
      "Brand Extensions Techniques for Sustainability",
      "Trade and Retail Marketing with Distribution Ideas",
      "Capturing Customer Mindset",
      "Maintain Customer Expectation and Satisfaction",
      "Service Marketing",
      "Digital Marketing Trends",
      "Planning and Implementing Marketing Instruments",
      "Marketing Plan: Need for Business Gain",
      "Developing Effective Marketing Strategy",
      "Strategies for Market Growth",
      "Marketing is Everything",
      "Market Access Map: A Tool to Sustain"
    ],
    deliverables: [
      "Go-To-Market Blueprint",
      "Customer Persona Matrices",
      "Trade Distribution Route Planning",
      "Brand Identity Guidelines"
    ],
    targetAudience: ["Brand Managers", "Product Marketing Officers", "Entrepreneurs", "Trade Marketing Specialists"]
  },
  {
    id: "management-leadership",
    title: "Management and Leadership",
    shortDesc: "Strategic enterprise leadership, Blue Ocean Strategy, Game Theory, and visionary team execution.",
    icon: "ShieldCheck",
    tag: "Executive Excellence",
    color: "from-slate-800 to-slate-950",
    courses: [
      "Strategic Business Management",
      "Blue Ocean Strategy: In Search of Excellence",
      "Managerial Skills Development",
      "Managerial Effectiveness through Leadership",
      "Enterprise Competitiveness",
      "Effective Team Management",
      "Game Theory to Shape Strategy",
      "Entrepreneurship Development",
      "Team Building Excellence",
      "Lead Excellence: Drive the Way",
      "Social Marketing and Enterprises",
      "Swarm Behavior and Intelligence",
      "Good to Great: Why Some Companies Make the Leap",
      "Built to Last: Habits of Visionary Companies",
      "Setting Team and Employee Goals",
      "Where to Focus: Weaknesses or Strengths?"
    ],
    deliverables: [
      "Leadership Capability Index",
      "Blue Ocean Strategy Matrix",
      "OKRs & KPI Cascading Systems",
      "Executive Decision Matrix"
    ],
    targetAudience: ["C-Suite Executives", "Department Heads", "Mid-Level Managers", "Aspiring Leaders"]
  },
  {
    id: "personality-development",
    title: "Personality Development",
    shortDesc: "Emotional intelligence, attitude elevation, change management, and time-stress mastery for workplace success.",
    icon: "Sparkles",
    tag: "Human Potential",
    color: "from-violet-700 to-purple-900",
    courses: [
      "Delivering Beyond Yourself",
      "Emotional Intelligence for Success",
      "Workplace Communication",
      "Behavior & Attitude for a Better Workplace",
      "Right Attitude for Right Business",
      "Dream, Hope and Passion to be Successful",
      "Change Management",
      "Stress and Time Management",
      "Motivation for Success",
      "When: The Scientific Secrets of Perfect Timing"
    ],
    deliverables: [
      "Personal Productivity System",
      "Emotional Agility Roadmap",
      "Workplace Stress Audit Tool",
      "Effective Communication Habits"
    ],
    targetAudience: ["All Corporate Professionals", "Frontline Staff", "HR Professionals", "Project Teams"]
  },
  {
    id: "advertising-pr",
    title: "Advertising and PR",
    shortDesc: "Media analysis, innovative PR campaigns, promotional strategies, and corporate brand advocacy.",
    icon: "Radio",
    tag: "Brand Visibility",
    color: "from-rose-600 to-red-800",
    courses: [
      "What to do: Advertising, Promotion or PR?",
      "Advertising Media Analysis",
      "New Advertising and PR Ideas",
      "Trade and Consumer Promotion"
    ],
    deliverables: [
      "Media Budget Optimization Matrix",
      "PR Crisis Management Protocols",
      "Campaign ROI Evaluation Guide"
    ],
    targetAudience: ["PR Officers", "Media Planners", "Communications Directors", "Creative Directors"]
  },
  {
    id: "communication-relationship",
    title: "Communication and Relationship",
    shortDesc: "Win-win negotiation, corporate dialogue mastery, and long-term customer relationship ecosystems.",
    icon: "MessagesSquare",
    tag: "Strategic Dialogue",
    color: "from-teal-600 to-emerald-800",
    courses: [
      "Customer Relationship Management (CRM)",
      "Effective Corporate Communication Skills",
      "Developing Win-Win Negotiation Skills",
      "Communication: Connecting to Go Beyond",
      "Communication and Relationship Management"
    ],
    deliverables: [
      "Corporate Communication Protocol",
      "Win-Win Negotiation Cheat Sheet",
      "Stakeholder Engagement Blueprint"
    ],
    targetAudience: ["Key Account Managers", "Procurement Officers", "Client Relations Leads", "Negotiators"]
  },
  {
    id: "operations-management",
    title: "Operations Management",
    shortDesc: "Total Quality Management (TQM) in light of Toyota Production System (TPS) and lead time optimization.",
    icon: "Settings",
    tag: "Operational Efficiency",
    color: "from-cyan-700 to-blue-900",
    courses: [
      "Production and Lead Time Management",
      "TQM in light of TPS (Toyota Production System)"
    ],
    deliverables: [
      "Lean Production Flow Assessment",
      "Waste Elimination (Muda) Checklist",
      "Lead Time Compression Plan"
    ],
    targetAudience: ["Factory Managers", "Operations Heads", "Supply Chain Specialists", "Quality Assurance Teams"]
  }
];

export const initialClientPartners: ClientPartner[] = [
  { id: "brac", name: "BRAC", category: "World's #1 Development Organization", tagline: "Empowering People" },
  { id: "brac-fisheries", name: "BRAC Fisheries", category: "BRAC Social Enterprise", tagline: "Sustainable Aquaculture" },
  { id: "brac-chicken", name: "BRAC Chicken", category: "Poultry & Agro Enterprise", tagline: "Quality Nutrition" },
  { id: "brac-solar", name: "BRAC Solar", category: "Renewable Energy", tagline: "Green Power for Bangladesh" },
  { id: "aarong-dairy", name: "Aarong Dairy", category: "Dairy & FMCG", tagline: "Milk for Good" },
  { id: "bank-asia", name: "Bank Asia", category: "Commercial Banking", tagline: "Pioneering Agent Banking" },
  { id: "city-bank", name: "City Bank", category: "Financial Services", tagline: "Making Sense of Money" },
  { id: "bengal", name: "Bengal Group", category: "Conglomerate & Polymers", tagline: "আস্থা শতভাগ" },
  { id: "bengal-solar", name: "Bengal Solar", category: "Clean Energy Enterprise", tagline: "Solar Solutions" },
  { id: "paragon-group", name: "Paragon Group", category: "Agro, Feed & Farming", tagline: "Agricultural Excellence" },
  { id: "rupayan", name: "Rupayan Group", category: "Real Estate & Infrastructure", tagline: "Building The Nation" },
  { id: "renata-agro", name: "Renata Agro", category: "Animal Health & Nutrition", tagline: "Scientific Farming" },
  { id: "aman-cem", name: "Aman Cem", category: "Heavy Industry & Cement", tagline: "Safe & Save" },
  { id: "anchor-cement", name: "Anchor Cement", category: "Construction Materials", tagline: "Strength & Durability" },
  { id: "fareast-life", name: "Fareast Islami Life Insurance", category: "Islamic Insurance & Takaful", tagline: "Financial Security" },
  { id: "axon", name: "Axon Limited", category: "Technology & Communications", tagline: "Connected Solutions" },
  { id: "eat-fast", name: "eat@", category: "Food & Hospitality", tagline: "food. fun. fast" },
  { id: "ab-corp", name: "AB Corporation Ltd", category: "Industrial Solutions", tagline: "www.abcorporation.net" },
  { id: "provet", name: "Provet Resources Ltd", category: "Veterinary & Agro Science", tagline: "Best Additives for Best Feed" },
  { id: "rel-furniture", name: "REL Furniture Ltd", category: "Commercial & Office Furniture", tagline: "Quality Living" }
];

export const initialInspirationalQuotes: InspirationalQuote[] = [
  {
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar"
  },
  {
    quote: "Nothing is impossible; the word itself says, 'I’m possible!'",
    author: "Audrey Hepburn"
  },
  {
    quote: "The world is full of magical things patiently waiting for our wits to grow sharper.",
    author: "Bertrand Russell"
  },
  {
    quote: "No axe is sharp enough to cut the soul who keeps on trying.",
    author: "Nelson Mandela"
  },
  {
    quote: "High achievement always takes place in the framework of high expectations.",
    author: "Charles Kettering"
  },
  {
    quote: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
    author: "Jack Ma"
  },
  {
    quote: "It is hard to accept fail, but it is worse never to have tried to succeed.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas A Edison"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Try to be fearful when others are greedy and greedy only when others are fearful.",
    author: "Warren Buffett"
  },
  {
    quote: "If the rate of change on the outside exceeds the rate of change on the inside, the end is near.",
    author: "Jack Welch"
  },
  {
    quote: "If we hire people who are smaller, we shall become a company of dwarfs.",
    author: "David Ogilvy"
  }
];
