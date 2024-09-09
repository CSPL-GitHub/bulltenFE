"use client"
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import HeaderSubMenuMobile from "./HeaderSubMenuMobile";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeaderResponse, SubHeader } from "@/components/CommonComponents/HeaderComponents/headerTypes";

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
  const [activeSubMenu, setActiveSubMenu] = useState<SubHeader | undefined>(undefined);
  const [showSubMenuOnly, setShowSubMenuOnly] = useState<boolean>(false); // New state
  const [subHeaderData, setSubHeaderData] = useState<any>("")

  const router = useRouter();

  const mobileHeaderNavigation = (route: string) => {
    router.push(route);
    setOpenMobileMenu(false);
  };

  const handleSubheaderClick = (subHeader: SubHeader) => {
    setActiveSubMenu(subHeader);
    setShowSubMenuOnly(true); // Hide main menu and show only submenu
  };

  const handleBackToMainMenu = () => {
    setShowSubMenuOnly(false); // Show the main menu again
    setActiveSubMenu(undefined);
    setOpenSubMenu(undefined);
  };

  return (
    <div
      className={`${
        openMobileMenu ? "block" : "hidden"
      } open absolute top-full start-0 lg:hidden w-full h-auto min-h-[80vh] max-h-[80vh] overflow-y-auto z-50 rounded-sm py-4 `}
      style={{
        background: `#ffffff`,
        backdropFilter: "blur(35px)",
      }}
    >
      <div className="w-full">
        {/* Back button to go back to the main menu */}
        {showSubMenuOnly && (
          <div className="px-4 py-2 flex items-center">
            <button
              className="text-base flex items-center text-bullt-secondary bg-bullt-quinary pr-2 rounded-md"
              onClick={handleBackToMainMenu}
            >
              <MdOutlineKeyboardArrowLeft size={30} />
              Back
            </button>
          </div>
        )}

        {!showSubMenuOnly && headerResponse?.result?.header?.map((headerMenu) => {
          return (
            <React.Fragment key={headerMenu?.id}>
              {headerMenu?.subheader?.length > 0 ? (
                <div
                  className="w-full flex flex-col justify-center items-center text-xl mt-2"
                  onClick={() => {
                    if (openSubMenu === headerMenu?.id) {
                      setOpenSubMenu(undefined);
                      setSubHeaderData(headerMenu);
                    } else {
                      setOpenSubMenu(headerMenu?.id);
                    }
                  }}
                >
                  <div
                    className="w-full flex justify-between items-center text-2xl  px-4 py-4 hover:bg-bullt-quinary/[0.1]"
                  >
                    <h5 className="">
                      {headerMenu?.title}
                    </h5>
                    <MdOutlineKeyboardArrowDown className="mt-1 " size={25} />
                  </div>
                  <div className="w-full">
                    <HeaderSubMenuMobile
                      openSubMenu={openSubMenu}
                      menuKey={headerMenu?.id}
                      headerMenu={headerMenu}
                      setOpenSubMenu={setOpenSubMenu}
                      setOpenMobileMenu={setOpenMobileMenu}
                      setActiveSubMenu={setActiveSubMenu}
                      activeSubMenu={activeSubMenu}
                      handleSubheaderClick={handleSubheaderClick} // Pass handler
                      subHeaderData={subHeaderData}                    />
                  </div>
                </div>
              ) : (
                <div
                  className="w-full px-4 py-3 flex flex-col justify-center items-center text-xl mt-2 hover:bg-bullt-quinary/[0.1]"
                  onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                  <Link className="w-full" href={headerMenu?.path}>
                    <div className="w-full flex justify-between items-center py-1 text-2xl">
                      <h5>{headerMenu?.title}</h5>
                    </div>
                  </Link>
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* Only show submenu data if a subheader is active */}
        {showSubMenuOnly && activeSubMenu && (
          <div className="w-full px-4 py-2">
            <HeaderSubMenuMobile
              openSubMenu={openSubMenu}
              menuKey={0} // Set a dummy value since the menu is hidden
              headerMenu={{ subheader: [activeSubMenu] }} // Pass only the active subheader
              setOpenSubMenu={setOpenSubMenu}
              setOpenMobileMenu={setOpenMobileMenu}
              setActiveSubMenu={setActiveSubMenu}
              activeSubMenu={activeSubMenu}
              handleSubheaderClick={handleSubheaderClick}
              subHeaderData = {subHeaderData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
