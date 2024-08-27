import { serverFeaturesApi } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import React from "react";

const ServerFeatures = async () => {
  const serverFeaturesData = await serverFeaturesApi();
  return (
    <>
      {serverFeaturesData?.result?.Active === true ? (
        <div className=" w-full flex flex-col items-center py-16 px-6">
          <MainHeadingComponent
            alignmentType={2}
            paddingTop={1}
            hoverEffect=" text-blue-900 "
          >
            {serverFeaturesData?.result?.data?.title}
          </MainHeadingComponent>
          <ParaGraphText
            alignmentType={2}
            paddingTop={3}
            hoverEffect="text-gray-700"
          >
            {serverFeaturesData?.result?.data?.description}
          </ParaGraphText>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {serverFeaturesData?.result?.data?.server_feature.map(
              (product: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-md shadow-sm text-left flex flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-md hover:scale-105"
                >
                  {product.icon && (
                    <div className="w-16 h-16 mb-4 relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${product?.icon}`}
                        alt={product?.alt_text}
                        className="rounded-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  <SubHeadingComponents
                    alignmentType={2}
                    paddingTop={1}
                    hoverEffect=" text-blue-800 "
                  >
                    {product.title}
                  </SubHeadingComponents>
                  {product.description ? (
                    <ParaGraphText hoverEffect="text-gray-600">
                      {product.description}
                    </ParaGraphText>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ServerFeatures;
