import { WordPressHoistingApi } from "@/apis/HomePageApis";
import CartSliderComponent from "@/components/ClientSideComponents/HomePageComponents/CartSliderComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import Image from "next/image";
import React from "react";

type Props = {};

const WordPressHoistingComponent = async (props: Props) => {
  const WordPressHoistingApiResponse = await WordPressHoistingApi();
  console.log(
    "WordPressHoistingApiResponse",
    WordPressHoistingApiResponse?.result
  );
  return (
    <>
      {WordPressHoistingApiResponse?.result?.Active === true ? (
        <section className="w-full py-12 px-6 bg-bullt-quaternary/[0.03] rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
            <div className="grid grid-col-2 lg:grid-col-2 px-2">
              <div className="flex gap-2 border-b-[1px] sm:w-[330px] sm:h-8 w-full border-bullt-text-quinary sm:py-0 py-3">
                <p className="text-bullt-primary font-bold text-lg ">
                  {WordPressHoistingApiResponse?.result?.host_data?.lblw1}
                </p>
                <p className="text-bullt-text-quinary  font-bold text-lg">
                  {WordPressHoistingApiResponse?.result?.host_data?.lblw2}
                </p>
              </div>
              {WordPressHoistingApiResponse?.result?.host_data?.heading ? (
                <MainHeadingComponent
                  alignmentType={1}
                  paddingTop={1}
                  hoverEffect="text-bullt-primary"
                >
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
