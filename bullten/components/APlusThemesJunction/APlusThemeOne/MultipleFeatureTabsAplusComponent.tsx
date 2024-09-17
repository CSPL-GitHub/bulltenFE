"use client";

import { useState } from "react";

interface Props {
  TabData: any;
}
export default function MultipleFeatureTabsAplusComponent({ TabData }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  console.log(TabData?.content);

  return (
    <div className="w-full  lg:py-12 py-4 lg:px-8 px-2">
      <div className="container mx-auto w-full  lg:px-4 px-2">
        {TabData?.heading ? (
          <div
            className="w-full text-bullt-primar font-bold text-center sm:text-4xl text-2xl"
            dangerouslySetInnerHTML={{ __html: TabData?.heading }}
          />
        ) : null}

        {TabData?.description ? (
          <div
            className="w-full text-center text-bullt-primary/[0.8] text-lg"
            dangerouslySetInnerHTML={{
              __html: TabData?.description,
            }}
          />
        ) : null}
        <div className="flex flex-wrap justify-center items-center mt-6 lg:gap-16 gap-4 lg:px-8 px-2 py-8 bg-bullt-quaternary/[0.01] rounded-t-md">
          {TabData?.content?.map((tab: any, index: number) => (
            <>
              <div className="text-lg group relative w-max">
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-md font-medium rounded-md transition-all duration-300 ease-in-out ${
                    activeTab === index ? " " : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: tab.heading,
                  }}
                />
                <span
                  className={`absolute -bottom-1 left-1/2 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-3/6 ${
                    activeTab === index ? "w-3/6" : "w-0"
                  }`}
                />

                {/* Right side span */}
                <span
                  className={`absolute -bottom-1 right-1/2 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-3/6 ${
                    activeTab === index ? "w-3/6" : "w-0"
                  }`}
                />
              </div>
            </>
          ))}
        </div>
        <div className="bg-white pt-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 py-6">
          {TabData?.content[activeTab]?.loctions?.map(
            (location: any, idx: number) => (
              <div
                key={idx}
                className=" flex flex-col  gap-2 py-6 px-4 border-[1px] border-gray-200 bg-bullt-quaternary/[0.03] relative overflow-hidden shadow-sm rounded-lg group hover:bg-bullt-quaternary transition-all duration-300 ease-in-out"
              >
                {location?.title ? (
                  <div
                    className="w-full tex-left text-bullt-primary/[0.8] text-xl font-semibold group-hover:text-white"
                    dangerouslySetInnerHTML={{
                      __html: location?.title,
                    }}
                  />
                ) : null}
                {location?.description ? (
                  <div
                    className="w-full flex-1 text-left text-bullt-primary/[0.8] text-lg group-hover:text-white"
                    dangerouslySetInnerHTML={{
                      __html: location?.description,
                    }}
                  />
                ) : null}

                {location?.tag ? (
                  <div
                    className="w-3/6 flex justify-center items-center px-3 bg-bullt-quaternary/[0.08] group-hover:text-white group-hover:bg-bullt-secondary/[0.3]  text-bullt-quaternary text-sm p-2 rounded-lg"
                    dangerouslySetInnerHTML={{
                      __html: location?.tag,
                    }}
                  />
                ) : null}
                <div className="absolute top-0 -inset-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
