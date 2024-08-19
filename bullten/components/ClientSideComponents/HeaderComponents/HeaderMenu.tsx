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

  // console.log("new" , headerResponse?.result?.header)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`w-full fixed ${"lg:top-3"} top-5 start-0 z-10`}>
      <div className="container mx-auto sm:px-8 px-4 ">
        <div
          className="w-full flex justify-between items-center sm:gap-10 min-h-[65px] max-h-[65px] relative rounded-lg z-50 px-3"
          style={{
            ...(moveDown
              ? {
                background: `linear-gradient(137deg, rgba(255, 255, 255, 0.70) 24.15%, rgba(255, 255, 255, 0.62) 125.95%)`,
                backdropFilter: "blur(35px)",
              }
              : { background: "transparent", backdropFilter: "blur(0px)" }),
          }}
        >

          <div className=" lg:w-auto w-full flex lg:justify-center justify-between items-center">
            <Link href="/">
              <div className="w-[120px] h-[70px] relative">
                <Image
                  className="sm:rounded-[20%] rounded-[20%]"
                  src="/logo-bullten.png"
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
                  className="m-2"
                  style={moveDown ? { color: "black" } : { color: "white" }}
                  size={35}
                />
              ) : (
                <RxHamburgerMenu
                  className="m-2"
                  style={moveDown ? { color: "black" } : { color: "white" }}
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
          <div className="w-full lg:flex hidden gap-20 justify-center items-center">
            {headerResponse?.result?.header?.length > 0
              ? headerResponse?.result?.header
                ?.map((headerMenu) => {
                  return (
                    <div>
                      <div
                        className="flex flex-col justify-center items-center relative"
                        key={headerMenu?.id}
                        onMouseLeave={() => {
                          setOpenSubMenu(undefined);
                        }}
                      >
                        {headerMenu?.subheader?.length > 0 ? (
                          <>
                            <h6
                              className={`flex relative cursor-default text-lg ${moveDown
                                ? "font-thin text-tgh-primary"
                                : "font-semiBold text-tgh-tertiary"
                                }`}
                              onMouseEnter={() => {
                                setOpenSubMenu(headerMenu?.id);
                              }}
                            >
                              {headerMenu?.title}

                              <MdOutlineKeyboardArrowDown size={20} />
                            </h6>

                          </>
                        ) : (
                          <Link href={`${headerMenu?.path}`}>
                            <h6
                              className={`flex relative cursor-pointer text-lg ${moveDown
                                ? "font-thin text-tgh-primary"
                                : "font-semiBold text-tgh-tertiary"
                                }`}
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
  );
};

export default HeaderMenu;
