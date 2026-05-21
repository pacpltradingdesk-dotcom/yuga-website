# PACPL/YUGA Website Full Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the PACPL/YUGA website from scratch on a new `redesign` branch — clean corporate design, new `/it-products` page with tab switcher, and `/consulting` replacing `/services`.

**Architecture:** Static Next.js export (`output: "export"`) with Tailwind CSS v4. All content comes from `lib/company-data.ts` (untouched). Interactive components (`ItProductTabs`, `ContactForm`) use `"use client"`. Old `/services` and `/why-us` routes get client-side redirect pages since static export doesn't support server-side redirects.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Poppins (Google Fonts), Jest + @testing-library/react

**Spec:** `docs/superpowers/specs/2026-05-21-website-rebuild-design.md`

---

## File Map

### Modified
- `next.config.ts` — keep as-is (output: export, images unoptimized, trailingSlash)
- `app/globals.css` — full rewrite with new design tokens
- `app/layout.tsx` — full rewrite
- `app/sitemap.ts` — update routes

### Deleted (then recreated fresh)
- All `components/*.tsx`
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/why-us/page.tsx`
- `app/pyrolysis/page.tsx`, `app/contact/page.tsx`, `app/thank-you/page.tsx`, `app/not-found.tsx`

### Created Fresh
| File | Responsibility |
|---|---|
| `app/globals.css` | Design tokens, base styles |
| `app/layout.tsx` | Root layout — Navbar + Footer wrapper |
| `app/page.tsx` | Home page |
| `app/consulting/page.tsx` | Consulting services (bio-bitumen + PMC) |
| `app/it-products/page.tsx` | IT Products page with tab switcher |
| `app/pyrolysis/page.tsx` | Pyrolysis technology page |
| `app/about/page.tsx` | About Prince Pratap Shah |
| `app/contact/page.tsx` | Contact form |
| `app/thank-you/page.tsx` | Post-form confirmation |
| `app/not-found.tsx` | 404 page |
| `app/services/page.tsx` | Client-side redirect → /consulting |
| `app/why-us/page.tsx` | Client-side redirect → / |
| `components/Navbar.tsx` | Sticky top nav, mobile hamburger |
| `components/Footer.tsx` | 3-col footer + bottom bar |
| `components/PageHeader.tsx` | Inner page header (title + subtitle + breadcrumb) |
| `components/CtaStrip.tsx` | Full-width blue CTA band (reused on every page) |
| `components/SplitHero.tsx` | Home hero: text left, stats card right |
| `components/StatsCard.tsx` | 2×2 grid of company stats |
| `components/BusinessLineCards.tsx` | Two-card section: Consulting + IT Products |
| `components/WhyNowStrip.tsx` | 5 "Why Now" reason cards |
| `components/CredentialsBar.tsx` | Horizontally scrolling credential badges |
| `components/StageCard.tsx` | Pyrolysis stage card (used on Home, Consulting, Pyrolysis) |
| `components/ConsultingServiceCard.tsx` | Category + bullet list card for CONSULTING_SERVICES |
| `components/PmcServiceCard.tsx` | PMC service card with deliverables |
| `components/TargetAudienceCard.tsx` | Audience type card with fees |
| `components/ItProductTabs.tsx` | `"use client"` tab switcher for 5 IT products |
| `components/FeedstockCard.tsx` | Feedstock card with image |
| `components/OutputCard.tsx` | Pyrolysis output card |
| `components/PyrolysisProductCard.tsx` | Commercial product card with stat badge |
| `components/CareerTimeline.tsx` | Vertical timeline from CAREER_TRACK |
| `components/ContactForm.tsx` | `"use client"` contact form |
| `__tests__/components/Navbar.test.tsx` | Render test |
| `__tests__/components/ItProductTabs.test.tsx` | Tab switching behaviour test |
| `__tests__/components/ContactForm.test.tsx` | Form field render test |
| `__tests__/pages/Home.test.tsx` | Home page render test |

---

## Task 1: Create redesign branch + clean up old files

**Files:**
- Delete: `components/` (all files)
- Delete: `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/why-us/page.tsx`, `app/pyrolysis/page.tsx`, `app/contact/page.tsx`, `app/thank-you/page.tsx`, `app/not-found.tsx`

- [ ] **Step 1: Create the redesign branch**

```bash
git checkout -b redesign
```

Expected: `Switched to a new branch 'redesign'`

- [ ] **Step 2: Delete old component files**

```bash
rm components/Navbar.tsx components/Footer.tsx components/PageHeader.tsx
rm components/HeroVideo.tsx components/StatsBar.tsx components/ServiceCard.tsx
rm components/NetworkGrid.tsx components/TimelineSection.tsx
rm components/WhyNowSection.tsx components/ContactForm.tsx
```

- [ ] **Step 3: Delete old page files**

```bash
rm app/page.tsx app/about/page.tsx app/services/page.tsx app/why-us/page.tsx
rm app/pyrolysis/page.tsx app/contact/page.tsx app/thank-you/page.tsx app/not-found.tsx
```

- [ ] **Step 4: Commit the clean slate**

```bash
git add -A
git commit -m "chore: delete all old pages and components for full redesign"
```

---

## Task 2: Design tokens — globals.css

**Files:**
- Create: `app/globals.css`

- [ ] **Step 1: Write globals.css with new design tokens**

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-white: #FFFFFF;
  --color-surface: #F8FAFC;
  --color-primary: #0F172A;
  --color-secondary: #64748B;
  --color-accent: #1D4ED8;
  --color-accent-hover: #1E40AF;
  --color-accent-light: #EFF6FF;
  --color-accent-border: #BFDBFE;
  --color-border: #E2E8F0;

  --font-sans: var(--font-poppins), system-ui, sans-serif;
  --font-display: var(--font-poppins), system-ui, sans-serif;
}

body {
  background-color: var(--color-white);
  color: var(--color-primary);
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add new design token system to globals.css"
```

---

## Task 3: Root layout — app/layout.tsx

**Files:**
- Create: `app/layout.tsx`

> Note: Navbar and Footer components don't exist yet — use placeholder `{/* Navbar */}` and `{/* Footer */}` comments. These will be replaced in Task 5 and Task 6.

- [ ] **Step 1: Write the root layout skeleton**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PACPL — Bio-Bitumen Consulting & IT Products",
  description:
    "PPS Anantams Corporation Private Limited. India's leading bio-bitumen plant consulting firm and industrial IT solutions provider. 25 years experience, 10 plants built.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-white`}>
        {/* Navbar */}
        <main className="flex-1 pt-[72px]">{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify the dev server starts without errors**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000, no TypeScript errors in layout.tsx.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout skeleton with Poppins font"
```

---

## Task 4: PageHeader + CtaStrip components

**Files:**
- Create: `components/PageHeader.tsx`
- Create: `components/CtaStrip.tsx`
- Create: `__tests__/components/PageHeader.test.tsx`

- [ ] **Step 1: Write PageHeader component**

```tsx
// components/PageHeader.tsx
type Props = {
  title: string;
  subtitle: string;
  breadcrumb: string;
};

export default function PageHeader({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="bg-surface py-16 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          {breadcrumb}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-primary font-extrabold mb-4">
          {title}
        </h1>
        <p className="text-secondary text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write CtaStrip component**

```tsx
// components/CtaStrip.tsx
import Link from "next/link";

type Props = {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CtaStrip({ heading, subtext, buttonLabel, buttonHref }: Props) {
  return (
    <section className="bg-accent py-16 px-6 text-center">
      <h2 className="font-display text-3xl text-white font-bold mb-4">{heading}</h2>
      <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">{subtext}</p>
      <Link
        href={buttonHref}
        className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
```

- [ ] **Step 3: Write render test for PageHeader**

```tsx
// __tests__/components/PageHeader.test.tsx
import { render, screen } from "@testing-library/react";
import PageHeader from "@/components/PageHeader";

describe("PageHeader", () => {
  it("renders title, subtitle and breadcrumb", () => {
    render(
      <PageHeader
        title="Our Services"
        subtitle="End-to-end bio-bitumen consulting"
        breadcrumb="Services"
      />
    );
    expect(screen.getByText("Our Services")).toBeInTheDocument();
    expect(screen.getByText("End-to-end bio-bitumen consulting")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Run the test**

```bash
npx jest __tests__/components/PageHeader.test.tsx --no-coverage
```

Expected: PASS 1 test

- [ ] **Step 5: Commit**

```bash
git add components/PageHeader.tsx components/CtaStrip.tsx __tests__/components/PageHeader.test.tsx
git commit -m "feat: add PageHeader and CtaStrip components"
```

---

## Task 5: Navbar component

**Files:**
- Create: `components/Navbar.tsx`
- Modify: `app/layout.tsx` (replace `{/* Navbar */}` comment)
- Create: `__tests__/components/Navbar.test.tsx`

- [ ] **Step 1: Write the Navbar component**

```tsx
// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold text-primary tracking-tight">
            PACPL
          </span>
          <span className="text-[10px] font-semibold text-secondary tracking-widest uppercase">
            YUGA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors"
        >
          Get Consulting
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-primary transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-border px-6 py-4 flex flex-col gap-4 md:hidden shadow-lg">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-white text-sm font-semibold px-4 py-3 rounded-lg text-center hover:bg-accent-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Consulting
          </Link>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Write Navbar render test**

```tsx
// __tests__/components/Navbar.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: "Home" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Consulting" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "IT Products" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Pyrolysis" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "About" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Contact" })).toBeTruthy();
  });

  it("toggles mobile menu on hamburger click", async () => {
    render(<Navbar />);
    const hamburger = screen.getByRole("button", { name: "Open menu" });
    await userEvent.click(hamburger);
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run the test**

```bash
npx jest __tests__/components/Navbar.test.tsx --no-coverage
```

Expected: PASS 2 tests

- [ ] **Step 4: Wire Navbar into layout.tsx**

Replace `{/* Navbar */}` in `app/layout.tsx`:

```tsx
// app/layout.tsx — add import at top:
import Navbar from "@/components/Navbar";

// Replace {/* Navbar */} with:
<Navbar />
```

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx __tests__/components/Navbar.test.tsx app/layout.tsx
git commit -m "feat: add Navbar component with mobile hamburger menu"
```

---

## Task 6: Footer component

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx` (replace `{/* Footer */}` comment)

- [ ] **Step 1: Write the Footer component**

```tsx
// components/Footer.tsx
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Col 1: Brand */}
        <div>
          <p className="font-display text-2xl font-extrabold mb-1">PACPL</p>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
            YUGA · Bio-Bitumen Consulting
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            {COMPANY.tagline}
          </p>
          <p className="text-white/40 text-xs mt-4">{COMPANY.hq}</p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Quick Links
          </p>
          <ul className="space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/consulting", label: "Consulting" },
              { href: "/it-products", label: "IT Products" },
              { href: "/pyrolysis", label: "Pyrolysis" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <p className="text-white/70 text-sm mb-2">{COMPANY.phone}</p>
          <p className="text-white/70 text-sm mb-6">{COMPANY.email}</p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>GST: {COMPANY.gst} · PAN: {COMPANY.pan} · CIN: {COMPANY.cin}</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Wire Footer into layout.tsx**

Replace `{/* Footer */}` in `app/layout.tsx`:

```tsx
// app/layout.tsx — add import at top:
import Footer from "@/components/Footer";

// Replace {/* Footer */} with:
<Footer />
```

- [ ] **Step 3: Verify dev server shows Navbar + Footer**

```bash
npm run dev
```

Open http://localhost:3000 — should see sticky navbar at top, dark footer at bottom, empty page body.

- [ ] **Step 4: Commit**

```bash
git add components/Footer.tsx app/layout.tsx
git commit -m "feat: add Footer component and wire Navbar + Footer into layout"
```

---

## Task 7: StageCard + StatsCard shared components

**Files:**
- Create: `components/StageCard.tsx`
- Create: `components/StatsCard.tsx`

- [ ] **Step 1: Write StageCard**

```tsx
// components/StageCard.tsx
import type { FourStage } from "@/lib/company-data";

type Props = { stage: FourStage };

export default function StageCard({ stage }: Props) {
  return (
    <div className="bg-white border border-border border-t-4 border-t-accent rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{stage.icon}</span>
        <span className="text-accent text-xs font-semibold uppercase tracking-widest">
          Stage {stage.stage}
        </span>
      </div>
      <h3 className="font-display text-base text-primary font-bold mb-3 leading-snug">
        {stage.name}
      </h3>
      <p className="text-secondary text-sm leading-relaxed mb-4">{stage.description}</p>
      <dl className="space-y-1 text-xs text-secondary">
        <div className="flex gap-2">
          <dt className="font-semibold text-primary">CAPEX:</dt>
          <dd>{stage.capex}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-primary">Manpower:</dt>
          <dd>{stage.manpower}</dd>
        </div>
        {stage.space && (
          <div className="flex gap-2">
            <dt className="font-semibold text-primary">Space:</dt>
            <dd>{stage.space}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
```

- [ ] **Step 2: Write StatsCard**

```tsx
// components/StatsCard.tsx
import { COMPANY } from "@/lib/company-data";

export default function StatsCard() {
  const stats = [
    { value: `${COMPANY.plantsBuilt}`, label: "Plants Built" },
    { value: `${COMPANY.yearsExperience} yrs`, label: "Experience" },
    { value: COMPANY.industryContacts.toLocaleString(), label: "Industry Contacts" },
    { value: `${COMPANY.statesNetwork}`, label: "States Network" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-accent-border shadow-sm p-6">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5">
        By the Numbers
      </p>
      <div className="grid grid-cols-2 gap-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-surface rounded-xl p-4 text-center">
            <p className="font-display text-3xl font-extrabold text-accent leading-none mb-1">
              {value}
            </p>
            <p className="text-secondary text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/StageCard.tsx components/StatsCard.tsx
git commit -m "feat: add StageCard and StatsCard shared components"
```

---

## Task 8: Home hero + business line components

**Files:**
- Create: `components/SplitHero.tsx`
- Create: `components/BusinessLineCards.tsx`

- [ ] **Step 1: Write SplitHero**

```tsx
// components/SplitHero.tsx
import Link from "next/link";
import StatsCard from "./StatsCard";
import { COMPANY } from "@/lib/company-data";

export default function SplitHero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-primary font-extrabold leading-tight mb-5">
            Complete Plant Setup.{" "}
            <span className="text-accent">From Agro-Waste to Road.</span>
          </h1>
          <p className="text-secondary text-lg leading-relaxed mb-8">
            {COMPANY.usp}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white font-bold px-7 py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider"
            >
              Start Your Plant
            </Link>
            <Link
              href="/it-products"
              className="bg-white text-accent border border-accent-border font-bold px-7 py-4 rounded-xl hover:bg-accent-light transition-colors text-sm uppercase tracking-wider"
            >
              View IT Products
            </Link>
          </div>
        </div>

        {/* Right: stats card */}
        <div>
          <StatsCard />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write BusinessLineCards**

```tsx
// components/BusinessLineCards.tsx
import Link from "next/link";

export default function BusinessLineCards() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Two Business Lines
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Consulting & Technology — One Partner
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Consulting card */}
          <div className="bg-white rounded-2xl border border-border border-t-4 border-t-accent p-8 shadow-sm">
            <span className="text-4xl mb-4 block" aria-hidden="true">🏭</span>
            <h3 className="font-display text-2xl text-primary font-bold mb-3">
              Bio-Bitumen Consulting
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "End-to-end plant setup — site to sales",
                "Project Management (PMC) from DPR to handover",
                "Access to 4,452-contact buyer network",
              ].map((point) => (
                <li key={point} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/consulting"
              className="inline-block bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors text-sm"
            >
              Learn More →
            </Link>
          </div>

          {/* IT Products card */}
          <div className="bg-white rounded-2xl border border-border border-t-4 border-t-accent p-8 shadow-sm">
            <span className="text-4xl mb-4 block" aria-hidden="true">💻</span>
            <h3 className="font-display text-2xl text-primary font-bold mb-3">
              IT Products
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Custom portals, dashboards and mobile apps",
                "Built specifically for the bitumen & industrial sector",
                "From plant management to market intelligence",
              ].map((point) => (
                <li key={point} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/it-products"
              className="inline-block bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors text-sm"
            >
              View Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/SplitHero.tsx components/BusinessLineCards.tsx
git commit -m "feat: add SplitHero and BusinessLineCards home page components"
```

---

## Task 9: WhyNowStrip + CredentialsBar components

**Files:**
- Create: `components/WhyNowStrip.tsx`
- Create: `components/CredentialsBar.tsx`

- [ ] **Step 1: Write WhyNowStrip**

```tsx
// components/WhyNowStrip.tsx
import { WHY_NOW } from "@/lib/company-data";

export default function WhyNowStrip() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
          Market Opportunity
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
          Why Bio-Bitumen, Why Now
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {WHY_NOW.map((reason, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl border border-border p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <span className="text-accent font-extrabold text-3xl leading-none block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-primary text-sm leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write CredentialsBar**

```tsx
// components/CredentialsBar.tsx
import { KEY_CREDENTIALS } from "@/lib/company-data";

export default function CredentialsBar() {
  return (
    <section className="bg-surface py-10 px-6 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5 text-center">
          Credentials
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {KEY_CREDENTIALS.map((cred) => (
            <span
              key={cred}
              className="bg-white border border-accent-border text-primary text-xs font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {cred}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/WhyNowStrip.tsx components/CredentialsBar.tsx
git commit -m "feat: add WhyNowStrip and CredentialsBar components"
```

---

## Task 10: Home page — app/page.tsx

**Files:**
- Create: `app/page.tsx`
- Create: `__tests__/pages/Home.test.tsx`

- [ ] **Step 1: Write the Home page**

```tsx
// app/page.tsx
import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import BusinessLineCards from "@/components/BusinessLineCards";
import WhyNowStrip from "@/components/WhyNowStrip";
import StageCard from "@/components/StageCard";
import CredentialsBar from "@/components/CredentialsBar";
import CtaStrip from "@/components/CtaStrip";
import { FOUR_STAGES } from "@/lib/company-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PACPL — India's Bio-Bitumen Consulting & IT Products Leader",
  description:
    "PPS Anantams Corporation Private Limited. India's leading bio-bitumen plant setup consultant and industrial IT solutions provider. 25 years, 10 plants, 4,452 contacts.",
  openGraph: {
    title: "PACPL — India's Bio-Bitumen Consulting & IT Products Leader",
    description: "End-to-end plant setup consulting. From site selection to commercial production.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <SplitHero />
      <BusinessLineCards />
      <WhyNowStrip />

      {/* Pyrolysis teaser */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            The Technology
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-4">
            How Pyrolysis Works
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Four integrated stages convert agro-waste into commercial bio-bitumen for India&apos;s road network.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
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

      <CredentialsBar />

      <CtaStrip
        heading="Ready to Build Your Plant?"
        subtext="Join 10 successful plant operators who trusted PACPL for their bio-bitumen journey."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 2: Write Home page render test**

```tsx
// __tests__/pages/Home.test.tsx
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders hero headline", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/complete plant setup/i)
    ).toBeInTheDocument();
  });

  it("renders both business line cards", () => {
    render(<HomePage />);
    expect(screen.getByText("Bio-Bitumen Consulting")).toBeInTheDocument();
    expect(screen.getByText("IT Products")).toBeInTheDocument();
  });

  it("renders 4 stage cards", () => {
    render(<HomePage />);
    expect(screen.getByText("Stage 1")).toBeInTheDocument();
    expect(screen.getByText("Stage 4")).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run tests**

```bash
npx jest __tests__/pages/Home.test.tsx --no-coverage
```

Expected: PASS 3 tests

- [ ] **Step 4: Check page visually in browser**

```bash
npm run dev
```

Open http://localhost:3000 — verify hero, two business line cards, why now section, 4 stage cards, credentials bar, and CTA strip all appear.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx __tests__/pages/Home.test.tsx
git commit -m "feat: add Home page with all sections"
```

---

## Task 11: Consulting page components

**Files:**
- Create: `components/ConsultingServiceCard.tsx`
- Create: `components/PmcServiceCard.tsx`
- Create: `components/TargetAudienceCard.tsx`

- [ ] **Step 1: Write ConsultingServiceCard**

```tsx
// components/ConsultingServiceCard.tsx
type Props = {
  category: string;
  items: string[];
};

export default function ConsultingServiceCard({ category, items }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h4 className="text-accent font-semibold mb-4 text-xs uppercase tracking-widest">
        {category}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-secondary text-sm">
            <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Write PmcServiceCard**

```tsx
// components/PmcServiceCard.tsx
import type { PmcService } from "@/lib/company-data";

type Props = { service: PmcService };

export default function PmcServiceCard({ service }: Props) {
  return (
    <div className="bg-white border border-border border-l-4 border-l-accent rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
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
  );
}
```

- [ ] **Step 3: Write TargetAudienceCard**

```tsx
// components/TargetAudienceCard.tsx
import type { TargetAudience } from "@/lib/company-data";

type Props = { audience: TargetAudience };

export default function TargetAudienceCard({ audience }: Props) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
      <h3 className="font-display text-base text-primary font-bold mb-1">{audience.type}</h3>
      <p className="text-accent text-xs font-semibold mb-4">{audience.stages}</p>
      <dl className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div>
          <dt className="text-secondary mb-0.5">Investment</dt>
          <dd className="font-semibold text-primary">{audience.investment}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">DPR Fee</dt>
          <dd className="font-semibold text-primary">{audience.feeDpr}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">Setup Fee</dt>
          <dd className="font-semibold text-primary">{audience.feeSetup}</dd>
        </div>
        <div>
          <dt className="text-secondary mb-0.5">Retainer</dt>
          <dd className="font-semibold text-primary">{audience.feeRetainer}</dd>
        </div>
      </dl>
      <ul className="space-y-1">
        {audience.keyServices.map((s) => (
          <li key={s} className="flex gap-2 text-secondary text-xs">
            <span className="text-accent shrink-0" aria-hidden="true">✓</span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/ConsultingServiceCard.tsx components/PmcServiceCard.tsx components/TargetAudienceCard.tsx
git commit -m "feat: add ConsultingServiceCard, PmcServiceCard, TargetAudienceCard components"
```

---

## Task 12: Consulting page — app/consulting/page.tsx

**Files:**
- Create: `app/consulting/page.tsx`

- [ ] **Step 1: Write the Consulting page**

```tsx
// app/consulting/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StageCard from "@/components/StageCard";
import ConsultingServiceCard from "@/components/ConsultingServiceCard";
import PmcServiceCard from "@/components/PmcServiceCard";
import TargetAudienceCard from "@/components/TargetAudienceCard";
import CtaStrip from "@/components/CtaStrip";
import {
  FOUR_STAGES,
  CONSULTING_SERVICES,
  PMC_SERVICES,
  TARGET_AUDIENCES,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Consulting Services — PACPL",
  description:
    "Bio-bitumen plant consulting and project management. End-to-end A-to-Z service from site selection to commercial production and buyer network access.",
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="Consulting Services"
        subtitle="Two service verticals built around one mission — making bio-bitumen accessible to every Indian investor"
        breadcrumb="Consulting"
      />

      {/* Sticky tab nav */}
      <nav
        className="sticky top-[72px] z-40 bg-white border-b border-border"
        aria-label="Consulting sections"
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
          {[
            { href: "#bio-bitumen", label: "Bio-Bitumen Consulting" },
            { href: "#pmc", label: "Project Management (PMC)" },
            { href: "#audience", label: "Who We Serve" },
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
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Service 01
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Bio-Bitumen Plant Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            End-to-end consulting covering all four stages of a bio-bitumen plant — from raw material
            procurement to market access. The only consultant in India offering this complete scope.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
            ))}
          </div>
          <h3 className="font-display text-2xl text-primary font-bold mb-8">What&apos;s Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(CONSULTING_SERVICES).map(([category, items]) => (
              <ConsultingServiceCard key={category} category={category} items={items} />
            ))}
          </div>
        </div>
      </section>

      {/* PMC Section */}
      <section id="pmc" className="bg-white py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Service 02
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Project Management Consulting
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Full PMC scope from feasibility report to plant commissioning and handover — with optional
            retainer support post-launch.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PMC_SERVICES.map((service) => (
              <PmcServiceCard key={service.category} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="audience" className="bg-surface py-20 px-6 scroll-mt-36">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Who We Serve
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Which Investor Type Are You?
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Our consulting scope adapts to your starting point — whether you&apos;re a new investor or an
            existing operator looking to add bio-bitumen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGET_AUDIENCES.map((audience) => (
              <TargetAudienceCard key={audience.type} audience={audience} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Which Service Do You Need?"
        subtext="Tell us about your project and we'll recommend the right scope."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000/consulting — check three sections (bio-bitumen, PMC, who we serve) render correctly with sticky tab nav.

- [ ] **Step 3: Commit**

```bash
git add app/consulting/page.tsx
git commit -m "feat: add Consulting page with bio-bitumen, PMC, and audience sections"
```

---

## Task 13: ItProductTabs component (client component)

**Files:**
- Create: `components/ItProductTabs.tsx`
- Create: `__tests__/components/ItProductTabs.test.tsx`

- [ ] **Step 1: Write the ItProductTabs component**

```tsx
// components/ItProductTabs.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { IT_SERVICES } from "@/lib/company-data";

export default function ItProductTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = IT_SERVICES[activeIndex];

  return (
    <div>
      {/* Pill tabs */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="IT Products">
        {IT_SERVICES.map((product, i) => (
          <button
            key={product.name}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`panel-${i}`}
            id={`tab-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              i === activeIndex
                ? "bg-accent text-white border-accent"
                : "bg-white text-secondary border-border hover:border-accent hover:text-accent"
            }`}
          >
            {product.name}
          </button>
        ))}
      </div>

      {/* Active panel */}
      {IT_SERVICES.map((product, i) => (
        <div
          key={product.name}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={i !== activeIndex}
        >
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <span className="text-5xl" aria-hidden="true">{product.icon}</span>
              <div>
                <h2 className="font-display text-2xl text-primary font-bold mb-2">
                  {product.name}
                </h2>
                <p className="text-secondary leading-relaxed">{product.description}</p>
              </div>
            </div>

            <h3 className="font-semibold text-primary text-sm uppercase tracking-widest mb-4">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 mb-6">
              {product.name === "Consultant & Client Portals" && [
                "Client onboarding & 4-stage project tracker",
                "Document uploads & version history",
                "Payment milestone tracking & alerts",
                "WhatsApp integration for notifications",
                "Role-based access: consultant vs. client view",
                "Communication logs and status updates",
              ].map((f) => (
                <li key={f} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent shrink-0" aria-hidden="true">✓</span>{f}
                </li>
              ))}
              {product.name === "Plant Management Dashboards" && [
                "Live bio-oil yield tracking by batch",
                "Reactor temperature & pressure logs",
                "Biomass inventory & consumption graphs",
                "Daily dispatch MIS and shift reports",
                "Cost-per-unit analytics",
                "Quality test result entry & history",
              ].map((f) => (
                <li key={f} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent shrink-0" aria-hidden="true">✓</span>{f}
                </li>
              ))}
              {product.name === "Supply Chain & Vendor Systems" && [
                "Vendor shortlisting and scoring matrix",
                "Procurement order tracking end-to-end",
                "Price comparison dashboards",
                "LC document management for imports",
                "Vessel tracking integration",
                "Payment schedule alerts",
              ].map((f) => (
                <li key={f} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent shrink-0" aria-hidden="true">✓</span>{f}
                </li>
              ))}
              {product.name === "Market Intelligence Tools" && [
                "Daily bitumen price feeds from 17 states",
                "Competitor price tracking dashboard",
                "NHAI project pipeline monitor",
                "Margin calculator for traders",
                "Tender alert notifications (email/SMS)",
                "Demand-supply analysis reports",
              ].map((f) => (
                <li key={f} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent shrink-0" aria-hidden="true">✓</span>{f}
                </li>
              ))}
              {product.name === "Mobile Apps for Plant Operations" && [
                "Daily shift report entry (offline-capable)",
                "Dispatch log with photo evidence upload",
                "Quality check form & test entry",
                "Safety incident logging",
                "Supervisor approval workflows",
                "iOS and Android (Progressive Web App)",
              ].map((f) => (
                <li key={f} className="flex gap-2 text-secondary text-sm">
                  <span className="text-accent shrink-0" aria-hidden="true">✓</span>{f}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-light text-accent border border-accent-border text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Example */}
            <blockquote className="border-l-4 border-accent-border pl-4 mb-8">
              <p className="text-secondary/80 text-sm italic leading-relaxed">{product.example}</p>
            </blockquote>

            <Link
              href="/contact"
              className="inline-block bg-accent text-white font-bold px-7 py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider"
            >
              Request This Product
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Write ItProductTabs test**

```tsx
// __tests__/components/ItProductTabs.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItProductTabs from "@/components/ItProductTabs";

describe("ItProductTabs", () => {
  it("renders first product by default", () => {
    render(<ItProductTabs />);
    expect(screen.getByText("Consultant & Client Portals")).toBeInTheDocument();
    expect(screen.getByRole("tabpanel", { hidden: false })).toHaveAccessibleName(
      "Consultant & Client Portals"
    );
  });

  it("switches to second product on tab click", async () => {
    render(<ItProductTabs />);
    const dashboardTab = screen.getByRole("tab", { name: "Plant Management Dashboards" });
    await userEvent.click(dashboardTab);
    expect(dashboardTab).toHaveAttribute("aria-selected", "true");
  });

  it("renders all 5 tab buttons", () => {
    render(<ItProductTabs />);
    expect(screen.getAllByRole("tab")).toHaveLength(5);
  });
});
```

- [ ] **Step 3: Run tests**

```bash
npx jest __tests__/components/ItProductTabs.test.tsx --no-coverage
```

Expected: PASS 3 tests

- [ ] **Step 4: Commit**

```bash
git add components/ItProductTabs.tsx __tests__/components/ItProductTabs.test.tsx
git commit -m "feat: add ItProductTabs client component with tab switching"
```

---

## Task 14: IT Products page — app/it-products/page.tsx

**Files:**
- Create: `app/it-products/page.tsx`

- [ ] **Step 1: Write the IT Products page**

```tsx
// app/it-products/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ItProductTabs from "@/components/ItProductTabs";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "IT Products — PACPL",
  description:
    "Custom software built for the bitumen and industrial sector. Portals, dashboards, supply chain tools, market intelligence, and mobile apps.",
};

export default function ItProductsPage() {
  return (
    <>
      <PageHeader
        title="IT Products"
        subtitle="Custom software built for the bitumen and industrial sector — by people who have lived the industry for 25 years"
        breadcrumb="IT Products"
      />

      {/* Tab switcher */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ItProductTabs />
        </div>
      </section>

      {/* Why PACPL for IT */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Why PACPL
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold text-center mb-12">
            IT Products Built by Industry Insiders
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Deep Domain Expertise",
                description:
                  "25 years in the bitumen industry means we know exactly what data plant operators, consultants, and traders need — not guesswork.",
              },
              {
                icon: "🔗",
                title: "Built-In Client Network",
                description:
                  "We built the first portal for our own consulting practice. Every feature was tested with real users in the bitumen supply chain.",
              },
              {
                icon: "🚀",
                title: "Full-Stack Delivery",
                description:
                  "Design, development, deployment, and ongoing support — one team, no handoffs. We stay involved until your team runs it independently.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <span className="text-4xl mb-4 block" aria-hidden="true">{icon}</span>
                <h3 className="font-display text-lg text-primary font-bold mb-3">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Need a Custom IT Solution?"
        subtext="Tell us about your workflow and we'll design the right tool for your plant or trading operation."
        buttonLabel="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 2: Check in browser**

Open http://localhost:3000/it-products — verify tab switcher works, all 5 products visible, "Why PACPL" section at bottom.

- [ ] **Step 3: Commit**

```bash
git add app/it-products/page.tsx
git commit -m "feat: add IT Products page with tab switcher and trust section"
```

---

## Task 15: Pyrolysis page components + page

**Files:**
- Create: `components/FeedstockCard.tsx`
- Create: `components/OutputCard.tsx`
- Create: `components/PyrolysisProductCard.tsx`
- Create: `app/pyrolysis/page.tsx`

- [ ] **Step 1: Write FeedstockCard**

```tsx
// components/FeedstockCard.tsx
import type { PyrolysisFeedstock } from "@/lib/company-data";
import Image from "next/image";

type Props = { feedstock: PyrolysisFeedstock };

export default function FeedstockCard({ feedstock }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="relative h-40 w-full bg-surface">
        <Image
          src={feedstock.imgSrc}
          alt={feedstock.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span aria-hidden="true">{feedstock.icon}</span>
          <h3 className="font-display text-base text-primary font-bold">{feedstock.name}</h3>
        </div>
        <p className="text-secondary text-sm leading-relaxed mb-3">{feedstock.description}</p>
        <p className="text-accent text-xs font-semibold mb-1">{feedstock.indiaVolume}</p>
        <p className="text-secondary text-xs">{feedstock.highlight}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write OutputCard**

```tsx
// components/OutputCard.tsx
import type { PyrolysisOutput } from "@/lib/company-data";

type Props = { output: PyrolysisOutput };

export default function OutputCard({ output }: Props) {
  return (
    <div className={`rounded-2xl border p-6 ${output.colorClass} hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl" aria-hidden="true">{output.icon}</span>
        <h3 className="font-display text-base text-primary font-bold">{output.name}</h3>
      </div>
      <p className="text-secondary text-xs mb-1">
        <span className="font-semibold text-primary">Yield: </span>{output.yieldRange}
      </p>
      <p className="text-secondary text-xs mb-4">
        <span className="font-semibold text-primary">Energy: </span>{output.heatingValue}
      </p>
      <ul className="space-y-1">
        {output.uses.map((use) => (
          <li key={use} className="flex gap-2 text-secondary text-xs">
            <span className="text-accent shrink-0" aria-hidden="true">→</span>
            {use}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: Write PyrolysisProductCard**

```tsx
// components/PyrolysisProductCard.tsx
import type { PyrolysisProduct } from "@/lib/company-data";

type Props = { product: PyrolysisProduct };

export default function PyrolysisProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl" aria-hidden="true">{product.icon}</span>
        <h3 className="font-display text-base text-primary font-bold">{product.name}</h3>
      </div>
      <p className="text-secondary text-sm leading-relaxed mb-4">{product.description}</p>
      <div className="bg-accent-light border border-accent-border rounded-lg px-3 py-2">
        <p className="text-accent text-xs font-semibold leading-snug">{product.stat}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Write the Pyrolysis page**

```tsx
// app/pyrolysis/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StageCard from "@/components/StageCard";
import FeedstockCard from "@/components/FeedstockCard";
import OutputCard from "@/components/OutputCard";
import PyrolysisProductCard from "@/components/PyrolysisProductCard";
import CtaStrip from "@/components/CtaStrip";
import {
  FOUR_STAGES,
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Pyrolysis Technology — PACPL",
  description:
    "How pyrolysis converts agro-waste into bio-bitumen. Four stages, multiple feedstocks, five commercial products. India's CSIR-CRRI approved technology.",
};

export default function PyrolysisPage() {
  return (
    <>
      <PageHeader
        title="Pyrolysis Technology"
        subtitle="Converting agro-waste and waste streams into high-value commercial products — bio-bitumen, activated carbon, charcoal, and more"
        breadcrumb="Pyrolysis"
      />

      {/* 4-Stage Process */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-12">
            Four Integrated Stages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_STAGES.map((stage) => (
              <StageCard key={stage.stage} stage={stage} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Raw Materials
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            Feedstocks
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            India generates massive volumes of biomass, plastics, and waste tyres — all viable pyrolysis feedstocks with guaranteed local supply.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PYROLYSIS_FEEDSTOCKS.map((feedstock) => (
              <FeedstockCard key={feedstock.name} feedstock={feedstock} />
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            What You Get
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-12">
            Pyrolysis Outputs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYROLYSIS_OUTPUTS.map((output) => (
              <OutputCard key={output.name} output={output} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Products */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            Commercial Products
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-4">
            What Gets Sold
          </h2>
          <p className="text-secondary max-w-2xl mb-12 leading-relaxed">
            Five commercial products with established markets, growing demand, and significant import-substitution opportunity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PYROLYSIS_PRODUCTS.map((product) => (
              <PyrolysisProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Ready to Set Up a Pyrolysis Plant?"
        subtext="We provide end-to-end consulting for all four stages — from raw material sourcing to NHAI-certified bio-bitumen sales."
        buttonLabel="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 5: Check in browser**

Open http://localhost:3000/pyrolysis — verify all four sections: 4 stage cards, 4 feedstock cards with images, 5 output cards, 5 product cards.

- [ ] **Step 6: Commit**

```bash
git add components/FeedstockCard.tsx components/OutputCard.tsx components/PyrolysisProductCard.tsx app/pyrolysis/page.tsx
git commit -m "feat: add Pyrolysis page with feedstocks, outputs, and commercial products"
```

---

## Task 16: CareerTimeline + About page

**Files:**
- Create: `components/CareerTimeline.tsx`
- Create: `app/about/page.tsx`

- [ ] **Step 1: Write CareerTimeline**

```tsx
// components/CareerTimeline.tsx
import { CAREER_TRACK } from "@/lib/company-data";

export default function CareerTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />
      <ul className="space-y-8 pl-12">
        {CAREER_TRACK.map((entry) => (
          <li key={`${entry.year}-${entry.company}`} className="relative">
            {/* Dot */}
            <div
              className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-accent border-2 border-white shadow"
              aria-hidden="true"
            />
            <div className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                  {entry.year}
                </span>
                <span className="font-display text-primary font-bold">{entry.company}</span>
                <span className="text-secondary text-sm">{entry.location}</span>
              </div>
              <p className="text-accent text-xs font-semibold mb-1">{entry.plantType}</p>
              <p className="text-secondary text-sm">{entry.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Write the About page**

```tsx
// app/about/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CareerTimeline from "@/components/CareerTimeline";
import CtaStrip from "@/components/CtaStrip";
import { COMPANY, KEY_CREDENTIALS, INDUSTRY_NETWORK } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About — PACPL",
  description:
    "Prince Pratap Shah — 25 years in the bitumen industry, 10 plants built, BSE-listed founder, Pride of India 2021 awardee.",
};

export default function AboutPage() {
  const networkStats = [
    { label: "Road Contractors", value: INDUSTRY_NETWORK.contractors.toLocaleString() },
    { label: "Bitumen Traders", value: INDUSTRY_NETWORK.traders.toLocaleString() },
    { label: "Importers", value: INDUSTRY_NETWORK.importers.toLocaleString() },
    { label: "Transporters", value: INDUSTRY_NETWORK.transporters.toLocaleString() },
    { label: "Manufacturers", value: INDUSTRY_NETWORK.manufacturers.toLocaleString() },
    { label: "Decanter Units", value: INDUSTRY_NETWORK.decanters.toLocaleString() },
  ];

  return (
    <>
      <PageHeader
        title="About Prince Pratap Shah"
        subtitle="Founder, PACPL · 25 years in the bitumen industry · 10 plants built · Pride of India Icon 2021"
        breadcrumb="About"
      />

      {/* Hero bio block */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
              The Founder
            </p>
            <h2 className="font-display text-3xl text-primary font-bold mb-4">
              India&apos;s Most Experienced Bio-Bitumen Consultant
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Prince Pratap Shah has spent 25 years building, operating, and consulting on bitumen
              processing plants across India. From a GM role at Southern Asphalt in 2001 to founding
              Omnipotent Industries (BSE-listed) and setting up India&apos;s first bio-bitumen consulting
              practice — his career spans every aspect of the bitumen value chain.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              He holds an MBA (Marketing &amp; Finance) from Dr. C.V. Raman University and a Diploma in
              Safety &amp; Fire Management. In 2021, he was recognised with the Pride of India Icon Award
              for Best Fast-Growing Business.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${COMPANY.plantsBuilt}`, label: "Plants Built" },
                { value: `${COMPANY.yearsExperience} yrs`, label: "Industry Experience" },
                { value: COMPANY.industryContacts.toLocaleString(), label: "Live Contacts" },
                { value: `${COMPANY.productTypes}`, label: "Product Types" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-surface rounded-xl p-4 text-center border border-border">
                  <p className="font-display text-3xl font-extrabold text-accent mb-1">{value}</p>
                  <p className="text-secondary text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-5">
              Key Credentials
            </p>
            <div className="grid grid-cols-1 gap-3">
              {KEY_CREDENTIALS.map((cred) => (
                <div
                  key={cred}
                  className="bg-surface rounded-xl border border-border px-4 py-3 flex items-start gap-3"
                >
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden="true">✓</span>
                  <p className="text-primary text-sm font-medium">{cred}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Career Journey
          </p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-12">
            2001 → 2026: 25 Years, 10 Plants
          </h2>
          <CareerTimeline />
        </div>
      </section>

      {/* Network stats */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center">
            Industry Network
          </p>
          <h2 className="font-display text-3xl text-primary font-bold text-center mb-4">
            {INDUSTRY_NETWORK.total.toLocaleString()} Live Contacts
          </h2>
          <p className="text-secondary text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Built over 25 years of active presence across India&apos;s bitumen supply chain — this network is what makes PACPL&apos;s consulting uniquely valuable.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {networkStats.map(({ label, value }) => (
              <div
                key={label}
                className="bg-surface rounded-2xl border border-border p-6 text-center"
              >
                <p className="font-display text-4xl font-extrabold text-accent mb-2">{value}</p>
                <p className="text-secondary text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        heading="Work With India&apos;s Most Experienced Consultant"
        subtext="Get access to 25 years of bitumen industry knowledge and 4,452 live contacts — for your bio-bitumen project."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
```

- [ ] **Step 3: Verify in browser**

Open http://localhost:3000/about — check bio block, career timeline (all entries), credentials grid, and network stats grid.

- [ ] **Step 4: Commit**

```bash
git add components/CareerTimeline.tsx app/about/page.tsx
git commit -m "feat: add About page with career timeline and network stats"
```

---

## Task 17: ContactForm + Contact page

**Files:**
- Create: `components/ContactForm.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/thank-you/page.tsx`
- Create: `__tests__/components/ContactForm.test.tsx`

- [ ] **Step 1: Write ContactForm**

```tsx
// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Static export: use a form service (e.g. Formspree) by adding
    // action="https://formspree.io/f/YOUR_ID" method="POST" to the form tag,
    // or wire up any backend endpoint here.
    // For now, simulate and redirect.
    await new Promise((r) => setTimeout(r, 500));
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Prince Pratap Shah"
            className="w-full border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-primary mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className="w-full border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 99999 99999"
            className="w-full border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project — type of plant, investment range, location, timeline..."
          className="w-full border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Write ContactForm test**

```tsx
// __tests__/components/ContactForm.test.tsx
import { render, screen } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

describe("ContactForm", () => {
  it("renders all required fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run test**

```bash
npx jest __tests__/components/ContactForm.test.tsx --no-coverage
```

Expected: PASS 2 tests

- [ ] **Step 4: Write Contact page**

```tsx
// app/contact/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact — PACPL",
  description:
    "Get in touch with PACPL for bio-bitumen plant consulting or IT product enquiries. Based in Vadodara, Gujarat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Tell us about your project and we'll get back to you within one business day"
        breadcrumb="Contact"
      />

      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="font-display text-2xl text-primary font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Info — 2 cols */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-4">Contact Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-secondary text-xs uppercase tracking-widest mb-1">Phone</dt>
                  <dd className="text-primary font-semibold">{COMPANY.phone}</dd>
                </div>
                <div>
                  <dt className="text-secondary text-xs uppercase tracking-widest mb-1">Email</dt>
                  <dd className="text-primary font-semibold">{COMPANY.email}</dd>
                </div>
                <div>
                  <dt className="text-secondary text-xs uppercase tracking-widest mb-1">Headquarters</dt>
                  <dd className="text-primary font-semibold">{COMPANY.hq}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="font-semibold text-primary mb-4">Company Details</h3>
              <dl className="space-y-2 text-xs text-secondary">
                <div className="flex gap-2">
                  <dt className="font-semibold text-primary shrink-0">GST:</dt>
                  <dd>{COMPANY.gst}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-primary shrink-0">PAN:</dt>
                  <dd>{COMPANY.pan}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-primary shrink-0">CIN:</dt>
                  <dd>{COMPANY.cin}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-accent-light border border-accent-border rounded-2xl p-6">
              <p className="text-accent text-sm font-semibold mb-1">Response Time</p>
              <p className="text-primary text-sm leading-relaxed">
                We typically respond within one business day. For urgent enquiries, call directly on {COMPANY.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Write Thank You page**

```tsx
// app/thank-you/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message Sent — PACPL",
  description: "Thank you for contacting PACPL. We will get back to you within one business day.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-surface min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">✅</div>
        <h1 className="font-display text-3xl text-primary font-bold mb-4">
          Message Sent!
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll review your message and get back to you within one business day.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Verify contact pages in browser**

Open http://localhost:3000/contact — check split layout, form fields, company info panel.

- [ ] **Step 7: Commit**

```bash
git add components/ContactForm.tsx app/contact/page.tsx app/thank-you/page.tsx __tests__/components/ContactForm.test.tsx
git commit -m "feat: add ContactForm, Contact page, and Thank You page"
```

---

## Task 18: 404 page + redirect pages

**Files:**
- Create: `app/not-found.tsx`
- Create: `app/services/page.tsx` (client-side redirect to /consulting)
- Create: `app/why-us/page.tsx` (client-side redirect to /)

- [ ] **Step 1: Write the 404 page**

```tsx
// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-surface min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl font-extrabold text-accent mb-4">404</p>
        <h1 className="font-display text-3xl text-primary font-bold mb-4">Page Not Found</h1>
        <p className="text-secondary leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved or the URL may be wrong.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-accent-hover transition-colors text-sm uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write the /services redirect page**

```tsx
// app/services/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/consulting");
  }, [router]);

  return (
    <section className="bg-surface min-h-screen flex items-center justify-center">
      <p className="text-secondary text-sm">Redirecting to Consulting...</p>
    </section>
  );
}
```

- [ ] **Step 3: Write the /why-us redirect page**

```tsx
// app/why-us/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WhyUsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <section className="bg-surface min-h-screen flex items-center justify-center">
      <p className="text-secondary text-sm">Redirecting...</p>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/not-found.tsx app/services/page.tsx app/why-us/page.tsx
git commit -m "feat: add 404 page and client-side redirects for /services and /why-us"
```

---

## Task 19: Update sitemap.ts

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Read current sitemap.ts**

Open `app/sitemap.ts` and check current routes.

- [ ] **Step 2: Update sitemap with new routes**

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yuga.co.in";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/it-products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pyrolysis`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
```

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: update sitemap with new routes including /consulting and /it-products"
```

---

## Task 20: Full build verification

- [ ] **Step 1: Run all tests**

```bash
npx jest --no-coverage
```

Expected: All tests PASS. Fix any failures before proceeding.

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No TypeScript errors.

- [ ] **Step 3: Lint check**

```bash
npm run lint
```

Expected: No errors.

- [ ] **Step 4: Production build**

```bash
npm run build
```

Expected: Build completes successfully with no errors. All 7 routes generated as static HTML.

- [ ] **Step 5: Manual smoke test — all routes**

Start dev server `npm run dev` and open each route:

| Route | Check |
|---|---|
| http://localhost:3000 | Hero, two business lines, why now, 4 stages, credentials, CTA |
| http://localhost:3000/consulting | Page header, sticky nav, 3 sections, CTA |
| http://localhost:3000/it-products | Tab switcher works (5 tabs), why PACPL section, CTA |
| http://localhost:3000/pyrolysis | 4 stages, 4 feedstocks, 5 outputs, 5 products |
| http://localhost:3000/about | Bio block, timeline, credentials, network stats |
| http://localhost:3000/contact | Split form + info panel |
| http://localhost:3000/services | Redirects to /consulting |
| http://localhost:3000/why-us | Redirects to / |
| http://localhost:3000/nonexistent | Shows 404 page |

- [ ] **Step 6: Mobile responsiveness check**

In Chrome DevTools, toggle device toolbar for iPhone 12. Check Home, IT Products, and Contact pages on mobile viewport. Verify Navbar hamburger works.

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "feat: complete website rebuild on redesign branch — all pages verified"
```
