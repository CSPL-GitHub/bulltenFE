"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  TabData: any;
}

export default function MultipleFeatureTabsAplusComponent({ TabData }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full lg:py-12 py-8 lg:px-8 bg-gray-50 bg-[url('/team_bg.jpg')] bg-top bg-contain bg-no-repeat">
      <div className="container mx-auto w-full lg:px-8 px-4">
        {/* Heading */}
        <div className="pb-8 flex flex-col gap-2">
          {TabData?.heading ? (
            <div
              className="w-full text-bullt-primary font-bold text-center sm:text-4xl text-3xl tracking-wide leading-tight"
              dangerouslySetInnerHTML={{ __html: TabData?.heading }}
            />
          ) : null}

          {/* Description */}
          {TabData?.description ? (
            <div
              className="w-full text-center text-bullt-primary/[0.8] text-lg "
              dangerouslySetInnerHTML={{
                __html: TabData?.description,
              }}
            />
          ) : null}
        </div>

        {/* Tabs */}
        <div className="grid lg:grid-cols-5 grid-cols-2 max-w-5xl mx-auto justify-center gap-1 gap-y-4 items-center  lg:px-0 px-2 ">
          {TabData?.content?.map((tab: any, index: number) => (
            <div key={index} className="text-lg group relative w-full">
              <button
                onClick={() => setActiveTab(index)}
                className={`w-full py-4 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out ${
                  activeTab === index
                    ? "bg-bullt-tertiary text-bullt-secondary border-bullt-tertiary border"
                    : " text-bullt-tertiary bg-bullt-secondary border-bullt-tertiary border"
                }`}
                dangerouslySetInnerHTML={{
                  __html: tab.heading,
                }}
              />
              {activeTab === index ? (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-bullt-tertiary"></div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

       
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:px-6 px-2 mt-12"
          >
            {TabData?.content[activeTab]?.loctions?.map(
              (location: any, idx: number) => (
                <div
                  className="bg-white bg-contain bg-no-repeat flex flex-col gap-2 py-6 px-6 border-[1px] border-gray-200 relative overflow-hidden shadow-sm hover:shadow-xl rounded-md group transition-all duration-300 ease-in-out"
                >
                  <div>
                    {location?.tag ? (
                      <div
                        className="absolute top-0 right-0 bg-gradient-to-r from-bullt-tertiary to-orange-400 text-white text-sm px-2 py-1 rounded-sm  font-semibold tracking-wide transition-all duration-300 ease-in-out"
                        dangerouslySetInnerHTML={{
                          __html: location?.tag,
                        }}
                      />
                    ) : null}
                    <div className="absolute top-0 -inset-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
                  </div>

                  {/* Title */}
                  {location?.title ? (
                    <div
                      className="w-full relative text-left mt-6 text-bullt-primary/[0.9] text-xl font-semibold group-hover:text-bullt-quaternary tracking-wide leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: location?.title,
                      }}
                    />
                  ) : null}
                  {location?.description ? (
                    <div
                      className="w-full relative flex-1 text-left text-bullt-primary/[0.7] text-lg group-hover:text-bullt-quaternary leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: location?.description,
                      }}
                    />
                  ) : null}
                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
