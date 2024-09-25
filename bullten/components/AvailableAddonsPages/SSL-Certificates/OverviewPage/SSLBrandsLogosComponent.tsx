import React from "react";
import Image from "next/image";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { trustedComponies } from "@/apis/HomePageApis";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
type Props = { DataContent: any };

const SSLBrandsLogosComponent = ({ DataContent }: Props) => {


  return (
    <>
      {DataContent?.online_security[0]?.online_security ? (
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex flex-col sm:justify-center sm:items-center ">
            {DataContent?.online_security[0]?.online_security.online_heading ? (
              <div
                className=" text-center text-2xl sm:text-4xl font-bold py-2 text-gray-800"
                dangerouslySetInnerHTML={{
                  __html:
                    DataContent?.Multi_certificate[0]?.multiple_certificate_data
                      ?.heading,
                }}
              />
            ) : null}
          </div>

          <div className="w-full grid sm:grid-cols-3 grid-cols-3 justify-center mt-2 sm:gap-4 gap-0">
            {DataContent?.online_security[0]?.online_security?.online_security_data?.map(
              (logo: any, index: number) => (
                <div
                  key={index}
                  className="text-center hover:bg-[#F4F5F8]  grayscale hover:grayscale-0 transition-all duration-100 ease-in-out py-2"
                >
                  {logo?.image ? (
                    <div className="sm:h-[150px] h-[50px] lg:w-[170px] w-[100px] relative mx-auto">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.image}`}
                        alt={logo?.title}
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
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SSLBrandsLogosComponent;
