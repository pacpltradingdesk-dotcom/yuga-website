# Technical Concerns & Issues

## Critical Issues

### Formspree ID is a placeholder — contact form is broken in production
`components/ContactForm.tsx` line 13: `const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID"`. If `NEXT_PUBLIC_FORMSPREE_ID` is not set as a Vercel env var, every form submission goes to `https://formspree.io/f/YOUR_FORM_ID` which is a dead endpoint. The `.env.example` acknowledges this. Until the env var is configured, the contact form silently fails (returns HTTP error, shows generic error message). This is the only lead-capture mechanism on the site.

### Hero video file `/hero.mp4` is not present in the repository
`components/HeroVideo.tsx` references `src="/hero.mp4"` (a local public asset). There is no `public/hero.mp4` in the repo. On any fresh clone or Vercel deployment without the file manually uploaded, the hero section shows a blank gray `<video>` element at full viewport height with no fallback image, poster frame, or error handling. This is the first thing every visitor sees.

### `HeroSection.tsx` component is unused / dead code
`components/HeroSection.tsx` exists and is a fully built hero with image, headline, and CTAs — but `app/page.tsx` imports and renders `HeroVideo` instead. `HeroSection` is never imported anywhere. This represents either an unfinished migration or abandoned code that will confuse future developers.

### `app/page.tsx` is missing a `<Metadata>` export
Every other page (`about`, `contact`, `services`, `pyrolysis`, `why-us`) exports a `Metadata` object. The home page (`app/page.tsx`) has no `export const metadata`, so the home page uses only the root layout's generic title "YUGA — Bio-Modified Bitumen Consulting" with no per-page SEO customisation, no Open Graph tags, and no canonical URL.

### Brand identity mismatch: legal name vs display name vs README
- Legal name in `lib/company-data.ts`: `"PPS Anantams Corporation Private Limited"` (PACPL / PACPL)
- Display name used site-wide (navbar, pages, footer headings): `"YUGA"`
- README title: `"PPS Anantams — Company Website"` (stale, not updated after rebrand)
- `COMPANY.tradeName`: `"PPS Anantams"` (also stale)
- `COMPANY.shortName`: `"PACPL"` (never displayed on site)
- `COMPANY.website`: `"www.princeshah.com"` (personal site of the founder, not the company website)
- The footer shows `COMPANY.name` in the copyright line, which outputs the full legal name "PPS Anantams Corporation Private Limited" — inconsistent with YUGA branding shown everywhere else

---

## Performance Concerns

### Hero video has no `poster` attribute and no fallback content
`<video autoPlay muted loop playsInline src="/hero.mp4">` has no `poster` image. On slow connections or when the video file is absent, the full-viewport section renders as solid dark gray while the browser attempts to load the video. A poster frame prevents this blank flash.

### Static export with `images: { unoptimized: true }` disables all Next.js image optimisation
`next.config.ts` sets `output: "export"` and `images: { unoptimized: true }`. This is a necessary trade-off for static hosting, but means every `<Image>` tag across the site loads full-resolution Unsplash images without resizing, format conversion (WebP/AVIF), or lazy loading at the CDN level. Multiple pages load 1600px-wide Unsplash images (e.g. hero backgrounds at `?w=1600&q=80`) that are displayed at ~20% opacity as decorative backgrounds — these could be much smaller.

### `StatsBar` counter animation restarts every time component re-mounts but never resets `active` state
`components/StatsBar.tsx` uses `IntersectionObserver` to trigger a count-up animation. Once `active` is set to `true` it never resets. If the user scrolls back up past the stats bar and down again, the animation does not replay (minor UX issue, not broken). However, the `setInterval` runs for all four `StatCard` instances simultaneously on a shared 2-second timeline — on lower-end devices this is 4 × 60-tick intervals running in parallel.

### All Unsplash images are fetched without the `next/image` `sizes` prop
None of the `<Image>` components across any page specify a `sizes` attribute. Without `sizes`, the browser cannot make an informed decision about which source to download. Since the build outputs static HTML, the browser defaults to assuming the image fills the full viewport width, downloading unnecessarily large images on mobile.

### `TimelineSection.tsx` loads 6 different Unsplash images for the career card grid
The About page timeline renders up to 10 career cards, each with a background image from Unsplash. Some images are reused (fallback to `MILESTONE_IMAGES["Southern Asphalt"]` for unmapped companies), but the initial page load still triggers multiple 400px Unsplash requests in parallel.

---

## SEO & Accessibility

### Home page (`app/page.tsx`) has no page-level `<Metadata>` export
Confirmed above under Critical Issues. The home page is the most important page for SEO and has no custom title suffix, description, Open Graph image, Twitter card, or canonical URL beyond the root layout defaults.

### No Open Graph or Twitter card metadata anywhere
No page in the codebase defines `openGraph` or `twitter` metadata fields. When the URL is shared on WhatsApp, LinkedIn, or Twitter, there will be no preview image, no formatted title, and no description card.

### No `robots.txt` or `sitemap.xml`
There is no `app/robots.txt`, `public/robots.txt`, `app/sitemap.ts`, or static sitemap file. Search engines will crawl the site but without guidance on which pages to index or how frequently.

### Mobile menu toggle button uses Unicode characters as icons instead of SVG/aria
`Navbar.tsx` line 113: `{menuOpen ? "✕" : "☰"}` — the hamburger and close icons are bare Unicode characters (☰ ✕) rendered as text content inside a `<button>`. This renders inconsistently across platforms and screen readers will announce the character literally rather than "menu" or "close". The `aria-label="Toggle menu"` is present but the visual icon itself is inaccessible to screen readers that parse text nodes.

### Footer links do not include the `/pyrolysis` page
The Footer `Quick Links` section (`components/Footer.tsx`) lists About, Services, Why Choose Us, and Contact — but omits the Pyrolysis page, which is a top-level nav item in `Navbar.tsx`. This creates a broken footer navigation experience.

### No `lang` attribute localisation beyond `en`
The site content is English-only with no multi-language support. Given the Indian target audience, some visitors may expect Hindi content. This is not a bug, but it is a potential reach limitation.

### `<Image>` components in `TimelineSection.tsx` use company names as alt text
Line 54: `alt={item.company}` — e.g. `alt="Tiki Tar Industries"`. This is not descriptive of the image content (which is a generic Unsplash photo of roads or industrial plants). Accessible alt text should describe what is visually depicted.

### Services page sticky tab bar may overlap content on small screens
`app/services/page.tsx` line 36: `sticky top-16 z-40` — this positions the anchor tab bar 64px from the top. The Navbar is `h-[72px]` (72px). On screens where the tab bar is sticky, there is an 8px gap where the tab bar does not fully clear the navbar on initial load, and scroll-mt-28 on section anchors may not be calibrated to the combined height.

---

## Code Quality Issues

### `WHY_NOW` data is duplicated across two pages
`app/page.tsx` and `app/why-us/page.tsx` both import and render the same `WHY_NOW` array from `lib/company-data.ts` using identical JSX structures (green `bg-green-700` cards with orange arrow prefix). This is acceptable reuse of data but the rendering template is copy-pasted, not extracted into a shared component.

### `STRENGTH_ICONS` array in `why-us/page.tsx` is a parallel array, not co-located with data
`app/why-us/page.tsx` defines `const STRENGTH_ICONS = ["🏭", "🤝", "🌍", "🔗", "📈", "🗺️", "🏆"]` locally and applies icons by index to `PPS_STRENGTHS`. If `PPS_STRENGTHS` in `company-data.ts` has items added or reordered, the icons will silently misalign. Icons should be co-located with the strength data in `company-data.ts`.

### `COMPANY.website` points to the founder's personal domain, not the company site
`lib/company-data.ts`: `website: "www.princeshah.com"`. The website is displayed on the Contact page and the Footer. Visitors clicking or noting the website URL from the YUGA site will find the founder's personal site rather than the corporate YUGA site.

### Hardcoded WhatsApp number in two places, phone number in three
- `components/Footer.tsx` line 36: `href="https://wa.me/917795242424"` — hardcoded
- `app/contact/page.tsx` line 71: `href="https://wa.me/917795242424..."` — hardcoded
- `COMPANY.phone` = `"+91 7795242424"` is the canonical source, but the WhatsApp links derive the number independently as `917795242424`. A phone number change requires updating three locations.

### `next.config.ts` references `"Next.js 16"` in the IT Services case study but the actual version may differ
`app/services/page.tsx` line 235 hardcodes `"Next.js 16"` as a technology tag in the case study blurb. This will become stale as the project is upgraded.

### All page header sections share identical JSX structure with no shared component
`about/page.tsx`, `contact/page.tsx`, `services/page.tsx`, `pyrolysis/page.tsx`, and `why-us/page.tsx` all start with a nearly identical hero header section: dark gradient background, absolute-positioned background image at `opacity-20`, centered text. This is ~15 lines of JSX duplicated 5 times. A `PageHeader` component would eliminate this duplication.

### `TimelineItem.tsx` is defined but never used
`components/TimelineItem.tsx` exports a `TimelineItem` component. `TimelineSection.tsx` renders the career track inline without importing `TimelineItem`. This is a fully built, typed, exported component that is dead code.

### Array index used as React key in multiple places
`app/page.tsx` (WHY_NOW map), `app/services/page.tsx` (keyServices map), `app/why-us/page.tsx` (WHY_NOW and PPS_STRENGTHS maps), `app/pyrolysis/page.tsx` (MARKET_STATS, PROCESS_STEPS, government policy list) all use array index `i` as the React `key`. This is acceptable for static data that never reorders, but is an anti-pattern.

---

## Security Concerns

### `NEXT_PUBLIC_FORMSPREE_ID` is exposed in client-side JavaScript bundle
As a `NEXT_PUBLIC_` variable, the Formspree form ID is embedded in the client bundle and visible in the page source. This is standard for Formspree (it is a public-facing endpoint by design) but it means anyone can POST to the form endpoint directly, bypassing the UI. Formspree's built-in spam protection and rate limiting are the only defenses.

### Personal email address `princepshah@gmail.com` is a `COMPANY.email` value
`lib/company-data.ts`: `email: "princepshah@gmail.com"`. This personal Gmail address is rendered on the Contact page and Footer as the company contact email. It is exposed in the public HTML source. A corporate email (`info@yuga.co.in` or similar) would be more appropriate and reduce personal spam/phishing exposure.

### No Content Security Policy (CSP) headers
As a statically exported site (`output: "export"`), Next.js does not inject security headers by default. There is no `next.config.ts` CSP, no `_headers` file for Vercel/Netlify, and no custom middleware. All external Unsplash image domains and Formspree endpoints are effectively unconstrained.

### No `rel="noopener noreferrer"` audit needed for external links
The WhatsApp links in `contact/page.tsx` and `footer.tsx` correctly use `target="_blank" rel="noopener noreferrer"`. However, other external links in the services page case study area should be audited if added in future.

---

## Missing Features

### No `/pyrolysis` page listed in the Footer quick links
As noted in SEO section. The Pyrolysis page is a full top-level page with extensive content but is not reachable from the footer.

### No success redirect or confirmation page after form submission
After a successful form submission, `ContactForm.tsx` displays an inline `<p>` message. There is no dedicated thank-you page, no analytics event, and no redirect. A `/thank-you` page would allow Google Analytics conversion tracking.

### No analytics integration
There is no Google Analytics, Google Tag Manager, Plausible, or any other analytics tool integrated. There is no way to track page views, form submissions, WhatsApp clicks, or CTA engagement.

### No favicon or web app manifest defined
`app/layout.tsx` does not define any favicon-related metadata. Next.js App Router supports `app/favicon.ico`, `app/icon.png`, and `app/manifest.ts` — none are present. Browser tabs will show a blank or default favicon.

### No 404 page (`not-found.tsx`)
There is no `app/not-found.tsx`. With `output: "export"`, 404 handling depends entirely on the hosting provider. On Vercel this works with a default 404, but there is no branded error page.

### `COMPANY.shortName = "PACPL"` is defined but never used anywhere in the UI
The data field exists in `company-data.ts` but is not referenced in any component or page.

### No schema.org structured data (JSON-LD)
No page emits `<script type="application/ld+json">` markup. A `LocalBusiness` or `Organization` schema would significantly improve Google search appearance (knowledge panel, rich results) for a B2B consulting firm.

---

## Technical Debt

### `HeroSection.tsx` and `TimelineItem.tsx` are dead components that should be removed or integrated
Two fully-built components (`HeroSection` and `TimelineItem`) are in the `components/` directory but are not imported by any page. They should either be wired into the site or deleted to avoid confusion.

### README is stale after the YUGA rebrand
`README.md` still says "PPS Anantams — Company Website" in the title, and describes the site as a website for "PPS Anantams Corporation Private Limited (PACPL)". The `/pyrolysis` page is not listed in the Pages section.

### `lib/company-data.ts` mixes multiple concerns
The file combines company identity (`COMPANY`), career history (`CAREER_TRACK`), service catalog (`FOUR_STAGES`, `CONSULTING_SERVICES`, `PMC_SERVICES`, `IT_SERVICES`), pyrolysis education content (`PYROLYSIS_FEEDSTOCKS`, `PYROLYSIS_OUTPUTS`, `PYROLYSIS_PRODUCTS`), and market data (`WHY_NOW`, `INDUSTRY_NETWORK`). At 445 lines, this file is a catch-all. Splitting into domain-specific modules (e.g. `company.ts`, `services.ts`, `pyrolysis.ts`) would improve maintainability.

### Font loading uses the full `Inter` variable font with no subset restriction beyond `latin`
`app/layout.tsx`: `Inter({ subsets: ["latin"] })`. This is correct for the current English-only content, but `latin` still includes a broad range of characters. Restricting further or switching to a self-hosted font would eliminate the Google Fonts dependency and its associated GDPR/privacy cookie consent implications.

### Static export means no server-side features can be added without changing the architecture
`output: "export"` in `next.config.ts` produces a fully static site. Any future requirement for server-side logic (API routes, server components fetching live data, ISR, authentication) will require switching the output mode and changing the deployment target. This constraint is not documented anywhere in the codebase.

---

## Deployment Readiness

### The site is NOT production-ready in its current state. Blockers:

1. **Hero video missing**: `/hero.mp4` must be added to `public/` before deployment, otherwise the homepage hero section is broken.
2. **Formspree ID not configured**: `NEXT_PUBLIC_FORMSPREE_ID` must be set as a Vercel environment variable, otherwise the contact form fails silently on every submission.
3. **No favicon**: Browser tabs show no icon, which looks unprofessional.

### Additional pre-launch gaps (not hard blockers but important):

- No analytics: no way to measure whether the site generates leads.
- No Open Graph images: social sharing produces no preview cards.
- No sitemap or robots.txt: Google will crawl slowly and without prioritisation.
- `COMPANY.website` should be updated to the actual YUGA domain once one is assigned.
- The Pyrolysis page should be added to the Footer quick links.
- The README should be updated to reflect the YUGA rebrand and the existence of the `/pyrolysis` route.
- Schema.org JSON-LD markup should be added to at least the home and contact pages.
