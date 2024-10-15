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
import {
  FaCartArrowDown,
  FaFacebook,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setCurrencyCode } from "@/redux/currencySlice";
import { setCookie } from "cookies-next";
type Props = {
  headerResponse: HeaderResponse;
  headerCurrency: any[];
};

const HeaderMenu = ({ headerResponse, headerCurrency }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | undefined>(undefined);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [moveDown, setMoveDown] = useState(false);
  const [defaultCurrency, setDefaultCurrency] = useState<string | undefined>();
  const [currencies, setCurrencies] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // Throttling the scroll event handler
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

  useEffect(() => {
    const fetchIPAddress = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setDefaultCurrency(data?.currency);
      } catch (err) {
        console.error("Error fetching IP address or currency:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIPAddress();
  }, [headerCurrency]);

  useEffect(() => {
    if (defaultCurrency) {
      const checkDefault = headerCurrency.find(
        (currency) => currency.country_name === defaultCurrency
      );
      if (checkDefault) {
        setCurrencies(checkDefault);
      } else {
        setCurrencies(headerCurrency[1]);
      }
    }
  }, [defaultCurrency, headerCurrency]);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = headerCurrency.find(
      (currency) => currency.country_name === e.target.value
    );
    if (selectedCurrency) {
      setCurrencies(selectedCurrency);
      dispatch(setCurrencyCode(selectedCurrency)); // Dispatch the selected currency
    }
  };

  useEffect(() => {
    if (currencies) {
      dispatch(setCurrencyCode(currencies));
      //Setting the CurrencyCode in the Cookies to get the currencyCode in the server Side Components
      setCookie("BulltenCurrency", currencies);
    }
  }, [currencies, dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-20">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <header className="w-full flex items-center justify-center fixed top-0 start-0 z-20">
      <div className="w-full mx-auto rounded-md border-1">
        <div className="sm:h-8 bg-bullt-tertiary flex items-center sm:border-0 border-b border-bullt-quaternary sm:py-0 py-1">
          <div className="container mx-auto flex justify-between px-3">
            <div className="flex sm:flex-row flex-col sm:gap-5">
              <div className="flex gap-2 text-bullt-secondary text-base">
                <HiOutlineMailOpen className="my-auto" />
                <a href={`mailto:${headerResponse?.result?.email}`}>
                  {headerResponse?.result?.email}
                </a>
              </div>
              <div className="flex gap-2 text-bullt-secondary">
                <FaPhoneAlt className="my-auto" />
                <a href={`tel:${headerResponse?.result?.phone}`}>
                  {headerResponse?.result?.phone}
                </a>
              </div>
            </div>
            <div className="flex item-center justify-center text-bullt-secondary gap-4 relative">
              <select
                className="bg-bullt-secondary my-auto rounded-sm shadow-md lg:h-auto h-[30px] px-3 sm:px-1 text-bullt-primary focus:outline-none focus:ring-0"
                onChange={handleCurrencyChange} // Handle currency change
                value={currencies?.country_name}
              >
                {headerCurrency?.map((currency) => (
                  <option
                    key={currency.id}
                    value={currency.country_name}
                    className="text-sm"
                  >
                    {currency.country_name}
                  </option>
                ))}
              </select>
              <FaUser size={18} className="my-auto" />
              <FaCartArrowDown size={18} className="my-auto" />
              <a href="https://www.facebook.com/BullTen" className="my-auto">
                <FaFacebook size={18} className="my-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/bullten-web-hosting-solutions/"
                className="my-auto"
              >
                <FaLinkedin size={18} className="my-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-bullt-secondary">
          <div
            className={`w-full relative z-50 shadow-lg lg:bg-header-background-gradient bg-none`}
          >
            <div
              className={`flex justify-between items-center sm:gap-10 sm:min-h-[70px] container mx-auto ${
                moveDown ? "max-h-[80px]" : "max-h-[100px]"
              }`}
            >
              <div className="lg:w-auto w-full flex lg:justify-center justify-between items-center">
                <Link href="/">
                  <div className="sm:w-[200px] w-[200px] h-[50px] relative flex justify-center bg-bullt-secondary">
                    <Image
                      className="sm:rounded-[20%] rounded-[20%] object-contain"
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
                    <RxCross1 className="m-2 text-bullt-primary" size={35} />
                  ) : (
                    <RxHamburgerMenu
                      className="m-2 text-bullt-primary"
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
              <div className="w-full lg:flex hidden gap-10 justify-end items-center bg-bullt-primary px-4">
                {headerResponse?.result?.header?.map((headerMenu) => (
                  <div
                    key={headerMenu?.id}
                    onMouseLeave={() => setOpenSubMenu(undefined)}
                  >
                    <div className="flex flex-col justify-center items-center relative">
                      {headerMenu?.subheader?.length > 0 ? (
                        <h2
                          className={`flex relative cursor-default text-lg items-center font-semiBold text-bullt-secondary hover:text-bullt-tertiary ${
                            moveDown
                              ? "max-h-[70px] min-h-[70px]"
                              : "max-h-[100px] min-h-[100px]"
                          }`}
                          onMouseEnter={() => setOpenSubMenu(headerMenu?.id)}
                        >
                          {headerMenu?.title}
                          <MdOutlineKeyboardArrowDown size={20} />
                        </h2>
                      ) : (
                        <Link href={`${headerMenu?.path}`}>
                          <h6
                            className={`flex relative cursor-pointer items-center font-semiBold text-lg hover:text-bullt-tertiary text-bullt-secondary ${
                              moveDown
                                ? "max-h-[70px] min-h-[70px]"
                                : "max-h-[100px] min-h-[100px]"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
