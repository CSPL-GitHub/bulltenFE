import React from "react";
import Image from "next/image";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
type Props = {
  Logos: any;
};
const CustomerLogosComponent = async ({ Logos }: Props) => {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:py-10 py-6 px-4">
        <div className="flex flex-col sm:justify-center sm:items-center items-start">
          {Logos?.heading ? (
            <div className="lg:text-4xl text-2xl font-semibold text-bullt-primary">
              {Logos?.heading}
            </div>
          ) : null}
          {Logos?.description ? (
            <MainHeadingComponent alignmentType={2} paddingTop={1}>
              {Logos?.description}
            </MainHeadingComponent>
          ) : null}
        </div>
        {Logos?.customers ? (
          <div className="w-full grid sm:grid-cols-6 grid-cols-3 justify-center mt-2 sm:gap-4 gap-0">
            {Logos?.customers?.map((logo: any, index: number) => (
              <div
                key={index}
                className="text-center grayscale hover:grayscale-0 transition-all duration-100 ease-in-out py-2"
              >
                {logo?.image ? (
                  <div className="sm:h-[100px] h-[50px] lg:w-[170px] w-[100px] relative mx-auto">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.image}`}
                      alt={logo?.heading}
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
        ) : null}
      </div>
    </>
  );
};

export default CustomerLogosComponent;
