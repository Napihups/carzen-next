import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import React from "react";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import { CzPriceRangeSelect } from "@element/CzPriceRangeSelect/CzPriceRangeSelect";
import { CzCategorySelect } from "@element/CzCategorySelect/CzCategorySelect";
import { useCzSearchFormContext } from "./CzSearchFormContext";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { IoSearchOutline } from "react-icons/io5";

export const CzSearchForm: React.FC = () => {
  const { onSubmit } = useCzSearchFormContext();

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
        <CzButton
          onClick={() => onSubmit()}
          variant="contained"
          className="czSearchForm__submit"
          color="inherit"
          text="Find new"
          endIcon={<IoSearchOutline />}
        />
      </div>
    </div>
  );
};
