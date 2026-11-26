"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/config/nav";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/ui/Icons";
import Magnetic from "@/components/ui/Magnetic";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label={`${site.name}, home`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-2xl bg-plum font-display text-lg italic leading-none text-cream transition-transform duration-500 group-hover:rotate-[-8deg]">
        K<span className="text-coral">t</span>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-medium tracking-tight text-plum">Kashish Talreja</span>
        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mute">HR Professional</span>
      </span>
    </Link>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigation.
  useEffect(() => {
    const t = window.setTimeout(() => {
      setOpen(false);
      setMenu(false);
    }, 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-2.5 transition-all duration-500 sm:px-5",
          open ? "border border-white bg-cream soft-shadow" : scrolled ? "glass soft-shadow" : "border border-transparent",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href} ref={dropRef} className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                  <button
                    type="button"
                    aria-expanded={menu}
                    aria-controls="services-menu"
                    onClick={() => setMenu((m) => !m)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-coral-deep",
                      isActive(item.href) ? "text-coral-deep" : "text-plum",
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", menu && "rotate-180")} aria-hidden />
                  </button>
                  <AnimatePresence>
                    {menu && (
                      <motion.div
                        id="services-menu"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
                      >
                        <ul className="glass lift-shadow grid grid-cols-2 gap-1 rounded-3xl p-3">
                          {item.children.map((c, i) => (
                            <li key={c.href} className={i === 0 ? "col-span-2" : ""}>
                              <Link
                                href={c.href}
                                className={cn(
                                  "block rounded-2xl px-4 py-3 transition-colors hover:bg-white",
                                  i === 0 && "bg-plum text-cream hover:bg-ink",
                                )}
                              >
                                <span className={cn("block text-sm font-semibold", i === 0 ? "text-cream" : "text-plum")}>{c.label}</span>
                                {c.note && <span className={cn("mt-0.5 block text-xs leading-snug", i === 0 ? "text-cream/70" : "text-mute")}>{c.note}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:text-coral-deep",
                      isActive(item.href) ? "text-coral-deep" : "text-plum",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kashish Talreja on LinkedIn (opens in a new tab)"
            className="grid h-10 w-10 place-items-center rounded-full border border-plum/15 bg-white/60 text-plum transition-colors hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
          >
            <LinkedInIcon />
          </a>
          <Magnetic className="hidden sm:inline-block">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-deep">
              Hire Kashish <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-plum text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-backdrop"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-plum/30 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lift-shadow mx-auto mt-2 max-h-[calc(100dvh-6rem)] border border-white bg-cream max-w-7xl overflow-y-auto rounded-3xl p-5 lg:hidden"
            data-lenis-prevent
          >
            <ul className="space-y-1">
              <li>
                <Link href="/" className="block rounded-2xl px-4 py-3 font-display text-2xl text-plum hover:bg-white">
                  Home
                </Link>
              </li>
              {nav.map((item, i) => (
                <motion.li key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn("block rounded-2xl px-4 py-3 font-display text-2xl hover:bg-white", isActive(item.href) ? "text-coral-deep" : "text-plum")}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-4 grid grid-cols-1 gap-0.5 border-l border-line pl-3 sm:grid-cols-2">
                      {item.children.slice(1).map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block rounded-xl px-3 py-2 text-sm font-medium text-mute hover:bg-white hover:text-plum">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row">
              <Link href="/contact" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-coral px-5 py-3.5 font-semibold text-white">
                Hire Kashish <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-plum/20 bg-white px-5 py-3.5 font-semibold text-plum"
              >
                <LinkedInIcon /> Connect on LinkedIn
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
