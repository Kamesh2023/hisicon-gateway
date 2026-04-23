import { CalendarDays, FilePen, ArrowRight } from "lucide-react";

export function HisiconBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-darker text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, white 1px, transparent 1px), linear-gradient(45deg, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/10 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20">
        <div>
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Annual Conference
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            HISICON 2026
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Annual National Conference on Infection Prevention &amp; Control —
            three days of scientific sessions, workshops and networking with
            India's leading IPC experts.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-accent" />
              Date &amp; Venue — To Be Announced
            </span>
          </div>
        </div>

        <button className="group inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-colors hover:bg-accent-dark lg:self-center">
          Register Interest
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </section>
  );
}
