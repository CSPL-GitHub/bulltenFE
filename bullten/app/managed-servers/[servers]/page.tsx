import { ServerDataApi } from '@/apis/ServerPageApi';
import APlusThemeOneComponentsJunction from '@/components/APlusThemesJunction/APlusThemeOne/APlusThemeOneComponentsJunction';
import React from 'react'

type Props = {}

const page = async ({
  params: { servers },
}: {
  params: { servers: string };
}) => {

  const decodedSlug = decodeURIComponent(servers);

  const ServerDataResponse = await ServerDataApi(decodedSlug);
  // console.log("first server", ServerDataResponse);
  // console.log("slug server", decodedSlug)

  return (
    <div>
      {ServerDataResponse?.result?.data?.themes === "theme1" ?
        <APlusThemeOneComponentsJunction
          aPlusResponse={ServerDataResponse?.result}
          decodedSlug={decodedSlug}
        /> : null
      }
    </div>
  )
}

export default page