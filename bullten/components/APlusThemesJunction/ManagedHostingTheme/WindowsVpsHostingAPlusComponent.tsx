"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  LinuxVpsAccordionData: any;
}
const WindowsVpsHostingAPlusComponent: React.FC<Props> = ({
  LinuxVpsAccordionData,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  console.log(LinuxVpsAccordionData, "LinuxVpsAccordionData");
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-cover bg-center bg-[url('/cirl1.jpg')]">
      {/* bg-contain bg-center bg-[url('/hero-1-circle-right.png')] */}
      <div className=" container mx-auto w-full  py-4 lg:py-8 px-2 lg:px-8 ">
        <div className=" px-4 max-w-2xl w-full mx-auto">
          {LinuxVpsAccordionData?.heading && (
            <div
              className="w-full font-semibold lg:text-4xl text-2xl sm:text-center text-center tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: LinuxVpsAccordionData?.heading,
              }}
            />
          )}

          {LinuxVpsAccordionData?.description && (
            <div
              className="w-full tailwind-unreset sm:text-center text-center text-lg text-bullt-primary/[0.8]"
              dangerouslySetInnerHTML={{
                __html: LinuxVpsAccordionData?.description,
              }}
            />
          )}
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 h-auto mt-6">
          <div className="relative ">
            {/* <div className="absolute top-[350px]">
              <Image
                src="/choose_shape-2.png"
                alt="Heading Image"
                width={200}
                height={200}
                className="custom-bounce "
              />
            </div> */}
            {LinuxVpsAccordionData?.content.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full rounded-md border bg-white items-center p-3 my-3 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between p-2">
                  <div className="">
                    <div
                      className={`px-2 text-lg select-none ${
                        index === activeIndex ? "text-bullt-tertiary" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.heading }}
                    ></div>
                  </div>
                  <div className="relative w-[100px] flex justify-end items-center px-1">
                    {activeIndex === index ? (
                      <FiMinus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    ) : (
                      <FiPlus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="flex p-3 select-none text-md text-bullt-primary/[0.8]"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center px-4">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${LinuxVpsAccordionData?.image}`}
              alt="Accordion"
              className="w-full h-[300px] lg:h-[500px] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsVpsHostingAPlusComponent;
