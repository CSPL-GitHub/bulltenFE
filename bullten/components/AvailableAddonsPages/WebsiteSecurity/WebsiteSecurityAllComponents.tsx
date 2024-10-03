import React from "react";
import WebsiteSecurityBannerComponent from "./WebsiteSecurityBannerComponent";
import AboutWebsiteSecurityComponent from "./AboutWebsiteSecurityComponent";
import WebsiteSecurityProductsComponent from "./WebsiteSecurityProductComponent";
import WebsiteSecurityFaqComponent from "./WebsiteSecurityFaqComponent";
import WebsiteSecurityHackedComponent from "./WebsiteSecurityHackedComponent";
import WebsiteSecurityFeaturesComponent from "./WebsiteSecurityFeaturesComponent";

type Props = {};

const WebsiteSecurityAllComponents = (props: Props) => {
  return (
    <div>
      <WebsiteSecurityBannerComponent />
      <AboutWebsiteSecurityComponent />
      <WebsiteSecurityProductsComponent />
      <WebsiteSecurityFeaturesComponent />
      <WebsiteSecurityHackedComponent />
      <WebsiteSecurityFaqComponent />
    </div>
  );
};

export default WebsiteSecurityAllComponents;
