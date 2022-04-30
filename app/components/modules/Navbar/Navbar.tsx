import React from "react";
import { Logo } from "@element/Logo";
import { AuthControlPanel } from "./AuthControlPanel";
import { NavMenuBar } from "@module/NavMenuBar/NavMenuBar";
import { NavDrawer } from "@module/NavDrawer/NavDrawer";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="czContainer">
        <div className="navbar__top">
          <div className="navbar__navDrawer">
            <NavDrawer />
          </div>
          <div className="navbar__logo-box">
            <Logo />
          </div>
          <div className="navbar__auth-control">
            <AuthControlPanel />
          </div>
        </div>
        <div className="navbar__bottom-menu">
          <NavMenuBar />
        </div>
      </div>
    </div>
  );
};
