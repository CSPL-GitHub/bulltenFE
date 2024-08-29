"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";

// Update the Props type to accept an array of items
type Props = {
  items: {
    heading: string;
    description: string;
    image: string;
  }[];
};

const HostingSolutionsCardSlider: React.FC<Props> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <div
            key={index}
            className="w-full px-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-[300px] overflow-hidden rounded-sm border-0 border-transparent hover:border hover:border-bullt-secondary/[0.1]">
              <div
                className={`relative w-full h-full transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                style={{
                  backgroundImage: `url(${`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`absolute inset-0 bg-bullt-quaternary transition-transform duration-300 transform ${
                    hoveredIndex === index
                      ? "translate-y-0"
                      : "translate-y-full"
                  }`}
                  style={{
                    clipPath:
                      hoveredIndex === index
                        ? "polygon(0 100%, 100% 100%, 0 0)"
                        : "polygon(0 100%, 0 100%, 0 100%)",
                  }}
                ></div>
                <div
                  className={`absolute bottom-10 left-6 text-white transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  } overflow-hidden`}
                >
                  <div className="w-8 h-8 rounded-full bg-bullt-tertiary flex  justify-center mb-4">
                    <span className="text-white font-bold text-lg">→</span>
                  </div>
                  <p className="text-md font-bold mb-2 w-1/3 text-wrap">
                    {item.heading}
                  </p>
                  <p className="text-sm">{item.description}</p>
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
