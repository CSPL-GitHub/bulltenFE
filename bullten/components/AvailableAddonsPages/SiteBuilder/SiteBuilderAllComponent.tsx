"use client";
import React from "react";
import SiteBuilderBannerComponent from "./SiteBuilderBannerComponent";
import AboutSiteBuilderComponent from "./AboutSiteBuilderComponent";
import SiteBuilderTemplateImagesComponent from "./SiteBuilderTemplateImagesComponent";
import SiteBuilderFeaturesTabComponent from "./SiteBuilderFeaturesTabComponent";
import SiteBuilderFeatuesComponent from "./SiteBuilderFeatuesComponent";
import SiteBuilderProductsComponent from "./SiteBuilderProductsComponent";

type Props = { SiteBuilderContent: any; decodedSlug: string };

const SiteBuilderAllComponents = ({
  SiteBuilderContent,
  decodedSlug,
}: Props) => {
  return (
    <div>
      {SiteBuilderContent?.result?.seo_data[0]?.is_active === true ? (
        <>
          <SiteBuilderBannerComponent
            BannerData={SiteBuilderContent?.result?.seo_data[0]}
          />
          <AboutSiteBuilderComponent
            AboutData={SiteBuilderContent?.result?.seo_data[0]}
          />
          <SiteBuilderTemplateImagesComponent
            TemplateData={SiteBuilderContent?.result?.seo_data[0]}
          />
          <SiteBuilderProductsComponent decodedSlug={decodedSlug} />
          <SiteBuilderFeaturesTabComponent
            FeaturesData={SiteBuilderContent?.result?.seo_data[0]}
          />
          <SiteBuilderFeatuesComponent
            CompeteData={SiteBuilderContent?.result?.seo_data[0]}
          />
        </>
      ) : null}
    </div>
  );
};

export default SiteBuilderAllComponents;
