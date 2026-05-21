import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/ServiceCard";
import { FOUR_STAGES } from "@/lib/company-data";

describe("ServiceCard", () => {
  const stage = FOUR_STAGES[0];

  it("renders stage number", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(/stage 1/i)).toBeInTheDocument();
  });

  it("renders stage name", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(stage.name)).toBeInTheDocument();
  });

  it("renders stage description", () => {
    render(<ServiceCard stage={stage} />);
    expect(screen.getByText(stage.description)).toBeInTheDocument();
  });
});
