import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="services-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-lavender-soft/60 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Freelance HR services"
            title={
              <>
                Hands-on HR support, <em className="text-coral-deep">exactly</em> where you need it.
              </>
            }
            intro="Pick one area or combine a few. Every service is grounded in work I've done in real HR roles."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            All services
          </Button>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
