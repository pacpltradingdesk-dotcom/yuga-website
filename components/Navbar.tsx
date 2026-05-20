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
          <Link href="/" className="flex items-center gap-2.5">
            {/* YUGA-style logo mark */}
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              {/* Outer circle — deep green */}
              <circle cx="21" cy="21" r="21" fill="#14532d" />
              {/* Outer ring arc — lighter green accent */}
              <path d="M8 28 A15 15 0 0 1 8 14" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M34 14 A15 15 0 0 1 34 28" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
              {/* Bold Y shape — roads converging to a single path */}
              <path d="M21 32 L21 19" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M21 19 L12 9" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M21 19 L30 9" stroke="white" strokeWidth="4" strokeLinecap="round" />
              {/* Orange junction dot */}
              <circle cx="21" cy="19" r="3.5" fill="#f97316" />
              {/* Orange base bar — the road */}
              <rect x="14" y="30" width="14" height="3.5" rx="1.75" fill="#f97316" />
            </svg>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-gray-900 font-black text-[15px] tracking-tight leading-none">PPS Anantams</span>
              <span className="text-orange-500 font-bold text-[9px] tracking-[0.15em] uppercase leading-none">Bio Bitumen Consultant</span>
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
