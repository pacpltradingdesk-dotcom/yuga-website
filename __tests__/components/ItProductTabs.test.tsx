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

    // The second panel should now be visible (not hidden)
    const secondPanel = screen.getByRole("tabpanel", { hidden: false });
    expect(secondPanel).toHaveAttribute("id", "panel-1");
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
    expect(firstPanel).toHaveAttribute("hidden");
  });

  it("renders 5 tab buttons in total", () => {
    render(<ItProductTabs />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(5);
  });
});
