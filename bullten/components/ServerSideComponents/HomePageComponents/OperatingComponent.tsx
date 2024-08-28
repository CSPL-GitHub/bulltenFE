import { OurPatnarApi } from "@/apis/HomePageApis";
import OperatingCartComponent from "@/components/ClientSideComponents/HomePageComponents/OperatingCartComponent";
import React from "react";

type Props = {};

const OperatingComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section className="w-full sm:flex justify-center items-center gap-4 px-4 py-10">
          <div className="sm:flex w-full">
            {/* <div className="w-full sm:w-[30%] flex flex-col justify-center sm:py-0 py-4">
              {data?.partner_data?.label && (
                <SloganHeadingComponent alignmentType={1} paddingTop={1}>
                  {data?.partner_data?.label}
                </SloganHeadingComponent>  
              )}
              {data?.partner_data?.heading && (
                <h2 className="text-[2rem] lg:text-[2.3rem] font-semibold text-bullt-primary">
                  {data?.partner_data?.heading}
                </h2>
              )}
              {data?.partner_data?.description && (
                <p className="text-lg sm:text-xl text-bullt-primary leading-relaxed">
                  {data?.partner_data?.description}
                </p>
              )}
              
            </div> */}
            <div className="sm:w-[100%] w-full ">
              <OperatingCartComponent data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OperatingComponent;
