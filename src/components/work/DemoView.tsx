import type { Demo } from "@/data/samples";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/** Full-size, accessible rendering of a demonstration sample. */
export default function DemoView({ demo }: { demo: Demo }) {
  switch (demo.kind) {
    case "pipeline":
      return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {demo.stages.map((s, i) => (
            <section key={s.name} aria-label={s.name} className={cn("rounded-3xl p-4", i === 4 ? "bg-plum text-cream" : "bg-cream")}>
              <h3 className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                {s.name}
                <span className={cn("rounded-full px-2 py-0.5", i === 4 ? "bg-coral text-white" : "bg-white text-plum")}>{s.items.length}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((it) => (
                  <li key={it.id} className={cn("rounded-2xl p-3 text-sm", i === 4 ? "bg-white/10" : "bg-white soft-shadow")}>
                    <p className="font-bold">{it.id}</p>
                    <p className={i === 4 ? "text-cream/80" : "text-ink/80"}>{it.role}</p>
                    <p className={cn("mt-1 text-xs", i === 4 ? "text-cream/60" : "text-mute")}>{it.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-line" data-lenis-prevent>
          <table className="w-full min-w-[44rem] text-left text-sm">
            <caption className="caption-bottom p-3 text-left text-xs text-mute">{demo.caption}</caption>
            <thead className="bg-plum text-cream">
              <tr>
                {demo.columns.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {demo.rows.map((r, i) => (
                <tr key={i} className={i % 2 ? "bg-cream" : "bg-white"}>
                  {r.map((c, j) => (
                    <td key={j} className={cn("px-4 py-3", j === 0 && "font-semibold text-plum", j === r.length - 1 && "font-semibold text-coral-deep")}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "form":
      return (
        <div className="space-y-6">
          <p className="flex flex-wrap gap-2 text-xs font-semibold text-mute">
            {demo.scale.map((s) => (
              <span key={s} className="rounded-full bg-cream px-3 py-1">
                {s}
              </span>
            ))}
          </p>
          {demo.sections.map((s) => (
            <section key={s.title} className="rounded-3xl bg-cream p-5">
              <h3 className="font-display text-xl text-plum">{s.title}</h3>
              <ul className="mt-3 divide-y divide-line">
                {s.items.map((it) => (
                  <li key={it} className="flex flex-wrap items-center justify-between gap-3 py-3 text-sm">
                    <span className="text-ink/85">{it}</span>
                    <span className="flex gap-1.5" aria-hidden>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span key={n} className="grid h-7 w-7 place-items-center rounded-full border border-line bg-white text-xs text-mute">
                          {n}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    case "checklist":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {demo.phases.map((p) => (
            <section key={p.title} className="rounded-3xl bg-cream p-5">
              <h3 className="font-display text-xl text-plum">{p.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-ink/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-coral/60 bg-white">
                      <Check className="h-3 w-3 text-coral" aria-hidden />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    case "documents":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {demo.docs.map((d, i) => (
            <section key={d.title} className="rounded-3xl border border-line bg-white p-6 soft-shadow">
              <p className="text-xs font-bold uppercase tracking-wider text-coral-deep">Document {i + 1}</p>
              <h3 className="mt-1 font-display text-xl text-plum">{d.title}</h3>
              <ol className="mt-4 space-y-2 text-sm text-ink/85">
                {d.sections.map((s, j) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-display text-coral">{j + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      );
    case "calendar":
      return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {demo.months.map((m, i) => (
            <section key={m.month} className={cn("rounded-3xl p-4", i % 3 === 0 ? "bg-blush-soft" : i % 3 === 1 ? "bg-lavender-soft" : "bg-cream")}>
              <h3 className="font-display text-2xl text-plum">{m.month}</h3>
              <ul className="mt-2 space-y-1 text-sm text-ink/85">
                {m.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
    case "dashboard": {
      const maxBar = Math.max(...demo.bars.map((b) => b.value));
      return (
        <div className="space-y-5">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {demo.kpis.map((k) => (
              <div key={k.label} className="rounded-3xl bg-cream p-5">
                <dt className="text-xs font-semibold text-mute">{k.label}</dt>
                <dd className="display mt-1 text-4xl text-plum">{k.value}</dd>
              </div>
            ))}
          </dl>
          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-3xl bg-cream p-5">
              <h3 className="font-display text-xl text-plum">Hiring funnel (sample month)</h3>
              <ul className="mt-4 space-y-2">
                {demo.funnel.map((f) => (
                  <li key={f.stage} className="flex items-center gap-3 text-sm">
                    <span className="w-24 shrink-0 text-ink/80">{f.stage}</span>
                    <span className="h-7 rounded-full bg-gradient-to-r from-plum to-coral" style={{ width: `${Math.max(6, (f.count / demo.funnel[0].count) * 100)}%` }} />
                    <span className="font-semibold text-plum">{f.count}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-3xl bg-cream p-5">
              <h3 className="font-display text-xl text-plum">{demo.barsTitle}</h3>
              <ul className="mt-4 space-y-2">
                {demo.bars.map((b) => (
                  <li key={b.label} className="flex items-center gap-3 text-sm">
                    <span className="w-28 shrink-0 text-ink/80">{b.label}</span>
                    <span className="h-7 rounded-full bg-lavender" style={{ width: `${(b.value / maxBar) * 70}%` }} />
                    <span className="font-semibold text-plum">{b.value}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      );
    }
    case "workflow":
      return (
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demo.steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl bg-cream p-6">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-plum font-display text-cream">{i + 1}</span>
              <h3 className="mt-4 font-display text-xl text-plum">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mute">{s.text}</p>
              <p className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-coral-deep">Owner: {s.owner}</p>
            </li>
          ))}
        </ol>
      );
  }
}
