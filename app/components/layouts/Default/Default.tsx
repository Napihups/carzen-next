import React from "react";
import { CzNavbar } from "@module/CzNavbar/CzNavbar";

type DefaultProps = {
  children: React.ReactNode;
};
export const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div data-testid="CzLayoutDefault" className="czLayoutDefault">
      <CzNavbar />
      <div className="czContainer czContent">{children}</div>
    </div>
  );
};
