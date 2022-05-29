import React from "react";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { FoucGuard } from "@common/FoucGuard";
import { fixtures } from "@constant/fixtures";

export const CzNavAuthControl: React.FC = () => {
  const handleSignupClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
  };
  const handleLoginClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
  };

  return (
    <FoucGuard targetId="NavAuthControls">
      <CzButton
        onClick={handleSignupClick}
        variant="text"
        color="inherit"
        size="medium"
        text={fixtures.nav_auth_controls.signup_button_text}
        className="px-5 text-gray-900"
      />
      <CzButton
        onClick={handleLoginClick}
        variant="contained"
        color="primary"
        size="medium"
        text={fixtures.nav_auth_controls.login_button_text}
        className="px-16"
      />
    </FoucGuard>
  );
};
