"use client";
import React from "react";
import MonitoringBannerComponent from "./SearchMonitoringBannerComponent";
import MonitoringFeaturesTabsComponent from "./MonitoringFeaturesTabsComponent";
import SiteMonitoringFaqComponent from "./SIteMonitoringFaqComponent";
import SiteMonitoringAlertComponent from "./SiteMonitoringAlertComponent";
import MonitoringTabs from "./SiteMonitoringMultipleSectionsTabs";

type Props = { decodedSlug: string; SiteMonitoringContent: any };

const SiteAndServerMonitoringAllComponent = ({
  decodedSlug,
  SiteMonitoringContent,
}: Props) => {
  return (
    <div>
      <MonitoringTabs
        SectionTabsData={
          SiteMonitoringContent?.result?.seo_data[0]?.tab[0]?.tabs_data
        }
        decodedSlug={decodedSlug}
      />
      <MonitoringFeaturesTabsComponent
        FeaturesData={
          SiteMonitoringContent?.result?.seo_data[0]?.monitoring_details_360[0]
        }
      />

      <SiteMonitoringAlertComponent
        AlertAppData={SiteMonitoringContent?.result?.seo_data[0]?.fav_app[0]}
      />
      <SiteMonitoringFaqComponent
        FaqData={SiteMonitoringContent?.result?.seo_data[0]?.faq_details}
      />
    </div>
  );
};

export default SiteAndServerMonitoringAllComponent;
