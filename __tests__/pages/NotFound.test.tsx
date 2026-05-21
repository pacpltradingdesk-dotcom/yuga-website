// __tests__/pages/NotFound.test.tsx
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it('renders "404" text', () => {
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it('renders "Page Not Found" heading', () => {
    expect(screen.getByRole("heading", { name: /Page Not Found/i })).toBeInTheDocument();
  });

  it('renders "Back to Home" link', () => {
    expect(screen.getByRole("link", { name: /Back to Home/i })).toBeInTheDocument();
  });
});
