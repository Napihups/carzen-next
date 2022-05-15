import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoCaretDown } from "react-icons/io5";

/**  Sample Vehicle Types Data */
const vehicleTypes: string[] = [
  "Vehicle Type",
  "Mini",
  "Hatchback",
  "Sedan",
  "SUV",
  "MPV",
  "Convertible",
  "Wagon",
  "Luxury",
  "Antique",
  "Coupe",
  "Sport Car",
  "Super Car",
  "Hybrid Car",
  "Electric Car",
  "Diesel Car",
];

export const VehicleTypeSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>(vehicleTypes[0]);

  return (
    <div className="czVehicleTypeSelect">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button as={Fragment}>
          <div className="czVehicleTypeSelect__wrapper">
            <input
              contentEditable={false}
              placeholder="Vehicle Type"
              className="czVehicleTypeSelect__input"
              value={selected}
              onChange={() => {}}
            />
            <IoCaretDown className="czVehicleTypeSelect__icon" />
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
          <Listbox.Options className="czVehicleTypeSelect__options">
            {vehicleTypes.map((str, index) => (
              <Listbox.Option
                key={str}
                value={str}
                className={({ active }) =>
                  `czVehicleTypeSelect__option ${active ? "active" : ""} ${index === 0 ? "default" : ""} `
                }
              >
                {str}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
