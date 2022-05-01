import React from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@element/Button/Button";
import Link from "next/link";
import { pathNames } from "@constant/router-config";
import { fixtures } from "@constant/fixtures";

const DRAWER_WIDTH_OFFSET = "-296px";

type DrawerPanelProps = {
  drawerOpen: boolean;
  onClose: (ev: React.MouseEvent) => void;
};
export const DrawerPanel: React.FC<DrawerPanelProps> = ({ drawerOpen, onClose }) => {
  return (
    <AnimatePresence initial={false}>
      {drawerOpen && (
        <motion.div
          exit={{ left: DRAWER_WIDTH_OFFSET }}
          initial={{ left: DRAWER_WIDTH_OFFSET }}
          animate={{ left: "0px" }}
          transition={{ duration: 0.35, type: "keyframes" }}
          className="czNavDrawer__drawer"
        >
          <div className="czNavDrawer__header">
            <h3 className="czNavDrawer__title">Menu</h3>
            <button onClick={onClose}>
              <IoClose size={"20px"} />
            </button>
          </div>
          <div className="czNavDrawer__authControl">
            <Button bar variant="white" size="sm" text="Sign up" />
            <Button bar variant="outline-white" size="sm" text="Login" />
          </div>
          <div className="czNavDrawer__divider">
            <span />
          </div>
          {/* nav menu */}
          <ul className="czDrawerNavMenu" onClick={onClose}>
            <Link passHref href={pathNames.new_cars}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.new_cars}</li>
            </Link>
            <Link passHref href={pathNames.used_cars}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.used_cars}</li>
            </Link>
            <Link passHref href={pathNames.rental_cars}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.rental_cars}</li>
            </Link>

            <Link passHref href={pathNames.sell_my_car}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.sell_my_car}</li>
            </Link>

            <Link passHref href={pathNames.directory}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.directory}</li>
            </Link>
            <Link passHref href={pathNames.product}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.product}</li>
            </Link>
            <Link passHref href={pathNames.car_videos}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.car_videos}</li>
            </Link>
            <Link passHref href={pathNames.articles}>
              <li className="czDrawerNavMenu__menuItem">{fixtures.nav_menu.articles}</li>
            </Link>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
