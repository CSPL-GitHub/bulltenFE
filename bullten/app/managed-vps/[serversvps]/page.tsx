"use client";
import { ManagedVpsDataApi } from "@/apis/managedVpsApi";
import APlusThemeManagedVpsJunction from "@/components/APlusThemesJunction/ManagedVpsTheme/APlusThemeManagedVpsJunction";
import React from "react";

type Props = {};

const page = async ({
  params: { serversvps },
}: {
  params: { serversvps: string };
}) => {
  const decodedSlug = decodeURIComponent(serversvps);
  const ManagedDataResponse = await ManagedVpsDataApi(decodedSlug);

  return (
    <div>
      <APlusThemeManagedVpsJunction
        aPlusResponse={ManagedDataResponse?.result}
        decodedSlug={decodedSlug}
      />
    </div>
  );
};

export default page;
