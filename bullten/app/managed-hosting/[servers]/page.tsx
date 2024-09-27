import React from "react";
import {
  OverViewPageDataApi,
  OverViewPageTabsDataApi,
} from "@/apis/AvailableAddons";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import APlusThemeManagedHostingJunction from "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction";
import OverViewPageAllComponentJunction from "@/components/AvailableAddonsPages/SSL-Certificates/OverviewPage/OverViewPageAllComponentJunction";
import XoviNowAllComponentsJunction from "@/components/AvailableAddonsPages/Xovi-Now/XoviNowAllComponentsJunction";

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
  // const OverViewPageTabsName = await OverViewPageTabsDataApi();
  const isThirdPageConditionMet = decodedSlug === "xovi-now";

  return (
    <>
      {decodedSlug === OverViewPageDataContent?.result?.data?.slug ? (
        <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
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
          {/* <XoviNowAllComponentsJunction /> */}
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
  );
};

export default page;
