import { render, screen } from "@testing-library/react";
import PmcServiceCard from "@/components/PmcServiceCard";
import type { PmcService } from "@/lib/company-data";

const mockService: PmcService = {
  category: "Feasibility & DPR",
  icon: "📋",
  description: "Project feasibility studies and detailed project reports.",
  deliverables: ["Feasibility Report", "Financial projections & ROI model"],
};

describe("PmcServiceCard", () => {
  it("renders the icon", () => {
    render(<PmcServiceCard service={mockService} />);
    const icon = document.querySelector('[aria-hidden="true"]');
    expect(icon).toBeInTheDocument();
    expect(icon?.textContent).toBe(mockService.icon);
  });

  it("renders the category as a heading", () => {
    render(<PmcServiceCard service={mockService} />);
    expect(screen.getByRole("heading", { name: "Feasibility & DPR" })).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<PmcServiceCard service={mockService} />);
    expect(screen.getByText(mockService.description)).toBeInTheDocument();
  });

  it("renders at least one deliverable", () => {
    render(<PmcServiceCard service={mockService} />);
    expect(screen.getByText("Feasibility Report")).toBeInTheDocument();
  });
});
