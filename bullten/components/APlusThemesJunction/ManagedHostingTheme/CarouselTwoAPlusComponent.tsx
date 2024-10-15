"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import Image from "next/image";
import React from "react";

import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselTwoAPlusComponent: React.FC<Props> = ({ carouselData }) => {
  const [infinite, setInfinite] = useState<boolean>();

  useEffect(() => {
    if (carouselData?.content?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: infinite,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow:
      carouselData?.content?.length >= carouselData?.element_count
        ? carouselData?.element_count
          ? carouselData?.element_count
          : 1
        : carouselData?.content?.length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            carouselData?.content?.length >= carouselData?.element_count
              ? carouselData?.element_count < 2
                ? carouselData?.element_count
                  ? carouselData?.element_count
                  : 1
                : 2
              : carouselData?.content?.length < 2
              ? carouselData?.element_count
              : 2,
          slidesToScroll: 1,
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
  };
  return (
    <div
      className="container mx-auto w-full lg:py-8 px-2 lg:px-8"
      style={{
        marginTop: `${carouselData?.gap_top / 4}rem`,
        marginBottom: `${carouselData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="w-full flex flex-col justify-center p-4 sm:p-5">
        {/* <span className="text-lg text-bullt-quaternary font-medium text-center ">
          Use Cases
        </span> */}
        {carouselData?.heading ? (
          <>
            <div
              className="w-full py-2 text-center text-2xl sm:text-4xl font-bold tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: carouselData?.heading,
              }}
            />{" "}
          </>
        ) : null}

        {carouselData?.description ? (
          <div
            className="w-full text-center text-bullt-primary/[0.8] text-lg"
            dangerouslySetInnerHTML={{ __html: carouselData?.description }}
          />
        ) : null}
      </div>
      <div className="h-full">
        <SliderFrame settings={settings} selector={undefined}>
          {carouselData?.content?.map((item: any, index: number) => (
            <div className="px-2" key={index}>
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white hover:border-b-bullt-quaternary hover:border-b-4 hover:shadow-lg shadow-sm mb-3 border-[1px] border-b-4 border-b-white rounded-md overflow-hidden"
              >
                {item?.heading || item?.description ? (
                  <div
                    className="lg:h-[280px] min-h-[200px] p-2 flex flex-col justify-start items-start gap-3"
                    style={{
                      insetInlineStart: `${item?.banner_horizontal_position_value}%`,
                      top: `${item?.banner_vertical_position_value}%`,
                    }}
                  >
                    <div className="flex flex-col justify-center items-start w-full gap-2 px-4 ">
                      {item?.image && (
                        <div className=" flex items-start justify-start transition-transform duration-300 ease-in-out hover:scale-x-[-1] w-[80px] h-[80px]">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                            alt={item?.heading}
                            className=" rounded-md"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      <div className="lex flex-col justify-center items-start w-full">
                        {item?.heading && (
                          <div
                            className="w-full text-xl items-start font-normal tailwind-unreset py-2 "
                            dangerouslySetInnerHTML={{
                              __html: item?.heading,
                            }}
                          />
                        )}
                        {item?.description && (
                          <div
                            className="w-full tailwind-unreset text-md text-bullt-primary/[0.8] "
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </SliderFrame>
      </div>
    </div>
  );
};

export default CarouselTwoAPlusComponent;
