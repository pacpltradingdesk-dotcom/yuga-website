// Mock IntersectionObserver for jsdom
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

import { render, screen } from "@testing-library/react";
import StatsBar from "@/components/StatsBar";

describe("StatsBar", () => {
  it("renders Years Experience label", () => {
    render(<StatsBar />);
    expect(screen.getByText("Years Experience")).toBeInTheDocument();
  });

  it("renders Plants Built label", () => {
    render(<StatsBar />);
    expect(screen.getByText("Plants Built")).toBeInTheDocument();
  });

  it("renders Industry Contacts label", () => {
    render(<StatsBar />);
    expect(screen.getByText("Industry Contacts")).toBeInTheDocument();
  });

  it("renders States Network label", () => {
    render(<StatsBar />);
    expect(screen.getByText("States Network")).toBeInTheDocument();
  });
});
