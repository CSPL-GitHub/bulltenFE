import { OurPatnarApi } from "@/apis/HomePageApis";
import OurPatnarTabComponent from "@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent";
import React from "react";

type Props = {};

const OurPatnarComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section className="w-full py-12 px-6  bg-bullt-quaternary/[0.03] rounded-md">
          <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between">
            <div className="lg:w-[70%] w-full px-4 sm:px-0">
              {data?.partner_data?.heading ? (
                <h2 className="text-[2rem] lg:text-[2.3rem] font-semibold text-gray-900">
                  {data?.partner_data?.heading}
                </h2>
              ) : null}
              {data?.partner_data?.description ? (
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                  {data?.partner_data?.description}
                </p>
              ) : null}
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <OurPatnarTabComponent data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OurPatnarComponent;
