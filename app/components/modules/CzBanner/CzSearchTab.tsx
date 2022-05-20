import { fixtures } from "@constant/fixtures";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { SearchFilterType } from "@czTypes/search-form.type";
import { Typography } from "@mui/material";
import React, { useState } from "react";

const _isActive = (item: SearchFilterType, active: SearchFilterType) => {
  return item === active;
};
export const CzSearchTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SearchFilterType>(SearchFilterType.NEW);

  return (
    <div className="czSearchTab">
      <Typography variant="inherit" className="czSearchTab__title">
        {fixtures.search_form.heading}
      </Typography>

      <CzButton
        onClick={() => {
          setActiveTab(SearchFilterType.NEW);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.new}
        className={`czSearchTab__tab ${_isActive(SearchFilterType.NEW, activeTab) ? "active" : ""}`}
      />

      <CzButton
        onClick={() => {
          setActiveTab(SearchFilterType.USED);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.used}
        className={`czSearchTab__tab ${_isActive(SearchFilterType.USED, activeTab) ? "active" : ""}`}
      />
      <CzButton
        onClick={() => {
          setActiveTab(SearchFilterType.SUBS);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.subs}
        className={`czSearchTab__tab ${_isActive(SearchFilterType.SUBS, activeTab) ? "active" : ""}`}
      />
      <CzButton
        onClick={() => {
          setActiveTab(SearchFilterType.ALL);
        }}
        variant="outlined"
        color="inherit"
        text={fixtures.search_form.main_filters.all}
        className={`czSearchTab__tab ${_isActive(SearchFilterType.ALL, activeTab) ? "active" : ""}`}
      />
    </div>
  );
};
