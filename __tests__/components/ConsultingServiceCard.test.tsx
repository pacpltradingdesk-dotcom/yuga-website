import { render, screen } from "@testing-library/react";
import ConsultingServiceCard from "@/components/ConsultingServiceCard";

const mockItems = ["Site selection", "DPR preparation", "Vendor sourcing"];

describe("ConsultingServiceCard", () => {
  it("renders the category", () => {
    render(<ConsultingServiceCard category="Land & Location" items={mockItems} />);
    expect(screen.getByText("Land & Location")).toBeInTheDocument();
  });

  it("renders all items", () => {
    render(<ConsultingServiceCard category="Land & Location" items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders arrow prefix for each item", () => {
    render(<ConsultingServiceCard category="Land & Location" items={mockItems} />);
    const arrows = document.querySelectorAll('[aria-hidden="true"]');
    expect(arrows.length).toBe(mockItems.length);
  });
});
