/**
 * AVAILABILITY CONFIGURATION
 * ------------------------------------------------------------------
 * Kashish: update this file whenever your availability changes.
 * Every "Open to Opportunities" card, the availability badge in the
 * header and the contact form read from here.
 *
 * status options:
 *   "open"      → shows "Open now"            (actively looking / can start)
 *   "selective" → shows "Open to the right fit" (happy to discuss)
 *   "paused"    → shows "Not right now"        (card stays visible but muted)
 */

export type AvailabilityStatus = "open" | "selective" | "paused";

export const statusLabel: Record<AvailabilityStatus, string> = {
  open: "Open now",
  selective: "Open to the right fit",
  paused: "Not right now",
};

export const availability = {
  // Short badge shown in the header and hero.
  badge: "Open to conversations",

  // One honest sentence about the current situation.
  summary:
    "I currently work full-time as an HR Executive at Popaya® Technologies in Mumbai. I'm open to discussing selected freelance HR assignments and suitable roles. Tell me what you need and I'll reply with what I can realistically take on.",

  // Where Kashish is based and which work arrangements she prefers.
  base: "Mumbai, India",
  arrangements: [
    { label: "Remote", status: "selective" as AvailabilityStatus },
    { label: "Hybrid (Mumbai)", status: "selective" as AvailabilityStatus },
    { label: "On-site (Mumbai)", status: "selective" as AvailabilityStatus },
  ],

  // Last time this file was reviewed. Shown on the Opportunities page.
  lastUpdated: "November 2026",

  opportunities: [
    {
      id: "freelance",
      title: "Freelance HR assignments",
      description: "Short, well-scoped HR tasks: documentation, trackers, onboarding set-up or process clean-up.",
      status: "selective" as AvailabilityStatus,
      formType: "Freelance HR Support",
    },
    {
      id: "recruitment",
      title: "Recruitment projects",
      description: "Sourcing, screening and coordinating candidates for specific openings, from job description to joining.",
      status: "selective" as AvailabilityStatus,
      formType: "Recruitment Assignment",
    },
    {
      id: "part-time",
      title: "Part-time HR support",
      description: "Regular, limited-hours support for teams that need HR help but not a full-time hire yet.",
      status: "selective" as AvailabilityStatus,
      formType: "Part-time Role",
    },
    {
      id: "contract",
      title: "Contract-based HR roles",
      description: "Fixed-term HR roles covering a project, a hiring drive or a team transition.",
      status: "selective" as AvailabilityStatus,
      formType: "Contract Role",
    },
    {
      id: "remote",
      title: "Remote HR opportunities",
      description: "Remote recruitment coordination, HR documentation and HR reporting work.",
      status: "selective" as AvailabilityStatus,
      formType: "Remote Opportunity",
    },
    {
      id: "hybrid",
      title: "Hybrid opportunities",
      description: "Roles that combine remote work with time in a Mumbai office.",
      status: "selective" as AvailabilityStatus,
      formType: "Other Collaboration",
    },
    {
      id: "training",
      title: "Seminars & corporate training",
      description: "Campus-to-corporate seminars for colleges and professional-skills training sessions for companies.",
      status: "selective" as AvailabilityStatus,
      formType: "Seminar / Corporate Training",
    },
    {
      id: "full-time",
      title: "Suitable full-time opportunities",
      description: "Full-time HR roles in talent acquisition, HR operations or people operations where I can grow and contribute.",
      status: "selective" as AvailabilityStatus,
      formType: "Full-time Role",
    },
  ],
};
