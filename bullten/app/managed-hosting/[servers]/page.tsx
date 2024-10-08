import React from "react";
import { OverViewPageDataApi } from "@/apis/AvailableAddons";
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
import SiteBuilderAllComponents from "@/components/AvailableAddonsPages/SiteBuilder/SiteBuilderAllComponent";
import { SiteBuilderPageApi } from "@/apis/SiteBuilderApi";
import SiteAndServerMonitoringAllComponent from "@/components/AvailableAddonsPages/SiteAndServerMonitoring/SiteAndServerMonitoringAllComponent";
import { SiteMonitoringPageApi } from "@/apis/SiteAndServerMonitoring";

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
  const SiteBuilderContent = await SiteBuilderPageApi(decodedSlug);
  const SiteMonitoringContent = await SiteMonitoringPageApi(decodedSlug);
  const XoviNow = decodedSlug === XoviNowPageContent?.result?.data[0]?.slug;
  const nordVpn = decodedSlug === NordVpnPageContent?.result?.data[0]?.slug;

  const ProfessionalEmail =
    decodedSlug === professionalEmailPageContent?.result?.data[0]?.slug;
  const WebsiteBackup =
    decodedSlug === WebsiteBackupPageContent?.result?.data[0]?.slug;
  const WebsiteSecurity =
    decodedSlug === WebsiteSecurityContent?.result?.data[0]?.slug;
  const SeoTools =
    decodedSlug === SeoToolsPageContent?.result?.data?.PlanDetails[0]?.slug;

  const Sitebuilder =
    decodedSlug === SiteBuilderContent?.result?.seo_data[0]?.slug;

  const SiteAndServerMonitoring = decodedSlug === "site-server-monitoring";
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
      ) : XoviNow ? (
        <div className="">
          <XoviNowAllComponentsJunction
            DataContent={XoviNowPageContent?.result?.data[0]}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : nordVpn ? (
        <div className="">
          <NordVpnAllSectionComponents
            decodedSlug={decodedSlug}
            DataContent={NordVpnPageContent}
          />
        </div>
      ) : ProfessionalEmail ? (
        <div className="">
          <ProfessionalEmailsAllComponents
            professionalEmailPageContent={professionalEmailPageContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : WebsiteBackup ? (
        <div className="">
          <WebsiteBackupAllComponents
            WebsiteBackupPageContent={WebsiteBackupPageContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : WebsiteSecurity ? (
        <div className="">
          <WebsiteSecurityAllComponents
            WebsiteSecurityContent={WebsiteSecurityContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : SeoTools ? (
        <div className="">
          <SeoToolsAllComponents
            SeoToolsPageContent={SeoToolsPageContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : Sitebuilder ? (
        <div className="">
          <SiteBuilderAllComponents
            SiteBuilderContent={SiteBuilderContent}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : SiteAndServerMonitoring ? (
        <div className="">
          <SiteAndServerMonitoringAllComponent
            decodedSlug={decodedSlug}
            SiteMonitoringContent={SiteMonitoringContent}
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
    </div>
  );
};

export default page;
