import { Card } from "@/components/ui/card";

export function TopImpactStrip() {
  const items = [
    "17+ years of IT experience",
    "Led migration - AWS, Databricks, Snowflake",
    "Architectures end to end — from whiteboard to production"
  ];

  return (
    <section className="section-pad mt-10">
      <div className="container-shell grid gap-4 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item} className="rounded-[2rem] p-5">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/75">Top 3 Impact</div>
            <div className="mt-3 text-lg font-medium leading-7">{item}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
