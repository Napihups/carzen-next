import { fixtures } from "@constant/fixtures";
import { pathNames } from "@constant/router-config";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CzNavMenuExtDropdown } from "./CzNavMenuExtDropdown";

const _setItemActiveClass = (currentPath: string, itemPath: string) => {
  return currentPath === itemPath ? "active" : "";
};

export const CzNavMenu: React.FC = () => {
  const router = useRouter();

  return (
    <ul className="czNavMenu" role="menu">
      <Link passHref href={pathNames.new_cars}>
        <li
          role="menuitem"
          className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.new_cars)}`}
        >
          {fixtures.nav_menu.new_cars}
        </li>
      </Link>
      <Link passHref href={pathNames.used_cars}>
        <li
          role="menuitem"
          className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.used_cars)}`}
        >
          {fixtures.nav_menu.used_cars}
        </li>
      </Link>
      <Link passHref href={pathNames.rental_cars}>
        <li
          role="menuitem"
          className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.rental_cars)}`}
        >
          {fixtures.nav_menu.rental_cars}
        </li>
      </Link>

      <Link passHref href={pathNames.sell_my_car}>
        <li
          role="menuitem"
          className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.sell_my_car)}`}
        >
          {fixtures.nav_menu.sell_my_car}
        </li>
      </Link>

      <div className="czNavMenu__item-wrapper">
        <Link passHref href={pathNames.directory}>
          <li
            role="menuitem"
            className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.directory)}`}
          >
            {fixtures.nav_menu.directory}
          </li>
        </Link>
        <Link passHref href={pathNames.product}>
          <li
            role="menuitem"
            className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.product)}`}
          >
            {fixtures.nav_menu.product}
          </li>
        </Link>
        <Link passHref href={pathNames.car_videos}>
          <li
            role="menuitem"
            className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.car_videos)}`}
          >
            {fixtures.nav_menu.car_videos}
          </li>
        </Link>
        <Link passHref href={pathNames.articles}>
          <li
            role="menuitem"
            className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.articles)}`}
          >
            {fixtures.nav_menu.articles}
          </li>
        </Link>
      </div>
      <CzNavMenuExtDropdown />
    </ul>
  );
};
