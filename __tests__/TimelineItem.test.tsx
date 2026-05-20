import { render, screen } from "@testing-library/react";
import TimelineItem from "@/components/TimelineItem";
import { CAREER_TRACK } from "@/lib/company-data";

describe("TimelineItem", () => {
  it("renders year", () => {
    render(<TimelineItem item={CAREER_TRACK[0]} />);
    expect(screen.getByText("2001")).toBeInTheDocument();
  });

  it("renders company name", () => {
    render(<TimelineItem item={CAREER_TRACK[0]} />);
    expect(screen.getByText("Southern Asphalt")).toBeInTheDocument();
  });

  it("renders role", () => {
    render(<TimelineItem item={CAREER_TRACK[0]} />);
    expect(screen.getByText("Employee (GM)")).toBeInTheDocument();
  });
});
