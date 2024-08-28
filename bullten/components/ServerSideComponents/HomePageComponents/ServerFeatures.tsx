import { serverFeaturesApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";

const ServerFeatures = async () => {
  const serverFeaturesData = await serverFeaturesApi();
  const isActive = serverFeaturesData?.result?.Active;

  if (!isActive) return null;

  const { title, description, server_feature, slogen } =
    serverFeaturesData?.result?.data || {};
  console.log(
    "serverFeaturesData?.result?.data",
    serverFeaturesData?.result?.data
  );
  return (
    <section className="relative bg-fixed bg-cover">
      <div className=" w-full sm:py-6 py-2 mx-auto flex flex-col items-center px-6">
        <div className="max-w-4xl text-center text-black">
          <div className="w-full flex items-center justify-center">
            {slogen && (
              <SloganHeadingComponent>{slogen}</SloganHeadingComponent>
            )}
          </div>
          {title && (
            <h2 className="text-3xl font-bold leading-tight -mt-[6px]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg leading-relaxed">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5 w-full max-w-5xl py-3 ">
          {server_feature?.map((feature: any, index: number) => (
            <div
              key={index}
              className="relative  group px-4 py-4 shadow-lg overflow-hidden text-center flex flex-col items-center transition-transform duration-300 ease-in-out h-full text-gray-900 hover:text-white "
            >
              <div className="relative z-10 flex flex-row items-center justify-start gap-6">
                {feature.icon && (
                  <div className="w-14 h-14 mb-4 relative rounded-full bg-blue-300">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.icon}`}
                      alt={feature?.alt_text || "Feature Icon"}
                      className="object-contain p-4"
                      fill={true}
                    />
                  </div>
                )}
                <h3 className="text-lg sm:w-[200px] w-[150px] text-start font-semibold mb-2">
                  {feature.title}
                </h3>
              </div>

              {feature.description && (
                <p className="text-start text-[12px] leading-relaxed relative z-10">
                  {feature.description}
                </p>
              )}

              {/* Sliding background image effect */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-70 transition-transform duration-700 ease-in-out"
                style={{
                  backgroundImage: `url('https://img.freepik.com/free-vector/background-design-with-lines-blue-background_1308-4823.jpg?t=st=1724841272~exp=1724844872~hmac=6fbae88717fed9a0c1e99469cd5e7ee6ce7af54b58021f59f166d0b0aa260ac0&w=740')`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;
