"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, Database, HeartHandshake, LogOut, UserPlus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "plan",
    label: "Workforce planning",
    icon: ClipboardList,
    text: "Understanding what each team needs before a role is opened.",
    doing: ["Coordinated with department heads for manpower planning and workforce management.", "Created job descriptions for new organisational openings."],
  },
  {
    id: "recruit",
    label: "Recruitment",
    icon: Search,
    text: "Finding, screening and coordinating the right candidates.",
    doing: ["Managed end-to-end recruitment across departments.", "Used major job portals for sourcing and shortlisting.", "Coordinated high-volume interview schedules."],
  },
  {
    id: "onboard",
    label: "Onboarding",
    icon: UserPlus,
    text: "Making a new joiner's first days organised and welcoming.",
    doing: ["Generated offer letters and appointment letters for new joiners.", "Standardised onboarding and employee documentation.", "Handles employee onboarding at Popaya® Technologies."],
  },
  {
    id: "ops",
    label: "Records & attendance",
    icon: Database,
    text: "Keeping employee data, attendance and leave accurate.",
    doing: ["Implemented Razorpay HRMS for automated attendance and leave calculations.", "Administered Sensys and Matrix COSEC.", "Maintained employee records and data integrity."],
  },
  {
    id: "engage",
    label: "Engagement & relations",
    icon: HeartHandshake,
    text: "Helping people stay connected, heard and recognised.",
    doing: ["Handles employee engagement and employee relations at Popaya® Technologies.", "Coordinated national-level events.", "Prepared professional employee communications."],
  },
  {
    id: "exit",
    label: "Offboarding & insights",
    icon: LogOut,
    text: "Respectful exits that also teach the company something.",
    doing: ["Standardised exit formalities.", "Conducted data-driven exit interviews to identify attrition trends.", "Handles employee offboarding at Popaya® Technologies."],
  },
];

/** Interactive employee lifecycle wheel. Arrow keys move between stages. */
export default function Lifecycle() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = stages[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % stages.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + stages.length) % stages.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = stages.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="relative overflow-hidden bg-plum py-24 text-cream sm:py-32" aria-labelledby="lifecycle-title">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-coral/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-lavender/20 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-coral!">
            <span className="h-px w-6 bg-coral" aria-hidden /> The employee lifecycle
          </p>
          <h2 id="lifecycle-title" className="display text-4xl sm:text-5xl lg:text-6xl">
            Support at every stage of an <em className="text-coral">employee&apos;s</em> journey.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">Choose a stage to see what I&apos;ve handled there in my roles so far.</p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Wheel */}
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
            <div aria-hidden className="spin-slow absolute inset-[8%] rounded-full border-2 border-dashed border-cream/15" />
            <div aria-hidden className="absolute inset-[24%] rounded-full bg-gradient-to-br from-coral/30 to-lavender/20 blur-xl" />
            <div className="absolute inset-[26%] grid place-items-center rounded-full border border-cream/15 bg-cream/5 p-4 text-center backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <p className="font-hand text-xl text-coral sm:text-2xl">stage {active + 1}</p>
                  <p className="font-display text-xl leading-tight sm:text-2xl">{current.label}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div role="tablist" aria-label="Employee lifecycle stages" aria-orientation="horizontal">
              {stages.map((s, i) => {
                const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 42;
                const y = 50 + Math.sin(angle) * 42;
                const Icon = s.icon;
                const on = i === active;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`lc-tab-${s.id}`}
                    aria-selected={on}
                    aria-controls="lc-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKey(e, i)}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.span
                      animate={{ scale: on ? 1.12 : 1 }}
                      whileHover={{ scale: 1.12 }}
                      className={cn(
                        "grid h-14 w-14 place-items-center rounded-2xl border transition-colors duration-300 sm:h-16 sm:w-16",
                        on ? "border-coral bg-coral text-white shadow-xl shadow-coral/30" : "border-cream/20 bg-plum-soft/60 text-cream hover:border-coral/60",
                      )}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden />
                    </motion.span>
                    <span className={cn("absolute left-1/2 top-full mt-2 hidden w-28 -translate-x-1/2 text-center text-xs font-semibold leading-tight sm:block", on ? "text-coral" : "text-cream/70")}>
                      {s.label}
                    </span>
                    <span className="sr-only sm:hidden">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div id="lc-panel" role="tabpanel" aria-labelledby={`lc-tab-${current.id}`} className="min-h-[22rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2rem] border border-cream/15 bg-cream/5 p-8 backdrop-blur sm:p-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                  Stage {active + 1} of {stages.length}
                </p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">{current.label}</h3>
                <p className="mt-3 text-lg text-cream/75">{current.text}</p>
                <p className="mt-8 text-sm font-semibold text-cream/60">What I&apos;ve done here</p>
                <ul className="mt-3 space-y-3">
                  {current.doing.map((d, i) => (
                    <motion.li key={d} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" aria-hidden />
                      <span className="leading-relaxed text-cream/90">{d}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-1.5" aria-hidden>
                  {stages.map((s, i) => (
                    <span key={s.id} className={cn("h-1.5 flex-1 rounded-full transition-colors duration-500", i <= active ? "bg-coral" : "bg-cream/15")} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
