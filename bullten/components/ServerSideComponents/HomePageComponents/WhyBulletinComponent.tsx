import { WhyUsSectionApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";
import img from "../../../public/hoisting.png"
const WhyBulletinComponent = async () => {
  const WhyUsSection = await WhyUsSectionApi();
  const WhyUsSectionApiResponse = WhyUsSection?.result;
  return (
    <> {WhyUsSectionApiResponse?.Active === true ? (
      <> <div className="container relative  py-3">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <div className="hidden lg:block">
                <div className="h-[550px] w-full ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.data?.img}`}
                    alt="Flipping Image"
                    className="flip-image backface-hidden"
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    fill={true}
                  />
                </div>
              </div>
            </div>
            <div className="w-full bg-black opacity-80" style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>     
              <div className="">
              <div className="py-14 lg:py-4 sm:px-12 px-4">
                {WhyUsSectionApiResponse?.data?.label ? (
                  <>
                    <SloganHeadingComponent
                      alignmentType={1}
                      paddingTop={1}
                      hoverEffect="text-bullt-secondary">
                      {WhyUsSectionApiResponse?.data?.label}
                    </SloganHeadingComponent>
                  </>
                ) : null}
                {WhyUsSectionApiResponse?.data?.heading ? (
                  <>
                    <MainHeadingComponent alignmentType={1} paddingTop={1} hoverEffect="text-bullt-secondary">
                      {WhyUsSectionApiResponse?.data?.heading}
                    </MainHeadingComponent>
                  </>
                ) : null}
                {WhyUsSectionApiResponse?.data?.description ? (
                  <>
                    <ParaGraphText paddingTop={1} hoverEffect="text-bullt-secondary">
                      {WhyUsSectionApiResponse?.data?.description}
                    </ParaGraphText>
                  </>
                ) : null}
                <div className="overflow-style-none mt-4 space-y-6 lg:overflow-y-scroll lg:h-[550px]">
                  {WhyUsSectionApiResponse?.data?.Feature?.length > 0 ? (
                    <><div className="">
                      {WhyUsSectionApiResponse?.data?.Feature?.map(
                        (data: any, index: any) => (
                          <div key={index} className="group flex items-center gap-4 py-8 border-b-[1px] border-gray-400 lg:h-[170px]">
                            {data?.image ? <><div className="h-[80px] w-[100px] relative">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`}
                                alt="Flipping Image"
                                className="p-3 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-x-[-1] bg-bullt-tertiary"
                                style={{
                                  position: "absolute",
                                  objectFit: "contain",
                                  inset: 0,
                                }}
                                fill={true}
                              />
                            </div></> : null}
                            <div className="sm:w-[100%] w-full">
                              <p className="text-bullt-secondary text-2xl font-semibold">
                                {data?.name}
                              </p>
                              <p className="text-bullt-secondary text-sm lg:text-lg py-1 line-clamp-3"> {data?.description}</p>
                            </div>
                          </div>)
                      )}
                    </div>
                    </>
                  ) : null}
                </div>
                {/* <div className="mt-4">
                    <HomePageButtonOne
                      alignmentType={1}
                      buttonText={"Explore More"}
                      route={"/services"}
                    />
                  </div> */}
              </div>
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
