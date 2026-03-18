import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { SimpleAccordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function ExperienceStorySection() {
  const role = resumeData.experience[0];
  const impacts = resumeData.achievements.slice(0, 4);

  return (
    <section id="experience" className="section-pad py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            title="A story-card timeline with measurable architecture impact"
            copy="The source resume only names one company explicitly. The portfolio therefore preserves truthfulness and avoids inventing extra employers, dates, or roles."
          />
          <div className="mt-6 rounded-[2rem] border border-sky-400/20 bg-sky-400/10 p-5">
            <div className="text-sm uppercase tracking-[0.24em] text-sky-200/80">Impact Highlights</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {impacts.map((item) => <Badge key={item}>{item}</Badge>)}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <SimpleAccordion title={`${role.role} — ${role.company}`} subtitle={`${role.dates} • ${role.location}`} defaultOpen>
            <div className="space-y-4">
              {role.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  {bullet}
                </div>
              ))}
            </div>
          </SimpleAccordion>

          {resumeData.projects.map((project) => (
            <SimpleAccordion key={project.title} title={project.title} subtitle={project.stack.join(" • ")}>
              <div className="space-y-3">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                    {bullet}
                  </div>
                ))}
              </div>
            </SimpleAccordion>
          ))}
        </div>
      </div>
    </section>
  );
}
