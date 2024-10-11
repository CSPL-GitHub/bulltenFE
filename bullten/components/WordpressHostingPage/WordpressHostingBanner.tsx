"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WordpressHostingBanner({ BannerData }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full md:h-[500px] h-[400px]  overflow-hidden bg-gray-100">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-6 py-16 text-white">
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-green-400 to-blue-500 filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative flex flex-col lg:flex-row gap-5 items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col md:justify-start justify-center md:items-start items-center">
              {BannerData?.tag ? (
                <div
                  role="alert"
                  className="max-w-[300px] p-2 bg-bullt-tertiary rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mb-4"
                >
                  <span className="flex rounded-full bg-bullt-quaternary uppercase px-2 py-1 text-xs font-bold mr-3">
                    {BannerData?.tag}
                  </span>
                  <span className="text-white font-semibold mr-2 text-left flex-auto">
                    {BannerData?.slogan}
                  </span>
                </div>
              ) : null}
              {BannerData?.heading ? (
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bullt-quaternary/70 to-bullt-quaternary/90">
                    {BannerData?.heading}
                  </span>
                </h1>
              ) : null}

              {BannerData?.description ? (
                <motion.p
                  className="text-xl md:text-2xl mb-8 text-bullt-primary font-light md:text-left text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {BannerData?.description}
                </motion.p>
              ) : null}
              {BannerData?.button_text ? (
                <motion.button
                  className="group relative overflow-hidden bg-white text-bullt-tertiary font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:text-white transition duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <span className="relative z-10">
                    {BannerData?.button_text}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-bullt-tertiary/60 to-bullt-tertiary"
                    initial={{ x: "100%" }}
                    animate={{ x: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.button>
              ) : null}
            </div>
            {BannerData?.image ? (
              <div className="lg:w-1/2 relative md:block hidden">
                <div className="w-full h-[300px] lg:h-[450px] ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.image}`}
                    alt={BannerData?.heading}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {BannerData?.icon ? (
        <motion.div
          className="absolute bottom-10 lg:left-1/2 left-0 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <div className="relative w-16 h-16">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.icon}`}
              alt={BannerData?.heading}
              fill
              sizes="64px"
              className="text-bullt-quaternary animate-bounce object-contain"
            />
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
