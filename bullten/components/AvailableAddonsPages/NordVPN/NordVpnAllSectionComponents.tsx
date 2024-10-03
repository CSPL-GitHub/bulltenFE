import React from "react";
import NordVpnBannerComponent from "./NordVpnBannerComponent";
import NordVpnAdvantagesComponent from "./NordVpnAdvantagesComponent";
import NordVpnProductsComponent from "./NordVpnServceProducts";
import MapDataCenters from "./NordVpnDataCenters";

type Props = { decodedSlug: string; DataContent: any };

const NordVpnAllSectionComponents = ({ decodedSlug, DataContent }: Props) => {
  return (
    <div>
      <NordVpnBannerComponent BannerData={DataContent?.result?.data[0]} />
      <NordVpnAdvantagesComponent
        AdvantagesData={DataContent?.result?.data[0]}
      />
      {/* <MapDataCenters /> */}
      <NordVpnProductsComponent decodedSlug={decodedSlug} />
    </div>
  );
};

export default NordVpnAllSectionComponents;
