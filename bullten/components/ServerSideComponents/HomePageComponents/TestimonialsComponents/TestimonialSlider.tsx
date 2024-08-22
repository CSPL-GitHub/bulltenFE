"use client";
import React, { useEffect, useRef, useState } from "react";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import TestimonialsCard from "./TestimonialsCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      rating: "Trustpilot",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
    {
      id: 2,
      rating: "Google",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
    {
      id: 3,
      rating: "Trustpilot",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
    {
      id: 1,
      rating: "Trustpilot",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
    {
      id: 2,
      rating: "Google",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
    {
      id: 3,
      rating: "Trustpilot",
      text: "Needless to say we are extremely satisfied. If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work with many well-known brands.",
      name: "Carrie Roberts",
      role: "Co-Founder",
      image: "/path/to/image.jpg",
    },
  ];
  console.log(testimonials, "weyuirywruiefh");
  const [infinite, setInfinite] = useState<boolean>(true);

  useEffect(() => {
    if (testimonials?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, []);

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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="rounded-md w-full bg-bullt-secondary/[0.01] py-10 border-0 shadow-sm">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {" "}
        We love our Customers & They love us too
      </h2>
      <div className="w-full container mx-auto sm:px-8 px-4">
        <SliderFrame settings={settings} selector={sliderRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <TestimonialsCard testimonial={testimonial} />
            </div>
          ))}
        </SliderFrame>
      </div>
    </div>
  );
};

export default TestimonialSlider;
