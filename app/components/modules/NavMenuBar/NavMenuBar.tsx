import Link from "next/link";
import React from "react";
import { fixtures } from "@constant/fixtures";
import { useRouter } from "next/router";

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
      <li className={`czNavMenu__menuItem ${_setItemActiveClass(router.pathname, "/")}`}>
        <Link href={"/"}>{fixtures.nav_menu.new_cars}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.used_cars}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.rental_cars}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/napi"}>{fixtures.nav_menu.sell_my_car}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.directory}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.product}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.articles}</Link>
      </li>
      <li className="czNavMenu__menuItem">
        <Link href={"/"}>{fixtures.nav_menu.car_videos}</Link>
      </li>
    </ul>
  );
};
