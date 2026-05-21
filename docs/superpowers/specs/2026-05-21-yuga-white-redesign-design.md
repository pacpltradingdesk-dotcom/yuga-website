# YUGA Website — White Theme Redesign Spec
**Date:** 2026-05-21
**Status:** Approved

## Goal
Replace the current dark navy + gold theme with a modern, premium, glassmorphism white design. Poppins replaces all existing fonts. All content and data stay identical — only the visual layer changes.

---

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--color-white` | `#FFFFFF` | Primary page background |
| `--color-surface` | `#F8FAFC` | Alternating section background |
| `--color-primary` | `#000000` | Headings, bold text |
| `--color-secondary` | `#666666` | Body copy, muted text |
| `--color-accent` | `#2563EB` | CTAs, links, highlights, numbers |
| `--color-accent-light` | `#EFF6FF` | Badge backgrounds, icon bg |
| `--color-accent-border` | `#DBEAFE` | Accent-tinted borders |
| `--color-border` | `#E5E7EB` | Dividers, card borders |
| *(no token)* | `bg-white/70` | Glass card surface — use Tailwind opacity modifier |
| *(no token)* | `bg-white/80` | Glass navbar surface — use Tailwind opacity modifier |

### Typography
**Font:** Poppins (Google Fonts) — replaces both Inter and Playfair Display entirely.

| Role | Weight | Class |
|---|---|---|
| Display / H1 | 800 ExtraBold | `font-display` (mapped to Poppins via CSS var) |
| Section headings H2–H3 | 700 Bold | Poppins 700 |
| UI / Navigation / Body | 500 Medium / 400 Regular | Poppins 400/500 |
| Stats / Numbers | 800 ExtraBold | Poppins 800 |
| Labels / Badges | 600 SemiBold | Poppins 600 |

Load from Google Fonts in `app/layout.tsx`:
```ts
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
```
Body class: `${poppins.variable} font-sans`

### Spacing
- Sections: `py-20` to `py-24`
- Cards: `p-6` to `p-8`
- Max content width: `max-w-7xl mx-auto px-6`

### Glass System
```css
/* Glass card — Tailwind classes */
bg-white/70 backdrop-blur-xl border border-white/90 rounded-2xl shadow-md
/* equivalent CSS: background:rgba(255,255,255,0.70); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.90); border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.06) */

/* Glass navbar — Tailwind classes */
bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm
/* equivalent CSS: background:rgba(255,255,255,0.80); backdrop-filter:blur(20px); border-bottom:1px solid rgba(229,231,235,0.8); box-shadow:0 2px 20px rgba(0,0,0,0.05) */

/* Blue CTA shadow */
box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
```

### Border Radius
- Cards, modals, hero card: `rounded-2xl` (16px)
- Buttons, inputs, badges: `rounded-xl` (12px)
- Pills / tags: `rounded-full`

### Animations & Micro-interactions
- Card hover: `transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`
- Button hover: `transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]`
- Navbar glass: appears on `scrollY > 20` via `useEffect`
- Fade-in on scroll: `IntersectionObserver` adds `opacity-100 translate-y-0` class (starts at `opacity-0 translate-y-4`)
- Section reveal: `transition-all duration-700 ease-out`

### Button Styles
- **Primary:** `bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:scale-[1.02] transition-all duration-200`
- **Secondary:** `bg-white text-[#2563EB] font-semibold px-6 py-3 rounded-xl border border-[#DBEAFE] hover:bg-[#EFF6FF] transition-all duration-200`
- **Ghost:** `text-[#666] hover:text-[#000] transition-colors duration-200`

---

## Tailwind v4 Token Changes (`app/globals.css`)

Replace all `--color-brand-*` tokens with:

```css
@theme {
  --color-white: #FFFFFF;
  --color-surface: #F8FAFC;
  --color-primary: #000000;
  --color-secondary: #666666;
  --color-accent: #2563EB;
  --color-accent-light: #EFF6FF;
  --color-accent-border: #DBEAFE;
  --color-border: #E5E7EB;

  --font-sans: var(--font-poppins), system-ui, sans-serif;
  --font-display: var(--font-poppins), system-ui, sans-serif;
}

body {
  background-color: var(--color-white);
  color: var(--color-primary);
}
```

Generated utilities: `bg-white`, `bg-surface`, `text-primary`, `text-secondary`, `text-accent`, `bg-accent`, `bg-accent-light`, `border-accent-border`, `border-border`. Glass surfaces use Tailwind's built-in opacity modifier: `bg-white/70`, `bg-white/80` — no custom token needed.

---

## Components

### Navbar (`components/Navbar.tsx`)
- Fixed `h-[72px]`, always visible
- Default: `bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm`
- On scroll (`scrollY > 20`): same (already glass by default — subtle deepening via `shadow-md`)
- Left: "YUGA" wordmark in Poppins 800, `text-primary`, letter-spacing `-0.5px`
- Right: nav links in Poppins 500, `text-secondary`, hover = `text-accent`
- Active page: `text-accent font-semibold`
- CTA button: Primary button style
- Mobile: hamburger → full-screen white overlay, links centered

### Footer (`components/Footer.tsx`)
- Background: `bg-white border-t border-border`
- 4 columns: Logo+tagline | Quick Links | Contact Info | WhatsApp CTA
- All text: `text-secondary`, hover = `text-accent`
- Copyright: `text-secondary text-sm`

### HeroVideo → Hero Section (`components/HeroVideo.tsx`)
Remove video entirely. Replace with:
- Page bg: `bg-surface` (`#F8FAFC`)
- Large glass card hero: `bg-glass-bg backdrop-blur-2xl border border-glass-border rounded-2xl shadow-xl`
- Inside: badge pill (blue), H1 in Poppins 800 black with blue word, description, two buttons, stats row
- Decorative: soft radial gradient blob `bg-gradient-to-br from-accent-light via-white to-accent-border` in top-right corner (absolute, `opacity-60`, `blur-3xl`)
- No `"use client"` needed if removing scroll animation — add back only if keeping count-up

### StatsBar (`components/StatsBar.tsx`)
- Background: `bg-white border-y border-border`
- Numbers: `text-4xl font-extrabold text-accent`
- Labels: `text-secondary text-sm uppercase tracking-widest`
- Dividers: `divide-x divide-border`
- Keep count-up animation (IntersectionObserver)
- Use `toLocaleString("en-IN")`

### ServiceCard (`components/ServiceCard.tsx`)
- `bg-white/70 backdrop-blur-md border border-border rounded-2xl p-6`
- Top border accent: `border-t-4 border-accent`
- Hover: `hover:-translate-y-1 hover:shadow-lg transition-all duration-300`
- Stage number: `text-accent font-extrabold text-2xl`
- Title: `text-primary font-bold`
- Description: `text-secondary text-sm`

### PageHeader (`components/PageHeader.tsx`)
- Replace dark hero with: `bg-surface` section, `py-16 px-6`
- Breadcrumb: `text-accent text-xs font-semibold uppercase tracking-widest`
- H1: Poppins 800, `text-primary text-4xl md:text-5xl`
- Subtitle: `text-secondary`
- Gold underline divider → `w-16 h-1 bg-accent rounded-full mt-6`

### WhyNowSection (`components/WhyNowSection.tsx`)
- Background: `bg-surface py-20`
- Cards: `bg-white border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all`
- Number badge: `text-accent font-extrabold text-3xl font-display` (01–05)
- Left border accent: `border-l-4 border-accent`
- CTA: Primary button linking to `/why-us`

### NetworkGrid (`components/NetworkGrid.tsx`)
- `bg-white rounded-2xl overflow-hidden border border-border shadow-sm`
- Header row: `bg-accent text-white font-semibold`
- Alternating rows: `bg-white` / `bg-surface`
- Total row: `bg-accent-light font-bold text-accent`

### TimelineSection (`components/TimelineSection.tsx`)
- Background: `bg-surface`
- Vertical line: `bg-accent` (left side, 2px wide)
- Dot: `bg-accent ring-4 ring-white ring-offset-2`
- Cards: `bg-white border border-border rounded-2xl p-6 shadow-sm`
- Year badge: `bg-accent-light text-accent font-bold text-sm px-3 py-1 rounded-full`

### ContactForm (`components/ContactForm.tsx`)
- Wrapper: `bg-white border border-border rounded-2xl p-8 shadow-sm`
- Inputs: `border border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-accent text-primary`
- Submit: Primary button style, full-width
- Error: `text-red-500`, loading: `opacity-70 cursor-not-allowed`
- Keep `useRouter().push("/thank-you")` on success

---

## Pages

### Home (`app/page.tsx`)
1. **Hero** — `bg-surface`, full-viewport-ish, glass card hero with decorative gradient blob
2. **Stats Bar** — `bg-white` with blue numbers
3. **Services Overview** — `bg-surface`, 3 glass ServiceCards
4. **Why Now** — `bg-white`, WhyNowSection (swapped background)
5. **Pyrolysis Teaser** — `bg-surface`, 4 stage cards in 2×2 grid
6. **CTA Strip** — `bg-accent`, white text "Ready to Build Your Plant?", white button with dark text

### About (`app/about/page.tsx`)
1. PageHeader → white/surface
2. Founder Bio — `bg-white`, 2-col: photo placeholder with blue ring + text
3. StatsBar — white
4. TimelineSection — surface bg
5. Credentials Grid — `bg-white`, 4 glass cards

### Services (`app/services/page.tsx`)
1. PageHeader
2. Sticky tab nav — `bg-white border-b border-border sticky top-[72px]`, active tab: `text-accent border-b-2 border-accent`
3. Bio-Bitumen — `bg-surface`, ServiceCards + CONSULTING_SERVICES white cards
4. PMC — `bg-white`, left `border-l-4 border-accent` cards
5. IT — `bg-surface`, top `border-t-4 border-accent` cards
6. CTA — `bg-accent`

### Why Us (`app/why-us/page.tsx`)
1. PageHeader
2. Strengths — `bg-surface`, glass cards with blue top border
3. Network — `bg-white`, NetworkGrid
4. GETKA — `bg-surface`, box with `border-2 border-accent rounded-2xl`
5. WhyNowSection — `bg-white`

### Pyrolysis (`app/pyrolysis/page.tsx`)
Alternating `bg-white` / `bg-surface` sections. All cards: white with blue left or top accent border, `rounded-2xl`.

### Contact (`app/contact/page.tsx`)
1. PageHeader
2. `bg-white py-20`, 2-col: contact detail cards (white, blue icon) + ContactForm
3. WhatsApp button: `bg-[#25D366]`

### Thank You (`app/thank-you/page.tsx`)
- `bg-surface min-h-screen`, white glass card center, ✅ emoji, Primary + secondary buttons

### Not Found (`app/not-found.tsx`)
- `bg-surface min-h-screen`, "404" in `text-accent`, white glass card

---

## Implementation Order
1. Design tokens — `globals.css` + `layout.tsx` (Poppins, remove Playfair/Inter)
2. Navbar + Footer
3. Shared: PageHeader, WhyNowSection, HeroVideo→Hero
4. Shared: StatsBar, ServiceCard, NetworkGrid, TimelineSection, ContactForm
5. Home page
6. About page
7. Services page
8. Why Us page
9. Pyrolysis page
10. Contact page + Thank You + Not Found

---

## Out of Scope
- Content changes (data stays identical)
- New pages or routes
- Backend / form provider changes
- Analytics
