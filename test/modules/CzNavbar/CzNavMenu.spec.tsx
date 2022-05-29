import { screen, render } from "@testing-library/react";
import { fixtures } from "@constant/fixtures";
import { CzNavbar } from "@module/CzNavbar/CzNavbar";
import { pathNames } from "@constant/router-config";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("CzNavMenu Functional Test", () => {
  it(`Visiting the root path '/' should have the ${fixtures.nav_menu.new_cars} menu item active by default`, async () => {
    useRouter.mockImplementation(() => {
      return {
        pathname: "/",
      };
    });
    render(<CzNavbar />);

    const menuitem = await screen.findByRole("menuitem", { name: fixtures.nav_menu.new_cars });
    expect(menuitem).toHaveClass("active");
  });

  it("Active state on the MenuItem in navbar should update and must be the correct item base on the path visited", async () => {
    useRouter.mockImplementation(() => {
      return {
        pathname: pathNames.directory,
      };
    });
    render(<CzNavbar />);

    const homeItem = await screen.findByRole("menuitem", { name: fixtures.nav_menu.new_cars });
    const directoryItem = await screen.findByRole("menuitem", { name: fixtures.nav_menu.directory });

    expect(homeItem).not.toHaveClass("active");
    expect(directoryItem).toHaveClass("active");
  });
});
