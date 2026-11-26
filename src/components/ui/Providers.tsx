"use client";

import { MotionConfig } from "framer-motion";

/** reducedMotion="user" makes every Framer Motion animation respect the OS reduced-motion setting. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
