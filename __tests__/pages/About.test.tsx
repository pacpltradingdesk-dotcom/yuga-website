// __tests__/pages/About.test.tsx
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

jest.mock("@/components/PageHeader", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

jest.mock("@/components/CtaStrip", () => ({
  __esModule: true,
  default: () => <div />,
}));

jest.mock("@/components/CareerTimeline", () => ({
  __esModule: true,
  default: () => <div data-testid="career-timeline" />,
}));

describe("AboutPage", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it("renders 'About PACPL' heading", () => {
    expect(screen.getByRole("heading", { name: /About PACPL/i })).toBeInTheDocument();
  });

  it("renders 'Prince Pratap Shah' name", () => {
    expect(screen.getByText(/Prince Pratap Shah/i)).toBeInTheDocument();
  });

  it("renders '25 Years Across India' section heading", () => {
    expect(screen.getByRole("heading", { name: /25 Years Across India/i })).toBeInTheDocument();
  });

  it("renders 'Verified Track Record' heading", () => {
    expect(screen.getByRole("heading", { name: /Verified Track Record/i })).toBeInTheDocument();
  });

  it("renders 'Industry Network' heading", () => {
    expect(screen.getByRole("heading", { name: /Industry Network/i })).toBeInTheDocument();
  });
});
