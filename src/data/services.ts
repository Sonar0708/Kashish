export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  icon: "users" | "settings" | "heart" | "file" | "chart" | "workflow";
  tint: "coral" | "plum" | "lavender" | "blush";
  tagline: string;
  summary: string;
  problems: string[];
  includes: string[];
  approach: { title: string; text: string }[];
  experience: { org: string; point: string }[];
  samples: string[];
  resources: string[];
  goodFor: string[];
};

export const services: Service[] = [
  {
    slug: "recruitment-talent-acquisition",
    title: "Recruitment & Talent Acquisition",
    navLabel: "Recruitment",
    icon: "users",
    tint: "coral",
    tagline: "From a clear job description to a candidate who actually joins.",
    summary:
      "End-to-end hiring support for teams that need to fill roles without losing weeks to unclear briefs, scattered CVs and missed follow-ups.",
    problems: [
      "Open roles stay open because nobody has time to source and screen.",
      "Job descriptions are vague, so the wrong candidates apply.",
      "Interview scheduling turns into long email threads.",
      "Good candidates drop off because communication goes quiet.",
    ],
    includes: [
      "End-to-end recruitment support",
      "Candidate sourcing",
      "Resume screening and shortlisting",
      "Job description creation",
      "Interview scheduling",
      "Candidate communication",
      "Recruitment pipeline management",
      "Offer and joining coordination",
    ],
    approach: [
      { title: "Understand the role", text: "Agree the must-haves, team context and hiring timeline with the hiring manager." },
      { title: "Write & publish", text: "Draft a clear job description and post it on suitable job portals." },
      { title: "Source & screen", text: "Search, screen and shortlist candidates against the agreed criteria." },
      { title: "Coordinate interviews", text: "Schedule rounds, brief candidates and collect interviewer feedback." },
      { title: "Close & join", text: "Coordinate the offer, documents and joining date, then hand over to onboarding." },
    ],
    experience: [
      { org: "Popaya® Technologies", point: "Handles end-to-end recruitment." },
      { org: "Kamala Group", point: "Managed end-to-end recruitment and created job descriptions for new openings." },
      { org: "Jeevandeep Edumedia", point: "Managed recruitment across departments using major job portals for sourcing and shortlisting." },
      { org: "GRT Global Logistics", point: "Screened candidates, designed job postings and coordinated high-volume interview schedules." },
    ],
    samples: ["recruitment-pipeline-tracker", "candidate-screening-matrix", "interview-evaluation-form"],
    resources: ["recruitment-tracker", "screening-matrix", "job-description-template", "interview-evaluation"],
    goodFor: ["Startups making their first hires", "Small businesses without a recruiter", "Teams running a hiring drive"],
  },
  {
    slug: "hr-operations",
    title: "HR Operations",
    navLabel: "HR Operations",
    icon: "settings",
    tint: "plum",
    tagline: "Organised records, clean processes and fewer things falling through the cracks.",
    summary:
      "Practical support with the day-to-day administration that keeps a team running: records, attendance, onboarding, exits and the processes that connect them.",
    problems: [
      "Employee information lives in several spreadsheets and inboxes.",
      "Attendance and leave records are hard to reconcile.",
      "Every new joiner is onboarded a little differently.",
      "Exit formalities are handled ad hoc.",
    ],
    includes: [
      "HR documentation",
      "Employee database management",
      "Attendance and leave tracking",
      "HRMS coordination",
      "Employee lifecycle administration",
      "Onboarding and offboarding",
      "HR process organisation",
    ],
    approach: [
      { title: "Review what exists", text: "Look at current records, trackers and steps to see what is missing or duplicated." },
      { title: "Organise the data", text: "Set up one clear employee master record and consistent document folders." },
      { title: "Standardise steps", text: "Create checklists for onboarding, documentation and exits." },
      { title: "Run & maintain", text: "Keep records, attendance and lifecycle changes up to date." },
    ],
    experience: [
      { org: "Popaya® Technologies", point: "Handles HR operations, onboarding and offboarding." },
      { org: "Kamala Group", point: "Standardised onboarding, employee documentation and exit formalities, and directed Mumbai office operations." },
      { org: "Jeevandeep Edumedia", point: "Maintained employee management records and data integrity." },
    ],
    samples: ["onboarding-checklist", "attendance-leave-tracker"],
    resources: ["onboarding-checklist", "attendance-tracker"],
    goodFor: ["Growing teams formalising HR for the first time", "Founders handling HR themselves", "Teams moving to an HRMS"],
  },
  {
    slug: "employee-engagement",
    title: "Employee Engagement & Relations",
    navLabel: "Employee Engagement",
    icon: "heart",
    tint: "blush",
    tagline: "Help people feel heard, recognised and part of the team.",
    summary:
      "Planning and coordinating engagement activities, employee communication and feedback so that people stay connected to the team and the company.",
    problems: [
      "Engagement only happens around festivals, if at all.",
      "Employees don't have a clear channel to share feedback.",
      "Recognition is informal and inconsistent.",
      "Internal announcements are rushed or unclear.",
    ],
    includes: [
      "Employee engagement activities",
      "Employee communication",
      "Employee feedback coordination",
      "Recognition activities",
      "Team engagement initiatives",
      "Employee experience support",
    ],
    approach: [
      { title: "Listen first", text: "Understand team size, work mode and what employees say they want." },
      { title: "Plan a calendar", text: "Map engagement and recognition moments across the year." },
      { title: "Coordinate", text: "Organise activities, vendors and communication around each moment." },
      { title: "Collect feedback", text: "Gather responses and share what was learned with leadership." },
    ],
    experience: [
      { org: "Popaya® Technologies", point: "Handles employee engagement and employee relations." },
      { org: "Kamala Group", point: "Coordinated national-level events and prepared professional employee communications." },
    ],
    samples: ["engagement-calendar"],
    resources: ["engagement-calendar", "exit-interview"],
    goodFor: ["Teams that have grown quickly", "Hybrid and distributed teams", "Companies planning their first engagement calendar"],
  },
  {
    slug: "hr-documentation",
    title: "HR Documentation & Communication",
    navLabel: "HR Documentation",
    icon: "file",
    tint: "lavender",
    tagline: "Clear, professional HR documents and communication that people can rely on.",
    summary:
      "Drafting and organising the documents and messages HR sends every week, so they are consistent, professional and easy to reuse.",
    problems: [
      "Every offer letter is rewritten from scratch.",
      "Job descriptions don't match what the role really is.",
      "Important announcements go out with mistakes or unclear wording.",
      "There is no written record of how HR processes work.",
    ],
    includes: [
      "Job descriptions",
      "Offer and appointment letter preparation",
      "Onboarding checklists",
      "Employee communication templates",
      "HR trackers and documentation",
      "Professional email drafting",
      "HR process documentation",
    ],
    approach: [
      { title: "Collect", text: "Gather existing documents, policies and the information each document must contain." },
      { title: "Draft", text: "Write clear, consistent templates in your company's tone." },
      { title: "Review", text: "Share drafts for your review; legal or policy wording is confirmed by you or your advisor." },
      { title: "Hand over", text: "Deliver editable files organised so your team can reuse them." },
    ],
    experience: [
      { org: "Kamala Group", point: "Created job descriptions and prepared formal correspondence, including communications addressed to ministers." },
      { org: "Jeevandeep Edumedia", point: "Generated offer letters and appointment letters for new joiners." },
      { org: "GRT Global Logistics", point: "Designed job postings." },
    ],
    samples: ["hr-documentation-kit", "onboarding-checklist"],
    resources: ["job-description-template", "offer-letter-structure", "onboarding-checklist"],
    goodFor: ["Companies building an HR document library", "Teams hiring regularly", "Founders who want professional HR communication"],
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics & Reporting",
    navLabel: "HR Analytics",
    icon: "chart",
    tint: "coral",
    tagline: "Turn HR records into reports that help you make decisions.",
    summary:
      "Excel-based HR trackers, reports and simple MIS dashboards that show hiring progress, attendance patterns and attrition at a glance.",
    problems: [
      "Nobody can say quickly how many roles are open or where candidates are stuck.",
      "Attendance and leave data is collected but never reviewed.",
      "Exit reasons aren't recorded, so attrition patterns stay invisible.",
      "Leadership asks for HR numbers and it takes days to compile them.",
    ],
    includes: [
      "Recruitment trackers",
      "Hiring funnel reports",
      "Employee master data",
      "Attendance reports",
      "Attrition tracking",
      "HR Excel reporting",
      "HR MIS dashboards",
    ],
    approach: [
      { title: "Agree the questions", text: "Decide what leadership needs to see each week or month." },
      { title: "Structure the data", text: "Set up clean trackers and an employee master sheet as the single source." },
      { title: "Build the report", text: "Create summary views, funnel counts and simple charts." },
      { title: "Keep it current", text: "Update on a regular cycle and highlight what changed." },
    ],
    experience: [
      { org: "Kamala Group", point: "Conducted data-driven exit interviews to identify attrition trends." },
      { org: "Jeevandeep Edumedia", point: "Maintained employee management records and data integrity." },
      { org: "GRT Global Logistics", point: "Supported recruitment pipeline development." },
    ],
    samples: ["hr-mis-dashboard", "recruitment-pipeline-tracker", "attendance-leave-tracker"],
    resources: ["recruitment-tracker", "attendance-tracker", "exit-interview"],
    goodFor: ["Leadership teams that want monthly HR visibility", "Teams tracking hiring across several roles", "Companies reviewing attrition"],
  },
  {
    slug: "hrms-process-support",
    title: "HRMS & Process Support",
    navLabel: "HRMS & Process",
    icon: "workflow",
    tint: "plum",
    tagline: "Get your HR system set up properly and keep its data trustworthy.",
    summary:
      "Coordination support when you move attendance, leave and employee records into an HRMS, and ongoing help keeping that data accurate.",
    problems: [
      "The HRMS was bought but only half set up.",
      "Attendance and leave rules aren't configured, so calculations are done by hand.",
      "Employee records in the system are incomplete or out of date.",
      "Processes around the system were never written down.",
    ],
    includes: [
      "HRMS implementation coordination",
      "HRMS data administration",
      "Attendance and leave process setup support",
      "Employee record organisation",
      "HR process improvement",
    ],
    approach: [
      { title: "Map current process", text: "Document how attendance, leave and records work today." },
      { title: "Prepare data", text: "Clean and organise employee records before they go into the system." },
      { title: "Coordinate set-up", text: "Work with your HRMS provider on attendance and leave configuration." },
      { title: "Check & support", text: "Compare system output with expectations and support the team after go-live." },
    ],
    experience: [
      { org: "Kamala Group", point: "Implemented Razorpay HRMS for automated attendance and leave calculations, improving data accuracy for the payroll cycle." },
      { org: "Jeevandeep Edumedia", point: "Administered Sensys and Matrix COSEC software systems." },
    ],
    samples: ["hrms-implementation-workflow", "attendance-leave-tracker"],
    resources: ["attendance-tracker", "onboarding-checklist"],
    goodFor: ["Companies adopting their first HRMS", "Teams with attendance systems that aren't trusted", "Businesses cleaning up employee data"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Scope note shown on service pages so nothing is over-promised. */
export const scopeNote =
  "These services cover practical HR execution and coordination. Legal, statutory compliance, payroll advisory and country-specific employment-law questions should be confirmed with a qualified advisor.";
