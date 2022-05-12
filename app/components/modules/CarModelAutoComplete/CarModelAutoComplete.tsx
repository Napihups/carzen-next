import { fixtures } from "@constant/fixtures";
import { TextField } from "@element/TextField/TextField";
import React, { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

type People = {
  id: number;
  name: string;
};
const people: People[] = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

/**
 *
 * @returns
 */
export const CarModalAutoComplete: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string | null>(null);

  const [suggestResult, setSuggestResult] = useState<People[]>([]);

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  /**
   *
   * @param value
   */
  const handleInputOnchange = (value: string) => {
    setInputValue(value);

    const filteredPeople =
      value === ""
        ? people
        : people.filter((person) => {
            return person.name.toLowerCase().includes(value.toLowerCase());
          });

    setSuggestResult(filteredPeople);

    if (filteredPeople.length >= 1 && !open) {
      setOpen(true);
    }
    if (filteredPeople.length < 1 && open) {
      setOpen(false);
    }
  };
  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        className={"czCarModelAutoComplete__input"}
        onChange={(event) => handleInputOnchange(event.target.value)}
        displayValue={() => inputValue ?? ""}
        placeholder={fixtures.search_form.input_placeholders.car_modal}
        onBlur={() => {
          setOpen(false);
        }}
      />
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
          {suggestResult.map((person) => (
            <Combobox.Option key={person.id} value={person}>
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};
