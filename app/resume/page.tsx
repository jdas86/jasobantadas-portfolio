import { resumeData } from "@/data/resume-data";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 text-slate-100 shadow-2xl">
        <h1 className="text-3xl font-bold">{resumeData.basics.name}</h1>
        <p className="mt-2 text-sm">{resumeData.basics.title}</p>
        <p className="mt-2 text-sm">
          {resumeData.basics.phone} • {resumeData.basics.email} • {resumeData.basics.location} • {resumeData.basics.website}
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">About</h2>
          <div className="mt-3 space-y-3 text-sm leading-7">
            {resumeData.basics.summary.map((line) => <p key={line}>{line}</p>)}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Core Expertise</h2>
          <div className="mt-3 space-y-4 text-sm leading-7">
            {resumeData.skills.map((group) => (
              <div key={group.group}>
                <div className="font-semibold">{group.group}</div>
                <div>{group.items.join(" | ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Specializations</h2>
          <div className="mt-4 space-y-6 text-sm leading-7">
            {resumeData.projects.map((project) => (
              <div key={project.title}>
                <div className="font-semibold">{project.title}</div>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Additional</h2>
          <div className="mt-3 space-y-2 text-sm leading-7">
            {resumeData.extra.map((line) => <p key={line}>{line}</p>)}
          </div>
        </section>
      </div>
    </main>
  );
}
