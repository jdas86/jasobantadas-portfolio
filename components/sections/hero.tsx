"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";

function FloatingOrb({
  className,
  delay = 0
}: {
  className: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      animate={
        reduced
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: 1,
              y: [0, -14, 0],
              scale: [1, 1.03, 1]
            }
      }
      transition={{
        duration: reduced ? 0.5 : 6,
        repeat: reduced ? 0 : Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
}

export function HeroSection() {
  const { basics, certifications } = resumeData;
  const reduced = useReducedMotion();

  return (
    <section id="hero" className="section-pad relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="container-shell relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-5 border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
              Data Analytics & ML Architect Portfolio
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.05 }}
            className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {basics.name.split(" ").slice(0, 1).join(" ")} <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">{basics.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-slate-200"
          >
            {basics.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.15 }}
            className="mt-6 max-w-3xl text-base leading-8 text-slate-300"
          >
            {basics.summary[0]} {basics.summary[1]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#experience"><Button size="lg">View Experience <ArrowDownRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="/resume"><Button size="lg">Download Resume <Download className="ml-2 h-4 w-4" /></Button></a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {certifications.map((item) => (
              <Badge key={item} className="border-violet-400/20 bg-violet-400/10 text-violet-200">{item}</Badge>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="absolute inset-0 [perspective:1600px]">
            <FloatingOrb delay={0} className="absolute left-8 top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <FloatingOrb delay={0.6} className="absolute right-8 top-20 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
            <FloatingOrb delay={1.1} className="absolute bottom-10 left-24 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, rotateX: 18, rotateY: -12, y: 28 }}
                animate={{ opacity: 1, rotateX: 16, rotateY: -12, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="absolute inset-x-6 top-8 h-[220px] rounded-[2.2rem] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.92))] shadow-[0_25px_80px_rgba(14,165,233,0.12)] backdrop-blur-md"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(168,85,247,0.14),transparent_30%)]" />
                <div className="absolute inset-x-0 top-0 h-10 rounded-t-[2.2rem] border-b border-white/10 bg-white/5" />
                <div className="absolute left-5 top-3 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>
                <div className="absolute left-5 top-16 font-mono text-[11px] leading-6 text-cyan-200/80 sm:text-xs">
                  <div className="text-violet-200/80">$ phone: {basics.phone}</div>
                  <div className="text-sky-200/80">$ email: {basics.email}</div>
                  <div className="text-emerald-200/80">$ location: {basics.location}</div>
                  <div className="text-pink-200/80">$ linkedin: {basics.links[0].value}</div>
                  <div className="text-cyan-200/80">$ github: {basics.links[1].value}</div>
                  <div className="text-amber-200/80">$ website: {basics.website}</div>
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
