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
  console.log("WhyUsSectionApiResponse", WhyUsSectionApiResponse);

  return (
    <>
      {WhyUsSectionApiResponse?.Active === true ? (
        <section className="flex flex-col lg:flex-row bg-bullt-secondary gap-6 py-6 my-4  px-6 w-full rounded-md">
          <div className="relative w-full lg:w-1/2">
            {WhyUsSectionApiResponse?.data?.img ? (
              <>
                <div className="h-[300px] lg:h-[400px] w-full relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.data?.img}`}
                    alt={WhyUsSectionApiResponse?.data?.img_alt_text}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    fill={true}
                    className="rounded-lg"
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="lg:w-1/2 w-full px-4">
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
                  <MainHeadingComponent alignmentType={1} paddingTop={1}>
                    {WhyUsSectionApiResponse?.data?.heading}
                  </MainHeadingComponent>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.description ? (
                <>
                  <ParaGraphText paddingTop={1}>
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
                          <BulletPointTextComponent paddingTop={1}>
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
