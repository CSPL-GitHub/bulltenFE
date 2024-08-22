import { FaqSectionApi } from "@/apis/HomePageApis";
import FaqQuestionComponent from "@/components/ClientSideComponents/HomePageComponents/FaqQuestionComponent";
import Image from "next/image";
import React, { useState } from "react";

const FaqSection = async () => {
  const FaqSection = await FaqSectionApi();
  const FaqSectionApiResponse = FaqSection?.result;
  console.log("FaqSectionApiResponse", FaqSectionApiResponse);
  return (
    <>
      {FaqSection?.result?.Active === true ? (
        <>
          <section className="bg-gray-50 py-16 sm:px-10 px-4">
            <div className="sm:flex gap-5">
              <div className="sm:w-1/2">
                {FaqSectionApiResponse?.data?.heading ? (
                  <>
                    <h1 className="sm:text-4xl text-2xl text-gray-600 font-bold mb-4">
                      {FaqSectionApiResponse?.data?.heading}
                    </h1>
                  </>
                ) : null}
                {FaqSectionApiResponse?.data?.description ? (
                  <>
                    <p className="text-gray-600">
                      {FaqSectionApiResponse?.data?.description}
                    </p>
                  </>
                ) : null}
                {FaqSectionApiResponse?.data?.img ? (
                  <>
                    <div className="sm:h-[450px] h-[300px] w-full relative ">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${FaqSectionApiResponse?.data.img}`}
                        alt={FaqSectionApiResponse?.data?.img_alt_text}
                        style={{
                          position: "absolute",
                          objectFit: "contain",
                          inset: 0,
                        }}
                        fill={true}
                        className="rounded-md"
                      />
                    </div>
                  </>
                ) : null}
              </div>
              <FaqQuestionComponent
                FaqSectionApiResponse={FaqSectionApiResponse?.data?.questions}
              />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default FaqSection;
