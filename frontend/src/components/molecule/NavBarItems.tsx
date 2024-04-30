'use client'

import { navigationOptions } from "@/core/config/navigationOptions";
import { useBreakPoints } from "@/infrastructure/hooks/useBreakPoints";
import Image from "next/image";
import Link from "next/link";



export const NavBarItems = () => {
    const { isMobile, isDesktop } = useBreakPoints();
  
    return (
      <>
        <ul className="menu menu-horizontal px-1 ">
          {isDesktop &&
            navigationOptions.map((option) => (
              <li key={option.path}>
                <Link href={option.path} className="font-bold text-green-950 text-sm md:text-lg flex items-center ">
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
                      <Link href={option.path} className="font-bold text-green-950 text-sm text-nowrap text-opacity-90">
                        {option.tittle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          )}
        </ul>
      </>
    );
  };
  