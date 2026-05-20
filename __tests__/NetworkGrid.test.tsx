import { render, screen } from "@testing-library/react";
import NetworkGrid from "@/components/NetworkGrid";

describe("NetworkGrid", () => {
  it("renders contractor count", () => {
    render(<NetworkGrid />);
    expect(screen.getByText("2,758")).toBeInTheDocument();
  });

  it("renders total contacts", () => {
    render(<NetworkGrid />);
    expect(screen.getByText("4,452")).toBeInTheDocument();
  });
});
