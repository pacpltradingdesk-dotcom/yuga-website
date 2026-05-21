// __tests__/pages/Contact.test.tsx
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";
import { COMPANY } from "@/lib/company-data";

jest.mock("@/components/PageHeader", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

jest.mock("@/components/ContactForm", () => ({
  __esModule: true,
  default: () => (
    <form data-testid="contact-form">
      <button type="submit">Send Message</button>
    </form>
  ),
}));

describe("ContactPage", () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it("renders 'Get in Touch' heading", () => {
    expect(screen.getByRole("heading", { name: /Get in Touch/i })).toBeInTheDocument();
  });

  it("renders the contact form", () => {
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("renders COMPANY.phone in the contact info column", () => {
    expect(screen.getByText(COMPANY.phone)).toBeInTheDocument();
  });

  it("renders COMPANY.email in the contact info column", () => {
    expect(screen.getByText(COMPANY.email)).toBeInTheDocument();
  });
});
