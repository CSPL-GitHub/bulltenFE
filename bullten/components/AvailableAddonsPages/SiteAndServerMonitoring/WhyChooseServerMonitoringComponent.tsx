import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  WhyChooseData: any;
};
const WhyChooseMonitoring = ({ WhyChooseData }: Props) => {
  return (
    <section className="bg-bullt-quaternary/[0.01] lg:py-16 py-6 px-4 relative overflow-hidden shadow-none">
      <div className="max-w-7xl mx-auto relative flex flex-col lg:gap-8 gap-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {WhyChooseData?.heading && (
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4 ">
              {WhyChooseData?.heading}
            </h2>
          )}
          {WhyChooseData?.description && (
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              {WhyChooseData?.description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {WhyChooseData?.why_choose.map((card: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {card?.icon && (
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    alt={card.headings}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${card?.icon}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              {card.Percentage && (
                <h3 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-2">
                  {card.Percentage}
                </h3>
              )}
              {card.headings && (
                <p className="text-lg text-gray-600 mb-4"> {card.headings}</p>
              )}
              {card.Price && (
                <p className="lg:text-2xl text-xl font-semibold text-bullt-quaternary">
                  {card.Price}
                  <span className="text-base font-normal text-gray-500">
                    {card.Period}
                  </span>
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {WhyChooseData?.sub_heading && (
          <div className="text-center">
            <p className="text-gray-600 text-lg inline-block bg-white px-6 py-3 rounded-full shadow-md">
              * {WhyChooseData?.sub_heading}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseMonitoring;
