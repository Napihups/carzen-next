import { RangeSlider } from "@element/RangeSlider/RangeSlider";
import { Listbox, Transition } from "@headlessui/react";
import { formatCurrency } from "@lib/currency-format";
import React, { useCallback, useEffect, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

export const PriceRange: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const [hasSetRange, setHasSetRange] = useState<boolean>(false);

  useEffect(() => {
    if (minPrice === 0 && maxPrice === 1000000) {
      if (hasSetRange) {
        setHasSetRange(false);
      }
    } else if (!hasSetRange) {
      setHasSetRange(true);
    }
  }, [minPrice, maxPrice, hasSetRange]);

  const getDisplayValue = useCallback(() => {
    if (hasSetRange) {
      return `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`;
    }
    return undefined;
  }, [hasSetRange, minPrice, maxPrice]);

  return (
    <div className="czPriceRange">
      <Listbox value={"hello"} onChange={() => {}}>
        <Listbox.Button as="div" className="czPriceRange__reference">
          <input
            value={getDisplayValue()}
            contentEditable="false"
            placeholder="Price Range"
            className="czPriceRange__input"
          />
          <IoCaretDown className="czPriceRange__icon" />
        </Listbox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="czPriceRange__panel">
            <RangeSlider
              minBetweenRange={1000}
              min={0}
              max={1000000}
              initialMin={0}
              initialMax={1000000}
              onMinChange={(value) => {}}
              onMaxChange={(value) => {}}
            />
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
