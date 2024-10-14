"use client";
import React from "react";
import Image from "next/image";
import SliderFrame from "../ClientSideComponents/SliderComponents/SliderFrame";

type Testimonial = {
  image: string;
  Name: string;
  designation: string;
  description: string;
};

type Props = {
  TestimonialsData: any;
};

export default function ClientsReviewComponent({ TestimonialsData }: Props) {
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
        {TestimonialsData?.heading ? (
          <h2 className="lg:text-4xl text-2xl font-bold text-center lg:mb-12 mb-4 text-primary">
            {TestimonialsData?.heading}
          </h2>
        ) : null}

        {TestimonialsData?.testimonials?.length > 0 ? (
          <SliderFrame {...settings} settings={settings} selector={undefined}>
            {TestimonialsData?.testimonials?.map(
              (testimonial: Testimonial, index: number) => (
                <div key={index} className="px-4 pb-12">
                  <div
                    key={index}
                    className="lg:max-h-[250px] h-[300px] min-h-[250px] rounded-lg bg-bullt-text-primary/[0.08] p-6 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="mb-7.5 flex justify-between border-b pb-6 ">
                      <div>
                        {testimonial?.Name ? (
                          <h3 className="mb-1.5  text-black font-semibold text-lg">
                            {testimonial?.Name}
                          </h3>
                        ) : null}
                        {testimonial?.designation ? (
                          <p className="text-gray-600 font-medium text-base">
                            {testimonial?.designation}
                          </p>
                        ) : null}
                      </div>

                      {testimonial?.image ? (
                        <Image
                          width={60}
                          height={50}
                          className="rounded-full "
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.image}`}
                          alt={testimonial?.Name}
                        />
                      ) : null}
                    </div>
                    {testimonial?.description ? (
                      <p className="text-base font-normal text-bullt-primary pt-4">
                        {testimonial?.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              )
            )}
          </SliderFrame>
        ) : null}
      </div>
    </div>
  );
}
