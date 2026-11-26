import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { availability } from "@/config/availability";
import { services } from "@/data/services";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Sparkle } from "@/components/ui/Doodles";

const explore = [
  { href: "/about", label: "About Kashish" },
  { href: "/experience", label: "Professional Experience" },
  { href: "/services", label: "Freelance HR Services" },
  { href: "/work", label: "Work Samples" },
  { href: "/resources", label: "Resources & Templates" },
  { href: "/opportunities", label: "Open to Opportunities" },
  { href: "/contact", label: "Contact / Hire Kashish" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-plum text-cream">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-coral/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-lavender/20 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="display text-4xl sm:text-5xl">
              Kashish <em className="text-coral">Talreja</em>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-cream/70">{site.statement}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-cream/70">
              <MapPin className="h-4 w-4 text-coral" aria-hidden /> Based in {availability.base}
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-plum transition-colors hover:bg-white"
            >
              <LinkedInIcon className="h-4 w-4 text-[#0a66c2]" /> Connect on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <FooterList title="Explore" items={explore} />
          <FooterList title="HR Services" items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.navLabel }))} />

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral">Availability</h2>
            <p className="font-display text-xl">{availability.badge}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">Freelance assignments, recruitment projects and suitable roles.</p>
            <Link href="/opportunities" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-white">
              See what I&apos;m open to <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kashish Talreja. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Sparkle className="h-3 w-3 text-coral" /> Work samples on this site are demonstration templates with fictional data.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral">{title}</h2>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-cream/80 transition-colors hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
