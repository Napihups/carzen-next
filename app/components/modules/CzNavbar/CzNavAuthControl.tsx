import React from "react";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { FoucGuard } from "@common/FoucGuard";

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
        text="Sign up"
        className="px-5 text-gray-900"
      />
      <CzButton
        onClick={handleLoginClick}
        variant="contained"
        color="primary"
        size="medium"
        text="Login"
        className="px-16"
      />
    </FoucGuard>
  );
};
