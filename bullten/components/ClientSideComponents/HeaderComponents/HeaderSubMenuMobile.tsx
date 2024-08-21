import { HeaderMenu, SubHeader, SubHeaderLinks } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React from "react";

type Props = {
  openSubMenu: number | undefined;
  menuKey: number;
  headerMenu: HeaderMenu;
  setOpenSubMenu: any;
  setOpenMobileMenu: any;
};

const HeaderSubMenuMobile = ({
  openSubMenu,
  menuKey,
  headerMenu,
  setOpenSubMenu,
  setOpenMobileMenu,
}: Props) => {
  // console.log(openSubMenu, menuKey);
  return (
    <div
      className={`${openSubMenu === menuKey ? "block" : "hidden"
        } open w-full p-2 rounded-xl`}
    >
      {headerMenu?.subheader?.map((subHeader: SubHeader, index:number) => {
        return (
          <div key={index}>
            {subHeader?.Subheader_heading }
            
          </div>
        );
      })}
    </div>
  );
};

export default HeaderSubMenuMobile;
