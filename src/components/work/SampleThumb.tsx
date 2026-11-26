import type { Demo } from "@/data/samples";
import { cn } from "@/lib/utils";

/** Small decorative preview of a sample (the full version is on the sample page). */
export default function SampleThumb({ demo }: { demo: Demo }) {
  return (
    <div aria-hidden className="mt-6 h-40 overflow-hidden rounded-2xl border border-white bg-white/80 p-3 soft-shadow">
      {demo.kind === "pipeline" && (
        <div className="grid h-full grid-cols-5 gap-1.5">
          {demo.stages.map((s, i) => (
            <div key={s.name} className="rounded-lg bg-cream p-1">
              <p className="truncate text-[0.5rem] font-bold uppercase text-plum">{s.name}</p>
              {s.items.map((it) => (
                <div key={it.id} className={cn("mt-1 h-4 rounded", i === 4 ? "bg-plum" : i === 3 ? "bg-coral/40" : "bg-lavender/70")} />
              ))}
            </div>
          ))}
        </div>
      )}
      {demo.kind === "table" && (
        <div className="space-y-1.5">
          <div className="h-4 rounded bg-plum" />
          {demo.rows.map((r, i) => (
            <div key={i} className="grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, j) => (
                <div key={j} className={cn("h-4 rounded", j === 5 ? (i % 2 ? "bg-blush" : "bg-coral/40") : "bg-cream-deep")} />
              ))}
            </div>
          ))}
        </div>
      )}
      {demo.kind === "form" && (
        <div className="space-y-2">
          {demo.sections.map((s) => (
            <div key={s.title}>
              <div className="h-2.5 w-20 rounded bg-plum/70" />
              <div className="mt-1.5 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className={cn("h-5 w-5 rounded-full border", n === 4 ? "border-coral bg-coral" : "border-line")} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {demo.kind === "checklist" && (
        <div className="grid h-full grid-cols-2 gap-2">
          {demo.phases.map((p, pi) => (
            <div key={p.title} className="space-y-1">
              <div className="h-2.5 w-16 rounded bg-plum/70" />
              {p.items.slice(0, 2).map((it, i) => (
                <div key={it} className="flex items-center gap-1">
                  <span className={cn("h-3 w-3 rounded", pi + i < 3 ? "bg-coral" : "border border-line")} />
                  <span className="h-2 flex-1 rounded bg-cream-deep" />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {demo.kind === "documents" && (
        <div className="relative h-full">
          {demo.docs.map((d, i) => (
            <div key={d.title} className="absolute top-0 h-full w-[55%] rounded-xl border border-line bg-white p-2 soft-shadow" style={{ left: `${i * 22}%`, transform: `rotate(${(i - 1) * 4}deg)` }}>
              <div className="h-2.5 w-2/3 rounded bg-plum/70" />
              {d.sections.slice(0, 5).map((s) => (
                <div key={s} className="mt-1.5 h-1.5 rounded bg-cream-deep" />
              ))}
            </div>
          ))}
        </div>
      )}
      {demo.kind === "calendar" && (
        <div className="grid h-full grid-cols-4 gap-1">
          {demo.months.map((m, i) => (
            <div key={m.month} className={cn("rounded-md p-1", i % 3 === 0 ? "bg-blush" : i % 3 === 1 ? "bg-lavender/60" : "bg-cream")}>
              <p className="text-[0.5rem] font-bold text-plum">{m.month}</p>
            </div>
          ))}
        </div>
      )}
      {demo.kind === "dashboard" && (
        <div className="grid h-full grid-cols-[1fr_1.3fr] gap-2">
          <div className="grid grid-cols-2 gap-1">
            {demo.kpis.map((k) => (
              <div key={k.label} className="rounded-lg bg-cream p-1.5">
                <p className="font-display text-base text-plum">{k.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 rounded-lg bg-cream p-2">
            {demo.funnel.map((f, i) => (
              <div key={f.stage} className={cn("flex-1 rounded-t", i === 4 ? "bg-coral" : "bg-plum/70")} style={{ height: `${Math.max(12, (f.count / demo.funnel[0].count) * 100)}%` }} />
            ))}
          </div>
        </div>
      )}
      {demo.kind === "workflow" && (
        <div className="flex h-full flex-wrap content-center items-center gap-1.5">
          {demo.steps.map((s, i) => (
            <div key={s.title} className="flex items-center gap-1.5">
              <span className={cn("rounded-lg px-2 py-1.5 text-[0.55rem] font-bold", i % 2 ? "bg-lavender/70 text-plum" : "bg-plum text-cream")}>{s.title}</span>
              {i < demo.steps.length - 1 && <span className="h-px w-2 bg-coral" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
