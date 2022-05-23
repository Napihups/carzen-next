import { CzPriceRangeSelect } from "@element/CzPriceRangeSelect/CzPriceRangeSelect";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import React from "react";

export const CzSearchForm: React.FC = () => {
  return (
    <div className="czSearchForm">
      <div className="czSearchForm__top">
        <CzCarModelSearchBar />
      </div>
      <div className="czSearchForm__bottom">
        <CzVehicleTypeSelect />
        <CzPriceRangeSelect />
        <CzInstRange />
      </div>
    </div>
  );
};
