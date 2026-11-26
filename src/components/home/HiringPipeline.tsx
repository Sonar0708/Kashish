"use client";

import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useInView, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const stages = ["Applied", "Screened", "Interview", "Selected", "Joined"];
const tints = ["bg-white", "bg-lavender-soft", "bg-blush-soft", "bg-coral/15", "bg-plum text-cream"];
const roles = ["Sales", "Accounts", "Operations", "Admin", "Support", "Marketing", "Design", "Logistics"];

type Chip = { id: number; stage: number; role: string };

const initial: Chip[] = [
  { id: 1, stage: 0, role: roles[0] },
  { id: 2, stage: 0, role: roles[1] },
  { id: 3, stage: 0, role: roles[2] },
  { id: 4, stage: 1, role: roles[3] },
  { id: 5, stage: 1, role: roles[4] },
  { id: 6, stage: 2, role: roles[5] },
  { id: 7, stage: 3, role: roles[6] },
  { id: 8, stage: 4, role: roles[7] },
];

/** Candidates move through hiring stages on a loop (sample data, illustrative only). */
export default function HiringPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [chips, setChips] = useState<Chip[]>(initial);
  const tick = useRef(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => {
      tick.current += 1;
      setChips((prev) => {
        const joined = prev.filter((c) => c.stage === 4);
        if (joined.length >= 3) {
          // Joined candidates leave the board and new applicants arrive.
          return prev.map((c) => (c.stage === 4 ? { ...c, stage: 0 } : c));
        }
        const movable = prev.filter((c) => c.stage < 4);
        const pick = movable[(tick.current * 5) % movable.length];
        return prev.map((c) => (c.id === pick.id ? { ...c, stage: c.stage + 1 } : c));
      });
    }, 1500);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="pipeline-title">
      <div className="container-x">
        <SectionHeading
          id="pipeline-title"
          eyebrow="How I run hiring"
          title={
            <>
              A pipeline where <em className="text-coral-deep">nobody</em> gets lost.
            </>
          }
          intro="Every candidate has a stage, a next step and an owner. Hiring managers can see progress at a glance and candidates always hear back."
        />

        <div ref={ref} className="relative mt-14 rounded-[2rem] border border-white bg-white/50 p-4 soft-shadow backdrop-blur sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-2">
            <p className="text-sm font-semibold text-plum">Hiring board</p>
            <p className="rounded-full bg-cream-deep px-3 py-1 text-xs font-medium text-mute">Animated demo · sample candidates</p>
          </div>
          <LayoutGroup>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-hidden>
              {stages.map((s, si) => {
                const inStage = chips.filter((c) => c.stage === si);
                return (
                  <div key={s} className={cn("flex min-h-56 flex-col rounded-3xl p-3", si === 4 ? "bg-plum" : "bg-cream/70")}>
                    <div className="mb-3 flex items-center justify-between px-1">
                      <span className={cn("text-xs font-bold uppercase tracking-wider", si === 4 ? "text-cream" : "text-plum")}>{s}</span>
                      <motion.span
                        key={inStage.length}
                        initial={{ scale: 1.4 }}
                        animate={{ scale: 1 }}
                        className={cn("grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-xs font-bold", si === 4 ? "bg-coral text-white" : "bg-white text-plum")}
                      >
                        {inStage.length}
                      </motion.span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {inStage.map((c) => (
                        <motion.div
                          key={c.id}
                          layoutId={`chip-${c.id}`}
                          transition={{ type: "spring", stiffness: 260, damping: 28 }}
                          className={cn("flex items-center gap-2.5 rounded-2xl p-2.5 soft-shadow", tints[si])}
                        >
                          <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-sm", si === 4 ? "bg-coral text-white" : "bg-gradient-to-br from-lavender to-blush text-plum")}>
                            {String.fromCharCode(64 + c.id)}
                          </span>
                          <span className="min-w-0">
                            <span className={cn("block truncate text-xs font-bold", si === 4 ? "text-cream" : "text-plum")}>Candidate {String.fromCharCode(64 + c.id)}</span>
                            <span className={cn("block truncate text-[0.68rem]", si === 4 ? "text-cream/70" : "text-mute")}>{c.role}</span>
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </LayoutGroup>
          <p className="sr-only">An animated board showing sample candidates moving from Applied, to Screened, Interview, Selected and Joined.</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Clear criteria", "Must-haves agreed before sourcing begins, so screening is consistent."],
            ["Timely communication", "Candidates are updated at every stage, including when it's a no."],
            ["Visible progress", "A tracker that shows stage, next action and owner for every candidate."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-3xl border border-line bg-white/40 p-6">
              <p className="font-display text-xl text-plum">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
