/**
 * DEMONSTRATION WORK SAMPLES
 * ------------------------------------------------------------------
 * Every sample here is a demonstration template built with fictional data.
 * None of it comes from a real employer, candidate or employee.
 * If Kashish later approves real (anonymised) samples, add them with demo: false.
 */

export type Demo =
  | { kind: "pipeline"; stages: { name: string; items: { id: string; role: string; note: string }[] }[] }
  | { kind: "table"; columns: string[]; rows: string[][]; caption: string }
  | { kind: "form"; sections: { title: string; items: string[] }[]; scale: string[] }
  | { kind: "checklist"; phases: { title: string; items: string[] }[] }
  | { kind: "documents"; docs: { title: string; sections: string[] }[] }
  | { kind: "calendar"; months: { month: string; items: string[] }[] }
  | { kind: "dashboard"; kpis: { label: string; value: string }[]; funnel: { stage: string; count: number }[]; bars: { label: string; value: number }[]; barsTitle: string }
  | { kind: "workflow"; steps: { title: string; text: string; owner: string }[] };

export type Sample = {
  slug: string;
  title: string;
  category: "Recruitment" | "HR Operations" | "Engagement" | "Documentation" | "Analytics" | "HRMS";
  service: string;
  summary: string;
  purpose: string;
  helps: string[];
  demo: Demo;
};

export const samples: Sample[] = [
  {
    slug: "recruitment-pipeline-tracker",
    title: "Recruitment Pipeline Tracker",
    category: "Recruitment",
    service: "recruitment-talent-acquisition",
    summary: "A stage-by-stage view of every candidate for an opening, so nobody gets lost between rounds.",
    purpose: "Shows where each candidate is, what the next action is and who owns it.",
    helps: ["Hiring managers see progress without asking", "Follow-ups happen on time", "Drop-off points become visible"],
    demo: {
      kind: "pipeline",
      stages: [
        { name: "Applied", items: [{ id: "C-014", role: "Sales Executive", note: "Portal application" }, { id: "C-015", role: "Sales Executive", note: "Referral" }, { id: "C-016", role: "Accounts Assistant", note: "Portal application" }] },
        { name: "Screened", items: [{ id: "C-009", role: "Sales Executive", note: "Call done, shortlist" }, { id: "C-011", role: "Accounts Assistant", note: "CV matches criteria" }] },
        { name: "Interview", items: [{ id: "C-006", role: "Sales Executive", note: "Round 2 scheduled" }, { id: "C-007", role: "Accounts Assistant", note: "Feedback pending" }] },
        { name: "Selected", items: [{ id: "C-003", role: "Sales Executive", note: "Offer being prepared" }] },
        { name: "Joined", items: [{ id: "C-001", role: "Office Coordinator", note: "Onboarding started" }] },
      ],
    },
  },
  {
    slug: "candidate-screening-matrix",
    title: "Candidate Screening Matrix",
    category: "Recruitment",
    service: "recruitment-talent-acquisition",
    summary: "A weighted scoring sheet that makes shortlisting consistent and easy to explain.",
    purpose: "Scores each CV against the same must-have criteria before anyone is invited to interview.",
    helps: ["Shortlists are fair and comparable", "Hiring managers see why a candidate was shortlisted", "Less time spent on unsuitable profiles"],
    demo: {
      kind: "table",
      caption: "Role: Sales Executive · weights in brackets · scores out of 5",
      columns: ["Candidate", "Experience (30%)", "Communication (25%)", "Industry fit (20%)", "Location (15%)", "Notice period (10%)", "Weighted score", "Decision"],
      rows: [
        ["C-009", "4", "5", "4", "5", "3", "4.35", "Shortlist"],
        ["C-010", "3", "3", "2", "4", "5", "3.15", "Hold"],
        ["C-012", "5", "4", "4", "3", "2", "3.95", "Shortlist"],
        ["C-013", "2", "3", "3", "2", "4", "2.65", "Not now"],
      ],
    },
  },
  {
    slug: "interview-evaluation-form",
    title: "Interview Evaluation Form",
    category: "Recruitment",
    service: "recruitment-talent-acquisition",
    summary: "A structured form interviewers fill in right after each round.",
    purpose: "Captures ratings and evidence in the same format for every candidate and every interviewer.",
    helps: ["Decisions rely on notes, not memory", "Panel feedback is easy to compare", "Faster selection meetings"],
    demo: {
      kind: "form",
      scale: ["1 Poor", "2 Fair", "3 Good", "4 Very good", "5 Excellent"],
      sections: [
        { title: "Role fit", items: ["Relevant experience", "Job knowledge", "Problem solving"] },
        { title: "Behaviour", items: ["Communication", "Ownership", "Team fit"] },
        { title: "Recommendation", items: ["Overall rating", "Proceed to next round? (Yes / No / Hold)", "Evidence and comments"] },
      ],
    },
  },
  {
    slug: "onboarding-checklist",
    title: "Employee Onboarding Checklist",
    category: "HR Operations",
    service: "hr-operations",
    summary: "One checklist that takes a new joiner from offer acceptance to the end of their first month.",
    purpose: "Makes sure documents, access, introductions and check-ins happen the same way for every new joiner.",
    helps: ["Consistent first-day experience", "Documents collected before day one", "Clear owner for every step"],
    demo: {
      kind: "checklist",
      phases: [
        { title: "Before day one", items: ["Send welcome email with joining details", "Collect joining documents", "Create employee record", "Request system and email access"] },
        { title: "Day one", items: ["Welcome and team introduction", "Share company policies and handbook", "Workstation and access check", "Attendance system enrolment"] },
        { title: "First week", items: ["Role walkthrough with manager", "Buddy assigned", "Confirm documents are complete"] },
        { title: "First month", items: ["30-day check-in with HR", "Collect onboarding feedback", "Close onboarding in tracker"] },
      ],
    },
  },
  {
    slug: "hr-documentation-kit",
    title: "HR Documentation Kit",
    category: "Documentation",
    service: "hr-documentation",
    summary: "Structures for the documents HR writes most often: job descriptions, offer letters and announcements.",
    purpose: "Gives every document a consistent structure so drafting is faster and nothing important is left out.",
    helps: ["Professional, consistent tone", "Faster turnaround on letters", "Easy for others in the team to reuse"],
    demo: {
      kind: "documents",
      docs: [
        { title: "Job description", sections: ["Role title & team", "Purpose of the role", "Key responsibilities", "Must-have skills", "Good-to-have skills", "Work location & mode", "How to apply"] },
        { title: "Offer letter (structure)", sections: ["Candidate details", "Position & reporting", "Joining date", "Compensation summary", "Documents required", "Acceptance instructions"] },
        { title: "Employee announcement", sections: ["Subject line", "What is happening", "Who it affects", "Date and next steps", "Contact for questions"] },
      ],
    },
  },
  {
    slug: "engagement-calendar",
    title: "Employee Engagement Calendar",
    category: "Engagement",
    service: "employee-engagement",
    summary: "A year-at-a-glance plan of engagement, recognition and feedback moments.",
    purpose: "Spreads engagement through the year instead of bunching it around a few festivals.",
    helps: ["Budget and vendors planned ahead", "Regular recognition", "Feedback collected on a rhythm"],
    demo: {
      kind: "calendar",
      months: [
        { month: "Jan", items: ["New-year team kick-off", "Quarterly feedback pulse"] },
        { month: "Feb", items: ["Wellness talk"] },
        { month: "Mar", items: ["Women's Day celebration", "Quarter recognition"] },
        { month: "Apr", items: ["Feedback pulse", "Team lunch"] },
        { month: "May", items: ["Skill-share session"] },
        { month: "Jun", items: ["Quarter recognition", "Yoga Day activity"] },
        { month: "Jul", items: ["Feedback pulse"] },
        { month: "Aug", items: ["Independence Day celebration"] },
        { month: "Sep", items: ["Quarter recognition", "Team outing"] },
        { month: "Oct", items: ["Feedback pulse", "Festive decoration contest"] },
        { month: "Nov", items: ["Diwali celebration"] },
        { month: "Dec", items: ["Annual recognition", "Year-end get-together"] },
      ],
    },
  },
  {
    slug: "attendance-leave-tracker",
    title: "Attendance & Leave Tracker",
    category: "HR Operations",
    service: "hr-operations",
    summary: "A monthly summary of attendance and leave per employee, ready to share before the payroll cycle.",
    purpose: "Brings attendance-system data and approved leave into one view that can be checked quickly.",
    helps: ["Discrepancies spotted before payroll", "Leave balances stay accurate", "Managers get a monthly summary"],
    demo: {
      kind: "table",
      caption: "Month: Sample month · 22 working days",
      columns: ["Employee ID", "Department", "Present", "Leave (approved)", "Leave type", "Unplanned absence", "Late marks", "Status"],
      rows: [
        ["E-101", "Sales", "20", "2", "Casual", "0", "1", "Verified"],
        ["E-102", "Accounts", "21", "1", "Sick", "0", "0", "Verified"],
        ["E-103", "Operations", "18", "3", "Earned", "1", "2", "Check with manager"],
        ["E-104", "Admin", "22", "0", "—", "0", "0", "Verified"],
      ],
    },
  },
  {
    slug: "hr-mis-dashboard",
    title: "HR MIS Dashboard",
    category: "Analytics",
    service: "hr-analytics",
    summary: "A one-page monthly HR summary: headcount, hiring funnel and exits by reason.",
    purpose: "Gives leadership the core HR numbers in one place, built from the trackers HR already maintains.",
    helps: ["Monthly HR review in minutes", "Hiring bottlenecks are visible", "Attrition reasons are tracked over time"],
    demo: {
      kind: "dashboard",
      kpis: [
        { label: "Headcount", value: "48" },
        { label: "Open roles", value: "5" },
        { label: "Joiners this month", value: "3" },
        { label: "Exits this month", value: "1" },
      ],
      funnel: [
        { stage: "Applied", count: 120 },
        { stage: "Screened", count: 42 },
        { stage: "Interviewed", count: 18 },
        { stage: "Offered", count: 5 },
        { stage: "Joined", count: 3 },
      ],
      barsTitle: "Exit reasons (sample year)",
      bars: [
        { label: "Career growth", value: 4 },
        { label: "Relocation", value: 2 },
        { label: "Compensation", value: 3 },
        { label: "Higher studies", value: 1 },
      ],
    },
  },
  {
    slug: "hrms-implementation-workflow",
    title: "HRMS Implementation Workflow",
    category: "HRMS",
    service: "hrms-process-support",
    summary: "The steps for moving attendance, leave and employee records into an HRMS.",
    purpose: "Lays out who does what, in which order, so set-up doesn't stall halfway.",
    helps: ["Clean data before go-live", "Attendance and leave rules agreed in advance", "Parallel checks before switching over"],
    demo: {
      kind: "workflow",
      steps: [
        { title: "Map current process", text: "Document how attendance, leave and records are handled today.", owner: "HR" },
        { title: "Agree rules", text: "Confirm leave types, attendance rules and approval flow with management.", owner: "HR + Management" },
        { title: "Clean employee data", text: "Prepare a complete employee master sheet for upload.", owner: "HR" },
        { title: "Configure system", text: "Set up policies, shifts and approvers with the HRMS provider.", owner: "HRMS provider + HR" },
        { title: "Parallel run", text: "Compare system calculations with the existing method for one cycle.", owner: "HR" },
        { title: "Go live & train", text: "Switch over, train employees and managers, and collect issues.", owner: "HR" },
      ],
    },
  },
];

export const getSample = (slug: string) => samples.find((s) => s.slug === slug);
