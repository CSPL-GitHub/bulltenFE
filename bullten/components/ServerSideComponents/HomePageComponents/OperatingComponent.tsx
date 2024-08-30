import { OurPatnarApi } from "@/apis/HomePageApis";
import OperatingCartComponent from "@/components/ClientSideComponents/HomePageComponents/OperatingCartComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import React from "react";

type Props = {};

const OperatingComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section className="w-full sm:flex justify-center items-center gap-4 px-4 sm:py-4 py-2">
          <div className="text-center w-full">
           
            {data?.partner_data?.tab_one && (
              <MainHeadingComponent alignmentType={2}>
                {data?.partner_data?.tab_two}
              </MainHeadingComponent>
            )}
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
