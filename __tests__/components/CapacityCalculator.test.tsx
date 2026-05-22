import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CapacityCalculator from "@/components/CapacityCalculator";

jest.mock("next/link", () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("framer-motion", () => ({
  motion: {
    div: require("react").forwardRef(({ children, ...props }: any, ref: any) => (
      <div {...props} ref={ref}>{children}</div>
    )),
  },
  AnimatePresence: ({ children }: any) => children,
}));

describe("CapacityCalculator", () => {
  it("renders with default selections", () => {
    render(<CapacityCalculator />);
    
    // Check main title
    expect(screen.getByRole("heading", { name: /Capacity & ROI Calculator/i })).toBeInTheDocument();
    
    // Check initial capacity is 20 TPD
    expect(screen.getByText(/20 TPD/i)).toBeInTheDocument();
    
    // Check that default feedstock buttons exist
    expect(screen.getByText("Rice Straw (Paddy Stubble)")).toBeInTheDocument();
    expect(screen.getByText("Sugarcane Bagasse")).toBeInTheDocument();
    expect(screen.getByText("Mixed Agro & Forestry Waste")).toBeInTheDocument();
  });

  it("calculates CapEx dynamically based on capacity slider change", () => {
    render(<CapacityCalculator />);
    
    // Initial CapEx at 20 TPD is 7.5 Cr
    expect(screen.getByText(/₹7.5/i)).toBeInTheDocument();
    
    const slider = screen.getByTestId("capacity-slider");
    
    // Change capacity to 50 TPD
    fireEvent.change(slider, { target: { value: "50" } });
    
    // Expected CapEx for 50 TPD is 14.8 Cr
    expect(screen.getByText(/₹14.8/i)).toBeInTheDocument();
    
    // Change capacity to 10 TPD
    fireEvent.change(slider, { target: { value: "10" } });
    
    // Expected CapEx for 10 TPD is 4.2 Cr
    expect(screen.getByText(/₹4.2/i)).toBeInTheDocument();
  });

  it("updates financials when clicking different feedstock types", async () => {
    const user = userEvent.setup();
    render(<CapacityCalculator />);
    
    // Initial feedstock is Rice Straw
    // Let's click on Sugarcane Bagasse
    const bagasseButton = screen.getByRole("button", { name: /Sugarcane Bagasse/i });
    await user.click(bagasseButton);
    
    // Check that Sugarcane Bagasse yield percentage or text is updated
    expect(screen.getByText("25%")).toBeInTheDocument(); // Sugarcane bagasse bitumen yield is 25%
  });
});
