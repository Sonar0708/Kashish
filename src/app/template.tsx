"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

// The curtain plays only on client-side navigations, never on first load,
// so the static HTML is never hidden behind an overlay waiting for JavaScript.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const play = hasNavigated && !reduce;

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-plum"
        initial={play ? { scaleY: 1 } : false}
        animate={{ scaleY: 0 }}
        style={{ scaleY: 0 }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[89] origin-top bg-blush"
        initial={play ? { scaleY: 1 } : false}
        animate={{ scaleY: 0 }}
        style={{ scaleY: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={play ? { opacity: 0, y: 24 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
