import React, { useEffect, useImperativeHandle } from "react";
import Slider from "@mui/material/Slider";

type CzRangeSliderProps = {
  marks?: { value: number; label: string }[];
  min?: number;
  max?: number;

  minDifference?: number;
  disableSwap?: boolean;
  onChange?: (values: number[]) => void;
  valueLabelFormat?: (value: number) => string;
  ariaValueText?: (value: number) => string;
};

const CzRangeSliderComponent = (
  props: CzRangeSliderProps,
  ref: React.ForwardedRef<{ updateSlider: (values: number[]) => void }>
) => {
  const {
    marks = [],
    min = 0,
    max = 100,
    minDifference = 0,
    disableSwap = false,
    onChange,
    valueLabelFormat = (value: number) => `${value}`,
    ariaValueText = (value: number) => `${value}`,
  } = props;
  const [value, setValue] = React.useState<number[]>([min, max]);

  useEffect(() => {
    onChange?.(value);
  }, [value, onChange]);

  const handleChangeWithMinDiff = (_: Event, newValue: number[] | number, activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDifference), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDifference)]);
    }
  };

  useImperativeHandle(ref, () => ({
    updateSlider(values: number[]) {
      setValue(values);
    },
  }));

  return (
    <Slider
      disableSwap={disableSwap}
      getAriaLabel={() => "Price range"}
      value={value}
      min={min}
      max={max}
      onChange={handleChangeWithMinDiff}
      valueLabelDisplay="auto"
      getAriaValueText={ariaValueText}
      className="text-base"
      classes={{
        thumb: "czRangeSlider__thumb",
        valueLabel: "czRangeSlider__label",
      }}
      marks={marks}
      valueLabelFormat={valueLabelFormat}
    />
  );
};

CzRangeSliderComponent.displayName = "CzRangeSlider";
export const CzRangeSlider = React.forwardRef(CzRangeSliderComponent);
