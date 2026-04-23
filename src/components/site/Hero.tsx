import { ArrowRight, BookOpen } from "lucide-react";

const stats = [
  { value: "1,500+", label: "Members" },
  { value: "30+", label: "Years" },
  { value: "20+", label: "City Chapters" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden text-primary-foreground" style={{ backgroundColor: "#1B4F8A" }}>
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90">
            <span className="h-px w-6 bg-white/60" />
            Established 1991
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            India's Premier Society for{" "}
            <span className="text-accent">Infection Prevention</span> &amp; Control
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Serving healthcare professionals across India since 1991 — advancing
            evidence-based infection control and antimicrobial stewardship.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark">
              Become a Member
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/90" style={{ color: "#1B4F8A", borderColor: "#1B4F8A" }}>
              <BookOpen className="h-4 w-4" />
              Explore Resources
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/15 pt-10 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 font-medium uppercase tracking-wider text-white" style={{ fontSize: "13px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
