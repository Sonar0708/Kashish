import type { Metadata } from "next";
import { Info } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/home/ContactCTA";
import { scopeNote, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Freelance HR Services",
  description:
    "Freelance HR support from Kashish Talreja: recruitment and talent acquisition, HR operations, employee engagement, HR documentation, HR analytics and HRMS process support.",
  alternates: { canonical: "./" },
};

const steps = [
  { title: "Share your need", text: "Tell me about the role, project or HR problem using the contact form or LinkedIn." },
  { title: "Quick conversation", text: "We agree the scope, timeline and what a good result looks like." },
  { title: "Clear proposal", text: "You get a short written summary of deliverables, timeline and fees before work starts." },
  { title: "Delivery & handover", text: "Regular updates while I work, and organised, editable files at the end." },
];

const engagement = [
  { title: "One-off task", text: "A job description, onboarding checklist, tracker or document set." },
  { title: "Recruitment assignment", text: "Support for one or more specific openings, from JD to joining." },
  { title: "Ongoing support", text: "Regular part-time HR help for a set number of hours or tasks each month." },
];

export default function ServicesPage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Freelance HR services"
        crumbs={[{ href: "/services", label: "Services" }]}
        title={
          <>
            HR help that <em className="text-coral-deep">fits</em> how your business works.
          </>
        }
        intro="Practical HR support for startups, small businesses and growing teams. Choose one area or combine several."
      >
        <Button href="/contact?type=freelance" variant="primary">
          Discuss your HR need
        </Button>
      </PageHero>

      <section className="pb-24" aria-label="Services">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} detailed />
            ))}
          </div>
          <Reveal className="mt-8 flex gap-3 rounded-3xl border border-line bg-white/50 p-5 text-sm text-mute">
            <Info className="h-5 w-5 shrink-0 text-plum" aria-hidden />
            <p>{scopeNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeading id="process-title" eyebrow="How we'd work together" title={<>Simple, clear and <em className="text-coral-deep">no surprises</em>.</>} />
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="relative rounded-[2rem] border border-white bg-white/70 p-7 soft-shadow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-plum font-display text-xl text-cream">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-plum">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24" aria-labelledby="formats-title">
        <div className="container-x">
          <SectionHeading id="formats-title" eyebrow="Ways to engage" title="Pick the format that suits you" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {engagement.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} className="rounded-[2rem] bg-gradient-to-br from-lavender-soft to-blush-soft p-8">
                <h3 className="font-display text-2xl text-plum">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
