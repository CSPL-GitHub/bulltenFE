import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SupportContent = {
  data: {
    heading: string;
    description: string;
    supports: {
      icon: string;
      alt_text: string;
      title: string;
      description: string;
      buttontext: string;
      btnlink: string;
    }[];
  };
};

type Props = {
  supportContent: SupportContent;
};

const SupportSection = ({ supportContent }: Props) => {
  console.log(supportContent?.data?.supports, "supportContent");

  return (
    <div className="bg-bullt-quaternary/[0.02] py-16 px-6 lg:px-16 w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="lg:col-span-1 md:col-span-3 col-span-1 ">
          {supportContent?.data?.heading && (
            <SubHeadingComponents paddingTop={2} alignmentType={1}>
              {supportContent?.data?.heading}
            </SubHeadingComponents>
          )}

          {supportContent?.data?.description && (
            <ParaGraphText paddingTop={1}>
              {supportContent?.data?.description}
            </ParaGraphText>
          )}
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportContent?.data?.supports.map((data, index) => (
            <div
              key={index}
              className="bg-bullt-quaternary/[0.02] hover:bg-bullt-secondary p-6 rounded-lg shadow-md hover:shadow-md border-b-4 border-bullt-quaternary/[0.02] hover:border-b-4 hover:border-bullt-tertiary"
            >
              <div className="flex items-center mb-2">
                <div className="rounded-full p-2 mr-2 bg-bullt-quaternary/[0.05] ">
                  {data.icon && (
                    <div className="w-14 h-14 relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.icon}`}
                        alt={data?.alt_text}
                        className="w-full h-full absolute top-0 start-0 rounded-full object-cover"
                        fill={true}
                      />
                    </div>
                  )}
                </div>

                {data.title && (
                  <SloganHeadingComponent>{data?.title}</SloganHeadingComponent>
                )}
              </div>
              {data?.description && (
                <ParaGraphText paddingTop={1} alignmentType={1}>
                  {data?.description}
                </ParaGraphText>
              )}

              {data?.buttontext && (
                <Link
                  href={data?.btnlink}
                  className="text-bullt-quaternary mt-2"
                >
                  <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                    {data?.buttontext} &rarr;
                  </SloganHeadingComponent>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
