import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Providers from "@/components/ui/Providers";
import { SITE_URL, site } from "@/config/site";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL + "/"),
  title: {
    default: "Kashish Talreja — HR Professional | Talent Acquisition & People Operations",
    template: "%s — Kashish Talreja, HR Professional",
  },
  description:
    "Kashish Talreja is a Mumbai-based HR professional offering freelance recruitment, HR operations, employee engagement, HR documentation, HR reporting, HRMS support, campus-to-corporate seminars and corporate training, and open to suitable HR opportunities.",
  keywords: [
    "Kashish Talreja",
    "HR professional Mumbai",
    "freelance HR support",
    "freelance recruiter",
    "talent acquisition",
    "HR operations",
    "employee engagement",
    "HRMS implementation support",
    "HR documentation",
    "campus to corporate seminar",
    "corporate training Mumbai",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    siteName: "Kashish Talreja",
    title: "Kashish Talreja — People Make Businesses. Great HR Makes Them Better.",
    description: site.statement,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish Talreja — HR Professional",
    description: site.statement,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f0",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "HR Executive",
  description: site.statement,
  url: SITE_URL + "/",
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
  sameAs: [site.linkedin],
  knowsAbout: ["Talent Acquisition", "Recruitment", "HR Operations", "Employee Engagement", "Employee Relations", "Onboarding", "HRMS"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${manrope.variable} ${caveat.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <a href="#main" className="sr-only z-[200] rounded-full bg-plum px-5 py-2.5 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>
          <SmoothScroll />
          <Navigation />
          <main id="main" className="flex-1 overflow-x-clip">
            {children}
          </main>
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
