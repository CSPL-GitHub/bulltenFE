import React from "react";
import Image from "next/image";

type Props = {
  AdvantagesData: any;
};
const NordVpnAdvantagesComponent = ({ AdvantagesData }: Props) => {
  return (
    <div className="bg-bullt-quaternary/[0.02] py-6 lg:py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center ">
          {AdvantagesData?.Advantage_heading ? (
            <div
              className="w-full text-center sm:text-4xl text-2xl font-bold pb-6"
              dangerouslySetInnerHTML={{
                __html: AdvantagesData?.Advantage_heading,
              }}
            />
          ) : null}
          {AdvantagesData?.Advantage_description ? (
            <div
              className="w-full text-center text-bullt-primary/[0.8] text-lg py-4"
              dangerouslySetInnerHTML={{
                __html: AdvantagesData?.Advantage_description,
              }}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-8">
          {AdvantagesData?.advantage?.map((section: any, index: number) => (
            <div
              key={index}
              className={`w-full mx-auto flex flex-col md:flex-row items-center gap-3  ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:[50%] lg:px-0 px-4">
                {section?.img && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.img}`}
                    alt={section?.heading}
                    className="w-full h-[300px] lg:h-[400px] lg:object-contain object-cover rounded-xl"
                  />
                )}
              </div>
              <div className="w-full md:[50%] px-4">
                {section?.heading ? (
                  <div
                    className="w-full text-bullt-primary text-start sm:text-3xl text-2xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: section?.heading }}
                  />
                ) : null}
                {section?.description ? (
                  <div
                    className="py-3 text-justify text-bullt-primary/[0.8] text-lg"
                    dangerouslySetInnerHTML={{ __html: section?.description }}
                  />
                ) : null}

                {/* Key Points */}
                {section?.list ? (
                  <ul className="list-disc pl-5 space-y-1 text-bullt-primary/[0.8] text-lg">
                    {section?.list?.map((point: any, idx: number) => (
                      <li key={idx}>{point?.heading}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NordVpnAdvantagesComponent;
