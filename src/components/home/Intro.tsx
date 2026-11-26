import Link from "next/link";
import { ArrowUpRight, Building2, BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { Scribble } from "@/components/ui/Doodles";
import { facts } from "@/data/experience";

const problems = [
  "Roles that stay open too long",
  "Scattered employee records",
  "Inconsistent onboarding",
  "Attendance & leave confusion",
  "Unclear HR documents",
  "No visibility on hiring or attrition",
];

const roles = ["Freelance HR assignments", "Recruitment projects", "Part-time & contract roles", "Remote & hybrid roles", "Suitable full-time roles"];

export default function Intro() {
  return (
    <section id="intro" className="relative py-24 sm:py-32" aria-labelledby="intro-title">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="h-px w-6 bg-coral" aria-hidden /> Hello, I&apos;m Kashish
            </p>
            <h2 id="intro-title" className="display text-4xl text-plum sm:text-5xl lg:text-6xl">
              HR that is practical, organised and{" "}
              <span className="relative inline-block italic">
                people-first
                <Scribble />
              </span>
              .
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-mute">
              I&apos;m a Mumbai-based HR professional working across recruitment, HR operations, employee engagement and employee relations. I&apos;ve run end-to-end hiring, implemented an HRMS for attendance and leave, standardised onboarding and exit formalities, and kept employee records accurate.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mute">
              I help businesses with hands-on HR support, and I&apos;m open to suitable HR roles where I can keep growing.
            </p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-1.5 font-semibold text-plum underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep">
              More about me <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <Counter value={f.value} className="display block text-5xl text-coral-deep sm:text-6xl" />
                    <span className="mt-1 block text-sm leading-snug text-mute">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.1} className="group rounded-[2rem] bg-plum p-8 text-cream lift-shadow sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral text-white">
                  <Building2 className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">For businesses</p>
              </div>
              <h3 className="mt-5 font-display text-3xl">HR problems I can help you solve</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {problems.map((p) => (
                  <li key={p} className="rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm text-cream/90 transition-colors group-hover:border-cream/30">
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/services" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-coral hover:text-white">
                Explore HR services <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>

            <Reveal delay={0.2} className="rounded-[2rem] border border-white bg-gradient-to-br from-lavender-soft to-blush-soft p-8 soft-shadow sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-plum text-cream">
                  <BriefcaseBusiness className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-deep">For hiring managers & recruiters</p>
              </div>
              <h3 className="mt-5 font-display text-3xl text-plum">Opportunities I&apos;m open to</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <li key={r} className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-plum">
                    {r}
                  </li>
                ))}
              </ul>
              <Link href="/opportunities" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-plum hover:text-coral-deep">
                See availability <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
