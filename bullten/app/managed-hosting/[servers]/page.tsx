"use client";
import { OverViewPageDataApi } from "@/apis/AvailableAddons";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import APlusThemeManagedHostingJunction from "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction";
import ChooseSSLPlan from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/ChooseSSLPlan";
import OverViewPageBanner from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageBanner";
import React from "react";
import ServicesSection from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/FeaturesContentComponent";
import AboutSslSection from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/AboutSslSection";
import ImageTextStripComponent from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/ImageTextStripComponent";
import FAQSslComponent from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/FAQSslComponent";
import CertificateComparisonSection from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/CertificationComponents";
import MultiYearSslCertificates from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/MultiYearSslCertificates";
import StunningHeroSection from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageBannerComponent";
import SSLBrandsLogosComponent from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/SSLBrandsLogosComponent";
import OverViewPageAllComponentJunction from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageAllComponentJunction";

type Props = {};

const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {
  const decodedSlug = decodeURIComponent(servers);
  console.log(decodedSlug, "decodedSlug");
  const ManagedDataResponse = await ManagedHostingDataApi(decodedSlug);
  const OverViewPageDataContent = await OverViewPageDataApi(decodedSlug);
  console.log(OverViewPageDataContent, "OverViewPageDataContent");
  return (
    <>
      <>
        {"ssl-certicate" === "ssl-certicate" ? (
          <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
            {/* <OverViewPageBanner
              content={OverViewPageDataContent?.result?.data}
            /> */}
            <OverViewPageAllComponentJunction
              OverViewPageDataContent={OverViewPageDataContent}
            />
          </div>
        ) : (
          <>
            {ManagedDataResponse?.result?.Active === true ? (
              <div>
                <APlusThemeManagedHostingJunction
                  aPlusResponse={ManagedDataResponse?.result}
                  decodedSlug={decodedSlug}
                />
              </div>
            ) : null}
          </>
        )}
      </>
    </>
  );
};

export default page;
