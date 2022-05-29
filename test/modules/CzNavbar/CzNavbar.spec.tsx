import { render, screen } from "@testing-library/react";
import { fixtures } from "@constant/fixtures";
import { CzNavbar } from "@module/CzNavbar/CzNavbar";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => {
    return {
      pathName: "/",
    };
  },
}));

describe("CzNavbar Static Content Test", () => {
  it(`Render navbar should have sign up button which display ${fixtures.nav_auth_controls.signup_button_text}`, async () => {
    render(<CzNavbar />);
    const button = await screen.findByText(fixtures.nav_auth_controls.signup_button_text);
    expect(button).toBeInTheDocument();
  });

  it(`Render navbar should have login button which display  ${fixtures.nav_auth_controls.login_button_text}`, async () => {
    render(<CzNavbar />);
    const button = await screen.findByText(fixtures.nav_auth_controls.login_button_text);
    expect(button).toBeInTheDocument();
  });

  it("Render navbar should have the correct text for menu item in the nav menu", async () => {
    render(<CzNavbar />);

    let error;

    try {
      await screen.findByText(fixtures.nav_menu.new_cars);
      await screen.findByText(fixtures.nav_menu.used_cars);
      await screen.findByText(fixtures.nav_menu.rental_cars);
      await screen.findByText(fixtures.nav_menu.sell_my_car);
      await screen.findByText(fixtures.nav_menu.directory);
      await screen.findByText(fixtures.nav_menu.car_videos);
      await screen.findByText(fixtures.nav_menu.product);
      await screen.findByText(fixtures.nav_menu.articles);
    } catch (err) {
      error = err;
    }
    expect(error).toBeUndefined();
  });
});
