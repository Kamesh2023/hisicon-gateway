import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Membership",
    children: [
      { label: "Join HISI", href: "/membership" },
      { label: "Member Benefits", href: "/membership" },
      { label: "Member Directory", href: "/membership" },
      { label: "Renew Membership", href: "/membership" },
      { label: "FAQ", href: "/membership" },
    ],
  },
  {
    label: "Knowledge",
    children: [
      { label: "Journal (JPSIC)", href: "/journal" },
      { label: "Publications & Guidelines", href: "/education" },
      { label: "Presentations", href: "/education" },
      { label: "Webinars", href: "/education" },
      { label: "AMR Resources", href: "/education" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "HISICON 2026", href: "/events" },
      { label: "CMEs & Workshops", href: "/events" },
      { label: "Webinars", href: "/events" },
      { label: "Gallery", href: "/events" },
    ],
  },
  { label: "Chapters", href: "/chapters" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = scrolled
    ? { backgroundColor: "#ffffff", borderBottom: "1px solid #dde3ee" }
    : {
        backgroundColor: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid transparent",
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur transition-shadow"
      style={headerStyle}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-baseline gap-1.5">
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: "#003087" }}
          >
            HISI
          </span>
          <span
            className="hidden text-xs font-normal sm:inline"
            style={{ color: "#003087" }}
          >
            Hospital Infection Society – India
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#003087]"
                  style={{ color: "#1a2b4a" }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div
                  className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ paddingTop: "6px" }}
                >
                  <div
                    className="rounded-lg bg-white p-2 shadow-lg"
                    style={{ border: "1px solid #dde3ee" }}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.href}
                        className="block rounded-md hover:bg-[#f5f7fa]"
                        style={{
                          fontSize: "14px",
                          color: "#1a2b4a",
                          padding: "10px 16px",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#003087]"
                style={{ color: "#1a2b4a" }}
                activeProps={{ style: { color: "#003087" } }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            className="text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#003087" }}
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
            style={{ backgroundColor: "#2b83ff" }}
          >
            Become a Member
          </button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
          style={{ color: "#1a2b4a" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="bg-white lg:hidden"
          style={{ borderTop: "1px solid #dde3ee" }}
        >
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between py-2.5 text-sm font-medium"
                    style={{ color: "#1a2b4a" }}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform"
                      style={{
                        transform:
                          mobileExpanded === item.label
                            ? "rotate(180deg)"
                            : "none",
                      }}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="flex flex-col pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.href}
                          className="py-2 text-sm"
                          style={{ color: "#1a2b4a" }}
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="py-2.5 text-sm font-medium"
                  style={{ color: "#1a2b4a" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div
              className="mt-3 flex flex-col gap-2 pt-3"
              style={{ borderTop: "1px solid #dde3ee" }}
            >
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
                style={{ backgroundColor: "#2b83ff" }}
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
