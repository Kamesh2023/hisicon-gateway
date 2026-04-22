import { ArrowUpRight } from "lucide-react";

const news = [
  {
    date: "18 Apr 2026",
    tag: "AMR Update",
    title: "National AMR surveillance report 2025 released by ICMR-AMRSN",
    excerpt:
      "Latest data on resistance trends across tertiary care hospitals highlights rising carbapenem resistance in Gram-negative pathogens.",
  },
  {
    date: "10 Apr 2026",
    tag: "Guideline",
    title: "HISI position statement on hand hygiene compliance auditing",
    excerpt:
      "Updated framework for direct observation methodology in Indian healthcare settings, aligned with WHO's multimodal strategy.",
  },
  {
    date: "02 Apr 2026",
    tag: "Event",
    title: "Registrations open for HISICON 2026 — early-bird until 30 June",
    excerpt:
      "Three-day scientific programme featuring international faculty, workshops on outbreak investigation and stewardship rounds.",
  },
];

const tagStyles: Record<string, string> = {
  "AMR Update": "bg-accent/10 text-accent-dark",
  Guideline: "bg-primary/10 text-primary",
  Event: "bg-amber-500/10 text-amber-700",
};

export function News() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
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
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 text-xs">
                <span
                  className={`rounded-full px-2.5 py-1 font-semibold ${tagStyles[n.tag] ?? "bg-muted text-muted-foreground"}`}
                >
                  {n.tag}
                </span>
                <time className="font-medium text-muted-foreground">{n.date}</time>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                {n.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {n.excerpt}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark"
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
