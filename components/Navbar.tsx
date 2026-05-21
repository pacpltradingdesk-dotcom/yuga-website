"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pyrolysis", label: "Pyrolysis" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-md"
          : "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold text-primary tracking-tight"
        >
          YUGA
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, -1).map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  pathname === href ? "text-accent font-semibold" : "text-secondary"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
              pathname === "/contact" ? "text-accent font-semibold" : "text-secondary"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-50 flex flex-col items-center justify-center gap-10">
          <ul className="flex flex-col items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-bold transition-colors hover:text-accent ${
                    pathname === href ? "text-accent" : "text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
