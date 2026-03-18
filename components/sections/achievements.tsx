"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Trophy, TrendingUp, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";

const icons = [Trophy, TrendingUp, ShieldCheck, Trophy, TrendingUp, ShieldCheck];

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
                whileHover={reduced ? {} : { y: -6, rotateX: 1.5, rotateY: -1.5 }}
                className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-panel backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-lg font-semibold leading-8">{item}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
