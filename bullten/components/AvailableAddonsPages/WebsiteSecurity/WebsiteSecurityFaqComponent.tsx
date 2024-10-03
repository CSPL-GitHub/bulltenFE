"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
type Props = { Props: any };

const DataContent = {
  faq: [
    {
      faq: {
        faq_heading: "Frequently Asked Questions",
        faq_description:
          "Here are some of the most frequently asked questions by our users.",
        faq_data: [
          {
            heading: "What is Xovi Now?",
            description:
              "Xovi Now is an all-in-one SEO tool that helps you monitor, analyze, and improve your website's ranking and performance.",
          },
          {
            heading: "How do I use Xovi Now?",
            description:
              "You can start using Xovi Now by creating an account, adding your website, and following the step-by-step SEO audit to optimize your site.",
          },
          {
            heading: "Is there a free trial available?",
            description:
              "Yes, we offer a 14-day free trial so that you can explore all the features and see how Xovi Now can help your website grow.",
          },
          {
            heading: "Can I cancel my subscription anytime?",
            description:
              "Absolutely! You can cancel your subscription at any time without any additional fees or obligations.",
          },
        ],
      },
    },
  ],
};

const WebsiteSecurityFaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="bg-bullt-quaternary/[0.02] lg:py-16 py-6">
      {" "}
      <div className="relative max-w-7xl  mx-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 h-auto ">
        <div className="absolute ">
          <Image
            src="/icon-lines-6.81833a8f.png"
            alt="Heading Image"
            width={500}
            height={500}
            className=" "
          />
        </div>
        <div
          className="md:w-[100%] w-full flex flex-col justify-center items-center px-4 sm:px-10 md:h-[510px] h-full sm:py-0 py-4 text-center sm:text-start"
          style={{}}
        >
          {DataContent?.faq[0]?.faq?.faq_heading ? (
            <>
              <div
                className="w-full items-starttext-2xl sm:text-4xl font-bold py-2 tailwind-unreset"
                dangerouslySetInnerHTML={{
                  __html: DataContent?.faq[0]?.faq?.faq_heading,
                }}
              ></div>
            </>
          ) : null}
          {DataContent?.faq[0]?.faq?.faq_description ? (
            <>
              <div
                className="items-start tailwind-unrested py-3 text-xl  text-bullt-primary/[0.8]"
                dangerouslySetInnerHTML={{
                  __html: DataContent?.faq[0]?.faq?.faq_description,
                }}
              ></div>
            </>
          ) : null}
        </div>
        <div className=" ">
          <div className="relative bg-white shadow-sm py-2 px-4 rounded-md">
            {DataContent?.faq[0]?.faq?.faq_data.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="w-full border-bullt-tertiary border-b-2 bg-white items-center p-3 my-3  cursor-pointer"
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteSecurityFaqComponent;
