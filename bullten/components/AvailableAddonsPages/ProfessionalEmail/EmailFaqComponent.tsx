"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
type Props = { FaqContent: any };

const EmailFaqComponent = ({ FaqContent }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = FaqContent?.FAQ[0]?.faq_list || [];
  const halfwayIndex = Math.ceil(faqList.length / 2);
  const firstColumn = faqList.slice(0, halfwayIndex);
  const secondColumn = faqList.slice(halfwayIndex);

  return (
    <div className="bg-bullt-quaternary/[0.02] lg:py-16 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center px-4 sm:px-10 h-full sm:py-0 py-4 text-center sm:text-start">
          {FaqContent?.FAQ[0]?.faq_heading_main && (
            <div
              className="text-center text-2xl sm:text-4xl font-bold py-2 tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: FaqContent?.FAQ[0]?.faq_heading_main,
              }}
            ></div>
          )}
        </div>
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-start mt-6 justify-center gap-5 h-auto ">
          {/* Left Column */}
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {firstColumn.map((item: any, index: number) => (
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

          {/* Right Column */}
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {secondColumn.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full border-bullt-tertiary border-b-2 bg-white items-center p-3 my-3 cursor-pointer"
                onClick={() => handleToggle(index + halfwayIndex)}
              >
                <div className="flex justify-between p-2">
                  <div className="">
                    <div
                      className={`px-2 text-lg select-none ${
                        index + halfwayIndex === activeIndex
                          ? "text-bullt-tertiary"
                          : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.heading }}
                    ></div>
                  </div>
                  <div className="relative w-[100px] flex justify-end items-center px-1">
                    {activeIndex === index + halfwayIndex ? (
                      <FiMinus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    ) : (
                      <FiPlus className="text-bullt-tertiary text-2xl cursor-pointer" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeIndex === index + halfwayIndex && (
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

export default EmailFaqComponent;
