"use client";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import SubHeadingComponents from "@/components/CommonComponents/HeadingComponents/SubHeadingComponents";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
type Props = {
  FaqSectionApiResponse: any;
};

const FaqQuestionComponent: React.FC<Props> = ({ FaqSectionApiResponse }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="scroll sm:w-1/2 space-y-2 py-6 h-[550px] overflow-y-auto sm:px-10">
      {FaqSectionApiResponse?.map((item: any, index: any) => (
        <div
          key={index}
          className="bg-bullt-secondary border border-bullt-secondary rounded-md shadow-md "
        >
          <button
            onClick={() => toggleOpen(index)}
            className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
          >
            {item?.heading ? (
              <SloganHeadingComponent
                alignmentType={1}
                paddingTop={1}
                hoverEffect="text-bullt-primary"
              >
                {item?.heading}
              </SloganHeadingComponent>
            ) : null}
            <FiPlus
              className={`text-bullt-text-quinary text-2xl cursor-pointer transform transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-2  border-t border-bullt-primary/[0.2]">
              {item?.description ? (
                <ParaGraphText
                  alignmentType={1}
                  paddingTop={1}
                  hoverEffect="text-bullt-primary"
                >
                  {item?.description}
                </ParaGraphText>
              ) : null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestionComponent;
