import React from "react";
import {
  OverViewPageDataApi,
  OverViewPageTabsDataApi,
  XoviNowPageApi,
} from "@/apis/AvailableAddons";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import APlusThemeManagedHostingJunction from "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction";
import OverViewPageAllComponentJunction from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageAllComponentJunction";
import XoviNowAllComponentsJunction from "@/components/AvailableAddonsPages/Xovi-Now/XoviNowAllComponentsJunction";
// import NordVpnAllSectionComponents from "@/components/AvailableAddonsPages/NordVPN/NordVpnAllSectionComponents";
// import ProfessionalEmailsAllComponents from "@/components/AvailableAddonsPages/ProfessionalEmail/ProfessionalEmailsAllComponents";
// import WebsiteBackupAllComponents from "@/components/AvailableAddonsPages/WebsiteBackup/WebsiteBackupAllComponents";
// import WebsiteSecurityAllComponents from "@/components/AvailableAddonsPages/WebsiteSecurity/WebsiteSecurityAllComponents";

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
  console.log(XoviNowPageContent, "XoviNowPageContent");
  // const OverViewPageTabsName = await OverViewPageTabsDataApi();
  const isThirdPageConditionMet = decodedSlug === "xovi-now";
  const nordVpn = decodedSlug === "nord-vpn";
  const Email = decodedSlug === "professional-email";
  const Website = decodedSlug === "website-backup";
  const WebsiteSecurity = decodedSlug === "website-security";
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
          />
        </div>
      ) : (
        // ) : nordVpn ? (
        //   <div className="third-component-section">
        //     <NordVpnAllSectionComponents />
        //   </div>
        // ) : Email ? (
        //   <div className="third-component-section">
        //     <ProfessionalEmailsAllComponents />
        //   </div>
        // ) : Website ? (
        //   <div className="third-component-section">
        //     <WebsiteBackupAllComponents />
        //   </div>
        // ) : WebsiteSecurity ? (
        //   <div className="third-component-section">
        //     <WebsiteSecurityAllComponents />
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
