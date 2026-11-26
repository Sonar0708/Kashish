"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Lenis smooth scrolling (skipped when the visitor prefers reduced motion). */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ autoRaf: true, duration: 1.1, anchors: { offset: -90 } });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    if (!hash) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -90 });
      else el.scrollIntoView();
    }, 650);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
