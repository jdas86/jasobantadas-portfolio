"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950"
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.45 } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-3xl font-bold text-white shadow-[0_0_40px_rgba(56,189,248,0.2)]"
            >
              JD
            </motion.div>
            <div className="w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-1.5 bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
