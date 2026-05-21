# Code Conventions

## TypeScript

- **Strict mode** is enabled (`"strict": true` in tsconfig.json).
- Target: `ES2017`; module system: `esnext` with `moduleResolution: "bundler"`.
- `isolatedModules: true` — each file must be independently compilable (no const enums, no namespace merges across files).
- `noEmit: true` — TypeScript is used only for type-checking; Next.js handles compilation.
- `resolveJsonModule: true` — JSON files can be imported directly.
- `esModuleInterop: true` — default imports from CommonJS modules are supported.
- JSX transform: `react-jsx` (no need to import React in scope for JSX).
- Global types registered: `jest` and `@testing-library/jest-dom` via `"types"` in tsconfig.
- Props for sub-components use inline type annotations (e.g., `{ size?: number }` directly in function signature) rather than separate interface declarations, as seen in `YugaArrowStar`.

## Component Patterns

- **All interactive components** (those using hooks or browser APIs) are marked `"use client"` at the top of the file. Example: `Navbar.tsx` uses `useState` and is a client component. `Footer.tsx` has no interactivity and is a Server Component (no directive).
- **Default exports** are used for all page and component files (e.g., `export default function Navbar()`).
- **Named sub-components** defined in the same file are function declarations (e.g., `YugaArrowStar` in `Navbar.tsx`) and are not exported.
- **Data-driven rendering** — nav links and footer links are stored as constant arrays (`NAV_LINKS`, inline arrays) and rendered via `.map()`.
- **Props** for data-display components accept typed data objects (e.g., `ServiceCard` receives a `stage` prop typed from the `FOUR_STAGES` array, `TimelineItem` receives an `item` prop from `CAREER_TRACK`).
- Company data is centralised in `@/lib/company-data` and imported where needed rather than being hardcoded in components.

## Styling Conventions

- **Tailwind CSS v4** is used exclusively; no CSS Modules or styled-components.
- Arbitrary values are used frequently for brand colors (e.g., `bg-[#0d1b3e]`, `border-[#1e3060]`, `text-[17px]`, `text-[7px]`, `tracking-[0.18em]`).
- **Responsive breakpoints** in use:
  - `md:` — primary breakpoint for desktop layout (nav links hidden on mobile with `hidden md:flex`, grid switches from 1 to 3 columns with `grid-cols-1 md:grid-cols-3`).
  - `sm:` — used for horizontal padding steps (e.g., `px-4 sm:px-6 lg:px-8`).
  - `lg:` — used for padding (e.g., `lg:px-8`).
- **Inline SVG** with `linearGradient` / `radialGradient` defs is used for the logo mark rather than an image asset.
- Common utility patterns: `max-w-7xl mx-auto px-4` for page-width containers, `transition-colors` for hover states, `sticky top-0 z-50` for the navbar.
- Font utilities: `font-serif font-black` for the wordmark, `font-bold` for headings, `font-medium` for nav links.
- Color palette: dark navy (`#0d1b3e`, `#1e3060`), amber/gold (`amber-400`, `amber-500`, `#f5d060`), gray-300/400/900 for text and backgrounds, green-600 for WhatsApp CTA.

## Import Conventions

- **Path alias `@/`** maps to the project root (`"./*"` in tsconfig paths, `<rootDir>/$1` in Jest). All cross-directory imports use this alias.
- Import order (observed pattern):
  1. React/Next.js framework imports (`"use client"` directive first if needed, then `import Link from "next/link"`, `import { useState } from "react"`).
  2. Internal component imports (`@/components/...`).
  3. Internal data/lib imports (`@/lib/company-data`).
- No barrel `index.ts` files observed; each module is imported directly by path.

## Linting Rules

- ESLint v9 with flat config (`eslint.config.mjs` using `defineConfig`).
- Extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- Core Web Vitals ruleset enforces Next.js best practices: correct use of `<Image>`, `<Link>`, `<Script>`, no `<a>` tags for internal links, no synchronous scripts, etc.
- TypeScript rules from `eslint-config-next/typescript` add type-aware linting on top of the base Next.js config.
- Ignored paths: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`.
- No project-specific rule overrides beyond the two extended configs.

## Naming Conventions

- **Files**: PascalCase for React components (`Navbar.tsx`, `Footer.tsx`, `ServiceCard.tsx`), camelCase for libraries/data (`company-data.ts`), lowercase-hyphen for route pages (Next.js App Router convention).
- **Components**: PascalCase matching the filename (`Navbar`, `Footer`, `HeroSection`).
- **Constants / data arrays**: SCREAMING_SNAKE_CASE for exported data (`COMPANY`, `CAREER_TRACK`, `NAV_LINKS`, `FOUR_STAGES`, `TARGET_AUDIENCES`).
- **Functions / variables**: camelCase (`menuOpen`, `setMenuOpen`, `createJestConfig`).
- **Props**: camelCase, matching the data property name (e.g., `stage`, `item`, `size`).
- **Test files**: Live in `__tests__/` directory, named `<ComponentOrModule>.test.tsx` (or `.test.ts` for non-JSX).
