import React from "react";
import { IoMdMenu } from "react-icons/io";

type TogglerProps = {
  onToggle: (ev: React.MouseEvent) => void;
};
export const Toggler: React.FC<TogglerProps> = ({ onToggle }) => {
  return (
    <button className="czNavDrawer__toggler" onClick={onToggle}>
      <IoMdMenu size={"26px"} />
    </button>
  );
};
