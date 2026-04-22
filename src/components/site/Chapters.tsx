import { MapPin } from "lucide-react";

const chapters = [
  { city: "Delhi NCR", members: "210+" },
  { city: "Mumbai", members: "185+" },
  { city: "Bangalore", members: "160+" },
  { city: "Chennai", members: "140+" },
  { city: "Pune", members: "120+" },
  { city: "Hyderabad", members: "115+" },
  { city: "Kolkata", members: "95+" },
  { city: "Ahmedabad", members: "75+" },
];

export function Chapters() {
  return (
    <section className="border-y border-border bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
              Nationwide Network
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              City Chapters across India
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              HISI's regional chapters bring together infection control
              practitioners, microbiologists and clinicians for local CMEs,
              workshops and surveillance initiatives. Twenty cities and counting.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
              Find your chapter
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {chapters.map((c) => (
              <div
                key={c.city}
                className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-[var(--shadow-card)]"
              >
                <MapPin className="h-4 w-4 text-accent-dark" />
                <div className="mt-3 text-sm font-semibold text-foreground">
                  {c.city}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {c.members} members
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
