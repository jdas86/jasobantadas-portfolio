import { resumeData } from "@/data/resume-data";
import { SectionHeading } from "@/components/section-heading";

export function ExtraSection() {
  return (
    <section id="more" className="section-pad py-20">
      <div className="container-shell">
        <SectionHeading
          eyebrow="More"
          title="Additional source lines preserved without invention"
          copy="This section ensures nothing from the provided document is dropped."
        />
        <div className="mt-10 grid gap-4">
          <div className="glass rounded-[2rem] p-6 text-base leading-8 text-slate-300">
            {resumeData.basics.summary[2]}
          </div>
          <div className="glass rounded-[2rem] p-6 text-base leading-8 text-slate-300">
            {resumeData.extra[15]}
          </div>
          <div className="glass rounded-[2rem] p-6 text-base leading-8 text-slate-300">
            {resumeData.extra[16]}
          </div>
          <div className="glass rounded-[2rem] p-6 text-base leading-8 text-slate-300">
            {resumeData.extra[17]}
          </div>
        </div>
      </div>
    </section>
  );
}
