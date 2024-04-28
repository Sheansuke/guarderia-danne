"use client";

import { navigationOptions } from "@/core/config/navigationOptions";
import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const { isMobile, isDesktop } = useBreakPoints();

  return (
    <nav className="bg-green-500 navbar h-[75.96px]">
      <div className="md:container flex-1 ">
        <div className="flex-1 relative">
          <a href="/" className="mr-10">
            <span className="font-bold text-royal-blue-500 text-lg sm:text-2xl">G</span>
            <span className="font-bold text-orange-500 text-lg sm:text-2xl">U</span>
            <span className="font-bold text-dandelion-500 text-lg sm:text-2xl">A</span>
            <span className="font-bold text-chalky-500 text-lg sm:text-2xl">R</span>
            <span className="font-bold text-bianca-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">E</span>
            <span className="font-bold text-tumbleweed-500 text-lg sm:text-2xl">R</span>
            <span className="font-bold text-dandelion-500 text-lg sm:text-2xl">I</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">A</span>
            <span> </span>
            <span className="font-bold text-light-blue-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-light-blue-500 text-lg sm:text-2xl">E</span>
            <span> </span>
            <span className="font-bold text-orange-500 text-lg sm:text-2xl">D</span>
            <span className="font-bold text-champagne-500 text-lg sm:text-2xl">A</span>
            <span className="font-bold text-royal-blue-500 text-lg sm:text-2xl">N</span>
            <span className="font-bold text-tumbleweed-500 text-lg sm:text-2xl">N</span>
            <span className="font-bold text-chalky-500 text-lg sm:text-2xl">E</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {isDesktop &&
              navigationOptions.map((option) => (
                <li key={option.path}>
                  <Link href={option.path} className="font-bold text-green-950 text-sm md:text-lg flex items-center opacity-70">
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
                    <Image priority src="/icons/navbar_menu.svg" alt={"Icono Menu"} width={30} height={30} />
                  </summary>
                  <ul className="p-1 rounded-t-none  -right-4 bg-green-500 ">
                    {navigationOptions.map((option) => (
                      <li key={option.path}>
                        <Link href={option.path} className="font-bold text-green-950 text-sm text-nowrap opacity-70">
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
