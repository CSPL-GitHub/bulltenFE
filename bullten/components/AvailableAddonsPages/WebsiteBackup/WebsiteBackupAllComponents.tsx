"use client";

import React from "react";
import WebsiteBackupBannerComponent from "./WebsiteBackupBannerComponent";
import AboutWebsiteBackupComponent from "./AboutWebsiteBackupComponent";
import WebsiteBackupStorageProduct from "./WebsiteBackupStorageProduct";
import WebsiteBackupStorageFeaturesComponent from "./WebsiteBackupStorageFeatures";
import WebsiteBackupStorageFaqComponent from "./WebsiteBackupStorageFaq";

type Props = { WebsiteBackupPageContent: any; decodedSlug: string };

const WebsiteBackupAllComponents = ({
  WebsiteBackupPageContent,
  decodedSlug,
}: Props) => {
  return (
    <div>
      <WebsiteBackupBannerComponent
        BannerData={WebsiteBackupPageContent?.result?.data[0]}
      />
      <AboutWebsiteBackupComponent
        AboutData={WebsiteBackupPageContent?.result?.data[0]?.Overview}
      />

      <WebsiteBackupStorageProduct
        BenifitesData={WebsiteBackupPageContent?.result?.data[0]}
        decodedSlug={decodedSlug}
      />
      <WebsiteBackupStorageFeaturesComponent
        FeaturesData={WebsiteBackupPageContent?.result?.data[0]}
      />
      <WebsiteBackupStorageFaqComponent
        FaqData={WebsiteBackupPageContent?.result?.data[0]}
      />
    </div>
  );
};

export default WebsiteBackupAllComponents;
