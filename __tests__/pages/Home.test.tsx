// __tests__/pages/Home.test.tsx
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders hero headline", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/complete plant setup/i)
    ).toBeInTheDocument();
  });

  it("renders both business line cards", () => {
    render(<HomePage />);
    expect(screen.getByText("Bio-Bitumen Consulting")).toBeInTheDocument();
    expect(screen.getByText("IT Products")).toBeInTheDocument();
  });

  it("renders 4 stage cards", () => {
    render(<HomePage />);
    expect(screen.getByText(/Raw Material Procurement/i)).toBeInTheDocument();
    expect(screen.getByText(/Bio-Bitumen Testing/i)).toBeInTheDocument();
  });
});
