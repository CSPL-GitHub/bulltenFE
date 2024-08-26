"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = { data: any };

const CartSliderComponent: React.FC<Props> = ({ data }) => {
   return (
    <div className="py-7 px-2 lg:px-6">
      {data?.map((item: any, index: number) => (
        <div key={index} className="px-2 py-2">
          <div className="bg-white text-black border-[1px] border-white/10 rounded-lg p-4 group transition hover:bg-white hover:text-black hover:border-purple-500">
            <div className="flex justify-between items-center">
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-">
              {item?.heading}
            </h3>
            <p className="text-sm text-black group-hover:text-black">
              {item?.description}
            </p>
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
