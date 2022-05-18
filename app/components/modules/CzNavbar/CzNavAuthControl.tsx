import React from "react";
import { CzButton } from "@cz-ui/CzButton/CzButton";

export const CzNavAuthControl: React.FC = () => {
  const handleSignupClick = (ev: React.MouseEvent) => {};
  const handleLoginClick = (ev: React.MouseEvent) => {};

  return (
    <>
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
    </>
  );
};
