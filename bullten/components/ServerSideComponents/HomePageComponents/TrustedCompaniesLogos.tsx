import React from "react";
import Image from "next/image";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { trustedComponies } from "@/apis/HomePageApis";

const TrustedCompaniesLogos = async () => {
  const trustedComponiesData = await trustedComponies();
  console.log(trustedComponiesData?.result?.Active, "TrustedCompanies");
  const logos = trustedComponiesData?.result?.data?.trusted_company;
  return (
    <>
      {trustedComponiesData?.result?.Active === true ? (
        <div className="w-full mx-auto px-6">
          <div className="flex gap-1 justify-center items-center">
            <SloganHeadingComponent alignmentType={2}>
              {trustedComponiesData?.result?.data?.heading}
            </SloganHeadingComponent>
          </div>
          <div className="flex flex-wrap md:justify-center justify-between">
            {logos?.map((logo: any, index: number) => (
              <div key={index} className="py-2 px-2">
                <div className="lg:w-[200px] w-[100px] bg-white/[0.3] flex justify-center items-center rounded-md p-2">
                  <div className="h-[30px] w-full relative">
                    {logo?.img ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.img}`}
                        alt={logo?.alt_text}
                        style={{
                          position: "absolute",
                          objectFit: "contain",
                          inset: 0,
                        }}
                        fill={true}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TrustedCompaniesLogos;
