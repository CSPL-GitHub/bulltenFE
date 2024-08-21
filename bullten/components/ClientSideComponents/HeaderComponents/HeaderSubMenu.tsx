import { HeaderMenu, SubHeader, SubHeaderLinks } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeaderInsideMenu from "./HeaderInsideMenu";

type Props = {
  openSubMenu: number | undefined;
  menuKey: number;
  headerMenu: HeaderMenu;
  moveDown: boolean;
  setOpenSubMenu: any;
};

const HeaderSubMenu = ({
  openSubMenu,
  menuKey,
  headerMenu,
  moveDown,
  setOpenSubMenu,
}: Props) => {

  const [insideSubMenu, setInsideSubMenu] = useState<any>()
  const [subheaderIndex, setSubHeaderIndex] = useState<number>(0);

  useEffect(() => {
    // Set the default submenu to the first one when the component mounts
    if (headerMenu?.subheader?.length) {
      setInsideSubMenu(headerMenu.subheader[0]);
    }
  }, [headerMenu]);

  console.log("insideSubMenu", subheaderIndex);

  return (
    <div
      className={`w-[100vw] min-h-[400px] open absolute top-full left-0 right-0  ${openSubMenu === menuKey ? "block" : "hidden"
        } rounded-md shadow-md z-50 px-16 py-9 grid grid-cols-12`}
      style={{
        ...(moveDown
          ? {
            background: `#ffffff`,
            backdropFilter: "blur(35px)",
          }
          : {
            background: `#ffffff`,
            backdropFilter: "blur(35px)",
          }),
      }}
    >
      <div className="col-span-2 border-r-2">
        {headerMenu?.subheader?.map((subHeader: SubHeader, index: number) => (
          <div key={index} className="flex justify-between cursor-pointer px-3 py-2 rounded-sm hover:bg-bullt-quaternary/[0.2] group"
            onMouseEnter={() => {
              setInsideSubMenu(subHeader);
              setSubHeaderIndex(index);
            }}>
            <h2 className="text-bullt-text-primary font-semibold text-lg col-span-2">
              {subHeader?.Subheader_heading}
            </h2>
            <MdOutlineKeyboardArrowRight size={20} className="group-hover:flex hidden" />
          </div>
        ))}
      </div>

      <HeaderInsideMenu
        subheaderIndex={subheaderIndex}
        insideSubMenu={insideSubMenu}
        headerMenu={headerMenu}
        setOpenSubMenu={setOpenSubMenu}
      />

    </div>
  );
};

export default HeaderSubMenu;
