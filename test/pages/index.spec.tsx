import { render, screen } from "@testing-library/react";
import Landing from "@pages/index";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => {
    return {
      pathName: null,
    };
  },
}));

describe("Home", () => {
  it("Rendering the Landing Page should have the default layout used and the correct Landing Template", async () => {
    expect.assertions(2);
    render(<Landing />);

    const div = await screen.findByTestId("CzLayoutDefault");
    const template = await screen.findByTestId("LandingTemplate");
    expect(div.classList).toContain("czLayoutDefault");
    expect(template).toBeInTheDocument();
  });
});
