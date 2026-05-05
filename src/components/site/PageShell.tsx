import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

interface PageShellProps {
  title: string;
  subtitle: string;
}

export function PageShell({ title, subtitle }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section
          className="bg-primary text-primary-foreground"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-24">
            <h1
              className="font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "40px" }}
            >
              {title}
            </h1>
            <p
              className="mt-4 max-w-3xl text-white/80"
              style={{ fontSize: "18px", lineHeight: 1.6 }}
            >
              {subtitle}
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Full content for this section is being developed. Please check
              back soon or contact the HISI Secretariat at{" "}
              <a
                href="mailto:secretary@hisindia.net"
                className="font-semibold text-primary hover:underline"
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
