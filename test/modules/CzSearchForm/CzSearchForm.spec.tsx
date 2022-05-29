import { CzSearchForm } from "@module/CzSearchForm/CzSearchForm";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fixtures } from "@constant/fixtures";

describe("CzSearchForm Behaviour Test", () => {
  it("Static display for Form heading must be correct", async () => {
    render(<CzSearchForm />);

    const heading = await screen.findByText(fixtures.search_form.heading);
    expect(heading).toBeInTheDocument();
  });

  it("Static display for Search tab items should all be correct", async () => {
    render(<CzSearchForm />);

    const tabItemNew = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.new}`);
    expect(tabItemNew).toHaveTextContent(fixtures.search_form.main_filters.new);

    const tabItemUsed = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.used}`);
    expect(tabItemUsed).toHaveTextContent(fixtures.search_form.main_filters.used);

    const tabItemSub = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.subs}`);
    expect(tabItemSub).toHaveTextContent(fixtures.search_form.main_filters.subs);

    const tabItemAll = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.all}`);
    expect(tabItemAll).toHaveTextContent(fixtures.search_form.main_filters.all);
  });

  it("Tab button for search filter should udpate active state when click", async () => {
    const user = userEvent.setup();
    render(<CzSearchForm />);

    const tabItemNew = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.used}`);
    const tabItemUsed = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.used}`);
    expect(tabItemUsed.classList.contains("active")).toBeFalsy();

    await user.click(tabItemNew);

    expect(tabItemUsed.classList.contains("active")).toBeTruthy();
  });

  it("Search autocomplete to display the dropdown panel when user typing atleast 1 char", async () => {
    /** todo */
  });
});
