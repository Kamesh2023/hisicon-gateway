import { MapPin, Calendar } from "lucide-react";

const events = [
  {
    day: "12",
    month: "Jun",
    name: "Workshop on Outbreak Investigation in Critical Care Units",
    location: "AIIMS, New Delhi",
    dateLabel: "12 Jun 2026",
  },
  {
    day: "24",
    month: "Jul",
    name: "HISI Mumbai Chapter — CME on Antimicrobial Stewardship in Community Settings",
    location: "Tata Memorial Centre, Mumbai",
    dateLabel: "24 Jul 2026",
  },
  {
    day: "22",
    month: "Nov",
    name: "HISICON 2026 — Annual National Conference on Infection Prevention & Control",
    location: "Hyderabad International Convention Centre",
    dateLabel: "22–24 Nov 2026",
  },
];

export function Events() {
  return (
    <section className="border-y border-border bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              Calendar
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Upcoming Events
            </h2>
          </div>
          <a
            href="#"
            className="hidden shrink-0 text-sm font-semibold text-primary hover:underline sm:inline-flex"
          >
            All events
          </a>
        </div>

        <div className="mt-10 space-y-4">
          {events.map((e) => (
            <div
              key={e.name}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-[var(--shadow-card)] sm:flex-row sm:items-center"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xl font-bold leading-none">{e.day}</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider">
                  {e.month}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {e.name}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.dateLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </span>
                </div>
              </div>
              <button className="shrink-0 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
