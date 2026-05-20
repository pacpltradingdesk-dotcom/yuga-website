"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pyrolysis", label: "Pyrolysis" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <rect width="38" height="38" rx="8" fill="#16a34a" />
              <path d="M6 28 L10 14 L19 22 L28 10 L32 28 Z" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              <circle cx="19" cy="22" r="2.5" fill="#f97316" />
              <rect x="6" y="29" width="26" height="3" rx="1.5" fill="#f97316" opacity="0.7" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-green-700 font-black text-base tracking-tight">PPS Anantams</span>
              <span className="text-orange-500 font-semibold text-[10px] tracking-widest uppercase">Bio Bitumen Consultant</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Free Consultation
            </Link>
          </div>
          <button className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-gray-600 hover:text-green-600 text-sm font-medium px-2"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
              onClick={() => setMenuOpen(false)}>
              Get Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
