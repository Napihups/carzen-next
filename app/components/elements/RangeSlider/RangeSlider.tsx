import React from "react";

export const RangeSlider: React.FC = () => {
  return (
    <div className="czRangeSlider">
      <div className="czRangeSlider__inputSection">
        <div className="czRangeSlider__fieldbox">
          <span>Min</span>
          <input type="number" className="czRangeSlider__input" value="2500" />
        </div>
        <div className="czRangeSlider__seperator">-</div>
        <div className="czRangeSlider__fieldbox">
          <span>Max</span>
          <input type="number" className="czRangeSlider__input" value="10000" />
        </div>
      </div>
    </div>
  );
};
