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
        <div className="bg-gray-100 w-full flex flex-col items-center py-16 px-6">
          <MainHeadingComponent alignmentType={2} paddingTop={1}>
            {serverFeaturesData?.result?.data?.title}
          </MainHeadingComponent>
          <ParaGraphText alignmentType={2}>
            {serverFeaturesData?.result?.data?.description}
          </ParaGraphText>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {serverFeaturesData?.result?.data?.server_feature.map(
              (product: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col hover:bg- justify-center items-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
                >
                  {product.icon && (
                    <div className="w-14 h-14 relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${product?.icon}`}
                        alt={product?.alt_text}
                        className="w-full h-full absolute top-0 start-0 rounded-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                  <SubHeadingComponents alignmentType={2} paddingTop={3}>
                    {product.title}
                  </SubHeadingComponents>
                  {product.description ? (
                    <ParaGraphText paddingTop={1}>
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
