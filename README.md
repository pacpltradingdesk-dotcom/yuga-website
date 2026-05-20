# PPS Anantams — Company Website

Public marketing website for **PPS Anantams Corporation Private Limited (PACPL)** — India's leading bio-modified bitumen consulting firm.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Formspree (contact form)

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/why-us` — Why Choose Us
- `/contact` — Contact

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add env var: `NEXT_PUBLIC_FORMSPREE_ID=your_form_id`
4. Deploy

## Contact Form Setup

Sign up at [formspree.io](https://formspree.io), create a form, and set the `NEXT_PUBLIC_FORMSPREE_ID` env var in Vercel.
