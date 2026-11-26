import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import DemoView from "@/components/work/DemoView";
import SampleCard from "@/components/work/SampleCard";
import ContactCTA from "@/components/home/ContactCTA";
import { getSample, samples } from "@/data/samples";
import { getService } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return samples.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSample(slug);
  if (!s) return {};
  return { title: `${s.title} (Demo Template)`, description: s.summary, alternates: { canonical: "./" } };
}

export default async function SamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSample(slug);
  if (!s) notFound();
  const service = getService(s.service);
  const others = samples.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <div className="page-wash">
      <PageHero
        eyebrow={`${s.category} · Demo template`}
        crumbs={[
          { href: "/work", label: "Work Samples" },
          { href: `/work/${s.slug}`, label: s.title },
        ]}
        title={s.title}
        intro={s.summary}
      />
      <section className="pb-16" aria-label="Sample">
        <div className="container-x">
          <Reveal className="mb-6 flex gap-3 rounded-3xl border border-lavender bg-lavender-soft p-4 text-sm text-plum">
            <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden />
            Demonstration template with fictional data. Not taken from any employer.
          </Reveal>
          <Reveal className="rounded-[2rem] border border-white bg-white/80 p-5 lift-shadow sm:p-8">
            <DemoView demo={s.demo} />
          </Reveal>
        </div>
      </section>
      <section className="py-16" aria-label="About this sample">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] bg-plum p-8 text-cream sm:p-10">
            <h2 className="font-display text-3xl">What it&apos;s for</h2>
            <p className="mt-3 text-lg text-cream/80">{s.purpose}</p>
            <ul className="mt-6 space-y-3">
              {s.helps.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          {service && (
            <Reveal delay={0.1} className="flex flex-col rounded-[2rem] bg-gradient-to-br from-lavender-soft to-blush-soft p-8 sm:p-10">
              <p className="eyebrow">Related service</p>
              <h2 className="mt-3 font-display text-3xl text-plum">{service.title}</h2>
              <p className="mt-3 text-mute">{service.tagline}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Button href={`/services/${service.slug}`} variant="primary">
                  View service
                </Button>
                <Button href={`/contact?service=${service.slug}`} variant="secondary">
                  Request this
                </Button>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <section className="py-16" aria-labelledby="more-title">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <h2 id="more-title" className="display text-4xl text-plum">
              More samples
            </h2>
            <Link href="/work" className="inline-flex items-center gap-1.5 font-semibold text-plum hover:text-coral-deep">
              All samples <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((x, i) => (
              <SampleCard key={x.slug} sample={x} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
