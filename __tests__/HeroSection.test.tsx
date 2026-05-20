import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders tagline", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Bio-Modified Bitumen/)).toBeInTheDocument();
  });

  it("renders Get Free Consultation button", () => {
    render(<HeroSection />);
    expect(screen.getByText("Get Free Consultation")).toBeInTheDocument();
  });

  it("renders Explore Services button", () => {
    render(<HeroSection />);
    expect(screen.getByText("Explore Services")).toBeInTheDocument();
  });
});
