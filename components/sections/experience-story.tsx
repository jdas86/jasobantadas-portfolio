"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { BriefcaseBusiness, Layers3, ChevronRight } from "lucide-react";

export function ExperienceStorySection() {
  const role = resumeData.experience[0];
  const impacts = resumeData.achievements.slice(0, 4);

  return (
    <section id="experience" className="section-pad py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            title="Architecture leadership presented as a premium transformation narrative"
            copy="The source resume explicitly names one company and multiple specialization domains. This layout keeps the facts intact while presenting them with stronger depth and storytelling."
          />

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-6">
            <TiltCard className="p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Impact Highlights</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {impacts.map((item) => (
                  <Badge key={item} className="border-cyan-400/20 bg-cyan-400/10 text-cyan-100">{item}</Badge>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }}>
            <TiltCard className="p-6">
              <div className="relative">
                <div className="absolute bottom-0 left-5 top-20 w-px bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent" />

                <div className="relative pl-0">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.15)]">
                      <BriefcaseBusiness className="h-6 w-6" />
                      <div className="absolute inset-0 rounded-2xl border border-white/5" />
                    </div>

                    <div>
                      <div className="text-xl font-semibold text-white">{role.role} — {role.company}</div>
                      <div className="mt-1 text-sm text-white/60">{role.dates} • {role.location}</div>
                    </div>
                  </div>

                  <div className="space-y-4 pl-16">
                    {role.bullets.map((bullet, index) => (
                      <motion.div
                        key={bullet}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.05, duration: 0.45 }}
                        className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/85"
                      >
                        <div className="absolute -left-[2.6rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/25 bg-slate-950 text-cyan-300">
                          <ChevronRight className="h-3 w-3" />
                        </div>
                        {bullet}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {resumeData.projects.map((project, projectIndex) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ delay: projectIndex * 0.05 }}>
              <TiltCard className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold text-white">{project.title}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} className="border-violet-400/20 bg-violet-400/10 text-violet-100">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="hidden rounded-2xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-violet-200 md:block">
                    Specialization
                  </div>
                </div>

                <div className="grid gap-3">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <motion.div
                      key={bullet}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: bulletIndex * 0.03, duration: 0.4 }}
                      className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-4 text-sm leading-7 text-white/82"
                    >
                      {bullet}
                    </motion.div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
