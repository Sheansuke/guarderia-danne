"use client";

import { navigationOptions } from "@/core/config/navigationOptions";
import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const { isMobile, isDesktop } = useBreakPoints();

  return (
    <nav className="bg-green-500 navbar">
      <div className="md:container flex-1">
        <div className="flex-1">
          <a href="/">
            <span className="font-bold text-royal-blue-500 sm:text-2xl">G</span>
            <span className="font-bold text-orange-500 sm:text-2xl">U</span>
            <span className="font-bold text-dandelion-500 sm:text-2xl">A</span>
            <span className="font-bold text-chalky-500 sm:text-2xl">R</span>
            <span className="font-bold text-bianca-500 sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 sm:text-2xl">E</span>
            <span className="font-bold text-tumbleweed-500 sm:text-2xl">R</span>
            <span className="font-bold text-dandelion-500 sm:text-2xl">I</span>
            <span className="font-bold text-champagne-500 sm:text-2xl">A</span>
            <span> </span>
            <span className="font-bold text-light-blue-500 sm:text-2xl">D</span>
            <span className="font-bold text-light-blue-500 sm:text-2xl">E</span>
            <span> </span>
            <span className="font-bold text-orange-500 sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 sm:text-2xl">A</span>
            <span className="font-bold text-royal-blue-500 sm:text-2xl">N</span>
            <span className="font-bold text-tumbleweed-500 sm:text-2xl">N</span>
            <span className="font-bold text-chalky-500 sm:text-2xl">E</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {isDesktop &&
              navigationOptions.map((option) => (
                <li key={option.path}>
                  <Link href={option.path} className="font-bold text-green-950 text-sm md:text-lg flex items-center">
                    {option.tittle}
                  </Link>
                </li>
              ))}
          </ul>

          <ul className="menu menu-horizontal ">
            {isMobile && (
              <li>
                <details>
                  <summary>
                    <Image src="/icons/navbar_menu.svg" alt={"Icono Menu"} width={30} height={30} />
                  </summary>
                  <ul className="p-2 rounded-t-none ">
                    {navigationOptions.map((option) => (
                      <li key={option.path}>
                        <Link href={option.path} className="font-bold text-green-950 text-sm ">
                          {option.tittle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
