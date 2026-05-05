import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1,500+", label: "Members" },
  { value: "32", label: "Years of leadership" },
  { value: "WHO", label: "Recognised partner", accent: true },
  { value: "8", label: "City chapters" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden text-primary-foreground">
      <div className="grid lg:grid-cols-5">
        {/* LEFT COLUMN — 60% */}
        <div
          className="px-4 py-20 lg:col-span-3 lg:px-12 lg:py-28"
          style={{ backgroundColor: "#003087" }}
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:ml-auto lg:max-w-xl lg:pr-8">
            <span
              className="font-medium uppercase tracking-wider text-white/60"
              style={{ fontSize: "12px" }}
            >
              WHO Recognised · Est. 1992
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Protecting patients.
              <br />
              Advancing{" "}
              <span style={{ color: "#2b83ff" }}>infection control.</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-white/75"
              style={{ fontSize: "18px", lineHeight: 1.6 }}
            >
              India's national society for infection prevention — advancing
              science, policy and practice since 1992. WHO recognised · 1,500+
              members.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: "#2b83ff" }}
              >
                Become a Member
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                HISICON 2026
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — 40% */}
        <div
          className="flex items-center px-4 py-16 lg:col-span-2 lg:px-10 lg:py-28"
          style={{ backgroundColor: "#002070" }}
        >
          <div className="grid w-full grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  padding: "16px",
                }}
              >
                <div
                  className="font-bold leading-none"
                  style={{
                    fontSize: "48px",
                    color: s.accent ? "#2b83ff" : "#ffffff",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2 text-white/60"
                  style={{ fontSize: "13px" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
