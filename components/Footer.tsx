import Link from "next/link";
import { COMPANY } from "@/lib/company-data";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-surface relative overflow-hidden border-t border-border">
      {/* Subtle glow effect in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12 relative z-10">
        {/* Col 1: Brand */}
        <div className="md:col-span-2 flex flex-col items-start">
          <Link href="/" className="mb-6 group">
            <Logo variant="vertical" className="items-start text-left" />
          </Link>
          <p className="text-secondary text-base leading-relaxed max-w-md">
            {COMPANY.tagline}
          </p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-6">
            Quick Links
          </p>
          <ul className="space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/consulting", label: "Consulting" },
              { href: "/it-products", label: "IT Products" },
              { href: "/pyrolysis", label: "Pyrolysis" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-secondary text-sm hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-6">
            Contact
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-secondary text-sm hover:text-primary transition-colors cursor-pointer">
              <Phone size={16} className="text-accent" />
              <span>{COMPANY.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary text-sm hover:text-primary transition-colors cursor-pointer break-all">
              <Mail size={16} className="text-accent" />
              <span>{COMPANY.email}</span>
            </div>
            <div className="flex items-start gap-3 text-secondary text-sm">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <span>{COMPANY.hq}</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-background border border-border text-primary text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all"
          >
            Send a Message
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-surface-light">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-secondary text-xs">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="flex gap-4 flex-wrap">
            <span>GST: <span className="text-primary/60">{COMPANY.gst}</span></span>
            <span>PAN: <span className="text-primary/60">{COMPANY.pan}</span></span>
            <span>CIN: <span className="text-primary/60">{COMPANY.cin}</span></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
