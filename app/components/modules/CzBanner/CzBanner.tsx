import { CzCarBlob } from "@element/CzCarBlob/CzCarBlob";
import React from "react";
import { CzSearchForm } from "./CzSearchForm";
import { CzSearchFormProvider } from "./CzSearchFormContext";
import { CzSearchTab } from "./CzSearchTab";

export const CzBanner: React.FC = () => {
  return (
    <div className="czBanner">
      <div className="czBanner__blob">
        <CzCarBlob />
      </div>
      <div className="czBanner__searchForm">
        <CzSearchFormProvider>
          <CzSearchTab />
          <CzSearchForm />
        </CzSearchFormProvider>
      </div>
    </div>
  );
};
