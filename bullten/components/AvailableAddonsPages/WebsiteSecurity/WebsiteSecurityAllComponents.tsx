"use client";

import React from "react";
import WebsiteSecurityBannerComponent from "./WebsiteSecurityBannerComponent";
import AboutWebsiteSecurityComponent from "./AboutWebsiteSecurityComponent";
import WebsiteSecurityProductsComponent from "./WebsiteSecurityProductComponent";
import WebsiteSecurityFaqComponent from "./WebsiteSecurityFaqComponent";
import WebsiteSecurityHackedComponent from "./WebsiteSecurityHackedComponent";
import WebsiteSecurityFeaturesComponent from "./WebsiteSecurityFeaturesComponent";

type Props = { WebsiteSecurityContent: any; decodedSlug: string };

const WebsiteSecurityAllComponents = ({
  WebsiteSecurityContent,
  decodedSlug,
}: Props) => {
  console.log(
    WebsiteSecurityContent?.result?.data[0],
    "WebsiteSecurityContent"
  );
  return (
    <div>
      <WebsiteSecurityBannerComponent
        BannerData={WebsiteSecurityContent?.result?.data[0]}
      />
      <AboutWebsiteSecurityComponent
        AboutData={WebsiteSecurityContent?.result?.data[0]}
      />
      <WebsiteSecurityProductsComponent decodedSlug={decodedSlug} />
      <WebsiteSecurityFeaturesComponent
        FeaturesData={WebsiteSecurityContent?.result?.data[0]}
      />
      <WebsiteSecurityHackedComponent
        SecurityData={WebsiteSecurityContent?.result?.data[0]}
      />
      <WebsiteSecurityFaqComponent
        FaqData={WebsiteSecurityContent?.result?.data[0]}
      />
    </div>
  );
};

export default WebsiteSecurityAllComponents;
