import {
  Github,
  Linkedin,
  Mail,
  TrendingUp,
  BarChart3,
  Bot,
  Binary,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const profile = {
  name: 'Saachi Singh',
  roleTitle: 'Quantitative Finance & Software Engineering',
  tagline: 'At the intersection of quantitative markets, artificial intelligence, and engineering.',
  educationSummary: 'BSc (Hons) Economics and Finance @ UCD Quinn School of Business · First Class Honours (GPA: 3.93/4.2)',
  bio: 'Second-year Economics & Finance student at University College Dublin with an active track record spanning quantitative trading, private equity, equity research, and autonomous engineering. From backtesting rolling cointegration pairs-trading models and evaluating consumer tech portfolios at Ireland’s largest student investment fund, to deploying autonomous marine robotics on Dublin’s waterways and building AI web tools, I thrive solving high-stakes problems at the convergence of code and capital markets.',
  status: 'Loading',
  email: 'saachisingh21@gmail.com',
  altEmail: '  ',
  phone: '  ',
  targetSummits: ['Lisbon Tech Summit', 'Tech Residencies', 'Quant Trading & Private Equity'],
};

export const keySignals = [
  // {
  //   label: 'Academic Standing',
  //   value: '3.93 / 4.2 GPA',
  //   sub: 'First Class Honours · UCD Quinn',
  //   icon: GraduationCap,
  //   accent: 'emerald',
  // },
  // {
  //   label: 'Algorithmic Research',
  //   value: 'p < 0.05 Cointegration',
  //   sub: 'Dynamic OLS Pairs Engine',
  //   icon: Binary,
  //   accent: 'cyan',
  // },
  // {
  //   label: 'Wharton Global Comp',
  //   value: 'Top 50 / 2,000+',
  //   sub: '40% Return Quantitative Model',
  //   icon: TrendingUp,
  //   accent: 'emerald',
  // },
  // {
  //   label: 'National Science Honor',
  //   value: 'Physics Gold Medallist',
  //   sub: 'Irish Olympiad Exp. Sciences',
  //   icon: Award,
  //   accent: 'amber',
  // },
];
export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/SaachiSingh007',
    icon: Github,
    handle: '@SaachiSingh007',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saachi-singh-b34722227/',
    icon: Linkedin,
    handle: 'in/saachi-singh',
  },
  {
    label: 'Email',
    href: 'mailto:saachisingh21@gmail.com',
    icon: Mail,
    handle: 'saachisingh21@gmail.com',
  },
];

export type ExperienceCategory = 'all' | 'finance' | 'tech' | 'leadership';

export type Experience = {
  id: string;
  date: string;
  title: string;
  organization: string;
  location: string;
  category: 'finance' | 'tech' | 'leadership';
  roleType: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: 'smf',
    date: 'Sept 2025 — Present',
    title: 'Technology Sector Manager & Equities Analyst',
    organization: "UCD Student Managed Fund (Ireland's Largest Student-Run Fund)",
    location: 'Dublin, Ireland',
    category: 'finance',
    roleType: 'Portfolio Management & Equity Research',
    highlights: [
      'Selected as 1 of 15 analysts from 100+ nationwide applicants.',
      'Built and maintained coverage models for a 4-stock Consumer Discretionary portfolio, tracking revenue drivers, margin trends, and comparable-company valuations to inform buy/sell recommendations.',
      'Pitched at Fidelity Stock Pitch Competition.',
      'Promoted to Sector Manager, Technology ahead of the 2026/27 academic year: directing sector strategy, mentoring junior analysts, and presenting investment theses to the fund’s portfolio committee.',
    ],
    tags: ['Valuation Models', 'DCF & Multiples', 'Stock Pitch', 'Tech Sector', 'Fund Strategy'],
  },
  {
    id: 'tpi',
    date: 'July 2026 — August 2026',
    title: 'Private Equity Intern',
    organization: 'Thomas Private Investment (subsidiary of Guild Capital)',
    location: 'Dubai, UAE (Remote)',
    category: 'finance',
    roleType: 'Private Equity & Deal Execution',
    highlights: [
      'Attended client meetings and investor calls alongside senior investment team members, gaining direct exposure to live deal execution and client relationship management.',
      'Conducted financial analysis, valuation, and investment memoranda as delegated by senior team members to support active investment decisions.',
    ],
    tags: ['Private Equity', 'Financial Analysis', 'Deal Execution', 'Investment Memoranda'],
  },
  {
    id: 'sig',
    date: 'March 2026',
    title: 'Discovery Intern — Equity Research & Trading',
    organization: 'Susquehanna International Group (SIG)',
    location: 'Dublin, Ireland',
    category: 'finance',
    roleType: 'Proprietary Trading & Research',
    highlights: [
      "Selected for SIG's competitive Equity Research Discovery Programme at European HQ, gaining exposure to proprietary trading, market-making, and equity research.",
      'Developed insight into market-making mechanics, trading strategy, and analytical decision-making through trading simulations and market research workshops with the Research team.',
      'Interviewed for the 2027 Summer Internship Programme.',
    ],
    tags: ['Market Making', 'Trading Simulations', 'Quantitative Decision-Making', 'Prop Trading'],
  },
  {
    id: 'fidelity',
    date: 'April 2026',
    title: 'Spring Intern — Women in Investment Management',
    organization: 'Fidelity International',
    location: 'London, UK',
    category: 'finance',
    roleType: 'Asset Management',
    highlights: [
      "Selected for competitive Spring Insight Programme, gaining exposure to asset management, portfolio strategy, and institutional investment processes at Fidelity's London office.",
      'Built analytical frameworks used in equity research and portfolio management through investment case studies and technical workshops.',
      "Completed Fidelity's Virtual Investment Management Internship with Forage.",
    ],
    tags: ['Asset Management', 'Portfolio Strategy', 'Equity Research', 'Institutional Frameworks'],
  },
  {
    id: 'bsg',
    date: 'July 2026 — Present',
    title: 'Strategy Consultant',
    organization: 'Belfield Strategy Group',
    location: 'Dublin, Ireland',
    category: 'tech',
    roleType: 'Venture Consulting & AI',
    highlights: [
      'Leading a market assessment for iReel, an early-stage AI knowledge-management platform, mapping the competitive landscape and defining an ideal customer profile to prioritise highest-value target segments.',
      'Shaping go-to-market strategy—positioning, priority channels, and an early-adopter roll-out plan—to guide the venture’s commercial launch.',
    ],
    tags: ['AI Knowledge Systems', 'Go-To-Market Strategy', 'Competitive Analysis', 'Venture Strategy'],
  },
  {
    id: 'dogpatch',
    date: 'June 2024 — July 2024',
    title: 'Patch Summer Accelerator — Autonomous Robotics',
    organization: "Dogpatch Labs",
    location: 'Dublin, Ireland',
    category: 'tech',
    roleType: 'Hardware & IoT Engineering',
    highlights: [
      'Completed a competitive 7-week innovation residency for young technologists at Ireland’s premier startup hub.',
      'Designed, built, and tested "DebriSweeper", an autonomous trash-collection boat using an ESP32 microcontroller and ultrasonic sensors, successfully piloted on Dublin’s Royal Canal.',
      'Partnered with Waterways Ireland to assess the project’s economic viability, applying analytical and problem-solving skills to a real-world engineering and sustainability challenge.',
    ],
    tags: ['Robotics', '3D Printing', 'Commercialisation', 'IoT Prototyping'],
  },
  {
    id: 'ucd-ie',
    date: 'April 2026 — Present',
    title: 'Head of Entrepreneurial Events & Incubators',
    organization: 'UCD Investors & Entrepreneurs Society',
    location: 'Dublin, Ireland',
    category: 'leadership',
    roleType: 'Community & Leadership',
    highlights: [
      'Leading organization of Startathon, the society’s flagship startup competition scheduled for Semester 1; establishing partnerships with external organisations to deliver office visits and on-campus events for 100+ members.',
      'Support the Hult Prize initiative and guide the society’s strategic push towards AI tools and education.',
    ],
    tags: ['Startathon', 'Startup Incubation', 'Hult Prize', 'AI Education', 'Sponsorships'],
  },
  {
    id: 'wharton-comp',
    date: '2022 — 2023',
    title: 'Team Leader & Semi-Finalist',
    organization: 'Wharton Global High School Investment Competition',
    location: 'Philadelphia, PA / Global',
    category: 'finance',
    roleType: 'Portfolio Management',
    highlights: [
      'Managed a $100,000 simulated portfolio, generating 40% short-term returns via a proprietary quantitative stock-prediction model.',
      'Ranked in the top 50 of 2,000+ global participant teams worldwide.',
    ],
    tags: ['Quant Stock Prediction', 'Portfolio Optimization', 'Top 50 Global', 'Wharton'],
  },
  {
    id: 'ucd-math',
    date: 'October 2025 — Present',
    title: 'First Year Representative & Committee Member',
    organization: 'UCD Mathematical Society',
    location: 'Dublin, Ireland',
    category: 'leadership',
    roleType: 'Maths & Leadership',
    highlights: [
      'Elected as the first-year representative to UCD Mathematical Society following a competitive selection process.',
      'Collaborate with senior committee members to organise mathematical workshops, quantitative speaker events, and academic networking sessions.',
    ],
    tags: ['Pure & Applied Mathematics', 'Academic Workshops', 'Quantitative Community'],
  },
  {
    id: 'coil-unito',
    date: 'October 2025 — March 2026',
    title: 'COIL Fellow — Linear Algebra with UNITO',
    organization: 'Collaborative Online International Learning (UNITO - University of Turin)',
    location: 'Turin, Italy / Dublin, Ireland',
    category: 'tech',
    roleType: 'Applied Mathematics',
    highlights: [
      'Selected for COIL programme in Linear Algebra delivered in partnership with the University of Turin.',
      'Applied advanced quantitative matrix operations, eigenvalues, and transformations to economic, financial, security, and defence applications.',
    ],
    tags: ['Linear Algebra', 'Applied Matrix Theory', 'Quantitative Modelling', 'UNITO'],
  },
  {
    id: 'wharton-moneyball',
    date: 'May 2022 — June 2022',
    title: 'Wharton Moneyball Academy Scholar',
    organization: 'Wharton School of the University of Pennsylvania',
    location: 'Philadelphia, PA',
    category: 'tech',
    roleType: 'Statistical Analytics in R',
    highlights: [
      'Learned statistical modelling in the programming language R from UPenn faculty and presented a capstone project applying linear regression to basketball performance metrics to predict player output.',
      'Awarded a 100% scholarship to attend and complete the programme.',
    ],
    tags: ['R Programming', 'Linear Regression', 'Statistical Metrics', 'Full Scholarship'],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  fullDetails: string;
  technologies: string[];
  demoUrl: string;
  demoLabel: string;
  githubUrl: string;
  featured: boolean;
  graphicKind: 'quant' | 'ai' | 'robotics' | 'ml';
  metric: string;
  metricLabel: string;
};

export const projects: Project[] = [
  {
    id: 'pairs-trading',
    title: 'Pairs Trading Strategy and Interface',
    subtitle: 'Statistical Arbitrage & Algorithmic Trading Model',
    category: 'Quant Finance',
    summary:
      'An end-to-end Python statistical arbitrage engine that evaluates 60-bar rolling cointegration (p < 0.05) and calculates dynamic OLS hedge ratios. Analyzes spread mean-reversion, computes dynamic z-scores, and automates trading signals backtested on historical market data.',
    fullDetails:
      'Evaluates Engle-Granger two-step cointegration over moving 60-bar windows with ADF stationarity tests. Fits rolling Ordinary Least Squares (OLS) to derive time-varying hedge ratios, tracks spread dispersion via normalized z-scores, and triggers mean-reversion entry/exit thresholds with strict stop-losses.',
    technologies: ['Python', 'Statsmodels', 'Pandas', 'NumPy', 'Cointegration', 'OLS Regression', 'Backtesting'],
    demoUrl: 'https://github.com/SaachiSingh007/pairs_trading_strategy',
    demoLabel: 'View Model Repo',
    githubUrl: 'https://github.com/SaachiSingh007/pairs_trading_strategy',
    featured: true,
    graphicKind: 'quant',
    metric: '....In progress',
    metricLabel: '',
  },
  {
    id: 'covercraft',
    title: 'CoverCraft',
    subtitle: 'AI Resume & Target Job ATS Synthesis Platform',
    category: 'AI for Web',
    summary:
      'An intelligent web application that takes candidate CV data and parses any live job description URL to synthesize high-converting, ATS-compliant, targeted cover letters and strategic career positioning memos.',
    fullDetails:
      'Engineered to eliminate generic cover letters by cross-referencing candidate project accomplishments directly against semantic keyword requirements extracted from live job postings, producing tailored, persuasive application assets in seconds.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LLM Engineering', 'ATS Optimization', 'Web Scraping'],
    demoUrl: 'https://craft-letter-pro.lovable.app',
    demoLabel: 'Launch App',
    githubUrl: 'https://github.com/SaachiSingh007',
    featured: true,
    graphicKind: 'ai',
    metric: '....In progress',
    metricLabel: '',
  },
  {
    id: 'debrisweeper',
    title: 'DebriSweeper',
    subtitle: 'Autonomous Trash-Collecting Surface Vessel',
    category: 'Robotics & Hardware',
    summary:
      'Autonomous aquatic trash-collection catamaran designed, built, and tested during a 7-week innovation residency at Dogpatch Labs. Integrated an ESP32 microcontroller, ultrasonic sensors, and dual propulsion; piloted on Dublin’s Royal Canal in collaboration with Waterways Ireland.',
    fullDetails:
      'Engineered complete hardware architecture from scratch: sensor integration for real-time obstacle avoidance, custom water-jet propulsion control on ESP32, and mechanical sweep netting to collect floating debris. Partnered with Waterways Ireland to assess operational economics for urban waterway cleanup.',
    technologies: ['ESP32', 'C++', 'Robotics', 'Ultrasonic Sensors', 'PWM Motor Control', 'Waterways Ireland'],
    demoUrl: 'https://lnkd.in/p/duR9BBFu',
    demoLabel: 'LinkedIn Feature',
    githubUrl: 'https://lnkd.in/p/duR9BBFu',
    featured: true,
    graphicKind: 'robotics',
    metric: 'Dogpatch Labs',
    metricLabel: '',
  },
  {
    id: 'cricket-ml',
    title: 'Cricket ML Match Prediction Model',
    subtitle: 'BT Young Scientist & Technology Exhibition',
    category: 'Regression Modelling',
    summary:
      'Engineered a Python-based multivariate regression machine learning model to predict athletic performance and match output from historical datasets, correlating physiological factors, conditions, and match variables.',
    fullDetails:
      'Developed and exhibited at Ireland’s national BT Young Scientist & Technology Exhibition. Implemented feature engineering, multivariate regression pipelines, and multi-variable correlation matrices to analyze how fatigue, environmental metrics, and player history influence performance.',
    technologies: ['Python', 'Multivariate Regression', 'Scikit-Learn', 'Statistical Inference', 'BTYSTE'],
    demoUrl: 'https://github.com/SaachiSingh007/Multivariate-Regression-Cricket-Prediction-Model-',
    demoLabel: 'View Model Repo',
    githubUrl: 'https://github.com/SaachiSingh007/Multivariate-Regression-Cricket-Prediction-Model-',
    featured: true,
    graphicKind: 'ml',
    metric: 'National Finalist at BT Young Scientist',
    metricLabel: '',
  },
];

export const education = [
  {
    institution: 'University College Dublin — Quinn School of Business',
    location: 'Dublin, Ireland',
    degree: 'BSc (Hons) Economics and Finance',
    standing: 'First Class Honours | GPA: 3.93 / 4.2',
    date: '2025 — Expected 2028',
    highlights: [
      'Linear Algebra, Probability, Mathematical Analysis, Corporate Finance, Python Fundamentals.',
      // 'Active leadership across UCD Student Managed Fund, Investors & Entrepreneurs Society, and Mathematical Society.',
    ],
  },
  {
    institution: 'The Institute of Education',
    location: 'Dublin, Ireland',
    degree: 'Leaving Certificate (Higher Level)',
    standing: '3 X H1, 4 X H2',
    date: '2025',
    highlights: [
      'Subjects: English, Economics, Computer Science, Mathematics, Applied Mathematics, Physics, Business.',
    ],
  },
];

export const honors = [
  {
    title: 'Physics Gold Medallist',
    issuer: 'Irish Olympiad of Experimental Sciences (IOES)',
    year: '2024',
    description: 'Awarded Gold Medal in national competitive experimental physics examination testing laboratory acumen and physical mechanics.',
    badge: 'Gold Medal',
    icon: Award,
  },
  {
    title: 'IMTA Maths National Finalist',
    issuer: 'Irish Mathematics Teachers Association',
    year: '2024',
    description: 'Ranked among top competitive high school mathematicians nationally in high-speed problem solving and proofs.',
    badge: 'National Finalist',
    icon: Binary,
  },
  {
    title: 'Single Variable Calculus',
    issuer: 'University of Pennsylvania',
    year: '2023',
    description: 'Completed university-level rigorous calculus with advanced integration, differential equations, and series approximations.',
    badge: 'University of Pennsylvania',
    icon: GraduationCap,
  },
  {
    title: 'Bloomberg Market Concepts (BMC)',
    issuer: 'Bloomberg LP',
    year: '2025',
    description: 'Certified in Economic Indicators, Currencies, Fixed Income, and Equities using Bloomberg Terminal analytics.',
    badge: 'Bloomberg Certified',
    icon: TrendingUp,
  },
  {
    title: 'Semi-Finalist (Top 50 / 2,000+ Globally)',
    issuer: 'Wharton Global High School Investment Competition',
    year: '2023',
    description: 'Achieved 40% short-term portfolio return managing $100K simulated assets with proprietary algorithmic model.',
    badge: 'Wharton Global Top 50',
    icon: BarChart3,
  },
  {
    title: 'Wharton Moneyball Academy Scholar',
    issuer: 'University of Pennsylvania',
    year: '2022',
    description: 'Awarded 100% scholarship to study statistical modelling and linear regression in R from UPenn faculty.',
    badge: 'Full Scholarship',
    icon: Sparkles,
  },
];

export const skillsByCategory = [
  {
    category: 'Finance & Quantitative Markets',
    skills: [
      'Quantitative Analysis',
      'Portfolio Strategy & Risk Management',
      'Bloomberg Terminal (BMC)',
    ],
  },
  {
    category: 'Engineering & Software',
    skills: [
      'Python (Pandas, NumPy, Statsmodels, Scikit-Learn)',
      'R Language (Statistical Regression)',
      'Hardware Sensors (Ultrasonic / PWM)',
    ],
  },
  {
    category: 'Strategy & Leadership',
    skills: [
      'Sector Leadership (Tech & Consumer)',
      'Go-to-Market Strategy (GTM)',
      'Stock Pitch Delivery',      
    ],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Signals', href: '#signals' },
  { label: 'Experience', href: '#experience' },
  { label: 'Featured Projects', href: '#projects' },
  { label: 'Academics & Honors', href: '#academics' },
  { label: 'Contact', href: '#contact' },
];
