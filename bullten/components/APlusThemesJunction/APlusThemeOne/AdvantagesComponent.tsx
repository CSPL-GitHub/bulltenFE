import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdvantagesAPLusComponent = ({ AdvantagesData }: any) => {
  return (
    <div className="bg-bullt-quaternary/[0.05] container mx-auto px-4 py-8 space-y-8">
      <div className="w-full py-1 md:py-4 flex flex-col md:flex-row justify-around">
        {AdvantagesData?.heading ? (
          <div
            className="w-full md:w-2/4 text-bullt-primary text-start sm:text-4xl text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.heading }}
          />
        ) : null}
        {AdvantagesData?.description ? (
          <div
            className="w-full md:w-2/4 mt-4 md:mt-0 text-start text-bullt-primary/[0.7] tailwind-unreset "
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.description }}
          />
        ) : null}
      </div>
      {AdvantagesData?.content?.map((section: any, index: number) => (
        <div
          key={section.id}
          className={`w-full mx-auto flex flex-col md:flex-row items-center gap-3 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.image}`}
              alt={section?.heading}
              style={{
                objectFit: "contain",
              }}
              className="w-full h-[300px] lg:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 ">
            {section?.heading ? (
              <div
                className="w-full text-bullt-primary text-start sm:text-4xl text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: section?.heading }}
              />
            ) : null}
            {section?.description ? (
              <div
                className="py-3 text-justify text-bullt-primary tailwind-unreset "
                dangerouslySetInnerHTML={{ __html: section?.description }}
              />
            ) : null}
            {section?.button_text ? (
              <div>
                <Link
                  href={section?.button_link}
                  className="flex justify-start items-center gap-2 px-2 py-2 text-black rounded cursor-pointer font-semibold"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {section?.button_text}
                  </p>

                  <AiOutlineArrowRight size={20} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvantagesAPLusComponent;
