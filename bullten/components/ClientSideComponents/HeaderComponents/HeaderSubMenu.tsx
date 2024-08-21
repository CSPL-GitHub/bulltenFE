import { HeaderMenu, SubHeader, SubHeaderLinks } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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

      <div className={`${subheaderIndex === subheaderIndex ? "block" : "hidden"} col-span-10 grid grid-cols-8`}>
        <div className={`col-span-6 ${insideSubMenu?.subheaders?.length > 6  ? " grid grid-cols-2" : "" }`}>
          {insideSubMenu?.subheaders?.map((subHeaderLinks: any) =>
            <Link
              href={`${headerMenu?.path}/${subHeaderLinks?.slug}`}
              key={subHeaderLinks?.id}
              onClick={() => setOpenSubMenu(undefined)}
              className={`grid grid-cols-7 gap-3 hover:bg-bullt-quinary/[0.2] px-4 py-2 mx-3 rounded-lg ${insideSubMenu?.subheaders?.length > 6  ? " " : "w-[50%] "}`}
            >
              <div className="relative h-[50px] col-span-2 my-auto">
                <Image
                  className="sm:rounded-[20%] rounded-[20%]"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${subHeaderLinks?.image}`}
                  alt={subHeaderLinks?.image_alt_text}
                  fill={true}
                />
              </div>

              <div className="col-span-5">
                <p className="text-lg py-2 open " key={subHeaderLinks?.id}>
                  {subHeaderLinks?.title}
                </p>
                <p className="text-xs">
                  {subHeaderLinks?.description}
                </p>
              </div>
            </Link>
          )}

        </div>

        <div className="col-span-2 bg-bullt-quaternary/[0.1] p-4 rounded-md">
          <h6 className="font-semibold text-lg text-bullt-quinary">Use Cases</h6>
          <ul className="">
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
            <li className="text-bullt-quaternary text-base py-1">AZ and asilence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderSubMenu;
