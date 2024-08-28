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
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

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
    <header className="w-full flex items-center justify-center fixed top-0 start-0 z-20">
      <div className={`container mx-auto rounded-md border-1`}>
        <div className="sm:h-8 bg-bullt-secondary flex items-center sm:border-0 border-b border-bullt-quaternary sm:py-0 py-1">
          <div className="container mx-auto flex justify-between px-3">
            <div className="flex sm:flex-row flex-col sm:gap-5">
              <div className="flex gap-2 text-bullt-quaternary text-base">
                <HiOutlineMailOpen className="my-auto" />
                <p>test@mail.com</p>
              </div>
              <div className="flex gap-2 text-bullt-quaternary">
                <FaPhoneAlt className="my-auto" />
                <p> (+91) 975-225-5794</p>
              </div>
            </div>
            <div className="flex item-center text-bullt-quaternary gap-3">
              <FaFacebook size={18} className="my-auto" />
              <FaInstagram size={18} className="my-auto" />
              <FaTwitter size={18} className="my-auto" />
            </div>
          </div>
        </div>
        <div className="bg-bullt-secondary">
          <div
            className={`w-full relative z-50 shadow-lg`}
          // style={{
          //   ...(moveDown || openSubMenu
          //     ? {
          //       background: `#ffffff`,
          //       backdropFilter: "blur(35px)",
          //     }
          //     : { background: `transparent`, backdropFilter: "blur(0px)" }),
          // }}
          >
            <div className="flex justify-between items-center sm:gap-10 sm:min-h-[100px] max-h-[100px] container mx-auto">
              <div className=" lg:w-auto w-full flex lg:justify-center justify-between items-center ">
                <Link href="/">
                  <div className="sm:w-[200px] w-[200px] h-[50px] relative flex justify-center ">
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
              <div className="w-full lg:flex hidden gap-10 justify-end items-center bg-bullt-primary">
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
                                className={`flex relative cursor-default text-lg items-center min-h-16 h-[100px] font-semiBold text-bullt-secondary hover:text-bullt-tertiary `}
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
                                className={`flex relative cursor-pointer min-h-16 h-[100px] items-center font-semiBold text-lg  hover:text-bullt-tertiary text-bullt-secondary`}
                              // ${moveDown || openSubMenu
                              //   ? "text-bullt-primary"
                              //   : "text-bullt-secondary"
                              //   }
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
      </div>
    </header>
  );
};

export default HeaderMenu;
