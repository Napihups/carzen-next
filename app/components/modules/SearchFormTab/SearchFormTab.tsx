import { fixtures } from "@constant/fixtures";
import { Button } from "@element/Button/Button";
import { SearchFilterType } from "@czTypes/search-form";
import React, { useState } from "react";

const _setVariant = (active: SearchFilterType, item: SearchFilterType) => {
  return active === item ? "dark" : "outline-white";
};

export const SearchFormTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SearchFilterType>(SearchFilterType.NEW);

  return (
    <div className="searchFormTab">
      <p className="searchFormTab__heading">{fixtures.search_form.heading}</p>
      <Button
        variant={_setVariant(activeTab, SearchFilterType.NEW)}
        text={fixtures.search_form.main_filters.new}
        size="sm"
        onClick={() => {
          setActiveTab(SearchFilterType.NEW);
        }}
      />
      <Button
        variant={_setVariant(activeTab, SearchFilterType.USED)}
        text={fixtures.search_form.main_filters.used}
        size="sm"
        onClick={() => {
          setActiveTab(SearchFilterType.USED);
        }}
      />
      <Button
        variant={_setVariant(activeTab, SearchFilterType.SUBS)}
        text={fixtures.search_form.main_filters.subs}
        size="sm"
        onClick={() => {
          setActiveTab(SearchFilterType.SUBS);
        }}
      />
      <Button
        variant={_setVariant(activeTab, SearchFilterType.ALL)}
        text={fixtures.search_form.main_filters.all}
        size="sm"
        onClick={() => {
          setActiveTab(SearchFilterType.ALL);
        }}
      />
    </div>
  );
};
