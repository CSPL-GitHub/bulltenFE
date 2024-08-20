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
      {headerMenu?.subheader?.map((subHeader: SubHeader) => {
        return (
          <div>
            {subHeader?.Subheader_heading }
            {subHeader?.subheaders?.map((subHeaderLinks: SubHeaderLinks) =>
            <Link
              href={`${headerMenu?.path}/${subHeaderLinks?.slug}`}
              key={subHeaderLinks?.id}
              onClick={() => {
                setOpenSubMenu(undefined);
                setOpenMobileMenu(false);
              }}
            >
              <div className="py-3" key={subHeaderLinks?.id}>
                {subHeaderLinks?.title}
              </div>
            </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderSubMenuMobile;
