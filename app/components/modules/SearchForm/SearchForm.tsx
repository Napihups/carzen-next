import { fixtures } from "@constant/fixtures";
import { TextField } from "@element/TextField/TextField";
import { CarModalAutoComplete } from "@module/CarModelAutoComplete/CarModelAutoComplete";
import React from "react";

export const SearchForm: React.FC = () => {
  return (
    <div className="searchForm">
      <CarModalAutoComplete />
      {/* <TextField
        className="searchForm__searchInput"
        withFocus={false}
        placeholder={fixtures.search_form.input_placeholders.car_modal}
        type="text"
      /> */}
    </div>
  );
};
