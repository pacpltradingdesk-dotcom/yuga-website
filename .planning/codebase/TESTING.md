# Testing

## Test Setup

- **Test runner**: Jest v30 (`jest` + `jest-environment-jsdom`).
- **Config file**: `jest.config.ts` (TypeScript) using `next/jest.js` wrapper (`createJestConfig`) so Next.js-specific transforms and aliases are handled automatically.
- **Test environment**: `jsdom` — simulates a browser DOM in Node.js.
- **Setup file**: `jest.setup.ts` runs after the test framework is installed; imports `@testing-library/jest-dom` to add custom matchers (e.g., `toBeInTheDocument`, `toBeVisible`).
- **Module name mapper**: `^@/(.*)$` → `<rootDir>/$1` — mirrors the `@/` TypeScript path alias so test imports resolve correctly.
- **TypeScript types**: Both `jest` and `@testing-library/jest-dom` types are registered globally via `tsconfig.json` `"types"` array, so no per-file type imports are needed.

## Test Coverage

The following components and modules have tests in `__tests__/`:

| Test file | Subject |
|---|---|
| `company-data.test.ts` | `lib/company-data` — data shape and integrity |
| `ContactForm.test.tsx` | `components/ContactForm` |
| `Footer.test.tsx` | `components/Footer` |
| `HeroSection.test.tsx` | `components/HeroSection` |
| `Navbar.test.tsx` | `components/Navbar` |
| `NetworkGrid.test.tsx` | `components/NetworkGrid` |
| `ServiceCard.test.tsx` | `components/ServiceCard` |
| `StatsBar.test.tsx` | `components/StatsBar` |
| `TimelineItem.test.tsx` | `components/TimelineItem` |

9 test files covering 8 components and 1 data module.

## Test Patterns

- **Library**: React Testing Library (`@testing-library/react`) with `@testing-library/jest-dom` matchers. No Enzyme or other libraries.
- **Render + query**: Each test calls `render(<Component />)` then queries via `screen` (e.g., `screen.getByText`, `screen.getByRole`, `screen.getByPlaceholderText`, `screen.getAllByText`).
- **Assertions**: Matchers used — `toBeInTheDocument()`, `toHaveLength()`, `toBe()`, `toBeGreaterThan(0)`.
- **Queries used**:
  - `getByText` / `getAllByText` — most common; used to verify rendered strings.
  - `getByRole` — used for buttons (e.g., `getByRole("button", { name: /Send Message/i })`).
  - `getByPlaceholderText` — used for form inputs.
- **Props-based tests**: Components that accept props (ServiceCard, TimelineItem) are tested by passing real data from `@/lib/company-data`, verifying the rendered output matches specific values.
- **Mocking**:
  - `next/navigation` is mocked in `Navbar.test.tsx` via `jest.mock("next/navigation", () => ({ usePathname: () => "/" }))` to avoid router context errors.
  - `IntersectionObserver` is mocked globally at the top of `StatsBar.test.tsx` (using `global.IntersectionObserver = jest.fn()...`) because jsdom does not implement it but StatsBar uses it for scroll-triggered animation.
- **Test structure**: Standard `describe` + `it` blocks. Each `it` block renders the component fresh (no shared render state between tests).
- **No user interaction tests**: No `userEvent` or `fireEvent` calls are present despite `@testing-library/user-event` being installed. Tests are purely render-and-assert.

## Running Tests

```bash
# Run all tests once
npm test

# Run in watch mode (re-runs on file changes)
npm run test:watch

# Jest CLI directly (supports filtering)
npx jest __tests__/Navbar.test.tsx
npx jest --testNamePattern="renders company name"
```

## Test Gaps

The following components have **no tests**:

- `components/TimelineSection.tsx` — the section-level wrapper for the career timeline.
- `components/HeroVideo.tsx` — likely uses a `<video>` element; may require additional mocking of browser media APIs.

Additional gaps by test type:

- **User interaction**: No tests for the mobile menu toggle in `Navbar` (clicking the hamburger button to open/close the menu). The `useState`-driven mobile menu state is untested.
- **Form submission**: `ContactForm` tests only check field presence; no tests for form submission, validation, error states, or success messages.
- **Navigation / routing**: No tests verify that nav links point to the correct `href` values, only that the link labels are rendered.
- **Responsive behavior**: No tests for mobile vs. desktop layout differences (jsdom has no viewport concept by default).
- **Integration / page-level tests**: No tests for Next.js page components (under `app/`). Only leaf components are tested.
- **Snapshot tests**: No snapshot tests are used; all assertions are explicit query-based checks.
- **KEY_CREDENTIALS and CONSULTING_SERVICES constants**: Imported in `company-data.test.ts` but not asserted on — they are unused in the current test suite.
