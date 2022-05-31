import { fixtures } from "@constant/fixtures";
import { CzTextField } from "@cz-ui/CzTextField/CzTextField";
import { CarModelSuggestionModel } from "@czTypes/global.type";
import { Combobox, Transition } from "@headlessui/react";
import { useCarModelAutocompleteSearch } from "@hook/useCarModelAutocompleteSearch";
import React, { Fragment, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

type CzCarModelSearchBarProps = {
  carModels: CarModelSuggestionModel[];
};
export const CzCarModelSearchBar: React.FC<CzCarModelSearchBarProps> = ({ carModels }) => {
  const [open, setOpen] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | CarModelSuggestionModel>("");

  const [stopFetch, setStopFetch] = useState<boolean>(false);

  const { suggestion } = useCarModelAutocompleteSearch(carModels, inputValue, stopFetch);

  const handleInputOnchange = (value: string) => {
    setInputValue(value);
    setStopFetch(false);
    if (value.length >= 1) {
      setOpen(true);
    }
  };

  const handleComboboxOnChange = (value: CarModelSuggestionModel) => {
    setOpen(false);
    setStopFetch(true);
    searchInputRef.current?.blur();

    if (value.id !== "searchfor") {
      setSelectedValue(value);
      setInputValue(value.text);
    }

    if (value.id === "searchfor") {
      setSelectedValue(inputValue ?? "");
      setOpen(false);
    }
  };

  return (
    <Combobox value={selectedValue} onChange={handleComboboxOnChange}>
      <Combobox.Input
        as={Fragment}
        onChange={(event) => handleInputOnchange(event.target.value)}
        displayValue={() => inputValue ?? ""}
      >
        <CzTextField
          aria-label="Car Model or Make Search input"
          ref={searchInputRef}
          data-testid="CzCarModelSearchBar-input"
          className="czCarModelSearchBar__input"
          onBlur={() => {
            setOpen(false);
            if (inputValue === null || inputValue.length === 0) {
              setSelectedValue("");
            }
          }}
          value={inputValue ?? ""}
          placeholder={fixtures.search_form.input_placeholders.car_modal}
        />
      </Combobox.Input>

      <Transition
        show={open}
        data-testid="CzCarModelSearchBar-dropdown"
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="czCarModelSearchBar__suggestCard" static>
          <Combobox.Option
            data-testid="CzCarModelSearchBar-default-option"
            key={90}
            value={{ id: "searchfor", text: "Search for" }}
            className={({ active }) => `czCarModelSearchBar__item ${active ? "active" : ""}`}
          >
            <strong>Search for</strong> {inputValue}
          </Combobox.Option>
          {suggestion.length === 0 ? (
            <Combobox.Option
              data-testid={`CzCarModelSearchBar-spinner`}
              key={0}
              value={""}
              disabled={true}
              className={({ active }) => `czCarModelSearchBar__item ${active ? "active" : ""}`}
            >
              <CircularProgress size={20} className="text-base" />
            </Combobox.Option>
          ) : (
            <>
              {suggestion.map((carModel: CarModelSuggestionModel) => (
                <Combobox.Option
                  data-testid="CzCarModelSearchBar-option"
                  key={carModel.id}
                  value={carModel}
                  disabled={carModel.id === "noresult"}
                  className={({ active }) =>
                    `czCarModelSearchBar__item ${active ? "active" : ""} ${carModel.id === "noresult" ? "hidden" : ""}`
                  }
                >
                  {carModel.text}
                </Combobox.Option>
              ))}
            </>
          )}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};
