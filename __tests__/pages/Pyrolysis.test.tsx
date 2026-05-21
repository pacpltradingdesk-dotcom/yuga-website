// __tests__/pages/Pyrolysis.test.tsx
import { render, screen } from "@testing-library/react";
import PyrolysisPage from "@/app/pyrolysis/page";

jest.mock("@/components/PageHeader", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

jest.mock("@/components/CtaStrip", () => ({
  __esModule: true,
  default: () => <div data-testid="cta-strip">CTA</div>,
}));

jest.mock("@/components/StageCard", () => ({
  __esModule: true,
  default: ({ stage }: { stage: { name: string } }) => (
    <div data-testid="stage-card">{stage.name}</div>
  ),
}));

jest.mock("@/components/FeedstockCard", () => ({
  __esModule: true,
  default: ({ feedstock }: { feedstock: { name: string } }) => (
    <div data-testid="feedstock-card">{feedstock.name}</div>
  ),
}));

jest.mock("@/components/OutputCard", () => ({
  __esModule: true,
  default: ({ output }: { output: { name: string } }) => (
    <div data-testid="output-card">{output.name}</div>
  ),
}));

jest.mock("@/components/PyrolysisProductCard", () => ({
  __esModule: true,
  default: ({ product }: { product: { name: string } }) => (
    <div data-testid="product-card">{product.name}</div>
  ),
}));

describe("PyrolysisPage", () => {
  beforeEach(() => {
    render(<PyrolysisPage />);
  });

  it("renders 'Pyrolysis Technology' heading", () => {
    expect(
      screen.getByRole("heading", { name: /Pyrolysis Technology/i })
    ).toBeInTheDocument();
  });

  it("renders 'Four Stages to Bio-Bitumen' section heading", () => {
    expect(
      screen.getByRole("heading", { name: /Four Stages to Bio-Bitumen/i })
    ).toBeInTheDocument();
  });

  it("renders 'What Goes In' heading", () => {
    expect(
      screen.getByRole("heading", { name: /What Goes In/i })
    ).toBeInTheDocument();
  });

  it("renders 'What Comes Out' heading", () => {
    expect(
      screen.getByRole("heading", { name: /What Comes Out/i })
    ).toBeInTheDocument();
  });

  it("renders 'Commercial-Grade Products' heading", () => {
    expect(
      screen.getByRole("heading", { name: /Commercial-Grade Products/i })
    ).toBeInTheDocument();
  });
});
