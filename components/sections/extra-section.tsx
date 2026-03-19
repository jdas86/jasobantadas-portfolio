"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

export function ExtraSection() {
  const items = [
    resumeData.basics.summary[2],
    resumeData.extra[15],
    resumeData.extra[16],
    resumeData.extra[17]
  ];

  return (
    <section id="more" className="section-pad py-20">
      <div className="container-shell">
        <SectionHeading eyebrow="More" title="Additional source lines preserved without invention" copy="This section ensures nothing from the provided document is dropped." />

        <div className="mt-10 grid gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
            >
              <TiltCard className="p-6">
                <div className="text-base leading-8 text-white/90">{item}</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
