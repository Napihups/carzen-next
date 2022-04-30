import React from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@element/Button/Button";

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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
