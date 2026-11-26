import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Sample } from "@/data/samples";
import Reveal from "@/components/ui/Reveal";
import SampleThumb from "./SampleThumb";

export default function SampleCard({ sample, index }: { sample: Sample; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white bg-white/70 soft-shadow transition-all duration-500 hover:-translate-y-2 hover:lift-shadow">
        <div className="relative overflow-hidden bg-gradient-to-br from-lavender-soft via-cream to-blush-soft p-5">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-plum px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-cream">Demo template</span>
          <div className="transition-transform duration-700 group-hover:scale-[1.04]">
            <SampleThumb demo={sample.demo} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-coral-deep">{sample.category}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-plum">
            <Link href={`/work/${sample.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {sample.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{sample.summary}</p>
          <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-plum group-hover:text-coral-deep">
            View sample <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
