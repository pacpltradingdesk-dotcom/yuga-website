# YUGA Website — Complete Redesign Spec
**Date:** 2026-05-21
**Status:** Approved

## Goal
Complete visual redesign of all 6 pages of the YUGA website (pacpl-website). Current design has issues with colors, layout clarity, overall premium feel, and typography. New direction: **Corporate & Premium** — dark navy + gold, McKinsey/KPMG-level B2B consulting aesthetic.

---

## Design System

### Color Palette
| Role | Name | Hex |
|---|---|---|
| Primary Background | Deep Navy | `#0A1628` |
| Secondary Background | Dark Slate | `#152035` |
| Card Surface | Dark Blue-Gray | `#1C2E4A` |
| Accent / CTA | Rich Gold | `#C9A84C` |
| Text Primary | Pure White | `#FFFFFF` |
| Text Secondary | Warm Gray | `#A8B0BC` |
| Nature Accent | Muted Green | `#2D6A4F` |

### Typography
| Role | Font | Weight |
|---|---|---|
| Display / H1 | Playfair Display | 700 Bold |
| Section Headings H2–H3 | Playfair Display | 600 SemiBold |
| Body / UI / Navigation | Inter | 400 Regular / 500 Medium |
| Stats / Numbers | Inter | 800 ExtraBold |

Load both fonts from Google Fonts in `app/layout.tsx`.

### Spacing & Visual Style
- Generous padding: sections use `py-20` to `py-28`
- Thin gold horizontal rules (`border-[#C9A84C]`) as section dividers
- Gold `border-left-4` accent on important callout blocks
- Cards: dark bg (`#1C2E4A`) + gold top-border (`border-t-2 border-[#C9A84C]`)
- Primary Button: gold fill (`bg-[#C9A84C]`) + dark text (`text-[#0A1628]`), bold
- Secondary Button: gold outline + white text
- All section backgrounds alternate between `#0A1628` and `#152035` for depth

---

## Components

### Navbar
- Background: `#0A1628`, full-width sticky
- Left: "YUGA" wordmark in Playfair Display, gold color
- Right: Nav links in Inter 500, white, hover = gold + underline
- Active page = gold text
- On scroll: subtle backdrop-blur + bottom border in gold at 30% opacity
- Mobile: hamburger → full-screen overlay in `#0A1628`, links stacked center
- Remove: 3D bevel arrow+star logo (current design) — replace with clean wordmark

### Footer
- 4 columns: Logo+tagline | Quick Links | Contact Info | WhatsApp CTA
- Gold divider line at top (`border-t border-[#C9A84C]`)
- **Fix:** Add Pyrolysis to Quick Links (currently missing)
- **Fix:** Replace `COMPANY.website` (currently `www.princeshah.com`) with correct domain
- Copyright line: use "YUGA" not full legal name
- Background: `#0A1628`

---

## Pages

### Home (`app/page.tsx`)
1. **Hero Section** — Full viewport height, `#0A1628` bg. Playfair H1: "India's Bio-Bitumen Revolution" — "Bio-Bitumen" in gold. Subtext in `#A8B0BC`. Two CTAs: gold fill "Start Your Project" + gold outline "Learn More". Background: hero video at 8% opacity overlay (handles missing video gracefully with poster fallback).
2. **Stats Bar** — Light surface (`#F8F9FA` or white), 4 stat cards: large gold numbers (Inter 800), gray label. `25 Years` / `10 Plants` / `4,452 Contacts` / `3 Verticals`.
3. **Services Overview** — Dark section (`#152035`), 3 cards side by side. Each: dark bg, gold top-border, icon, bold title, 2-line description, "Learn More →" in gold.
4. **Why Now** — `#0A1628` bg, left-gold-border callout cards for each market opportunity point.
5. **Pyrolysis Teaser** — Split layout: left = text + CTA, right = process visual or stat cards.
6. **CTA Strip** — Full-width `#C9A84C` bg, dark text "Ready to Build Your Plant?", dark button.
7. **Add:** `export const metadata` (currently missing from home page).

### About (`app/about/page.tsx`)
1. **Page Header** — Dark hero, Playfair H1, gold breadcrumb path.
2. **Founder Bio** — 2-col: professional photo with gold ring border + Playfair name + Inter body text.
3. **Career Timeline** — Vertical timeline, gold dots/line, alternating left-right milestone cards.
4. **Credentials Grid** — 4 dark cards, gold icon, credential text.
5. **Shared Stats Bar** — Reuse stats component from Home.

### Services (`app/services/page.tsx`)
1. **Page Header** — Standard dark hero.
2. **Sticky Tab Bar** — 3 tabs: Bio-Bitumen Consulting | Project Management | IT Solutions. Gold active underline indicator. `top-[72px]` to clear navbar correctly (fix current 8px gap bug).
3. **Bio-Bitumen Section** — Stage cards in 2-col dark grid, gold numbered badges (01, 02, 03...).
4. **PMC Section** — Clean list layout, gold bullet points, service descriptions.
5. **IT Solutions Section** — Same as PMC; remove hardcoded "Next.js 16" version tag.

### Why Us (`app/why-us/page.tsx`)
1. **Page Header** — Standard dark hero.
2. **7 Strength Cards** — 3-col dark grid, gold emoji/icon, bold Playfair title, Inter body.
3. **Industry Network** — Dark table, gold header row, bold numbers. Source: `INDUSTRY_NETWORK` from company-data.
4. **GETKA Highlight** — Full-width dark card, gold border all sides, contract details prominent.
5. **Why Now** — Extract shared `<WhyNowSection>` component (currently duplicated in Home + Why Us).

### Pyrolysis (`app/pyrolysis/page.tsx`)
1. **Page Header** — Standard dark hero.
2. **Process Flow** — Horizontal numbered steps: gold circles + connecting lines, step title + short desc.
3. **Feedstocks & Outputs** — 2-col comparison: feedstocks left, outputs right, dark cards.
4. **Market Stats** — Dark cards, big gold numbers, gray label.
5. **Govt Policy** — Gold left-border callout list.

### Contact (`app/contact/page.tsx`)
1. **Page Header** — Standard dark hero.
2. **2-col Layout** — Left: contact details (phone, email, address as dark cards with gold icon). WhatsApp CTA button in gold. Right: contact form.
3. **Contact Form** — Dark card (`#1C2E4A`), gold focus-ring on inputs, gold submit button. Add: loading state, better error display.
4. **Add:** `/thank-you` redirect after successful form submission.

---

## Shared Components to Create/Refactor

| Component | Action | Reason |
|---|---|---|
| `PageHeader` | **Create new** | Currently duplicated 5× across pages |
| `WhyNowSection` | **Create new** | Duplicated in Home + Why Us |
| `HeroSection.tsx` | **Delete** | Dead code, never imported |
| `TimelineItem.tsx` | **Delete or wire in** | Dead code — wire into TimelineSection or delete |

---

## SEO & Missing Features to Fix

- Add `export const metadata` to `app/page.tsx` (home page)
- Add Open Graph metadata to all pages (`openGraph` + `twitter` fields)
- Add `app/robots.txt`
- Add `app/sitemap.ts` (dynamic, lists all 6 routes)
- Add `app/not-found.tsx` (branded 404 page)
- Add schema.org JSON-LD (`Organization` + `LocalBusiness`) to home + contact pages
- Add `app/favicon.ico` + `app/icon.png`

---

## Deployment Blockers to Fix Alongside

1. `public/hero.mp4` — add poster frame fallback in HeroVideo.tsx for when video is missing
2. `NEXT_PUBLIC_FORMSPREE_ID` — document clearly in README + env setup guide
3. Update `COMPANY.tradeName` to "YUGA" in `lib/company-data.ts`
4. Update `COMPANY.website` — currently `www.princeshah.com` (founder's personal site); replace with official YUGA domain once assigned (user to provide)
5. Update README to reflect YUGA rebrand

---

## Implementation Order
1. Design tokens — Tailwind config, Google Fonts in layout
2. Shared layout — Navbar + Footer redesign
3. Shared components — `PageHeader`, `WhyNowSection`
4. Home page
5. About page
6. Services page
7. Why Us page
8. Pyrolysis page
9. Contact page + thank-you page
10. SEO additions (metadata, sitemap, robots, JSON-LD)
11. Dead code cleanup
12. Deployment fixes

---

## Out of Scope
- Backend / database (site stays static export)
- CMS integration
- Multi-language (Hindi) support
- Authentication
