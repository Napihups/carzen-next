import { fixtures } from "@constant/fixtures";
import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useCarModelAutocompleteSearch } from "@hook/useCarModelAutocompleteSearch";
import { CarModelSuggestionModel } from "@czTypes/global.type";
import { TextField } from "@element/TextField/TextField";

/**
 *
 * @returns
 */
export const CarModalAutoComplete: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | CarModelSuggestionModel>("");

  const { isLoading, error, suggestion } = useCarModelAutocompleteSearch(inputValue);

  const handleInputOnchange = (value: string) => {
    setInputValue(value);
  };

  const handleComboboxOnChange = (value: CarModelSuggestionModel) => {
    setOpen(false);
    if (value.id === "000") {
      setSelectedValue(inputValue ?? "");
      return;
    }
    setSelectedValue(value);
  };

  useEffect(() => {
    if (!isLoading && suggestion?.length >= 1) {
      setOpen(true);
    }
  }, [isLoading, error, suggestion]);

  return (
    <Combobox value={selectedValue} onChange={handleComboboxOnChange}>
      <Combobox.Input
        as={Fragment}
        onChange={(event) => handleInputOnchange(event.target.value)}
        displayValue={() => inputValue ?? ""}
      >
        <TextField
          tfSize="md"
          onBlur={() => {
            setOpen(false);
          }}
          withFocus={false}
          className={"czCarModelAutoComplete__input"}
          placeholder={fixtures.search_form.input_placeholders.car_modal}
        />
      </Combobox.Input>
      <Transition
        show={open}
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-50"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Combobox.Options className="czCarModelAutoComplete__suggestCard" static>
          {suggestion.map((carModel: CarModelSuggestionModel) => (
            <Combobox.Option
              key={carModel.id}
              value={carModel}
              className={({ active }) => `czCarModelAutoComplete__item ${active ? "active" : ""}`}
            >
              {carModel.text}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};
