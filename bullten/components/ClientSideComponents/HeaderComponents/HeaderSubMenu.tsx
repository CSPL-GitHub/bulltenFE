import { HeaderMenu, SubHeader, SubHeaderLinks } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
  return (
    <div
      className={` open container absolute top-full left-0 right-0  ${openSubMenu === menuKey ? "block" : "hidden"
        } grid grid-cols-3 rounded-md shadow-md z-50 px-16 py-9`}
      style={{
        ...(moveDown
          ? {
            background: `var(--tgh-tertiary)`,
            backdropFilter: "blur(35px)",
          }
          : {
            background: `linear-gradient(137deg, rgba(255, 255, 255, 0.70) 24.15%, rgba(255, 255, 255, 0.62) 125.95%)`,
            backdropFilter: "blur(35px)",
          }),
      }}
    >
      {headerMenu?.subheader?.map((subHeader: SubHeader) => (
        <div>
          <h2 className="text-bullt-tertiary font-semibold text-xl">
            {subHeader?.Subheader_heading}
          </h2>
          {subHeader?.subheaders?.map((subHeaderLinks: SubHeaderLinks) =>
            <Link
              href={`${headerMenu?.path}/${subHeaderLinks?.slug}`}
              key={subHeaderLinks?.id}
              onClick={() => setOpenSubMenu(undefined)}
              className="grid grid-cols-7"
            >
              <div className="relative h-[50px] col-span-2">
                <Image
                  className="sm:rounded-[20%] rounded-[20%]"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${subHeaderLinks?.image}`}
                  alt={subHeaderLinks?.image_alt_text}
                  // fill={true}
                />
              </div>

              <div className="col-span-5">
                <p className="text-lg py-2 open hover:underline underline-offset-4" key={subHeaderLinks?.id}>
                  {subHeaderLinks?.title}
                </p>
                <p className="text-xs">
                  {subHeaderLinks?.description}
                </p>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderSubMenu;
