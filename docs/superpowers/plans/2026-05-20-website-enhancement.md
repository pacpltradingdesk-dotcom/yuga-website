# Website Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the PPS Anantams website from a bio-bitumen-only site to a 3-service company site (Bio-Bitumen + PMC + IT Solutions), add rich images throughout, and create a new `/pyrolysis` deep-dive page.

**Architecture:** All new data goes into `lib/company-data.ts` following the existing pattern of typed export constants. Pages are Next.js 16 App Router server components using Tailwind CSS v4. Images use `next/image` with `fill` prop inside a `relative`-positioned container — the `unoptimized: true` config already allows external Unsplash URLs.

**Tech Stack:** Next.js 16, Tailwind CSS v4, TypeScript, Jest + React Testing Library, `next/image`, Unsplash CDN

---

## File Map

| File | Action | What changes |
|---|---|---|
| `lib/company-data.ts` | Modify | Add 5 new typed export arrays |
| `components/Navbar.tsx` | Modify | Add Pyrolysis link to NAV_LINKS |
| `components/HeroSection.tsx` | Modify | Dark gradient bg + Unsplash image overlay |
| `app/page.tsx` | Modify | Replace FOUR_STAGES grid with 3-pillar cards + Pyrolysis teaser |
| `app/services/page.tsx` | Modify | Add anchor tab row, PMC section, IT section, header image |
| `app/pyrolysis/page.tsx` | **Create** | New page: feedstocks, process, outputs, products, market stats |
| `app/about/page.tsx` | Modify | Header image, founder avatar image, photo gallery |
| `app/why-us/page.tsx` | Modify | Header image, visual strip |
| `app/contact/page.tsx` | Modify | Header image |
| `__tests__/company-data-additions.test.ts` | **Create** | Shape tests for 5 new data arrays |
| `__tests__/Navbar.test.tsx` | Modify | Add Pyrolysis link assertion |

---

## Task 1: Add New Data Arrays to company-data.ts

**Files:**
- Modify: `lib/company-data.ts`
- Create: `__tests__/company-data-additions.test.ts`

---

- [ ] **Step 1: Write failing tests for the new data shapes**

Create `__tests__/company-data-additions.test.ts`:

```typescript
import {
  PMC_SERVICES,
  IT_SERVICES,
  PYROLYSIS_FEEDSTOCKS,
  PYROLYSIS_OUTPUTS,
  PYROLYSIS_PRODUCTS,
} from "@/lib/company-data";

describe("PMC_SERVICES", () => {
  it("has 6 items", () => {
    expect(PMC_SERVICES).toHaveLength(6);
  });
  it("each item has required fields", () => {
    PMC_SERVICES.forEach((s) => {
      expect(s.category).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(Array.isArray(s.deliverables)).toBe(true);
      expect(s.deliverables.length).toBeGreaterThan(0);
    });
  });
});

describe("IT_SERVICES", () => {
  it("has 5 items", () => {
    expect(IT_SERVICES).toHaveLength(5);
  });
  it("each item has required fields", () => {
    IT_SERVICES.forEach((s) => {
      expect(s.name).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.example).toBeTruthy();
      expect(Array.isArray(s.tags)).toBe(true);
    });
  });
});

describe("PYROLYSIS_FEEDSTOCKS", () => {
  it("has 4 items", () => {
    expect(PYROLYSIS_FEEDSTOCKS).toHaveLength(4);
  });
  it("each item has required fields", () => {
    PYROLYSIS_FEEDSTOCKS.forEach((f) => {
      expect(f.name).toBeTruthy();
      expect(f.icon).toBeTruthy();
      expect(f.description).toBeTruthy();
      expect(f.indiaVolume).toBeTruthy();
      expect(f.highlight).toBeTruthy();
    });
  });
});

describe("PYROLYSIS_OUTPUTS", () => {
  it("has 5 items", () => {
    expect(PYROLYSIS_OUTPUTS).toHaveLength(5);
  });
  it("each item has required fields", () => {
    PYROLYSIS_OUTPUTS.forEach((o) => {
      expect(o.name).toBeTruthy();
      expect(o.icon).toBeTruthy();
      expect(o.yieldRange).toBeTruthy();
      expect(o.heatingValue).toBeTruthy();
      expect(Array.isArray(o.uses)).toBe(true);
      expect(o.uses.length).toBeGreaterThan(0);
    });
  });
});

describe("PYROLYSIS_PRODUCTS", () => {
  it("has 5 items", () => {
    expect(PYROLYSIS_PRODUCTS).toHaveLength(5);
  });
  it("each item has required fields", () => {
    PYROLYSIS_PRODUCTS.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.icon).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.stat).toBeTruthy();
    });
  });
});
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
cd D:\rahul\pacpl-website
npx jest company-data-additions --no-coverage
```

Expected: FAIL — `PMC_SERVICES` is not exported from `@/lib/company-data`

---

- [ ] **Step 3: Add new type definitions and data arrays to company-data.ts**

Open `lib/company-data.ts` and append the following at the end of the file (after the existing `CONSULTING_SERVICES` export):

```typescript
// ── PMC Services ──────────────────────────────────────────────────────────────

export type PmcService = {
  category: string;
  icon: string;
  description: string;
  deliverables: string[];
};

export const PMC_SERVICES: PmcService[] = [
  {
    category: "Feasibility & DPR",
    icon: "📋",
    description: "Project feasibility studies, detailed project reports, financial modelling, ROI analysis, and land/site assessment before a single rupee is spent.",
    deliverables: ["Feasibility Report", "Detailed Project Report (DPR)", "Financial projections & ROI model", "Site assessment report"],
  },
  {
    category: "Procurement Management",
    icon: "🔧",
    description: "End-to-end vendor identification, RFQ preparation, quotation comparison, price negotiation, and purchase order management for machinery and materials.",
    deliverables: ["Vendor shortlist & scoring matrix", "Technical specifications", "Price benchmarking report", "PO tracking & follow-up"],
  },
  {
    category: "Civil & Construction Supervision",
    icon: "🏗️",
    description: "On-site supervision of civil works, structural fabrication, equipment foundations, and utility installation to ensure quality and schedule compliance.",
    deliverables: ["Daily/weekly site progress reports", "Quality inspection checklists", "Milestone MIS dashboard", "Snag list & close-out report"],
  },
  {
    category: "Regulatory Clearances",
    icon: "📜",
    description: "Complete regulatory support from PCB NOC to factory license, fire safety NOC, MSME registration, and electricity/water connections — no clearance left pending.",
    deliverables: ["PCB / CPCB NOC", "Factory License (Factories Act)", "Fire NOC", "MSME Udyam Registration", "Electricity & water NOC"],
  },
  {
    category: "Commissioning & Training",
    icon: "⚙️",
    description: "Full plant commissioning including trial runs, quality calibration, operator training, and SOP documentation so your team runs the plant independently from day one.",
    deliverables: ["Trial run report & sign-off", "Quality test certificates", "Operator training (classroom + hands-on)", "SOPs & maintenance manual"],
  },
  {
    category: "Post-Handover Support",
    icon: "🤝",
    description: "Monthly retainer-based support: troubleshooting, market intelligence updates, buyer introductions, and process optimisation as the plant scales up.",
    deliverables: ["Monthly review calls", "Performance benchmarking", "Market intelligence updates", "Buyer/supplier introductions"],
  },
];

// ── IT Services ───────────────────────────────────────────────────────────────

export type ItService = {
  name: string;
  icon: string;
  description: string;
  example: string;
  tags: string[];
};

export const IT_SERVICES: ItService[] = [
  {
    name: "Consultant & Client Portals",
    icon: "🖥️",
    description: "Custom web portals for consultants and their clients — dashboards, document management, project stage tracking, communication logs, and payment milestone tracking.",
    example: "Bio-bitumen consultant portal built for PPS Anantams: client onboarding, 4-stage project tracker, document uploads, payment milestones, and WhatsApp integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Plant Management Dashboards",
    icon: "📊",
    description: "Real-time production tracking dashboards: daily output, raw material consumption, quality test results, cost-per-unit analytics, and dispatch logs.",
    example: "Pyrolysis plant dashboard: live bio-oil yield tracking, reactor temperature logs, biomass inventory, dispatch MIS, and daily shift reports.",
    tags: ["Data visualisation", "REST APIs", "Real-time updates"],
  },
  {
    name: "Supply Chain & Vendor Systems",
    icon: "🔗",
    description: "Vendor management portals, procurement tracking, price comparison dashboards, and purchase order automation for industrial supply chains.",
    example: "Bitumen import tracking system: vessel tracking, SGS certificates, LC document management, payment schedule alerts.",
    tags: ["Workflow automation", "Document management", "Notifications"],
  },
  {
    name: "Market Intelligence Tools",
    icon: "📈",
    description: "Competitor price tracking dashboards, demand-supply analysis, NHAI project pipeline monitors, and buyer/seller matching tools for industrial markets.",
    example: "Bitumen price tracker: daily price feeds from 17 states, competitor mapping, margin calculator, and tender alert notifications.",
    tags: ["Data aggregation", "Pricing intelligence", "Email/SMS alerts"],
  },
  {
    name: "Mobile Apps for Plant Operations",
    icon: "📱",
    description: "Field-ready mobile apps for plant supervisors: shift reports, quality test entry, safety checklists, incident logging, and photo uploads — offline-capable.",
    example: "Plant supervisor app: daily shift report entry, dispatch log, quality check form, safety incident logging with photo evidence upload.",
    tags: ["Progressive Web App", "Offline-capable", "iOS & Android"],
  },
];

// ── Pyrolysis Data ─────────────────────────────────────────────────────────────

export type PyrolysisFeedstock = {
  name: string;
  icon: string;
  description: string;
  indiaVolume: string;
  highlight: string;
  imgSrc: string;
};

export const PYROLYSIS_FEEDSTOCKS: PyrolysisFeedstock[] = [
  {
    name: "Agricultural Biomass",
    icon: "🌾",
    description: "Rice husk, sugarcane bagasse, cotton stalk, wheat straw, coconut shell, and wood waste from India's vast agro-processing sector.",
    indiaVolume: "750 million MT/year available (MNRE estimate)",
    highlight: "Rice straw: 100–120 MT/yr · Bagasse: 130–150 MT/yr · Coconut shell: 5 MT/yr",
    imgSrc: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
  },
  {
    name: "Plastic Waste",
    icon: "♻️",
    description: "LDPE, HDPE, PP, and mixed plastics from packaging, bottles, and films. India's plastic waste is growing — and only 8% is formally recycled.",
    indiaVolume: "15.5 million MT/year generated across India",
    highlight: "LDPE yields 93% pyrolysis oil · Plastic oil has >40 MJ/kg — diesel equivalent",
    imgSrc: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&q=80",
  },
  {
    name: "End-of-Life Tyres",
    icon: "🚗",
    description: "Scrap tyres from cars, trucks, and heavy machinery. EPR regulations now mandate formal recycling — creating a guaranteed feedstock supply.",
    indiaVolume: "2.5 million MT/year generated; additional 1.8 MT imported for recycling",
    highlight: "1,000 kg of tyres → 450 L fuel oil + 330 kg carbon black + 125 kg syngas",
    imgSrc: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
  },
  {
    name: "Municipal Solid Waste",
    icon: "🏙️",
    description: "The combustible, non-organic fraction (RDF) from urban waste — plastics, paper, and textiles — is suitable for thermal pyrolysis.",
    indiaVolume: "1,50,000–1,70,000 tonnes/day generated across Indian cities",
    highlight: "Swachh Bharat Mission actively supports Waste-to-Energy conversion pathways",
    imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
];

export type PyrolysisOutput = {
  name: string;
  icon: string;
  yieldRange: string;
  heatingValue: string;
  uses: string[];
  colorClass: string;
};

export const PYROLYSIS_OUTPUTS: PyrolysisOutput[] = [
  {
    name: "Bio-Oil / Pyrolysis Oil",
    icon: "🛢️",
    yieldRange: "60–70% of dry biomass weight (fast pyrolysis)",
    heatingValue: "14–18 MJ/kg as-produced; upgradeable to 35 MJ/kg",
    uses: ["Industrial boiler & furnace fuel", "Bio-bitumen feedstock for roads", "Chemical extraction (phenols, acetic acid)", "Diesel blending after hydrotreatment"],
    colorClass: "bg-orange-50 border-orange-200",
  },
  {
    name: "Bio-Char / Charcoal",
    icon: "⚫",
    yieldRange: "25–35% of biomass (slow pyrolysis optimised for char)",
    heatingValue: "28–32 MJ/kg — comparable to sub-bituminous coal",
    uses: ["Soil amendment & carbon sequestration", "Charcoal briquettes for industry & export", "Activated carbon precursor", "Industrial process fuel"],
    colorClass: "bg-gray-50 border-gray-200",
  },
  {
    name: "Syngas (Producer Gas)",
    icon: "💨",
    yieldRange: "10–20% of biomass; 60–80% in flash pyrolysis",
    heatingValue: "4–18 MJ/Nm³ depending on feedstock and temperature",
    uses: ["Recirculated to heat the pyrolysis reactor (self-sufficient energy loop)", "Power generation via gas engines/turbines", "BioCNG production under SATAT scheme", "Fischer-Tropsch chemical synthesis"],
    colorClass: "bg-blue-50 border-blue-200",
  },
  {
    name: "Carbon Black (Tyre Pyrolysis)",
    icon: "🖤",
    yieldRange: "~330 kg per tonne of waste tyres processed",
    heatingValue: "Recovered carbon black (rCB) — direct substitute for virgin CB grades N330/N550",
    uses: ["Rubber & tyre manufacturing reinforcement", "Printing inks & pigments", "Plastic compounding & UV protection", "Asphalt & concrete filler"],
    colorClass: "bg-slate-50 border-slate-200",
  },
  {
    name: "Pyrolysis Fuel Oil (Plastic)",
    icon: "⛽",
    yieldRange: "600–930 litres per tonne of plastic input",
    heatingValue: ">40 MJ/kg — diesel-equivalent calorific value",
    uses: ["Industrial diesel substitute for boilers & generators", "Blending with conventional diesel (up to 30%)", "Shipping & marine fuel (blended)", "Petrochemical cracker feedstock"],
    colorClass: "bg-yellow-50 border-yellow-200",
  },
];

export type PyrolysisProduct = {
  name: string;
  icon: string;
  description: string;
  stat: string;
};

export const PYROLYSIS_PRODUCTS: PyrolysisProduct[] = [
  {
    name: "Bio-Bitumen / Bio-Asphalt",
    icon: "🛣️",
    description: "Replaces 15–30% of petroleum bitumen in road construction. India became the first country globally to commercially produce bio-bitumen (Jan 2026, CSIR-CRRI + Ministry Gadkari).",
    stat: "Up to 70% lower GHG emissions vs conventional petroleum bitumen",
  },
  {
    name: "Activated Carbon",
    icon: "🔬",
    description: "High-surface-area carbon (500–1,500 m²/g) produced by activating biochar with steam or chemicals. Used in water treatment, air purification, gold recovery, and pharmaceuticals.",
    stat: "India activated carbon market: USD 241 million (2024), growing at 4.5% CAGR",
  },
  {
    name: "Charcoal Briquettes",
    icon: "🔥",
    description: "Uniform high-energy briquettes (28–32 MJ/kg) formed from biochar + natural binder. Used in industrial kilns, hookah/shisha export, restaurant BBQ, and rural cooking fuel.",
    stat: "India charcoal market valued at USD 8 billion (2025), growing 4.1% annually",
  },
  {
    name: "Recovered Carbon Black (rCB)",
    icon: "⚫",
    description: "Processed rCB from tyre pyrolysis replaces virgin carbon black grades N330, N550, N660 in rubber, tyres, plastics, and printing inks — a strategic import substitute.",
    stat: "India imports 2.5 million MT of virgin carbon black annually — rCB addresses this directly",
  },
  {
    name: "Alternative Fuels (BioCNG / Fuel Oil)",
    icon: "⚡",
    description: "Plastic pyrolysis oil as industrial diesel substitute; syngas-derived BioCNG under SATAT scheme; tyre pyrolysis oil for cement kilns, boilers, and power generation.",
    stat: "India's total Waste-to-Energy potential: >5,000 MW (MNRE estimate)",
  },
];
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx jest company-data-additions --no-coverage
```

Expected: PASS — all 10 tests green

- [ ] **Step 5: Commit**

```bash
git add lib/company-data.ts __tests__/company-data-additions.test.ts
git commit -m "feat: add PMC, IT, and pyrolysis data arrays to company-data"
```

---

## Task 2: Update Navbar — Add Pyrolysis Link

**Files:**
- Modify: `components/Navbar.tsx`
- Modify: `__tests__/Navbar.test.tsx`

---

- [ ] **Step 1: Add Pyrolysis assertion to Navbar test**

Open `__tests__/Navbar.test.tsx`. Find the "renders all nav links" test and add one assertion:

```typescript
it("renders all nav links", () => {
  render(<Navbar />);
  expect(screen.getByText("About Us")).toBeInTheDocument();
  expect(screen.getByText("Services")).toBeInTheDocument();
  expect(screen.getByText("Pyrolysis")).toBeInTheDocument();
  expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest Navbar --no-coverage
```

Expected: FAIL — "Unable to find an element with the text: Pyrolysis"

- [ ] **Step 3: Add Pyrolysis to NAV_LINKS in Navbar.tsx**

Open `components/Navbar.tsx`. Find the `NAV_LINKS` array and add the Pyrolysis entry between Services and Why Choose Us:

```typescript
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pyrolysis", label: "Pyrolysis" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
];
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx jest Navbar --no-coverage
```

Expected: PASS — all 3 Navbar tests green

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: add Pyrolysis link to navbar"
```

---

## Task 3: Update HeroSection — Dark Background with Image

**Files:**
- Modify: `components/HeroSection.tsx`

The existing test checks for text content only (`/Bio-Modified Bitumen/`, "Get Free Consultation", "Explore Services") — all three remain unchanged. No test update needed. Run the existing test after implementation to confirm.

---

- [ ] **Step 1: Rewrite HeroSection.tsx**

Replace the full content of `components/HeroSection.tsx` with:

```tsx
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company-data";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-gray-900 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80"
          alt="Aerial view of road construction"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            India&apos;s #1 Bio-Bitumen Consultant
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {COMPANY.tagline}
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-2xl">{COMPANY.usp}</p>
          <p className="text-sm text-gray-400 mb-8">{COMPANY.experience}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-bold text-lg text-center transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Run existing HeroSection tests**

```bash
npx jest HeroSection --no-coverage
```

Expected: PASS — all 3 tests green (text content unchanged)

- [ ] **Step 3: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "feat: add dark gradient background and image overlay to hero"
```

---

## Task 4: Update Home Page — 3 Pillars + Pyrolysis Teaser

**Files:**
- Modify: `app/page.tsx`

---

- [ ] **Step 1: Replace app/page.tsx with enhanced version**

```tsx
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import { WHY_NOW } from "@/lib/company-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Three Ways We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Three Ways We Help</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From pyrolysis plant setup to project management to custom industrial software — complete support for ambitious entrepreneurs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Bio-Bitumen Consulting",
                description: "End-to-end consulting for bio-bitumen plant setup — site selection, raw material sourcing, plant commissioning, VG-30 supply, and NHAI-approved sales through our 4,452-contact network.",
                href: "/services#bio-bitumen",
                imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                imgAlt: "Hot asphalt road construction",
              },
              {
                icon: "📋",
                title: "Project Management (PMC)",
                description: "Full project management consulting — feasibility studies, procurement, civil supervision, regulatory clearances, commissioning, and monthly retainer support.",
                href: "/services#pmc",
                imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
                imgAlt: "Construction site management and supervision",
              },
              {
                icon: "💻",
                title: "IT Solutions",
                description: "Custom industrial software — portals, plant dashboards, supply chain tools, market intelligence systems, and mobile apps built for bitumen and pyrolysis operations.",
                href: "/services#it-solutions",
                imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                imgAlt: "Software dashboard analytics on screen",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-44">
                  <Image src={item.imgSrc} alt={item.imgAlt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <Link href={item.href} className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now — market opportunity */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            {WHY_NOW.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-green-700 rounded-xl p-4">
                <span className="text-orange-300 font-bold text-lg mt-0.5 shrink-0">→</span>
                <p className="text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Start Your Plant Journey Today
            </Link>
          </div>
        </div>
      </section>

      {/* Pyrolysis Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                The Technology Behind Bio-Bitumen
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Pyrolysis?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pyrolysis converts agricultural waste, plastic, and tyres into valuable products — bio-oil, biochar, syngas, and carbon black — using heat in an oxygen-free environment. No combustion. No open flame. Pure value extraction from waste.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "India has 750 million MT of biomass available annually (MNRE)",
                  "1 tonne of biomass yields 600–700 kg of bio-oil via fast pyrolysis",
                  "India became the world's first country to commercially produce bio-bitumen (Jan 2026)",
                ].map((stat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-orange-500 font-bold shrink-0 mt-0.5">→</span>
                    {stat}
                  </li>
                ))}
              </ul>
              <Link href="/pyrolysis"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                Explore Pyrolysis In Depth →
              </Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                alt="Agricultural biomass — wheat fields at sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us teaser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PPS Anantams?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            India&apos;s only consultant offering complete end-to-end service — from site selection to your first sale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "🏭", title: "10 Plants Built", desc: "Hands-on experience across 5 plant types in multiple states" },
              { icon: "🤝", title: "4,452 Contacts", desc: "Live network: contractors, traders, importers, NHAI" },
              { icon: "🌍", title: "Global Supply", desc: "International VG-30 contract — 2.4 Lakh MT/yr from Iraq" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/why-us" className="text-green-600 hover:text-green-700 font-medium">
            See all reasons to choose us →
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run full test suite to check no regressions**

```bash
npx jest --no-coverage
```

Expected: PASS — all 31+ existing tests green

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: replace home services grid with 3-pillar cards and pyrolysis teaser"
```

---

## Task 5: Expand Services Page — PMC + IT Sections

**Files:**
- Modify: `app/services/page.tsx`

---

- [ ] **Step 1: Replace app/services/page.tsx with expanded version**

```tsx
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES, TARGET_AUDIENCES, CONSULTING_SERVICES, PMC_SERVICES, IT_SERVICES } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — PPS Anantams",
  description: "Bio-Bitumen consulting, Project Management (PMC), and IT Solutions for industrial entrepreneurs. End-to-end support from PPS Anantams.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
            alt="Industrial plant equipment"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Bio-Bitumen plant consulting, Project Management, and custom IT Solutions — complete support for industrial entrepreneurs.
          </p>
        </div>
      </section>

      {/* Anchor Tab Row */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {[
              { href: "#bio-bitumen", label: "🏭 Bio-Bitumen" },
              { href: "#pmc", label: "📋 Project Management" },
              { href: "#it-solutions", label: "💻 IT Solutions" },
            ].map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bio-Bitumen Section ─────────────────────── */}
      <div id="bio-bitumen" className="scroll-mt-28">
        {/* 4 Stages */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🏭</span>
              <h2 className="text-2xl font-bold text-gray-900">Bio-Bitumen Consulting</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Complete end-to-end consulting for bio-bitumen plant setup across all 4 production stages — from raw material sourcing to commercial VG-30 supply.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">4 Stages of Bio-Bitumen Production</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUR_STAGES.map((stage) => <ServiceCard key={stage.stage} stage={stage} />)}
            </div>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who Do We Serve?</h3>
            <p className="text-gray-600 mb-8">We tailor our services to your starting position.</p>
            <div className="space-y-4">
              {TARGET_AUDIENCES.map((audience) => (
                <div key={audience.type} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{audience.type}</h3>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                          {audience.stages}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-green-600 mb-3">Investment: {audience.investment}</p>
                      <ul className="space-y-1">
                        {audience.keyServices.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-green-500 font-bold shrink-0">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-sm min-w-[160px]">
                      <div className="font-semibold text-gray-700 mb-2">Consulting Fees</div>
                      <div className="space-y-1 text-gray-600">
                        <div><span className="font-medium">DPR:</span> {audience.feeDpr}</div>
                        <div><span className="font-medium">Setup:</span> {audience.feeSetup}</div>
                        <div><span className="font-medium">Retainer:</span> {audience.feeRetainer}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Scope */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-8">What We Cover</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(CONSULTING_SERVICES).map(([category, services]) => (
                <div key={category} className="bg-gray-50 rounded-2xl p-5">
                  <h4 className="font-bold text-gray-900 mb-3">{category}</h4>
                  <ul className="space-y-1.5">
                    {services.map((service, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── PMC Section ────────────────────────────── */}
      <div id="pmc" className="scroll-mt-28">
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📋</span>
              <h2 className="text-2xl font-bold text-gray-900">Project Management Consulting (PMC)</h2>
            </div>
            <p className="text-gray-600 mb-3 max-w-3xl">
              Industrial projects fail most often due to poor vendor management, missed clearances, and supervision gaps. Our PMC service covers every step from feasibility to post-handover so your project delivers on time and within budget.
            </p>
            <div className="relative h-56 rounded-2xl overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80"
                alt="Engineering and project management at a construction site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center px-8">
                <div className="text-white max-w-md">
                  <p className="text-xl font-bold mb-2">End-to-end project delivery</p>
                  <p className="text-sm text-blue-100">From feasibility study to post-commissioning retainer — we stay with you at every stage.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PMC_SERVICES.map((service) => (
                <div key={service.category} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.category}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Deliverables</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <span className="text-blue-500 font-bold shrink-0">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-gray-700 mb-4">Need a full project managed end-to-end? Let&apos;s discuss scope and pricing.</p>
              <Link href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
                Request PMC Proposal
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── IT Solutions Section ────────────────────── */}
      <div id="it-solutions" className="scroll-mt-28">
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💻</span>
              <h2 className="text-2xl font-bold text-white">IT Solutions</h2>
            </div>
            <p className="text-gray-300 mb-10 max-w-3xl">
              We build custom software specifically for industrial and bitumen businesses — not generic SaaS, but tools designed around the exact workflows of pyrolysis plants, bitumen trading, and project consulting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {IT_SERVICES.map((service) => (
                <div key={service.name} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-gray-700 pt-3 mb-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Example Built</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{service.example}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Study Highlight */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-6 border border-green-700">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="text-4xl shrink-0">🖥️</div>
                <div>
                  <p className="text-xs font-semibold text-green-300 uppercase tracking-wide mb-2">Case Study — Live Product</p>
                  <h3 className="text-xl font-bold text-white mb-2">Bio-Bitumen Consultant Portal</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Built for PPS Anantams: a full-stack web portal allowing consultant and clients to track plant setup progress across all 4 stages, upload documents, view payment milestones, and communicate — all in one place. Demonstrates the kind of industrial software we build.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 16", "TypeScript", "Tailwind CSS", "Static Export", "Formspree"].map((tag) => (
                      <span key={tag} className="text-xs bg-green-700 text-green-100 px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">Have an industrial software need? We scoping new projects from the bitumen, pyrolysis, and infrastructure sectors.</p>
              <Link href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block">
                Discuss Your Software Project
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-12 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <p className="text-gray-600 mb-6">Get a free consultation to discuss your bio-bitumen plant, PMC project, or software requirement.</p>
          <Link href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: PASS — all tests green (services page has no unit tests, only build-verified)

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: expand services page with PMC and IT Solutions sections"
```

---

## Task 6: Create New Pyrolysis Page

**Files:**
- Create: `app/pyrolysis/page.tsx`

---

- [ ] **Step 1: Create app/pyrolysis/page.tsx**

```tsx
import Image from "next/image";
import { PYROLYSIS_FEEDSTOCKS, PYROLYSIS_OUTPUTS, PYROLYSIS_PRODUCTS } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pyrolysis — PPS Anantams",
  description: "Complete guide to pyrolysis: feedstocks, process, outputs (bio-oil, biochar, syngas, carbon black), and value-added products. India market data and MNRE schemes.",
};

const PROCESS_STEPS = [
  { step: 1, title: "Feed Preparation", desc: "Feedstock is dried to below 10% moisture, shredded or pelletised to uniform size for consistent reactor throughput." },
  { step: 2, title: "Reactor Loading", desc: "Material is loaded into the pyrolysis reactor (rotary kiln, fixed bed, or fluidised bed). Oxygen is purged to prevent combustion." },
  { step: 3, title: "Thermal Decomposition", desc: "Reactor is heated to 300–900°C. Long polymer chains in biomass, plastic, or rubber break apart into vapours and solid residue." },
  { step: 4, title: "Vapour Condensation", desc: "Hot vapours exit the reactor and pass through a condenser. Liquids collect as bio-oil or pyrolysis fuel oil." },
  { step: 5, title: "Gas & Char Collection", desc: "Non-condensable gases (syngas) are captured for energy use. Solid residue (biochar or carbon black) is removed from the reactor." },
  { step: 6, title: "Product Dispatch", desc: "Bio-oil is refined for bio-bitumen or fuel use. Char is processed into briquettes or activated carbon. Syngas heats the reactor — self-sufficient energy loop." },
];

const MARKET_STATS = [
  { value: "750M MT", label: "Biomass available in India annually", source: "MNRE" },
  { value: "15.5M MT", label: "Plastic waste generated in India/year", source: "CSIRO" },
  { value: "2.5M MT", label: "End-of-life tyres generated annually", source: "Weibold" },
  { value: ">5,000 MW", label: "India's total Waste-to-Energy potential", source: "MNRE" },
  { value: "USD 241M", label: "India activated carbon market (2024)", source: "Expert Market Research" },
  { value: "USD 8B", label: "India charcoal market (2025)", source: "Expert Market Research" },
];

export default function PyrolysisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80"
            alt="Industrial fire and heat — pyrolysis process"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Technology Deep-Dive
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Pyrolysis: Turning Waste Into Wealth
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Heat organic waste in the absence of oxygen. Get bio-oil, biochar, syngas, and carbon black. This is the technology behind bio-bitumen — and the foundation of India&apos;s waste-to-energy future.
          </p>
          <Link href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-block">
            Set Up Your Pyrolysis Plant →
          </Link>
        </div>
      </section>

      {/* What is Pyrolysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Pyrolysis?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The word comes from Greek: <em>pyro</em> (fire) + <em>lysis</em> (decomposition). Pyrolysis is the thermal breakdown of organic or carbon-based materials at high temperatures — in a completely oxygen-free environment.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                When you burn something in open air, it combusts and disappears as smoke and ash. Pyrolysis does something far more valuable — it uses heat (300–900°C) inside a sealed, oxygen-free reactor to break down waste into three useful, sellable products simultaneously: a liquid fuel, a solid carbon material, and a combustible gas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No open flame. No combustion. No waste going to landfill. This is what makes pyrolysis a <strong>waste-to-wealth</strong> technology: materials that would otherwise be burned as stubble or buried in landfills are converted into industrial inputs and fuels.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Three Types of Pyrolysis</h3>
              <div className="space-y-4">
                {[
                  { type: "Slow Pyrolysis", temp: "300–500°C", primary: "Bio-Char (25–35% yield)", use: "Charcoal, activated carbon, soil amendment" },
                  { type: "Fast Pyrolysis", temp: "400–600°C", primary: "Bio-Oil (60–70% yield)", use: "Fuel oil, bio-bitumen, chemicals" },
                  { type: "Flash Pyrolysis", temp: "700–1,000°C", primary: "Syngas (60–80% volume)", use: "BioCNG, power generation, hydrogen" },
                ].map((row) => (
                  <div key={row.type} className="bg-white rounded-xl p-4 border border-orange-100">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-gray-900 text-sm">{row.type}</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{row.temp}</span>
                    </div>
                    <p className="text-xs text-green-700 font-semibold mb-1">Primary product: {row.primary}</p>
                    <p className="text-xs text-gray-500">{row.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedstocks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What Goes In — Feedstocks</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Any carbon-based waste material can be pyrolysed. India has abundant feedstocks — most of which currently go to landfills or are openly burned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PYROLYSIS_FEEDSTOCKS.map((feedstock) => (
              <div key={feedstock.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image
                    src={feedstock.imgSrc}
                    alt={feedstock.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-2xl mr-2">{feedstock.icon}</span>
                    <span className="font-bold">{feedstock.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feedstock.description}</p>
                  <div className="bg-green-50 rounded-lg p-3 mb-2">
                    <span className="text-xs font-semibold text-green-700">India Volume: </span>
                    <span className="text-xs text-green-700">{feedstock.indiaVolume}</span>
                  </div>
                  <p className="text-xs text-orange-600 font-medium">→ {feedstock.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works — The Process</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Six steps from raw waste to valuable products.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 mt-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Products */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-3">What Comes Out — Output Products</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Every pyrolysis run produces up to three simultaneous outputs — liquid, solid, and gas — all commercially valuable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_OUTPUTS.map((output) => (
              <div key={output.name} className={`rounded-2xl p-6 border ${output.colorClass}`}>
                <div className="text-3xl mb-3">{output.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{output.name}</h3>
                <div className="space-y-1 mb-3">
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Yield:</span> {output.yieldRange}</p>
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Energy:</span> {output.heatingValue}</p>
                </div>
                <ul className="space-y-1">
                  {output.uses.map((use, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-green-500 shrink-0 font-bold">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Value-Added End Products</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Pyrolysis outputs are not end products — they are industrial inputs. Here is what you can manufacture from them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYROLYSIS_PRODUCTS.map((product) => (
              <div key={product.name} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-700 font-medium">→ {product.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">India Market Opportunity</h2>
          <p className="text-center text-green-100 mb-10 max-w-2xl mx-auto">
            The scale of India&apos;s waste problem is the scale of the pyrolysis opportunity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {MARKET_STATS.map((stat) => (
              <div key={stat.label} className="bg-green-700 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-orange-300 mb-2">{stat.value}</div>
                <p className="text-green-100 text-sm mb-1">{stat.label}</p>
                <p className="text-green-300 text-xs">Source: {stat.source}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-700 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-white mb-3">Government Policy Support</h3>
            <ul className="space-y-2">
              {[
                "MNRE Waste-to-Energy Programme — Central Financial Assistance for qualifying projects",
                "SATAT Scheme (Ministry of Petroleum) — supports BioCNG from organic waste",
                "EPR for tyres — mandates formal recycling, guaranteeing feedstock supply",
                "CSIR Bio-Bitumen Initiative — technology transferred to 14 companies (Jan 2026)",
                "Swachh Bharat Mission — zero-landfill target drives WtE investment",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-green-100">
                  <span className="text-orange-300 font-bold shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Set Up a Pyrolysis Plant?</h2>
          <p className="text-gray-600 mb-8">
            PPS Anantams has guided 10 plant setups across India. We know every step — from site selection and machinery procurement to NHAI-approved bio-bitumen sales. First consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-bold text-lg transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: PASS — all tests green (new page is a server component, no unit tests needed)

- [ ] **Step 3: Commit**

```bash
git add app/pyrolysis/page.tsx
git commit -m "feat: add pyrolysis deep-dive page with feedstocks, process, outputs, and market data"
```

---

## Task 7: Enhance About Page — Hero Image + Gallery

**Files:**
- Modify: `app/about/page.tsx`

---

- [ ] **Step 1: Replace app/about/page.tsx with enhanced version**

```tsx
import Image from "next/image";
import { COMPANY, CAREER_TRACK, KEY_CREDENTIALS } from "@/lib/company-data";
import TimelineItem from "@/components/TimelineItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — PPS Anantams",
  description: "25 years of bitumen industry expertise. Meet Prince Pratap Shah and the story of PPS Anantams Corporation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1600&q=80"
            alt="Industrial plant infrastructure"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{COMPANY.tagline}</p>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>{COMPANY.name}</strong> is India&apos;s leading bio-modified bitumen consulting firm,
                headquartered in {COMPANY.hq}. We provide end-to-end consulting for setting up bio-bitumen
                manufacturing plants — from site selection and regulatory clearances to plant commissioning and
                connecting you with our network of 4,452 industry buyers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by Prince Pratap Shah with 25 years of hands-on bitumen industry experience, we have
                successfully built 10 plants across India spanning 5 product types: Emulsion, Blown Bitumen,
                CRMB, PMB, and VG30.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "GST", value: COMPANY.gst },
                  { label: "CIN", value: COMPANY.cin },
                  { label: "PAN", value: COMPANY.pan },
                  { label: "HQ", value: COMPANY.hq },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{label}</div>
                    <div className="text-sm font-medium text-gray-800 mt-0.5">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder profile */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                  alt="Prince Pratap Shah — Founder & MD"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{COMPANY.owner}</h3>
              <p className="text-green-600 font-medium text-sm mb-3">Founder & Managing Director</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {COMPANY.experience}
              </p>
              <div className="text-sm text-gray-600 mb-3">
                <strong>Education:</strong> {COMPANY.education}
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                🏆 {COMPANY.awards}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">25-Year Career Timeline</h2>
          <p className="text-gray-600 mb-8">From employee to founder to India&apos;s leading bio-bitumen consultant.</p>
          <div className="max-w-2xl">
            {CAREER_TRACK.map((item, i) => (
              <TimelineItem key={`${item.year}-${item.company}`} item={item} isLast={i === CAREER_TRACK.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Credentials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KEY_CREDENTIALS.map((cred, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-green-500 font-bold text-lg shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey in Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                alt: "Road construction with asphalt",
                caption: "Bio-bitumen road construction",
              },
              {
                src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80",
                alt: "Agricultural biomass fields",
                caption: "Biomass sourcing from farmers",
              },
              {
                src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
                alt: "Industrial plant construction",
                caption: "Plant setup and commissioning",
              },
            ].map((img) => (
              <div key={img.caption} className="rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="text-sm text-gray-600 font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add hero image, founder avatar, and photo gallery to about page"
```

---

## Task 8: Enhance Why Us Page — Hero Image + Visual Strip

**Files:**
- Modify: `app/why-us/page.tsx`

---

- [ ] **Step 1: Replace header section in app/why-us/page.tsx**

Replace only the first `<section>` tag (the page header) with the image version:

**Find:**
```tsx
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Us?</h1>
          <p className="text-gray-600 text-lg max-w-3xl">{COMPANY.usp}</p>
        </div>
      </section>
```

**Replace with:**
```tsx
      {/* Header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540492649367-c8565a571e4b?w=1600&q=80"
            alt="India infrastructure and roads"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Why Choose Us?</h1>
          <p className="text-gray-300 text-lg max-w-3xl">{COMPANY.usp}</p>
        </div>
      </section>
```

- [ ] **Step 2: Add `import Image from "next/image"` at the top of app/why-us/page.tsx**

The existing imports line is:
```tsx
import NetworkGrid from "@/components/NetworkGrid";
import { PPS_STRENGTHS, WHY_NOW, COMPANY } from "@/lib/company-data";
import Link from "next/link";
import type { Metadata } from "next";
```

Add `import Image from "next/image";` as the first line.

- [ ] **Step 3: Add visual image strip after the GETKA contract section**

Find this closing tag in the GETKA section:
```tsx
        </div>
      </section>

      {/* Why Now */}
```

Insert a new visual strip section between the GETKA section and the Why Now section:

```tsx
      {/* Visual Strip */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=500&q=80", alt: "Industrial oil drums storage" },
              { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80", alt: "Industrial equipment and machinery" },
              { src: "https://images.unsplash.com/photo-1570128861414-dc5f1e1e4a1a?w=500&q=80", alt: "Road and highway construction India" },
            ].map((img, i) => (
              <div key={i} className="relative h-36 rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
```

- [ ] **Step 4: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add app/why-us/page.tsx
git commit -m "feat: add hero image and visual strip to why-us page"
```

---

## Task 9: Enhance Contact Page — Hero Image

**Files:**
- Modify: `app/contact/page.tsx`

---

- [ ] **Step 1: Add import and replace header section**

Add `import Image from "next/image";` as the first import in `app/contact/page.tsx`.

Then replace the header section:

**Find:**
```tsx
      {/* Header */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Ready to start your bio-bitumen plant? Let&apos;s talk. First consultation is free.
          </p>
        </div>
      </section>
```

**Replace with:**
```tsx
      {/* Header with image */}
      <section className="relative bg-gradient-to-r from-green-900 to-gray-800 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Professional office meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Ready to start your bio-bitumen plant? Let&apos;s talk. First consultation is free.
          </p>
        </div>
      </section>
```

- [ ] **Step 2: Run full test suite**

```bash
npx jest --no-coverage
```

Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add hero image to contact page"
```

---

## Task 10: Build Verification

**Files:** None (verification only)

---

- [ ] **Step 1: Run full test suite one final time**

```bash
npx jest --no-coverage
```

Expected: PASS — all tests green (31 original + new company-data-additions tests)

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected output should include all 6 pages:
```
Route (app)                   Size
├ ○ /                         ...
├ ○ /about                    ...
├ ○ /contact                  ...
├ ○ /pyrolysis                ...
├ ○ /services                 ...
└ ○ /why-us                   ...
```

Expected: No build errors, all routes generated as static pages in `out/`

- [ ] **Step 3: Verify dev server visually (optional but recommended)**

If dev server is running:
- Home: Check 3 pillar cards and Pyrolysis teaser display with images
- Services: Check 3 sections load with anchor pills, PMC cards, dark IT section
- Pyrolysis: Check all sections render — feedstock cards with images, output cards, market stats
- About: Check hero image, founder avatar, photo gallery
- Why Us: Check hero image, visual strip
- Contact: Check hero image
- Navbar: Confirm "Pyrolysis" appears between "Services" and "Why Choose Us"

- [ ] **Step 4: Final commit if any fixes needed, then verify git log**

```bash
git log --oneline -10
```

Expected: 9 commits from this feature branch, one per task.
