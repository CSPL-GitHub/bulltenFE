import { ServerDataApi } from "@/apis/ServerPageApi";
import APlusThemeOneComponentsJunction from "@/components/APlusThemesJunction/APlusThemeOne/APlusThemeOneComponentsJunction";
import APlusThemeTwoComponentsJunction from "@/components/APlusThemesJunction/APlusThemeTwo/APlusThemeTwoComponentsJunction";
import React from "react";

type Props = {};

const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {
  const decodedSlug = decodeURIComponent(servers);

  const ServerDataResponse = await ServerDataApi(decodedSlug);


  return (

    <> {ServerDataResponse?.result?.Active == true ? <>
      <div>
        {ServerDataResponse?.result?.data?.themes === "theme1" ? (
          <APlusThemeOneComponentsJunction
            aPlusResponse={ServerDataResponse?.result}
            decodedSlug={decodedSlug}
          />
        ) : (
          <APlusThemeTwoComponentsJunction
            aPlusResponse={ServerDataResponse?.result}
            decodedSlug={decodedSlug}
          />
        )}
      </div></> : null}</>

  );
};

export default page;
