import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type SupportContent = {
  Active: boolean;
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
    <>
      {supportContent?.Active === true ? (
        <div className=" w-full py-12 px-6">
          <div className="w-full mx-auto flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/5 w-full">
              {supportContent?.data?.heading && (
                <MainHeadingComponent>
                  {supportContent?.data?.heading}
                </MainHeadingComponent>
              )}
              {supportContent?.data?.description && (
                <ParaGraphText alignmentType={2} paddingTop={1}>
                  {supportContent?.data?.description}
                </ParaGraphText>
              )}
            </div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              {supportContent?.data?.supports?.map((data, index) => (
                <div
                  key={index}
                  className=" px-3 py-6 flex flex-col items-start justify-between rounded-lg hover:bg-bullt-secondary border border-gray-200 hover:shadow-lg transition-shadow duration-300"
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
                    <h3 className="text-lg font-semibold text-bullt-text-primary">
                      {data?.title}
                    </h3>
                  </div>
                  {
                    <ParaGraphText alignmentType={1} paddingTop={1}>
                      {data?.description}
                    </ParaGraphText>
                  }
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
      ) : null}
    </>
  );
};

export default SupportSection;
