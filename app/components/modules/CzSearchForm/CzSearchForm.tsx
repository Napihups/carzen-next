import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import React from "react";
import { CzAllSearchForm } from "./CzAllSearchForm";
import { CzNewSearchForm } from "./CzNewSearchForm";
import { SearchType } from "./CzSearchForm.types";
import { CzSearchFormProvider, useCzSearchForm } from "./CzSearchFormProvider";
import { CzSearchTabs } from "./CzSearchTabs";
import { CzSubsSearchForm } from "./CzSubsSearchForm";
import { CzUsedSearchForm } from "./CzUsedSearchForm";

export const CzSearchForm: React.FC = () => {
  return (
    <CzSearchFormProvider>
      <div className="czSearchFormContainer">
        <CzSearchTabs />
        <div className="czSearchForm">
          <div className="czSearchBarContainer">
            <CzCarModelSearchBar />
          </div>
          <CzSearchFormTemplate />
        </div>
      </div>
    </CzSearchFormProvider>
  );
};

const CzSearchFormTemplate: React.FC = () => {
  const { currentType } = useCzSearchForm();

  switch (currentType) {
    case SearchType.NEW:
      return <CzNewSearchForm />;
    case SearchType.USED:
      return <CzUsedSearchForm />;
    case SearchType.SUBSCRIPTION:
      return <CzSubsSearchForm />;
    case SearchType.ALL:
      return <CzAllSearchForm />;
    default:
      return null;
  }
};
