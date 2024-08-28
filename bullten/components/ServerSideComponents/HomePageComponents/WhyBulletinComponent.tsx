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
        <>
          <div className="container mx-auto relative py-12">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="relative">
                  <div className="aspect-w-3 aspect-h-4 lg:aspect-none">
                    <img
                      src="https://wp2022.kodesolution.com/oitech/wp-content/uploads/2024/01/divider9.jpg"
                      alt="Team Working"
                      // layout="fill"
                      // objectFit="cover"
                      className="rounded-l-lg shadow-lg"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 transform translate-x-8 translate-y-8 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <img
                        src="https://wp2022.kodesolution.com/oitech/wp-content/uploads/2024/01/divider9.jpg" // Replace with your actual image path
                        alt="Satisfied Client"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-semibold text-gray-800">
                          3600+
                        </p>
                        <p className="text-sm text-gray-500">
                          Satisfied Client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-md bg-white py-4 px-7">
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
                  <div className="mt-4 space-y-6">
                    {WhyUsSectionApiResponse?.data?.Feature?.length > 0 ? (
                      <>
                        <div className="sm:grid sm:grid-cols-2 gap-1 py-3">
                          {WhyUsSectionApiResponse?.data?.Feature?.map(
                            (data: any, index: any) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default WhyBulletinComponent;
