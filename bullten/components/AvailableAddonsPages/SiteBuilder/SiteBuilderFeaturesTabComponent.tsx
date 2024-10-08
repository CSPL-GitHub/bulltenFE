"use client";
import React from "react";
import { useState } from "react";

type Props = {
  FeaturesData: any;
};
export default function SiteBuilderFeaturesTabComponent({
  FeaturesData,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-bullt-quaternary/5 px-4 lg:py-16 py-6 ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-2xl lg:text-4xl font-bold text-center lg:mb-12 mb-4 text-bullt-primary">
          {FeaturesData?.features_all_data[0]?.heading}
        </h2>
        <div className="mb-8 flex justify-center">
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-lg bg-white p-1 shadow-md">
            {FeaturesData?.features_all_data && (
              <>
                {FeaturesData?.features_all_data[0]?.feature?.map(
                  (feature: any, index: number) => (
                    <button
                      key={index}
                      className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                        activeTab === index
                          ? "bg-bullt-tertiary text-white shadow-md"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {feature?.feature_head_data}
                    </button>
                  )
                )}
              </>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {FeaturesData?.features_all_data[0] && (
            <>
              {FeaturesData?.features_all_data[0]?.feature[
                activeTab
              ]?.site_features?.map((feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-bullt-tertiary/30 to-bullt-tertiary/80 rounded-2xl p-2 mr-6 transform transition-transform duration-300 group-hover:rotate-6">
                      <div className="">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.feature_image}`}
                          alt={feature?.feature_headings}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bullt-quaternary group-hover:to-bullt-quaternary/[0.8] transition-all duration-300">
                      {feature?.feature_headings}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature?.feature_description}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
