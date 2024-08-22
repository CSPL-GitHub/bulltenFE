import { WhyUsSectionApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import React from "react";

const WhyBulletinComponent = async () => {
  const WhyUsSection = await WhyUsSectionApi();
  const WhyUsSectionApiResponse = WhyUsSection?.result?.[0];

  return (
    <section className="flex flex-col sm:flex-row  shadow-md bg-white/[0.2] py-12 px-12 rounded-md ">
      <div className="relative w-full sm:w-1/2">
        <div className="h-[300px] lg:h-[400px] w-full relative ">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.img}`}
            alt={WhyUsSectionApiResponse?.img_alt_text}
            style={{
              position: "absolute",
              objectFit: "contain",
              inset: 0,
            }}
            fill={true}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="sm:w-1/2 w-full px-4">
        <div className="">
          <h2 className="text-bullt-text-quinary font-semibold">
            {WhyUsSectionApiResponse?.label}
          </h2>

          <MainHeadingComponent>
            {WhyUsSectionApiResponse?.heading}
          </MainHeadingComponent>

          <ParaGraphText>{WhyUsSectionApiResponse?.description} </ParaGraphText>

          <div className="grid grid-cols-2 gap-2 text-gray-700">
            {WhyUsSectionApiResponse?.Feature.map((data: any, index: any) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-bullt-tertiary text-lg font-semibold">
                  &#10003;
                </span>
                <BulletPointTextComponent>
                  {data?.name}
                </BulletPointTextComponent>
              </div>
            ))}
          </div>
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
  );
};

export default WhyBulletinComponent;
