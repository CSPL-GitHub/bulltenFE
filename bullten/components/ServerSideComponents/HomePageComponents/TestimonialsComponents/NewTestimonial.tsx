"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubParaGraph from "@/components/CommonComponents/HeadingComponents/SubParaGraph";
import Image from "next/image";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import { SiComma } from "react-icons/si";

export default function TestimonialsSection({
  TestimonialsContent,
}: {
  TestimonialsContent: any;
}) {
  const testimonials = TestimonialsContent?.data?.reviews;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current: number) => {
      setSelectedIndex(current);
    },
  };

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    sliderRef?.current?.slickGoTo(index);
  };

  const sliderRef = React.useRef<Slider>(null);

  return (
    <section className="w-full bg-blue-50 rounded-lg sm:px-0 px-2">
      <div className="w-full mx-auto sm:p-16 lg:px-48 p-2 sm:py-10 py-8 sm:my-10 my-6 rounded-lg ">
        {/* Header Section */}
        <div className="sm:-mb-[200px] mb-0">
          <div className="text-left mb-8 sm:w-[50%] w-full ">
            <SloganHeadingComponent paddingTop={1} alignmentType={1}>
              {TestimonialsContent?.data?.slogen}
            </SloganHeadingComponent>
            <MainHeadingComponent paddingTop={1} alignmentType={1}>
              {TestimonialsContent?.data?.title}
            </MainHeadingComponent>
          </div>

          {/* Testimonial Section */}
          <div className="flex flex-row text-bullt-quaternary text-2xl">
            <SiComma />
            <SiComma />
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {testimonials?.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="relative flex sm:flex-row flex-col items-end justify-between"
            >
              <div className="flex sm:flex-row flex-col sm:items-end items-center justify-start sm:justify-between gap-2">
                <div className="sm:w-[40%] w-full">
                  <ParaGraphText paddingTop={3} alignmentType={1}>
                    {testimonial?.description}
                  </ParaGraphText>
                  <SloganHeadingComponent paddingTop={3} alignmentType={1}>
                    {testimonial?.name}
                  </SloganHeadingComponent>
                  <SubParaGraph paddingTop={1} alignmentType={1}>
                    {testimonial?.role}
                  </SubParaGraph>
                </div>

                <div className="relative">
                  <div className="relative sm:w-[400px] sm:h-[400px] w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg border-[6px] border-bullt-quaternary">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.client_image}`}
                      alt={testimonial?.alt_text || testimonial?.name}
                      className="w-full h-full object-cover"
                      fill={true}
                    />
                  </div>
                  {testimonials?.[0]?.client_image && (
                    <div
                      className={`absolute rounded-full sm:w-[100px] w-[50px] sm:h-[100px] h-[50px] sm:top-[10px] top-[5px] overflow-hidden border-4 border-white cursor-pointer ${
                        selectedIndex === 0 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(0)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[0]?.client_image}`}
                        alt={
                          testimonials?.[0]?.alt_text || testimonials?.[0]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  {testimonials?.[1]?.client_image && (
                    <div
                      className={`absolute rounded-full sm:w-[100px] w-[50px] sm:h-[100px] h-[50px] sm:top-[150px] top-[65px] sm:-left-[50px] -left-[30px] overflow-hidden border-4 border-white cursor-pointer ${
                        selectedIndex === 1 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(1)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[1]?.client_image}`}
                        alt={
                          testimonials?.[1]?.alt_text || testimonials?.[1]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  {testimonials?.[2]?.client_image && (
                    <div
                      className={`absolute rounded-full overflow-hidden border-4 sm:w-[100px] w-[50px] sm:h-[100px] h-[50px] sm:top-[280px] top-[120px] sm:left-[10px] -left-[15px]  border-white cursor-pointer ${
                        selectedIndex === 2 ? "border-yellow-500" : ""
                      }`}
                      onClick={() => handleImageClick(2)}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonials?.[2]?.client_image}`}
                        alt={
                          testimonials?.[2]?.alt_text || testimonials?.[2]?.name
                        }
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
