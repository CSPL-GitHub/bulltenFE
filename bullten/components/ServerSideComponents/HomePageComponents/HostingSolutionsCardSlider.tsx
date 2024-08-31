"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";

// Update the Props type to accept an array of items
type Props = {
  items: {
    heading: string;
    description: string;
    image: string;
  }[];
};

const HostingSolutionsCardSlider: React.FC<Props> = ({ items }) => {
  // const NextArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="absolute top-1/2 right-1 transform -translate-y-1/2 flex justify-center items-center cursor-pointer rounded-full p-2 z-10"
  //       onClick={onClick}
  //     >
  //       <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
  //         <AiOutlineArrowRight className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
  //       </p>
  //     </div>
  //   );
  // };

  // const PrevArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="absolute top-1/2 left-1 transform -translate-y-1/2 flex justify-center items-center cursor-pointer rounded-full p-2 z-10"
  //       onClick={onClick}
  //     >
  //       <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
  //         <AiOutlineArrowLeft className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
  //       </p>
  //     </div>
  //   );
  // };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-3">
            <div className="relative rounded-lg w-full min-h-[550px] shadow-md cursor-pointer bg-bullt-quaternary/[0.04] flex flex-col items-start hover:shadow-lg">
              {item.image ? (
                <div className="h-[300px] w-full relative overflow-hidden mb-4 rounded-t-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                    alt="all"
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    className="transition-transform duration-500 hover:scale-110"
                    fill={true}
                  />
                </div>
              ) : null}
              <div className="w-full flex flex-col gap-2 px-4 text-black">
                <SubHeadingComponents
                  alignmentType={2}
                  paddingTop={1}
                  hoverEffect="tracking-wide h-12 text-center"
                >
                  {item.heading}
                </SubHeadingComponents>
                <p className="line-clamp-3 lg:line-clamp-3 text-lg text-center ">
                  {item.description}
                </p>

                {/* <ParaGraphText hoverEffect="line-clamp-3 text-lg text-center ">
                  {item.description}
                </ParaGraphText> */}

                <div className="mt-4">
                  <HomePageButtonOne
                    alignmentType={2}
                    buttonText={"Know More"}
                    route={"/#"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HostingSolutionsCardSlider;
