import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzCategorySelect } from "@element/CzCategorySelect/CzCategorySelect";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import { CzPriceRangeSelect } from "@element/CzPriceRangeSelect/CzPriceRangeSelect";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export const CzUsedSearchForm: React.FC = () => {
  return (
    <div data-testid="CzUsedSearchForm">
      <div className="flex flex-row items-center w-full py-2 gap-2 z-40">
        <CzVehicleTypeSelect />
        <CzPriceRangeSelect />
        <CzInstRange />
      </div>
      <div className="flex flex-row items-center w-full py-2 gap-2 z-30">
        <CzCategorySelect />
        <CzButton
          onClick={() => {}}
          variant="contained"
          className="czSearchForm__submit"
          color="inherit"
          text="Find Used"
          endIcon={<IoSearchOutline />}
        />
      </div>
    </div>
  );
};
