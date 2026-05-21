# Integrations & External Services

## APIs & Services

### Formspree (Contact Form)
- **Service**: [Formspree](https://formspree.io) — hosted form backend
- **Integration point**: `components/ContactForm.tsx`
- **Config**: Form ID is set directly in the component; also exposed as `NEXT_PUBLIC_FORMSPREE_ID` env var
- **Note**: No server-side code required — Formspree handles form submission via their API from the client

## Environment Variables
Defined in `.env.example`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for the contact form. Replace `your_formspree_form_id_here` before deploying. |

- No server-side environment variables are required (site is a fully static export)
- `NEXT_PUBLIC_` prefix makes this variable available in the browser bundle

## CDN / Assets

### Fonts
- **Inter** — loaded via `next/font/google` (Next.js built-in Google Fonts optimization)
- Subsets: `latin`
- Applied globally in `app/layout.tsx` via className on `<body>`

### Video
- `public/hero.mp4` — local MP4 video file served as a static asset, used as the homepage hero background video

### Images
- Next.js `<Image>` component is configured with `unoptimized: true` (required by static export mode)
- No external image CDN is configured

## Deployment

### Vercel
- `vercel.json` is present with explicit configuration:
  ```json
  {
    "framework": "nextjs",
    "buildCommand": "npm run build",
    "devCommand": "npm run dev",
    "installCommand": "npm install"
  }
  ```
- **Static export**: `next build` produces a fully static `out/` directory (no Node.js server required at runtime)
- Vercel serves this as a static site; server-side features (SSR, API routes, middleware) are not used
- `trailingSlash: true` is set in `next.config.ts` — all routes end with `/`, which is compatible with Vercel static hosting
