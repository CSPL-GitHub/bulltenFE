import {
  OverViewPageDataApi,
  OverViewPageTabsDataApi,
  OverViewSubPageDataApi,
  OverViewSubPagesTabsProductsApi,
} from "@/apis/AvailableAddons";
import SSlCertificatesSubPageAllComponentJunction from "@/components/AvailableAddonsPages/SSL-Certificates/DomainValidationPage/SSlCertificatesSubPageAllComponentJunction";

import React from "react";

type Props = {};

const page = async ({
  params: { servers, subServers },
}: {
  params: { servers: string; subServers: string };
}) => {
  // To get the main slug eg : http://localhost/manage-hosting/ssl-certificates
  const decodedSlug = decodeURIComponent(servers);

  // To get the main Subslug eg : http://localhost/manage-hosting/ssl-certificates/domination-validation
  const decodedSubSlug = decodeURIComponent(subServers);

  // To get the main page data to show the tabs on the every pages
  const OverViewPageDataContent = await OverViewPageDataApi(decodedSlug);

  // this is the api to get the tabs name and the sluges currently this is not used, we are getting tabs through main api
  // const OverViewPageTabsName = await OverViewPageTabsDataApi();

  // to get the All Components data for the subpages
  const OverViewSubPageDataContent = await OverViewSubPageDataApi(
    decodedSubSlug
  );
  return (
    <>
      <div className="sm:overflow-hidden overflow-x-hidden md:mt-[125px] mt-[105px]">
        <SSlCertificatesSubPageAllComponentJunction
          decodedSlug={decodedSlug}
          OverViewPageDataContent={OverViewPageDataContent}
          decodedSubSlug={decodedSubSlug}
          // TabsNames={OverViewPageTabsName?.result}
          SubPageContent={OverViewSubPageDataContent?.result?.data[0]}
        />
      </div>
    </>
  );
};

export default page;
