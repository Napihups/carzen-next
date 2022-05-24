import lodash from "lodash";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { Listbox, Transition } from "@headlessui/react";
import { FormGroup, FormLabel } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

interface CzSingleSelectProps<T> {
  data: T[];
  label?: string;
  onChange?: (selected: T) => void;
  renderDisplay: (selected: T) => string;
  shouldShowLabel: (data: T[], selected: T) => boolean;
  renderItemText: (item: T) => string;
}

export const CzSingleSelect = <T,>({
  data,
  label = "Label",
  onChange,
  renderDisplay,
  shouldShowLabel,
  renderItemText,
}: CzSingleSelectProps<T>): JSX.Element => {
  const [selected, setSelected] = useState<T>(data[0]);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <div className="czSingleSelect">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button as={Fragment}>
          <div>
            <FormGroup>
              <FormLabel className={`czSingleSelect__label ${shouldShowLabel(data, selected) ? "show" : ""}`}>
                {label}
              </FormLabel>
              <CzButton
                className="czSingleSelect__button"
                fullWidth
                color="inherit"
                text={renderDisplay(selected)}
                endIcon={<IoCaretDown size={16} />}
              />
            </FormGroup>
          </div>
        </Listbox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="czSingleSelect__options">
            {data.map((item, index) => (
              <Listbox.Option
                key={lodash.uniqueId()}
                value={item}
                className={({ active }) =>
                  `czSingleSelect__option ${active ? "active" : ""} ${index === 0 ? "default" : ""}`
                }
              >
                {renderItemText(item)}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
