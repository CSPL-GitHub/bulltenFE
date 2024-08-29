import { OurPatnarApi } from "@/apis/HomePageApis";
import OurPatnarTabComponent from "@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import React from "react";

type Props = {};

const OurPatnarComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section className="w-full sm:flex justify-center items-center gap-4 px-4 sm:py-4 py-0">
          <div className="text-center w-full">
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
            {data?.partner_data?.tab_one && (
                <MainHeadingComponent alignmentType={2}>
                  {data?.partner_data?.tab_one}
                </MainHeadingComponent>
              )}

            <div className="sm:w-[100%] w-full ">
              <OurPatnarTabComponent data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OurPatnarComponent;
