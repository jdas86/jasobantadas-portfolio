import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function ClientsSection() {
  const clients = resumeData.extra.slice(1, 8);
  const industries = resumeData.extra.slice(9, 15);

  return (
    <section className="section-pad py-20">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <div className="glass rounded-[2rem] p-6">
          <SectionHeading eyebrow="Enterprise Client & Product Experience" title="Trusted across global enterprise names" />
          <div className="mt-6 flex flex-wrap gap-3">
            {clients.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
        </div>
        <div className="glass rounded-[2rem] p-6">
          <SectionHeading eyebrow="Industries" title="Cross-sector architecture experience" />
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
        </div>
      </div>
    </section>
  );
}
