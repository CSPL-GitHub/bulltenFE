"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiSocketdotio } from "react-icons/si";

type Props = {
  TabsContent: any;
};
export default function XoviNowTabsSectionComponent({ TabsContent }: Props) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="px-4 lg:py-16 py-6 bg-bullt-quaternary/[0.05]">
      <div className="max-w-7xl mx-auto ">
        {TabsContent?.tabs[0]?.heading ? (
          <h2 className="text-2xl text-center lg:text-4xl font-bold mb-12 text-gray-800">
            {TabsContent?.tabs[0]?.heading}
          </h2>
        ) : null}

        <div className="mb-12">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-center gap-4">
            {TabsContent?.tabs[0]?.tab_Data.map((tab: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-10 py-4 rounded-md text-md font-semibold  transition-all duration-300 ease-in-out transform hover:scale-105   ${
                  activeTab === index
                    ? `bg-gradient-to-r from-bullt-tertiary/80 to-bullt-tertiary/90 border[1px] border-bullt-tertiary text-white shadow-lg`
                    : "bg-white text-gray-600 hover:bg-gray-100 border-[1px] border-gray-200"
                }`}
              >
                {tab.heading}
              </button>
            ))}
          </div>
        </div>

        {TabsContent?.tabs[0]?.tab_Data.map((tab: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === index ? 1 : 0,
              y: activeTab === index ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 flex justify-center items-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${tab.image}`}
                    alt={tab.heading}
                    width={400}
                    height={400}
                    className="object-contain md:w-[400px] h-64 md:h-[400px]"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  {tab.heading && (
                    <h3 className="text-3xl font-bold mb-4 text-gray-800">
                      {tab.heading}
                    </h3>
                  )}

                  {tab.description && (
                    <p className="text-gray-600 mb-6 text-lg">
                      {tab.description}
                    </p>
                  )}

                  <h4 className="text-xl font-semibold mb-4 text-gray-700">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {tab.tab_feature.map((point: any, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex gap-2 justify-start items-start text-gray-600"
                      >
                        <SiSocketdotio className="text-bullt-tertiary mt-[4px]" />
                        {point?.feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
