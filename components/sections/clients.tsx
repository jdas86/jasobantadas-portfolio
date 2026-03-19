"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";

export function ClientsSection() {
  const clients = resumeData.extra.slice(1, 8);
  const industries = resumeData.extra.slice(9, 15);

  return (
    <section className="section-pad py-20">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <TiltCard className="p-6">
            <SectionHeading eyebrow="Enterprise Client & Product Experience" title="Trusted across global enterprise names" />
            <div className="mt-6 flex flex-wrap gap-3">
              {clients.map((item) => <Badge className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100" key={item}>{item}</Badge>)}
            </div>
          </TiltCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <TiltCard className="p-6">
            <SectionHeading eyebrow="Industries" title="Cross-sector architecture experience" />
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((item) => <Badge className="border-violet-400/20 bg-violet-400/10 text-violet-100" key={item}>{item}</Badge>)}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
