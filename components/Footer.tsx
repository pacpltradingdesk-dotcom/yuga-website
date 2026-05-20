import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">YUGA</h3>
            <p className="text-sm text-gray-400 mb-2">{COMPANY.tagline}</p>
            <p className="text-sm">{COMPANY.hq}</p>
            <p className="text-sm mt-1">GST: {COMPANY.gst}</p>
            <p className="text-sm">CIN: {COMPANY.cin}</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/why-us", label: "Why Choose Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-green-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <p className="text-sm mb-1">📞 {COMPANY.phone}</p>
            <p className="text-sm mb-1">✉️ {COMPANY.email}</p>
            <p className="text-sm mb-1">🌐 {COMPANY.website}</p>
            <a href="https://wa.me/917795242424" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
