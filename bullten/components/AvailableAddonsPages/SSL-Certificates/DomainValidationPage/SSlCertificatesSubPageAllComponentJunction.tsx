"use client";
import React, { useEffect, useState } from "react";
import AboutCertificateSectionComponent from "./AboutCertificateSectionComponent";
import SubPageBannerSectionComponent from "./SubPageBannerSectionComponent";
import SubPageTabsSectionComponent from "./SubPageTabsSectionComponent";
import { headerApi } from "@/apis/HomePageApis";
import SabPageFeaturesSectionComponent from "./SabPageFeaturesSectionComponent";
import WhyChooseBoxesSectionComponent from "./WhyChooseBoxesSectionComponent";
import ImageTextDetailsSectionComponent from "./ImageTextDetailsSectionComponent";
import SSLCertificatesSubPagesProducts from "./SSLCertificateProducts/SSLCertificatesSubPagesProducts";

type Props = {
  decodedSlug: string;
  decodedSubSlug: string;
  // TabsNames: any;
  SubPageContent: any;
  OverViewPageDataContent: any;
};

function SSlCertificatesSubPageAllComponentJunction({
  decodedSlug,
  decodedSubSlug,
  // TabsNames,
  SubPageContent,
  OverViewPageDataContent,
}: Props) {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const headerResponse = await headerApi();
        setHeaderData(headerResponse?.result?.header);
      } catch (error) {
        console.error("Error fetching header data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      {SubPageContent?.is_active ? (
        <>
          <SubPageBannerSectionComponent BannerData={SubPageContent} />
          <SubPageTabsSectionComponent
            HeaderResponse={headerData}
            decodedSlug={decodedSlug}
            decodedSubSlug={decodedSubSlug}
            // TabsNames={TabsNames}
            DataContent={OverViewPageDataContent?.result?.data}
          />

          {SubPageContent?.about_is_active === true ? (
            <AboutCertificateSectionComponent AboutData={SubPageContent} />
          ) : null}

          <SSLCertificatesSubPagesProducts decodedSubSlug={decodedSubSlug} />

          {SubPageContent?.details_is_active === true ? (
            <ImageTextDetailsSectionComponent ImageTextData={SubPageContent} />
          ) : null}

          {SubPageContent?.feature_is_active === true ? (
            <WhyChooseBoxesSectionComponent
              WhyChooseSectionBoxesData={SubPageContent}
            />
          ) : null}

          {SubPageContent?.certificate_feature_is_active === true ? (
            <SabPageFeaturesSectionComponent
              SectionBoxesData={SubPageContent}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default SSlCertificatesSubPageAllComponentJunction;
