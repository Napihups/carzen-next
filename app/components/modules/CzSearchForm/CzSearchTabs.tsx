import { fixtures } from "@constant/fixtures";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import { SearchType } from "./CzSearchForm.types";
import { useCzSearchForm } from "./CzSearchFormProvider";

export const CzSearchTabs: React.FC = () => {
  const { currentType, setCurrentType } = useCzSearchForm();

  const isActiveTab = useCallback(
    (tab: SearchType) => {
      return tab === currentType;
    },
    [currentType]
  );
  return (
    <div className="czSearchTabs">
      <Typography variant="inherit" className="czSearchTabs__title">
        {fixtures.search_form.heading}
      </Typography>

      <CzButton
        onClick={() => {
          setCurrentType(SearchType.NEW);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.new}
        className={`czSearchTabs__tab ${isActiveTab(SearchType.NEW) ? "active" : ""}`}
      />

      <CzButton
        onClick={() => {
          setCurrentType(SearchType.USED);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.used}
        className={`czSearchTabs__tab ${isActiveTab(SearchType.USED) ? "active" : ""}`}
      />
      <CzButton
        onClick={() => {
          setCurrentType(SearchType.SUBSCRIPTION);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.subs}
        className={`czSearchTabs__tab ${isActiveTab(SearchType.SUBSCRIPTION) ? "active" : ""}`}
      />
      <CzButton
        onClick={() => {
          setCurrentType(SearchType.ALL);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.all}
        className={`czSearchTabs__tab ${isActiveTab(SearchType.ALL) ? "active" : ""}`}
      />
    </div>
  );
};
