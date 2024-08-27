import { serverFeaturesApi } from "@/apis/HomePageApis";
import Image from "next/image";
import React from "react";

const ServerFeatures = async () => {
  const serverFeaturesData = await serverFeaturesApi();
  const isActive = serverFeaturesData?.result?.Active;

  if (!isActive) return null;

  const { title, description, server_feature } =
    serverFeaturesData?.result?.data || {};

  return (
    <section className="relative bg-fixed bg-cover py-16 ">
      <div className="bg-bullt-quaternary/[0.04] w-full pt-16 pb-16 mx-auto flex flex-col items-center px-6">
        <div className="max-w-4xl text-center text-black space-y-4">
          {title && (
            <h2 className="text-3xl font-bold leading-tight">{title}</h2>
          )}
          {description && (
            <p className="text-lg leading-relaxed">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
          {server_feature?.map((feature: any, index: number) => (
            <div
              key={index}
              className=" px-4 py-4 rounded-lg shadow-lg  text-center flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {feature.icon && (
                <div className="w-20 h-20 mb-4 relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.icon}`}
                    alt={feature?.alt_text || "Feature Icon"}
                    className="object-contain"
                    fill={true}
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-gray-900 text-sm leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerFeatures;
