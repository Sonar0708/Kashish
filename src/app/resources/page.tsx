import type { Metadata } from "next";
import { Download, FileSpreadsheet, FileText, Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/home/ContactCTA";
import { resources } from "@/data/resources";
import { asset } from "@/config/site";

export const metadata: Metadata = {
  title: "Resources & HR Templates",
  description: "Free, editable HR templates from Kashish Talreja: recruitment tracker, screening matrix, interview form, JD template, onboarding checklist, attendance tracker and more.",
  alternates: { canonical: "./" },
};

const categories = ["Recruitment", "HR Operations", "Documentation", "Engagement"] as const;

export default function ResourcesPage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Resources & HR templates"
        crumbs={[{ href: "/resources", label: "Resources" }]}
        title={
          <>
            Free HR templates to <em className="text-coral-deep">get you started</em>.
          </>
        }
        intro="Simple, editable starting points. CSV files open in Excel or Google Sheets; TXT files open in any editor or Word."
      />
      <section className="pb-24" aria-label="Templates">
        <div className="container-x space-y-14">
          {categories.map((cat) => {
            const list = resources.filter((r) => r.category === cat);
            if (!list.length) return null;
            return (
              <div key={cat}>
                <h2 className="display text-3xl text-plum sm:text-4xl">{cat}</h2>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((r, i) => {
                    const Icon = r.format === "CSV" ? FileSpreadsheet : FileText;
                    return (
                      <Reveal as="li" key={r.id} delay={i * 0.06} className="group flex flex-col rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow transition-all duration-500 hover:-translate-y-1.5 hover:lift-shadow">
                        <div className="flex items-center justify-between">
                          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lavender/60 text-plum transition-transform group-hover:-rotate-6">
                            <Icon className="h-6 w-6" aria-hidden strokeWidth={1.6} />
                          </span>
                          <span className="rounded-full bg-cream-deep px-3 py-1 text-xs font-bold text-mute">{r.format}</span>
                        </div>
                        <h3 className="mt-5 font-display text-2xl text-plum">{r.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mute">{r.description}</p>
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {r.includes.map((x) => (
                            <li key={x} className="rounded-full bg-blush-soft px-2.5 py-1 text-xs text-plum">
                              {x}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={asset(r.file)}
                          download
                          className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-full bg-plum px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-coral"
                          style={{ marginTop: "1.5rem" }}
                        >
                          <Download className="h-4 w-4" aria-hidden /> Download {r.format}
                          <span className="sr-only">: {r.title}</span>
                        </a>
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <p className="flex gap-3 rounded-3xl border border-line bg-white/50 p-5 text-sm text-mute">
            <Info className="h-5 w-5 shrink-0 text-plum" aria-hidden />
            These templates are general starting points. Adapt them to your company policy, and have legal or statutory wording reviewed by a qualified advisor.
          </p>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
