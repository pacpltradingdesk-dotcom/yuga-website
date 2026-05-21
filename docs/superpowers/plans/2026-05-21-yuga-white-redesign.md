# YUGA White Glassmorphism Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark navy + gold visual theme with a modern white glassmorphism design using Poppins font and #2563EB blue accent — all content stays identical.

**Architecture:** Swap Tailwind v4 `@theme` tokens in `globals.css` (brand-* → white/surface/accent), replace Inter+Playfair with Poppins in `layout.tsx`, then update every component and page to use the new tokens and glass patterns. No data layer changes.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, Tailwind CSS v4, Poppins via `next/font/google`

---

## ⚠️ Before You Start

Read `node_modules/next/dist/docs/` for Next.js 16-specific APIs before writing code — per project `AGENTS.md`. The project uses Tailwind CSS **v4** — tokens live in `app/globals.css` `@theme {}` block, NOT in `tailwind.config.js`. No `tailwind.config.js` exists.

---

## File Map

**Modify only — no new files:**
- `app/globals.css` — swap brand-* tokens for white-theme tokens
- `app/layout.tsx` — Poppins replaces Inter + Playfair_Display
- `components/Navbar.tsx` — glass white nav
- `components/Footer.tsx` — white footer
- `components/PageHeader.tsx` — light surface header
- `components/HeroVideo.tsx` — replace video with glass card hero
- `components/StatsBar.tsx` — blue numbers on white
- `components/ServiceCard.tsx` — glass card
- `components/NetworkGrid.tsx` — white table, blue header
- `components/TimelineSection.tsx` — white cards, blue timeline
- `components/WhyNowSection.tsx` — surface bg, white cards
- `components/ContactForm.tsx` — white card, blue focus
- `app/page.tsx` — home page layout
- `app/about/page.tsx` — about page layout
- `app/services/page.tsx` — services page layout
- `app/why-us/page.tsx` — why us layout
- `app/pyrolysis/page.tsx` — pyrolysis layout
- `app/contact/page.tsx` — contact layout
- `app/thank-you/page.tsx` — thank you page
- `app/not-found.tsx` — 404 page

---

## Task 1: Design Tokens + Poppins Font

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/globals.css`**

```css
@import "tailwindcss";

@theme {
  /* White theme palette */
  --color-white: #FFFFFF;
  --color-surface: #F8FAFC;
  --color-primary: #000000;
  --color-secondary: #666666;
  --color-accent: #2563EB;
  --color-accent-light: #EFF6FF;
  --color-accent-border: #DBEAFE;
  --color-border: #E5E7EB;

  /* Poppins for both display and body */
  --font-sans: var(--font-poppins), system-ui, sans-serif;
  --font-display: var(--font-poppins), system-ui, sans-serif;
}

body {
  background-color: var(--color-white);
  color: var(--color-primary);
}
```

- [ ] **Step 2: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YUGA — Bio-Modified Bitumen Consulting",
  description: "India's leading bio-bitumen plant setup and consulting firm. 25 years experience, 10 plants built, 4,452 industry contacts. Complete A-to-Z service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-white`}>
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Run tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 tests pass (layout change doesn't break component tests).

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: switch to white theme tokens and Poppins font"
```

---

## Task 2: Navbar Redesign

**Files:**
- Modify: `components/Navbar.tsx`

Tests at `__tests__/Navbar.test.tsx` check: YUGA logo renders, all 6 nav links render, mobile menu toggles. These pass without changes since text content doesn't change — only classes do.

- [ ] **Step 1: Run existing Navbar test to confirm baseline**

```bash
npm test -- --testPathPattern=Navbar --watchAll=false
```

Expected: PASS (3 tests).

- [ ] **Step 2: Replace `components/Navbar.tsx`**

```tsx
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
```

- [ ] **Step 3: Run Navbar test**

```bash
npm test -- --testPathPattern=Navbar --watchAll=false
```

Expected: PASS (3 tests).

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: redesign Navbar — white glass, blue accent, Poppins"
```

---

## Task 3: Footer Redesign

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Run existing Footer test**

```bash
npm test -- --testPathPattern=Footer --watchAll=false
```

Expected: PASS.

- [ ] **Step 2: Replace `components/Footer.tsx`**

```tsx
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
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-2xl font-extrabold text-primary mb-3 tracking-tight">
              YUGA
            </p>
            <p className="text-secondary text-sm leading-relaxed">{COMPANY.tagline}</p>
          </div>

          <div>
            <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-secondary hover:text-accent text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-secondary">
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
              <li>{COMPANY.hq}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-5">
              Connect
            </h3>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <span aria-hidden="true">💬</span>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-secondary text-xs">
          © {new Date().getFullYear()} YUGA — {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Run Footer test**

```bash
npm test -- --testPathPattern=Footer --watchAll=false
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: redesign Footer — white bg, blue accent links, green WhatsApp"
```

---

## Task 4: PageHeader Redesign

**Files:**
- Modify: `components/PageHeader.tsx`

- [ ] **Step 1: Run existing PageHeader test**

```bash
npm test -- --testPathPattern=PageHeader --watchAll=false
```

Expected: PASS (3 tests).

- [ ] **Step 2: Replace `components/PageHeader.tsx`**

```tsx
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-surface py-16 px-6 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-light via-white to-accent-border rounded-full opacity-60 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-primary font-extrabold max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-secondary text-lg mt-4 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-accent rounded-full mt-6" />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run PageHeader test**

```bash
npm test -- --testPathPattern=PageHeader --watchAll=false
```

Expected: PASS (3 tests).

- [ ] **Step 4: Commit**

```bash
git add components/PageHeader.tsx
git commit -m "feat: redesign PageHeader — white surface, blue breadcrumb, gradient blob"
```

---

## Task 5: Hero Section (HeroVideo replacement)

**Files:**
- Modify: `components/HeroVideo.tsx`

The video element is removed entirely — replaced with a static glassmorphism hero card. No `"use client"` needed since there is no browser state.

- [ ] **Step 1: Replace `components/HeroVideo.tsx`**

```tsx
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroVideo() {
  return (
    <section className="relative bg-surface min-h-[90vh] flex items-center px-6 py-20 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-light via-white to-accent-border rounded-full opacity-70 blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent-border to-white rounded-full opacity-40 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            India&apos;s Leading Bio-Bitumen Consultant
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight tracking-tight mb-6">
            India&apos;s{" "}
            <span className="text-accent">Bio-Bitumen</span>{" "}
            Revolution
          </h1>

          {/* Subtext */}
          <p className="text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            End-to-end plant setup consulting — from site selection to commercial production.{" "}
            {COMPANY.yearsExperience} years experience. {COMPANY.plantsBuilt} plants built.{" "}
            {COMPANY.industryContacts.toLocaleString("en-IN")} verified industry contacts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white text-accent font-semibold px-8 py-4 rounded-xl border border-accent-border hover:bg-accent-light transition-all duration-200 text-center"
            >
              Our Services →
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border">
            {[
              { value: `${COMPANY.yearsExperience}+`, label: "Years Experience" },
              { value: String(COMPANY.plantsBuilt), label: "Plants Built" },
              { value: COMPANY.industryContacts.toLocaleString("en-IN") + "+", label: "Industry Contacts" },
              { value: "3", label: "Service Verticals" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center min-w-[80px]">
                <p className="text-2xl font-extrabold text-accent">{value}</p>
                <p className="text-secondary text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 3: Commit**

```bash
git add components/HeroVideo.tsx
git commit -m "feat: replace HeroVideo with static glass hero — no video dependency"
```

---

## Task 6: StatsBar Redesign

**Files:**
- Modify: `components/StatsBar.tsx`

- [ ] **Step 1: Run existing StatsBar test**

```bash
npm test -- --testPathPattern=StatsBar --watchAll=false
```

Expected: PASS.

- [ ] **Step 2: Replace `components/StatsBar.tsx`**

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/company-data";

const STATS = [
  { value: COMPANY.yearsExperience, label: "Years Experience", suffix: "+" },
  { value: COMPANY.plantsBuilt, label: "Plants Built", suffix: "" },
  { value: COMPANY.industryContacts, label: "Industry Contacts", suffix: "+" },
  { value: 3, label: "Service Verticals", suffix: "" },
];

function StatCard({
  value,
  label,
  suffix,
  active,
}: {
  value: number;
  label: string;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(value / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [active, value]);

  return (
    <div className="text-center px-8 py-10">
      <p className="text-4xl md:text-5xl font-extrabold text-accent">
        {active ? count.toLocaleString("en-IN") : "0"}
        {suffix}
      </p>
      <p className="text-secondary text-sm font-medium mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Run StatsBar test**

```bash
npm test -- --testPathPattern=StatsBar --watchAll=false
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add components/StatsBar.tsx
git commit -m "feat: redesign StatsBar — blue numbers on white, border dividers"
```

---

## Task 7: ServiceCard Redesign

**Files:**
- Modify: `components/ServiceCard.tsx`

- [ ] **Step 1: Run existing ServiceCard test**

```bash
npm test -- --testPathPattern=ServiceCard --watchAll=false
```

Expected: PASS.

- [ ] **Step 2: Replace `components/ServiceCard.tsx`**

```tsx
import { FOUR_STAGES } from "@/lib/company-data";
type FourStage = (typeof FOUR_STAGES)[0];

interface ServiceCardProps {
  stage: FourStage;
}

export default function ServiceCard({ stage }: ServiceCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-accent uppercase tracking-widest">
          Stage {stage.stage}
        </span>
        <span className="text-2xl" aria-hidden="true">{stage.icon}</span>
      </div>
      <h3 className="font-display text-lg text-primary font-bold leading-snug">{stage.name}</h3>
      <p className="text-secondary text-sm leading-relaxed flex-1">{stage.description}</p>
      {(stage.capex || stage.manpower) && (
        <div className="border-t border-border pt-4 grid grid-cols-2 gap-3 text-xs">
          {stage.capex && (
            <div>
              <p className="text-accent font-semibold">CapEx</p>
              <p className="text-secondary">{stage.capex}</p>
            </div>
          )}
          {stage.manpower && (
            <div>
              <p className="text-accent font-semibold">Manpower</p>
              <p className="text-secondary">{stage.manpower}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Run ServiceCard test**

```bash
npm test -- --testPathPattern=ServiceCard --watchAll=false
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add components/ServiceCard.tsx
git commit -m "feat: redesign ServiceCard — glass white card, blue top border, hover lift"
```

---

## Task 8: NetworkGrid, TimelineSection, WhyNowSection, ContactForm

**Files:**
- Modify: `components/NetworkGrid.tsx`
- Modify: `components/TimelineSection.tsx`
- Modify: `components/WhyNowSection.tsx`
- Modify: `components/ContactForm.tsx`

- [ ] **Step 1: Replace `components/NetworkGrid.tsx`**

```tsx
import { INDUSTRY_NETWORK } from "@/lib/company-data";

const ROWS = [
  { label: "Road Contractors", key: "contractors" as const },
  { label: "Bitumen Traders", key: "traders" as const },
  { label: "Importers", key: "importers" as const },
  { label: "Transporters", key: "transporters" as const },
  { label: "Manufacturers", key: "manufacturers" as const },
  { label: "Decanters", key: "decanters" as const },
];

export default function NetworkGrid() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-accent">
            <th className="text-white font-semibold text-left px-6 py-4 uppercase tracking-widest text-xs">
              Contact Type
            </th>
            <th className="text-white font-semibold text-right px-6 py-4 uppercase tracking-widest text-xs">
              Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ label, key }, i) => (
            <tr
              key={key}
              className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-surface"}`}
            >
              <td className="text-secondary px-6 py-4">{label}</td>
              <td className="text-primary font-bold text-right px-6 py-4">
                {INDUSTRY_NETWORK[key].toLocaleString("en-IN")}
              </td>
            </tr>
          ))}
          <tr className="bg-accent-light border-t-2 border-accent-border">
            <td className="text-accent font-bold px-6 py-4">Total Network</td>
            <td className="text-accent font-extrabold text-right px-6 py-4 text-lg">
              {INDUSTRY_NETWORK.total.toLocaleString("en-IN")}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 2: Replace `components/TimelineSection.tsx`**

```tsx
import { CAREER_TRACK } from "@/lib/company-data";

export default function TimelineSection() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Career Track
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-16">
          25 Years of Plant Builds
        </h2>

        <div className="relative">
          {/* Vertical blue line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30" />

          <div className="space-y-8">
            {CAREER_TRACK.map((item, i) => (
              <div key={i} className="relative flex gap-6 pl-16">
                {/* Blue dot */}
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-accent ring-4 ring-white ring-offset-2 -translate-x-1/2" />

                <div className="bg-white border border-border rounded-2xl p-5 flex-1 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="bg-accent-light text-accent font-bold text-sm px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span className="text-xs text-secondary bg-surface px-2 py-1 rounded-lg font-semibold uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="text-primary font-semibold mb-1">{item.company}</h3>
                  <p className="text-secondary text-sm">{item.plantType}</p>
                  <p className="text-secondary/60 text-xs mt-1">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Replace `components/WhyNowSection.tsx`**

```tsx
import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowSection() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Timing
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Now?
        </h2>
        <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          {WHY_NOW.map((point, i) => (
            <div
              key={point}
              className="flex gap-4 bg-white border border-border border-l-4 border-l-accent rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            >
              <span className="text-accent font-extrabold text-xl shrink-0 font-display">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-secondary leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/why-us"
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200"
          >
            See All Advantages →
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Replace `components/ContactForm.tsx`**

```tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full bg-white border border-border rounded-xl px-4 py-3 text-primary placeholder-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200";

export default function ContactForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setError("Could not send message. Please try WhatsApp or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or contact us via WhatsApp.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-6">
      <div>
        <label htmlFor="name" className="block text-primary text-sm font-medium mb-2">
          Full Name *
        </label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-primary text-sm font-medium mb-2">
          Email Address *
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-primary text-sm font-medium mb-2">
          Phone / WhatsApp
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-primary text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3 rounded-xl">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-accent text-white font-semibold py-4 rounded-xl text-sm shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
```

- [ ] **Step 5: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 6: Commit**

```bash
git add components/NetworkGrid.tsx components/TimelineSection.tsx components/WhyNowSection.tsx components/ContactForm.tsx
git commit -m "feat: redesign NetworkGrid, TimelineSection, WhyNowSection, ContactForm — white theme"
```

---

## Task 9: Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import StatsBar from "@/components/StatsBar";
import WhyNowSection from "@/components/WhyNowSection";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, PYROLYSIS_FEEDSTOCKS } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YUGA — India's Bio-Bitumen Consulting Leader",
  description:
    "India's leading bio-bitumen plant setup and consulting firm. 25 years experience, 10 plants built, 4,452 industry contacts. Complete A-to-Z service.",
  openGraph: {
    title: "YUGA — India's Bio-Bitumen Consulting Leader",
    description: "End-to-end bio-bitumen plant setup consulting. From site selection to commercial production.",
    type: "website",
  },
};

const SERVICE_VERTICALS = [
  {
    icon: "🏭",
    title: "Bio-Bitumen Consulting",
    description: "End-to-end plant setup — site selection, regulatory clearances, machinery, commissioning, and buyer network access.",
    href: "/services#bio-bitumen",
  },
  {
    icon: "📋",
    title: "Project Management (PMC)",
    description: "Full PMC scope from feasibility report to plant handover — with optional monthly retainer support.",
    href: "/services#pmc",
  },
  {
    icon: "💻",
    title: "IT Solutions",
    description: "Custom portals, dashboards, and supply chain tools built specifically for the bitumen and industrial sector.",
    href: "/services#it",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBar />

      {/* Services Overview */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
            Three Verticals, One Vision
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICE_VERTICALS.map(({ icon, title, description, href }) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="font-display text-lg text-primary font-bold">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed flex-1">{description}</p>
                <Link href={href} className="text-accent text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <WhyNowSection />

      {/* Pyrolysis Teaser */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Technology
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-4">
            How Pyrolysis Works
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Four integrated stages convert agro-waste into commercial bio-bitumen for India's road network.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pyrolysis"
              className="inline-block bg-white text-accent font-semibold px-6 py-3 rounded-xl border border-accent-border hover:bg-accent-light transition-all duration-200 text-sm"
            >
              Deep Dive into Pyrolysis →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-accent py-16 px-6 text-center">
        <h2 className="font-display text-3xl text-white font-bold mb-4">
          Ready to Build Your Plant?
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Join 10 successful plant operators who trusted YUGA for their bio-bitumen journey.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Start Your Project
        </Link>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign Home page — white glass theme, blue accents"
```

---

## Task 10: About Page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Replace `app/about/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatsBar from "@/components/StatsBar";
import TimelineSection from "@/components/TimelineSection";
import { COMPANY, KEY_CREDENTIALS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About YUGA — Prince Pratap Shah",
  description:
    "Meet the founder of YUGA — Prince Pratap Shah. 25 years in the bitumen industry, 10 plants built, BSE-listed entrepreneur.",
  openGraph: {
    title: "About YUGA",
    description: "25 years of bitumen expertise behind India's leading bio-bitumen consultant.",
    type: "website",
  },
};

const CREDENTIAL_ICONS: Record<string, string> = {
  "BSE-Listed Founder — Omnipotent Industries (1.2L MT, 11 JVs)": "📈",
  "Int'l Import Contracts — 2.4 Lakh MT/yr VG-30 (Iraq/USA)": "🌍",
  "Proven Consultant — 2 paid projects (Teknobit 2016 & 2024)": "✅",
  "5 Product Types — Emulsion/Blown/CRMB/PMB/VG30": "⚗️",
  "17-State Distribution — PAN India network, first of its kind": "🗺️",
  "Pride of India Award — Best Fast-Growing Business 2021": "🏆",
  "Iran Consulate — Direct meeting for bitumen sourcing": "🤝",
  "Bitumen India Forum — Founder Member": "🏛️",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About YUGA"
        subtitle="India's most experienced bio-bitumen consultant — built on 25 years of hands-on industry expertise"
        breadcrumb="About"
      />

      {/* Founder Bio */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-48 h-48 rounded-full bg-accent-light border-4 border-accent flex items-center justify-center mx-auto md:mx-0 mb-6">
              <span className="text-6xl" aria-hidden="true">👤</span>
            </div>
            <h2 className="font-display text-3xl text-primary font-bold mb-1">{COMPANY.owner}</h2>
            <p className="text-accent font-semibold text-sm mb-4 uppercase tracking-widest">Founder & Managing Director</p>
          </div>
          <div>
            <p className="text-secondary leading-relaxed mb-4">{COMPANY.experience}</p>
            <p className="text-secondary leading-relaxed mb-4">{COMPANY.education}</p>
            <p className="text-secondary leading-relaxed">{COMPANY.awards}</p>
          </div>
        </div>
      </section>

      <StatsBar />

      <TimelineSection />

      {/* Credentials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Credentials
          </p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">
            Why Trust YUGA?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {KEY_CREDENTIALS.map((credential) => (
              <div
                key={credential}
                className="bg-white/70 backdrop-blur-md border border-border border-t-4 border-t-accent rounded-2xl p-6 flex gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {CREDENTIAL_ICONS[credential] ?? "✅"}
                </span>
                <p className="text-secondary text-sm leading-relaxed">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: redesign About page — white theme, blue accents"
```

---

## Task 11: Services Page

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Replace `app/services/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — YUGA",
  description:
    "Bio-bitumen plant consulting, project management (PMC), and IT solutions for the industrial bitumen sector. End-to-end A-to-Z service.",
  openGraph: {
    title: "Services — YUGA",
    description: "Three service verticals: Bio-Bitumen Consulting, PMC, and IT Solutions.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Three verticals built around one mission — making bio-bitumen accessible to every Indian investor"
        breadcrumb="Services"
      />

      {/* Sticky tab nav */}
      <nav
        className="sticky top-[72px] z-40 bg-white border-b border-border"
        aria-label="Service sections"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
          {[
            { href: "#bio-bitumen", label: "Bio-Bitumen Consulting" },
            { href: "#pmc", label: "Project Management" },
            { href: "#it", label: "IT Solutions" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 py-4 text-sm font-semibold text-secondary hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 01</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <h3 className="font-display text-2xl text-primary font-bold mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <div key={category} className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <h4 className="text-accent font-semibold mb-4 text-sm uppercase tracking-widest">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-secondary text-sm">
                      <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PMC Section */}
      <section id="pmc" className="bg-white py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 02</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Project Management Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service) => (
              <div key={service.category} className="bg-white border border-border border-l-4 border-l-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                  <h3 className="text-primary font-bold">{service.category}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-secondary text-xs">
                      <span className="text-accent shrink-0" aria-hidden="true">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Solutions Section */}
      <section id="it" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Service 03</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">IT Solutions</h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Custom software built for the bitumen and industrial sector — portals, dashboards, and supply chain tools.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {IT_SERVICES.map((service) => (
              <div key={service.name} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                  <h3 className="text-primary font-bold">{service.name}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-secondary/70 text-xs italic mb-4 border-l-2 border-accent-border pl-3">
                  {service.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent-light text-accent border border-accent-border px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-white font-bold mb-4">Which Service Do You Need?</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll recommend the right scope.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: redesign Services page — white theme, glass cards, blue accents"
```

---

## Task 12: Why Us + Pyrolysis Pages

**Files:**
- Modify: `app/why-us/page.tsx`
- Modify: `app/pyrolysis/page.tsx`

- [ ] **Step 1: Replace `app/why-us/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyNowSection from "@/components/WhyNowSection";
import NetworkGrid from "@/components/NetworkGrid";
import { PPS_STRENGTHS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Why Choose YUGA — Bio-Bitumen Consulting",
  description:
    "25 years experience, 4,452 industry contacts, international VG-30 supply contract. Here's why YUGA is India's most trusted bio-bitumen consultant.",
  openGraph: {
    title: "Why Choose YUGA",
    description: "The unmatched advantages of India's most experienced bio-bitumen consultant.",
    type: "website",
  },
};

const STRENGTH_ICONS: Record<string, string> = {
  "25 years bitumen industry experience — 10 plants built": "🏭",
  "4,452 live industry contacts (contractors, traders, importers)": "🤝",
  "International VG-30 supply contract (2.4 Lakh MT/yr, Getka USA-Iraq)": "🌍",
  "Only consultant offering end-to-end: site selection to sales network": "🔗",
  "BSE-listed founder background (Omnipotent Industries)": "📈",
  "5 product types expertise (Emulsion/Blown/CRMB/PMB/VG30)": "🗺️",
  "17-state distribution network — first of its kind": "🏆",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        title="Why Choose YUGA?"
        subtitle="The only consultant in India offering end-to-end bio-bitumen plant setup with a proven buyer network"
        breadcrumb="Why Us"
      />

      {/* Strengths grid */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Our Advantages</p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">What Sets YUGA Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PPS_STRENGTHS.map((strength) => (
              <div key={strength} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl shrink-0" aria-hidden="true">{STRENGTH_ICONS[strength] ?? "✅"}</span>
                <p className="text-secondary leading-relaxed text-sm">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Network */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Live Industry Network</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-4">4,452 Verified Contacts</h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-10">
            Built over 25 years — contractors, traders, importers, and manufacturers across 17 states.
          </p>
          <div className="max-w-2xl mx-auto">
            <NetworkGrid />
          </div>
        </div>
      </section>

      {/* GETKA Highlight */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-4xl mx-auto border-2 border-accent rounded-2xl p-10 text-center bg-white shadow-sm">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">International Supply Contract</p>
          <h2 className="font-display text-3xl text-primary font-bold mb-4">GETKA Energy Trading LLC</h2>
          <p className="text-secondary mb-2">Getka Energy Trading LLC, USA (Iraq Origin)</p>
          <p className="text-4xl font-extrabold text-accent mb-2">2.4 Lakh MT/Year</p>
          <p className="text-secondary text-sm">VG-30 International Supply Contract</p>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-6" />
        </div>
      </section>

      <WhyNowSection />
    </>
  );
}
```

- [ ] **Step 2: Replace `app/pyrolysis/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PYROLYSIS_FEEDSTOCKS, PYROLYSIS_OUTPUTS, PYROLYSIS_PRODUCTS } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pyrolysis Technology — YUGA",
  description:
    "How pyrolysis converts biomass and waste into bio-oil, bio-char, and syngas. India's first commercially produced bio-bitumen technology explained.",
  openGraph: {
    title: "Pyrolysis Technology — YUGA",
    description: "Deep dive into the pyrolysis process behind India's bio-bitumen revolution.",
    type: "website",
  },
};

const PROCESS_STEPS = [
  { step: "01", title: "Feedstock Collection", desc: "Agro-waste collected within 50–100 km radius from farms" },
  { step: "02", title: "Pelletization", desc: "Biomass processed into uniform high-density pellets" },
  { step: "03", title: "Pyrolysis Reactor", desc: "Heated at 450–550°C in absence of oxygen — thermal decomposition" },
  { step: "04", title: "Product Separation", desc: "Bio-oil, bio-char, and syngas separated and collected" },
  { step: "05", title: "Bio-Oil Refining", desc: "Oxidation at 230–250°C upgrades bio-oil for bitumen blending" },
  { step: "06", title: "VG-30 Blending", desc: "15–30% bio-oil blended with conventional petroleum bitumen" },
];

const MARKET_STATS = [
  { label: "Bio-Bitumen Launch", value: "Jan 2026", note: "India first country globally (CSIR-CRRI)" },
  { label: "Conventional Bitumen Replaceable", value: "15–30%", note: "Per road project" },
  { label: "Annual Savings Potential", value: "Rs 4,500 Cr+", note: "On bitumen import bill" },
  { label: "Plants Needed (5–7 Years)", value: "130–216", note: "Across India" },
  { label: "India Bitumen Import Bill", value: "Rs 25,000 Cr/yr", note: "49% imported — target: full replacement" },
];

const GOVT_POLICIES = [
  "CSIR-CRRI technology transfer to 14 companies — Jan 2026",
  "Ministry of Road Transport & Highways mandate for bio-bitumen trials",
  "MNRE Waste-to-Energy targets — 5,000 MW potential",
  "SATAT scheme for BioCNG from pyrolysis syngas",
  "EPR regulations mandating formal tyre recycling — guaranteed feedstock",
  "Swachh Bharat Mission supporting Waste-to-Energy conversion",
];

export default function PyrolysisPage() {
  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="How biomass and waste become India's next-generation road material"
        breadcrumb="Pyrolysis"
      />

      {/* Process Flow */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">The Process</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">From Waste to Road — 6 Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-white border border-border border-l-4 border-l-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <p className="font-display text-3xl font-bold text-accent mb-3">{step.step}</p>
                <h3 className="text-primary font-semibold mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Raw Materials</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">What Goes In</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_FEEDSTOCKS.map((f) => (
              <div key={f.name} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{f.icon}</span>
                  <h3 className="text-primary font-bold">{f.name}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-3">{f.description}</p>
                <p className="text-accent text-xs font-semibold">{f.indiaVolume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Products</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">What Comes Out</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYROLYSIS_OUTPUTS.map((o) => (
              <div key={o.name} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{o.icon}</span>
                  <h3 className="text-primary font-bold text-base">{o.name}</h3>
                </div>
                <p className="text-accent text-xs font-semibold mb-1">{o.yieldRange}</p>
                <ul className="space-y-1 mt-3">
                  {o.uses.slice(0, 3).map((u) => (
                    <li key={u} className="flex gap-2 text-secondary text-xs">
                      <span className="text-accent shrink-0" aria-hidden="true">→</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">India Market</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">The Opportunity in Numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-white border border-border rounded-2xl p-6 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <p className="font-display text-3xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-primary font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-secondary text-xs">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Govt Policy */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">Policy Tailwinds</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">Government Support</h2>
          <ul className="space-y-4">
            {GOVT_POLICIES.map((policy, i) => (
              <li key={policy} className="flex gap-4 bg-white border border-border border-l-4 border-l-accent rounded-2xl p-5">
                <span className="text-accent font-bold text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-secondary leading-relaxed">{policy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value-added Products */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">High-Value Outputs</p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">Value-Added Products</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_PRODUCTS.map((p) => (
              <div key={p.name} className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                  <h3 className="text-primary font-bold">{p.name}</h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="bg-accent-light border-l-4 border-accent px-4 py-2 rounded-r-xl">
                  <p className="text-accent text-xs font-semibold">{p.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-white font-bold mb-4">Ready to Build Your Pyrolysis Plant?</h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
        >
          Talk to an Expert
        </Link>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 4: Commit**

```bash
git add app/why-us/page.tsx app/pyrolysis/page.tsx
git commit -m "feat: redesign Why Us and Pyrolysis pages — white theme"
```

---

## Task 13: Contact, Thank You, Not Found Pages

**Files:**
- Modify: `app/contact/page.tsx`
- Modify: `app/thank-you/page.tsx`
- Modify: `app/not-found.tsx`

- [ ] **Step 1: Replace `app/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact YUGA — Bio-Bitumen Consulting",
  description:
    "Get in touch with YUGA for bio-bitumen plant setup consulting. Call, WhatsApp, or email us. Based in Vadodara, Gujarat.",
  openGraph: {
    title: "Contact YUGA",
    description: "Start your bio-bitumen project today — talk to India's leading consultant.",
    type: "website",
  },
};

const CONTACT_DETAILS = [
  { icon: "📞", label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
  { icon: "✉️", label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: "📍", label: "Headquarters", value: COMPANY.hq, href: null },
];

export default function ContactPage() {
  const waNumber = COMPANY.phone.replace(/\D/g, "");

  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Start your bio-bitumen project — we respond within 24 hours"
        breadcrumb="Contact"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">Reach Us</p>
            <div className="space-y-4 mb-10">
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <div key={label} className="bg-surface border border-border rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
                  <div>
                    <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-primary hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <p className="text-primary">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/${waNumber}?text=Hi%20YUGA%2C%20I%20am%20interested%20in%20bio-bitumen%20plant%20setup%20consulting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              <span className="text-xl" aria-hidden="true">💬</span>
              WhatsApp Us Now
            </a>
          </div>

          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-6">Send a Message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Replace `app/thank-you/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Message Sent — YUGA",
  description: "Thank you for contacting YUGA. We will get back to you within 24 hours.",
};

export default function ThankYouPage() {
  const waNumber = COMPANY.phone.replace(/\D/g, "");

  return (
    <section className="bg-surface min-h-screen flex items-center justify-center px-6">
      <div className="bg-white border border-border rounded-2xl shadow-sm p-12 text-center max-w-lg w-full">
        <div className="text-6xl mb-6" aria-hidden="true">✅</div>
        <h1 className="font-display text-4xl text-primary font-bold mb-4">Message Sent!</h1>
        <p className="text-secondary leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          For urgent queries, WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent-border text-accent font-bold px-6 py-3 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Replace `app/not-found.tsx`**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface min-h-screen flex items-center justify-center px-6">
      <div className="bg-white border border-border rounded-2xl shadow-sm p-12 text-center max-w-lg w-full">
        <p className="font-display text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="font-display text-3xl text-primary font-bold mb-4">Page Not Found</h1>
        <p className="text-secondary mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-bold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200 text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run all tests**

```bash
npm test -- --watchAll=false
```

Expected: all 35 pass.

- [ ] **Step 5: Final build check**

```bash
npm run build
```

Expected: build succeeds, `/out` directory generated.

- [ ] **Step 6: Commit**

```bash
git add app/contact/page.tsx app/thank-you/page.tsx app/not-found.tsx
git commit -m "feat: redesign Contact, Thank You, 404 pages — white glass theme"
```

---

## Done

All 13 tasks complete. The site is now:
- ✅ Pure white + `#F8FAFC` surface alternating sections
- ✅ Poppins font throughout (replaces Inter + Playfair Display)
- ✅ `#2563EB` blue accent — CTAs, numbers, borders, links
- ✅ Glassmorphism: `bg-white/70 backdrop-blur-xl` cards and navbar
- ✅ Rounded corners: `rounded-2xl` cards, `rounded-xl` buttons
- ✅ Hover lift animations on all cards
- ✅ Button scale + shadow micro-interactions
- ✅ Decorative gradient blobs on hero and page headers
- ✅ All 35 tests passing
- ✅ Build succeeds
