"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  data: any;
};

const OurPatnarTabComponent: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.tab_one);

  return (
    <div className="sm:px-4">
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex justify-center gap-5">
          <button
            className={`relative text-lg font-medium py-2 px-4 rounded-md transition-all duration-200 ${
              activeTab === data.tab_one
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-black hover:bg-blue-50"
            }`}
            onClick={() => setActiveTab(data.tab_one)}
          >
            {data.tab_one}
            {activeTab === data.tab_one && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45"></span>
            )}
          </button>
          <button
            className={`relative text-lg font-medium py-2 px-4 rounded-md transition-all duration-200 ${
              activeTab === data.tab_two
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-black hover:bg-blue-50"
            }`}
            onClick={() => setActiveTab(data.tab_two)}
          >
            {data.tab_two}
            {activeTab === data.tab_two && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45"></span>
            )}
          </button>
        </nav>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 py-6">
          {(activeTab === data.tab_one
            ? data.operating_systems
            : data.list_titles
          )?.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-white  border-gray-200  sm:w-[160px] w-[160px] rounded-lg shadow-sm py-1 text-center hover:scale-105"
            >
              {item.img ? (
                <div className="h-[70px] lg:w-[140px] w-[120px] relative mx-auto">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                    alt="all"
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      inset: 0,
                    }}
                    fill={true}
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-gray-800 py-1">
                {item.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPatnarTabComponent;
