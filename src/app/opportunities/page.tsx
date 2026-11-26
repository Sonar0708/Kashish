import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import StatusPill from "@/components/ui/StatusPill";
import ContactCTA from "@/components/home/ContactCTA";
import { LinkedInIcon } from "@/components/ui/Icons";
import { availability } from "@/config/availability";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Open to Opportunities",
  description: "Kashish Talreja is open to selected freelance HR assignments, recruitment projects, part-time, contract, remote, hybrid and suitable full-time HR roles.",
  alternates: { canonical: "./" },
};

const roleAreas = ["Talent Acquisition", "Recruitment", "HR Operations", "People Operations", "Employee Engagement", "HR Generalist", "HR Executive roles"];

export default function OpportunitiesPage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Open to opportunities"
        crumbs={[{ href: "/opportunities", label: "Opportunities" }]}
        title={
          <>
            Have an HR requirement or an opportunity? <em className="text-coral-deep">Let&apos;s connect.</em>
          </>
        }
        intro={availability.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill status="selective" label={availability.badge} />
          <span className="inline-flex items-center gap-1.5 text-sm text-mute">
            <MapPin className="h-4 w-4 text-coral" aria-hidden /> Based in {availability.base}
          </span>
          <span className="text-xs text-mute">· Last updated {availability.lastUpdated}</span>
        </div>
      </PageHero>

      <section className="pb-24" aria-labelledby="types-title">
        <div className="container-x">
          <h2 id="types-title" className="sr-only">
            Opportunity types
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {availability.opportunities.map((o, i) => (
              <Reveal
                as="li"
                key={o.id}
                delay={(i % 3) * 0.07}
                className={cn(
                  "group flex flex-col rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow transition-all duration-500 hover:-translate-y-1.5 hover:lift-shadow",
                  o.status === "paused" && "opacity-60",
                )}
              >
                <StatusPill status={o.status} className="self-start" />
                <h3 className="mt-5 font-display text-2xl text-plum">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{o.description}</p>
                {o.status !== "paused" && (
                  <Link
                    href={`/contact?type=${encodeURIComponent(o.formType)}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-plum group-hover:text-coral-deep"
                  >
                    Discuss this <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16" aria-label="Preferences">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-plum p-8 text-cream sm:p-10">
            <h2 className="font-display text-3xl">Work arrangements</h2>
            <ul className="mt-6 space-y-3">
              {availability.arrangements.map((a) => (
                <li key={a.label} className="flex items-center justify-between gap-3 rounded-2xl bg-cream/5 px-5 py-4">
                  <span className="font-semibold">{a.label}</span>
                  <StatusPill status={a.status} className="bg-white" />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-gradient-to-br from-lavender-soft to-blush-soft p-8 sm:p-10">
            <h2 className="font-display text-3xl text-plum">Role areas I&apos;m interested in</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {roleAreas.map((r) => (
                <li key={r} className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-plum">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mute">For recruiters: my LinkedIn profile has my latest experience. Notice period and start dates are discussed individually.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact?type=Full-time%20Role" variant="primary">
                Share a role
              </Button>
              <Button href={site.linkedin} variant="secondary" icon={<LinkedInIcon />}>
                Connect on LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
