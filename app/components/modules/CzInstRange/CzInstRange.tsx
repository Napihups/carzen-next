import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzRangeSlider } from "@cz-ui/CzRangeSlider/CzRangeSlider";
import { CzTextField } from "@cz-ui/CzTextField/CzTextField";
import { Popover, Transition } from "@headlessui/react";
import { formatCurrency } from "@lib/currency-format";
import { ClickAwayListener, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import { isNaN } from "lodash";
import React, { createContext, useContext, useState, Fragment, useCallback, useRef, useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";

const MAX = 5000;
const MIN = 0;
const MIN_DIFF = 100;

type CzInstRangeContextTypeProps = {
  panelOpen: boolean;
  setPanelOpen: (open: boolean) => void;
  minValue: number;
  setMinValue: (val: number) => void;
  maxValue: number;
  setMaxValue: (val: number) => void;
  isDefaultRange: boolean;
};

const CzInstRangeContext = createContext<CzInstRangeContextTypeProps>({
  panelOpen: false,
  setPanelOpen: () => {},
  minValue: MIN,
  setMinValue: () => {},
  maxValue: MAX,
  setMaxValue: () => {},
  isDefaultRange: true,
});

const useCzInstRangeContext = () => useContext(CzInstRangeContext);

type CzInsRangeProviderProps = {
  children: React.ReactNode;
};
const CzInstRangeProvider: React.FC<CzInsRangeProviderProps> = ({ children }) => {
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const [minValue, setMinValue] = useState<number>(MIN);
  const [maxValue, setMaxValue] = useState<number>(MAX);

  const isDefaultRange = Boolean(minValue === MIN && maxValue === MAX);

  const value = {
    panelOpen,
    setPanelOpen,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    isDefaultRange,
  };

  return <CzInstRangeContext.Provider value={value}>{children}</CzInstRangeContext.Provider>;
};

const Toggler: React.FC = () => {
  const { isDefaultRange, setPanelOpen, panelOpen, minValue, maxValue } = useCzInstRangeContext();

  const getDisplayText = useCallback(() => {
    if (isDefaultRange) {
      return "Monthly Installment";
    }
    return `${formatCurrency(minValue)} - ${formatCurrency(maxValue)}`;
  }, [minValue, maxValue, isDefaultRange]);

  const onFocusEnter = (event: globalThis.KeyboardEvent) => {
    if (event.key === "Enter") {
      setPanelOpen(!panelOpen);
    }
  };

  const onFocus = () => {
    window.addEventListener("keyup", onFocusEnter);
  };
  const onBlur = () => {
    window.removeEventListener("keyup", onFocusEnter);
  };
  return (
    <Popover.Button as={Fragment}>
      <div>
        <FormGroup>
          <FormLabel className={`czMonthlyInst__label ${!isDefaultRange ? "show" : ""}`}>Monthly Installment</FormLabel>
          <CzButton
            className="czMonthlyInst__button"
            fullWidth
            color="inherit"
            onClick={(_) => {
              setPanelOpen(!panelOpen);
            }}
            onBlur={() => {
              onBlur();
            }}
            onFocus={() => {
              onFocus();
            }}
            text={getDisplayText()}
            endIcon={<IoCaretDown size={16} />}
          />
        </FormGroup>
      </div>
    </Popover.Button>
  );
};

type CzInstRangeSliderProps = {
  minDefault: number;
  maxDefault: number;
  onValuesChange?: (newValues: number[]) => void;
};
const CzInstRangeSlider: React.FC<CzInstRangeSliderProps> = ({ minDefault, maxDefault, onValuesChange }) => {
  const [values, setValues] = React.useState<number[]>([minDefault, maxDefault]);

  const onChange = (_: Event, newValues: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValues)) {
      return;
    }

    if (activeThumb === 0) {
      setValues([Math.min(newValues[0], values[1] - MIN_DIFF), values[1]]);
      onValuesChange?.([Math.min(newValues[0], values[1] - MIN_DIFF), values[1]]);
    } else {
      setValues([values[0], Math.max(newValues[1], values[0] + MIN_DIFF)]);
      onValuesChange?.([values[0], Math.max(newValues[1], values[0] + MIN_DIFF)]);
    }
  };

  return (
    <CzRangeSlider
      onChange={onChange}
      disableSwap
      valueLabelDisplay="auto"
      valueLabelFormat={(value: number) => formatCurrency(value)}
      value={values}
      min={MIN}
      max={MAX}
    />
  );
};

const CzInstRangeForm: React.FC = () => {
  const { panelOpen, setPanelOpen, setMinValue, setMaxValue, minValue, maxValue } = useCzInstRangeContext();
  const [min, setMin] = useState<number | string>(minValue);
  const [max, setMax] = useState<number | string>(maxValue);

  const minInputRef = useRef<HTMLInputElement>(null);

  const maxInputRef = useRef<HTMLInputElement>(null);

  const calibrateRangeValues = useCallback(() => {
    const minVal = min === "" || isNaN(min) ? MIN : min < MIN ? MIN : Number.parseInt(min.toString());
    const maxVal = max === "" || isNaN(max) ? MIN : max > MAX ? MAX : Number.parseInt(max.toString());

    let calibratedMin = minVal;
    let calibratedMax = maxVal;

    const maxStopPosition = minVal + MIN_DIFF;
    const minStopPosition = maxVal - MIN_DIFF;

    if (maxVal < maxStopPosition && maxStopPosition < MAX) {
      calibratedMax = MAX;
    } else if (minVal > minStopPosition && minStopPosition > MIN) {
      calibratedMin = MIN;
    }

    setMinValue(calibratedMin);
    setMaxValue(calibratedMax);
  }, [min, max, setMinValue, setMaxValue]);

  const onSubmitEnter = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === "Enter") {
        setPanelOpen(!panelOpen);
      }
    },
    [panelOpen, setPanelOpen]
  );

  useEffect(() => {
    if (panelOpen) {
      window.addEventListener("keyup", onSubmitEnter);
    }
    if (!panelOpen) {
      calibrateRangeValues();
      window.removeEventListener("keyup", onSubmitEnter);
    }
  }, [calibrateRangeValues, onSubmitEnter, panelOpen]);

  return (
    <>
      <div className="czMonthlyInst__input-controls">
        <FormGroup>
          <FormLabel className="text-gray-600">Min</FormLabel>
          <div className="flex flex-row items-center">
            <CzTextField
              ref={minInputRef}
              onChange={(event) => setMin(event.target.value)}
              value={min}
              autoFocus
              contentEditable={false}
              type="number"
            />
            <Typography className="ml-2 font-normal text-gray-900">/mth</Typography>
          </div>
        </FormGroup>
        <FormGroup>
          <FormLabel className="text-gray-600">Max</FormLabel>
          <div className="flex flex-row items-center">
            <CzTextField
              ref={maxInputRef}
              onChange={(event) => setMax(event.target.value)}
              value={max}
              contentEditable={false}
              type="number"
            />
            <Typography className="ml-2 font-normal text-gray-900">/mth</Typography>
          </div>
        </FormGroup>
      </div>

      <div className="czMonthlyInst__slider-row">
        <CzInstRangeSlider
          minDefault={minValue}
          maxDefault={maxValue}
          onValuesChange={(values: number[]) => {
            setMin(values[0]);
            setMax(values[1]);
          }}
        />
      </div>
    </>
  );
};

const CzInstRangeContent: React.FC = () => {
  const { panelOpen, setPanelOpen } = useCzInstRangeContext();

  return (
    <Popover className="czMonthlyInst__popover">
      <Toggler />
      <ClickAwayListener
        onClickAway={() => {
          setPanelOpen(false);
        }}
      >
        <Transition
          show={panelOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel static className="czMonthlyInst__panel">
            <CzInstRangeForm />
          </Popover.Panel>
        </Transition>
      </ClickAwayListener>
    </Popover>
  );
};

export const CzInstRange: React.FC = () => {
  return (
    <CzInstRangeProvider>
      <CzInstRangeContent />
    </CzInstRangeProvider>
  );
};
