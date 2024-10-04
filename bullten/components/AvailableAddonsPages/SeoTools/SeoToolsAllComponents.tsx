"use client";
import React from "react";
import SeoToolsBannerComponent from "./SeoToolsBannerComponent";
import SeoToolsTestimonialsComponent from "./SeoToolsTestimonialsComponent";
import SeoToolsFaqComponent from "./SeoToolsFaqComponent";
import SeoToolsStepsComponent from "./SeoToolsStepsComponent";
import SeoToolsProductsComponent from "./SeoToolsProductsComponent";

type Props = { SeoToolsPageContent: any; decodedSlug: string };

const SeoToolsAllComponents = ({ SeoToolsPageContent, decodedSlug }: Props) => {
  return (
    <div>
      {SeoToolsPageContent?.result?.data?.Active === true ? (
        <>
          <SeoToolsBannerComponent
            BannerData={SeoToolsPageContent?.result?.data?.PlanDetails}
          />
          <SeoToolsProductsComponent decodedSlug={decodedSlug} />
          <SeoToolsStepsComponent
            StepsData={SeoToolsPageContent?.result?.data?.PlanDetails}
          />
          <SeoToolsTestimonialsComponent
            TestimonialsData={SeoToolsPageContent?.result?.data?.PlanDetails}
          />
          <SeoToolsFaqComponent
            FaqData={SeoToolsPageContent?.result?.data?.PlanDetails}
          />
        </>
      ) : null}
    </div>
  );
};

export default SeoToolsAllComponents;
