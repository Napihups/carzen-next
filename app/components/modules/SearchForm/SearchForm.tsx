import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { CarModalAutoComplete } from "./CarModelAutoComplete";
import { PriceRange } from "./PriceRange";

export const SearchForm: React.FC = () => {
  return (
    <div className="czSearchForm">
      <div className="czSearchForm__top">
        <CarModalAutoComplete />
      </div>
      <div className="czSearchForm__bottom">
        <VehicleTypeSelect />
        <PriceRange />
      </div>
    </div>
  );
};
