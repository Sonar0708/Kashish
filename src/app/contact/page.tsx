import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import StatusPill from "@/components/ui/StatusPill";
import ContactForm from "@/components/contact/ContactForm";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappUrl } from "@/config/site";
import { availability } from "@/config/availability";

export const metadata: Metadata = {
  title: "Contact / Hire Kashish",
  description: "Contact Kashish Talreja for freelance HR support, recruitment assignments or HR job opportunities.",
  alternates: { canonical: "./" },
};

export default function ContactPage() {
  return (
    <div className="page-wash">
      <PageHero
        eyebrow="Contact / Hire Kashish"
        crumbs={[{ href: "/contact", label: "Contact" }]}
        title={
          <>
            Let&apos;s build a <em className="text-coral-deep">better workplace</em> together.
          </>
        }
        intro="Tell me about your HR requirement, recruitment project or job opportunity. I'll reply with what I can realistically help with."
      />
      <section className="pb-24" aria-label="Contact">
        <div className="container-x grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white bg-white/70 p-6 lift-shadow backdrop-blur sm:p-10">
            <div aria-hidden className="blob pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lavender/50 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl text-plum">Send an enquiry</h2>
              <p className="mt-1 mb-8 text-sm text-mute">Fields marked * are required.</p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.1} className="rounded-[2rem] bg-plum p-8 text-cream lift-shadow">
              <StatusPill status="selective" label={availability.badge} className="bg-white" />
              <p className="mt-4 text-sm leading-relaxed text-cream/80">{availability.summary}</p>
              <Link href="/opportunities" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-white">
                What I&apos;m open to <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>

            <Reveal delay={0.15} className="rounded-[2rem] border border-white bg-white/70 p-8 soft-shadow">
              <h2 className="font-display text-2xl text-plum">Other ways to reach me</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl bg-[#0a66c2] p-4 text-white transition-opacity hover:opacity-90">
                    <LinkedInIcon className="h-6 w-6" />
                    <span className="flex-1">
                      <span className="block font-semibold">Connect on LinkedIn</span>
                      <span className="block text-xs text-white/80">Fastest way to reach me</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </li>
                <ContactRow icon={<Mail className="h-5 w-5" aria-hidden />} label="Email" value={site.email} href={site.email ? `mailto:${site.email}` : ""} />
                <ContactRow icon={<WhatsAppIcon className="h-5 w-5" />} label="WhatsApp" value={site.whatsapp ? "Chat on WhatsApp" : ""} href={whatsappUrl} />
                <li className="flex items-center gap-4 rounded-2xl bg-cream p-4">
                  <MapPin className="h-5 w-5 text-coral" aria-hidden />
                  <span>
                    <span className="block text-xs font-semibold text-mute">Based in</span>
                    <span className="block font-semibold text-plum">{site.location}</span>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  const inner = (
    <>
      <span className="text-plum">{icon}</span>
      <span>
        <span className="block text-xs font-semibold text-mute">{label}</span>
        <span className="block font-semibold text-plum">{value || "Shared on request via LinkedIn"}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-cream p-4 hover:bg-cream-deep">
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-2xl bg-cream p-4">{inner}</div>
      )}
    </li>
  );
}
