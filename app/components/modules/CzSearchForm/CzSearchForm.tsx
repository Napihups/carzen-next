import { FoucGuard } from "@common/FoucGuard";
import { CzCarModelSearchBar } from "@element/CzCarModelSearchBar/CzCarModelSearchBar";
import React from "react";
import { CzSearchFormProvider } from "./CzSearchFormProvider";
import { CzSearchTabs } from "./CzSearchTabs";
import { carModels } from "@constant/car-models";
import { CzSearchFormTemplate } from "./CzSearchFormTemplate";

export const CzSearchForm: React.FC = () => {
  return (
    <CzSearchFormProvider>
      <FoucGuard targetId="CzSearchFormContainer">
        <div className="czSearchFormContainer">
          <CzSearchTabs />
          <div className="czSearchForm">
            <div className="czSearchBarContainer">
              <CzCarModelSearchBar carModels={carModels} />
            </div>
            <CzSearchFormTemplate />
          </div>
        </div>
      </FoucGuard>
    </CzSearchFormProvider>
  );
};
