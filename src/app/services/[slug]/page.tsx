import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Download, Info, X } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SampleCard from "@/components/work/SampleCard";
import ContactCTA from "@/components/home/ContactCTA";
import { ServiceIcon, tintBg } from "@/components/ui/Icons";
import { getService, scopeNote, services } from "@/data/services";
import { samples } from "@/data/samples";
import { resources } from "@/data/resources";
import { asset } from "@/config/site";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} Services`,
    description: `${s.summary} Freelance HR support by Kashish Talreja.`,
    alternates: { canonical: "./" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const idx = services.findIndex((x) => x.slug === s.slug);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = samples.filter((x) => s.samples.includes(x.slug));
  const files = resources.filter((r) => s.resources.includes(r.id));

  return (
    <div className="page-wash">
      <PageHero
        eyebrow={`Service 0${idx + 1}`}
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${s.slug}`, label: s.title },
        ]}
        title={s.title}
        intro={s.summary}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href={`/contact?service=${s.slug}`} variant="coral">
            Request this service
          </Button>
          <span className={cn("grid h-14 w-14 place-items-center rounded-2xl", tintBg[s.tint])}>
            <ServiceIcon icon={s.icon} />
          </span>
          <p className="font-hand text-2xl text-plum-soft">{s.tagline}</p>
        </div>
      </PageHero>

      <section className="pb-24" aria-label="Problems and deliverables">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-white bg-white/70 p-8 soft-shadow sm:p-10">
            <h2 className="font-display text-3xl text-plum">Sound familiar?</h2>
            <ul className="mt-6 space-y-4">
              {s.problems.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-ink/85">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blush text-coral-deep">
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] bg-plum p-8 text-cream lift-shadow sm:p-10">
            <h2 className="font-display text-3xl">What&apos;s included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.includes.map((p) => (
                <li key={p} className="flex gap-3 leading-snug">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="approach-title">
        <div className="container-x">
          <SectionHeading id="approach-title" eyebrow="My approach" title={<>How I&apos;d handle it, <em className="text-coral-deep">step by step</em>.</>} />
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {s.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.07} className="group relative rounded-[1.75rem] border border-white bg-white/70 p-6 soft-shadow transition-transform duration-500 hover:-translate-y-1.5">
                <span className="font-display text-5xl italic text-coral/80 transition-colors group-hover:text-coral">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-plum">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{a.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24" aria-labelledby="evidence-title">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              id="evidence-title"
              eyebrow="Backed by experience"
              title={s.experienceTitle ?? "Where I've done this before"}
              intro={s.experienceIntro ?? "Taken directly from my roles. See the full timeline for details."}
            />
            <Reveal delay={0.1} className="mt-8">
              <p className="text-sm font-semibold text-plum">Good fit for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.goodFor.map((g) => (
                  <li key={g} className="rounded-full bg-lavender-soft px-4 py-2 text-sm font-medium text-plum">
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ul className="space-y-3">
            {s.experience.map((e, i) => (
              <Reveal as="li" key={e.org} delay={i * 0.06} className="rounded-3xl border border-white bg-white/70 p-6 soft-shadow">
                <p className="text-xs font-bold uppercase tracking-wider text-coral-deep">{e.org}</p>
                <p className="mt-2 leading-relaxed text-ink/85">{e.point}</p>
              </Reveal>
            ))}
            <li>
              <Link href="/experience" className="inline-flex items-center gap-1.5 px-2 pt-2 font-semibold text-plum hover:text-coral-deep">
                Full experience timeline <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24" aria-labelledby="samples-title">
          <div className="container-x">
            <SectionHeading id="samples-title" eyebrow="Related work samples" title="See it in practice" intro="Demonstration templates with fictional data." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {related.map((x, i) => (
                <SampleCard key={x.slug} sample={x} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {files.length > 0 && (
        <section className="py-12" aria-labelledby="files-title">
          <div className="container-x">
            <Reveal className="rounded-[2rem] bg-gradient-to-br from-lavender-soft to-blush-soft p-8 sm:p-10">
              <h2 id="files-title" className="font-display text-3xl text-plum">
                Free templates for this area
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {files.map((f) => (
                  <li key={f.id}>
                    <a href={asset(f.file)} download className="group flex items-center justify-between gap-3 rounded-2xl bg-white/80 px-5 py-4 font-semibold text-plum transition-colors hover:bg-white">
                      <span>
                        {f.title}
                        <span className="block text-xs font-medium text-mute">{f.format}</span>
                      </span>
                      <Download className="h-4 w-4 shrink-0 text-coral transition-transform group-hover:translate-y-0.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-12" aria-label="Scope and other services">
        <div className="container-x">
          <p className="flex gap-3 rounded-3xl border border-line bg-white/50 p-5 text-sm text-mute">
            <Info className="h-5 w-5 shrink-0 text-plum" aria-hidden />
            {scopeNote}
          </p>
          <nav aria-label="Other services" className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href={`/services/${prev.slug}`} className="group rounded-3xl border border-white bg-white/70 p-6 soft-shadow transition-colors hover:bg-white">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-mute">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden /> Previous service
              </span>
              <span className="mt-2 block font-display text-xl text-plum">{prev.title}</span>
            </Link>
            <Link href={`/services/${next.slug}`} className="group rounded-3xl border border-white bg-white/70 p-6 text-right soft-shadow transition-colors hover:bg-white">
              <span className="flex items-center justify-end gap-1.5 text-xs font-bold uppercase tracking-wider text-mute">
                Next service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="mt-2 block font-display text-xl text-plum">{next.title}</span>
            </Link>
          </nav>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
