import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  return (
    <div className="py-16 px-6 lg:px-16 w-full bg-blue-100/50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          {supportContent?.data?.heading && (
            <MainHeadingComponent>
              {supportContent?.data?.heading}
            </MainHeadingComponent>
          )}
          {supportContent?.data?.description && (
            <p className="text-bullt-text-quaternary text-sm">
              {supportContent?.data?.description}
            </p>
          )}
        </div>

        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {supportContent?.data?.supports?.map((data, index) => (
            <div
              key={index}
              className="hover:bg-transparent bg-slate-50 p-6  flex flex-col items-start justify-between rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-bullt-quaternary/10 rounded-full mr-3">
                  {data?.icon && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.icon}`}
                      alt={data?.alt_text}
                      width={40}
                      height={40}
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {data?.title}
                </h3>
              </div>
              <p className="text-bullt-text-quaternary flex items-start justify-start text-sm mb-4">
                {data?.description}
              </p>
              {data?.buttontext && (
                <Link href={data?.btnlink}>
                  <p className="text-bullt-tertiary font-bold text-sm  hover:text-bullt-quinary transition-colors duration-300 flex items-center">
                    {data?.buttontext}{" "}
                    <FaLongArrowAltRight className="ms-1" size={10} />
                  </p>
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
