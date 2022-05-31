import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { carModels } from "@constant/car-models";
import { fixtures } from "@constant/fixtures";

describe("CzCarModelSearchBar Functional Test", () => {
  it("Static display for main search bar autocomplete should be correct", async () => {
    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByPlaceholderText(fixtures.search_form.input_placeholders.car_modal);
    expect(searchBar).toBeInTheDocument();
  });

  it("The Default option text display 'Search for ....' should always be appear in the dropdown for any inputs more than 1 length", async () => {
    const user = userEvent.setup();

    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByTestId("CzCarModelSearchBar-input");

    await user.type(searchBar, "skcdvdav d");

    const defaultOptions = await screen.findByTestId("CzCarModelSearchBar-default-option");

    expect(defaultOptions.textContent).toContain("Search for");
  });

  it("The Default option text display should render the input values as the subject for Search for...", async () => {
    const user = userEvent.setup();

    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByTestId("CzCarModelSearchBar-input");

    const userInput = "Mazda";
    await user.type(searchBar, userInput);

    const defaultOpt = await screen.findByTestId("CzCarModelSearchBar-default-option");

    const result = `Search for ${userInput}`;

    expect(defaultOpt.textContent).toBe(result);
  });

  it("Search on Mazda should return all options which contains Mazda substring", async () => {
    const user = userEvent.setup();

    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByTestId("CzCarModelSearchBar-input");

    const userInput = "Mazda";

    await user.type(searchBar, userInput);

    const options = await screen.findAllByTestId("CzCarModelSearchBar-option");

    options.forEach((item) => {
      expect(item).toHaveTextContent(/mazda/i);
    });
  });

  it("Search input should update its value to the selected option after clicking on one of the option in dropdown", async () => {
    const user = userEvent.setup();

    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByTestId("CzCarModelSearchBar-input");

    const userInput = "Mazda";

    await user.type(searchBar, userInput);

    const options = await screen.findAllByTestId("CzCarModelSearchBar-option");

    const targetSelected = options[5];

    await user.click(targetSelected);

    /** Allow component to update its state by
     * delay the asssertions in the next tick */
    setTimeout(() => {
      expect(searchBar).toHaveValue(targetSelected.textContent);
    }, 200);
  });

  it("Search input should not update its value and preserved the user input when  user select the default options", async () => {
    const user = userEvent.setup();

    render(<CzCarModelSearchBar carModels={carModels} />);

    const searchBar = await screen.findByTestId("CzCarModelSearchBar-input");

    const userInput = "My Best home Car";

    await user.type(searchBar, userInput);

    const defaultOpt = await screen.findByTestId("CzCarModelSearchBar-default-option");

    await user.click(defaultOpt);

    expect(searchBar).toHaveValue(userInput);
  });
});
