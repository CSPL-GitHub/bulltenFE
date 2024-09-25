import React from "react";
import ChooseSSLPlan from "./ChooseSSLPlan";
import AboutSslSection from "./AboutSslSection";
import ImageTextStripComponent from "./ImageTextStripComponent";
import FAQSslComponent from "./FAQSslComponent";
import CertificateComparisonSection from "./CertificationComponents";
import MultiYearSslCertificates from "./MultiYearSslCertificates";
import SSLBrandsLogosComponent from "./SSLBrandsLogosComponent";
import OverViewPageBannerComponent from "./OverViewPageBannerComponent";
import FeaturesContentComponent from "./FeaturesContentComponent";

type Props = {
  OverViewPageDataContent: any;
};
const OverViewPageAllComponentJunction = ({
  OverViewPageDataContent,
}: Props) => {
  console.log(
    OverViewPageDataContent?.result?.data,
    "ALlOverViewPageAllComponentJunction"
  );
  return (
    <div>
      <OverViewPageBannerComponent
        content={OverViewPageDataContent?.result?.data}
      />

      {OverViewPageDataContent?.result?.data.box_data.length > 0 ? (
        <ChooseSSLPlan DataContent={OverViewPageDataContent?.result?.data} />
      ) : null}

      {OverViewPageDataContent?.result?.data.overview_page.length > 0 ? (
        <AboutSslSection DataContent={OverViewPageDataContent?.result?.data} />
      ) : null}

      <FeaturesContentComponent
        DataContent={OverViewPageDataContent?.result?.data}
      />

      <ImageTextStripComponent
        DataContent={OverViewPageDataContent?.result?.data}
      />
      <FAQSslComponent DataContent={OverViewPageDataContent?.result?.data} />
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
