import { ArrowRight, BookMarked } from "lucide-react";

export function JournalSpotlight() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 rounded-2xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:p-14">
          {/* Journal cover */}
          <div className="mx-auto w-56 sm:w-64">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-primary shadow-xl shadow-primary/20">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, white 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-primary-foreground">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Volume 13 · Issue 1
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
                    Jan – Mar 2026
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold leading-tight">JPSIC</div>
                  <div className="mt-2 text-[11px] leading-tight text-white/80">
                    Journal of Patient Safety and Infection Control
                  </div>
                  <div className="mt-4 h-px w-12 bg-accent" />
                  <div className="mt-3 text-[10px] uppercase tracking-wider text-white/60">
                    Wolters Kluwer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark">
              <BookMarked className="h-3.5 w-3.5" />
              Latest Issue
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Journal of Patient Safety and Infection Control
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              JPSIC is the official peer-reviewed journal of HISI, published
              quarterly by Wolters Kluwer. It features original research,
              systematic reviews and consensus guidelines on healthcare-associated
              infections, antimicrobial resistance, and patient safety —
              contributed by Indian and international authors.
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Indexed in Scopus, EMBASE & DOAJ",
                "Open submissions year-round",
                "Free access for HISI members",
                "Quarterly publication",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark">
                Visit Journal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                Submit a manuscript
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
