import { render, screen } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  it("renders name field", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
  });

  it("renders phone field", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Your Phone Number")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });
});
