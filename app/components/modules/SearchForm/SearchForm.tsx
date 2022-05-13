import { fixtures } from "@constant/fixtures";
import { TextField } from "@element/TextField/TextField";
import { CarModalAutoComplete } from "@module/CarModelAutoComplete/CarModelAutoComplete";
import React from "react";

export const SearchForm: React.FC = () => {
  return (
    <div className="searchForm">
      <CarModalAutoComplete />
    </div>
  );
};
