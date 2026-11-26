/**
 * Professional experience, taken from Kashish's confirmed brief / LinkedIn profile.
 * Do not add numbers, dates or achievements here unless Kashish confirms them.
 */
export type Role = {
  id: string;
  organisation: string;
  shortName: string;
  titles: string[];
  titleNote?: string;
  period: string;
  start: string; // ISO month, used for ordering and <time>
  end?: string;
  current?: boolean;
  employment?: string;
  location?: string;
  workMode?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  accent: "coral" | "plum" | "lavender" | "blush";
};

export const experience: Role[] = [
  {
    id: "popaya",
    organisation: "Popaya® Technologies",
    shortName: "Popaya",
    titles: ["HR Executive"],
    period: "May 2026 – Present",
    start: "2026-05",
    current: true,
    employment: "Full-time",
    location: "Mumbai, Maharashtra, India",
    workMode: "On-site",
    summary: "Handling recruitment and day-to-day HR across the employee lifecycle, from hiring and onboarding to engagement, relations and exits.",
    responsibilities: [
      "End-to-end recruitment.",
      "HR operations.",
      "Employee engagement.",
      "Employee relations.",
      "Employee onboarding and offboarding.",
    ],
    skills: ["End-to-end recruitment", "HR operations", "Employee engagement", "Employee relations", "Onboarding", "Offboarding"],
    accent: "coral",
  },
  {
    id: "kamala",
    organisation: "Trade Facilities Management (India) Pvt. Ltd. – Kamala Group",
    shortName: "Kamala Group",
    titles: ["Human Resources Executive"],
    period: "January 2026 – April 2026",
    start: "2026-01",
    end: "2026-04",
    summary: "Ran HR and Mumbai office operations for a distributed workforce, and implemented Razorpay HRMS for attendance and leave.",
    responsibilities: [
      "Directed Mumbai office operations and facility management for a distributed workforce.",
      "Managed end-to-end recruitment and workforce management.",
      "Implemented Razorpay HRMS for automated attendance and leave calculations, improving data accuracy for the payroll cycle.",
      "Standardised onboarding, employee documentation and exit formalities.",
      "Conducted data-driven exit interviews to identify attrition trends.",
      "Created job descriptions for new organisational openings.",
      "Prepared professional employee communications and formal correspondence, including communications addressed to ministers.",
      "Coordinated national-level events.",
      "Managed vendors and tracked relevant bills.",
    ],
    skills: ["Razorpay HRMS", "Recruitment", "Workforce management", "Onboarding & exits", "Exit interviews", "Job descriptions", "Formal correspondence", "Event coordination", "Vendor management", "Office operations"],
    accent: "plum",
  },
  {
    id: "jeevandeep",
    organisation: "Jeevandeep Edumedia Pvt. Ltd.",
    shortName: "Jeevandeep Edumedia",
    titles: ["Assistant Manager – Human Resources", "Junior Human Resources Manager"],
    titleNote: "Both titles held at Jeevandeep Edumedia during this period.",
    period: "June 2025 – January 2026",
    start: "2025-06",
    end: "2026-01",
    employment: "Full-time",
    location: "Mumbai, Maharashtra, India",
    summary: "Managed recruitment across departments and administered the company's HR and attendance systems.",
    responsibilities: [
      "Administered Sensys and Matrix COSEC software systems.",
      "Maintained employee management records and data integrity.",
      "Managed end-to-end recruitment across departments.",
      "Used major job portals for candidate sourcing and shortlisting.",
      "Coordinated with department heads for manpower planning and workforce management.",
      "Generated offer letters and appointment letters for new joiners.",
    ],
    skills: ["Sensys", "Matrix COSEC", "Employee records", "Job portals", "Candidate sourcing", "Manpower planning", "Offer & appointment letters"],
    accent: "lavender",
  },
  {
    id: "grt",
    organisation: "GRT Global Logistics Pvt. Ltd.",
    shortName: "GRT Global Logistics",
    titles: ["Human Resources Intern"],
    period: "May 2024 – June 2024",
    start: "2024-05",
    end: "2024-06",
    summary: "Supported the recruitment team with screening, job postings and interview coordination.",
    responsibilities: [
      "Screened and shortlisted candidates.",
      "Supported recruitment pipeline development.",
      "Designed job postings.",
      "Coordinated high-volume interview schedules.",
    ],
    skills: ["Screening", "Shortlisting", "Job postings", "Interview scheduling", "Recruitment pipeline"],
    accent: "blush",
  },
];

/** Systems Kashish has hands-on experience with (from the roles above). */
export const systems = [
  { name: "Razorpay HRMS", context: "Implemented for automated attendance and leave calculations at Kamala Group." },
  { name: "Sensys", context: "Administered at Jeevandeep Edumedia." },
  { name: "Matrix COSEC", context: "Administered at Jeevandeep Edumedia." },
  { name: "Major job portals", context: "Used for candidate sourcing and shortlisting." },
];

/** Factual counts derived from the experience above (no invented metrics). */
export const facts = [
  { value: 4, label: "organisations worked with" },
  { value: 5, label: "HR titles held" },
  { value: 3, label: "HR & attendance systems used" },
];
