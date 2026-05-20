import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders company name", () => {
    render(<Footer />);
    expect(screen.getAllByText(/PPS Anantams/).length).toBeGreaterThan(0);
  });

  it("renders phone number", () => {
    render(<Footer />);
    expect(screen.getByText(/7795242424/)).toBeInTheDocument();
  });

  it("renders WhatsApp link", () => {
    render(<Footer />);
    expect(screen.getByText("WhatsApp Us")).toBeInTheDocument();
  });
});
