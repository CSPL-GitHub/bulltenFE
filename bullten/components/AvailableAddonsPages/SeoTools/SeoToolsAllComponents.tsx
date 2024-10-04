"use client";

import React from "react";
import SeoToolsBannerComponent from "./SeoToolsBannerComponent";
import Steps from "./SeoToolsStepsComponent";
import SeoToolsTestimonialsComponent from "./SeoToolsTestimonialsComponent";
import SeoToolsFaqComponent from "./SeoToolsFaqComponent";
import SeoToolsStepsComponent from "./SeoToolsStepsComponent";

type Props = { SeoToolsPageContent: any };

const SeoToolsAllComponents = ({ SeoToolsPageContent }: Props) => {
  console.log(SeoToolsPageContent, "SeoToolsPageContent");
  return (
    <div>
      {SeoToolsPageContent?.result?.data?.Active === true ? (
        <>
          {" "}
          <SeoToolsBannerComponent
            BannerData={SeoToolsPageContent?.result?.data?.PlanDetails}
          />
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
