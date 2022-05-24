import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import React from "react";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import { CzPriceRangeSelect } from "@element/CzPriceRangeSelect/CzPriceRangeSelect";
import { CzCategorySelect } from "@element/CzCategorySelect/CzCategorySelect";

export const CzSearchForm: React.FC = () => {
  return (
    <div className="czSearchForm">
      <div className="czSearchForm__top">
        <CzCarModelSearchBar />
      </div>
      <div className="czSearchForm__row z-10">
        <CzVehicleTypeSelect />
        <CzPriceRangeSelect />
        <CzInstRange />
      </div>
      <div className="czSearchForm__row z-0">
        <CzCategorySelect />
      </div>
    </div>
  );
};
