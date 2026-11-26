"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Hand-drawn underline that draws itself in. Place inside a relatively positioned inline element. */
export function Squiggle({ className, delay = 0.6 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" className={cn("pointer-events-none absolute -bottom-2 left-0 h-[0.35em] w-full text-coral", className)} aria-hidden>
      <motion.path
        d="M3 15C40 6 78 6 112 13s66 9 100 1 60-9 85-2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

/** Hand-drawn circle scribble around a word. */
export function Scribble({ className, delay = 0.8 }: { className?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 220 90" fill="none" preserveAspectRatio="none" className={cn("pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)] text-coral", className)} aria-hidden>
      <motion.path
        d="M118 8C64 4 14 18 8 44c-6 28 52 40 108 38 54-2 98-14 96-40-2-24-52-36-110-32-30 2-50 8-62 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

export function CurlyArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={cn("h-16 w-24", className)} aria-hidden>
      <motion.path
        d="M6 10c30-6 56 6 52 26-3 16-24 14-20-2 5-18 40-22 70 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <path d="M100 32l10 12-15 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
