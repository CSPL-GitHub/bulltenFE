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
        // <section className="w-full py-12 px-6 rounded-md">
        //   <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
        //     <div className="grid grid-col-2 lg:grid-col-2 px-2">
        //       <div className="">
        //         <div className="flex gap-1 border-b-[1px] sm:w-[330px] sm:h-10 w-full border-bullt-text-quinary ">
        //           <SubHeadingComponents paddingTop={3} hoverEffect="pb-3">
        //             {WordPressHoistingApiResponse?.result?.host_data?.lblw1}
        //           </SubHeadingComponents>
        //           <SloganHeadingComponent paddingTop={3}>
        //             {WordPressHoistingApiResponse?.result?.host_data?.lblw2}
        //           </SloganHeadingComponent>
        //         </div>
        //       </div>
        //       {WordPressHoistingApiResponse?.result?.host_data?.heading ? (
        //         <MainHeadingComponent alignmentType={1} paddingTop={3}>
        //           {WordPressHoistingApiResponse?.result?.host_data?.heading}
        //         </MainHeadingComponent>
        //       ) : null}
        //       <div className="h-[400px] w-full relative overflow-hidden">
        //         <Image
        //           src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.host_data?.img}`}
        //           alt="all"
        //           className="absolute inset-0 object-contain w-full h-full"
        //           fill={true}
        //         />
        //       </div>
        //     </div>
        //     <CartSliderComponent
        //       data={WordPressHoistingApiResponse?.result?.host_data?.hosting}
        //     />
        //   </div>
        // </section>

        <section>
          <div className="relative bg-gray-50 py-16 lg:py-16">
            <div className=" mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="relative flex flex-col gap-4">
                  <div className="flex gap-1 border-b-[1px] sm:w-[330px] sm:h-10 w-full border-bullt-text-quinary ">
                    <SubHeadingComponents paddingTop={3} hoverEffect="pb-3">
                      {WordPressHoistingApiResponse?.result?.host_data?.lblw1}
                    </SubHeadingComponents>
                    <SloganHeadingComponent paddingTop={3}>
                      {WordPressHoistingApiResponse?.result?.host_data?.lblw2}
                    </SloganHeadingComponent>
                  </div>
                  {WordPressHoistingApiResponse?.result?.host_data?.heading ? (
                    <MainHeadingComponent alignmentType={1} paddingTop={3}>
                      {WordPressHoistingApiResponse?.result?.host_data?.heading}
                    </MainHeadingComponent>
                  ) : null}
                  <div className="aspect-w-3 aspect-h-4 lg:h-[300px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.host_data?.img}`}
                      alt={
                        WordPressHoistingApiResponse?.result?.host_data?.heading
                      }
                      layout="fill"
                      objectFit="cover"
                      className="rounded-l-lg shadow-lg"
                      fill={true}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 transform translate-x-8 translate-y-8 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${WordPressHoistingApiResponse?.result?.host_data?.img}`}
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

                <div className="shadow-md bg-white px-5">
                  <CartSliderComponent
                    data={
                      WordPressHoistingApiResponse?.result?.host_data?.hosting
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default WordPressHoistingComponent;
