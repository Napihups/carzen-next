import { CzTextField } from "@cz-ui/CzTextField/CzTextField";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

type PriceRangeType = {
  values: number[];
  label: string;
};
const PRICE_RANGES: PriceRangeType[] = [
  {
    values: [-1, -1],
    label: "Price Range",
  },
  {
    values: [0, 10000],
    label: "Below $10,000",
  },
  {
    values: [10001, 20000],
    label: "$10,001 - $20,000",
  },
  {
    values: [20001, 30000],
    label: "$20,001 - $30,000",
  },
  {
    values: [30001, 40000],
    label: "$30,001 - $40,000",
  },
  {
    values: [40001, 50000],
    label: "$40,001 - $50,000",
  },
  {
    values: [50001, 60000],
    label: "$50,001 - $60,000",
  },
  {
    values: [60001, 70000],
    label: "$60,001 - $70,000",
  },
  {
    values: [70001, 80000],
    label: "$70,001 - $80,000",
  },
  {
    values: [80001, 90000],
    label: "$80,001 - $90,000",
  },
  {
    values: [90001, 100000],
    label: "$90,001 - $100,000",
  },
  {
    values: [100001, 150000],
    label: "$100,001 - $150,000",
  },
  {
    values: [150001, 200000],
    label: "$150,001 - $200,000",
  },

  {
    values: [200001, Infinity],
    label: "Above $200,000",
  },
];

export const CzPriceRangeSelect: React.FC = () => {
  const [selected, setSelected] = useState<PriceRangeType>(PRICE_RANGES[0]);

  return (
    <div className="czPriceRangeSelect">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button as={Fragment}>
          <div>
            <CzTextField
              className="czPriceRangeSelect__input"
              contentEditable={false}
              placeholder="Price Range"
              value={selected.label}
              onChange={() => {}}
            />
            <IoCaretDown className="czPriceRangeSelect__icon" />
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
          <Listbox.Options className="czPriceRangeSelect__options">
            {PRICE_RANGES.map((item, index) => (
              <Listbox.Option
                key={item.label}
                value={item}
                className={({ active }) =>
                  `czPriceRangeSelect__option ${active ? "active" : ""} ${index === 0 ? "default" : ""}`
                }
              >
                {item.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
