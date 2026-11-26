import { availability } from "@/config/availability";
import { site } from "@/config/site";
import Button from "@/components/ui/Button";
import StatusPill from "@/components/ui/StatusPill";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Sparkle } from "@/components/ui/Doodles";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="cta-title">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum via-plum-soft to-coral-deep p-10 text-cream lift-shadow sm:p-16">
          <div aria-hidden className="blob pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-coral/40 blur-3xl" />
          <div aria-hidden className="blob pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-lavender/30 blur-3xl [animation-delay:-8s]" />
          <Sparkle className="float-y absolute right-10 top-10 h-8 w-8 text-blush" />
          <div className="relative max-w-3xl">
            <StatusPill status="selective" label={availability.badge} className="bg-white/90" />
            <h2 id="cta-title" className="display mt-6 text-4xl sm:text-6xl">
              Have an HR requirement or an opportunity? <em className="text-blush">Let&apos;s connect.</em>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-cream/80">Tell me about the role, the project or the HR problem you&apos;re facing. I&apos;ll reply with what I can realistically help with.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" variant="light">
                Start a conversation
              </Button>
              <Button href={site.linkedin} variant="secondary" className="border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-plum" icon={<LinkedInIcon />}>
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
