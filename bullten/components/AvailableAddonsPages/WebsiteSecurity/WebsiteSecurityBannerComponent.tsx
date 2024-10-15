"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { BannerData: any };
export default function WebsiteSecurityBannerComponent({ BannerData }: Props) {
  return (
    <section className=" mx-auto w-full lg:h-[480px] h-[300px] bg-gradient-to-br from-bullt-tertiary/[0.07] via-white to-bullt-quaternary/[0.1] overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:py-0 py-8 lg:px-0 px-4">
          <div className="flex flex-col justify-center space-y-8">
            {BannerData?.heading && (
              <h1 className="lg:text-left text-center text-5xl font-bold tracking-tight text-bullt-tertiary sm:text-6xl md:text-6xl leading-[4rem]">
                {BannerData?.heading}
              </h1>
            )}

            {BannerData?.description ? (
              <>
                <div
                  className="lg:text-left text-center items-start max-w-prose text-xl tailwind-unrested py-3  text-bullt-primary/[0.8]"
                  dangerouslySetInnerHTML={{
                    __html: BannerData?.description,
                  }}
                ></div>
              </>
            ) : null}
          </div>

          <div className="relative lg:mt-8 mt-0 lg:block hidden">
            <motion.div
              className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            {BannerData?.img && (
              <motion.div
                className="relative bg-white p-8 rounded-3xl shadow-xl w-full h-[300px] lg:h-[350px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.img}`}
                  alt={BannerData?.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" object-contain rounded-xl"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
