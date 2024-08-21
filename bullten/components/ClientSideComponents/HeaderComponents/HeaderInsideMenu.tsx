import React from 'react'
import Image from "next/image";
import Link from "next/link";
import HeaderUseCases from './HeaderUseCases';

type Props = {
    subheaderIndex:number;
    insideSubMenu: any;
    headerMenu: any;
    setOpenSubMenu: any;
}

const HeaderInsideMenu:React.FC<Props> = ({subheaderIndex, insideSubMenu, headerMenu, setOpenSubMenu}) => {
  return (
    <div className={`${subheaderIndex === subheaderIndex ? "block" : "hidden"} col-span-10 grid grid-cols-8`}>
        <div className={`col-span-6 ${insideSubMenu?.subheaders?.length > 6 ? " grid grid-cols-2" : ""}`}>
          {insideSubMenu?.subheaders?.map((subHeaderLinks: any) =>
            <Link
              href={`${headerMenu?.path}/${subHeaderLinks?.slug}`}
              key={subHeaderLinks?.id}
              onClick={() => setOpenSubMenu(undefined)}
              className={`grid grid-cols-7 gap-3 hover:bg-bullt-quinary/[0.2] px-4 py-2 mx-3 rounded-lg ${insideSubMenu?.subheaders?.length > 6 ? " " : "w-[50%] "}`}
            >
              <div className="relative h-[50px] col-span-2 my-auto">
                <Image
                  className="sm:rounded-[20%] rounded-[20%] object-contain"
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

        <HeaderUseCases 
            insideSubMenu = {insideSubMenu}
        />
          
      </div>
  )
}

export default HeaderInsideMenu;