"use client";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}

const CarouselComponentAPlusTwo: React.FC<Props> = ({ carouselData }) => {
  return (
    <>
      {carouselData?.content?.length > 0 && (
        <div
          className="container pt-8 mx-auto w-full px-2 lg:px-8"
          style={{
            marginTop: `${carouselData?.gap_top / 4}rem`,
            marginBottom: `${carouselData?.gap_bottom / 4}rem`,
          }}
        >
          <div className="flex flex-col gap-2 px-4">
            <div
              className="text-center text-2xl mt-2 text-bullt-secondary lg:text-4xl font-bold tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.heading),
              }}
            />
            <div
              className="text-center text-lg text-bullt-secondary py-2 mb-3 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(carouselData?.description),
              }}
            />
          </div>
          <div className="container mx-auto pt-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-5 px-4">
              {carouselData?.content?.map((plan: any, index: any) => (
                <div
                  key={index}
                  className="relative bg-[#1c1c28] border-[#323233] border-[2px] rounded-lg shadow-lg duration-300 rounded-br-lg mb-10 p-2"
                >
                  <div className="px-3">
                    {plan?.image ? (
                      <>
                        <div className="relative w-full z-10 -mt-10 h-[300px] bg-gray-900 rounded-t-lg overflow-hidden shadow-md">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${plan?.image}`}
                            alt={plan?.heading}
                            style={{
                              position: "absolute",
                              objectFit: "cover",
                              inset: 0,
                            }}
                            fill={true}
                            className="rounded-md h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      </>
                    ) : null}

                    {plan?.heading || plan?.description ? (
                      <div className="h-auto bg-opacity-60 py-4 flex flex-col justify-center items-start">
                        <div
                          className="w-full flex flex-col items-start text-bullt-tertiary mb-1 tailwind-unreset text-2xl font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(plan?.heading),
                          }}
                        />
                        <div
                          className="w-full text-justify tailwind-unreset text-md text-bullt-secondary  line-clamp-3"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(plan?.description),
                          }}
                        />
                        {/* {plan?.button_text && plan?.button_link && (
                                                    <div className="mt-3 rounded font-normal">
                                                        <Link href={plan?.button_link}>
                                                            <input
                                                                className="cursor-pointer text-xl border-[1px] inline-block w-full px-5 py-2 bg-bullt-tertiary text-bullt-secondary hover:bg-bullt-secondary hover:text-bullt-tertiary rounded-md transition-colors duration-300"
                                                                type="button"
                                                                value={plan?.button_text}
                                                            />
                                                        </Link>
                                                    </div>
                                                )} */}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselComponentAPlusTwo;
