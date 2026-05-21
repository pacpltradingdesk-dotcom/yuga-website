import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders the YUGA logo", () => {
    render(<Navbar />);
    expect(screen.getByText("YUGA")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Consulting" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pyrolysis" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "IT Products" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });
});
