"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FooterMobileMenu = ({ Menus }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {Menus?.map((menu: any, index: number) => (
        <div key={index} className="w-full">
          <div
            className="w-full flex justify-between item-center py-2 "
            onClick={() => toggleAccordion(index)}
          >
            <h5 className="font-bold text-lg  text-bullt-secondary cursor-pointer">
              {menu?.menuHeading}
            </h5>
            <FaAngleDown size={25} className="text-bullt-secondary" />
          </div>
          {openIndex === index && (
            <div className="flex flex-col gap-4">
              {menu?.menuPages?.map((menus: any, pageIndex: number) => (
                <Link href={menus?.path} key={pageIndex}>
                  <h6 className="py-2 px-2 text-base lg:text-sm font-normal text-bullt-secondary hover:font-bold hover:text-gray-400">
                    {menus?.title}
                  </h6>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FooterMobileMenu;
