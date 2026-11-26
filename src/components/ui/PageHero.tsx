"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Sparkle } from "./Doodles";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: { href: string; label: string }[];
  children?: React.ReactNode;
};

/** Shared hero for inner pages: breadcrumb, editorial title, soft floating blobs. */
export default function PageHero({ eyebrow, title, intro, crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lavender/60 blur-3xl" />
        <div className="blob absolute -left-32 top-32 h-80 w-80 rounded-full bg-blush/70 blur-3xl [animation-delay:-6s]" />
        <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>
      <div className="container-x">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-mute">
              <li>
                <Link href="/" className="hover:text-plum">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-plum">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-plum">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow mb-5">
          <Sparkle className="h-3.5 w-3.5 text-coral" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="display max-w-5xl text-[2.9rem] text-plum sm:text-7xl lg:text-[5.5rem]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-9">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
