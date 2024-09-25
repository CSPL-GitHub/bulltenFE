import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { DataContent: any };

const FeaturesContentComponent = ({ DataContent }: Props) => {
  const features = DataContent?.engine_rank[0]?.engine_data || [];
  const midpoint = Math.ceil(features.length / 2);
  const leftColumnFeatures = features.slice(0, midpoint);
  const rightColumnFeatures = features.slice(midpoint);

  return (
    <section className="container mx-auto lg:py-16 py-6 bg-bullt-quaternary/[0.02]">
      <div className=" px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {DataContent?.engine_rank[0]?.heading && (
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4"
              dangerouslySetInnerHTML={{
                __html: DataContent?.engine_rank[0]?.heading,
              }}
            />
          )}
          {DataContent?.engine_rank[0]?.subheading && (
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{
                __html: DataContent?.engine_rank[0]?.subheading,
              }}
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column Features */}
          <FeatureColumn features={leftColumnFeatures} />

          {/* Image Column */}
          <div className="relative rounded-md overflow-hidden shadow-md">
            <Image
              src="/96948.jpg"
              alt="Background Image"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-white">
              {DataContent?.engine_rank[0]?.subheading && (
                <div
                  className="w-full text-left text-bullt-secondary text-lg font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: DataContent?.engine_rank[0]?.subheading,
                  }}
                />
              )}
              {DataContent?.engine_rank[0]?.description && (
                <p
                  className="text-md text-justify font-medium"
                  dangerouslySetInnerHTML={{
                    __html: DataContent?.engine_rank[0]?.description,
                  }}
                />
              )}
            </div>
          </div>

          {/* Right Column Features */}
          <FeatureColumn features={rightColumnFeatures} />
        </div>
      </div>
    </section>
  );
};

const FeatureColumn = ({ features }: { features: any[] }) => (
  <div className="space-y-6">
    {features.map((feature: any, index: number) => (
      <div
        key={index}
        className="bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="flex items-center p-6">
          <div className="flex-shrink-0 w-16 h-16 ">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.img}`}
              alt={`Feature ${index + 1}`}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 ">
              {feature.title}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default FeaturesContentComponent;
