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

function YugaArrowStar({ size = 48 }: { size?: number }) {
  const w = size;
  const h = Math.round(size * 0.78);
  return (
    <svg width={w} height={h} viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Main arrow face — warm gold to bronze */}
        <linearGradient id="arrowFace" x1="20" y1="13" x2="40" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5d060" />
          <stop offset="30%" stopColor="#d4952a" />
          <stop offset="70%" stopColor="#b07020" />
          <stop offset="100%" stopColor="#7a4210" />
        </linearGradient>
        {/* Left-lit bevel highlight — lighter than main */}
        <linearGradient id="arrowBevelL" x1="15" y1="13" x2="30" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f8e888" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#e0a030" stopOpacity="0.2" />
        </linearGradient>
        {/* Right shadow edge — darker */}
        <linearGradient id="arrowBevelR" x1="45" y1="13" x2="30" y2="47" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5a2e08" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#2a1204" stopOpacity="0.2" />
        </linearGradient>
        {/* Star: bright white core to gold */}
        <radialGradient id="starFill" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fffef0" />
          <stop offset="25%" stopColor="#fff8c0" />
          <stop offset="60%" stopColor="#f0c040" />
          <stop offset="100%" stopColor="#c07818" />
        </radialGradient>
        {/* Star glow halo */}
        <radialGradient id="starHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5d850" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#f5d850" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f5d850" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Star glow halo */}
      <circle cx="30" cy="6" r="10" fill="url(#starHalo)" />

      {/* ── Arrow shape ──
          Wide-winged upward arrow matching YUGA proportions:
          tip → left-wing → left-stem-top → left-stem-bottom → right-stem-bottom → right-stem-top → right-wing → tip
      */}
      {/* Main face */}
      <path d="M30 13 L5 33 L21 33 L21 47 L39 47 L39 33 L55 33 Z" fill="url(#arrowFace)" />
      {/* Left lit face overlay */}
      <path d="M30 13 L5 33 L21 33 L21 47" stroke="url(#arrowBevelL)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      {/* Right shadow face overlay */}
      <path d="M30 13 L55 33 L39 33 L39 47" stroke="url(#arrowBevelR)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />

      {/* 5-pointed star — center (30,6), outer R=5.5, inner R=2.4 */}
      <polygon
        points="30,0.5 31.6,4.6 36.1,4.6 32.6,7.2 33.8,11.3 30,8.7 26.2,11.3 27.4,7.2 23.9,4.6 28.4,4.6"
        fill="url(#starFill)"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-[#0d1b3e] shadow-xl border-b border-[#1e3060]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">

          {/* YUGA-style stacked logo */}
          <Link href="/" className="flex flex-col items-center gap-0 group">
            <YugaArrowStar size={44} />
            <span className="font-serif font-black text-white text-[15px] leading-none tracking-tight -mt-0.5 group-hover:text-amber-300 transition-colors">
              PPS Anantams
            </span>
            <span className="text-[7px] font-bold tracking-[0.22em] text-amber-500 uppercase leading-none mt-0.5">
              Bio Bitumen Consultant
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-gray-300 hover:text-amber-400 text-sm font-medium transition-colors tracking-wide">
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-[#0d1b3e] px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-md shadow-amber-900/30">
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-[#1e3060] flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-gray-300 hover:text-amber-400 text-sm font-medium px-2 py-1"
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className="bg-amber-500 text-[#0d1b3e] px-4 py-2 rounded-lg text-sm font-bold text-center mt-1"
              onClick={() => setMenuOpen(false)}>
              Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
