import { ArrowRight, BookOpen } from "lucide-react";

const stats = [
  { value: "1,500+", label: "Members" },
  { value: "30+", label: "Years" },
  { value: "20+", label: "City Chapters" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
            <button className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
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
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/65 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
