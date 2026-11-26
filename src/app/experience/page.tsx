import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { sessions } from "@/data/experience";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/experience/Timeline";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/home/ContactCTA";
import { LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Kashish Talreja's HR experience at Popaya® Technologies, Trade Facilities Management (Kamala Group), Jeevandeep Edumedia and GRT Global Logistics: recruitment, HR operations, HRMS and engagement.",
  alternates: { canonical: "./" },
};

export default function ExperiencePage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Professional experience"
        crumbs={[{ href: "/experience", label: "Experience" }]}
        title={
          <>
            Where I&apos;ve <em className="text-coral-deep">grown</em> as an HR professional.
          </>
        }
        intro="Four organisations, from an HR internship to my current role as HR Executive. Open any role to see the details."
      >
        <Button href={site.linkedin} variant="secondary" icon={<LinkedInIcon />}>
          Verify on LinkedIn
        </Button>
      </PageHero>
      <section className="pb-24" aria-label="Experience timeline">
        <div className="container-x max-w-5xl">
          <Timeline />
        </div>
      </section>
      <section className="pb-24" aria-labelledby="sessions-title">
        <div className="container-x max-w-5xl">
          <p className="eyebrow mb-4">
            <span className="h-px w-6 bg-coral" aria-hidden /> Seminars & training
          </p>
          <h2 id="sessions-title" className="display text-4xl text-plum sm:text-5xl">
            Sharing HR know-how with <em className="text-coral-deep">students</em>.
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {sessions.map((s) => (
              <Reveal as="li" key={s.id} className="flex gap-5 rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blush/70 text-coral-deep">
                  <GraduationCap className="h-6 w-6" aria-hidden strokeWidth={1.6} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-coral-deep">{s.type}</span>
                  <span className="mt-1 block font-display text-2xl text-plum">{s.institution}</span>
                  <span className="mt-1 block text-sm font-semibold text-ink/80">Audience: {s.audience}</span>
                  <span className="mt-2 block leading-relaxed text-mute">{s.summary}</span>
                </span>
              </Reveal>
            ))}
          </ul>
          <Link href="/services/campus-to-corporate-training" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-plum underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep">
            Book a seminar or training session <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
