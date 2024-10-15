"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = { FaqData: any };

const UseCasesFaqComponent = ({ FaqData }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const halfIndex = Math.ceil(FaqData?.content.length / 2);
  const firstColumnFaq = FaqData?.content.slice(0, halfIndex);
  const secondColumnFaq = FaqData?.content.slice(halfIndex);

  return (
    <div className="bg-bullt-quaternary/[0.02] lg:py-16 py-6">
      <div className="relative max-w-7xl mx-auto grid  grid-cols-1 items-center justify-center gap-5 h-auto">
        {/* <div className="absolute ">
          <Image
            src="/icon-lines-6.81833a8f.png"
            alt="Heading Image"
            width={500}
            height={500}
            className=" "
          />
        </div> */}
        <div className="max-w-4xl w-full mx-auto flex flex-col justify-center items-center px-4 sm:px-10 sm:py-0 py-4">
          {FaqData?.heading ? (
            <>
              <div
                className="w-full text-2xl sm:text-4xl font-bold py-2 tailwind-unreset text-center"
                dangerouslySetInnerHTML={{
                  __html: FaqData?.heading,
                }}
              ></div>
            </>
          ) : null}
          {FaqData?.description ? (
            <>
              <div
                className="tailwind-unrested py-3 text-xl text-bullt-primary/[0.8] text-center"
                dangerouslySetInnerHTML={{
                  __html: FaqData?.description,
                }}
              ></div>
            </>
          ) : null}
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-1">
          {/* First Column */}
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {firstColumnFaq.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full border-bullt-tertiary border-b-2 bg-white items-center p-3 my-3 cursor-pointer"
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
                      {item?.description ? (
                        <div
                          className="flex p-3 select-none text-md text-bullt-primary/[0.8]"
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                        />
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {secondColumnFaq.map((item: any, index: number) => (
              <div
                key={index + halfIndex} // Add halfIndex to ensure unique keys
                className="w-full border-bullt-tertiary border-b-2 bg-white items-center p-3 my-3 cursor-pointer"
                onClick={() => handleToggle(index + halfIndex)}
              >
                <div className="flex justify-between p-2">
                  <div className="">
                    <div
                      className={`px-2 text-lg select-none ${
                        activeIndex === index + halfIndex
                          ? "text-bullt-tertiary"
                          : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.heading }}
                    ></div>
                  </div>
                  <div className="relative w-[100px] flex justify-end items-center px-1">
                    {activeIndex === index + halfIndex ? (
                      <FiMinus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    ) : (
                      <FiPlus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index + halfIndex && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="flex p-3 select-none text-md text-bullt-primary/[0.8]"
                        dangerouslySetInnerHTML={{
                          __html: item?.description,
                        }}
                      ></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesFaqComponent;
