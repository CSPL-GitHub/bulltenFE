import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdvantagesAplusThemeTwoComponent = ({ AdvantagesData }: any) => {
  return (
    <div className="py-4 sm:py-8 container mx-auto lg:py-8 px-4 lg:px-8 space-y-8">
      <div className="flex flex-col items-center ">
        {/* <span className="text-lg text-bullt-quaternary font-medium text-center">
          Advantages
        </span> */}

        {AdvantagesData?.heading ? (
          <div
            className="w-full text-center sm:text-4xl text-2xl font-semibold text-bullt-secondary"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.heading }}
          />
        ) : null}
        {AdvantagesData?.description ? (
          <div
            className="w-full text-center text-bullt-secondary text-lg py-4"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.description }}
          />
        ) : null}
      </div>
      {AdvantagesData?.content?.map((section: any, index: number) => (
        <div
          key={section.id}
          className={`w-full mx-auto flex flex-col md:flex-row items-center gap-3 md:px-6 px-0 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:[50%]">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.image}`}
              alt={section?.heading}
              className="w-full h-[250px] lg:h-[350px] object-cover object-left rounded-xl"
            />
          </div>
          <div className="w-full md:[50%] md:px-16 lg:mt-0 mt-4 px-0">
            <div className="" />
            {section?.heading ? (
              <div
                className="w-full text-bullt-secondary text-start sm:text-3xl text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: section?.heading }}
              />
            ) : null}
            {section?.description ? (
              <div
                className="py-3 text-justify text-bullt-secondary text-lg"
                dangerouslySetInnerHTML={{ __html: section?.description }}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesAplusThemeTwoComponent;
