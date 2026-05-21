// Mock IntersectionObserver for jsdom
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

import { render, screen } from "@testing-library/react";
import StatsBar from "@/components/StatsBar";

describe("StatsBar", () => {
  it("renders all four stat labels", () => {
    render(<StatsBar />);
    expect(screen.getByText(/years.*experience/i)).toBeInTheDocument();
    expect(screen.getByText(/plants.*built/i)).toBeInTheDocument();
    expect(screen.getByText(/industry.*contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/service.*verticals/i)).toBeInTheDocument();
  });
});
