"use client";

import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";

// Update the Props type to accept an array of items
type Props = {
  items: {
    heading: string;
    description: string;
  }[];
};

const HostingSolutionsCardSlider: React.FC<Props> = ({ items }) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute sm:bottom-[22px] -bottom-12 sm:-left-[50%] left-[55%] flex justify-end items-center cursor-pointer rounded-full  p-2"
        onClick={onClick}
      >
        <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
          <AiOutlineArrowRight className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
        </p>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute sm:bottom-[22px] -bottom-12 sm:-left-[60%] right-[55%] flex justify-start items-center cursor-pointer rounded-full p-2 sm:z-0 z-10"
        onClick={onClick}
      >
        <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
          <AiOutlineArrowLeft className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
        </p>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="w-full">
      <Slider {...settings}>
        {items.map((server, index) => (
          <div className="w-full px-2">
            <div
              key={index}
              className="relative overflow-hidden w-full h-[400px] rounded-md cursor-pointer text-2xl font-bold bg-scroll bg-cover bg-blur bg-center bg-no-repeat bg-[url('/01.jpg')] peer"
            >
              <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
              <div className="z-10 absolute w-full h-full peer"></div>
              <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-bullt-tertiary transition-all duration-500"></div>
              <div className="absolute px-6 flex flex-col text-xl text-center peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-10 rounded-full bg-bullt-tertiary transition-all duration-500">
                <SubHeadingComponents
                  alignmentType={1}
                  paddingTop={3}
                  hoverEffect="text-bullt-secondary text-center"
                >
                  {server.heading}
                </SubHeadingComponents>
                <ParaGraphText
                  paddingTop={1}
                  hoverEffect="text-bullt-secondary/[0.8]"
                >
                  {server.description}
                </ParaGraphText>
              </div>

              {/* Main heading */}
              <div className="w-full h-full items-center justify-center flex uppercase relative peer-hover:hidden">
                <MainHeadingComponent
                  alignmentType={1}
                  paddingTop={3}
                  hoverEffect="text-bullt-secondary text-center text-[2rem] lg:text-[1.7rem]"
                >
                  {server.heading}
                </MainHeadingComponent>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HostingSolutionsCardSlider;
