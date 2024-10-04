"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

type Props = {
  TestimonialsData: any;
};

export default function SeoToolsTestimonialsComponent({
  TestimonialsData,
}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i: any) => (
      <div className="w-2 h-2 bg-bullt-primary rounded-full mx-1 mt-4" />
    ),
  };

  return (
    <div className="px-4 py-16 bg-gradient-to-br from-bullt-primary/5 to-bullt-secondary/5 ">
      <div className="max-w-7xl mx-auto rounded-3xl">
        <h2 className="lg:text-4xl text-2xl font-bold text-center mb-8 text-bullt-primary">
          {TestimonialsData[0]?.testimonial[0].heading}
        </h2>
        <Slider {...settings}>
          {TestimonialsData[0]?.testimonial[0]?.testimonial_data?.map(
            (testimonial: any) => (
              <div className="px-4">
                <div className="bg-white rounded-lg shadow-sm border-gray-100 border-[1px] p-8 relative  lg:h-[300px] h-[400px] flex flex-col justify-between">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.img}`}
                        alt={testimonial.name}
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-gray-600 text-lg mt-8 mb-4">
                    {testimonial.description}
                  </div>
                  <div>
                    <div className="font-bold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
