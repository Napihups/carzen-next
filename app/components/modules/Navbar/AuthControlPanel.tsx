import React from "react";
import { Button } from "@element/Button/Button";

export const AuthControlPanel: React.FC = () => {
  return (
    <>
      <Button type="button" aria-label="button-sign-up" variant="link-black" size="sm" text="Sign up" />
      <div className="login-button">
        <Button type="button" aria-label="button-login" bar size="sm" variant="primary" text="Login" />
      </div>
    </>
  );
};
