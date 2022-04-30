import React, { useState } from "react";
import { Toggler } from "./Toggler";
import { DrawerPanel } from "./DrawerPanel";

export const NavDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <div
        className={`czNavDrawer__backdrop ${openDrawer ? "czNavDrawer__backdrop--show " : ""}`}
        onClick={() => {
          setOpenDrawer(false);
        }}
      />
      <Toggler
        onToggle={(e) => {
          setOpenDrawer(true);
        }}
      />
      <DrawerPanel
        drawerOpen={openDrawer}
        onClose={(e) => {
          setOpenDrawer(false);
        }}
      />
    </>
  );
};
