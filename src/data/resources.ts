/** Free HR templates. Files live in /public/resources and are generic, editable starting points. */
export type Resource = {
  id: string;
  title: string;
  description: string;
  file: string;
  format: "CSV" | "TXT";
  category: "Recruitment" | "HR Operations" | "Engagement" | "Documentation";
  includes: string[];
};

export const resources: Resource[] = [
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker",
    description: "Track every candidate across stages, owners and next actions. Opens in Excel or Google Sheets.",
    file: "/resources/recruitment-tracker-template.csv",
    format: "CSV",
    category: "Recruitment",
    includes: ["Candidate ID & role", "Source", "Stage & status", "Next action & owner", "Dates"],
  },
  {
    id: "screening-matrix",
    title: "Candidate Screening Matrix",
    description: "Score CVs against weighted criteria so shortlisting is consistent.",
    file: "/resources/candidate-screening-matrix.csv",
    format: "CSV",
    category: "Recruitment",
    includes: ["Weighted criteria", "Score columns", "Decision column", "Notes"],
  },
  {
    id: "interview-evaluation",
    title: "Interview Evaluation Form",
    description: "A structured feedback form for interviewers to complete after each round.",
    file: "/resources/interview-evaluation-form.txt",
    format: "TXT",
    category: "Recruitment",
    includes: ["Rating scale", "Role-fit criteria", "Behaviour criteria", "Recommendation"],
  },
  {
    id: "job-description-template",
    title: "Job Description Template",
    description: "A clear structure for writing job descriptions that attract the right applicants.",
    file: "/resources/job-description-template.txt",
    format: "TXT",
    category: "Documentation",
    includes: ["Role purpose", "Responsibilities", "Must-have vs good-to-have", "Location & work mode"],
  },
  {
    id: "offer-letter-structure",
    title: "Offer Letter Structure",
    description: "The sections a professional offer letter usually covers. Final wording should follow your company policy and legal advice.",
    file: "/resources/offer-letter-structure.txt",
    format: "TXT",
    category: "Documentation",
    includes: ["Section-by-section outline", "Placeholders to fill", "Review checklist"],
  },
  {
    id: "onboarding-checklist",
    title: "Onboarding Checklist",
    description: "From offer acceptance to the 30-day check-in, with an owner for every step.",
    file: "/resources/onboarding-checklist.csv",
    format: "CSV",
    category: "HR Operations",
    includes: ["Before day one", "Day one", "First week", "First month"],
  },
  {
    id: "attendance-tracker",
    title: "Attendance & Leave Tracker",
    description: "A monthly attendance and leave summary for checking records before the payroll cycle.",
    file: "/resources/attendance-leave-tracker.csv",
    format: "CSV",
    category: "HR Operations",
    includes: ["Present days", "Approved leave by type", "Unplanned absence", "Verification status"],
  },
  {
    id: "engagement-calendar",
    title: "Engagement Calendar",
    description: "A 12-month planner for engagement, recognition and feedback activities.",
    file: "/resources/employee-engagement-calendar.csv",
    format: "CSV",
    category: "Engagement",
    includes: ["Month-by-month activities", "Owner", "Budget note", "Status"],
  },
  {
    id: "exit-interview",
    title: "Exit Interview Questionnaire",
    description: "Questions that help you understand why people leave and spot attrition patterns.",
    file: "/resources/exit-interview-questionnaire.txt",
    format: "TXT",
    category: "Engagement",
    includes: ["Reason for leaving", "Role & manager experience", "Suggestions", "Coding guide for trends"],
  },
];

export const getResource = (id: string) => resources.find((r) => r.id === id);
