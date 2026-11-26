import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

type Variant = "primary" | "coral" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-plum text-cream hover:bg-ink",
  coral: "bg-coral text-white hover:bg-coral-deep",
  secondary: "border border-plum/25 bg-white/60 text-plum backdrop-blur hover:border-plum hover:bg-white",
  ghost: "text-plum underline-offset-4 hover:text-coral-deep",
  light: "bg-cream text-plum hover:bg-white",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
  external?: boolean;
  icon?: React.ReactNode | false;
};

/** Pill-shaped link button. Internal routes use next/link; external links open in a new tab. */
export default function Button({ href, children, variant = "primary", className, magnetic = true, external, icon }: Props) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const Icon = isExternal ? ArrowUpRight : ArrowRight;
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-300",
    variant === "ghost" ? "px-1 py-2" : "px-6 py-3.5 text-[0.95rem]",
    styles[variant],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {icon !== false &&
        (icon ?? <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />)}
    </>
  );
  const el = isExternal ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
  return magnetic && variant !== "ghost" ? <Magnetic>{el}</Magnetic> : el;
}
