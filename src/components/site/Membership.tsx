import { ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Regular Member",
    desc: "For practising clinicians, microbiologists and IPC nurses across India.",
  },
  {
    name: "Associate Member",
    desc: "For postgraduate students and early-career healthcare professionals.",
  },
  {
    name: "Life Member",
    desc: "One-time enrolment with lifelong access to HISI benefits and journal.",
  },
  {
    name: "Institutional Member",
    desc: "For hospitals, academic institutions and laboratories supporting IPC.",
  },
  {
    name: "Fellow Member",
    desc: "Awarded to senior IPC professionals with significant contributions to research, publications and leadership in infection prevention.",
  },
  {
    name: "Student Member",
    desc: "For postgraduate students pursuing MD, MSc or fellowship programmes in microbiology, infectious disease or related specialties.",
  },
];

export function Membership() {
  return (
    <section className="text-primary-foreground" style={{ backgroundColor: "#1B4F8A" }}>
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Membership
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Become a Member
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Join 1,500+ infection control professionals across India — clinicians, microbiologists, nurses, administrators and researchers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-lg border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {t.desc}
              </p>
              <button className="group mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark">
                Join Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
