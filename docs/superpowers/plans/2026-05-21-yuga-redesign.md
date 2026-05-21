# YUGA Website Complete Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild all 6 pages and shared components of the YUGA website into a Corporate & Premium dark navy + gold aesthetic, fix 3 deployment blockers, and add missing SEO infrastructure.

**Architecture:** Tailwind v4 CSS custom tokens in `globals.css` via `@theme`. Two new shared components (`PageHeader`, `WhyNowSection`) eliminate duplication across 5 pages. All pages rebuilt top-to-bottom while preserving the existing static export configuration and `lib/company-data.ts` data layer.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, Tailwind CSS v4, Google Fonts (Playfair Display + Inter), Formspree

---

## ⚠️ Before You Start

Read `node_modules/next/dist/docs/` for any Next.js 16-specific breaking changes before writing code — per project AGENTS.md requirement.

---

## File Map

**Create:**
- `components/PageHeader.tsx` — shared dark hero header used by 5 pages
- `components/WhyNowSection.tsx` — shared WHY_NOW market opportunity section
- `app/thank-you/page.tsx` — post-form success page
- `app/not-found.tsx` — branded 404
- `app/sitemap.ts` — dynamic sitemap
- `public/robots.txt` — crawl guidance

**Modify:**
- `app/globals.css` — add @theme brand tokens
- `app/layout.tsx` — Playfair Display + Inter CSS variable fonts
- `components/Navbar.tsx` — full redesign with SVG icons + glassmorphism scroll
- `components/Footer.tsx` — full redesign + add Pyrolysis link + fix WhatsApp derivation
- `components/HeroVideo.tsx` — add poster fallback
- `components/StatsBar.tsx` — gold numbers redesign
- `components/ServiceCard.tsx` — dark card + gold top-border
- `components/NetworkGrid.tsx` — dark table + gold header
- `components/TimelineSection.tsx` — vertical gold timeline redesign
- `components/ContactForm.tsx` — dark form + redirect to /thank-you
- `app/page.tsx` — full redesign + add metadata export
- `app/about/page.tsx` — full redesign
- `app/services/page.tsx` — full redesign + fix sticky tab offset
- `app/why-us/page.tsx` — full redesign + use WhyNowSection
- `app/pyrolysis/page.tsx` — full redesign
- `app/contact/page.tsx` — full redesign
- `lib/company-data.ts` — fix tradeName → "YUGA", website → TBD (user provides)
- `README.md` — update for YUGA rebrand

**Delete:**
- `components/HeroSection.tsx`
- `components/TimelineItem.tsx`
- `__tests__/HeroSection.test.tsx`
- `__tests__/TimelineItem.test.tsx`

---

## Phase 1 — Design Foundation

### Task 1: Design Tokens + Font Setup

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update `app/globals.css`** — replace existing @theme with full brand token set

```css
@import "tailwindcss";

@theme {
  /* Brand colors */
  --color-brand-navy: #0A1628;
  --color-brand-slate: #152035;
  --color-brand-card: #1C2E4A;
  --color-brand-gold: #C9A84C;
  --color-brand-muted: #A8B0BC;
  --color-brand-forest: #2D6A4F;

  /* Fonts — resolved via Next.js CSS variables set in layout.tsx */
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-display: var(--font-playfair), Georgia, serif;
}

body {
  background-color: #0A1628;
  color: #ffffff;
}
```

- [ ] **Step 2: Update `app/layout.tsx`** — load both fonts with CSS variable approach

```tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "YUGA — Bio-Modified Bitumen Consulting",
  description: "India's leading bio-bitumen plant setup and consulting firm. 25 years experience, 10 plants built, 4,452 industry contacts. Complete A-to-Z service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans flex flex-col min-h-screen bg-brand-navy`}>
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Run dev server to confirm fonts load**

```bash
npm run dev
```

Open `http://localhost:3000` — confirm no font errors in console. Kill server.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: add brand design tokens and Playfair Display font"
```

---

### Task 2: Navbar Redesign

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `__tests__/Navbar.test.tsx`

- [ ] **Step 1: Update the Navbar test**

```tsx
// __tests__/Navbar.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders the YUGA logo", () => {
    render(<Navbar />);
    expect(screen.getByText("YUGA")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pyrolysis" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Why Us" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npm test -- --testPathPattern=Navbar --watchAll=false
```

Expected: FAIL (old component has different aria-labels and no YUGA text)

- [ ] **Step 3: Replace `components/Navbar.tsx` with redesigned version**

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/30"
          : "bg-brand-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-bold text-brand-gold tracking-wide"
        >
          YUGA
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-gold ${
                  pathname === href ? "text-brand-gold" : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white p-2"
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
        <div className="md:hidden fixed inset-0 top-[72px] bg-brand-navy z-40 flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-display font-semibold transition-colors hover:text-brand-gold ${
                pathname === href ? "text-brand-gold" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npm test -- --testPathPattern=Navbar --watchAll=false
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: redesign Navbar — dark navy, gold wordmark, SVG icons"
```

---

### Task 3: Footer Redesign

**Files:**
- Modify: `components/Footer.tsx`
- Modify: `__tests__/Footer.test.tsx`

- [ ] **Step 1: Update Footer test**

```tsx
// __tests__/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders YUGA brand name", () => {
    render(<Footer />);
    expect(screen.getAllByText("YUGA").length).toBeGreaterThan(0);
  });

  it("renders all quick links including Pyrolysis", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pyrolysis" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders WhatsApp link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npm test -- --testPathPattern=Footer --watchAll=false
```

Expected: FAIL (old footer missing Pyrolysis link)

- [ ] **Step 3: Replace `components/Footer.tsx`**

```tsx
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

const QUICK_LINKS = [
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
    <footer className="bg-brand-navy border-t border-brand-gold/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-2xl font-bold text-brand-gold mb-3">YUGA</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              India&apos;s leading bio-modified bitumen consulting firm. End-to-end plant setup &amp; consulting.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-brand-muted hover:text-brand-gold text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.email}</li>
              <li>{COMPANY.hq}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Connect
            </h3>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold text-sm px-5 py-2.5 hover:bg-[#b8963e] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 mt-12 pt-6 text-center text-brand-muted text-xs">
          © {new Date().getFullYear()} YUGA — {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Run test**

```bash
npm test -- --testPathPattern=Footer --watchAll=false
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx __tests__/Footer.test.tsx
git commit -m "feat: redesign Footer — gold accent, fix Pyrolysis link, derive WhatsApp from COMPANY.phone"
```

---

## Phase 2 — Shared Components

### Task 4: PageHeader Component (New)

**Files:**
- Create: `components/PageHeader.tsx`
- Create: `__tests__/PageHeader.test.tsx`

- [ ] **Step 1: Write the test**

```tsx
// __tests__/PageHeader.test.tsx
import { render, screen } from "@testing-library/react";
import PageHeader from "@/components/PageHeader";

describe("PageHeader", () => {
  it("renders the title", () => {
    render(<PageHeader title="About YUGA" subtitle="Our story" breadcrumb="About" />);
    expect(screen.getByRole("heading", { name: "About YUGA" })).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<PageHeader title="About YUGA" subtitle="Our story" breadcrumb="About" />);
    expect(screen.getByText("Our story")).toBeInTheDocument();
  });

  it("renders without subtitle", () => {
    render(<PageHeader title="Contact" breadcrumb="Contact" />);
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npm test -- --testPathPattern=PageHeader --watchAll=false
```

Expected: FAIL (component does not exist)

- [ ] **Step 3: Create `components/PageHeader.tsx`**

```tsx
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-navy py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=60)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-white font-bold max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-muted text-lg mt-4 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        <div className="w-16 h-0.5 bg-brand-gold mt-6" />
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test**

```bash
npm test -- --testPathPattern=PageHeader --watchAll=false
```

Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/PageHeader.tsx __tests__/PageHeader.test.tsx
git commit -m "feat: add PageHeader shared component"
```

---

### Task 5: WhyNowSection Component (New)

**Files:**
- Create: `components/WhyNowSection.tsx`

- [ ] **Step 1: Create `components/WhyNowSection.tsx`**

```tsx
import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowSection() {
  return (
    <section className="bg-brand-slate py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Timing
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
          Why Now?
        </h2>
        <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          {WHY_NOW.map((point, i) => (
            <div
              key={i}
              className="flex gap-4 bg-brand-card border-l-4 border-brand-gold p-5"
            >
              <span className="text-brand-gold font-bold text-lg shrink-0 font-display">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-white leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/why-us"
            className="inline-block border border-brand-gold text-brand-gold px-6 py-3 text-sm font-semibold hover:bg-brand-gold hover:text-brand-navy transition-colors"
          >
            See All Advantages →
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run full test suite to confirm nothing breaks**

```bash
npm test -- --watchAll=false
```

Expected: All existing tests PASS

- [ ] **Step 3: Commit**

```bash
git add components/WhyNowSection.tsx
git commit -m "feat: add WhyNowSection shared component"
```

---

### Task 6: StatsBar Redesign

**Files:**
- Modify: `components/StatsBar.tsx`
- Modify: `__tests__/StatsBar.test.tsx`

- [ ] **Step 1: Update StatsBar test**

```tsx
// __tests__/StatsBar.test.tsx
import { render, screen } from "@testing-library/react";
import StatsBar from "@/components/StatsBar";

describe("StatsBar", () => {
  it("renders all four stat labels", () => {
    render(<StatsBar />);
    expect(screen.getByText(/years.*experience/i)).toBeInTheDocument();
    expect(screen.getByText(/plants.*built/i)).toBeInTheDocument();
    expect(screen.getByText(/industry.*contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/service.*verticals/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test**

```bash
npm test -- --testPathPattern=StatsBar --watchAll=false
```

Note current result (may pass or fail depending on existing label text).

- [ ] **Step 3: Replace `components/StatsBar.tsx`**

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

function StatCard({ value, label, suffix, active }: { value: number; label: string; suffix: string; active: boolean }) {
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
    <div className="text-center px-8 py-8">
      <p className="font-sans text-4xl md:text-5xl font-extrabold text-brand-gold">
        {active ? count.toLocaleString() : "0"}{suffix}
      </p>
      <p className="text-gray-500 text-sm font-medium mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run test**

```bash
npm test -- --testPathPattern=StatsBar --watchAll=false
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add components/StatsBar.tsx __tests__/StatsBar.test.tsx
git commit -m "feat: redesign StatsBar — gold numbers on white bg, count-up animation"
```

---

### Task 7: ServiceCard Redesign

**Files:**
- Modify: `components/ServiceCard.tsx`
- Modify: `__tests__/ServiceCard.test.tsx`

- [ ] **Step 1: Check existing ServiceCard props** — read `components/ServiceCard.tsx` to confirm prop interface before changing the test.

- [ ] **Step 2: Update ServiceCard test**

```tsx
// __tests__/ServiceCard.test.tsx
import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES } from "@/lib/company-data";

describe("ServiceCard", () => {
  const stage = FOUR_STAGES[0];

  it("renders stage number", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(/stage 1/i)).toBeInTheDocument();
  });

  it("renders stage name", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(stage.name)).toBeInTheDocument();
  });

  it("renders stage description", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(stage.description)).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run test**

```bash
npm test -- --testPathPattern=ServiceCard --watchAll=false
```

- [ ] **Step 4: Replace `components/ServiceCard.tsx`**

```tsx
import type { FourStage } from "@/lib/company-data";

// Check that FourStage type is exported from company-data.ts.
// If not, inline the type: { stage: number; name: string; description: string; capex?: string; manpower?: string; space?: string; icon: string }

interface ServiceCardProps {
  stage: FourStage;
}

export default function ServiceCard({ stage }: ServiceCardProps) {
  return (
    <div className="bg-brand-card border-t-2 border-brand-gold p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-sans text-xs font-bold text-brand-gold uppercase tracking-widest">
          Stage {stage.stage}
        </span>
        <span className="text-2xl">{stage.icon}</span>
      </div>
      <h3 className="font-display text-lg text-white font-semibold leading-snug">{stage.name}</h3>
      <p className="text-brand-muted text-sm leading-relaxed flex-1">{stage.description}</p>
      {(stage.capex || stage.manpower) && (
        <div className="border-t border-brand-gold/20 pt-4 grid grid-cols-2 gap-3 text-xs">
          {stage.capex && (
            <div>
              <p className="text-brand-gold font-semibold">CapEx</p>
              <p className="text-brand-muted">{stage.capex}</p>
            </div>
          )}
          {stage.manpower && (
            <div>
              <p className="text-brand-gold font-semibold">Manpower</p>
              <p className="text-brand-muted">{stage.manpower}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

> **Note:** If `FourStage` type is not exported from `lib/company-data.ts`, add `export type FourStage = typeof FOUR_STAGES[0]` to that file.

- [ ] **Step 5: Run test**

```bash
npm test -- --testPathPattern=ServiceCard --watchAll=false
```

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add components/ServiceCard.tsx __tests__/ServiceCard.test.tsx
git commit -m "feat: redesign ServiceCard — dark card, gold top-border, capex/manpower detail"
```

---

### Task 8: NetworkGrid Redesign

**Files:**
- Modify: `components/NetworkGrid.tsx`
- Modify: `__tests__/NetworkGrid.test.tsx`

- [ ] **Step 1: Update NetworkGrid test**

```tsx
// __tests__/NetworkGrid.test.tsx
import { render, screen } from "@testing-library/react";
import NetworkGrid from "@/components/NetworkGrid";

describe("NetworkGrid", () => {
  it("renders total contacts figure", () => {
    render(<NetworkGrid />);
    expect(screen.getByText(/4,452/)).toBeInTheDocument();
  });

  it("renders contact categories", () => {
    render(<NetworkGrid />);
    expect(screen.getByText(/contractor/i)).toBeInTheDocument();
    expect(screen.getByText(/trader/i)).toBeInTheDocument();
    expect(screen.getByText(/importer/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test**

```bash
npm test -- --testPathPattern=NetworkGrid --watchAll=false
```

- [ ] **Step 3: Replace `components/NetworkGrid.tsx`**

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
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-gold">
            <th className="text-brand-navy font-bold text-left px-6 py-4 uppercase tracking-widest text-xs">
              Contact Type
            </th>
            <th className="text-brand-navy font-bold text-right px-6 py-4 uppercase tracking-widest text-xs">
              Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ label, key }, i) => (
            <tr
              key={key}
              className={`border-b border-brand-gold/10 ${i % 2 === 0 ? "bg-brand-card" : "bg-brand-slate"}`}
            >
              <td className="text-brand-muted px-6 py-4">{label}</td>
              <td className="text-brand-gold font-bold text-right px-6 py-4 font-sans">
                {INDUSTRY_NETWORK[key].toLocaleString()}
              </td>
            </tr>
          ))}
          <tr className="bg-brand-navy border-t-2 border-brand-gold">
            <td className="text-white font-bold px-6 py-4 font-display">Total Network</td>
            <td className="text-brand-gold font-extrabold text-right px-6 py-4 text-lg">
              {INDUSTRY_NETWORK.total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 4: Run test**

```bash
npm test -- --testPathPattern=NetworkGrid --watchAll=false
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add components/NetworkGrid.tsx __tests__/NetworkGrid.test.tsx
git commit -m "feat: redesign NetworkGrid — dark table with gold header and total row"
```

---

### Task 9: TimelineSection Redesign

**Files:**
- Modify: `components/TimelineSection.tsx`
- Delete: `components/TimelineItem.tsx`
- Delete: `__tests__/TimelineItem.test.tsx`
- Delete: `__tests__/HeroSection.test.tsx`
- Delete: `components/HeroSection.tsx`

- [ ] **Step 1: Delete dead code files**

```bash
rm components/HeroSection.tsx components/TimelineItem.tsx
rm __tests__/HeroSection.test.tsx __tests__/TimelineItem.test.tsx
```

- [ ] **Step 2: Replace `components/TimelineSection.tsx`**

```tsx
import { CAREER_TRACK } from "@/lib/company-data";

export default function TimelineSection() {
  return (
    <section className="bg-brand-slate py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Career Track
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-16">
          25 Years of Plant Builds
        </h2>

        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-gold/30" />

          <div className="space-y-8">
            {CAREER_TRACK.map((item, i) => (
              <div key={i} className="relative flex gap-6 pl-16">
                {/* Gold dot */}
                <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-brand-gold border-2 border-brand-navy -translate-x-1/2" />

                <div className="bg-brand-card border-l-2 border-brand-gold/50 p-5 flex-1 hover:border-brand-gold transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-brand-gold font-bold font-sans text-sm">{item.year}</span>
                    <span className="text-xs text-brand-muted bg-brand-navy px-2 py-0.5 font-semibold uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.company}</h3>
                  <p className="text-brand-muted text-sm">{item.plantType}</p>
                  <p className="text-brand-muted/70 text-xs mt-1">{item.location}</p>
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

- [ ] **Step 3: Run full test suite**

```bash
npm test -- --watchAll=false
```

Expected: All remaining tests PASS. The deleted test files should no longer appear.

- [ ] **Step 4: Commit**

```bash
git add components/TimelineSection.tsx
git rm components/HeroSection.tsx components/TimelineItem.tsx __tests__/HeroSection.test.tsx __tests__/TimelineItem.test.tsx
git commit -m "feat: redesign TimelineSection — vertical gold timeline; remove dead HeroSection + TimelineItem"
```

---

### Task 10: HeroVideo Poster Fix

**Files:**
- Modify: `components/HeroVideo.tsx`

- [ ] **Step 1: Read existing `components/HeroVideo.tsx`** to understand the current implementation before changing it.

- [ ] **Step 2: Update `components/HeroVideo.tsx`**

```tsx
"use client";
export default function HeroVideo() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fallback dark bg — shows when video is absent or loading */}
      <div className="absolute inset-0 bg-brand-navy" />

      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
          India&apos;s Leading Bio-Bitumen Consultant
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          India&apos;s{" "}
          <span className="text-brand-gold">Bio-Bitumen</span>{" "}
          Revolution
        </h1>
        <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          End-to-end plant setup consulting — from site selection to commercial production.
          25 years experience. 10 plants built. 4,452 verified industry contacts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-brand-gold text-brand-navy font-bold px-8 py-4 hover:bg-[#b8963e] transition-colors text-sm uppercase tracking-wider"
          >
            Start Your Project
          </a>
          <a
            href="/services"
            className="border border-brand-gold text-brand-gold font-bold px-8 py-4 hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm uppercase tracking-wider"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 4: Commit**

```bash
git add components/HeroVideo.tsx
git commit -m "feat: add poster fallback and hero content overlay to HeroVideo"
```

---

### Task 11: ContactForm Redesign

**Files:**
- Modify: `components/ContactForm.tsx`
- Modify: `__tests__/ContactForm.test.tsx`

- [ ] **Step 1: Update ContactForm test**

```tsx
// __tests__/ContactForm.test.tsx
import { render, screen } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test**

```bash
npm test -- --testPathPattern=ContactForm --watchAll=false
```

- [ ] **Step 3: Replace `components/ContactForm.tsx`**

```tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <form onSubmit={handleSubmit} className="bg-brand-card p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-brand-muted text-sm mb-2">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-brand-muted text-sm mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-brand-muted text-sm mb-2">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-brand-muted text-sm mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full bg-brand-navy border border-brand-gold/20 text-white placeholder-brand-muted/50 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm border border-red-400/30 bg-red-400/10 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand-gold text-brand-navy font-bold py-4 text-sm uppercase tracking-wider hover:bg-[#b8963e] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
```

- [ ] **Step 4: Run test**

```bash
npm test -- --testPathPattern=ContactForm --watchAll=false
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add components/ContactForm.tsx __tests__/ContactForm.test.tsx
git commit -m "feat: redesign ContactForm — dark card, gold focus, redirect to /thank-you"
```

---

## Phase 3 — Pages

### Task 12: Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import type { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import StatsBar from "@/components/StatsBar";
import WhyNowSection from "@/components/WhyNowSection";
import { FOUR_STAGES } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "YUGA — Bio-Modified Bitumen Plant Setup & Consulting",
  description:
    "India's leading bio-bitumen consultant. 25 years experience, 10 plants built, 4,452 verified industry contacts. End-to-end plant setup from site selection to commercial production.",
  openGraph: {
    title: "YUGA — Bio-Modified Bitumen Plant Setup & Consulting",
    description:
      "India's leading bio-bitumen consultant. Complete A-to-Z plant setup service.",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Bio-Bitumen Consulting",
    desc: "Complete A-to-Z plant setup: site selection, machinery procurement, regulatory clearances, commissioning, and buyer network access.",
    icon: "🏭",
    href: "/services#bio-bitumen",
  },
  {
    title: "Project Management",
    desc: "Full PMC from feasibility report to plant handover — civil supervision, equipment procurement, and retainer support.",
    icon: "📋",
    href: "/services#pmc",
  },
  {
    title: "IT Solutions",
    desc: "Custom portals, dashboards, and supply chain tools built for the bitumen and industrial sector.",
    icon: "💻",
    href: "/services#it",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <StatsBar />

      {/* Services Overview */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-4">
            Three Service Verticals
          </h2>
          <p className="text-brand-muted text-center max-w-2xl mx-auto mb-12">
            End-to-end support for bio-modified bitumen plant setup — from feasibility to commercial production.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="bg-brand-card border-t-2 border-brand-gold p-6 flex flex-col gap-4 hover:bg-[#243656] transition-colors group"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-display text-xl text-white group-hover:text-brand-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">{s.desc}</p>
                <span className="text-brand-gold text-sm font-semibold">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WhyNowSection />

      {/* Pyrolysis Teaser */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              The Technology
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              What is Pyrolysis?
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8">
              Pyrolysis converts biomass and waste into bio-oil, bio-char, and syngas through thermal decomposition in
              the absence of oxygen. The bio-oil is refined and blended with conventional VG-30 bitumen to produce
              India&apos;s next-generation road material.
            </p>
            <a
              href="/pyrolysis"
              className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:bg-[#b8963e] transition-colors text-sm uppercase tracking-wider"
            >
              Explore the Technology →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FOUR_STAGES.map((stage) => (
              <div key={stage.stage} className="bg-brand-card border-l-2 border-brand-gold p-5">
                <span className="text-2xl mb-3 block">{stage.icon}</span>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">
                  Stage {stage.stage}
                </p>
                <p className="text-white text-sm font-semibold leading-snug">{stage.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-brand-gold py-16 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-brand-navy font-bold mb-4">
          Ready to Build Your Bio-Bitumen Plant?
        </h2>
        <p className="text-brand-navy/80 max-w-xl mx-auto mb-8 leading-relaxed">
          From feasibility to commercial production — we handle everything. India&apos;s most experienced
          bio-bitumen consultant.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Start Your Project
        </a>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign Home page — hero, stats, services, why-now, pyrolysis teaser, CTA strip"
```

---

### Task 13: About Page

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
  title: "About — YUGA",
  description:
    "Meet Prince Pratap Shah — 25 years in the bitumen industry, 10 plants built across India. Founder of YUGA, India's leading bio-bitumen consulting firm.",
  openGraph: {
    title: "About — YUGA",
    description: "Meet the founder behind India's most experienced bio-bitumen consultancy.",
    type: "website",
  },
};

const CREDENTIAL_ICONS = ["📈", "🌍", "🔧", "🏭", "🗺️", "🏆", "🤝", "🏛️"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About YUGA"
        subtitle="India's most experienced bio-bitumen plant setup consultant"
        breadcrumb="About"
      />

      {/* Founder Bio */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-56 h-56 border-4 border-brand-gold bg-brand-card flex items-center justify-center">
              <span className="text-7xl">👤</span>
            </div>
          </div>
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Founder &amp; Managing Director
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">{COMPANY.owner}</h2>
            <p className="text-brand-muted leading-relaxed mb-4">{COMPANY.experience}.</p>
            <p className="text-brand-muted leading-relaxed mb-6">{COMPANY.education}.</p>
            <div className="border-l-4 border-brand-gold pl-4 py-3 bg-brand-card mb-8">
              <p className="text-white font-medium text-sm">{COMPANY.awards}</p>
            </div>
            <a
              href="/contact"
              className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:bg-[#b8963e] transition-colors text-sm uppercase tracking-wider"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <StatsBar />

      <TimelineSection />

      {/* Credentials */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Track Record
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">Key Credentials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {KEY_CREDENTIALS.map((cred, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <span className="text-3xl mb-4 block">{CREDENTIAL_ICONS[i] ?? "✅"}</span>
                <p className="text-brand-muted text-sm leading-relaxed">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: redesign About page — founder bio, timeline, credentials grid"
```

---

### Task 14: Services Page

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Replace `app/services/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";

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
        className="sticky top-[72px] z-40 bg-brand-slate border-b border-brand-gold/30"
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
              className="shrink-0 py-4 text-sm font-semibold text-brand-muted hover:text-brand-gold border-b-2 border-transparent hover:border-brand-gold transition-colors scroll-mt-36"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bio-Bitumen Section */}
      <section id="bio-bitumen" className="bg-brand-navy py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 01
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>

          {/* 4 Stages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <ServiceCard key={stage.stage} stage={stage} />
            ))}
          </div>

          {/* Consulting Service Categories */}
          <h3 className="font-display text-2xl text-white mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <div key={category} className="bg-brand-card p-6">
                <h4 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-widest">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-brand-muted text-sm">
                      <span className="text-brand-gold mt-0.5 shrink-0">→</span>
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
      <section id="pmc" className="bg-brand-slate py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 02
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Project Management Consulting
          </h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service, i) => (
              <div key={i} className="bg-brand-card border-l-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-white font-semibold font-display">{service.category}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.deliverables.map((d, j) => (
                    <li key={j} className="flex gap-2 text-brand-muted text-xs">
                      <span className="text-brand-gold shrink-0">→</span>
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
      <section id="it" className="bg-brand-navy py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Service 03
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">IT Solutions</h2>
          <p className="text-brand-muted max-w-2xl mb-12 leading-relaxed">
            Custom software built for the bitumen and industrial sector — portals, dashboards, and supply
            chain tools.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {IT_SERVICES.map((service, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-white font-semibold font-display">{service.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{service.description}</p>
                <p className="text-brand-muted/70 text-xs italic mb-4 border-l-2 border-brand-gold/30 pl-3">
                  {service.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-brand-navy text-brand-gold border border-brand-gold/30 px-2 py-1"
                    >
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
      <section className="bg-brand-gold py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-brand-navy font-bold mb-4">
          Which Service Do You Need?
        </h2>
        <p className="text-brand-navy/80 max-w-lg mx-auto mb-8">
          Tell us about your project and we&apos;ll recommend the right scope.
        </p>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: redesign Services page — 3 sections, sticky nav, gold accents"
```

---

### Task 15: Why Us Page

**Files:**
- Modify: `app/why-us/page.tsx`

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

// Icon map keyed by exact strength text — eliminates silent index misalignment
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
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Our Advantages
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12">
            What Sets YUGA Apart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PPS_STRENGTHS.map((strength, i) => (
              <div key={i} className="bg-brand-card border-t-2 border-brand-gold p-6 flex gap-4">
                <span className="text-3xl shrink-0">{STRENGTH_ICONS[strength] ?? "✅"}</span>
                <p className="text-white leading-relaxed text-sm">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Network */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Live Industry Network
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-4">
            4,452 Verified Contacts
          </h2>
          <p className="text-brand-muted text-center max-w-xl mx-auto mb-10">
            Built over 25 years — contractors, traders, importers, and manufacturers across 17 states.
          </p>
          <div className="max-w-2xl mx-auto">
            <NetworkGrid />
          </div>
        </div>
      </section>

      {/* GETKA Highlight */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-4xl mx-auto border-2 border-brand-gold p-10 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            International Supply Contract
          </p>
          <h2 className="font-display text-3xl text-white mb-4">GETKA Energy Trading LLC</h2>
          <p className="text-brand-muted mb-2">Getka Energy Trading LLC, USA (Iraq Origin)</p>
          <p className="text-4xl font-extrabold text-brand-gold font-sans mb-2">2.4 Lakh MT/Year</p>
          <p className="text-brand-muted text-sm">VG-30 International Supply Contract</p>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
        </div>
      </section>

      <WhyNowSection />
    </>
  );
}
```

- [ ] **Step 2: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 3: Commit**

```bash
git add app/why-us/page.tsx
git commit -m "feat: redesign Why Us page — strengths grid, network table, GETKA highlight"
```

---

### Task 16: Pyrolysis Page

**Files:**
- Modify: `app/pyrolysis/page.tsx`

- [ ] **Step 1: Replace `app/pyrolysis/page.tsx`**

```tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
  FOUR_STAGES,
} from "@/lib/company-data";

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
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Process
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            From Waste to Road — 6 Steps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-brand-card p-6 border-l-4 border-brand-gold">
                <p className="font-display text-3xl font-bold text-brand-gold mb-3">{step.step}</p>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Raw Materials
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            What Goes In
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_FEEDSTOCKS.map((f) => (
              <div key={f.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="text-white font-display font-semibold">{f.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{f.description}</p>
                <p className="text-brand-gold text-xs font-semibold">{f.indiaVolume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Products
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            What Comes Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYROLYSIS_OUTPUTS.map((o) => (
              <div key={o.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{o.icon}</span>
                  <h3 className="text-white font-display font-semibold text-base">{o.name}</h3>
                </div>
                <p className="text-brand-gold text-xs font-semibold mb-1">{o.yieldRange}</p>
                <ul className="space-y-1 mt-3">
                  {o.uses.slice(0, 3).map((u, i) => (
                    <li key={i} className="flex gap-2 text-brand-muted text-xs">
                      <span className="text-brand-gold shrink-0">→</span>
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
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            India Market
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            The Opportunity in Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-brand-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-brand-gold mb-1">{stat.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-brand-muted text-xs">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Govt Policy */}
      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Policy Tailwinds
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            Government Support
          </h2>
          <ul className="space-y-4">
            {GOVT_POLICIES.map((policy, i) => (
              <li key={i} className="flex gap-4 bg-brand-card border-l-4 border-brand-gold p-5">
                <span className="text-brand-gold font-bold font-display text-lg shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white leading-relaxed">{policy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value-added Products */}
      <section className="bg-brand-slate py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            High-Value Outputs
          </p>
          <h2 className="font-display text-3xl text-white text-center mb-12">
            Value-Added Products
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {PYROLYSIS_PRODUCTS.map((p) => (
              <div key={p.name} className="bg-brand-card border-t-2 border-brand-gold p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="text-white font-display font-semibold">{p.name}</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="bg-brand-navy border-l-4 border-brand-gold px-4 py-2">
                  <p className="text-brand-gold text-xs font-semibold">{p.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-14 px-6 text-center">
        <h2 className="font-display text-3xl text-brand-navy font-bold mb-4">
          Ready to Build Your Pyrolysis Plant?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-brand-navy text-white font-bold px-8 py-4 hover:bg-brand-slate transition-colors text-sm uppercase tracking-wider"
        >
          Talk to an Expert
        </a>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 3: Commit**

```bash
git add app/pyrolysis/page.tsx
git commit -m "feat: redesign Pyrolysis page — process flow, feedstocks, outputs, market stats, policy"
```

---

### Task 17: Contact Page + Thank You Page

**Files:**
- Modify: `app/contact/page.tsx`
- Create: `app/thank-you/page.tsx`

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

      <section className="bg-brand-navy py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
              Reach Us
            </p>
            <div className="space-y-4 mb-10">
              {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
                <div key={label} className="bg-brand-card p-5 flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-white hover:text-brand-gold transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${waNumber}?text=Hi%20YUGA%2C%20I%20am%20interested%20in%20bio-bitumen%20plant%20setup%20consulting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 hover:bg-[#1ebe5c] transition-colors text-sm uppercase tracking-wider"
            >
              <span className="text-xl">💬</span>
              WhatsApp Us Now
            </a>
          </div>

          {/* Form */}
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6">
              Send a Message
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Create `app/thank-you/page.tsx`**

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
    <section className="bg-brand-navy min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="font-display text-4xl text-white mb-4">Message Sent!</h1>
        <p className="text-brand-muted leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          For urgent queries, WhatsApp us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:bg-[#b8963e] transition-colors text-sm uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-gold text-brand-gold font-bold px-6 py-3 hover:bg-brand-gold hover:text-brand-navy transition-colors text-sm uppercase tracking-wider"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 4: Commit**

```bash
git add app/contact/page.tsx app/thank-you/page.tsx
git commit -m "feat: redesign Contact page, add Thank You page with WhatsApp CTA"
```

---

## Phase 4 — SEO + Data Fixes

### Task 18: SEO Infrastructure

**Files:**
- Create: `public/robots.txt`
- Create: `app/sitemap.ts`
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://www.yuga.co.in/sitemap.xml
```

> **Note:** Replace `https://www.yuga.co.in` with the actual production domain once assigned.

- [ ] **Step 2: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yuga.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/pyrolysis", "/why-us", "/contact"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
```

- [ ] **Step 3: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-navy min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-8xl font-bold text-brand-gold mb-4">404</p>
        <h1 className="font-display text-3xl text-white mb-4">Page Not Found</h1>
        <p className="text-brand-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 hover:bg-[#b8963e] transition-colors text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run tests**

```bash
npm test -- --watchAll=false
```

- [ ] **Step 5: Commit**

```bash
git add public/robots.txt app/sitemap.ts app/not-found.tsx
git commit -m "feat: add robots.txt, sitemap, and branded 404 page"
```

---

### Task 19: Data Fixes + Cleanup

**Files:**
- Modify: `lib/company-data.ts`
- Modify: `README.md`

- [ ] **Step 1: Fix stale COMPANY fields in `lib/company-data.ts`**

Change:
```ts
tradeName: "PPS Anantams",
```
To:
```ts
tradeName: "YUGA",
```

Change:
```ts
website: "www.princeshah.com",
```
To:
```ts
website: "www.yuga.co.in", // Update to actual domain when assigned
```

- [ ] **Step 2: Export `FourStage` type from `lib/company-data.ts`** (needed by ServiceCard)

After the `FOUR_STAGES` array definition, add:

```ts
export type FourStage = (typeof FOUR_STAGES)[0];
```

- [ ] **Step 3: Update `README.md`** — replace stale content:

```markdown
# YUGA — Bio-Modified Bitumen Consulting Website

Website for **YUGA** (PPS Anantams Corporation Private Limited / PACPL), India's leading bio-bitumen plant setup and consulting firm.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, stats, services overview, why now, pyrolysis teaser |
| `/about` | Founder Prince Pratap Shah, career timeline, credentials |
| `/services` | Bio-Bitumen Consulting, PMC, IT Solutions |
| `/pyrolysis` | Pyrolysis technology deep-dive |
| `/why-us` | Differentiators, industry network, GETKA contract |
| `/contact` | Contact form + details |
| `/thank-you` | Post-form submission confirmation |

## Tech Stack

- Next.js 16 (static export)
- React 19
- TypeScript
- Tailwind CSS v4
- Google Fonts: Playfair Display + Inter
- Formspree (contact form)

## Setup

```bash
npm install
npm run dev       # development
npm run build     # static export to /out
npm run test      # run Jest test suite
```

## Environment Variables

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id   # required for contact form
NEXT_PUBLIC_SITE_URL=https://www.yuga.co.in  # used in sitemap
```

## Deployment

Deployed on Vercel. Set environment variables in the Vercel project settings.
```

- [ ] **Step 4: Run full test suite**

```bash
npm test -- --watchAll=false
```

Expected: All tests PASS

- [ ] **Step 5: Final build check**

```bash
npm run build
```

Expected: Build succeeds, output in `/out`

- [ ] **Step 6: Commit**

```bash
git add lib/company-data.ts README.md
git commit -m "fix: update COMPANY.tradeName to YUGA, export FourStage type, update README"
```

---

## Done

All 19 tasks complete. The site is now:
- ✅ Corporate & Premium design (dark navy + gold)
- ✅ Playfair Display headings, Inter body
- ✅ Consistent shared components (PageHeader, WhyNowSection)
- ✅ All 6 pages rebuilt
- ✅ Hero video fallback added
- ✅ Footer Pyrolysis link fixed
- ✅ Contact form redirects to /thank-you
- ✅ robots.txt + sitemap + 404 page
- ✅ metadata + Open Graph on all pages
- ✅ Dead code removed
- ✅ Stale brand data fixed
