import { WordPressHoistingApi } from "@/apis/HomePageApis";
import CartSliderComponent from "@/components/ClientSideComponents/HomePageComponents/CartSliderComponent";
import Image from "next/image";
import React from "react";

type Props = {};

const WordPressHoistingComponent = async (props: Props) => {
  const WordPressHoistingApiResponse = await WordPressHoistingApi();
  return (
    <>
      {WordPressHoistingApiResponse?.result?.Active === true ?
        <section className="sm:p-12  bg-bullt-quaternary sm:px-6 px-4">

          <div className="sm:grid grid-cols-2 justify-center">
            <div className="sm:grid sm:grid-col-1 grid-col-2 px-2">
              <div className="flex gap-2 border-b-[1px] sm:w-[330px] sm:h-8 w-full border-bullt-text-quinary sm:py-0 py-3">
                <p className="text-bullt-secondary font-bold text-lg ">
                  {WordPressHoistingApiResponse?.result?.lblw1}
                </p>
                <p className="text-bullt-text-quinary  font-bold text-lg">
                  {WordPressHoistingApiResponse?.result?.lblw2}
                </p>
              </div>
              <h1 className="sm:py-5 text-bullt-secondary font-bold sm:text-4xl py-5 text-2xl">
                {WordPressHoistingApiResponse?.result?.heading}
              </h1>
              <div className="h-[400px] w-full relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.img}`}
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
              data={WordPressHoistingApiResponse?.result?.hosting}
            />
          </div>
        </section>
        : null}
    </>
  );
};

export default WordPressHoistingComponent;
