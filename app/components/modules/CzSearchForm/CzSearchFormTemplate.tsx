import React from "react";
import { CzAllSearchForm } from "./CzAllSearchForm";
import { CzNewSearchForm } from "./CzNewSearchForm";
import { SearchType } from "./CzSearchForm.types";
import { useCzSearchForm } from "./CzSearchFormProvider";
import { CzSubsSearchForm } from "./CzSubsSearchForm";
import { CzUsedSearchForm } from "./CzUsedSearchForm";

export const CzSearchFormTemplate: React.FC = () => {
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
