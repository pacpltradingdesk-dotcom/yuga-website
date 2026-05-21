import { render, screen } from "@testing-library/react";
import NetworkGrid from "@/components/NetworkGrid";

describe("NetworkGrid", () => {
  it("renders total contacts figure", () => {
    render(<NetworkGrid />);
    expect(screen.getByText(/4,452/)).toBeInTheDocument();
  });

  it("renders contact categories", () => {
    render(<NetworkGrid />);
    expect(screen.getByText(/contractor/i)).toBeInTheDocument();
    expect(screen.getByText(/trader/i)).toBeInTheDocument();
    expect(screen.getByText(/importer/i)).toBeInTheDocument();
  });
});
