"use client";

import { useState } from "react";
import Image from "next/image";
import MonitoringBannerComponent from "./SearchMonitoringBannerComponent";
import SiteAndServerAboutComponent from "./SiteAndServerAboutComponent";
import WhyChooseMonitoring from "./WhyChooseServerMonitoringComponent";
import SiteAndServerMonitoringProducts from "./SiteAndServerMonitoringProducts";

type Props = {
  SectionTabsData: any;
  decodedSlug: string;
};

export default function MonitoringTabs({
  SectionTabsData,
  decodedSlug,
}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      <div className="mb-8 lg:px-0 px-4">
        {SectionTabsData.map((item: any, index: number) => (
          <div key={index} className={activeTab === index ? "block" : "hidden"}>
            <MonitoringBannerComponent BannerData={item} />
          </div>
        ))}
        <div className="max-w-7xl mx-auto grid grid-cols-2 justify-between h-20 bg-gray-100  rounded-lg">
          {SectionTabsData.map((item: any, index: number) => (
            <button
              key={index}
              className={`py-2 px-6 rounded-md font-medium text-lg transition-all duration-300 ${
                activeTab === index
                  ? "bg-bullt-tertiary text-bullt-secondary shadow-lg"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item.heading}
            </button>
          ))}
        </div>
      </div>
      {SectionTabsData.map((item: any, index: number) => (
        <div key={index} className={activeTab === index ? "block" : "hidden"}>
          <div className="bg-white transition-all duration-300">
            {item.about_details[0] && (
              <SiteAndServerAboutComponent AboutData={item.about_details[0]} />
            )}
            {item.Why_choose.length > 0 ? (
              <WhyChooseMonitoring WhyChooseData={item.Why_choose[0]} />
            ) : null}

            <SiteAndServerMonitoringProducts
              decodedSlug={decodedSlug}
              tabName={item.heading}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
