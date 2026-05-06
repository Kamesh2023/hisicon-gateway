import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "1,500+", label: "Members" },
  { value: "34", label: "Years of leadership" },
  { value: "WHO", label: "Recognised partner", accent: true },
  { value: "20+", label: "City chapters" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        {/* White overlay 70% */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span
              className="font-semibold uppercase tracking-wider"
              style={{ fontSize: "12px", color: "#003087" }}
            >
              WHO Recognised · Est. 1991
            </span>
            <h1
              className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#003087" }}
            >
              Protecting patients.
              <br />
              Advancing{" "}
              <span style={{ color: "#2b83ff" }}>infection control.</span>
            </h1>
            <p
              className="mt-6 max-w-xl"
              style={{ fontSize: "18px", lineHeight: 1.6, color: "#003087", opacity: 0.85 }}
            >
              India's national society for infection prevention — advancing
              science, policy and practice since 1991. WHO recognised · 1,500+
              members.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#003087" }}
              >
                Become a Member
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#003087]/5"
                style={{ borderColor: "#003087", color: "#003087", backgroundColor: "transparent" }}
              >
                HISICON 2026
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ backgroundColor: "#002070" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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
