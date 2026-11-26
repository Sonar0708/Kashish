/**
 * SITE CONFIGURATION
 * ------------------------------------------------------------------
 * Edit the values below to update contact details across the site.
 * Empty strings are treated as "not configured yet": the related
 * contact card shows "Shared on request" instead of a broken link.
 */

// Base path for GitHub Pages project sites (https://<user>.github.io/<repo>/).
// The GitHub Actions workflow sets NEXT_PUBLIC_BASE_PATH automatically from the repo name.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Kashish";

// Public URL used for SEO (canonical links, sitemap). Set automatically in CI.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonar0708.github.io/Kashish").replace(/\/$/, "");

export const site = {
  name: "Kashish Talreja",
  firstName: "Kashish",
  role: "HR Professional",
  positioning: "Talent Acquisition · People Operations · Employee Engagement · HR Management",
  headline: "Building Better Workplaces, One Great Hire at a Time.",
  statement: "Helping businesses find the right people, streamline HR operations and create better employee experiences.",
  location: "Mumbai, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/kashish-talreja-422b04248/",

  // TODO (confirm with Kashish): professional email address, e.g. "hello@example.com".
  // When set, the contact form opens a pre-filled email draft to this address.
  email: "",

  // TODO (confirm with Kashish): WhatsApp number in international format, digits only, e.g. "919876543210".
  whatsapp: "",
};

export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Kashish, I found your HR portfolio and would like to connect.")}`
  : "";

/** Prefix a file in /public with the deployment base path (needed for plain <a>/<img> tags). */
export const asset = (path: string) => `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

export type NavItem = { href: string; label: string; children?: { href: string; label: string; note?: string }[] };
