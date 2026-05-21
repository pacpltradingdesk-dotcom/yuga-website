import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders YUGA brand name", () => {
    render(<Footer />);
    expect(screen.getAllByText("YUGA").length).toBeGreaterThan(0);
  });

  it("renders all quick links including Pyrolysis", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pyrolysis" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders WhatsApp link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /whatsapp/i })).toBeInTheDocument();
  });
});
