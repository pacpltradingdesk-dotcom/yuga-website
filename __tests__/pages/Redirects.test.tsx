// __tests__/pages/Redirects.test.tsx
import { render } from "@testing-library/react";

const mockReplace = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

describe("ServicesRedirect", () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it('redirects to "/consulting"', async () => {
    const { default: ServicesRedirect } = await import("@/app/services/page");
    render(<ServicesRedirect />);
    expect(mockReplace).toHaveBeenCalledWith("/consulting");
  });
});

describe("WhyUsRedirect", () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it('redirects to "/"', async () => {
    const { default: WhyUsRedirect } = await import("@/app/why-us/page");
    render(<WhyUsRedirect />);
    expect(mockReplace).toHaveBeenCalledWith("/");
  });
});
