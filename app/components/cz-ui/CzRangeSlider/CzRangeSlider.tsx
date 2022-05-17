import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { formatCurrency } from "@lib/currency-format";

const marks = [
  {
    value: 0,
    label: "$0.00",
  },
  {
    value: 500000,
    label: "$500,000",
  },
  {
    value: 1000000,
    label: "$1,000,000",
  },
];

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
export const CzRangeSlider: React.FC<CzRangeSliderProps> = ({
  marks = [],
  min = 0,
  max = 100,
  initialMin = 0,
  initialMax = 100,
  onChange,
  valueLabelFormat = (value: number) => `${value}`,
  ariaValueText = (value: number) => `${value}`,
}) => {
  const [value, setValue] = React.useState<number[]>([initialMin, initialMax]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const val = newValue as number[];
    setValue(val);
    onChange?.(val);
  };

  return (
    <Box sx={{ width: 400 }}>
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
    </Box>
  );
};
