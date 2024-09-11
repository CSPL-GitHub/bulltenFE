"use client";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  AccordionData: any;
}

const AccordianAPlusThemeTwoComponent: React.FC<Props> = ({
  AccordionData,
}) => {
  const [Description, setDescription] = useState<number | null>(0);

  const handleDescription = (index: number) => {
    setDescription(Description === index ? null : index);
  };
  return (
    <div
      className="container mx-auto w-full h-auto grid lg:grid-cols-2 grid-cols-1  gap-5  py-4 lg:py-8 px-2 lg:px-8"
      style={{
        marginTop: `${AccordionData?.gap_top / 4}rem`,
        marginBottom: `${AccordionData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="flex items-center px-4">
        {AccordionData?.heading || AccordionData?.description ? (
          <div className="flex flex-col gap-7 items-center lg:w-[80%] w-full">
            <div
              className="w-full flex flex-col lg:justify-start justify-center  text-white font-semibold sm:text-4xl text-2xl  tailwind-unreset"
              dangerouslySetInnerHTML={{ __html: AccordionData?.heading }}
            />
            <div
              className="w-full flex flex-col items-start tailwind-unreset text-lg text-white"
              dangerouslySetInnerHTML={{ __html: AccordionData?.description }}
            />
            <HomePageButtonOne
              alignmentType={1}
              buttonText={"Live Chat Now "}
              route={"#"}
            />
          </div>
        ) : null}
      </div>

      <div className="">
        {AccordionData?.content.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full rounded-md shadow-sm items-center border-bullt-secondary/[0.2] border-[1px] p-3 my-3 cursor-pointer backdrop-filter backdrop-blur-xl bg-opacity-20 bg-[#262632]"
              onClick={() => handleDescription(index)}
            >
              <div className=" flex justify-between p-2">
                <div className="w-[900px]">
                  <div
                    className={`px-2 text-xl select-none text-white ${
                      index === Description ? "text-bullt-tertiary" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.heading }}
                  ></div>
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
                  <div
                    className="flex p-3 border-t border-bullt-tertiary select-none text-lg text-white"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianAPlusThemeTwoComponent;
