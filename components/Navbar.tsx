// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/consulting", label: "Consulting" },
  { href: "/it-products", label: "IT Products" },
  { href: "/pyrolysis", label: "Pyrolysis" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <Logo variant="horizontal" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-all duration-200 ${
                pathname === href
                  ? "text-accent"
                  : "text-secondary hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-accent/10 border border-accent/30 text-accent text-sm font-semibold px-5 py-2 rounded-full hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        >
          Get Consulting
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-primary hover:text-accent transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav 
          id="mobile-nav" 
          aria-label="Mobile navigation" 
          className="absolute top-[72px] left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg font-medium transition-colors ${
                pathname === href ? "text-accent" : "text-primary hover:text-accent"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-base font-semibold px-4 py-3 rounded-xl text-center hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get Consulting
          </Link>
        </nav>
      )}
    </header>
  );
}
