import React, { useState } from "react";
import { CzDrawerPanel } from "./CzDrawerPanel";
import { CzNavDrawerToggler } from "./CzNavDrawerToggler";

export const CzNavDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <div
        className={`czNavDrawer__backdrop ${openDrawer ? "czNavDrawer__backdrop--show " : ""}`}
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
      <CzNavDrawerToggler
        onToggle={() => {
          setOpenDrawer(true);
        }}
      />
      <CzDrawerPanel drawerOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
};
