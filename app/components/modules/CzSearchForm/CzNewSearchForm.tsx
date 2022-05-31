import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import { CzPriceRangeSelect } from "@element/CzPriceRangeSelect/CzPriceRangeSelect";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import React, { Fragment } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const CzNewSearchForm: React.FC = () => {
  return (
    <Fragment data-testid="CzNewSearchForm">
      <div className="flex flex-row items-center w-full py-2 gap-2 z-40">
        <CzVehicleTypeSelect />
        <CzPriceRangeSelect />
        <CzInstRange />
      </div>
      <div className="flex flex-row items-center w-full py-2 gap-2 z-20">
        <CzButton
          onClick={() => {}}
          variant="contained"
          className="czSearchForm__submit"
          color="inherit"
          text="Find New"
          endIcon={<IoSearchOutline />}
        />
      </div>
    </Fragment>
  );
};
