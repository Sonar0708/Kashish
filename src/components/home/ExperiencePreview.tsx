import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

const dot = { coral: "bg-coral", plum: "bg-plum", lavender: "bg-lavender", blush: "bg-blush" } as const;

export default function ExperiencePreview() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="exp-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="exp-title"
            eyebrow="Experience"
            title={
              <>
                Four organisations. <em className="text-coral-deep">One</em> focus on people.
              </>
            }
            intro="From an HR internship to running recruitment, HR operations and engagement, here's where I've worked."
          />
          <Button href="/experience" variant="secondary" className="shrink-0">
            Full timeline
          </Button>
        </div>

        <div className="relative mt-14">
          <span aria-hidden className="absolute left-[0.6rem] top-2 bottom-2 w-px bg-line md:left-0 md:right-0 md:top-[0.6rem] md:bottom-auto md:h-px md:w-auto" />
          <ol className="grid gap-6 md:grid-cols-4">
            {experience.map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 0.08} className="relative pl-9 md:pl-0 md:pt-10">
                <span aria-hidden className={cn("absolute left-0 top-1 h-5 w-5 rounded-full border-4 border-cream md:top-0", dot[r.accent])} />
                <Link href={`/experience#${r.id}`} className="group block h-full rounded-3xl border border-white bg-white/60 p-6 soft-shadow transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:lift-shadow">
                  <p className="text-xs font-bold uppercase tracking-wider text-coral-deep">
                    {r.period}
                    {r.current && <span className="ml-2 rounded-full bg-coral px-2 py-0.5 text-[0.62rem] text-white">Current</span>}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-tight text-plum">{r.titles.join(" · ")}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-ink/80">{r.organisation}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{r.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-plum group-hover:text-coral-deep">
                    Details <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
