import { render, screen } from "@testing-library/react";
import TargetAudienceCard from "@/components/TargetAudienceCard";
import type { TargetAudience } from "@/lib/company-data";

const mockAudience: TargetAudience = {
  type: "New Investor (No Industry Experience)",
  stages: "ALL 4 STAGES",
  investment: "Rs 2–6 Cr",
  feeDpr: "Rs 3–5L",
  feeSetup: "Rs 15–25L",
  feeRetainer: "Rs 1–2L/month",
  keyServices: [
    "Complete A-to-Z plant setup from SCRATCH",
    "Land identification & site selection",
  ],
};

describe("TargetAudienceCard", () => {
  it("renders the audience type as a heading", () => {
    render(<TargetAudienceCard audience={mockAudience} />);
    expect(
      screen.getByRole("heading", { name: "New Investor (No Industry Experience)" })
    ).toBeInTheDocument();
  });

  it("renders the stages label", () => {
    render(<TargetAudienceCard audience={mockAudience} />);
    expect(screen.getByText("ALL 4 STAGES")).toBeInTheDocument();
  });

  it("renders the investment value", () => {
    render(<TargetAudienceCard audience={mockAudience} />);
    expect(screen.getByText("Rs 2–6 Cr")).toBeInTheDocument();
  });

  it("renders at least one key service with a checkmark", () => {
    render(<TargetAudienceCard audience={mockAudience} />);
    expect(screen.getByText("Complete A-to-Z plant setup from SCRATCH")).toBeInTheDocument();
    const checkmarks = document.querySelectorAll('[aria-hidden="true"]');
    expect(checkmarks.length).toBeGreaterThanOrEqual(1);
  });
});
