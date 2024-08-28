"use client";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import Image from "next/image";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

type TabContent = {
  title: string;
  description?: string | boolean;
  image?: string;
  alt_text?: string | boolean;
};

type Tab = {
  heading: string;
  title?: string | boolean;
  description?: string | boolean;
  record: "Single" | "Multiple";
  tabContent: TabContent[];
};

type Props = {
  content: {
    title: string;
    description: string;
    tabs: Tab[];
  };
};

const WhyChooseWebHostingTabsComponent: React.FC<Props> = ({ content }) => {
  const { tabs } = content;
  const [activeTab, setActiveTab] = useState(tabs[0]?.heading || "");

  return (
    <nav className="w-full mb-6 lg:mb-0">
      <div className="flex flex-row">
        {tabs.length > 0 && (
          <ul className="grid lg:grid-cols-3 grid-cols-2 gap-2 ">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(tab.heading)}
                className="w-full"
              >
                <div
                  className={`cursor-pointer w-full p-4 rounded-md text-center font-semibold transition-colors duration-300 ${
                    activeTab === tab.heading
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-200"
                  }`}
                >
                  {tab.heading}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full">
        {(() => {
          const currentTab = tabs.find((tab) => tab.heading === activeTab);
          if (!currentTab)
            return (
              <p className="text-gray-700">
                No content available for this tab.
              </p>
            );

          return (
            <div className="py-6 px-4 shadow-md ">
              {currentTab.title && (
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {currentTab.title}
                </h3>
              )}
              {currentTab.description && (
                <p className="text-lg text-gray-700 mb-6">
                  {currentTab.description}
                </p>
              )}

              {currentTab.record === "Multiple" ? (
                <>
                  <div className="mt-4 space-y-4">
                    <div className="sm:grid sm:grid-cols-2 gap-4 py-3">
                      {currentTab.tabContent.map((item, index) => (
                        <div className="flex items-center gap-2">
                          <SiTicktick className="text-bullt-text-quinary" />
                          <h4 className="text-lg font-medium text-gray-800">
                            {item.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                currentTab.tabContent.map((item, index) => (
                  <div key={index} className="p-4 mb-4">
                    {item?.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                        alt="all"
                        className=""
                        fill={true}
                      />
                    )}
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-md text-gray-700 mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          );
        })()}
      </div>
    </nav>
  );
};

export default WhyChooseWebHostingTabsComponent;
