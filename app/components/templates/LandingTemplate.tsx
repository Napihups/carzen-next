import React from "react";

import { CzCarBlob } from "@element/CzCarBlob/CzCarBlob";
import { CzSearchForm } from "@module/CzSearchForm/CzSearchForm";

export const LandingTemplate: React.FC = () => {
  return (
    <div data-testid="LandingTemplate" className="czLanding">
      <div className="czBanner">
        <div className="czBanner__blob">
          <CzCarBlob />
        </div>
        <CzSearchForm />
      </div>
    </div>
  );
};
