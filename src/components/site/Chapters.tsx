import { MapPin } from "lucide-react";

const chapters = [
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Pune",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
];

export function Chapters() {
  return (
    <section className="border-y border-border bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#0052cc" }}>
              Nationwide Network
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              City Chapters across India
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              HISI's regional chapters bring infection control practitioners,
              microbiologists and clinicians together for local CMEs, workshops,
              surveillance initiatives and peer support. Twenty cities and
              counting.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
              View all chapters &amp; contacts
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {chapters.map((city) => (
              <div
                key={city}
                className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-[var(--shadow-card)]"
              >
                <MapPin className="h-4 w-4" style={{ color: "#2b83ff" }} />
                <div className="mt-3 text-sm font-semibold text-foreground">
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
