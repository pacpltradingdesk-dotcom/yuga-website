// components/Footer.tsx
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Col 1: Brand */}
        <div>
          <p className="font-display text-2xl font-extrabold mb-1">PACPL</p>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
            YUGA
          </p>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Bio-Bitumen Consulting
          </p>
          <p className="text-white/60 text-sm leading-relaxed">{COMPANY.tagline}</p>
          <p className="text-white/40 text-xs mt-4">{COMPANY.hq}</p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Quick Links
          </p>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/consulting", label: "Consulting" },
              { href: "/it-products", label: "IT Products" },
              { href: "/pyrolysis", label: "Pyrolysis" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <p className="text-white/70 text-sm mb-2">{COMPANY.phone}</p>
          <p className="text-white/70 text-sm mb-6">{COMPANY.email}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors mt-2"
          >
            Send a Message
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            GST: {COMPANY.gst} · PAN: {COMPANY.pan} · CIN: {COMPANY.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}
