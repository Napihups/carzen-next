import React from "react";
import { Navbar } from "@module/Navbar/Navbar";

type DefaultProps = {
  children: React.ReactNode;
};
export const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="layout-default">
      <Navbar />
      {children}
    </div>
  );
};
