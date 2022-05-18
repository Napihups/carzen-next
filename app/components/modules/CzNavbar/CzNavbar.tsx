import React from "react";
import { CzLogo } from "@element/CzLogo/CzLogo";
import { CzNavAuthControl } from "./CzNavAuthControl";
import { CzNavDrawer } from "./CzNavDrawer";
import { CzNavMenu } from "./CzNavMenu";

export const CzNavbar: React.FC = () => {
  return (
    <div className="czNavbar">
      <div className="czContainer">
        <div className="czNavbar__top">
          <div className="czNavbar__drawerSection">
            <CzNavDrawer />
          </div>
          <div className="czNavbar__logo">
            <CzLogo />
          </div>
          <div className="czNavbar__authPanel">
            <CzNavAuthControl />
          </div>
        </div>
        <div className="czNavbar__bottom">
          <CzNavMenu />
        </div>
      </div>
    </div>
  );
};
