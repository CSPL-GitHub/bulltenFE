import { WordPressHoistingApi } from "@/apis/HomePageApis";
import CartSliderComponent from "@/components/ClientSideComponents/HomePageComponents/CartSliderComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import React from "react";

type Props = {};

const WordPressHoistingComponent = async (props: Props) => {
  const WordPressHoistingApiResponse = await WordPressHoistingApi();

  return (
    <>
      {WordPressHoistingApiResponse?.result?.Active === true ? (
        <section className="w-full py-12 px-6 bg-bullt-quaternary/[0.03] rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
            <div className="grid grid-col-2 lg:grid-col-2 px-2">
              <div className="">
                <div className="flex gap-1 border-b-[1px] sm:w-[330px] sm:h-10 w-full border-bullt-text-quinary ">
                  <SubHeadingComponents paddingTop={3} hoverEffect="pb-3">
                    {WordPressHoistingApiResponse?.result?.host_data?.lblw1}
                  </SubHeadingComponents>
                  <SloganHeadingComponent paddingTop={3}>
                    {WordPressHoistingApiResponse?.result?.host_data?.lblw2}
                  </SloganHeadingComponent>
                </div>
              </div>
              {WordPressHoistingApiResponse?.result?.host_data?.heading ? (
                <MainHeadingComponent alignmentType={1} paddingTop={3}>
                  {WordPressHoistingApiResponse?.result?.host_data?.heading}
                </MainHeadingComponent>
              ) : null}
              <div className="h-[400px] w-full relative overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.host_data?.img}`}
                  alt="all"
                  className="absolute inset-0 object-contain w-full h-full"
                  fill={true}
                />
              </div>
            </div>
            <CartSliderComponent
              data={WordPressHoistingApiResponse?.result?.host_data?.hosting}
            />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default WordPressHoistingComponent;
