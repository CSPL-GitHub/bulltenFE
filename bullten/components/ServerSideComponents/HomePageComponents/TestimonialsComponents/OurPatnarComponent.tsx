import { OurPatnarApi } from "@/apis/HomePageApis";
import OurPatnarTabComponent from "@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import React from "react";

type Props = {};

const OurPatnarComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;

  return (
    <>
      {data?.Active === true ? (
        <section
          className="w-full py-6 px-6"
          style={{
            backgroundImage: `url(cloud-hosting-hero-bg.svg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="container flex flex-wrap py-4 mt-8">
            <div className="lg:w-1/2 w-full px-4 lg:py-6">
              {data?.partner_data?.label ? <><p className="text-bullt-tertiary text-xl px-4 py-4">
                {data?.partner_data?.label}</p></> : null}
              {data?.partner_data?.heading ? (
                <h2 className="text-[2rem] lg:text-[2.3rem] font-semibold text-bullt-secondary lg:py-0 py-6">
                  {data?.partner_data?.heading}
                </h2>
              ) : null}
              {data?.partner_data?.description ? (
                <p className="text-lg sm:text-xl text-bullt-secondary leading-relaxed mb-8">
                  {data?.partner_data?.description}
                </p>
              ) : null}
            </div>
            <div className="w-full flex lg:w-1/2 justify-center">
              <OurPatnarTabComponent data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OurPatnarComponent;
