# PPS Anantams Website Enhancement — Design Spec

**Date:** 2026-05-20  
**Status:** Approved  

---

## Goal

Significantly enhance the existing 5-page PPS Anantams Next.js website by:
1. Adding PMC (Project Management Consulting) as a full service category
2. Adding IT Solutions (custom industrial software) as a full service category
3. Adding rich images throughout every page
4. Creating a new `/pyrolysis` page with deep educational content on the pyrolysis process

---

## Architecture

The existing site at `D:\rahul\pacpl-website` uses Next.js 16 App Router with static export, Tailwind CSS v4, and TypeScript. All company data lives in `lib/company-data.ts`. We extend this pattern — no new infrastructure, no new libraries. Images come from Unsplash (free, no attribution required for web use) via `next/image` with `unoptimized: true` already configured.

**Navigation after enhancement:**  
Home | About | Services | Pyrolysis (NEW) | Why Us | Contact

---

## New Data (`lib/company-data.ts` additions)

### PMC_SERVICES

Six service categories for Project Management Consulting:

```ts
export const PMC_SERVICES = [
  {
    category: "Feasibility & DPR",
    icon: "📋",
    description: "Project feasibility studies, detailed project reports, financial modelling, ROI analysis, and land/site assessment.",
    deliverables: ["Feasibility Report", "Detailed Project Report (DPR)", "Financial projections & ROI model", "Site assessment report"],
  },
  {
    category: "Procurement Management",
    icon: "🔧",
    description: "End-to-end vendor identification, RFQ preparation, quotation comparison, negotiation, and purchase order management.",
    deliverables: ["Vendor shortlist & scoring matrix", "Technical specifications", "Price benchmarking", "PO management & tracking"],
  },
  {
    category: "Civil & Construction Supervision",
    icon: "🏗️",
    description: "On-site supervision of civil works, structural fabrication, equipment foundation, and utility installation.",
    deliverables: ["Daily/weekly site reports", "Quality inspection checklists", "Progress MIS", "Snag list & close-out"],
  },
  {
    category: "Regulatory Clearances",
    icon: "📜",
    description: "Complete regulatory support: Pollution Control Board NOC, factory license, fire safety NOC, MSME registration, electricity connection.",
    deliverables: ["PCB / CPCB NOC", "Factory License (Factories Act)", "Fire NOC", "MSME Udyam Registration", "Electricity & water NOC"],
  },
  {
    category: "Commissioning & Training",
    icon: "⚙️",
    description: "Full plant commissioning including trial runs, quality calibration, operator training, and SOP documentation.",
    deliverables: ["Trial run report", "Quality test certificates", "Operator training (classroom + hands-on)", "SOPs & maintenance manual"],
  },
  {
    category: "Post-Handover Support",
    icon: "🤝",
    description: "Monthly retainer-based support: troubleshooting, market updates, buyer introductions, and process optimisation.",
    deliverables: ["Monthly status calls", "Performance review", "Market intelligence updates", "Buyer/supplier introductions"],
  },
];
```

### IT_SERVICES

Five IT service offerings:

```ts
export const IT_SERVICES = [
  {
    name: "Consultant & Client Portals",
    icon: "🖥️",
    description: "Custom web portals for consultants and their clients — dashboards, document management, project tracking, communication logs.",
    example: "Bio-bitumen consultant portal built for PPS Anantams: client onboarding, stage tracking, document uploads, payment milestones.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Plant Management Dashboards",
    icon: "📊",
    description: "Real-time production tracking dashboards: daily output, raw material consumption, quality test results, cost-per-unit analytics.",
    example: "Pyrolysis plant dashboard: live bio-oil yield, reactor temperature logs, biomass inventory, dispatch tracking.",
    tags: ["Data visualisation", "REST APIs", "Real-time updates"],
  },
  {
    name: "Supply Chain & Vendor Systems",
    icon: "🔗",
    description: "Vendor management portals, procurement tracking, price comparison dashboards, purchase order automation.",
    example: "Bitumen import tracking system: vessel tracking, SGS certificates, LC documents, payment schedules.",
    tags: ["Workflow automation", "Document management", "Notifications"],
  },
  {
    name: "Market Intelligence Tools",
    icon: "📈",
    description: "Competitor price tracking, demand-supply analysis dashboards, NHAI project pipeline monitors, buyer/seller matching tools.",
    example: "Bitumen price tracker: daily price feeds from 17 states, competitor analysis, margin calculator.",
    tags: ["Data aggregation", "Pricing intelligence", "Alerts"],
  },
  {
    name: "Mobile Apps for Plant Operations",
    icon: "📱",
    description: "Field-ready mobile apps for plant supervisors: shift reports, quality test entry, safety checklists, incident logging.",
    example: "Plant supervisor app: daily shift report, dispatch log, quality check entry, photo upload for site issues.",
    tags: ["Progressive Web App", "Offline-capable", "iOS/Android"],
  },
];
```

### PYROLYSIS_FEEDSTOCKS

```ts
export const PYROLYSIS_FEEDSTOCKS = [
  {
    name: "Agricultural Biomass",
    icon: "🌾",
    description: "Rice husk, sugarcane bagasse, cotton stalk, wheat straw, coconut shell, wood waste",
    indiaVolume: "750 million MT/year available (MNRE)",
    highlight: "Rice straw: 100–120 MT/yr; Bagasse: 130–150 MT/yr",
  },
  {
    name: "Plastic Waste",
    icon: "♻️",
    description: "LDPE, HDPE, PP, mixed plastics from packaging, bottles, films",
    indiaVolume: "15.5 million MT/year generated",
    highlight: "Only 8% formally recycled — huge untapped feedstock",
  },
  {
    name: "End-of-Life Tyres",
    icon: "🚗",
    description: "Scrap tyres from vehicles, trucks, OTR equipment",
    indiaVolume: "2.5 million MT/year generated",
    highlight: "EPR regulations mandate formal recycling pathways",
  },
  {
    name: "Municipal Solid Waste",
    icon: "🏙️",
    description: "Combustible fraction (RDF) from urban waste — plastics, paper, textiles",
    indiaVolume: "1,50,000–1,70,000 tonnes/day generated",
    highlight: "Swachh Bharat Mission supports WtE conversion",
  },
];
```

### PYROLYSIS_OUTPUTS

```ts
export const PYROLYSIS_OUTPUTS = [
  {
    name: "Bio-Oil / Pyrolysis Oil",
    icon: "🛢️",
    yieldRange: "60–70% of dry biomass weight",
    heatingValue: "14–18 MJ/kg (upgradeable to 35 MJ/kg)",
    uses: ["Industrial boiler fuel", "Bio-bitumen feedstock", "Chemical extraction (phenols, acetic acid)", "Diesel blending after upgrading"],
    color: "orange",
  },
  {
    name: "Bio-Char / Charcoal",
    icon: "⚫",
    yieldRange: "25–35% of biomass (slow pyrolysis)",
    heatingValue: "28–32 MJ/kg (comparable to coal)",
    uses: ["Soil amendment & carbon sequestration", "Charcoal briquettes", "Activated carbon precursor", "Industrial fuel"],
    color: "gray",
  },
  {
    name: "Syngas (Producer Gas)",
    icon: "💨",
    yieldRange: "10–20% (biomass); 60–80% in flash pyrolysis",
    heatingValue: "4–18 MJ/Nm³",
    uses: ["Reactor self-heating (energy loop)", "Power generation via gas engines", "BioCNG production (SATAT scheme)", "Fischer-Tropsch synthesis"],
    color: "blue",
  },
  {
    name: "Carbon Black (from Tyres)",
    icon: "🖤",
    yieldRange: "~330 kg per tonne of tyres",
    heatingValue: "Recovered carbon black (rCB) — replaces virgin CB",
    uses: ["Rubber & tyre manufacturing", "Printing inks & pigments", "Plastic compounding", "Asphalt filler"],
    color: "black",
  },
  {
    name: "Pyrolysis Fuel Oil (Plastic)",
    icon: "⛽",
    yieldRange: "600–930 litres per tonne of plastic",
    heatingValue: ">40 MJ/kg — diesel equivalent",
    uses: ["Industrial diesel substitute", "Boilers & furnaces", "Shipping fuel (blended)", "Petrochemical feedstock"],
    color: "yellow",
  },
];
```

### PYROLYSIS_PRODUCTS (value-added end products)

```ts
export const PYROLYSIS_PRODUCTS = [
  { name: "Bio-Bitumen / Bio-Asphalt", icon: "🛣️", description: "Replaces 20–30% of petroleum bitumen in road construction. India first country to commercially produce it (Jan 2026, CSIR-CRRI).", stat: "Up to 70% lower GHG emissions vs petroleum bitumen" },
  { name: "Activated Carbon", icon: "🔬", description: "High-surface-area carbon (500–1,500 m²/g) for water treatment, air purification, gold recovery, pharmaceuticals.", stat: "India market: USD 241 million (2024), growing 4.5% CAGR" },
  { name: "Charcoal Briquettes", icon: "🔥", description: "Uniform, high-energy briquettes (28–32 MJ/kg) for industrial kilns, restaurants, hookah/shisha export, rural cooking.", stat: "India charcoal market: USD 8 billion (2025)" },
  { name: "Recovered Carbon Black", icon: "🖤", description: "Processed rCB from tyre pyrolysis replaces virgin carbon black grades N330, N550, N660 in rubber and plastics.", stat: "India imports 2.5 million MT virgin CB annually — rCB = import substitute" },
  { name: "Alternative Fuels", icon: "⚡", description: "Plastic pyrolysis oil as diesel substitute; syngas-derived BioCNG under SATAT scheme; tyre oil for cement kilns.", stat: "India WtE potential: >5,000 MW (MNRE)" },
];
```

---

## Pages

### 1. Navbar (`components/Navbar.tsx`) — update

Add "Pyrolysis" link between Services and Why Us:

```
Home | About | Services | Pyrolysis | Why Us | Contact
```

### 2. Home page (`app/page.tsx`) — enhance

**Additions:**
- Hero: Add a full-width background image with gradient overlay. Use Unsplash road construction image.
- After StatsBar: Replace the existing "Our Services" section (which currently shows FOUR_STAGES cards) with **"Three Ways We Help"** — 3 large visual cards (Bio-Bitumen Consulting | PMC | IT Solutions), each with an image, icon, short description, and "Learn More" link. The FOUR_STAGES detail moves to the Services page bio-bitumen section.
- After Why Now: Add **"About Pyrolysis"** teaser section — 2-column layout: left = headline + 3 bullet stats from research + "Learn More" link to `/pyrolysis`; right = biomass/industrial image.

### 3. About page (`app/about/page.tsx`) — enhance

**Additions:**
- Hero section: Add a background image (industrial plant / Gujarat infrastructure).
- Founder card: Replace emoji placeholder with a proper placeholder avatar image.
- After Key Credentials: Add **"Our Journey in Images"** — a 3-column photo grid (road construction, biomass, industrial plant), each with a short caption.

### 4. Services page (`app/services/page.tsx`) — major expansion

**Structure:**

```
Header (image background)
│
├── SERVICE CATEGORY TABS or SECTION ANCHORS
│   ├── 🏭 Bio-Bitumen Consulting   (existing, enhanced with images)
│   ├── 📋 Project Management (PMC) (NEW)
│   └── 💻 IT Solutions             (NEW)
│
├── Bio-Bitumen Section (existing content, enhanced)
│   ├── 4 Stages (existing)
│   ├── Who We Serve (existing)
│   └── Image banner between sections
│
├── PMC Section (NEW)
│   ├── Intro paragraph
│   ├── 6 PMC service cards (from PMC_SERVICES)
│   └── CTA: "Need a project managed end-to-end?"
│
├── IT Solutions Section (NEW)
│   ├── Intro paragraph
│   ├── 5 IT service cards (from IT_SERVICES)
│   ├── Case Study highlight: Bio-Bitumen Portal
│   └── CTA: "Need custom software for your industry?"
│
└── Final CTA (existing, enhanced)
```

Implementation note: Use `id="bio-bitumen"`, `id="pmc"`, `id="it-solutions"` anchors on each section. Add a simple horizontal pill/tab row at the top of the services content — plain `<a href="#section-id">` links, no JS scrollspy needed.

### 5. New Pyrolysis page (`app/pyrolysis/page.tsx`)

```
Header (full-width image — industrial reactor / flame)
│
├── What Is Pyrolysis? (2-column: text + simple visual)
│
├── Feedstocks (4 cards: Biomass | Plastic | Tyres | MSW)
│   Each card: image + India volume stats
│
├── How It Works (numbered process steps, visual)
│   1. Feed Preparation → 2. Heating → 3. Decomposition
│   4. Condensation → 5. Collection → 6. Products
│
├── Output Products (5 product cards with yield data)
│   Bio-oil | Biochar | Syngas | Carbon Black | Fuel Oil
│
├── Value-Added Products (5 product cards)
│   Bio-bitumen | Activated Carbon | Briquettes | rCB | Alt Fuels
│
├── Market Opportunity (key stats from India data)
│   Stat cards: 750MT biomass | 15.5MT plastic | 2.5MT tyres | >5,000MW WtE
│
└── CTA → Contact us to set up your pyrolysis plant
```

### 6. Why Us page (`app/why-us/page.tsx`) — enhance

- Header: Add background image
- After Competitive Edge cards: Add a 3-image visual strip (India roads, plant machinery, global trade)

### 7. Contact page (`app/contact/page.tsx`) — minor

- Add a background image to the header section

---

## Images

All images use Unsplash (free, high quality). Use `next/image` component with `width`, `height`, and `alt` props. The `unoptimized: true` config is already in `next.config.ts`. The URLs below follow the standard Unsplash CDN format (`images.unsplash.com/photo-<id>`); if any 404s appear during dev, substitute a similar photo from the same category.

**Image URLs by use:**

| Location | Subject | Unsplash URL |
|---|---|---|
| Home hero bg | Road construction aerial | `https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80` |
| Home "3 pillars" — Bio-Bitumen | Hot asphalt / road | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80` |
| Home "3 pillars" — PMC | Construction site / blueprint | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80` |
| Home "3 pillars" — IT | Software dashboard | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80` |
| Home Pyrolysis teaser | Biomass / crop field | `https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80` |
| About hero | Industrial plant | `https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=1600&q=80` |
| Services hero | Plant equipment | `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80` |
| Services PMC | Engineering / supervision | `https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80` |
| Services IT | Tech workspace | `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80` |
| Pyrolysis hero | Industrial fire / reactor | `https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80` |
| Pyrolysis feedstock biomass | Rice/agricultural field | `https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80` |
| Pyrolysis feedstock plastic | Plastic waste | `https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&q=80` |
| Pyrolysis feedstock tyres | Used tyres | `https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80` |
| Pyrolysis output bio-oil | Oil drums / industrial | `https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80` |
| Why Us hero | India infrastructure | `https://images.unsplash.com/photo-1540492649367-c8565a571e4b?w=1600&q=80` |
| Contact hero | Professional office | `https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80` |

---

## Component Changes

### Updated components:
- `components/Navbar.tsx` — add Pyrolysis link
- `components/HeroSection.tsx` — add background image with dark overlay

### New components:
- None required — inline JSX is sufficient for new sections given their size

---

## Data Flow

```
lib/company-data.ts  ←  Adds: PMC_SERVICES, IT_SERVICES, PYROLYSIS_FEEDSTOCKS,
                                PYROLYSIS_OUTPUTS, PYROLYSIS_PRODUCTS
         ↓
app/page.tsx         ←  Reads: PYROLYSIS_FEEDSTOCKS (teaser stats)
app/services/page.tsx ← Reads: PMC_SERVICES, IT_SERVICES (new sections)
app/pyrolysis/page.tsx ← Reads: PYROLYSIS_FEEDSTOCKS, PYROLYSIS_OUTPUTS, PYROLYSIS_PRODUCTS
```

---

## Error Handling & Edge Cases

- All Unsplash image URLs include `?w=...&q=80` params for consistent sizing
- If an image fails to load, `next/image` falls back gracefully (no layout break)
- New page `/pyrolysis` follows same static export pattern — no `getServerSideProps`, no dynamic routes
- All new data arrays typed with `export type` to maintain TypeScript strict mode

---

## Testing

Existing 31 tests continue to pass — new pages and data additions don't touch existing tested code. After implementation:
- Smoke test: `npm run build` must succeed (static export to `/out`)
- Visual test: dev server at `localhost:3000`, check all 6 pages
- Check: Pyrolysis page at `/pyrolysis/` loads and shows all sections
- Check: Services page shows all 3 category sections
- Check: Navbar shows "Pyrolysis" link on mobile and desktop

---

## Out of Scope

- No new testing library setup (existing Jest + RTL setup is sufficient)
- No i18n / Hindi language version
- No CMS / headless CMS integration
- No animation libraries beyond existing IntersectionObserver pattern
- No video embeds
- No blog / article functionality
