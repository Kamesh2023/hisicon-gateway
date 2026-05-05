import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldPlus className="h-5 w-5" strokeWidth={2.25} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-primary">HISI</span>
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
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button className="rounded-md border border-primary/25 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
            Login
          </button>
          <button className="rounded-md border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
            Renew
          </button>
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent-dark">
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
              <button className="rounded-md border border-primary/25 px-4 py-2 text-sm font-semibold text-primary">
                Login
              </button>
              <button className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                Become a Member
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
