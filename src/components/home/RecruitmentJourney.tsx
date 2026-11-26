"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, CalendarDays, Check, FileText, MessageCircle, PartyPopper, Search, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { label: "Job Opening", note: "Role defined, JD published", icon: Briefcase },
  { label: "Candidate Search", note: "Sourcing & screening", icon: Search },
  { label: "Interview", note: "Rounds scheduled & evaluated", icon: MessageCircle },
  { label: "Selection", note: "Offer prepared & accepted", icon: UserCheck },
  { label: "Onboarding", note: "Day-one ready", icon: PartyPopper },
];

/** Animated illustration of a recruitment journey with floating HR cards. Purely illustrative. */
export default function RecruitmentJourney() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % stages.length), 2200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const shown = reduce ? stages.length - 1 : active;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" role="img" aria-label="Illustration of a recruitment journey: job opening, candidate search, interview, selection and onboarding.">
      {/* glow */}
      <div aria-hidden className="absolute inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-lavender via-blush to-coral/40 opacity-70 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass lift-shadow relative rounded-[2rem] p-6 sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-mute">The hiring journey</p>
            <p className="font-display text-2xl text-plum">From opening to day one</p>
          </div>
          <span className="font-hand text-xl text-coral-deep">step {shown + 1}/5</span>
        </div>

        <ol className="relative space-y-3" aria-hidden>
          <span className="absolute bottom-6 left-[1.4rem] top-6 w-0.5 rounded bg-plum/10" />
          <motion.span
            className="absolute bottom-6 left-[1.4rem] top-6 w-0.5 origin-top rounded bg-coral"
            initial={false}
            animate={{ scaleY: shown / (stages.length - 1) }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />
          {stages.map((s, i) => {
            const Icon = s.icon;
            const done = i < shown;
            const current = i === shown;
            return (
              <li key={s.label} className="relative flex items-center gap-4">
                <motion.span
                  animate={{ scale: current ? 1.08 : 1 }}
                  className={cn(
                    "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-colors duration-500",
                    current ? "bg-coral text-white shadow-lg shadow-coral/30" : done ? "bg-plum text-cream" : "bg-white text-mute ring-1 ring-line",
                  )}
                >
                  {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" strokeWidth={1.8} />}
                  {current && !reduce && <span className="absolute inset-0 animate-ping rounded-2xl bg-coral/40" />}
                </motion.span>
                <div className={cn("flex-1 rounded-2xl px-4 py-2.5 transition-all duration-500", current ? "bg-white soft-shadow" : "bg-transparent")}>
                  <p className={cn("text-sm font-bold transition-colors", current || done ? "text-plum" : "text-mute")}>{s.label}</p>
                  <p className="text-xs text-mute">{s.note}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </motion.div>

      {/* Floating cards */}
      <FloatCard className="-left-4 -top-8 sm:-left-14 [--r:-4deg]" delay={0.9}>
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-lavender to-blush font-display text-plum">C</span>
          <div>
            <p className="text-xs font-bold text-plum">Candidate profile</p>
            <p className="text-[0.7rem] text-mute">Sales Executive</p>
          </div>
          <span className="ml-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-700">Shortlisted</span>
        </div>
      </FloatCard>

      <FloatCard className="-right-3 top-24 hidden sm:block sm:-right-10 [--r:5deg]" floatDelay="-2s" delay={1.1}>
        <div className="flex items-center gap-2.5">
          <CalendarDays className="h-5 w-5 text-coral" />
          <div>
            <p className="text-xs font-bold text-plum">Interview scheduled</p>
            <p className="text-[0.7rem] text-mute">Round 2 · Thu, 11:00</p>
          </div>
        </div>
      </FloatCard>

      <FloatCard className="-bottom-6 -right-2 sm:-right-8 [--r:-3deg]" floatDelay="-4s" delay={1.3}>
        <div className="flex items-center gap-2.5">
          <FileText className="h-5 w-5 text-plum" />
          <div>
            <p className="text-xs font-bold text-plum">Offer letter</p>
            <p className="text-[0.7rem] text-mute">Ready to send</p>
          </div>
          <span className="ml-1 grid h-5 w-5 place-items-center rounded-full bg-coral text-white">
            <Check className="h-3 w-3" />
          </span>
        </div>
      </FloatCard>

      <FloatCard className="-bottom-10 -left-6 hidden sm:block sm:-left-12 [--r:4deg]" floatDelay="-5s" delay={1.5}>
        <p className="text-xs font-bold text-plum">Day-one checklist</p>
        <div className="mt-1.5 flex gap-1">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <span key={n} className={cn("h-1.5 w-5 rounded-full", n <= 4 ? "bg-coral" : "bg-plum/15")} />
          ))}
        </div>
        <p className="mt-1 text-[0.7rem] text-mute">4 of 6 done</p>
      </FloatCard>
    </div>
  );
}

function FloatCard({ children, className, delay, floatDelay }: { children: React.ReactNode; className?: string; delay: number; floatDelay?: string }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("absolute z-20", className)}
    >
      <div className="float-y rounded-2xl border border-white bg-white/85 p-3 soft-shadow backdrop-blur-md" style={{ animationDelay: floatDelay }}>{children}</div>
    </motion.div>
  );
}
