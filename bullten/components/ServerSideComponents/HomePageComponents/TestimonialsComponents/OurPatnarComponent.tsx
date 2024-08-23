import { OurPatnarApi } from '@/apis/HomePageApis'
import OurPatnarTabComponent from '@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent'
import React from 'react'

type Props = {}

const OurPatnarComponent =async (props: Props) => {
  const OurPatnarApiResponse= await OurPatnarApi()
  const data=OurPatnarApiResponse?.result;
  return (
    <>{data?.Active=== true ?<><section className="bg-gray-50 py-10 w-full px-4">
        <div className="mx-auto sm:text-center">
          {data?.partner_data?.heading ?<><h2 className="sm:text-4xl text-2xl font-bold text-gray-800 mb-4">{data?.partner_data?.heading}</h2></>:null}
          {data?.partner_data?.description?<><p className="text-gray-600 mb-7">
           {data?.partner_data?.description}
          </p></>:null}  
          <OurPatnarTabComponent data={data?.partner_data}/>
        </div>
      </section></>:null}</>
    
  )
}

export default OurPatnarComponent