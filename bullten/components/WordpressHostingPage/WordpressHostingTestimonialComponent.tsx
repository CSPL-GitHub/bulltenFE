"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// import { Star } from "lucide-react";
const TestimonialsData = [
  {
    testimonial: [
      {
        heading: "What Our Customers Say",
        testimonial_data: [
          {
            img: "/images/testimonials/customer1.jpg",
            name: "John Doe",
            position: "CEO, ExampleCorp",
            description:
              "The services provided by Hostcity have been excellent. I couldn’t be happier with the level of support and performance they offer.",
          },
          {
            img: "/images/testimonials/customer2.jpg",
            name: "Jane Smith",
            position: "CTO, TechWorld",
            description:
              "Hostcity's solutions are exactly what our company needed to scale quickly. Their customer service is always responsive and helpful.",
          },
          {
            img: "/images/testimonials/customer3.jpg",
            name: "Mike Brown",
            position: "Founder, Startup Inc.",
            description:
              "We’ve tried other hosting solutions before, but Hostcity stands out for its reliability and fantastic customer service.",
          },
          {
            img: "/images/testimonials/customer4.jpg",
            name: "Sarah Johnson",
            position: "Marketing Head, MarketBoost",
            description:
              "I highly recommend Hostcity for anyone who wants a fast, reliable, and easy-to-use hosting platform.",
          },
        ],
      },
    ],
  },
];

type Testimonial = {
  img: string;
  name: string;
  position: string;
  description: string;
};

type Props = {
  TestimonialsData: {
    testimonial: {
      heading: string;
      testimonial_data: Testimonial[];
    }[];
  }[];
};

export default function WordpressHostingTestimonialComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    customPaging: () => (
      <div className="w-3 h-3 bg-bullt-primary rounded-full mx-1 mt-1 transition-all duration-300 hover:bg-bullt-primary" />
    ),
  };

  return (
    <div className="px-4 lg:py-16 py-6 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="lg:text-4xl text-2xl font-bold text-center lg:mb-12 mb-4 text-primary">
          {TestimonialsData[0]?.testimonial[0].heading}
        </h2>
        <Slider {...settings} className="testimonial-slider">
          {TestimonialsData[0]?.testimonial[0]?.testimonial_data?.map(
            (testimonial: Testimonial, index: number) => (
              <div key={index} className="px-4 pb-12">
                <div className="bg-bullt-text-primary/[0.08] rounded-md lg:h-[300px] h-[350px] shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 mr-4">
                        <Image
                          //   src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial.img}`}
                          src={testimonial.img}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 text-lg mb-6 italic">
                      &ldquo;{testimonial.description}&rdquo;
                    </div>
                    {/* <div className="flex justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div> */}
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
