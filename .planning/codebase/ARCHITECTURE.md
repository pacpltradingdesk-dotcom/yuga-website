# Architecture

## App Type

**Static Site Export** — Next.js 16 App Router with `output: "export"` configured in `next.config.ts`. This produces a fully static site (HTML/CSS/JS) with no server-side rendering at request time. Images are unoptimized (`images: { unoptimized: true }`) for compatibility with static hosting. `trailingSlash: true` is set for static file server compatibility.

Framework: Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind CSS v4.

## Page Structure

All pages live under `app/` using the Next.js App Router file-system routing convention.

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home page — hero video, stats bar, three service teasers, "Why Now" market opportunity section, pyrolysis intro, "Why Choose YUGA" highlights |
| `/about` | `app/about/page.tsx` | Company and founder overview, career timeline, key credentials, photo gallery |
| `/services` | `app/services/page.tsx` | Full services listing across three verticals: Bio-Bitumen Consulting, Project Management (PMC), IT Solutions. Has sticky anchor tab navigation |
| `/pyrolysis` | `app/pyrolysis/page.tsx` | Deep-dive educational content on pyrolysis technology: feedstocks, process steps, output products, value-added products, India market stats, government policy |
| `/why-us` | `app/why-us/page.tsx` | Competitive differentiators: 7 strength cards, live industry network grid, GETKA international supply contract highlight, "Why Now" market opportunity |
| `/contact` | `app/contact/page.tsx` | Contact details (phone, email, HQ, website), WhatsApp CTA, and contact form (Formspree integration) |

All pages export `metadata` objects for SEO (title and description per page).

## Component Hierarchy

```
app/layout.tsx (RootLayout — wraps every page)
├── components/Navbar.tsx          [client component — sticky nav with mobile menu]
├── <main>{children}</main>
│   ├── app/page.tsx (HomePage)
│   │   ├── components/HeroVideo.tsx     [client — fullscreen video hero]
│   │   └── components/StatsBar.tsx      [client — animated count-up stats]
│   │
│   ├── app/about/page.tsx (AboutPage)
│   │   └── components/TimelineSection.tsx   [server — career milestone cards grid]
│   │       └── components/TimelineItem.tsx  [server — single career entry] (defined but TimelineSection renders its own cards inline)
│   │
│   ├── app/contact/page.tsx (ContactPage)
│   │   └── components/ContactForm.tsx   [client — Formspree form with state]
│   │
│   ├── app/services/page.tsx (ServicesPage)
│   │   └── components/ServiceCard.tsx   [server — bio-bitumen stage card]
│   │
│   ├── app/pyrolysis/page.tsx (PyrolysisPage)
│   │   (no custom sub-components — all inline JSX)
│   │
│   └── app/why-us/page.tsx (WhyUsPage)
│       └── components/NetworkGrid.tsx   [server — industry contact breakdown grid]
│
└── components/Footer.tsx           [server — site footer with company info and links]
```

Note: `components/HeroSection.tsx` exists in the file system but is not imported by any current page (superseded by `HeroVideo.tsx`).

## Data Layer

All business data is centralized in `lib/company-data.ts`. There is no database, no API calls at build time, and no remote data fetching. Data flows are:

- **Single source of truth**: `lib/company-data.ts` exports typed constants (`COMPANY`, `CAREER_TRACK`, `FOUR_STAGES`, `TARGET_AUDIENCES`, `INDUSTRY_NETWORK`, `KEY_CREDENTIALS`, `WHY_NOW`, `PPS_STRENGTHS`, `CONSULTING_SERVICES`, `PMC_SERVICES`, `IT_SERVICES`, `PYROLYSIS_FEEDSTOCKS`, `PYROLYSIS_OUTPUTS`, `PYROLYSIS_PRODUCTS`)
- **Import pattern**: Pages and components import named exports directly — e.g. `import { COMPANY, WHY_NOW } from "@/lib/company-data"`
- **Props**: Pages pass data to components via props (e.g. `<ServiceCard stage={stage} />`, `<TimelineItem item={item} />`)
- **Contact form**: The only dynamic runtime data flow is the Formspree POST in `ContactForm.tsx` — uses `NEXT_PUBLIC_FORMSPREE_ID` env variable for the form endpoint
- **External images**: All images are sourced from Unsplash CDN URLs embedded in component JSX and in `company-data.ts` feedstock entries. No local image assets except `public/hero.mp4`

## Key Design Patterns

**Server vs Client components:**
- Default: server components (most pages, `Footer`, `NetworkGrid`, `ServiceCard`, `TimelineSection`, `TimelineItem`)
- `"use client"` directive used only when browser APIs or React state/hooks are needed: `Navbar` (mobile menu toggle state), `HeroVideo` (video element), `StatsBar` (IntersectionObserver count-up animation), `ContactForm` (form submission state)

**Styling:**
- Tailwind CSS v4 utility classes throughout — no CSS Modules, no styled-components
- Color palette: dark navy (`#0d1b3e`) for navbar, green-600/900 for brand accents, orange-500 for CTAs and highlights, gray for backgrounds
- Responsive: `md:`, `lg:`, `xl:` breakpoints used consistently; mobile-first

**Routing:**
- Next.js App Router file-system routing
- Anchor-based sub-navigation within `/services` page using `id` attributes and `href="#section"` links with `scroll-mt-28`

**Images:**
- `next/image` with `fill` prop used for all images; `unoptimized: true` in config for static export compatibility
- External Unsplash URLs used directly (no local image files)

**SEO:**
- Each page exports a `metadata` object with `title` and `description`
- Root layout sets site-wide metadata defaults

**Testing:**
- Jest + `@testing-library/react` configured (`jest.config.ts`, `jest.setup.ts`, `__tests__/` directory exists)

## Business Domain

YUGA (trading name for PPS Anantams Corporation Private Limited / PACPL) is India's leading bio-modified bitumen consulting firm, headquartered in Vadodara, Gujarat. The company is founded and led by Prince Pratap Shah, who has 25 years of bitumen industry experience and has built 10 plants across 5 product types.

**Core services:**
1. Bio-Bitumen plant setup consulting — end-to-end: site selection, regulatory clearances, machinery procurement, commissioning, and buyer network access (4,452 verified contacts: contractors, traders, importers)
2. Project Management Consulting (PMC) — feasibility, procurement, civil supervision, regulatory clearances, commissioning, and retainer support
3. Custom IT Solutions — portals, dashboards, supply chain tools, market intelligence systems for industrial/bitumen businesses

**Market context:** India became the first country to commercially produce bio-bitumen (January 2026, CSIR-CRRI technology transfer). The company holds a VG-30 international supply contract (2.4 Lakh MT/year, Iraq origin via Getka Energy Trading LLC, USA). Legal entity: CIN U46632GJ2019PTC110676, GST 24AAHCV1611L2ZD, PAN AAHCV1611L.
