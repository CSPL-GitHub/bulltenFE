import { OurPatnarApi } from "@/apis/HomePageApis";
import OurPatnarTabComponent from "@/components/ClientSideComponents/HomePageComponents/OurPatnarTabComponent";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import Image from "next/image";
import React from "react";

type Props = {};

const OurPatnarComponent = async (props: Props) => {
  const OurPatnarApiResponse = await OurPatnarApi();
  const data = OurPatnarApiResponse?.result;
  const img = require("../../../../public/about.jpg");

  return (
    <>
      {data?.Active === true ? (
        <section className="w-full lg:flex gap-4 py-20">
          <div className="lg:w-1/2 w-full">
            <div className="h-[550px] lg:w-full w-full relative ">
              <Image
                className="rounded-lg "
                src={img}
                alt="all"
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  objectPosition: "top",
                  inset: 0,
                }}
                fill={true}
              />
            </div>
          </div>
          <div className="container flex flex-col lg:w-1/2 gap-6 w-full">
            <div className="w-full flex flex-col gap-4 px-6">
              {data?.partner_data?.label ? (
                <>
                  <p className="text-bullt-tertiary text-xl">
                    {data?.partner_data?.label}
                  </p>
                </>
              ) : null}
              {data?.partner_data?.heading ? (
                <h2 className="text-[2rem] lg:text-[2.3rem] font-semibold text-bullt-primary">
                  {data?.partner_data?.heading}
                </h2>
              ) : null}
              {data?.partner_data?.description ? (
                <p className="text-lg sm:text-xl text-bullt-primary leading-relaxed ">
                  {data?.partner_data?.description}
                </p>
              ) : null}
            </div>
            <div className="w-full px-4">
              <OurPatnarTabComponent data={data?.partner_data} />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OurPatnarComponent;
