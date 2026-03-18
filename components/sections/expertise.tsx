import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Core Expertise"
          title="Architecture depth across cloud, data, ML, governance, and platform scale"
          copy="Every skill group below is taken directly from the source profile and preserved as portfolio content."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {resumeData.skills.map((group) => (
            <div key={group.group} className="glass rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
