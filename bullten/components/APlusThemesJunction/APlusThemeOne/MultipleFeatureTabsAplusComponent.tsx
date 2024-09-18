"use client";

import { useState } from "react";

interface Props {
  TabData: any;
}

export default function MultipleFeatureTabsAplusComponent({ TabData }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full lg:py-16 py-8 lg:px-8 bg-gray-50">
      <div className="container mx-auto w-full lg:px-8 px-4">
        {/* Heading */}
        {TabData?.heading ? (
          <div
            className="w-full text-bullt-primary font-bold text-center sm:text-4xl text-3xl mb-10 tracking-wide leading-tight"
            dangerouslySetInnerHTML={{ __html: TabData?.heading }}
          />
        ) : null}

        {/* Description */}
        {TabData?.description ? (
          <div
            className="w-full text-center text-bullt-primary/[0.8] text-lg mb-8"
            dangerouslySetInnerHTML={{
              __html: TabData?.description,
            }}
          />
        ) : null}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center mt-6 lg:gap-12 gap-6 lg:px-12 px-4 py-8 bg-white shadow-md rounded-md">
          {TabData?.content?.map((tab: any, index: number) => (
            <div key={index} className="text-lg group relative w-max">
              <button
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === index
                    ? "bg-indigo-100 text-bullt-quaternary"
                    : "text-gray-600 hover:bg-indigo-50 hover:text-bullt-quaternary"
                }`}
                dangerouslySetInnerHTML={{
                  __html: tab.heading,
                }}
              />
              {/* Hover Effect */}
              <span
                className={`absolute -bottom-1 left-1/2 h-0.5 bg-bullt-quaternary transition-all duration-300 ease-in-out group-hover:w-3/6 ${
                  activeTab === index ? "w-3/6" : "w-0"
                }`}
              />
              <span
                className={`absolute -bottom-1 right-1/2 h-0.5 bg-bullt-quaternary transition-all duration-300 ease-in-out group-hover:w-3/6 ${
                  activeTab === index ? "w-3/6" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="bg-white pt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-6 px-3 py-8 rounded-lg shadow-sm mt-8">
          {TabData?.content[activeTab]?.loctions?.map(
            (location: any, idx: number) => (
              // <div
              //   key={idx}
              //   className="bg-[url('/icon-lines-6.81833a8f.png')] bg-contain bg-no-repeat  flex flex-col gap-2 py-6 px-4 border-[1px] border-gray-200 relative overflow-hidden shadow-md rounded-md group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 transition-all duration-300 ease-in-out"
              // >
              <div
                key={idx}
                className="bg-[url('/icon-lines-6.81833a8f.png')] bg-contain bg-no-repeat  flex flex-col gap-2 py-6 px-6 border-[1px] border-gray-200 relative overflow-hidden shadow-md rounded-md group transition-all duration-300 ease-in-out"
              >
                {location?.tag ? (
                  <div
                    className="absolute top-0 right-0 bg-gradient-to-r from-bullt-tertiary to-orange-400 text-white text-sm px-2 py-1 rounded-sm  font-semibold tracking-wide transition-all duration-300 ease-in-out"
                    dangerouslySetInnerHTML={{
                      __html: location?.tag,
                    }}
                  />
                ) : null}

                {/* Title */}
                {location?.title ? (
                  <div
                    className="w-full relative  text-left mt-6 text-bullt-primary/[0.9] text-xl font-semibold group-hover:text-bullt-quaternary tracking-wide leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: location?.title,
                    }}
                  />
                ) : null}

                {/* Description */}
                {location?.description ? (
                  <div
                    className="w-full relative flex-1 text-left text-bullt-primary/[0.7] text-lg group-hover:text-bullt-quaternary leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: location?.description,
                    }}
                  />
                ) : null}

                {/* Shine Effect */}
                <div className="absolute top-0 -inset-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
