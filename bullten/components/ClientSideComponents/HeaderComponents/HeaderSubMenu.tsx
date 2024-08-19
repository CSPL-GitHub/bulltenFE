// import { SubHeader } from "@/components/ServerSideComponents/HeaderComponents/headerTypes";
// import React from "react";

// type Props = {
//   openSubMenu: number | undefined;
//   menuKey: number;
//   subMenus: SubHeader[];
// };

// const HeaderSubMenu = ({ openSubMenu, menuKey, subMenus }: Props) => {
//   // console.log(openSubMenu, menuKey);
//   return (
//     <div
//       className={`${
//         openSubMenu === menuKey ? "block" : "hidden"
//       } w-auto  px-3 py-2 `}
//     >
//       {subMenus?.map((subHeader) => {
//         return (
//           <p className="py-1  " key={subHeader?.id}>
//             {subHeader?.title}
//           </p>
//         );
//       })}
//     </div>
//   );
// };

// export default HeaderSubMenu;


import { HeaderMenu, SubHeader } from "@/components/CommonComponents/HeaderComponents/headerTypes";
import Link from "next/link";
import React from "react";

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
      className={` open w-[100vw] absolute top-full left-0 right-0 ${
        openSubMenu === menuKey ? "block" : "hidden"
      } rounded-md shadow-md py-2 z-50`}
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
        <Link
          href={`${headerMenu?.path}/${subHeader?.slug}`}
          key={subHeader?.id}
          onClick={() => setOpenSubMenu(undefined)}
        >
          <p className="px-2 py-2 open hover:underline underline-offset-4" key={subHeader?.id}>
            {subHeader?.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HeaderSubMenu;
