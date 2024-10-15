"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Don't forget to import the CSS in your global stylesheet or page:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  SliderContent: any;
};

function SampleNextArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
      onClick={onClick}
    >
      <FaChevronRight className="h-4 w-4 text-gray-800" />
    </button>
  );
}

function SamplePrevArrow(props: { onClick: any }) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
      onClick={onClick}
    >
      <FaChevronLeft className="h-4 w-4 text-gray-800" />
    </button>
  );
}

const ImageSliderComponent = ({ SliderContent }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current: any, next: any) => setImageIndex(next),
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />,
    appendDots: (dots: any) => (
      <div>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`w-2 h-2 rounded-full ${
          i === imageIndex ? "bg-blue-600" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div className="max-w-7xl mx-auto lg:py-16 py-6">
      <div>
        {SliderContent?.banner_data[0]?.heading && (
          <h1 className="text-2xl text-center lg:text-4xl font-bold text-gray-800 animate-fade-in-up">
            {SliderContent?.banner_data[0]?.heading}
          </h1>
        )}
      </div>
      <div className="flex flex-col lg:flex-row md:gap-0 gap-8">
        <div className="lg:w-1/2 p-4">
          <Slider {...settings} className="h-full">
            {SliderContent?.banner_data[0]?.banner?.map(
              (src: any, index: number) => (
                <div
                  key={index}
                  className="relative md:h-[400px] h-[300px] md:w-[400px] w-[300px]"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${src?.img}`}
                    alt={src?.img_text}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg "
                    priority={index === 0}
                  />
                </div>
              )
            )}
          </Slider>
        </div>
        <div className="lg:w-1/2 p-4 flex flex-col justify-center">
          {SliderContent?.banner_data[0]?.description && (
            <h1 className="text-2xl md:text-left text-center lg:text-4xl font-bold mb-6 text-gray-800 animate-fade-in-up">
              {SliderContent?.banner_data[0]?.description}
            </h1>
          )}

          {SliderContent?.fingertips[0]?.fingertips_data.map(
            (text: any, index: number) => (
              <div key={index} className="flex flex-col gap-3">
                {text?.description && (
                  <p className="text-lg mb-6 text-gray-600 animate-fade-in-up animation-delay-300">
                    {text?.description}
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default ImageSliderComponent;
