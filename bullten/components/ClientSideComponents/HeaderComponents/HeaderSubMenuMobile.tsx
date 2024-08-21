import { HeaderMenu, SubHeader, SubHeaderLinks } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  openSubMenu: number | undefined;
  menuKey: number;
  headerMenu: any;
  setOpenSubMenu: any;
  setOpenMobileMenu: any;
  setActiveSubMenu: any;
  activeSubMenu: any;
  handleSubheaderClick:any
};

const HeaderSubMenuMobile = ({
  openSubMenu,
  menuKey,
  headerMenu,
  setOpenSubMenu,
  setOpenMobileMenu,
  setActiveSubMenu,
  activeSubMenu,
  handleSubheaderClick, // New prop
}: Props) => {

  return (
    <div
      className={`${openSubMenu === menuKey || activeSubMenu ? "block" : "hidden"} open w-full p-2 rounded-xl`}
    >
      {headerMenu?.subheader?.map((subHeader: SubHeader, index: number) => {
        return (
          <div key={index}>
            <div
              className="cursor-pointer"
              onClick={() => handleSubheaderClick(subHeader)} // Trigger hiding of other menus
            >
              <h3 className="text-xl px-3 py-3 hover:bg-bullt-quaternary/[0.1] ">{subHeader?.Subheader_heading}</h3>
            </div>
            {/* Conditionally render subheader links only if it matches the active subheader */}
            {activeSubMenu === subHeader && (
              <div>
                {subHeader?.subheaders?.map((subHeaderLinks: SubHeaderLinks) => (
                  <Link
                    href={`${headerMenu?.path}/${subHeaderLinks?.slug}`}
                    key={subHeaderLinks?.id}
                    onClick={() => setOpenSubMenu(undefined)}
                    className="grid grid-cols-7 border rounded-md my-2 bg-bullt-quinary/[0.1] py-1 min-h-[80px]"
                  >
                    <div className="relative h-[40px] col-span-2 my-auto">
                      <Image
                        className="sm:rounded-[20%] rounded-[20%] object-contain"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${subHeaderLinks?.image}`}
                        alt={subHeaderLinks?.image_alt_text}
                        fill={true}
                      />
                    </div>

                    <div className="col-span-5">
                      <p className="text-lg open">
                        {subHeaderLinks?.title}
                      </p>
                      <p className="text-xs">
                        {subHeaderLinks?.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderSubMenuMobile;

