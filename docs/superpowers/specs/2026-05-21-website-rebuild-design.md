# PACPL / YUGA Website — Full Rebuild Design Spec

**Date:** 2026-05-21  
**Author:** Claude Code (brainstorming session)  
**Status:** Approved by user

---

## 1. Overview

Complete ground-up rebuild of the PACPL / YUGA website on a new git branch (`redesign`). The existing content data (`lib/company-data.ts`) is retained as-is. All `app/` pages, `components/`, and `globals.css` are deleted and rewritten from scratch.

**Company:** PPS Anantams Corporation Private Limited (PACPL), trade name YUGA  
**Owner:** Prince Pratap Shah  
**HQ:** Vadodara, Gujarat  
**Core business:** Bio-bitumen plant consulting + IT products for the industrial sector

---

## 2. Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-white` | `#FFFFFF` | Page background |
| `--color-surface` | `#F8FAFC` | Section alternates, card backgrounds |
| `--color-primary` | `#0F172A` | Headings, primary text |
| `--color-secondary` | `#64748B` | Body text, descriptions |
| `--color-accent` | `#1D4ED8` | CTAs, links, highlights |
| `--color-accent-light` | `#EFF6FF` | Tag backgrounds, subtle tints |
| `--color-accent-border` | `#BFDBFE` | Tag/card borders on accent elements |
| `--color-border` | `#E2E8F0` | Dividers, card edges |

### Typography

Font: **Poppins** (already installed via `next/font/google`)

| Level | Weight | Size | Notes |
|---|---|---|---|
| Display / H1 | 800 | 48–64px | Hero headlines |
| H2 | 700 | 32–40px | Section headings |
| H3 | 600 | 20–24px | Card titles |
| Body | 400 | 16px | Line-height 1.6 |
| Label | 600 | 11px | Uppercase, letter-spacing 0.1em |

### Component Tokens

- **Cards:** `bg-white border border-border rounded-2xl shadow-sm` — featured cards add `border-t-4 border-t-accent`
- **Primary button:** `bg-accent text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition`
- **Secondary button:** `bg-white text-accent border border-accent-border font-semibold rounded-lg px-6 py-3 hover:bg-accent-light transition`
- **Badge/pill:** `bg-accent text-white rounded-full px-3 py-1 text-xs font-bold`
- **Label:** `text-accent text-xs font-semibold uppercase tracking-widest`
- **Section spacing:** `py-20 px-6`
- **Max container:** `max-w-7xl mx-auto`

---

## 3. Site Architecture

### Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Split hero, two business lines, why now, pyrolysis teaser, credentials, CTA |
| `/consulting` | Consulting Services | Renamed from `/services` — bio-bitumen + PMC |
| `/it-products` | IT Products | **NEW** — tab switcher for 5 products |
| `/pyrolysis` | Pyrolysis Technology | Feedstocks, outputs, commercial products |
| `/about` | About | Career timeline, credentials, network |
| `/contact` | Contact | Split form + info |
| `/thank-you` | Thank You | Post-form submission |

### Navigation

**Navbar (top-level):** Home · Consulting · IT Products · Pyrolysis · About · Contact  
**Mobile:** Hamburger menu collapsing to vertical list  
**Sticky:** Yes — sticks to top on scroll  
**CTA in nav:** "Get Consulting" button (accent, right side)

### Footer

Three columns: Company info + links | Quick links | Contact details  
Bottom bar: GST · PAN · CIN · Copyright

---

## 4. Page Designs

### 4.1 Home (`/`)

**Hero (Split Layout)**
- Left: Label chip ("India's #1 Bio-Bitumen Consultant") → H1 headline → 1-line subhead → two CTAs ("Start Your Plant" primary, "View IT Products" secondary)
- Right: Stats card — 4 stats (10 Plants, 25yr Experience, 4,452 Contacts, 17 States) in a 2×2 grid on a white card with accent border

**Two Business Lines Section**
- Two large cards side by side
- Card 1: Consulting — icon, headline, 3 bullet points, "Learn More →" link to `/consulting`
- Card 2: IT Products — icon, headline, 3 bullet points, "View Products →" link to `/it-products`

**Why Now Strip** (surface background)
- Label + H2 heading
- 5 horizontal stat/reason cards (data from `WHY_NOW` array in company-data)

**Pyrolysis Teaser**
- H2 + subtext
- 4 stage cards in a grid (data from `FOUR_STAGES`)
- "Deep Dive →" link to `/pyrolysis`

**Credentials Bar**
- Horizontal scrolling list of credential badges (data from `KEY_CREDENTIALS`)

**CTA Strip** (accent blue background)
- "Ready to Build Your Plant?" heading
- "Start Your Project" button → `/contact`

---

### 4.2 Consulting (`/consulting`)

**Page Header:** "Consulting Services" + subtitle

**Sticky Tab Nav:** Bio-Bitumen Consulting | Project Management (PMC)

**Bio-Bitumen Section** (`#bio-bitumen`)
- 4 stage cards grid (FOUR_STAGES)
- "What's Included" — 6 category cards from CONSULTING_SERVICES
- Target Audience — 5 audience type cards (TARGET_AUDIENCES) showing investment, fee, and key services

**PMC Section** (`#pmc`)
- 6 PMC service cards (PMC_SERVICES) in a 2-col grid
- Each card: icon, category, description, deliverables list

**CTA Strip**

---

### 4.3 IT Products (`/it-products`) — NEW

**Page Header:** "IT Products" + subtitle: "Custom software built for the bitumen and industrial sector"

**Tab Switcher**
- 5 pill tabs: Consultant Portals | Plant Dashboards | Supply Chain | Market Intelligence | Mobile Apps
- Default active: first tab
- Each tab panel shows:
  - Large icon + product name (H2)
  - Full description paragraph
  - "Key Features" bullet list (4–6 points)
  - Tech tags row (from `IT_SERVICES[n].tags`)
  - Real-world example (italic quote block, from `IT_SERVICES[n].example`)
  - "Request This Product" primary CTA → `/contact`

**Why PACPL for IT** (3 trust cards below tabs)
- Domain expertise (25yr bitumen = know exactly what to build)
- Built-in client network (you already use what you build)
- Full-stack delivery (design → code → deploy → support)

**CTA Strip**

---

### 4.4 Pyrolysis (`/pyrolysis`)

**Page Header:** "Pyrolysis Technology"

**4-Stage Process** — FOUR_STAGES cards with capex, manpower, space data

**Feedstocks Section** — 4 feedstock cards (PYROLYSIS_FEEDSTOCKS) with image, name, India volume, highlight

**Outputs Section** — 5 output cards (PYROLYSIS_OUTPUTS) — bio-oil, char, syngas, carbon black, fuel oil — with yield, heating value, uses list

**Commercial Products** — 5 product cards (PYROLYSIS_PRODUCTS) with stat badge

**CTA Strip**

---

### 4.5 About (`/about`)

**Hero Block**
- Prince Pratap Shah name, title, awards badge (Pride of India 2021)
- Education credentials
- 4 headline stats

**Career Timeline** (2001–2026)
- Vertical timeline using CAREER_TRACK data
- Each entry: year, company, location, plant type, role

**Credentials Grid** — KEY_CREDENTIALS as 2-col grid cards

**Network Stats** — INDUSTRY_NETWORK breakdown (contractors, traders, importers etc.)

**CTA Strip**

---

### 4.6 Contact (`/contact`)

**Split Layout**
- Left (60%): Contact form — Name, Company, Phone, Email, Message, Submit
- Right (40%): Company info (phone, email, address), GST/CIN/PAN

**Thank You (`/thank-you`):** Confirmation message + "Back to Home" button

---

## 5. Components to Build

| Component | Used On |
|---|---|
| `Navbar` | All pages |
| `Footer` | All pages |
| `PageHeader` | All inner pages |
| `SplitHero` | Home |
| `StatsCard` | Home hero |
| `BusinessLineCards` | Home |
| `WhyNowStrip` | Home |
| `CredentialsBar` | Home |
| `CtaStrip` | All pages |
| `StageCard` | Home, Consulting, Pyrolysis |
| `ConsultingServiceCard` | Consulting |
| `PmcServiceCard` | Consulting |
| `TargetAudienceCard` | Consulting |
| `ItProductTabs` | IT Products |
| `FeedstockCard` | Pyrolysis |
| `OutputCard` | Pyrolysis |
| `PyrolysisProductCard` | Pyrolysis |
| `CareerTimeline` | About |
| `ContactForm` | Contact |

---

## 6. Implementation Strategy

1. Create new branch: `git checkout -b redesign`
2. Delete all `app/` pages, `components/`, `globals.css`
3. Write new `globals.css` with design tokens
4. Build shared components (Navbar, Footer, PageHeader, CtaStrip) first
5. Build Home page
6. Build Consulting page
7. Build IT Products page (new)
8. Build Pyrolysis page
9. Build About page
10. Build Contact + Thank You pages
11. Add sitemap updates
12. Test all routes, mobile responsiveness

**Branch:** `redesign`  
**Tech stack:** Next.js (existing), Tailwind CSS v4, TypeScript, Poppins font  
**Content source:** `lib/company-data.ts` (unchanged)  
**No new dependencies** required

---

## 7. URL Redirects

| Old URL | New URL | Reason |
|---|---|---|
| `/services` | `/consulting` | Renamed |
| `/why-us` | `/` | Content merged into Home "Why Now" section |

Add these to `next.config` redirects so old links don't 404.

---

## 8. Out of Scope

- Authentication / login
- CMS integration
- Blog
- Live chat widget
- Analytics beyond what's already set up
- Image assets (placeholder/emoji icons used; real photos can be added later)
