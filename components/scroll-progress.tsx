"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400" style={{ scaleX }} />;
}
