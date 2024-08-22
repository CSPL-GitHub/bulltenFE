"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = { data: any };

const CartSliderComponent: React.FC<Props> = ({ data }) => {
  console.log("datafile", data);

  return (
    <div className="py-7 sm:px-12 ">
      {data?.map((item: any, index: number) => (
        <div key={index} className="px-2 group py-2 ">
          <div className="bg-bullt-quinary border-[1px] border-bullt-quinary p-4 rounded-lg shadow-lg group-hover:bg-bullt-secondary ease-in duration-100">
            <h1 className="text-[#FFFFFF] font-semibold text-2xl group-hover:text-bullt-primary ">
              {item?.heading}
            </h1>
            <p className="text-[#FFFFFF] sm:mt-2 group-hover:text-bullt-primary ">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSliderComponent;
