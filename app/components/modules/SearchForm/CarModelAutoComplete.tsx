import { fixtures } from "@constant/fixtures";
import React, { useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useCarModelAutocompleteSearch } from "@hook/useCarModelAutocompleteSearch";
import { CarModelSuggestionModel } from "@czTypes/global.type";
import { CircleSpinner } from "react-spinners-kit";
import styleConfig from "../../../../tailwind.config";

/**
 *
 * @returns
 */
export const CarModalAutoComplete: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | CarModelSuggestionModel>("");

  const { suggestion } = useCarModelAutocompleteSearch(inputValue);

  const handleInputOnchange = (value: string) => {
    setInputValue(value);
    if (value.length >= 1) {
      setOpen(true);
    }
  };

  const handleComboboxOnChange = (value: CarModelSuggestionModel) => {
    setOpen(false);

    searchInputRef.current?.blur();

    if (value.id !== "searchfor") {
      setInputValue(value.text);
      setSelectedValue(value);
    }

    if (value.id === "searchfor") {
      setSelectedValue(inputValue ?? "");
    }
  };

  return (
    <Combobox value={selectedValue} onChange={handleComboboxOnChange}>
      <Combobox.Input
        ref={searchInputRef}
        className={"czCarModelAutoComplete__input"}
        onBlur={() => {
          setOpen(false);
          if (inputValue === null || inputValue.length === 0) {
            setSelectedValue("");
          }
        }}
        placeholder={fixtures.search_form.input_placeholders.car_modal}
        onChange={(event) => handleInputOnchange(event.target.value)}
        displayValue={() => inputValue ?? ""}
      />
      <Transition
        show={open}
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="czCarModelAutoComplete__suggestCard" static>
          <Combobox.Option
            key={90}
            value={{ id: "searchfor", text: "Search for" }}
            className={({ active }) => `czCarModelAutoComplete__item ${active ? "active" : ""}`}
          >
            <strong>Search for</strong> {inputValue}
          </Combobox.Option>
          {suggestion.length === 0 ? (
            <Combobox.Option
              key={0}
              value={""}
              disabled={true}
              className={({ active }) => `czCarModelAutoComplete__item ${active ? "active" : ""}`}
            >
              <CircleSpinner size={20} color={styleConfig.theme.colors.base} />
            </Combobox.Option>
          ) : (
            <>
              {suggestion.map((carModel: CarModelSuggestionModel) => (
                <Combobox.Option
                  key={carModel.id}
                  value={carModel}
                  disabled={carModel.id === "noresult"}
                  className={({ active }) =>
                    `czCarModelAutoComplete__item ${active ? "active" : ""} ${
                      carModel.id === "noresult" ? "hidden" : ""
                    }`
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
