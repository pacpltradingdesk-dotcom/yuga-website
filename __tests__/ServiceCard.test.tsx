import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES } from "@/lib/company-data";

describe("ServiceCard", () => {
  it("renders stage name", () => {
    render(<ServiceCard stage={FOUR_STAGES[0]} />);
    expect(screen.getByText("Raw Material Procurement & Pelletization")).toBeInTheDocument();
  });

  it("renders capex", () => {
    render(<ServiceCard stage={FOUR_STAGES[0]} />);
    expect(screen.getByText(/Rs 15/)).toBeInTheDocument();
  });

  it("renders stage number", () => {
    render(<ServiceCard stage={FOUR_STAGES[1]} />);
    expect(screen.getByText("Stage 2")).toBeInTheDocument();
  });
});
