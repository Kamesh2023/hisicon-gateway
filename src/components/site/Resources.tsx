import { BookOpen, FileText, Presentation, Video, Shield, ArrowRight } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Journal — JPSIC",
    desc: "Quarterly peer-reviewed publication indexed in major databases.",
    cta: "Visit journal",
  },
  {
    icon: FileText,
    title: "Publications & Guidelines",
    desc: "Position statements, consensus documents and best-practice guides.",
    cta: "Browse library",
  },
  {
    icon: Presentation,
    title: "Presentations",
    desc: "Conference talks, lecture decks and teaching slides from HISICON.",
    cta: "View archive",
  },
  {
    icon: Video,
    title: "Webinars",
    desc: "On-demand recordings on stewardship, outbreak control and IPC.",
    cta: "Watch now",
  },
  {
    icon: Shield,
    title: "AMR Resources",
    desc: "India-specific antimicrobial resistance guidelines, stewardship toolkits and surveillance reports aligned with the National Action Plan.",
    cta: "Access resources",
  },
];

export function Resources() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#0052cc" }}>
            Knowledge Hub
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education &amp; Resources
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Evidence-based resources curated for healthcare professionals working
            in infection prevention and antimicrobial stewardship.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map(({ icon: Icon, title, desc, cta }) => (
            <div
              key={title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent-dark">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
