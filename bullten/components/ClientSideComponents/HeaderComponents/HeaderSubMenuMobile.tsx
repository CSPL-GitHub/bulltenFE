import { HeaderMenu } from "@/components/CommonComponents/HeaderComponents/headerTypes";
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
      className={`${
        openSubMenu === menuKey ? "block" : "hidden"
      } open w-full p-2 rounded-xl`}
    >
      {headerMenu?.sub_headers?.map((subHeader) => {
        return (
          <Link
            href={`${headerMenu?.path}/${subHeader?.slug}`}
            key={subHeader?.id}
            onClick={() => {
              setOpenSubMenu(undefined);
              setOpenMobileMenu(false);
            }}
          >
            <div className="py-3" key={subHeader?.id}>
              {subHeader?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderSubMenuMobile;
