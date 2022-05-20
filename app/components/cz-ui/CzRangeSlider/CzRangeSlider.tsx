import React, { useImperativeHandle } from "react";
import Slider from "@mui/material/Slider";

type CzRangeSliderProps = {
  marks?: { value: number; label: string }[];
  min?: number;
  max?: number;
  initialMin?: number;
  initialMax?: number;
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
    initialMin = 0,
    initialMax = 100,
    onChange,
    valueLabelFormat = (value: number) => `${value}`,
    ariaValueText = (value: number) => `${value}`,
  } = props;
  const [value, setValue] = React.useState<number[]>([initialMin, initialMax]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const val = newValue as number[];
    setValue(val);
    onChange?.(val);
  };

  useImperativeHandle(ref, () => ({
    updateSlider(values: number[]) {
      setValue(values);
    },
  }));

  return (
    <Slider
      getAriaLabel={() => "Price range"}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={ariaValueText}
      className="text-base"
      min={min}
      max={max}
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
