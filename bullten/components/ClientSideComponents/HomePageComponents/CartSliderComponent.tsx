"use client";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = { data: any };

const CartSliderComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="">
      {data?.map((item: any, index: number) => (
        <div key={index} className="px-2 py-2 flex flex-col gap-8">
          <div className="shadow-md bg-bullt-quaternary/[0.04] text-black border-[1px] border-white/10 rounded-lg p-4 group transition hover:bg-white hover:text-black hover:border-purple-500">
            <div className="flex justify-between items-center"></div>

            <SubHeadingComponents alignmentType={1} paddingTop={3}>
              {item?.heading}
            </SubHeadingComponents>
            <ParaGraphText paddingTop={1}> {item?.description}</ParaGraphText>
            {/* <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-white/50 group-hover:text-black">
                {item?.date}
              </span>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSliderComponent;
