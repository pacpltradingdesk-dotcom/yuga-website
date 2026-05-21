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
