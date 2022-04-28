import Link from "next/link";
import React from "react";
import { fixtures } from "@constant/fixtures";
import { useRouter } from "next/router";
import { pathNames } from "@constant/router-config";

/**
 *
 * @param pathname
 */
const _setItemActiveClass = (currentPath: string, itemPath: string) => {
  return currentPath === itemPath ? "active" : "";
};

/**
 *
 * @returns
 */
export const NavMenuBar: React.FC = () => {
  const router = useRouter();

  return (
    <ul className="czNavMenu">
      <Link passHref href={pathNames.new_cars}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.new_cars)}`}>
          {fixtures.nav_menu.new_cars}
        </li>
      </Link>
      <Link passHref href={pathNames.used_cars}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.used_cars)}`}>
          {fixtures.nav_menu.used_cars}
        </li>
      </Link>
      <Link passHref href={pathNames.rental_cars}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.rental_cars)}`}>
          {fixtures.nav_menu.rental_cars}
        </li>
      </Link>

      <Link passHref href={pathNames.sell_my_car}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.sell_my_car)}`}>
          {fixtures.nav_menu.sell_my_car}
        </li>
      </Link>

      <Link passHref href={pathNames.directory}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.directory)}`}>
          {fixtures.nav_menu.directory}
        </li>
      </Link>

      <Link passHref href={pathNames.product}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.product)}`}>
          {fixtures.nav_menu.product}
        </li>
      </Link>

      <Link passHref href={pathNames.articles}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.articles)}`}>
          {fixtures.nav_menu.articles}
        </li>
      </Link>

      <Link passHref href={pathNames.car_videos}>
        <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, pathNames.car_videos)}`}>
          {fixtures.nav_menu.car_videos}
        </li>
      </Link>
    </ul>
  );
};