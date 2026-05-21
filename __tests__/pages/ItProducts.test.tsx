// __tests__/pages/ItProducts.test.tsx
import { render, screen } from "@testing-library/react";
import ItProductsPage from "@/app/it-products/page";

jest.mock("@/components/ItProductTabs", () => ({
  __esModule: true,
  default: () => <div data-testid="it-product-tabs">IT Product Tabs</div>,
}));

describe("ItProductsPage", () => {
  it("renders the IT Products heading", () => {
    render(<ItProductsPage />);
    expect(
      screen.getByRole("heading", { name: /IT Products/i })
    ).toBeInTheDocument();
  });

  it("renders the Why PACPL section heading", () => {
    render(<ItProductsPage />);
    expect(
      screen.getByRole("heading", { name: /Built by Practitioners, Not Generalists/i })
    ).toBeInTheDocument();
  });

  it("renders all 3 trust card titles", () => {
    render(<ItProductsPage />);
    expect(screen.getByText("Domain Expertise")).toBeInTheDocument();
    expect(screen.getByText("Built-In Client Network")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Delivery")).toBeInTheDocument();
  });
});
