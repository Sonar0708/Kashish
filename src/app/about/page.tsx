import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Sparkle } from "@/components/ui/Doodles";
import ContactCTA from "@/components/home/ContactCTA";
import { site } from "@/config/site";
import { experience, systems } from "@/data/experience";

export const metadata: Metadata = {
  title: "About Kashish",
  description: "Kashish Talreja is a Mumbai-based HR professional working across talent acquisition, HR operations, employee engagement and employee relations.",
  alternates: { canonical: "./" },
};

const values = [
  { title: "Organised", text: "Clear trackers, clean records and checklists, so nothing important depends on memory." },
  { title: "People-first", text: "Candidates and employees deserve timely, respectful communication at every step." },
  { title: "Practical", text: "Processes that a real team can follow on a busy week, not just on paper." },
  { title: "Professional", text: "Careful, well-written communication, from offer letters to formal correspondence." },
];

const strengths = [
  "End-to-end recruitment",
  "Candidate sourcing & screening",
  "Interview coordination",
  "Job descriptions",
  "Onboarding & offboarding",
  "Employee records & data integrity",
  "Attendance & leave systems",
  "HRMS implementation",
  "Employee engagement",
  "Employee relations",
  "Exit interviews",
  "Manpower planning coordination",
  "Formal correspondence",
  "Event coordination",
  "Vendor management",
];

export default function AboutPage() {
  const current = experience.find((e) => e.current);
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="About Kashish"
        crumbs={[{ href: "/about", label: "About" }]}
        title={
          <>
            Building better workplaces, <em className="text-coral-deep">one great hire</em> at a time.
          </>
        }
        intro={site.statement}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.linkedin} variant="primary" icon={<LinkedInIcon />}>
            Connect on LinkedIn
          </Button>
          <Button href="/experience" variant="secondary">
            View experience
          </Button>
        </div>
      </PageHero>

      <section className="pb-24" aria-labelledby="story-title">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div aria-hidden className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-coral/40 to-lavender" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white bg-gradient-to-br from-lavender-soft via-cream to-blush-soft p-8 lift-shadow">
                <div className="grid aspect-square place-items-center rounded-[1.6rem] bg-plum">
                  <span className="display text-[7rem] italic text-cream">
                    K<span className="text-coral">t</span>
                  </span>
                </div>
                <p className="mt-6 font-display text-3xl text-plum">{site.name}</p>
                <p className="mt-1 text-sm font-semibold text-mute">{site.positioning}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-coral" aria-hidden /> {site.location}
                  </li>
                  {current && (
                    <li className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-coral" aria-hidden /> {current.titles[0]}, {current.organisation}
                    </li>
                  )}
                </ul>
              </div>
              <p className="mt-6 text-center font-hand text-2xl text-plum-soft">
                <Sparkle className="mr-2 inline h-4 w-4 text-coral" />
                people make businesses
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 id="story-title" className="display text-4xl text-plum sm:text-5xl">
              My story so far
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-mute">
              <p>
                I started in HR as an intern at GRT Global Logistics, screening candidates, designing job postings and coordinating high-volume interview schedules. That first taste of recruitment showed me how much a well-run hiring process matters to candidates and to the business.
              </p>
              <p>
                At Jeevandeep Edumedia, where I held the titles of Assistant Manager – Human Resources and Junior Human Resources Manager, I managed recruitment across departments, coordinated manpower planning with department heads, prepared offer and appointment letters, and administered the Sensys and Matrix COSEC systems.
              </p>
              <p>
                At Trade Facilities Management (Kamala Group), I ran Mumbai office operations alongside HR for a distributed workforce. I implemented Razorpay HRMS for automated attendance and leave calculations, standardised onboarding and exit formalities, ran data-driven exit interviews and handled formal correspondence and national-level events.
              </p>
              <p>
                Today I&apos;m an HR Executive at Popaya® Technologies in Mumbai, handling end-to-end recruitment, HR operations, employee engagement, employee relations, onboarding and offboarding.
              </p>
              <p>
                Beyond my HR roles, I&apos;ve conducted a session for BBA students at VESASC, Chembur. I enjoy helping students understand what recruiters look for and how to make the move from campus to corporate life.
              </p>
            </div>
            <div className="mt-8 rounded-3xl border border-white bg-white/60 p-6 soft-shadow">
              <p className="font-display text-xl text-plum">Let&apos;s connect on LinkedIn</p>
              <p className="mt-1 text-sm text-mute">My LinkedIn profile has my most up-to-date professional details.</p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <LinkedInIcon /> View LinkedIn profile <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="values-title">
        <div className="container-x">
          <SectionHeading id="values-title" eyebrow="How I work" title={<>What you can expect <em className="text-coral-deep">from me</em>.</>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow transition-transform duration-500 hover:-translate-y-1.5">
                <span className="font-display text-4xl italic text-coral">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-plum">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="skills-title">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="skills-title" eyebrow="Strengths" title="HR skills from real roles" intro="Every skill here comes from responsibilities I've held." />
            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <li key={s} className="rounded-full border border-plum/15 bg-white/70 px-4 py-2 text-sm font-medium text-plum transition-colors hover:border-coral hover:bg-coral hover:text-white">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="Systems" title="Tools I've worked with" />
            <ul className="mt-8 space-y-3">
              {systems.map((s, i) => (
                <Reveal as="li" key={s.name} delay={i * 0.06} className="flex items-start gap-4 rounded-3xl border border-white bg-white/70 p-5 soft-shadow">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-lavender/60 font-display text-plum">{s.name[0]}</span>
                  <span>
                    <span className="block font-semibold text-plum">{s.name}</span>
                    <span className="block text-sm text-mute">{s.context}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Link href="/services" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-plum underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep">
              See how this turns into HR services <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
