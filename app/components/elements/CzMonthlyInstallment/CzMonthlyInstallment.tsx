import { CzTextField } from "@cz-ui/CzTextField/CzTextField";
import { Popover, Transition } from "@headlessui/react";
import { formatCurrency } from "@lib/currency-format";
import { FormGroup, FormLabel, Typography } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

const MIN = 0;
const MAX = 7000;

export const CzMonthlyInstallment: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(MIN);
  const [maxValue, setMaxValue] = useState<number>(MAX);
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  const panelRef = useRef<HTMLDivElement>(null);

  const NoRangeSet = Boolean(minValue === MIN && maxValue === MAX);

  const displayValue = useCallback(() => {
    if (NoRangeSet) {
      return "Monthly Installment";
    }
    return `${formatCurrency(minValue)} - ${formatCurrency(maxValue)}`;
  }, [minValue, maxValue, NoRangeSet]);

  const onMouseClick = (event: Event) => {
    if (!panelRef.current?.contains(event.target as Node)) {
      setOpenPanel(false);
    }
  };

  useEffect(() => {
    if (openPanel) {
      document.addEventListener("click", onMouseClick);
    } else {
      document.removeEventListener("click", onMouseClick);
    }
  }, [openPanel]);

  return (
    <Popover className="czMonthlyInst__popover">
      <Popover.Button as={Fragment}>
        <div>
          <FormGroup>
            <FormLabel className={`czMonthlyInst__label ${NoRangeSet ? "" : "show"}`}>Monthly Installment</FormLabel>
            <CzTextField
              contentEditable={false}
              value={displayValue()}
              onFocus={() => {
                setOpenPanel(true);
              }}
              className="czMonthlyInst__input"
              placeholder="Monthly Installment"
            />
          </FormGroup>
          <IoCaretDown className="czMonthlyInst__icon" />
        </div>
      </Popover.Button>

      <Transition
        show={openPanel}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel ref={panelRef} static className="czMonthlyInst__panel">
          <div className="czMonthlyInst__input-controls">
            <FormGroup>
              <FormLabel>Min</FormLabel>
              <div className="flex flex-row items-center">
                <CzTextField contentEditable={false} type="number" />
                <Typography className="ml-2 font-normal text-gray-500">/mth</Typography>
              </div>
            </FormGroup>
            <FormGroup>
              <FormLabel>Max</FormLabel>
              <div className="flex flex-row items-center">
                <CzTextField contentEditable={false} type="number" />
                <Typography className="ml-2 font-normal text-gray-500">/mth</Typography>
              </div>
            </FormGroup>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
