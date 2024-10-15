import React from "react";
import dynamic from "next/dynamic";
import { OverViewPageDataApi } from "@/apis/AvailableAddons";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import { XoviNowPageApi } from "@/apis/XoviNowPageAPIs/XoviNowAPIs";
import { NordVpnPageApi } from "@/apis/NordVpnPageAPIs";
import { ProfessionalEmailPageApi } from "@/apis/ProfessionalEmail";
import { WebsiteBackupPageApi } from "@/apis/WebsiteBackupPageApi";
import { WebsiteSecurityPageApi } from "@/apis/WebsiteSecurityApi";
import { SeoToolsPageApi } from "@/apis/SeoToolsApi";
import { SiteBuilderPageApi } from "@/apis/SiteBuilderApi";
import { SiteMonitoringPageApi } from "@/apis/SiteAndServerMonitoring";
import { cookies } from "next/headers";
import Skeleton from "react-loading-skeleton";

// Dynamically import components
const APlusThemeManagedHostingJunction = dynamic(
  () =>
    import(
      "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const OverViewPageAllComponentJunction = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageAllComponentJunction"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const XoviNowAllComponentsJunction = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/Xovi-Now/XoviNowAllComponentsJunction"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const NordVpnAllSectionComponents = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/NordVPN/NordVpnAllSectionComponents"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const ProfessionalEmailsAllComponents = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/ProfessionalEmail/ProfessionalEmailsAllComponents"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const WebsiteBackupAllComponents = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/WebsiteBackup/WebsiteBackupAllComponents"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const WebsiteSecurityAllComponents = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/WebsiteSecurity/WebsiteSecurityAllComponents"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const SeoToolsAllComponents = dynamic(
  () =>
    import("@/components/AvailableAddonsPages/SeoTools/SeoToolsAllComponents"),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const SiteBuilderAllComponents = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/SiteBuilder/SiteBuilderAllComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const SiteAndServerMonitoringAllComponent = dynamic(
  () =>
    import(
      "@/components/AvailableAddonsPages/SiteAndServerMonitoring/SiteAndServerMonitoringAllComponent"
    ),
  {
    loading: () => <Skeleton height="50%" width="100%" />,
  }
);

const Page = async ({
  params: { servers, subServers },
}: {
  params: { servers: string; subServers: string };
}) => {
  const cookieStore = cookies();
  const currency: any = cookieStore.get("BulltenCurrency")?.value;
  let currencySlug;
  try {
    const parsedCurrency = JSON.parse(currency);
    currencySlug = parsedCurrency?.slug;
  } catch (error) {
    console.error("Error parsing currency cookie:", error);
  }
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
  const WebsiteSecurityContent = await WebsiteSecurityPageApi(
    currencySlug,
    decodedSlug
  );
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
          {OverViewPageDataContent?.result?.Active === true && (
            <OverViewPageAllComponentJunction
              OverViewPageDataContent={OverViewPageDataContent}
              decodedSlug={decodedSlug}
              decodedSubSlug={decodedSubSlug}
            />
          )}
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
          {ManagedDataResponse?.result?.Active === true && (
            <div>
              <APlusThemeManagedHostingJunction
                aPlusResponse={ManagedDataResponse?.result}
                decodedSlug={decodedSlug}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
