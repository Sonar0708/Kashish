"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import StatusPill from "@/components/ui/StatusPill";
import { Sparkle, Squiggle } from "@/components/ui/Doodles";
import { availability } from "@/config/availability";
import RecruitmentJourney from "./RecruitmentJourney";

const ease = [0.16, 1, 0.3, 1] as const;

function Words({ text, start = 0, className }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${className ?? ""}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: start + i * 0.07, ease }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-32" aria-labelledby="hero-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -right-32 -top-20 h-[34rem] w-[34rem] rounded-full bg-lavender/70 blur-3xl" />
        <div className="blob absolute -left-40 top-40 h-[28rem] w-[28rem] rounded-full bg-blush/80 blur-3xl [animation-delay:-7s]" />
        <div className="blob absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-coral/20 blur-3xl [animation-delay:-12s]" />
        <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7 flex flex-wrap items-center gap-3">
            <StatusPill status="selective" label={availability.badge} />
            <span className="inline-flex items-center gap-1.5 text-sm text-mute">
              <MapPin className="h-4 w-4 text-coral" aria-hidden /> {availability.base}
            </span>
          </motion.div>

          <h1 id="hero-title" className="display text-[3.1rem] text-plum sm:text-7xl xl:text-[6.2rem]">
            <Words text="People Make Businesses." start={0.1} />
            <br />
            <span className="relative inline-block">
              <Words text="Great HR" start={0.35} className="italic text-coral-deep" />
              <Squiggle delay={1.1} className="-bottom-1" />
            </span>{" "}
            <Words text="Makes Them Better." start={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl"
          >
            I&apos;m <strong className="font-semibold text-plum">Kashish Talreja</strong> — an HR professional passionate about talent acquisition, people operations and creating better workplace experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact?type=freelance" variant="primary">
              Hire Me for HR Support
            </Button>
            <Button href="/experience" variant="secondary">
              Explore My Experience
            </Button>
            <Button href="/opportunities" variant="ghost" className="ml-1 font-semibold">
              Let&apos;s Talk Opportunities
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex items-center gap-2 font-hand text-2xl text-plum-soft"
          >
            <Sparkle className="h-4 w-4 text-coral" /> Building better workplaces, one great hire at a time.
          </motion.p>
        </div>

        <RecruitmentJourney />
      </div>

      <Link
        href="#intro"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mute hover:text-plum lg:flex"
      >
        Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden />
      </Link>
    </section>
  );
}
