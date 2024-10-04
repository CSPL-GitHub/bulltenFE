"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FAQDataType = {
  heading: string;
  description: string;
  image?: string; // Optional image field
};

type Props = {
  FaqData: any;
};
const SeoToolsFaqComponent = ({ FaqData }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-bullt-quaternary/[0.02] lg:py-12 py-6">
      {FaqData[0]?.FAQ[0]?.heading && (
        <div
          className="w-full text-center text-2xl sm:text-4xl font-bold py-2 tailwind-unreset"
          dangerouslySetInnerHTML={{ __html: FaqData[0]?.FAQ[0]?.heading }}
        />
      )}
      {FaqData[0]?.FAQ[0]?.description && (
        <div
          className="text-center tailwind-unrested py-3 text-xl text-bullt-primary/[0.8]"
          dangerouslySetInnerHTML={{
            __html: FaqData[0]?.FAQ[0]?.description,
          }}
        />
      )}
      <div className=" mt-4 relative max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 h-auto">
        <div className="absolute">
          <Image
            src="/icon-lines-6.81833a8f.png"
            alt="Heading Image"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* FAQ Heading */}
        <div className="md:w-full w-full flex flex-col justify-center items-center px-4 sm:px-10 h-full sm:py-0 py-4 text-center sm:text-start">
          <video
            controls
            className="w-full h-[300px] lg:h-[350px] object-cover rounded-xl"
          >
            <source
              // src={`${process.env.NEXT_PUBLIC_BASE_URL}${FaqData[0]?.FAQ[0].faq_videoo}`}
              src="/marketgoo (720p).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* FAQ Items */}
        <div className="w-full">
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {FaqData[0]?.FAQ[0] && (
              <>
                {FaqData[0]?.FAQ[0]?.faq_list?.map(
                  (item: FAQDataType, index: number) => (
                    <div
                      key={index}
                      className="w-full border-bullt-tertiary border-b-2 bg-white items-center p-3 my-3 cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="flex justify-between p-2">
                        <div>
                          <div
                            className={`font-semibold md:text-md text-lg select-none ${
                              index === activeIndex ? "text-bullt-tertiary" : ""
                            }`}
                            dangerouslySetInnerHTML={{ __html: item?.heading }}
                          />
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
                            <div className="flex flex-col md:flex-row gap-6">
                              <div
                                className="flex p-3 select-none text-md text-bullt-primary/[0.8]"
                                dangerouslySetInnerHTML={{
                                  __html: item?.description,
                                }}
                              ></div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoToolsFaqComponent;
