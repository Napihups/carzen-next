import React, { useState, useEffect } from "react";
import { Logo } from "@element/Logo";
import { AuthControlPanel } from "./AuthControlPanel";
import { NavMenuBar } from "@module/NavMenuBar/NavMenuBar";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="navbar-top">
          <Logo />
          <AuthControlPanel />
        </div>
        <div className="navbar-bottom-menu">
          <NavMenuBar />
        </div>
      </div>
    </div>
  );
};
