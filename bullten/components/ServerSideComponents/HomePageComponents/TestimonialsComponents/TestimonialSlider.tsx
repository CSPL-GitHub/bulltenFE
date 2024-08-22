"use client";
import React, { useEffect, useRef, useState } from "react";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import TestimonialsCard from "./TestimonialsCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";

type Review = {
  title: string;
  client_image: string;
  description: string;
  alt_text: string;
  name: string;
  role: string;
};

type TestimonialData = {
  title: string;
  description: string;
  active: boolean;
  reviews: Review[];
};

type Props = {
  TestimonialsContent: {
    result: {
      Active: boolean;
      data: TestimonialData;
    };
  };
};

const TestimonialSlider = ({ TestimonialsContent }: Props) => {
  console.log("TestimonialsContent", TestimonialsContent);
  const testimonialData = TestimonialsContent?.result?.data;
  const testimonials = testimonialData?.reviews || [];
  const [infinite, setInfinite] = useState<boolean>(true);

  useEffect(() => {
    if (testimonials.length <= 3) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, [testimonials.length]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const settings = {
    dots: infinite,
    infinite: infinite,
    autoplay: false,
    arrows: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: infinite,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: infinite,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: infinite,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      {TestimonialsContent?.result?.Active === true ? (
        <div className="rounded-md w-full bg-bullt-secondary/[0.01] py-10 border-0 shadow-sm">
          <MainHeadingComponent alignmentType={2}>
            {testimonialData?.title}
          </MainHeadingComponent>
          <ParaGraphText alignmentType={2}>
            {testimonialData?.description}
          </ParaGraphText>
          <div className="w-full container mx-auto sm:px-8 px-4">
            <SliderFrame settings={settings} selector={sliderRef}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <TestimonialsCard testimonial={testimonial} />
                </div>
              ))}
            </SliderFrame>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TestimonialSlider;
