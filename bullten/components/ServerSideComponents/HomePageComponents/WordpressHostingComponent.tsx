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
        <section className="sm:p-12  bg-bullt-quaternary  px-6 lg:px-16">
          <div className="sm:grid grid-cols-2 justify-center">
            <div className="sm:grid sm:grid-col-1 grid-col-2 px-2">
              <div className="flex gap-2 border-b-[1px] sm:w-[330px] sm:h-8 w-full border-bullt-text-quinary sm:py-0 py-3">
                <p className="text-bullt-secondary font-bold text-lg ">
                  {WordPressHoistingApiResponse?.result?.host_data?.lblw1}
                </p>
                <p className="text-bullt-text-quinary  font-bold text-lg">
                  {WordPressHoistingApiResponse?.result?.host_data?.lblw2}
                </p>
              </div>
              {WordPressHoistingApiResponse?.result?.host_data?.heading ? (
                <MainHeadingComponent hoverEffect="text-bullt-text-secondary">
                  {WordPressHoistingApiResponse?.result?.host_data?.heading}
                </MainHeadingComponent>
              ) : null}
              <div className="h-[400px] w-full relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.host_data?.img}`}
                  alt="all"
                  style={{
                    position: "absolute",
                    objectFit: "contain",
                    inset: 0,
                  }}
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
