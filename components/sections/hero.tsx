import { ArrowDownRight, Download, Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { basics, certifications } = resumeData;

  return (
    <section id="hero" className="section-pad relative pt-28 sm:pt-32 lg:pt-36">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Badge className="mb-5">Premium Data & AI Architecture Portfolio</Badge>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {basics.name.split(" ").slice(0, 1).join(" ")} <span className="text-gradient">{basics.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{basics.title}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{basics.summary[0]} {basics.summary[1]}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#experience"><Button size="lg">View Experience <ArrowDownRight className="ml-2 h-4 w-4" /></Button></a>
            <a href="/resume"><Button variant="outline" size="lg">Download Resume <Download className="ml-2 h-4 w-4" /></Button></a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
        </div>

        <div className="glass rounded-[2rem] p-6 shadow-panel">
          <div className="mb-5 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Contact & Presence</div>
          <div className="grid gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-300" /> {basics.phone}</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-300" /> {basics.email}</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan-300" /> {basics.location}</div>
            <a className="flex items-center gap-3 hover:text-white" href={basics.links[0].href}><Linkedin className="h-4 w-4 text-cyan-300" /> {basics.links[0].value}</a>
            <a className="flex items-center gap-3 hover:text-white" href={basics.links[1].href}><Github className="h-4 w-4 text-cyan-300" /> {basics.links[1].value}</a>
            <a className="flex items-center gap-3 hover:text-white" href={`https://${basics.website}`}>{basics.website}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
