import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CzSearchForm } from "@module/CzSearchForm/CzSearchForm";
import { fixtures } from "@constant/fixtures";

describe("CzSearchFormTemplate Behaviour Test", () => {
  it("By default , the 'new' search form should be display initially", async () => {
    render(<CzSearchForm />);

    await screen.findByTestId(`CzNewSearchForm`);

    try {
      await screen.findByTestId("CzAllSearchForm");
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
  it("Clicking on the Tab filter item should update the main form with the correct input component based on the tab being clicked", async () => {
    const user = userEvent.setup();

    render(<CzSearchForm />);

    const tabItemUsed = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.used}`);
    const tabItemSubs = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.subs}`);
    const tabItemAll = await screen.findByTestId(`czSearchTabs__tab-${fixtures.search_form.main_filters.all}`);

    let error;

    await user.click(tabItemSubs);
    try {
      await screen.findByTestId("CzSubsSearchForm");
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();

    await user.click(tabItemUsed);
    try {
      await screen.findByTestId("CzUsedSearchForm");
    } catch (err) {
      error = err;
    }
    expect(error).toBeUndefined();

    await user.click(tabItemAll);

    try {
      await screen.findByTestId("CzAllSearchForm");
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();
  });
});
