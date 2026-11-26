import { services } from "@/data/services";
import type { NavItem } from "./site";

export const nav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All HR services", note: "Overview & how I work" },
      ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.title, note: s.tagline })),
    ],
  },
  { href: "/work", label: "Work Samples" },
  { href: "/resources", label: "Resources" },
  { href: "/opportunities", label: "Opportunities" },
];
