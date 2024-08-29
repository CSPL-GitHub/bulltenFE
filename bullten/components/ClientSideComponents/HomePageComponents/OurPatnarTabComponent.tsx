"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

type Props = {
  data: any;
};

const OurPatnarTabComponent: React.FC<Props> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(data.tab_one);

  return (
    <div className="sm:px-4">
      <div className="">
        {/* <nav className="flex gap-5 py-2 justify-center">
          <button
            className={`relative text-sm font-medium py-1 px-4 rounded-md transition-all duration-200 ${activeTab === data.tab_one
              ? "bg-bullt-tertiary text-white shadow-md "
              : "text-black hover:bg-blue-50"
              }`}
            onClick={() => setActiveTab(data.tab_one)}
          >
            {data.tab_one}
            {activeTab === data.tab_one && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-bullt-tertiary rotate-45"></span>
            )}
          </button>
          <button
            className={`relative text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 ${activeTab === data.tab_two
              ? "bg-bullt-tertiary text-white shadow-md scale-105"
              : "text-black bg-blue-50"
              }`}
            onClick={() => setActiveTab(data.tab_two)}
          >
            {data.tab_two}
            {activeTab === data.tab_two && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-bullt-tertiary rotate-45"></span>
            )}
          </button>
        </nav> */}

        <div className="sm:py-6 py-1">
          <Slider {...settings}>
            {data?.operating_systems?.map((item: any, index: any) => (
              <div
                key={index}
                className="text-center hover:bg-[#F4F5F8] w-[140px] grayscale hover:grayscale-0 transition-all duration-100 ease-in-out py-2"
              >
                {item.img ? (
                  <div className="sm:h-[140px] h-[100px] lg:w-[270px] w-[120px] relative mx-auto">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                      alt="all"
                      className=""
                      style={{
                        position: "absolute",
                        objectFit: "contain",
                        inset: 0,
                      }}
                      fill={true}
                    />
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.heading}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurPatnarTabComponent;
