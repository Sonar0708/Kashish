"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, Send, TriangleAlert } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { LinkedInIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export const opportunityTypes = [
  "Freelance HR Support",
  "Recruitment Assignment",
  "Part-time Role",
  "Full-time Role",
  "Remote Opportunity",
  "Contract Role",
  "Other Collaboration",
];

const budgets = ["Prefer to discuss", "Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹1,50,000", "Above ₹1,50,000", "Salaried role (not applicable)"];
const timelines = ["As soon as possible", "Within 2 weeks", "Within a month", "1–3 months", "Flexible / exploring"];

type Fields = {
  name: string;
  company: string;
  email: string;
  country: string;
  type: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
  message: string;
};

const empty: Fields = { name: "", company: "", email: "", country: "India", type: "", service: "", description: "", budget: "", timeline: "", message: "" };

/**
 * No backend is configured (static GitHub Pages site), so submitting builds an email.
 * If site.email is set, the visitor's email app opens with everything pre-filled.
 * If not, the message is shown for copying and sending via LinkedIn. We never show a fake "sent" message.
 */
export default function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [result, setResult] = useState<null | "mail" | "copy">(null);
  const [copied, setCopied] = useState(false);

  // Pre-select options from links like /contact?type=Full-time%20Role or ?service=hr-operations
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const type = p.get("type");
    const svc = p.get("service");
    const t = window.setTimeout(() => {
      setF((prev) => ({
        ...prev,
        type: type === "freelance" ? "Freelance HR Support" : type && opportunityTypes.includes(type) ? type : prev.type,
        service: svc ? (services.find((s) => s.slug === svc)?.title ?? prev.service) : prev.service,
      }));
      if (svc && !type) setF((prev) => ({ ...prev, type: prev.type || "Freelance HR Support" }));
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!f.name.trim()) e.name = "Please enter your name.";
    if (!f.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
    if (!f.type) e.type = "Please choose an opportunity type.";
    if (!f.message.trim()) e.message = "Please add a short message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const subject = `${f.type || "Enquiry"} – ${f.name}${f.company ? ` (${f.company})` : ""}`;
  const body = [
    `Name: ${f.name}`,
    `Company / Organisation: ${f.company || "-"}`,
    `Email: ${f.email}`,
    `Country: ${f.country || "-"}`,
    `Opportunity type: ${f.type}`,
    `HR service required: ${f.service || "-"}`,
    `Budget range: ${f.budget || "-"}`,
    `Expected timeline: ${f.timeline || "-"}`,
    "",
    "Project / job description:",
    f.description || "-",
    "",
    "Message:",
    f.message,
  ].join("\n");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setResult("mail");
    } else {
      setResult("copy");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={errors.name} id="name">
          <input id="name" autoComplete="name" value={f.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={input(errors.name)} />
        </Field>
        <Field label="Company / Organisation" id="company">
          <input id="company" autoComplete="organization" value={f.company} onChange={set("company")} className={input()} />
        </Field>
        <Field label="Email" required error={errors.email} id="email">
          <input id="email" type="email" autoComplete="email" value={f.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={input(errors.email)} />
        </Field>
        <Field label="Country" id="country">
          <input id="country" autoComplete="country-name" value={f.country} onChange={set("country")} className={input()} />
        </Field>
        <Field label="Opportunity type" required error={errors.type} id="type">
          <select id="type" value={f.type} onChange={set("type")} aria-invalid={!!errors.type} aria-describedby={errors.type ? "type-err" : undefined} className={input(errors.type)}>
            <option value="">Select one…</option>
            {opportunityTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="HR service required" id="service">
          <select id="service" value={f.service} onChange={set("service")} className={input()}>
            <option value="">Not sure yet / not applicable</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget range (optional)" id="budget">
          <select id="budget" value={f.budget} onChange={set("budget")} className={input()}>
            <option value="">Select…</option>
            {budgets.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Expected timeline" id="timeline">
          <select id="timeline" value={f.timeline} onChange={set("timeline")} className={input()}>
            <option value="">Select…</option>
            {timelines.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Project or job description" id="description" hint="Role, team size, number of openings, or the HR task you need help with.">
        <textarea id="description" rows={4} value={f.description} onChange={set("description")} className={input()} />
      </Field>
      <Field label="Message" required error={errors.message} id="message">
        <textarea id="message" rows={4} value={f.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={input(errors.message)} />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-sm text-mute">
          {site.email ? "Submitting opens your email app with this message ready to send." : "Submitting prepares your message to copy and send on LinkedIn."}
        </p>
        <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-white transition-colors hover:bg-coral-deep">
          {site.email ? "Prepare email" : "Prepare message"}
          <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl border border-lavender bg-lavender-soft p-6"
          >
            {result === "mail" ? (
              <>
                <p className="flex items-center gap-2 font-semibold text-plum">
                  <Mail className="h-5 w-5" aria-hidden /> Your email app should now be open.
                </p>
                <p className="mt-2 text-sm text-mute">
                  Your message is <strong>not sent yet</strong>. Press send in your email app. If nothing opened, write to{" "}
                  <a className="font-semibold text-plum underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>{" "}
                  or copy the message below.
                </p>
              </>
            ) : (
              <>
                <p className="flex items-center gap-2 font-semibold text-plum">
                  <TriangleAlert className="h-5 w-5 text-coral-deep" aria-hidden /> Your message is ready, but it has not been sent.
                </p>
                <p className="mt-2 text-sm text-mute">Direct email isn&apos;t set up on this site yet. Copy the message and send it to Kashish on LinkedIn.</p>
              </>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-plum px-5 py-3 text-sm font-semibold text-cream hover:bg-ink">
                {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                {copied ? "Copied" : "Copy message"}
              </button>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0a66c2] px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                <LinkedInIcon /> Message on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

const input = (err?: string) =>
  cn(
    "w-full rounded-2xl border bg-white/80 px-4 py-3.5 text-ink outline-none transition-all placeholder:text-mute/60 focus:bg-white focus:ring-4",
    err ? "border-coral-deep focus:ring-coral/20" : "border-plum/15 focus:border-plum focus:ring-lavender/60",
  );

function Field({ label, id, required, error, hint, children }: { label: string; id: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-plum">
        {label} {required && <span className="text-coral-deep" aria-hidden>*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      {hint && <p className="-mt-1 mb-2 text-xs text-mute">{hint}</p>}
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm font-medium text-coral-deep">
          {error}
        </p>
      )}
    </div>
  );
}
