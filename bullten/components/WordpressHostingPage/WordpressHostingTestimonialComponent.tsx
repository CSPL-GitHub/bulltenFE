"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

type Testimonial = {
  image: string;
  name: string;
  designation: string;
  description: string;
};

type Props = {
  TestimonialsData: {
    heading?: string;
    testimonials: Testimonial[];
  };
};

export default function WordpressHostingTestimonialComponent({
  TestimonialsData,
}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
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

  if (!TestimonialsData || TestimonialsData.testimonials.length === 0) {
    return null;
  }

  return (
    <div className="px-4 lg:py-8 py-6 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {TestimonialsData.heading && (
          <h2 className="lg:text-4xl text-2xl font-bold text-center lg:mb-12 mb-4 text-primary">
            {TestimonialsData.heading}
          </h2>
        )}

        <Slider {...settings} className="testimonial-slider">
          {TestimonialsData.testimonials.map(
            (testimonial: Testimonial, index: number) => (
              <div key={index} className="px-4 pb-12">
                <div className="rounded-lg lg:h-[300px] h-[250px] bg-bullt-text-primary/[0.08] p-6 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="mb-7.5 flex justify-between border-b pb-6">
                    <div>
                      {testimonial.name && (
                        <h3 className="mb-1.5 text-black font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                      )}
                      {testimonial.designation && (
                        <p className="text-gray-600 font-medium text-base">
                          {testimonial.designation}
                        </p>
                      )}
                    </div>

                    {testimonial.image && (
                      <div className="relative w-[60px] h-[60px]">
                        <Image
                          fill
                          className="rounded-full object-cover"
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial.image}`}
                          alt={testimonial.name || "Testimonial"}
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                    )}
                  </div>
                  {testimonial.description && (
                    <p className="text-base font-normal text-bullt-primary">
                      {testimonial.description}
                    </p>
                  )}
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
