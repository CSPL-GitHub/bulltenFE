"use client";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import React, { useState } from "react";

type Props = {
  tab1: any;
  tab2: any;
  tab3: any;
  detailsboxes: any;
};

const WhyChooseWebHostingTabsComponent: React.FC<Props> = ({
  tab1,
  tab2,
  tab3,
  detailsboxes,
}) => {
  const [activeTab, setActiveTab] = useState(tab1?.heading || "");

  const tabs = [
    { title: tab1?.heading, content: tab1?.tabContent },
    { title: tab2?.heading, content: tab2?.tabContent },
    { title: tab3?.heading, content: tab3?.tabContent },
  ];

  const renderTabContent = () => {
    const currentTab = tabs.find((tab) => tab.title === activeTab);

    if (!currentTab) return null;

    if (currentTab.title === tab1?.heading && currentTab.content?.listTitles) {
      return (
        <div className="">
          <MainHeadingComponent
            alignmentType={1}
            hoverEffect="text-gray-800 text-lg"
          >
            {currentTab?.content?.Title}
          </MainHeadingComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {currentTab.content.listTitles.map((item: any, index: any) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg "
              >
                <div className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0 mt-1"></div>
                <span className="text-gray-800 text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentTab.content?.title && currentTab.content?.description) {
      return (
        <div className="py-6 flex flex-row items-center text-center">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
              {currentTab.content.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {currentTab.content.description}
            </p>
          </div>
          {currentTab.content.image && (
            <div className="relative w-full max-w-lg">
              <img
                src={currentTab.content.image}
                alt={currentTab.content.alt_text || "image"}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            </div>
          )}
        </div>
      );
    }

    return <p className="text-gray-700">No content available for this tab.</p>;
  };

  return (
    <div className="sm:px-6 lg:px-12 py-8">
      <div className="flex  flex-col lg:flex-row lg:space-x-6">
        <nav className="w-full  shadow-sm px-2 lg:w-1/4 mb-6 lg:mb-0">
          <div className="flex flex-col ">
            {tabs.length > 0 && (
              <ul className="space-y-6">
                {tabs.map((tab, index) => (
                  <li key={index} onClick={() => setActiveTab(tab.title)}>
                    <div
                      className={`cursor-pointer p-4 rounded-md text-center font-semibold transition-colors duration-300 ${
                        activeTab === tab.title
                          ? "bg-bullt-tertiary text-white"
                          : "bg-bullt-quaternary/[0.04] text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {tab.title}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="w-full lg:w-3/4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default WhyChooseWebHostingTabsComponent;
