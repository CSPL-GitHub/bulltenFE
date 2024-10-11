"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bullt-quaternary/70 to-bullt-quaternary/90">
                  {BannerData?.heading}
                </span>
              </h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-bullt-primary font-light md:text-left text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {BannerData?.description}
              </motion.p>
              <motion.button
                className="group relative overflow-hidden bg-white text-bullt-tertiary font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:text-white transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span className="relative z-10">{BannerData?.button_text}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-bullt-tertiary/60 to-bullt-tertiary"
                  initial={{ x: "100%" }}
                  animate={{ x: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
            <div className="lg:w-1/2 relative md:block hidden">
              {/* <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              > */}{" "}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.image}`}
                alt={BannerData?.heading}
                className="w-full h-[300px] lg:h-[450px] object-contain rounded-xl"
              />
              {/* </motion.div> */}
              {/* <motion.div
                className="relative z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🚀", text: "Blazing Fast" },
                    { icon: "🛡️", text: "Ultra Secure" },
                    { icon: "⚡", text: "Auto Scaling" },
                    { icon: "🔧", text: "Easy Management" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-4xl">{item.icon}</span>
                      <span className="font-semibold">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 lg:left-1/2 left-0 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-16 h-16 text-bullt-quaternary animate-bounce"
        >
          <path
            fill="currentColor"
            d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"
          />
        </svg>
      </motion.div>
    </div>
  );
}
