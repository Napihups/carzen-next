import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Link from "next/link";
import { pathNames } from "@constant/router-config";
import { fixtures } from "@constant/fixtures";
import { useRouter } from "next/router";

export const NavMenuExtendedDropdown: React.FC = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <Menu as="div" className="czNavMenuExtendedDropdown">
      <div>
        <Menu.Button className="czNavMenu__menuItem">
          <IoEllipsisHorizontal size={"20px"} />
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
        <Menu.Items className="czNavMenuExtendedDropdown__dropdown">
          <Menu.Item>
            {({ active }) => (
              <button onClick={() => handleItemClick(pathNames.directory)}>
                {active ? (
                  <li className={`czNavMenuExtendedDropdown__item active`}>{fixtures.nav_menu.directory}</li>
                ) : (
                  <li className={`czNavMenuExtendedDropdown__item`}>{fixtures.nav_menu.directory}</li>
                )}
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button onClick={() => handleItemClick(pathNames.product)}>
                {active ? (
                  <li className={`czNavMenuExtendedDropdown__item active`}>{fixtures.nav_menu.product}</li>
                ) : (
                  <li className={`czNavMenuExtendedDropdown__item`}>{fixtures.nav_menu.product}</li>
                )}
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button onClick={() => handleItemClick(pathNames.car_videos)}>
                {active ? (
                  <li className={`czNavMenuExtendedDropdown__item active`}>{fixtures.nav_menu.car_videos}</li>
                ) : (
                  <li className={`czNavMenuExtendedDropdown__item`}>{fixtures.nav_menu.car_videos}</li>
                )}
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button onClick={() => handleItemClick(pathNames.articles)}>
                {active ? (
                  <li className={`czNavMenuExtendedDropdown__item active`}>{fixtures.nav_menu.articles}</li>
                ) : (
                  <li className={`czNavMenuExtendedDropdown__item`}>{fixtures.nav_menu.articles}</li>
                )}
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
