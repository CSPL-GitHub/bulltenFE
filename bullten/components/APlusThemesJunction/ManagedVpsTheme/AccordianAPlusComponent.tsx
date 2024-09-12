"use client";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  AccordionData: any;
}

const AccordianAPlusComponent: React.FC<Props> = ({ AccordionData }) => {
  const [Description, setDescription] = useState<number | null>(0);

  const handleDescription = (index: number) => {
    setDescription(Description === index ? null : index);
  };
  return (
    <div
      className="container mx-auto w-full h-auto grid lg:grid-cols-2 grid-cols-1  gap-5 border-[1px]  py-4 lg:py-8 px-2 lg:px-8"
      style={{
        marginTop: `${AccordionData?.gap_top / 4}rem`,
        marginBottom: `${AccordionData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="flex items-center px-4">
        {AccordionData?.heading || AccordionData?.description ? (
          <div className="flex flex-col gap-7 md:items-start items-center lg:w-[80%] w-full">
            <div
              className="w-full font-semibold lg:text-4xl text-2xl sm:text-start text-center tailwind-unreset"
              dangerouslySetInnerHTML={{ __html: AccordionData?.heading }}
            />
            <div
              className="w-full tailwind-unreset  md:text-start text-center text-lg text-bullt-primary/[0.8]"
              dangerouslySetInnerHTML={{ __html: AccordionData?.description }}
            />
            <div className="">
              <button className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-5 py-2">
                Live Chat Now{" "}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div className="">
        {AccordionData?.content.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full rounded-md shadow-sm items-center bg-bullt-quaternary/[0.05] p-3 my-3 cursor-pointer"
              onClick={() => handleDescription(index)}
            >
              <div className=" flex justify-between p-2">
                <div className="w-[900px]">
                  <h1
                    className={`px-2 text-xl select-none ${
                      index === Description ? "text-bullt-tertiary" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.heading }}
                  ></h1>
                </div>
                <div className="relative w-[100px] flex justify-end items-center px-1">
                  <FiPlus
                    className={`text-bullt-tertiary text-2xl cursor-pointer transform transition-transform duration-300 ${
                      Description === index ? "rotate-45" : ""
                    }`}
                    onClick={() => handleDescription(index)}
                  />
                </div>
              </div>
              <div>
                {Description === index && (
                  <div className="">
                    <p
                      className="flex p-3 border-t border-bullt-tertiary select-none text-lg text-bullt-primary/[0.8]"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianAPlusComponent;
