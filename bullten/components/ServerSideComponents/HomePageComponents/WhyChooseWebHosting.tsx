import { WhyChooseWebHostingApi } from "@/apis/HomePageApis";
import WhyChooseWebHostingTabsComponent from "@/components/ClientSideComponents/HomePageComponents/WhyChooseWebHostingTabsComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";

type Props = {};

const WhyChooseWebHosting = async (props: Props) => {
  const WhyChosoeWebHostingApiResponse = await WhyChooseWebHostingApi();
  const res = WhyChosoeWebHostingApiResponse?.result;

  return (
    <>
      {res?.Active === true ? (
        <>
          <section className="py-16 w-full px-8 bg-bullt-quaternary/[0.01]">
            <div className="mx-auto flex flex-col lg:flex-row gap-4">
              <div className="w-full mb-6 lg:mb-0">
                <div className="flex flex-col justify-start ">
                  {res?.data?.slogan ? (
                    <SloganHeadingComponent alignmentType={1}>
                      {res?.data?.slogan}
                    </SloganHeadingComponent>
                  ) : null}
                  {res?.data?.title ? (
                    <>
                      <MainHeadingComponent paddingTop={1}>
                        {res?.data?.title}
                      </MainHeadingComponent>
                    </>
                  ) : null}
                  {res?.data?.description ? (
                    <>
                      <ParaGraphText alignmentType={1} paddingTop={1}>
                        {res?.data?.description}
                      </ParaGraphText>
                    </>
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {res?.data?.detailsboxes?.map((box: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                      >
                        {box?.img ? (
                          <div className="h-[100px] lg:w-full w-[120px] relative mx-auto">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.img}`}
                              alt="all"
                              className=""
                              style={{
                                position: "absolute",
                                objectFit: "contain",
                                inset: 0,
                              }}
                              fill={true}
                            />
                          </div>
                        ) : null}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {box.title}
                        </h3>
                        <p className="text-gray-600">{box.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <WhyChooseWebHostingTabsComponent content={res?.data} />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default WhyChooseWebHosting;
