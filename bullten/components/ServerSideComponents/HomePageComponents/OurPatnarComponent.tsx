import { OurPatnarApi } from '@/apis/HomePageApis'
import OurPatnarTabComponent from '@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent'
import React from 'react'

type Props = {}

const OurPatnarComponent =async (props: Props) => {
  const OurPatnarApiResponse= await OurPatnarApi()
  const data=OurPatnarApiResponse?.result?.[0];
  return (
    <section className="bg-gray-50 py-10 sm:px-12 px-4">
      <div className="mx-auto sm:text-center">
        <h2 className="sm:text-4xl text-2xl font-bold text-gray-800 mb-4">{data?.heading}</h2>
        <p className="text-gray-600 mb-7">
         {data?.description}
        </p>
        <OurPatnarTabComponent data={data}/>
      </div>
    </section>
  )
}

export default OurPatnarComponent