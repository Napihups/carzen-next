import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzInstRange } from "@element/CzInstRange/CzInstRange";
import { CzVehicleTypeSelect } from "@element/CzVehicleTypeSelect/CzVehicleTypeSelect";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export const CzSubsSearchForm: React.FC = () => {
  return (
    <div data-testid="CzSubsSearchForm">
      <div className="flex flex-row items-center w-full py-2 gap-2 z-40">
        <CzVehicleTypeSelect />
        <CzInstRange />
        <CzButton
          onClick={() => {}}
          variant="contained"
          className="czSearchForm__submit"
          color="inherit"
          text="Find Subscription"
          endIcon={<IoSearchOutline />}
        />
      </div>
    </div>
  );
};
