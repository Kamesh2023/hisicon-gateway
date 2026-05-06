import { ArrowUpRight } from "lucide-react";

const news = [
  {
    date: "15 Apr 2026",
    tag: "AMR Update",
    title: "ICMR-AMRSN releases updated national antibiogram for 2025–26",
    excerpt:
      "New surveillance data highlights rising carbapenem resistance in Gram-negative organisms across tertiary care centres in India.",
  },
  {
    date: "02 Apr 2026",
    tag: "Guideline",
    title:
      "HISI updates position statement on central line-associated bloodstream infection (CLABSI) prevention",
    excerpt:
      "Revised evidence-based recommendations aligned with WHO and CDC guidance for Indian healthcare settings.",
  },
  {
    date: "20 Mar 2026",
    tag: "Event",
    title:
      "HISICON 2026 call for abstracts now open — submission deadline 31 July 2026",
    excerpt:
      "Submit original research, case studies and audits for oral and poster presentation at India's premier IPC conference.",
  },
];

const tagStyles: Record<string, string> = {
  "AMR Update": "bg-[#e8f0fe] text-[#0052cc]",
  Guideline: "bg-[#e8f0fe] text-[#003087]",
  Event: "bg-[#FEF3C7] text-[#B45309]",
};

export function News() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#0052cc" }}>
              Newsroom
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest News &amp; Announcements
            </h2>
          </div>
          <a
            href="#"
            className="hidden shrink-0 text-sm font-semibold text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col bg-card p-6 transition-all hover:shadow-[var(--shadow-card)]"
              style={{
                borderLeft: "3px solid #2b83ff",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${tagStyles[n.tag] ?? "bg-muted text-muted-foreground"}`}
              >
                {n.tag}
              </span>
              <time className="mt-3 text-xs font-medium text-muted-foreground">{n.date}</time>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                {n.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {n.excerpt}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#003087" }}
              >
                Read more <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
