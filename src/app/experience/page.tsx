import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/experience/Timeline";
import Button from "@/components/ui/Button";
import ContactCTA from "@/components/home/ContactCTA";
import { LinkedInIcon } from "@/components/ui/Icons";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Kashish Talreja's HR experience at Popaya® Technologies, Trade Facilities Management (Kamala Group), Jeevandeep Edumedia and GRT Global Logistics: recruitment, HR operations, HRMS and engagement.",
  alternates: { canonical: "./" },
};

export default function ExperiencePage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Professional experience"
        crumbs={[{ href: "/experience", label: "Experience" }]}
        title={
          <>
            Where I&apos;ve <em className="text-coral-deep">grown</em> as an HR professional.
          </>
        }
        intro="Four organisations, from an HR internship to my current role as HR Executive. Open any role to see the details."
      >
        <Button href={site.linkedin} variant="secondary" icon={<LinkedInIcon />}>
          Verify on LinkedIn
        </Button>
      </PageHero>
      <section className="pb-24" aria-label="Experience timeline">
        <div className="container-x max-w-5xl">
          <Timeline />
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
