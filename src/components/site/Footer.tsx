import { ShieldPlus, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const quickLinks = ["About Us", "Membership", "Education", "Events", "Journal", "Chapters", "Contact Us"];

export function Footer() {
  return (
    <footer className="bg-primary-darker text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <ShieldPlus className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <span className="text-base font-bold">HISI</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Hospital Infection Society – India is the country's premier
              academic society advancing infection prevention, control and
              antimicrobial stewardship since 1991.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/50">
              Registered Society · Established 1991 · CIN: Pending verification
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 transition-colors hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  HISI National Secretariat,<br />
                  New Delhi – 110 001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>secretary@hisindia.net</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+91 98XXX XXXXX (Secretariat)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/60">
              Subscribe to our newsletter for AMR updates, guidelines and
              upcoming CME announcements.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>© 2025 Hospital Infection Society – India. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
