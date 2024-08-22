"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  data: any;
};
const OurPatnarTabComponent: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Operating System");
  const tabs = [
    { title: data?.tab_one, content: data?.operating_systems },
    { title: data?.tab_two, content: data?.list_titles },
  ];
  return (
    <div className="bg-gray-50 sm:px-4">
      <div className="border-b  border-gray-200">
        <nav className="flex justify-center space-x-8">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              className={`text-lg font-medium px-1 pb-2 border-b-2 h-8 ${
                activeTab === tab?.title
                  ? "border-bullt-quinary text-bullt-quinary scale-105"
                  : "border-transparent text-bullt-text-quaternary hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab?.title)}
            >
              {tab?.title}
            </button>
          ))}
        </nav>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {tabs
            .find((tab) => tab?.title === activeTab)
            ?.content.map((item: any, index: any) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm py-4 text-center hover:scale-105"
              >
                <div className="h-[90px] w-full relative">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.img}`}
                    alt="all"
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      inset: 0,
                    }}
                    fill={true}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 py-2">
                  {item?.heading}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurPatnarTabComponent;
