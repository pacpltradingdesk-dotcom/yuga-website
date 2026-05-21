# Tech Stack

## Runtime & Framework
- **Next.js**: 16.2.6 (configured for static export via `output: "export"`)
- **React**: 19.2.4
- **React DOM**: 19.2.4
- **TypeScript**: ^5 (strict mode, target ES2017, moduleResolution: bundler)

## Styling
- **Tailwind CSS**: ^4 (v4 — uses `@import "tailwindcss"` syntax, not v3 config file)
- **PostCSS**: via `@tailwindcss/postcss` plugin (no separate tailwind.config.js)
- **Custom theme tokens** defined in `app/globals.css` via `@theme` block:
  - `--color-brand-green: #16a34a`
  - `--color-brand-orange: #f97316`
  - `--font-sans: "Inter", sans-serif`
- **Google Fonts**: Inter (loaded via `next/font/google` in `app/layout.tsx`)

## Testing
- **Jest**: ^30.4.2
- **jest-environment-jsdom**: ^30.4.1
- **@testing-library/react**: ^16.3.2
- **@testing-library/jest-dom**: ^6.9.1
- **@testing-library/user-event**: ^14.6.1
- **@types/jest**: ^30.0.0
- Config: `jest.config.ts` uses `nextJest` helper, jsdom environment, `@/` path alias, setup via `jest.setup.ts`
- Scripts: `npm test` / `npm run test:watch`

## Build & Deploy
- **Build tool**: Next.js compiler (SWC)
- **Output**: Static export (`output: "export"` in next.config.ts) — generates a fully static site in `out/`
- **Images**: `unoptimized: true` (required for static export)
- **Trailing slash**: enabled
- **Deployment target**: Vercel (vercel.json present)
- **Build command**: `npm run build`
- **Dev command**: `npm run dev`
- **CI/CD**: Not configured (no GitHub Actions or similar found)

## Key Dependencies (production)
| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.6 | App framework (App Router, static export) |
| react | 19.2.4 | UI library |
| react-dom | 19.2.4 | DOM rendering |

## Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | ^4 | Utility-first CSS framework |
| @tailwindcss/postcss | ^4 | PostCSS plugin for Tailwind v4 |
| typescript | ^5 | Type checking |
| @types/node | ^20 | Node.js type definitions |
| @types/react | ^19 | React type definitions |
| @types/react-dom | ^19 | React DOM type definitions |
| eslint | ^9 | Linter |
| eslint-config-next | 16.2.6 | Next.js ESLint rules (core-web-vitals + typescript) |
| jest | ^30.4.2 | Test runner |
| jest-environment-jsdom | ^30.4.1 | Browser-like test environment |
| @testing-library/react | ^16.3.2 | React component testing utilities |
| @testing-library/jest-dom | ^6.9.1 | Custom Jest matchers for DOM |
| @testing-library/user-event | ^14.6.1 | User interaction simulation |
| @types/jest | ^30.0.0 | Jest type definitions |
