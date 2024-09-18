"use client";
import { ManagedHostingDataApi } from "@/apis/ManagedHostingApi";
import APlusThemeManagedHostingJunction from "@/components/APlusThemesJunction/ManagedHostingTheme/APlusThemeManagedHostingJunction";
import React from "react";

type Props = {};

const page = async ({
    params: { servers },
}: {
    params: { servers: string };
}) => {
    const decodedSlug = decodeURIComponent(servers);
    const ManagedDataResponse = await ManagedHostingDataApi(decodedSlug);

    return (
        <>
            {ManagedDataResponse?.result?.Active == true ? <><div>
                <APlusThemeManagedHostingJunction
                    aPlusResponse={ManagedDataResponse?.result}
                    decodedSlug={decodedSlug}/>
            </div>
            </> : null}
        </>

    );
};

export default page;
