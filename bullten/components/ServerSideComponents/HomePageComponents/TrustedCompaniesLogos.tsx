import React from "react";
import Image from "next/image";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { trustedComponies } from "@/apis/HomePageApis";

const TrustedCompaniesLogos = async () => {
  const trustedComponiesData = await trustedComponies();
  const logos = trustedComponiesData?.result?.data?.trusted_company;
  console.log("dataLogos", logos);
  return (
    <div className="w-full py-10 px-6 lg:px-16">
      <div className="flex gap-1 justify-center items-center">
        <SloganHeadingComponent alignmentType={2}>
          {trustedComponiesData?.result?.data?.heading}
        </SloganHeadingComponent>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {logos?.map((logo: any, index: number) => (
          <div key={index} className="py-2 px-2">
            <div className="w-[200px] flex justify-center items-center border bg-white rounded-md p-4 bg-transparent">
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
  );
};

export default TrustedCompaniesLogos;
