import { fixtures } from "@constant/fixtures";
import { pathNames } from "@constant/router-config";
import { CzButton } from "@cz-ui/CzButton/CzButton";
import { CzIconButton } from "@cz-ui/CzIconButton/CzIconButton";
import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const DRAWER_WIDTH_OFFSET = "-296px";

type CzDrawerPanelProps = {
  drawerOpen: boolean;
  onClose: Function;
};
export const CzDrawerPanel: React.FC<CzDrawerPanelProps> = ({ drawerOpen, onClose }) => {
  return (
    <AnimatePresence initial={false}>
      {drawerOpen && (
        <motion.div
          exit={{ left: DRAWER_WIDTH_OFFSET }}
          initial={{ left: DRAWER_WIDTH_OFFSET }}
          animate={{ left: "0px" }}
          transition={{ duration: 0.35, type: "keyframes" }}
          className="czNavDrawer__panel"
        >
          <div className="czNavDrawer__heading">
            <Typography variant="h6">Menu</Typography>
            <CzIconButton className="text-white" onClick={() => onClose()}>
              <IoClose />
            </CzIconButton>
          </div>

          <div className="czNavDrawer__authControl">
            <CzButton text="login" variant="outlined" color="inherit" className="czNavDrawer__signupButton" />
            <CzButton text="login" variant="contained" color="inherit" className="czNavDrawer__loginButton" />
          </div>
          <div className="czNavDrawer__divider">
            <span />
          </div>

          <ul className="czNavDrawer__menu" onClick={() => onClose()}>
            <Link passHref href={pathNames.new_cars}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.new_cars}</li>
            </Link>
            <Link passHref href={pathNames.used_cars}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.used_cars}</li>
            </Link>
            <Link passHref href={pathNames.rental_cars}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.rental_cars}</li>
            </Link>

            <Link passHref href={pathNames.sell_my_car}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.sell_my_car}</li>
            </Link>

            <Link passHref href={pathNames.directory}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.directory}</li>
            </Link>
            <Link passHref href={pathNames.product}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.product}</li>
            </Link>
            <Link passHref href={pathNames.car_videos}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.car_videos}</li>
            </Link>
            <Link passHref href={pathNames.articles}>
              <li className="czNavDrawer__menu-item">{fixtures.nav_menu.articles}</li>
            </Link>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
