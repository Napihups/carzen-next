import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";

export const CzRangeSlider: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      {...props}
      className={props.className ?? "text-base"}
      classes={
        props.classes === undefined
          ? {
              thumb: "czRangeSlider__thumb",
              valueLabel: "czRangeSlider__label",
            }
          : props.classes
      }
    />
  );
};
