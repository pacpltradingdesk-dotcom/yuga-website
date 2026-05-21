import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

type NavLink = { href: string; label: string };

const QUICK_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pyrolysis", label: "Pyrolysis" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const waNumber = COMPANY.phone.replace(/\D/g, "");

  return (
    <footer className="bg-brand-navy border-t border-brand-gold/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-2xl font-bold text-brand-gold mb-3">YUGA</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-brand-muted hover:text-brand-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
              <li>{COMPANY.hq}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Connect
            </h3>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold text-sm px-5 py-2.5 hover:opacity-90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 mt-12 pt-6 text-center text-brand-muted text-xs">
          © {new Date().getFullYear()} YUGA — {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
