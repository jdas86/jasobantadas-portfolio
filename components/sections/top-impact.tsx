"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";

export function TopImpactStrip() {
  const items = [
    "17+ years of experience",
    "Led migrations: Teradata → AWS, Hive → Snowflake, DB2 → Snowflake",
    "Architectures end to end — from whiteboard to production"
  ];

  return (
    <section className="section-pad mt-10">
      <div className="container-shell grid gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <TiltCard className="p-5">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/75">Top 3 Impact</div>
              <div className="mt-3 text-lg font-medium leading-7 text-white">{item}</div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
