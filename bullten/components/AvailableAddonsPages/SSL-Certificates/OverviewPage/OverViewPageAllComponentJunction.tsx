"use client";

import React, { useEffect, useState } from "react";
import ChooseSSLPlan from "./ChooseSSLPlan";
import AboutSslSection from "./AboutSslSection";
import ImageTextStripComponent from "./ImageTextStripComponent";
import FAQSslComponent from "./FAQSslComponent";
import CertificateComparisonSection from "./CertificationComponents";
import MultiYearSslCertificates from "./MultiYearSslCertificates";
import SSLBrandsLogosComponent from "./SSLBrandsLogosComponent";
import OverViewPageBannerComponent from "./OverViewPageBannerComponent";
import FeaturesContentComponent from "./FeaturesContentComponent";
import TabsSectionComponent from "./TabsSectionComponent";
import { headerApi } from "@/apis/HomePageApis";

type Props = {
  OverViewPageDataContent: any;
  decodedSlug: string;
  decodedSubSlug: string;
  // TabsNames: any;
};

const OverViewPageAllComponentJunction = ({
  OverViewPageDataContent,
  decodedSlug,
  decodedSubSlug,
}: // TabsNames,
Props) => {
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
    <div>
      <OverViewPageBannerComponent
        content={OverViewPageDataContent?.result?.data}
      />

      <TabsSectionComponent
        HeaderResponse={headerData}
        decodedSlug={decodedSlug}
        decodedSubSlug={decodedSubSlug}
        // TabsNames={TabsNames}
        DataContent={OverViewPageDataContent?.result?.data}
      />
      {OverViewPageDataContent?.result?.data.box_data.length > 0 ? (
        <ChooseSSLPlan DataContent={OverViewPageDataContent?.result?.data} />
      ) : null}

      {OverViewPageDataContent?.result?.data.overview_page.length > 0 ? (
        <AboutSslSection DataContent={OverViewPageDataContent?.result?.data} />
      ) : null}

      {OverViewPageDataContent?.result?.data?.engine_rank?.length > 0 ? (
        <FeaturesContentComponent
          DataContent={OverViewPageDataContent?.result?.data}
        />
      ) : null}

      {OverViewPageDataContent?.result?.data?.type_certificate.length > 0 ? (
        <ImageTextStripComponent
          DataContent={OverViewPageDataContent?.result?.data}
        />
      ) : null}

      {OverViewPageDataContent?.result?.data?.faq?.length > 0 ? (
        <FAQSslComponent DataContent={OverViewPageDataContent?.result?.data} />
      ) : null}

      <CertificateComparisonSection
        DataContent={OverViewPageDataContent?.result?.data}
      />
      <MultiYearSslCertificates
        DataContent={OverViewPageDataContent?.result?.data}
      />
      <SSLBrandsLogosComponent
        DataContent={OverViewPageDataContent?.result?.data}
      />
    </div>
  );
};

export default OverViewPageAllComponentJunction;
