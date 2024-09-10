import { OurPatnarApi } from "@/apis/HomePageApis";
import OperatingCartComponent from "@/components/ClientSideComponents/HomePageComponents/OperatingCartComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import React from "react";

type Props = {
  color: any;
};

const OperatingComponent: React.FC<Props> = async ({ color }) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section
          className={`container mx-auto w-full sm:flex justify-center items-center gap-4 px-4 sm:pb-0 pb-2 ${
            color ? `` : ``
          }`}
        >
          <div className="text-center w-full">
            {data?.partner_data?.tab_one && (
              // <MainHeadingComponent alignmentType={2} paddingTop={1}>
              //   {data?.partner_data?.tab_two}
              // </MainHeadingComponent>
              <h2
                className={`flex items-center justify-center text-center text-[2rem] lg:text-[2.3rem] font-bold leading-[45px]} ${
                  color ? "text-bullt-secondary" : "text-bullt-primary"
                }`}
              >
                {data?.partner_data?.tab_two}
              </h2>
            )}
            <div className="sm:w-[100%] w-full ">
              <OperatingCartComponent color={color} data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OperatingComponent;
