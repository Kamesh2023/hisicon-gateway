import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ShieldPlus } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" as const },
  { label: "About Us", href: "/about" as const },
  { label: "Membership", href: "/membership" as const },
  { label: "Education", href: "/education" as const },
  { label: "Events", href: "/events" as const },
  { label: "Journal", href: "/journal" as const },
  { label: "Chapters", href: "/chapters" as const },
  { label: "Contact Us", href: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = scrolled
    ? { backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }
    : { backgroundColor: "rgba(255,255,255,0.95)", borderBottom: "1px solid transparent" };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur transition-shadow"
      style={headerStyle}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-md text-white"
            style={{ backgroundColor: "#003087" }}
          >
            <ShieldPlus className="h-5 w-5" strokeWidth={2.25} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight" style={{ color: "#003087" }}>HISI</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
              Hospital Infection Society – India
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[#003087]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            className="rounded-md border bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#003087]/5"
            style={{ borderColor: "#003087", color: "#003087" }}
          >
            Login
          </button>
          <button
            className="rounded-md border bg-transparent px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#003087]/5"
            style={{ borderColor: "rgba(0,48,135,0.5)", color: "#003087" }}
          >
            Renew
          </button>
          <button
            className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#003087" }}
          >
            Become a Member
          </button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="py-2.5 text-sm font-medium text-foreground/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <button
                className="rounded-md border bg-transparent px-4 py-2 text-sm font-semibold"
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                Login
              </button>
              <button
                className="rounded-md border bg-transparent px-4 py-2 text-sm font-semibold"
                style={{ borderColor: "rgba(0,48,135,0.5)", color: "#003087" }}
              >
                Renew
              </button>
              <button
                className="rounded-md px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: "#003087" }}
              >
                Become a Member
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
