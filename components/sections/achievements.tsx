"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Trophy, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const icons = [Trophy, TrendingUp, ShieldCheck, Sparkles, TrendingUp, ShieldCheck];

export function AchievementsSection() {
  const reduced = useReducedMotion();

  return (
    <section id="achievements" className="section-pad py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Metrics, migrations, optimization, and enterprise-grade operating rigor"
          copy="Only achievements grounded in the source are highlighted here."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resumeData.achievements.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
              >
                <TiltCard className="h-full p-6">
                  <motion.div whileHover={reduced ? {} : { y: -4 }} className="relative h-full">
                    <div className="absolute inset-0 rounded-[1.6rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="mt-5 text-lg font-semibold leading-8 text-white">{item}</div>

                      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                        <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
                        Premium Impact Signal
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
