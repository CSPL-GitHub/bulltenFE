import { WhyUsSectionApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import React from "react";

const WhyBulletinComponent = async () => {
  const WhyUsSection = await WhyUsSectionApi();
  const WhyUsSectionApiResponse = WhyUsSection?.result;
  console.log("WhyUsSectionApiResponse?.data", WhyUsSectionApiResponse);

  return (
    <>
      {WhyUsSectionApiResponse?.active === true ? (
        <section className="flex flex-col sm:flex-row shadow-md bg-bullt-background py-12 sm:px-12 px-3 rounded-md ">
          <div className="relative w-full sm:w-1/2">
            <div className="h-[300px] lg:h-[400px] w-full relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.data?.img}`}
                alt={WhyUsSectionApiResponse?.data?.img_alt_text}
                style={{
                  position: "absolute",
                  objectFit: "contain",
                  inset: 0,
                }}
                fill={true}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="sm:w-1/2 w-full px-4">
            <div className="">
              {WhyUsSectionApiResponse?.data?.label ? (
                <>
                  <h2 className="text-bullt-text-quinary font-semibold">
                    {WhyUsSectionApiResponse?.data?.label}
                  </h2>
                </>
              ) : null}

              {WhyUsSectionApiResponse?.data?.heading ? (
                <>
                  <MainHeadingComponent>
                    {WhyUsSectionApiResponse?.data?.heading}
                  </MainHeadingComponent>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.description ? (
                <>
                  <ParaGraphText>
                    {WhyUsSectionApiResponse?.data?.description}
                  </ParaGraphText>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.Feature?.length > 0 ? (
                <>
                  <div className="sm:grid sm:grid-cols-2 gap-2 text-gray-700">
                    {WhyUsSectionApiResponse?.data?.Feature?.map(
                      (data: any, index: any) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-bullt-tertiary text-xl font-semibold text-center">
                            &#10003;
                          </span>
                          <BulletPointTextComponent>
                            {data?.name}
                          </BulletPointTextComponent>
                        </div>
                      )
                    )}
                  </div>
                </>
              ) : null}
            </div>
            <div className="mt-4">
              <HomePageButtonOne
                alignmentType={1}
                buttonText={"Explore More"}
                route={"/services"}
              />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default WhyBulletinComponent;
