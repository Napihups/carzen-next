import React, { useEffect, useRef, useState } from "react";

type RangeSliderProps = {
  /** */
  minBetweenRange: number;
  /** */
  onMinChange: (value: number) => void;
  /** */
  onMaxChange: (value: number) => void;
  /** */
  minDefault: number;
  /** */
  maxDefault: number;
};

export const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const [minPrice, setMinPrice] = useState<number>(props.minDefault);
  const [maxPrice, setMaxPrice] = useState<number>(props.maxDefault);
  const [defaultMax, setDefaultMax] = useState<number>(props.maxDefault);

  const [offSetSliderWidth, setOffSetSliderWidth] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const offSetSliderWidth = trackRef.current?.offsetLeft;
    const sliderWidth = trackRef.current?.clientWidth;

    setOffSetSliderWidth(offSetSliderWidth ?? 0);
    setSliderWidth(sliderWidth ?? 0);
  }, []);

  const onMinChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setMinPrice(Number.parseFloat(ev.currentTarget.value));
  };

  const onMaxChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setMaxPrice(Number.parseFloat(ev.currentTarget.value));
  };

  const onMinMouseDown = (ev: React.MouseEvent | React.TouchEvent) => {
    document.addEventListener("mousemove", handleMinMouseMove);
    document.addEventListener("mouseup", handleMinMouseUp);

    document.addEventListener("touchmove", handleMinMouseMove);
    document.addEventListener("touchend", handleMinMouseUp);
  };

  const onMaxMouseDown = (ev: any) => {};

  const handleMinMouseMove = (ev: any) => {
    const elPos = trackRef.current?.getBoundingClientRect().x;

    /** Start the dragging and onMinChange of value */
    if (ev.clientX >= elPos!) {
      console.log("start dragging min thumb");
      console.log(elPos);
      console.log(ev.clientX);
      // getMinPrice base of position
      console.log(ev.clientX - elPos!);

      const posMinInPercent = ((ev.clientX - elPos!) / sliderWidth) * 100;

      const minPriceFromPercent = (posMinInPercent / 100) * defaultMax;

      if (minPriceFromPercent <= defaultMax) {
        setMinPrice(minPriceFromPercent);
      }
    }
  };

  const handleMinMouseUp = (ev: Event) => {
    document.removeEventListener("mousemove", handleMinMouseMove);
    document.removeEventListener("mouseup", handleMinMouseUp);
    document.removeEventListener("touchmove", handleMinMouseMove);
    document.removeEventListener("touchend", handleMinMouseUp);
  };

  const getMinLeftPos = () => {
    const minPercent = (minPrice / defaultMax) * 100;
    console.log(minPrice);
    console.log(((sliderWidth / 100) * minPercent).toString() + "px");
    return ((sliderWidth / 100) * minPercent - 8).toString() + "px";
  };

  const getMaxLeftPos = () => {
    const maxPercent = (maxPrice / defaultMax) * 100;
    return ((sliderWidth / 100) * maxPercent).toString() + "px";
  };

  return (
    <div className="czRangeSlider">
      <div className="czRangeSlider__inputSection">
        <div className="czRangeSlider__fieldbox">
          <span>Min</span>
          <input onChange={onMinChange} type="number" className="czRangeSlider__input" value={minPrice} />
        </div>
        <div className="czRangeSlider__seperator">-</div>
        <div className="czRangeSlider__fieldbox">
          <span>Max</span>
          <input onChange={onMaxChange} type="number" className="czRangeSlider__input" value={maxPrice} />
        </div>
      </div>
      <div className="czRangeSlider__slider-section">
        <div className="czRangeSlider__track" ref={trackRef}>
          <div
            className="czRangeSlider__thumb min"
            style={{ left: getMinLeftPos() }}
            onMouseDown={onMinMouseDown}
            onTouchStart={onMinMouseDown}
          />
          <div className="czRangeSlider__thumb max" style={{ left: getMaxLeftPos() }} onMouseDown={onMaxMouseDown} />
        </div>
      </div>
    </div>
  );
};
