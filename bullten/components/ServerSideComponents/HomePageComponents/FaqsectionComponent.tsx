import { FaqSectionApi } from "@/apis/HomePageApis";
import FaqQuestionComponent from "@/components/ClientSideComponents/HomePageComponents/FaqQuestionComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React, { useState } from "react";

const FaqSection = async () => {
  const FaqSection = await FaqSectionApi();
  const FaqSectionApiResponse = FaqSection?.result;
  return (
    <>
      {FaqSection?.result?.Active === true ? (
        <>
          <section className="w-full sm:py-12 py-4 my-3 sm:px-6 px-2 bg-bullt-quaternary/[0.03] rounded-md">
            <div className="sm:flex gap-5">
              <div className="sm:w-1/2 sm:px-8 px-4">
                {FaqSectionApiResponse?.data?.slogen ? (
                  <SloganHeadingComponent alignmentType={1} paddingTop={1}>
                    {FaqSectionApiResponse?.data?.slogen}
                  </SloganHeadingComponent>
                ) : null}
                {FaqSectionApiResponse?.data?.heading ? (
                  <MainHeadingComponent
                    alignmentType={1}
                    paddingTop={1}
                    hoverEffect="text-bullt-primary"
                  >
                    {FaqSectionApiResponse?.data?.heading}
                  </MainHeadingComponent>
                ) : null}
                {FaqSectionApiResponse?.data?.description ? (
                  <ParaGraphText paddingTop={1}>
                    {FaqSectionApiResponse?.data?.description}
                  </ParaGraphText>
                ) : null}

                {FaqSectionApiResponse?.data?.img ? (
                  <>
                    <div className="sm:h-[400px] h-[300px] w-full relative ">
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
