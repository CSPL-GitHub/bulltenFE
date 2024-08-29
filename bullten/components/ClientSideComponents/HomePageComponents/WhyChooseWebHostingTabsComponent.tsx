"use client";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

type TabContent = {
  title: string;
  description?: string | boolean;
  image?: string;
  alt_text?: string;
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
                  className={`cursor-pointer w-full p-4 rounded-sm text-center font-semibold transition-colors duration-300 ${
                    activeTab === tab.heading
                      ? "bg-bullt-tertiary text-white"
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
            <div className="py-6 px-4 shadow-sm border mt-4 rounded-md">
              {currentTab.title && (
                <SubHeadingComponents
                  alignmentType={2}
                  paddingTop={1}
                  hoverEffect=" text-gray-800 text-[2rem]"
                >
                  {currentTab.title}
                </SubHeadingComponents>
              )}
              {currentTab.description && (
                <ParaGraphText
                  alignmentType={2}
                  paddingTop={1}
                  hoverEffect="text-gray-700 text-justify "
                >
                  {currentTab.description}
                </ParaGraphText>
              )}

              {currentTab.record === "Multiple" ? (
                <>
                  <div className="mt-4 space-y-4">
                    <div className="sm:grid sm:grid-cols-2 gap-4 py-3">
                      {currentTab.tabContent.map((item, index) => (
                        <div className="flex items-center gap-2">
                          <SiTicktick className="text-bullt-quaternary" />
                          <BulletPointTextComponent paddingTop={1}>
                            {item.title}
                          </BulletPointTextComponent>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                currentTab.tabContent.map((item, index) => (
                  <div key={index} className=" flex flex-col gap-2 mb-4">
                    <SubHeadingComponents
                      alignmentType={2}
                      paddingTop={1}
                      hoverEffect="text-gray-800"
                    >
                      {item.title}
                    </SubHeadingComponents>
                    <div className="flex flex-col lg:flex-row gap-2 justify-start items-start">
                      {item?.image && (
                        <div className="lg:w-1/3 sm:h-[200px] h-[300px] w-full relative ">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                            alt={"img"}
                            style={{
                              position: "absolute",
                              objectFit: "contain",
                              inset: 0,
                            }}
                            fill={true}
                            className="rounded-md w-full h-full"
                          />
                        </div>
                      )}

                      <div className="w-full lg:w-2/3">
                        {item.description && (
                          <ParaGraphText
                            alignmentType={1}
                            paddingTop={1}
                            hoverEffect="text-gray-700 text-justify "
                          >
                            {item.description}
                          </ParaGraphText>
                        )}
                      </div>
                    </div>
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
