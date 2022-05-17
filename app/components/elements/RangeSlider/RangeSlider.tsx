import React, { useEffect, useRef, useState } from "react";

type RangeSliderProps = {
  /** */
  minBetweenRange: number;
  /** */
  onMinChange: (value: number) => void;
  /** */
  onMaxChange: (value: number) => void;
  /** */
  initialMin: number;
  /** */
  initialMax: number;
  /** */
  min: number;
  /** */
  max: number;
};

export const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const step = 1000;

  const [minValue, setMinValue] = useState<number>(props.initialMin);
  const [maxValue, setMaxValue] = useState<number>(props.initialMax);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (maxValue - minValue >= props.minBetweenRange && maxValue <= props.max) {
      if (parseInt(e.target.value) > maxValue) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxValue - minValue >= props.minBetweenRange && maxValue <= props.max) {
      if (parseInt(e.target.value) < minValue) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current!.style.left = (minValue / props.max) * step + "%";
    progressRef.current!.style.right = step - (maxValue / props.max) * step + "%";
  }, [minValue, maxValue, props.max, step]);

  return (
    <div className="czRangeSlider">
      <div className="czRangeSlider__inputSection">
        <div className="czRangeSlider__fieldbox">
          <span>Min</span>
          <input type="number" className="czRangeSlider__input" />
        </div>
        <div className="czRangeSlider__seperator">-</div>
        <div className="czRangeSlider__fieldbox">
          <span>Max</span>
          <input type="number" className="czRangeSlider__input" />
        </div>
      </div>
      <div className="czRangeSlider__box">
        <div className="czRangeSlider__track">
          <div className="czRangeSlider__progress" ref={progressRef} />
        </div>
        <div className="czRangeSlider__slider-thumbs">
          <input
            onChange={handleMin}
            type="range"
            value={minValue}
            min={props.min}
            max={props.max}
            className="czRangeSlider__thumb"
          />
          <input
            onChange={handleMax}
            type="range"
            value={maxValue}
            min={props.min}
            max={props.max}
            className="czRangeSlider__thumb"
          />
        </div>
      </div>
    </div>
  );
};
