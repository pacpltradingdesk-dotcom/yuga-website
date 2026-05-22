import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItProductTabs from "@/components/ItProductTabs";
import { IT_SERVICES } from "@/lib/company-data";

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

describe("ItProductTabs", () => {
  it("renders the first product by default", () => {
    render(<ItProductTabs />);
    expect(
      screen.getByRole("heading", { name: IT_SERVICES[0].name })
    ).toBeInTheDocument();
  });

  it("clicking the second tab renders the second product", async () => {
    const user = userEvent.setup();
    render(<ItProductTabs />);

    const tabs = screen.getAllByRole("tab");
    await user.click(tabs[1]);

    // The second panel should now be visible in the document
    const secondPanel = document.getElementById("panel-1");
    expect(secondPanel).toBeInTheDocument();
    expect(secondPanel).toContainElement(
      screen.getByRole("heading", { name: IT_SERVICES[1].name })
    );
  });

  it("clicking the second tab hides the first product panel", async () => {
    const user = userEvent.setup();
    render(<ItProductTabs />);

    const tabs = screen.getAllByRole("tab");
    await user.click(tabs[1]);

    const firstPanel = document.getElementById("panel-0");
    expect(firstPanel).not.toBeInTheDocument();
  });

  it("renders the correct number of tab buttons", () => {
    render(<ItProductTabs />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(IT_SERVICES.length);
  });
});
