import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzRangeSlider } from "@cz-ui/CzRangeSlider/CzRangeSlider";
import { CzTextField } from "@cz-ui/CzTextField/CzTextField";
import { Popover, Transition } from "@headlessui/react";
import { formatCurrency } from "@lib/currency-format";
import { FormGroup, FormLabel, Typography } from "@mui/material";
import { isNaN } from "lodash";
import React, { createRef, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { IoCaretDown } from "react-icons/io5";

const MIN = 0;
const MAX = 7000;
const MIN_DIFF = 1000;

export const CzMonthlyInstallment: React.FC = () => {
  const [displayText, setDisplayText] = useState<string | null>(null);

  const [minInput, setMinInput] = useState<number | string>(MIN);
  const [maxInput, setMaxInput] = useState<number | string>(MAX);

  const [openPanel, setOpenPanel] = useState<boolean>(false);
  const [displayLabel, setDisplayLabel] = useState<boolean>(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const sliderRef = createRef<{ updateSlider: (values: number[]) => void }>();

  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const onMouseClick = (event: Event) => {
    console.log(panelRef.current);
    console.log(event.target);
    if (!panelRef.current?.contains(event.target as Node)) {
      setOpenPanel(false);
    }
  };
  const updateDisplayText = useCallback(() => {
    const minDisplay = !isNaN(minInput) ? (minInput as number) : MIN;
    const maxDisplay = !isNaN(maxInput) ? (maxInput as number) : MAX;

    if (minDisplay === MIN && maxDisplay === MAX) {
      setDisplayText(null);
      setDisplayLabel(false);
      return;
    }

    setDisplayText(`${formatCurrency(minDisplay)} - ${formatCurrency(maxDisplay)}`);
    setDisplayLabel(true);
  }, [minInput, maxInput]);

  useEffect(() => {
    if (openPanel) {
      document.addEventListener("click", onMouseClick);
    } else {
      document.removeEventListener("click", onMouseClick);
      updateDisplayText();
    }
  }, [openPanel, updateDisplayText]);

  const onHandleInputChange = (type: string, value: string) => {
    const numberValue = Number.parseInt(value);
    type === "min" ? setMinInput(numberValue) : setMaxInput(numberValue);
  };

  const onBlur = (targetInput: string) => {
    const numberMin = typeof minInput === "string" ? Number.parseInt(minInput) : minInput;
    const numberMax = typeof maxInput === "string" ? Number.parseInt(maxInput) : maxInput;

    if (targetInput === "min") {
      resetMinValue(numberMin, numberMax);
      return;
    }
    if (targetInput === "max") {
      resetMaxValue(numberMin, numberMax);
      return;
    }
  };

  const resetMinValue = (min: number, max: number) => {
    switch (true) {
      case min < MIN || isNaN(min):
        setMinInput(MIN);
        break;
      case max - min < MIN_DIFF:
        setMinInput(max - MIN_DIFF);
        break;
      default:
        setMinInput(min);
        break;
    }
  };
  const resetMaxValue = (min: number, max: number) => {
    switch (true) {
      case max > MAX || isNaN(min):
        setMaxInput(MAX);
        break;
      case max - min < MIN_DIFF:
        setMaxInput(min + MIN_DIFF);
        break;
      default:
        setMaxInput(max);
        break;
    }
  };

  return (
    <Popover className="czMonthlyInst__popover">
      <Popover.Button as={Fragment}>
        <div>
          <FormGroup>
            <FormLabel className={`czMonthlyInst__label ${displayLabel ? "show" : ""}`}>Monthly Installment</FormLabel>
            <CzButton
              className="czMonthlyInst__button"
              fullWidth
              color="inherit"
              onClick={(_) => {
                setOpenPanel(true);
              }}
              text={displayText ?? "Monthly Installment"}
              endIcon={<IoCaretDown size={16} />}
            />
          </FormGroup>
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
        <Popover.Panel static className="czMonthlyInst__panel">
          <div ref={panelRef}>
            <div className="czMonthlyInst__input-controls">
              <FormGroup>
                <FormLabel className="text-gray-600">Min</FormLabel>
                <div className="flex flex-row items-center">
                  <CzTextField
                    ref={minRef}
                    value={minInput}
                    autoFocus
                    contentEditable={false}
                    type="number"
                    onChange={(event) => {
                      onHandleInputChange("min", event.target.value);
                    }}
                    onBlur={() => onBlur("min")}
                  />
                  <Typography className="ml-2 font-normal text-gray-900">/mth</Typography>
                </div>
              </FormGroup>
              <FormGroup>
                <FormLabel className="text-gray-600">Max</FormLabel>
                <div className="flex flex-row items-center">
                  <CzTextField
                    ref={maxRef}
                    value={maxInput}
                    contentEditable={false}
                    type="number"
                    onChange={(event) => {
                      onHandleInputChange("max", event.target.value);
                    }}
                    onBlur={() => onBlur("max")}
                  />
                  <Typography className="ml-2 font-normal text-gray-900">/mth</Typography>
                </div>
              </FormGroup>
            </div>

            <div className="czMonthlyInst__slider-row">
              <CzRangeSlider ref={sliderRef} disableSwap minDifference={MIN_DIFF} min={MIN} max={MAX} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
