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
          <Link href="/" className="flex items-center gap-3">
            {/* YUGA-inspired logo mark: dark navy + gold arrow + star */}
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <defs>
                <linearGradient id="navArrowGold" x1="23" y1="14" x2="23" y2="43" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f0c84a"/>
                  <stop offset="55%" stopColor="#c98a28"/>
                  <stop offset="100%" stopColor="#7c4a10"/>
                </linearGradient>
                <linearGradient id="navStarGold" x1="23" y1="2" x2="23" y2="12" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fffde8"/>
                  <stop offset="35%" stopColor="#f5d060"/>
                  <stop offset="100%" stopColor="#c98a28"/>
                </linearGradient>
              </defs>
              {/* Dark navy background */}
              <rect width="46" height="46" rx="11" fill="#0d1b3e"/>
              {/* Upward arrow: tip → left wing → left stem → bottom → right stem → right wing */}
              <path d="M23 14 L10 29 L19 29 L19 43 L27 43 L27 29 L36 29 Z" fill="url(#navArrowGold)"/>
              {/* 5-pointed star at tip */}
              <polygon
                points="23,3 24.3,6.8 28.4,6.8 25.1,9.2 26.4,13 23,10.6 19.6,13 20.9,9.2 17.6,6.8 21.7,6.8"
                fill="url(#navStarGold)"
              />
            </svg>
            <div className="flex flex-col leading-none gap-1">
              <span className="font-serif font-black text-[17px] text-[#0d1b3e] leading-none tracking-tight">PPS Anantams</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-amber-600 uppercase leading-none">Bio Bitumen Consultant</span>
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
