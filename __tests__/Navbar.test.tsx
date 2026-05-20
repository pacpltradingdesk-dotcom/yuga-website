import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

jest.mock("next/navigation", () => ({ usePathname: () => "/" }));

describe("Navbar", () => {
  it("renders company name", () => {
    render(<Navbar />);
    expect(screen.getByText("PPS Anantams")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Pyrolysis")).toBeInTheDocument();
    expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders Get Free Consultation CTA", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Get Free Consultation").length).toBeGreaterThan(0);
  });
});
