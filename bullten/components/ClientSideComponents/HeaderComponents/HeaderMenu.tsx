"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import HeaderSubMenu from "./HeaderSubMenu";
import HeaderMobile from "./HeaderMobile";
import { throttle } from "lodash";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { HeaderResponse } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Image from "next/image";

type Props = {
  headerResponse: HeaderResponse;
};

const HeaderMenu = ({ headerResponse }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | undefined>(undefined);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [moveDown, setMoveDown] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 150) {
        setMoveDown(true);
      } else {
        setMoveDown(false);
      }
    }, 0),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`w-full fixed ${"lg:top-0"} top-0 start-0 z-10 `}>
      <div className=" mx-auto ">
        <div
          className={`w-full relative z-50 px-3 `}
          style={{
            ...(moveDown
              ? {
                  background: `#ffffff`,
                  backdropFilter: "blur(35px)",
                }
              : { background: `#ffffff`, backdropFilter: "blur(0px)" }),
          }}
        >
          <div className="flex absolute justify-between items-center sm:gap-10 min-h-[65px] max-h-[65px] container mx-auto">
            <div className=" lg:w-auto w-full flex lg:justify-center justify-between items-center">
              <Link href="/">
                <div className="sm:w-[300px] w-[200px] h-[70px] relative">
                  <Image
                    className="sm:rounded-[20%] rounded-[20%] object-contain "
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${headerResponse?.result?.logo}`}
                    alt={headerResponse?.result?.logo_alternate_text}
                    fill={true}
                  />
                </div>
              </Link>
              <div
                className="block lg:hidden"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                {openMobileMenu ? (
                  <RxCross1
                    className="m-2 text-bullt-primary"
                    // style={moveDown ? { color: "black" } : { color: "white" }}
                    size={35}
                  />
                ) : (
                  <RxHamburgerMenu
                    className="m-2 text-bullt-primary"
                    // style={moveDown ? { color: "black" } : { color: "white" }}
                    size={40}
                  />
                )}
              </div>
              <HeaderMobile
                openMobileMenu={openMobileMenu}
                setOpenMobileMenu={setOpenMobileMenu}
                headerResponse={headerResponse}
              />
            </div>
            <div className="w-full lg:flex hidden gap-10 justify-end items-center ">
              {headerResponse?.result?.header?.length > 0
                ? headerResponse?.result?.header?.map((headerMenu) => {
                    return (
                      <div
                        key={headerMenu?.id}
                        onMouseLeave={() => {
                          setOpenSubMenu(undefined);
                        }}
                      >
                        <div className="flex flex-col justify-center items-center relative">
                          {headerMenu?.subheader?.length > 0 ? (
                            <>
                              <h2
                                className={`flex relative cursor-default text-lg items-center min-h-16 font-semiBold text-bullt-primary`}
                                onMouseEnter={() => {
                                  setOpenSubMenu(headerMenu?.id);
                                }}
                              >
                                {headerMenu?.title}

                                <MdOutlineKeyboardArrowDown size={20} />
                              </h2>
                            </>
                          ) : (
                            <Link href={`${headerMenu?.path}`}>
                              <h6
                                className={`flex relative cursor-pointer font-semiBold text-lg text-bullt-primary`}
                              >
                                {headerMenu?.title}
                              </h6>
                            </Link>
                          )}
                        </div>
                        <HeaderSubMenu
                          openSubMenu={openSubMenu}
                          menuKey={headerMenu?.id}
                          headerMenu={headerMenu}
                          moveDown={moveDown}
                          setOpenSubMenu={setOpenSubMenu}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
