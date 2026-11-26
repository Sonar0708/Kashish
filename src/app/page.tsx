import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import ServicesPreview from "@/components/home/ServicesPreview";
import HiringPipeline from "@/components/home/HiringPipeline";
import Lifecycle from "@/components/home/Lifecycle";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import WorkPreview from "@/components/home/WorkPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="page-wash">
      <Hero />
      <Intro />
      <ServicesPreview />
      <HiringPipeline />
      <Lifecycle />
      <ExperiencePreview />
      <WorkPreview />
      <ContactCTA />
    </div>
  );
}
