"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

type Props = {
  WhyChooseData: any;
};

export default function WhyChooseWordpressHostingTabs({
  WhyChooseData,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-bullt-quaternary/5 px-4 lg:py-12 py-6 ">
      <div className="max-w-7xl w-full mx-auto ">
        {WhyChooseData?.heading ? (
          <h2 className="text-2xl lg:text-4xl font-bold text-center lg:mb-12 mb-4 text-bullt-primary">
            {WhyChooseData?.heading}
          </h2>
        ) : null}

        <div className="mb-8 w-full flex justify-center">
          <div className="w-full gap-4 grid lg:grid-cols-3 max-w-5xl md:grid-cols-2 grid-cols-1 border-b-[2px] border-gray-300">
            {WhyChooseData?.why_choose && (
              <>
                {WhyChooseData?.why_choose?.map(
                  (feature: any, index: number) => (
                    <button
                      key={index}
                      className={`px-4 py-3 text-lg font-medium transition-all duration-300 ${
                        activeTab === index
                          ? "border-b-4 border-bullt-tertiary text-bullt-tertiary"
                          : "text-gray-600 hover:text-gray-900 border-b-4 border-b-bullt-quaternary/[0.06]"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {feature?.heading}
                    </button>
                  )
                )}
              </>
            )}
          </div>
        </div>
        <div className="gap-4">
          {WhyChooseData?.why_choose && (
            <>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-col items-start gap-4 lg:pr-14">
                  <h3 className="text-xl font-semibold text-left text-gray-800">
                    {WhyChooseData?.why_choose[activeTab]?.subheading}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {WhyChooseData?.why_choose[activeTab]?.description}
                  </p>
                  {WhyChooseData?.why_choose[activeTab]?.why_choose_list.map(
                    (list: any, index: number) => (
                      <div
                        key={index}
                        className=" bg-white p-6 flex flex-col gap-2 hover:shadow-xl hover:border-l-4 border-l-4 border-l-white  hover:border-bullt-tertiary rounded-md"
                      >
                        {list?.heading ? (
                          <h1 className="text-xl font-semibold text-bullt-primary ">
                            {list?.heading}
                          </h1>
                        ) : null}
                        {list?.description ? (
                          <p className="text-base text-bullt-primary ">
                            {list?.description}{" "}
                          </p>
                        ) : null}
                      </div>
                    )
                  )}
                </div>

                {WhyChooseData?.why_choose[activeTab]?.image ? (
                  <div className="relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyChooseData?.why_choose[activeTab]?.image}`}
                      alt={WhyChooseData?.why_choose[activeTab]?.subheading}
                      fill
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
