import React from "react";
import {
  OverViewPageDataApi,
  OverViewPageTabsDataApi,
} from "@/apis/AvailableAddons";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import APlusThemeManagedHostingJunction from "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction";
import OverViewPageAllComponentJunction from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageAllComponentJunction";
import XoviNowAllComponentsJunction from "@/components/AvailableAddonsPages/Xovi-Now/XoviNowAllComponentsJunction";
import { XoviNowPageApi } from "@/apis/XoviNowPageAPIs/XoviNowAPIs";
import NordVpnAllSectionComponents from "@/components/AvailableAddonsPages/NordVPN/NordVpnAllSectionComponents";
import { NordVpnPageApi } from "@/apis/NordVpnPageAPIs";
import ProfessionalEmailsAllComponents from "@/components/AvailableAddonsPages/ProfessionalEmail/ProfessionalEmailsAllComponents";
import { ProfessionalEmailPageApi } from "@/apis/ProfessionalEmail";
import WebsiteBackupAllComponents from "@/components/AvailableAddonsPages/WebsiteBackup/WebsiteBackupAllComponents";
import { WebsiteBackupPageApi } from "@/apis/WebsiteBackupPageApi";
import WebsiteSecurityAllComponents from "@/components/AvailableAddonsPages/WebsiteSecurity/WebsiteSecurityAllComponents";
import { WebsiteSecurityPageApi } from "@/apis/WebsiteSecurityApi";
import SeoToolsAllComponents from "@/components/AvailableAddonsPages/SeoTools/SeoToolsAllComponents";
import { SeoToolsPageApi } from "@/apis/SeoToolsApi";
// import SiteBuilderAllComponents from "@/components/AvailableAddonsPages/SiteBuilder/SiteBuilderAllComponent";

type Props = {};

const page = async ({
  params: { servers, subServers },
}: {
  params: { servers: string; subServers: string };
}) => {
  const decodedSlug = decodeURIComponent(servers);
  const decodedSubSlug = decodeURIComponent(subServers);
  const ManagedDataResponse = await ManagedHostingDataApi(decodedSlug);
  const OverViewPageDataContent = await OverViewPageDataApi(decodedSlug);
  const XoviNowPageContent = await XoviNowPageApi(decodedSlug);
  const NordVpnPageContent = await NordVpnPageApi(decodedSlug);
  const professionalEmailPageContent = await ProfessionalEmailPageApi(
    decodedSlug
  );
  const SeoToolsPageContent = await SeoToolsPageApi(decodedSlug);
  const WebsiteBackupPageContent = await WebsiteBackupPageApi(decodedSlug);
  const WebsiteSecurityContent = await WebsiteSecurityPageApi(decodedSlug);
  const isThirdPageConditionMet =
    decodedSlug === XoviNowPageContent?.result?.data[0]?.slug;
  const nordVpn = decodedSlug === NordVpnPageContent?.result?.data[0]?.slug;

  const ProfessionalEmail =
    decodedSlug === professionalEmailPageContent?.result?.data[0]?.slug;
  const Website =
    decodedSlug === WebsiteBackupPageContent?.result?.data[0]?.slug;
  const WebsiteSecurity =
    decodedSlug === WebsiteSecurityContent?.result?.data[0]?.slug;
  const SeoTools = decodedSlug === "seo-tools";

  const Sitebuiler = decodedSlug === "site-builder";
  return (
    <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
      {decodedSlug === OverViewPageDataContent?.result?.data?.slug ? (
        <div className="">
          {OverViewPageDataContent?.result?.Active === true ? (
            <>
              <OverViewPageAllComponentJunction
                OverViewPageDataContent={OverViewPageDataContent}
                decodedSlug={decodedSlug}
                decodedSubSlug={decodedSubSlug}
                // TabsNames={OverViewPageTabsName?.result}
              />
            </>
          ) : null}
        </div>
      ) : isThirdPageConditionMet ? (
        <div className="third-component-section">
          <XoviNowAllComponentsJunction
            DataContent={XoviNowPageContent?.result?.data[0]}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : nordVpn ? (
        <div className="third-component-section">
          <NordVpnAllSectionComponents
            decodedSlug={decodedSlug}
            DataContent={NordVpnPageContent}
          />
        </div>
      ) : ProfessionalEmail ? (
        <div className="third-component-section">
          <ProfessionalEmailsAllComponents
            professionalEmailPageContent={professionalEmailPageContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : Website ? (
        <div className="third-component-section">
          <WebsiteBackupAllComponents
            WebsiteBackupPageContent={WebsiteBackupPageContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : WebsiteSecurity ? (
        <div className="third-component-section">
          <WebsiteSecurityAllComponents
            WebsiteSecurityContent={WebsiteSecurityContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : SeoTools ? (
        <div className="third-component-section">
          <SeoToolsAllComponents SeoToolsPageContent={SeoToolsPageContent} />
        </div>
      ) : (
        // ) : Sitebuiler ? (
        //   <div className="third-component-section">
        //     <SiteBuilderAllComponents />
        //   </div>
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
    </div>
  );
};

export default page;
