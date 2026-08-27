import {
  CompanyInfo,
  TrainingStream,
  TeamMember,
  ClientPartner,
  TrainingObjective,
  TrainingMethod,
  LearningOutcome,
  InspirationalQuote,
  ConsultationLead
} from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: "Wings Consultants",
  tagline: "For Training and Development",
  motto: "Sky is not the Limit- It's an Opportunity",
  positioning: "A Dynamic Training & Development Consulting Firm",
  subTitle: "Delivering Advanced Management Solutions",
  mainAddress: "7/9 Eastern Commercial Complex, 73 Kakrail, Dhaka",
  liaisonAddress: "76 Mohakhali, Dhaka",
  phones: ["01730-349633", "01313-362633"],
  email: "wingsconsultantsbd@gmail.com",
  website: "www.wingsconsultantsbd.com",
  businessHours: "Saturday – Thursday: 9:00 AM – 7:00 PM",
  stats: {
    corporateClients: "50+",
    trainingModules: "60+",
    keyConsultants: "10+",
    satisfactionRate: "99%"
  },
  socialLinks: {
    facebook: "https://facebook.com/wingsconsultantsbd",
    linkedin: "https://linkedin.com/company/wings-consultants-bd",
    whatsapp: "https://wa.me/8801730349633"
  }
};

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

export const initialTeamMembers: TeamMember[] = [
  {
    id: "monirul-hasan",
    name: "Md Monirul Hasan",
    designation: "Executive Director and Lead Consultant",
    role: "Social Business Specialist, Soft Skill, Lifeskill, Theory of Change, Personality Development and Motivational Trainer",
    qualifications: "MBA in Marketing, Military Institute of Science and Technology (MIST) under Dhaka University | Post Graduate Diploma in Personnel Management (PGDPM)",
    specialization: "Experiential Learning, Leadership, Blue Ocean Strategy, Market Feasibility & Training Facilitation",
    bioParagraphs: [
      "Mr Monirul Hasan, the ED and Lead Consultant of Wings Consultants, brings with him over 15 years of working experience in a variety of fields, including Social Marketing, Business and Enterprises, Marketing, Market Mapping and Planning, Training and Workshop, Category Management, Customer Excellence, Forecasting, Market Research and Feasibility Study, Operations Management and Demand-Supply analysis in BATB, one of the leading MNCs in Bangladesh; BRAC, World's No 1 NGO; and BDJOBS Training, the country's leading job and training portal.",
      "Mr Hasan is the Managing Director of Pure Enterprise Private Limited, a fast moving consumer goods (FMCG) company. He is a big picture thinker, talented and driven to impact, while ensuring compliance to policies and procedures. He is a skilled provider of advanced leadership, guidance and motivation. He has extensive facilitation skills on Teambuilding and Leadership, Blue Ocean Strategy, Game Theory and Personality Development.",
      "He has participated in more than 50 trainings and workshops, 100 recruitments and took such opportunities as learning processes on related industries. He has consultation experience on FAO (Rome), NDDB (India), BEPZA, DLS and Bangladesh Railway projects. He has survey, analytical research and baseline study experience across RMG, agriculture and FMCG sectors, visiting extensively in most upazillas of all 64 districts of Bangladesh."
    ],
    quote: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
    quoteAuthor: "Jack Ma",
    image: "/images/monirul_hasan.jpg",
    affiliations: ["Executive Member, BUPBGA", "Member, MIST MBA Association", "Deputy Director, Jakat Foundation", "Advisor, Prerona Kallyan Sangstha"]
  },
  {
    id: "a-saleque",
    name: "Md A Saleque",
    designation: "Chief Technical Advisor / Senior Consultant",
    role: "Agri-Business, Livestock, Microfinance & Sustainable Rural Enterprise Specialist",
    qualifications: "MBA in Marketing | Doctor of Veterinary Medicine (DVM)",
    specialization: "Livestock & Dairy Development, Food Security, SME Planning & International Donor Projects",
    bioParagraphs: [
      "Md A Saleque is the Chief Technical Advisor, ACI Animal Health. He worked in different capacities in various organizations as Adviser, AFSL, BRAC International; Programme Head, Agro & Salt Industry of BRAC; and Country Team Coordinator for SAPPLPP.",
      "His experience includes working with government, private sector and international organizations (IFAD, DANIDA, UNDP, USAID, WFP, ADB, World Bank) as Moderator, Consultant, resource person, Guest Speaker on food security and food aid, planning and designing of various SMEs for the poor and marginal farmer, rural development, agriculture (Poultry, Dairy, Fisheries, seed), and microfinance. He has led about 2,000 staff handling project implementation, management, administration and finance.",
      "Mr Saleque has more than 20 publications in reputed journals in Denmark, Indonesia, Malaysia, and India on Microfinance, Poultry Industry, Poultry health and Biosecurity, and Small scale dairy development. He is Co-chairman of FBCCI standing committee on Livestock & Poultry."
    ],
    quote: "It is hard to accept fail, but it is worse never to have tried to succeed.",
    quoteAuthor: "Theodore Roosevelt",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Co-chairman, FBCCI Standing Committee", "Secretary, WPSA", "Treasurer, Poultry Breeder Association"]
  },
  {
    id: "mokarrom-hossain",
    name: "Md Mokarrom Hossain",
    designation: "Senior Consultant & Technical Advisor",
    role: "Aquaculture, Rural Development, Baseline Surveys & Agro-Production Specialist",
    qualifications: "PhD in Brood Science | M.Sc in Aquaculture | B.Sc. Fisheries (Hons.)",
    specialization: "Natural Resources Management, Agro-Enterprises, Project Proposals & Feasibility Studies",
    bioParagraphs: [
      "Mr Mokarrom Hossain has worked in local and international NGOs as Deputy Chief of Party at Winrock International, Project Leader at WorldFish, Program Manager (Agro Production) of BRAC, and Program Manager (Fisheries Enterprise) of BRAC.",
      "He has professional achievements across Fisheries Enterprises, Seed Enterprises, Horticulture Nurseries, Tissue Culture Laboratories, and Soil Analysis Laboratories. He has vast capacity in mobilizing community people for rural development initiatives and preparing training manuals, feasibility reports, survey questionnaires, and baseline surveys.",
      "Mr Mokarrom has supported as Consultant at FAO, ActionAid, DANIDA-GOB-CODEC, WINROCK INTERNATIONAL, IFAD, DFID, Ford Foundation, and World Bank supported projects across the UK, Scotland, Malaysia, Philippines, Thailand, India and Nepal."
    ],
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas A Edison",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Consultant, FAO & World Bank Projects", "Former Deputy Chief of Party, Winrock International", "Former Program Manager, BRAC"]
  },
  {
    id: "kamrun-nessa-ahmed",
    name: "Kamrun Nessa Ahmed",
    designation: "Consultant & HR Specialist",
    role: "Human Resource Development, Organizational Policy & Leadership Mentoring",
    qualifications: "Honours and Masters, Major in Sociology from Dhaka University | Post Graduate Diploma in Personnel Management (PGDPM), BIM",
    specialization: "HR Policy Formulation, Talent Acquisition, Employee Welfare & Corporate Culture Transformation",
    bioParagraphs: [
      "Kamrun Nessa Ahmed is the Joint Director heading the HR Department of National Health Care Network (NHN), a premier venture of the Diabetic Association of Bangladesh (DAB). She has been working with NHN for more than 20 years, dedicated to enhancing organizational capabilities in complex healthcare environments.",
      "She has extensive exposure in developing and implementing HR operations, resource mobilization, and quality of operations. She has ability to mentor staff, provide guidance for achieving goals, work with multi-cultural groups, and establish effective reporting and presentation systems.",
      "She is an expert in building company policies that harmonize corporate objectives with employee benefits within national labor laws and best practices, championing HR as a strategic pillar for institutional longevity."
    ],
    quote: "The best way to predict the future is to create it.",
    quoteAuthor: "Peter Drucker",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Joint Director, HR Department NHN (DAB)", "Member, NHN Recruitment & Policy Committee"]
  },
  {
    id: "kawser-uddin-ahmed",
    name: "Kawser Uddin Ahmed",
    designation: "Director, Finance and Consultant",
    role: "Banker & Leader in Pro-Poor, Environment Friendly and Gender Sensitive Development",
    qualifications: "Honours and Masters in Geography from Jahangirnagar University | 28 Years Banking Leadership",
    specialization: "Credit Administration, Risk Management, Central Collection, Recovery & Financial Compliance",
    bioParagraphs: [
      "Mr Kawser Uddin Ahmed brings with him about 28 years of experience in renowned banks in Bangladesh, covering training, performance management, mentoring, succession planning, credit administration, monitoring, recovery, and compliance.",
      "His professional journey includes senior leadership roles at Mercantile Bank Limited, Prime Bank Limited, Al-Arafah Islami Bank Limited, and National Credit & Commerce Bank Limited. He has served as Executive Vice President, Head of Monitoring & Early Alert Division, and Head of Branch.",
      "Mr Ahmed has attended extensive executive programs at BIBM, MBTI, and ABB on Credit Management, Asset Liability Management, Corporate Governance, and Anti-Money Laundering. He has travelled across the UK, USA, Canada, France, UAE, Singapore, Malaysia, and China."
    ],
    quote: "Try to be fearful when others are greedy and greedy only when others are fearful.",
    quoteAuthor: "Warren Buffett",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Former EVP, Banking Sector Bangladesh", "Fellow, Bangladesh Institute of Bank Management (BIBM)"]
  },
  {
    id: "vaskar-saha",
    name: "Vaskar Saha",
    designation: "Consultant and Director, Finance",
    role: "Corporate Sales Trainer, Agro-Industry Commercial Specialist & Dynamic Speaker",
    qualifications: "MBA in Marketing (IBA-DU, Valedictorian EMBA 19th Batch) | B.Sc in Fisheries from Dhaka University",
    specialization: "Corporate Sales Strategy, B2B Key Account Management, Sales Motivation & Market Analysis",
    bioParagraphs: [
      "Vaskar Saha is a dynamic speaker, corporate sales trainer, and commercial strategist who has trained and motivated hundreds of sales executives across Bangladesh.",
      "Mr Saha has more than 8 years of experience at BRAC (the largest development organization in the world), where he was promoted to Manager, Sales and Marketing in the Enterprises wing, ensuring revenue of BDT 10 to 12 crore per month with a nationwide 50-member sales force.",
      "In 2018, he joined P&L International Ltd as Head of Sales and Marketing, managing corporate accounts for food-grade and industrial chemicals with major conglomerates including Abul Khair Group, Perfetti Van Melle BD Ltd, Nabisco, ACME, and Ispahani Foods."
    ],
    quote: "If the rate of change on the outside exceeds the rate of change on the inside, the end is near.",
    quoteAuthor: "Jack Welch",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Valedictorian, IBA-DU EMBA", "Head of Sales & Marketing, P&L International Ltd", "Former Sales Manager, BRAC Enterprises"]
  },
  {
    id: "suman-chowdhury",
    name: "Suman Chowdhury",
    designation: "Consultant and Director, HR & Training",
    role: "Certified Master Trainer, Soft Skills, Leadership & Sales Performance Architect",
    qualifications: "MBA in Marketing, University of Chittagong | Certified in Theory of Change | Certified Master Trainer, BRAC & Cent International",
    specialization: "Experiential Facilitation, 'Boost Your Sales: Good to Great', Emotional Intelligence & Team Building",
    bioParagraphs: [
      "Mr Suman Chowdhury has vast experience in training sales, marketing, soft skills, and leadership for over 12 years in leading international and national companies. He applies interactive exercises, simulations, and activities to create learning environments full of engagement and lasting behavioral change.",
      "Mr Chowdhury has facilitated numerous premier programs including 'Boost Your Sales: Good to Great', 'Grit for Selling Excellence', 'High Performance Team Building', 'Essential Habits for Managers', 'Stress Management', and 'Managerial Leadership Courses'.",
      "He currently serves as Manager & In-Charge, Training & Development at Impress-Newtex Composite Textiles Ltd, with previous career experience at Abul Khair Tobacco, Lubna Trading, and Well Group, alongside advanced international training at IIM, IMA International (UK), and Cent International (UK)."
    ],
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    quoteAuthor: "Zig Ziglar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Master Trainer, Cent International (UK)", "Manager, T&D Impress-Newtex Composite Textiles Ltd"]
  },
  {
    id: "rubaiat-bin-tarik",
    name: "Rubaiat Bin Tarik",
    designation: "Consultant and Director, Marketing and Sales",
    role: "Corporate Sales Leader, Brand Strategist & Commercial Operations Expert",
    qualifications: "BBA & MBA in Marketing and Finance from Independent University, Bangladesh (IUB)",
    specialization: "B2B & Government Sales, Channel Distribution, Brand Development & Team Leadership",
    bioParagraphs: [
      "Rubaiat Bin Tarik has more than 10 years of experience in sales and marketing across high-growth corporations. He started his career at IFIC Bank Ltd and advanced through Impress Group (IPOST Services), Bay Developments, Core Knowledge Ltd, Sonic Group (leading 100+ sales personnel), and Super Star Group (SSG).",
      "At Super Star Group (SSG), he managed corporate and government clients across Bangladesh for industrial lighting and low-voltage electrical systems. He subsequently joined BRAC Enterprises as Corporate Sales Manager and currently serves as Head of Sales at Platform Solutions Limited.",
      "His key strengths include client relationship development, market analysis, workplace communication, sales force motivation, and strategic brand pricing management."
    ],
    quote: "If we hire people who are smaller, we shall become a company of dwarfs.",
    quoteAuthor: "David Ogilvy",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    affiliations: ["Head of Sales, Platform Solutions Ltd", "Former Corporate Sales Manager, BRAC Enterprises", "Former Corporate Manager, SSG"]
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

export const initialTrainingObjectives: TrainingObjective[] = [
  { title: "Practicing Planning", description: "Instilling structured workflow roadmaps and foresight in everyday execution.", icon: "Calendar" },
  { title: "Approach & Presentation Techniques", description: "Elevating executive presence, speech structure, and dynamic audience engagement.", icon: "Presentation" },
  { title: "Ensuring Positive Reinforcement", description: "Building team trust and sustaining motivational momentum through constructive feedback.", icon: "ThumbsUp" },
  { title: "Effective Communication & Responses", description: "Mastering empathetic listening, persuasive delivery, and handling tough questions.", icon: "MessagesSquare" },
  { title: "Analytical Work & Reasoned Decisions", description: "Deploying data-driven evaluation tools to eliminate cognitive bias.", icon: "BarChart3" },
  { title: "Working with Professionals", description: "Harmonizing cross-functional teams and managing diverse workplace dynamics.", icon: "Users" },
  { title: "Acting and Doing Ethically", description: "Anchoring all corporate actions to integrity, compliance, and mutual respect.", icon: "ShieldCheck" },
  { title: "Qualitative, Quantitative & Strategic Reasoning", description: "Balancing creative vision with rigorous numerical and economic analysis.", icon: "Compass" }
];

export const initialTrainingMethods: TrainingMethod[] = [
  { title: "Interactive Lectures (Bangla & English)", description: "Bilingual delivery ensuring total conceptual clarity across all organizational ranks.", icon: "Languages" },
  { title: "Participative & Group Discussion", description: "Dynamic peer brainstorming, interactive breakout sessions, and consensus building.", icon: "Users" },
  { title: "Question-Answer Sessions", description: "Dedicated open-floor dialogue addressing real operational bottlenecks.", icon: "HelpCircle" },
  { title: "Case Studies & Role Play", description: "Simulating authentic Bangladeshi corporate challenges and high-stakes negotiations.", icon: "Briefcase" },
  { title: "“Learning by Doing” Methodology", description: "Direct experiential exercises that convert abstract theory into muscle memory.", icon: "Sparkles" },
  { title: "Visual & Multi-Media Toolkits", description: "Interactive PowerPoint, cards, flip charts, structured worksheets, and whiteboard maps.", icon: "MonitorPlay" }
];

export const initialLearningOutcomes: LearningOutcome[] = [
  { action: "Realize", outcome: "Professionalism and executive demeanor in every client touchpoint" },
  { action: "Identify", outcome: "Knowledge, Skill, Discipline & Leadership traits within teams" },
  { action: "Understand", outcome: "Modern management concepts and global business frameworks" },
  { action: "Enlarge", outcome: "A proactive, solutions-oriented positive approach to challenges" },
  { action: "Familiarize", outcome: "Background dynamics in professional and stakeholder relationships" },
  { action: "Increase", outcome: "The defining qualities, ethics, and poise of a true corporate professional" },
  { action: "Build", outcome: "Idea, Service, and tailor-made strategies that create sustainable competitive advantage" },
  { action: "Plan", outcome: "Effective operational workflows for dramatically enhanced enterprise productivity" },
  { action: "Appraise", outcome: "Prospective opportunities and retrospective lessons for continuous organizational growth" },
  { action: "Develop", outcome: "A constructive mindset that consistently delivers Win-Win outcomes" }
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

export const initialLeads: ConsultationLead[] = [
  {
    id: "lead-201",
    fullName: "Sayed Anwarul Islam",
    company: "Bengal Polymer Wares Ltd.",
    email: "anwar@bengalgroup.com",
    phone: "01713-112233",
    serviceRequired: "Sales and Customer Service (Excellence in Sales Leadership)",
    participantCount: "25-30 Executives",
    budgetRange: "Corporate Training Package",
    projectDescription: "Looking to conduct a 2-day experiential sales leadership workshop for our regional territory managers.",
    preferredDate: "2026-09-12",
    preferredTime: "10:00 AM",
    preferredContactMethod: "Phone",
    status: "New",
    notes: "Requested customized syllabus on 'Selling Excellence: Know to grow-as you sow'.",
    assignedStaff: "Md Monirul Hasan",
    createdAt: "2026-08-27T08:15:00.000Z"
  },
  {
    id: "lead-202",
    fullName: "Nusrat Jahan",
    company: "Bank Asia Ltd.",
    email: "nusrat.jahan@bankasia-bd.com",
    phone: "01819-445566",
    serviceRequired: "Personality Development (Emotional Intelligence & Workplace Communication)",
    participantCount: "40 Officers",
    budgetRange: "Standard Banking Workshop",
    projectDescription: "Need an executive session on stress management and proactive customer dialogue for branch service officers.",
    preferredDate: "2026-09-18",
    preferredTime: "02:30 PM",
    preferredContactMethod: "Email",
    status: "Contacted",
    notes: "Proposal and facilitator profile sent to HR Head.",
    assignedStaff: "Suman Chowdhury",
    createdAt: "2026-08-26T14:30:00.000Z"
  }
];
