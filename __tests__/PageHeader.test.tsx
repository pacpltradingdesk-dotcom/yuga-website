import { render, screen } from "@testing-library/react";
import PageHeader from "@/components/PageHeader";

describe("PageHeader", () => {
  it("renders the title", () => {
    render(<PageHeader title="About YUGA" subtitle="Our story" breadcrumb="About" />);
    expect(screen.getByRole("heading", { name: "About YUGA" })).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<PageHeader title="About YUGA" subtitle="Our story" breadcrumb="About" />);
    expect(screen.getByText("Our story")).toBeInTheDocument();
  });

  it("renders without subtitle", () => {
    render(<PageHeader title="Contact" breadcrumb="Contact" />);
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });
});
