"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

type Props = {
  FeaturesData: any;
};

export default function MonitoringFeaturesTabsComponent({
  FeaturesData,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-bullt-quaternary/5 px-4 lg:py-16 py-6 ">
      <div className="max-w-7xl w-full mx-auto ">
        <h2 className="text-2xl lg:text-4xl font-bold text-center lg:mb-12 mb-4 text-bullt-primary">
          {FeaturesData?.heading}
        </h2>
        <div className="mb-8 w-full flex justify-center">
          <div className="w-full gap-4 grid lg:grid-cols-2 max-w-5xl md:grid-cols-2 grid-cols-1 rounded-lg bg-white p-1 shadow-md">
            {FeaturesData?.monitoring_details && (
              <>
                {FeaturesData?.monitoring_details?.map(
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
                      {feature?.headings}
                    </button>
                  )
                )}
              </>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {FeaturesData?.monitoring_details && (
            <>
              {FeaturesData?.monitoring_details[activeTab]?.data?.map(
                (feature: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                  >
                    {/* <div className="flex items-center mb-6 gap-3">
                      <div className=" bg-gradient-to-br from-bullt-tertiary/30 to-bullt-tertiary/80 rounded-full p-2 transform transition-transform duration-300 group-hover:rotate-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.image}`}
                          alt={feature?.feature_headings}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bullt-quaternary group-hover:to-bullt-quaternary/[0.8] transition-all duration-300">
                        {feature?.headings}
                      </h3>
                    </div> */}
                    <div
                      key={index}
                      className="flex flex-row items-start gap-2 "
                    >
                      <div className="w-16 h-16 relative bg-gradient-to-br from-bullt-tertiary/30 to-bullt-tertiary/80 rounded-2xl p-2 transform transition-transform duration-300 group-hover:rotate-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.image}`}
                          alt={feature?.headings}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-left text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bullt-quaternary group-hover:to-bullt-quaternary/[0.8] transition-all duration-300">
                        {feature?.headings}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
