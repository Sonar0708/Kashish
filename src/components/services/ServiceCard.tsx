"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon, tintBg } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/** Interactive service card: lifts, tilts its icon and reveals more detail on hover/focus. */
export default function ServiceCard({ service, index, detailed = false }: { service: Service; index: number; detailed?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow backdrop-blur transition-shadow duration-500 hover:lift-shadow sm:p-8"
    >
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-lavender to-blush opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative flex items-start justify-between">
        <span className={cn("grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110", tintBg[service.tint])}>
          <ServiceIcon icon={service.icon} />
        </span>
        <span className="font-display text-sm text-mute">0{index + 1}</span>
      </div>
      <h3 className="relative mt-6 font-display text-2xl leading-tight text-plum">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
          {service.title}
        </Link>
      </h3>
      <p className="relative mt-3 leading-relaxed text-mute">{service.tagline}</p>
      {detailed && (
        <ul className="relative mt-5 space-y-1.5 text-sm text-ink/80">
          {service.includes.slice(0, 4).map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
              {i}
            </li>
          ))}
          {service.includes.length > 4 && <li className="pl-3.5 text-mute">+ {service.includes.length - 4} more</li>}
        </ul>
      )}
      <span className="relative mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-plum transition-colors group-hover:text-coral-deep">
        View service
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
      <span aria-hidden className="absolute inset-x-8 bottom-0 h-1 origin-left scale-x-0 rounded-t-full bg-coral transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}
