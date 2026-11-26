"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Building2, CalendarDays, ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

const accentDot = { coral: "bg-coral", plum: "bg-plum", lavender: "bg-lavender", blush: "bg-blush" } as const;

/** Vertical timeline with a scroll-linked progress line and expandable role details. */
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const [open, setOpen] = useState<string[]>([experience[0].id]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Open the role targeted by a #hash (e.g. links from the homepage).
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !experience.some((e) => e.id === id)) return;
    const t = window.setTimeout(() => setOpen((o) => (o.includes(id) ? o : [...o, id])), 0);
    return () => window.clearTimeout(t);
  }, []);

  const toggle = (id: string) => setOpen((o) => (o.includes(id) ? o.filter((x) => x !== id) : [...o, id]));
  const allOpen = open.length === experience.length;

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(allOpen ? [] : experience.map((e) => e.id))}
          className="rounded-full border border-plum/20 bg-white/70 px-4 py-2 text-sm font-semibold text-plum hover:border-plum"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      <ol ref={ref} className="relative space-y-8 pl-10 sm:pl-16">
        <span aria-hidden className="absolute bottom-0 left-[0.9rem] top-0 w-0.5 rounded bg-plum/10 sm:left-[1.4rem]" />
        <motion.span aria-hidden style={{ scaleY }} className="absolute bottom-0 left-[0.9rem] top-0 w-0.5 origin-top rounded bg-gradient-to-b from-coral via-plum-soft to-lavender sm:left-[1.4rem]" />
        {experience.map((r, i) => {
          const isOpen = open.includes(r.id);
          return (
            <motion.li
              key={r.id}
              id={r.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative scroll-mt-28"
            >
              <span aria-hidden className={cn("absolute -left-10 top-8 grid h-8 w-8 place-items-center rounded-full border-4 border-cream sm:-left-16 sm:h-12 sm:w-12", accentDot[r.accent])}>
                <Briefcase className={cn("h-3.5 w-3.5 sm:h-5 sm:w-5", r.accent === "plum" || r.accent === "coral" ? "text-cream" : "text-plum")} />
              </span>
              <article className={cn("overflow-hidden rounded-[2rem] border border-white bg-white/70 soft-shadow backdrop-blur transition-shadow duration-500", isOpen && "lift-shadow bg-white/90")}>
                <h2>
                  <button
                    type="button"
                    onClick={() => toggle(r.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${r.id}-details`}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
                  >
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral-deep">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {r.period}
                        {r.current && <span className="rounded-full bg-coral px-2 py-0.5 text-[0.62rem] text-white">Current</span>}
                      </span>
                      <span className="mt-3 block font-display text-2xl leading-tight text-plum sm:text-3xl">
                        {r.titles.map((t, ti) => (
                          <span key={t} className="block">
                            {t}
                            {ti < r.titles.length - 1 && <span className="sr-only">,</span>}
                          </span>
                        ))}
                      </span>
                      <span className="mt-2 flex items-center gap-2 text-base font-semibold text-ink/80">
                        <Building2 className="h-4 w-4 shrink-0 text-mute" aria-hidden /> {r.organisation}
                      </span>
                      <span className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-mute">
                        {r.employment && <span className="rounded-full bg-cream-deep px-3 py-1">{r.employment}</span>}
                        {r.workMode && <span className="rounded-full bg-cream-deep px-3 py-1">{r.workMode}</span>}
                        {r.location && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-cream-deep px-3 py-1">
                            <MapPin className="h-3 w-3" aria-hidden /> {r.location}
                          </span>
                        )}
                      </span>
                      <span className="mt-4 block leading-relaxed text-mute">{r.summary}</span>
                    </span>
                    <span className={cn("mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300", isOpen ? "rotate-180 border-coral bg-coral text-white" : "border-plum/20 text-plum")}>
                      <ChevronDown className="h-5 w-5" aria-hidden />
                    </span>
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${r.id}-details`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 border-t border-line px-6 pb-8 pt-6 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-mute">Responsibilities</h3>
                          <ul className="mt-4 space-y-3">
                            {r.responsibilities.map((x) => (
                              <li key={x} className="flex gap-3 leading-relaxed text-ink/85">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
                                {x}
                              </li>
                            ))}
                          </ul>
                          {r.titleNote && <p className="mt-5 text-sm italic text-mute">{r.titleNote}</p>}
                        </div>
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-mute">HR skills used</h3>
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {r.skills.map((s) => (
                              <li key={s} className="rounded-full bg-lavender-soft px-3 py-1.5 text-sm font-medium text-plum">
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
