import { Globe2, BookText, CalendarDays } from "lucide-react";

const items = [
  {
    icon: Globe2,
    title: "WHO & Government of India",
    desc: "Recognised resource partner advising on national and global infection control policy.",
  },
  {
    icon: BookText,
    title: "JPSIC — Peer-Reviewed Journal",
    desc: "Journal of Patient Safety and Infection Control, published quarterly by Wolters Kluwer.",
  },
  {
    icon: CalendarDays,
    title: "HISICON Annual Conference",
    desc: "India's flagship academic conference on healthcare-associated infections and AMR.",
  },
];

export function AboutStrip() {
  return (
    <section className="border-b border-border bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
