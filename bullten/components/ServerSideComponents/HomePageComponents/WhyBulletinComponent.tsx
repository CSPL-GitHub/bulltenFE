import { WhyUsSectionApi } from "@/apis/HomePageApis";
import SearchSection from "@/components/ClientSideComponents/HomePageComponents/SearchSection";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";

const WhyBulletinComponent = async () => {
  const WhyUsSection = await WhyUsSectionApi();
  const WhyUsSectionApiResponse = WhyUsSection?.result;
  return (
    <>
      {WhyUsSectionApiResponse?.Active === true ? (
        <div className="mx-auto px-4 bg-scroll bg-contain bg-right bg-[url('/ab-left-bg.jpg')]">
          <div className="relative flex justify-center items-center w-full">
            <div className="w-full">
              <img
                src={
                  "https://wp2022.kodesolution.com/oitech/wp-content/uploads/2024/01/divider9.jpg"
                }
                alt="Virtual Reality"
                // layout="fill"
                // objectFit="cover"
                className="rounded-l-lg"
              />
            </div>

            <div className="absolute right-0 bg-bullt-secondary p-8 rounded-lg  shadow-lg max-w-3xl">
              <div className="">
                {WhyUsSectionApiResponse?.data?.label ? (
                  <>
                    <SloganHeadingComponent
                      alignmentType={1}
                      paddingTop={1}
                      hoverEffect="text-bullt-primary"
                    >
                      {WhyUsSectionApiResponse?.data?.label}
                    </SloganHeadingComponent>
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
                    <div className="sm:grid sm:grid-cols-2 gap-1 py-3">
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WhyBulletinComponent;
