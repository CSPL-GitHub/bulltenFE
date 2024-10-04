"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  BannerData: any;
};

export default function SeoToolsBannerComponent({ BannerData }: Props) {
  return (
    <section className="mx-auto w-full lg:h-[480px] min-h-[300px] bg-gradient-to-br from-bullt-tertiary/[0.07] via-white to-bullt-quaternary/[0.1] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {BannerData.map((data: any, index: number) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:px-0 px-4"
          >
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="text-5xl font-bold tracking-tight text-bullt-tertiary sm:text-6xl md:text-6xl">
                {data.heading}
              </h1>
              {data.description ? (
                <>
                  <div
                    className="items-start max-w-prose text-xl tailwind-unreset py-3 text-bullt-primary/[0.8]"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                </>
              ) : null}
            </div>
            <div className="relative lg:mt-8">
              <motion.div
                className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
              <motion.div
                className="relative bg-white p-8 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <video
                  controls
                  className="w-full h-[300px] lg:h-[350px] object-contain rounded-xl"
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
