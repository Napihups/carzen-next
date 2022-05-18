import { CzIconButton } from "@cz-ui/CzIconButton/CzIconButton";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";

type CzNavDrawerTogglerProps = {
  onToggle: (ev: React.MouseEvent) => void;
};

export const CzNavDrawerToggler: React.FC<CzNavDrawerTogglerProps> = ({ onToggle }) => {
  return (
    <CzIconButton onClick={onToggle}>
      <IoMenuSharp className="czNavbar__toggler" />
    </CzIconButton>
  );
};
