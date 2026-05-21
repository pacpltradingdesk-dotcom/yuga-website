// __tests__/pages/ThankYou.test.tsx
import { render, screen } from "@testing-library/react";
import ThankYouPage from "@/app/thank-you/page";

describe("ThankYouPage", () => {
  beforeEach(() => {
    render(<ThankYouPage />);
  });

  it("renders 'Message Sent!' heading", () => {
    expect(screen.getByRole("heading", { name: /Message Sent!/i })).toBeInTheDocument();
  });

  it("renders 'Back to Home' link", () => {
    expect(screen.getByRole("link", { name: /Back to Home/i })).toBeInTheDocument();
  });
});
