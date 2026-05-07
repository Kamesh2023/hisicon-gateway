import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface PageShellProps {
  title: string;
  subtitle: string;
}

export function PageShell({ title, subtitle }: PageShellProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Navbar />
      <main className="pt-16">
        <section style={{ backgroundColor: "#ffffff" }}>
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
            <h1
              className="font-medium leading-tight tracking-tight"
              style={{ fontSize: "40px", color: "#003087", fontWeight: 500 }}
            >
              {title}
            </h1>
            <p
              className="mt-4 max-w-3xl"
              style={{ fontSize: "18px", lineHeight: 1.6, color: "#1f2937" }}
            >
              {subtitle}
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#f9fafb" }}>
          <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8">
            <p
              className="text-base leading-relaxed"
              style={{ color: "#1f2937", fontSize: "16px" }}
            >
              Full content for this section is being developed. Please check
              back soon or contact the HISI Secretariat at{" "}
              <a
                href="mailto:secretary@hisindia.net"
                className="font-semibold hover:underline"
                style={{ color: "#003087" }}
              >
                secretary@hisindia.net
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
