"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import HeaderSubMenuMobile from "./HeaderSubMenuMobile";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeaderResponse } from "@/components/CommonComponents/HeaderComponents/headerTypes";

type Props = {
  openMobileMenu: boolean;
  setOpenMobileMenu: any;
  headerResponse: HeaderResponse;
};

const HeaderMobile = ({
  openMobileMenu,
  setOpenMobileMenu,
  headerResponse,
}: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | undefined>(undefined);

  const router = useRouter();

  const mobileHeaderNavigation = (route: string) => {
    router.push(route);
    setOpenMobileMenu(false);
  };

  return (
    <div
      className={`${
        openMobileMenu ? "block" : "hidden"
      } open absolute top-full mt-2 start-0 lg:hidden w-full h-auto max-h-[70vh] overflow-y-auto z-50 rounded-xl py-4 `}
      style={{
        background: `linear-gradient(137deg, rgba(255, 255, 255, 0.95) 24.15%, rgba(255, 255, 255, 0.87) 125.95%)`,
        backdropFilter: "blur(35px)",
      }}
    >
      <div className="w-full ">
        {headerResponse?.result?.header?.map((headerMenu) => {
          return (
            <>
              {headerMenu?.subheader?.length > 0 ? (
                <div
                  className="w-full px-4 py-3 flex flex-col justify-center items-center text-xl mt-2 "
                  key={headerMenu?.id}
                  onClick={() => {
                    if (openSubMenu === headerMenu?.id) {
                      setOpenSubMenu(undefined);
                    } else {
                      setOpenSubMenu(headerMenu?.id);
                    }
                  }}
                >
                  <div
                    className="w-full flex justify-between items-center py-1 text-2xl "
                  >
                    <h5 className="hover:underline underline-offset-4">
                      {headerMenu?.title}
                    </h5>
                    <MdOutlineKeyboardArrowDown className="mt-1 " size={25} />
                  </div>
                  <div className="w-full ">
                    <HeaderSubMenuMobile
                      openSubMenu={openSubMenu}
                      menuKey={headerMenu?.id}
                      headerMenu={headerMenu}
                      setOpenSubMenu={setOpenSubMenu}
                      setOpenMobileMenu={setOpenMobileMenu}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="w-full px-4 py-3 flex flex-col justify-center items-center text-xl mt-2"
                  key={headerMenu?.id} onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                  <Link className="w-full" href={headerMenu?.path}>
                    <div className="w-full flex justify-between items-center py-1 text-2xl hover:underline underline-offset-4">
                      <h5>{headerMenu?.title}</h5>
                    </div>
                  </Link>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderMobile;
