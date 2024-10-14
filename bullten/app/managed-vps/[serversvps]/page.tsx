"use client";
import { ManagedVpsDataApi } from "@/apis/managedVpsApi";
import APlusThemeManagedVpsJunction from "@/components/APlusThemesJunction/ManagedVpsTheme/APlusThemeManagedVpsJunction";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = ({
  params: { serversvps },
}: {
  params: { serversvps: string };
}) => {
  const decodedSlug = decodeURIComponent(serversvps);
  const [ManagedDataResponse, setManagedDataResponse] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(ManagedDataResponse, "ManAgentHosting");
  const currencyCode = useSelector((state: any) => state.currency);
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await ManagedVpsDataApi(
          decodedSlug,
          currencyCode?.code?.slug
        );
        setManagedDataResponse(response);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (currencyCode?.code?.slug) {
      fetchPlans();
    }
  }, [currencyCode?.code?.slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      {ManagedDataResponse?.result?.Active == true ? (
        <div>
          <APlusThemeManagedVpsJunction
            aPlusResponse={ManagedDataResponse?.result}
            decodedSlug={decodedSlug}
          />
        </div>
      ) : null}
    </>
  );
};

export default page;
