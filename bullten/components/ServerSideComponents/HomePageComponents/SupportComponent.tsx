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
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center px-2">
      {supportContent?.data?.supports?.map((data, index) => (
        <div
          key={index}
          className="px-5 md:px-0 lg:px-5  lg:py-6 py-6 md:py-3 flex flex-col items-start justify-between border-b-2  border-bullt-secondary hover:bg-bullt-secondary  hover:border-b-3 hover:border-bullt-quaternary transition-shadow duration-300"
        >
          <div className="flex lg:flex-row md:flex-col flex-row lg:items-start md:items-center items-start mb-4 gap-5">
            <div className="p-6 md:p-3 lg:p-4 bg-bullt-quaternary/10 rounded-full w-[25%] md:w-[33%] lg:w-[20%] ">
              {data?.icon && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.icon}`}
                  alt={data?.alt_text}
                  width={50}
                  height={50}
                />
              )}
            </div>

            <div className="lg:w-[60%] md:w-[100%] w-[60%] ">
              {data?.title ? (
                <p className=" lg:text-xl md:text-xl text-lg font-semibold lg:text-left md:text-center text-left">
                  {data?.title}
                </p>
              ) : null}

              {data?.description ? (
                <p className="py-3 text-lg md:text-md text-md lg:text-left md:text-center text-left">
                  {data?.description}
                </p>
              ) : null}

              {data?.buttontext && (
                <Link href={data?.btnlink} className="text-end">
                  <p className="lg:text-xl md:text-xl text-lg text-bullt-quaternary  flex lg:justify-start md:justify-center justify-start items-center gap-2 ">
                    {data?.buttontext}
                    <FaLongArrowAltRight className="ms-1" size={17} />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportSection;
