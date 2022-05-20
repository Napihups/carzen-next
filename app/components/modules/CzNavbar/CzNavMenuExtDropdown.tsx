import { fixtures } from "@constant/fixtures";
import { pathNames } from "@constant/router-config";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

export const CzNavMenuExtDropdown: React.FC = () => {
  return (
    <Menu as="div" className="czNavMenuExtDropdown">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className={`czNavMenu__menuItem dropdown-toggler ${open ? "open" : ""} `}>
              <IoEllipsisHorizontal size="20px" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="czNavMenuExtDropdown__items">
              <Menu.Item>
                {({ active }) => (
                  <Link passHref href={pathNames.directory}>
                    <li className={`czNavMenuExtDropdown__item ${active ? "active" : ""}`}>
                      {fixtures.nav_menu.directory}
                    </li>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link passHref href={pathNames.product}>
                    <li className={`czNavMenuExtDropdown__item ${active ? "active" : ""}`}>
                      {fixtures.nav_menu.product}
                    </li>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link passHref href={pathNames.car_videos}>
                    <li className={`czNavMenuExtDropdown__item ${active ? "active" : ""}`}>
                      {fixtures.nav_menu.car_videos}
                    </li>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link passHref href={pathNames.articles}>
                    <li className={`czNavMenuExtDropdown__item ${active ? "active" : ""}`}>
                      {fixtures.nav_menu.articles}
                    </li>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
