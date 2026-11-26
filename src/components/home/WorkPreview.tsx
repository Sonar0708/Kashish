import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SampleCard from "@/components/work/SampleCard";
import { samples } from "@/data/samples";

const featured = ["recruitment-pipeline-tracker", "onboarding-checklist", "hr-mis-dashboard"];

export default function WorkPreview() {
  const list = samples.filter((s) => featured.includes(s.slug));
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="work-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blush-soft/70 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="work-title"
            eyebrow="Work samples"
            title={
              <>
                See how I <em className="text-coral-deep">organise</em> HR work.
              </>
            }
            intro="Demonstration templates built with fictional data, showing the trackers, checklists and reports I use. No company or employee information is shown."
          />
          <Button href="/work" variant="secondary" className="shrink-0">
            All {samples.length} samples
          </Button>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {list.map((s, i) => (
            <SampleCard key={s.slug} sample={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
