// __tests__/pages/ItProducts.test.tsx
import { render, screen } from "@testing-library/react";
import ItProductsPage from "@/app/it-products/page";

jest.mock("@/components/ItProductTabs", () => ({
  __esModule: true,
  default: () => <div data-testid="it-product-tabs">IT Product Tabs</div>,
}));

jest.mock("@/components/CtaStrip", () => ({
  __esModule: true,
  default: () => <div data-testid="cta-strip">CTA</div>,
}));

jest.mock("@/components/PageHeader", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

describe("ItProductsPage", () => {
  beforeEach(() => {
    render(<ItProductsPage />);
  });

  it("renders the IT Products heading", () => {
    expect(
      screen.getByRole("heading", { name: /IT Products/i })
    ).toBeInTheDocument();
  });

  it("renders the Why YUGA section heading", () => {
    expect(
      screen.getByText(/Built by/i)
    ).toBeInTheDocument();
  });

  it("renders all 3 trust card titles", () => {
    expect(screen.getByText("Domain Expertise")).toBeInTheDocument();
    expect(screen.getByText("Built-In Client Network")).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Delivery")).toBeInTheDocument();
  });

  it("renders the ItProductTabs component", () => {
    expect(screen.getByTestId("it-product-tabs")).toBeInTheDocument();
  });
});
