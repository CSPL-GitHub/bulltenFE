"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Props = { content: any };
export default function OverViewPageBannerComponent({ content }: Props) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    { icon: "/icons8-validation-64.png", label: "Domain Validation (DV)" },
    {
      icon: "/icons8-validation-64.png",
      label: "Organization Validation (OV)",
    },
    { icon: "/icons8-validation-64.png", label: "Extended Validation (EV)" },
  ];

  return (
    <section className=" mx-auto w-full py-8 lg:h-[500px] min-h-[300px] bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:px-0 px-4">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {content?.heading ? (
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-6xl">
                <span className="block text-bullt-tertiary">
                  {content?.heading}
                </span>
              </h1>
            ) : null}

            {content?.description ? (
              <>
                <div
                  className="items-start max-w-prose text-xl tailwind-unrested py-3  text-bullt-primary/[0.8]"
                  dangerouslySetInnerHTML={{
                    __html: content?.description,
                  }}
                ></div>
              </>
            ) : null}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "#EEF2FF" }}
                  onHoverStart={() => setHoveredFeature(feature.label)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className="h-5 w-5 relative">
                    <Image
                      alt={feature.label}
                      src={feature.icon}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className=" text-indigo-600"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className="relative lg:mt-8 mt-0 lg:block hidden">
            <motion.div
              className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />

            {content?.img && (
              <motion.div
                className="relative w-full h-[300px] lg:h-[350px] bg-white rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${content?.img}`}
                  alt={content?.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" object-contain rounded-xl  p-8"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
