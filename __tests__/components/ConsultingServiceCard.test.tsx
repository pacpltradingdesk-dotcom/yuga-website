import { render, screen } from "@testing-library/react";
import ConsultingServiceCard from "@/components/ConsultingServiceCard";

const mockItems = ["Site selection", "DPR preparation", "Vendor sourcing"];

describe("ConsultingServiceCard", () => {
  it("renders the category as a heading", () => {
    render(<ConsultingServiceCard category="Land & Location" items={mockItems} />);
    expect(screen.getByRole("heading", { name: "Land & Location" })).toBeInTheDocument();
  });

  it("renders all items", () => {
    render(<ConsultingServiceCard category="Land & Location" items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders arrow prefix for each item", () => {
    const { container } = render(
      <ConsultingServiceCard category="Land & Location" items={mockItems} />
    );
    const arrows = container.querySelectorAll('[aria-hidden="true"]');
    expect(arrows.length).toBe(mockItems.length);
  });
});
