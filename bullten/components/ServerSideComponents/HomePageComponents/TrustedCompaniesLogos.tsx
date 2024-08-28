import React from "react";
import Image from "next/image";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { trustedComponies } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";

const TrustedCompaniesLogos = async () => {
  const trustedComponiesData = await trustedComponies();
  console.log(trustedComponiesData?.result?.Active, "TrustedCompanies");
  const logos = trustedComponiesData?.result?.data?.trusted_company;

  return (
    <>
      {trustedComponiesData?.result?.Active === true ? (
        <div className="w-full mx-auto py-12 px-6">
          <div className="flex flex-col gap-1 justify-center items-center">
            <SloganHeadingComponent alignmentType={2} paddingTop={1}>
              Companies we serve
            </SloganHeadingComponent>

            <MainHeadingComponent alignmentType={2} paddingTop={1}>
              {trustedComponiesData?.result?.data?.heading}
            </MainHeadingComponent>
          </div>

          <div className="w-full grid grid-cols-4 justify-center mt-4 gap-4">
            {logos?.map((logo: any, index: number) => (
              <div
                key={index}
                className="text-center hover:bg-[#F4F5F8]  grayscale hover:grayscale-0 transition-all duration-100 ease-in-out py-2"
              >
                {logo?.img ? (
                  <div className="h-[100px] lg:w-[170px] w-[100px] relative mx-auto">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.img}`}
                      alt="all"
                      className=""
                      style={{
                        position: "absolute",
                        objectFit: "contain",
                        inset: 0,
                      }}
                      fill={true}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TrustedCompaniesLogos;
