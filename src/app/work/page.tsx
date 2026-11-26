import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SampleCard from "@/components/work/SampleCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/home/ContactCTA";
import { samples } from "@/data/samples";

export const metadata: Metadata = {
  title: "Portfolio & Work Samples",
  description: "Demonstration HR templates by Kashish Talreja: recruitment tracker, screening matrix, onboarding checklist, engagement calendar, HR MIS dashboard and HRMS workflow.",
  alternates: { canonical: "./" },
};

export default function WorkPage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Portfolio & work samples"
        crumbs={[{ href: "/work", label: "Work Samples" }]}
        title={
          <>
            How I <em className="text-coral-deep">organise</em> HR work.
          </>
        }
        intro="Trackers, forms, checklists and reports showing the structure I bring to recruitment, HR operations, engagement and reporting."
      >
        <Button href="/resources" variant="secondary">
          Download free templates
        </Button>
      </PageHero>
      <section className="pb-24" aria-label="Work samples">
        <div className="container-x">
          <Reveal className="mb-10 flex gap-3 rounded-3xl border border-lavender bg-lavender-soft p-5 text-sm text-plum">
            <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden />
            <p>
              <strong>All samples are demonstration templates.</strong> They use fictional IDs and numbers and contain no company, candidate or employee information from any employer.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {samples.map((s, i) => (
              <SampleCard key={s.slug} sample={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
