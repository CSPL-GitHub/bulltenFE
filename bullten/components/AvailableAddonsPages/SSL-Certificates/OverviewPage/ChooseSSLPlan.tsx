"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = { DataContent: any };

const ChooseSSLPlan = ({ DataContent }: Props) => {
  console.log("ChooseSSLPlan", DataContent?.box_data[0]?.Box.heading);
  const [infinite, setInfinite] = useState<boolean>();

  const settings = {
    dots: true,
    infinite: infinite,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
  };
  return (
    <div className="container mx-auto lg:py-16 py-8 lg:px-0 px-4">
      <div className="max-w-7xl mx-auto ">
        <div>
          {DataContent?.box_data[0]?.Box?.heading ? (
            <div
              className="w-full text-center text-3xl md:text-4xl font-bold"
              dangerouslySetInnerHTML={{
                __html: DataContent?.box_data[0]?.Box?.heading,
              }}
            />
          ) : null}
          {DataContent?.box_data[0]?.Box?.description ? (
            <div
              className="w-full text-center text-bullt-primary/[0.8] text-lg "
              dangerouslySetInnerHTML={{
                __html: DataContent?.box_data[0]?.Box?.description,
              }}
            />
          ) : null}
        </div>
        <SliderFrame settings={settings} selector={undefined}>
          {DataContent?.box_data[0]?.Box_data?.map(
            (data: any, index: number) => (
              <>
                <div className="relative group cursor-pointer group overflow-hidden  text-gray-50  hover:duration-700 duration-700 mx-3 py-4">
                  <div className="flex flex-row justify-between rounded-2xl ">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.img}`}
                      alt={data?.heading}
                      className="w-full md:h-[400px] h-[300px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="relative md:absolute bg-gray-50 md:-bottom-24 p-6 md:h-60 flex flex-col gap-3 md:group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    {data?.heading ? (
                      <div
                        className="text-xl font-bold text-gray-800"
                        dangerouslySetInnerHTML={{ __html: data?.heading }}
                      />
                    ) : null}
                    {data?.description ? (
                      <div
                        className="text-md text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: data?.description,
                        }}
                      />
                    ) : null}

                    <div className="lg:w-[50%]">
                      {data?.button_text && data?.button_link ? (
                        <div className="rounded font-medium">
                          <Link href={data?.button_link}>
                            <p className="inline-block w-full text-center px-6 py-3 bg-bullt-tertiary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                              {data?.button_text}
                            </p>
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* <div
                key={index}
                className="w-full h-auto flex flex-col item-center justify-center relative py-4"
              >
                <div
                  key={index}
                  className="relative flex flex-col rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl  mx-4"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.img}`}
                      alt={data?.heading}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    {data?.heading ? (
                      <h3
                        className="text-2xl font-bold text-gray-800"
                        dangerouslySetInnerHTML={{ __html: data?.heading }}
                      />
                    ) : null}
                    {data?.description ? (
                      <p
                        className="text-lg text-gray-600 mt-2 line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: data?.description,
                        }}
                      />
                    ) : null}
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    {data?.button_text && data?.button_link ? (
                      <div className="rounded font-medium">
                        <Link href={data?.button_link}>
                          <p className="inline-block w-full text-center px-6 py-3 bg-bullt-tertiary  text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            {data?.button_text}
                          </p>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div> */}
              </>
            )
          )}
        </SliderFrame>
      </div>
    </div>
  );
};

export default ChooseSSLPlan;
