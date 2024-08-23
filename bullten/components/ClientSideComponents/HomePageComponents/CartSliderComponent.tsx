"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";

type Props = { data: any };

const CartSliderComponent: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-7 sm:px-8 ">
      {data?.map((item: any, index: number) => (
        <div key={index} className="px-2 group py-2 ">
          <div className="bg-bullt-text-tertiary border-[1px] border-bullt-text-quaternary p-3 rounded-lg shadow-lg group-hover:bg-bullt-secondary transition-colors ease-in duration-100">
            {item?.heading ? (
              <SubHeadingComponents
                alignmentType={1}
                paddingTop={1}
                hoverEffect="text-bullt-secondary group-hover:text-bullt-primary transition-colors duration-300"
              >
                {item?.heading}
              </SubHeadingComponents>
            ) : null}
            {/* <p className="text-[#FFFFFF] sm:mt-2 group-hover:text-bullt-primary ">
              
            </p> */}
            {item?.description ? (
              <ParaGraphText
                paddingTop={1}
                hoverEffect="text-bullt-secondary group-hover:text-bullt-primary transition-colors duration-300 "
              >
                {item?.description}
              </ParaGraphText>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSliderComponent;
