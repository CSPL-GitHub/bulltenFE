import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  AboutData: any;
};

export default function AboutUsSection({ AboutData }: Props) {
  return (
    <section className="w-full lg:py-14 py-6 bg-bullt-quaternary/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 relative">
            <div className="relative w-full md:h-[500px] h-[300px] rounded-md overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-bullt-quaternary to-bullt-quaternary/30 opacity-20"></div>
              {AboutData?.image_main && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData.image_main}`}
                  alt={AboutData?.heading}
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                {AboutData?.Short_note_heading ? (
                  <h3 className="text-2xl font-bold text-white">
                    {AboutData?.Short_note_heading}
                  </h3>
                ) : null}

                {AboutData?.Short_note_description ? (
                  <p className="text-white/90">
                    {AboutData?.Short_note_description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pl-10">
            {AboutData?.heading && (
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 lg:mb-6 mb-1 leading-tight">
                {AboutData.heading}
              </h2>
            )}

            {AboutData?.description && (
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                {AboutData.description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {AboutData?.our_story.map((feature: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 relative rounded-full overflow-hidden shadow-lg">
                    {feature.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature.image}`}
                        alt={feature.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.heading}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
