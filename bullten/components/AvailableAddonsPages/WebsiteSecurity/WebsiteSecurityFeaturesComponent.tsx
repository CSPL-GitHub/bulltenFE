import Image from "next/image";
import React from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";

type Props = {
  FeaturesData: any;
};

const WebsiteSecurityFeaturesComponent = ({ FeaturesData }: Props) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {FeaturesData?.Feature[0]?.heading && (
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              {FeaturesData?.Feature[0]?.heading}
            </h2>
          )}
          {FeaturesData?.Feature[0]?.description && (
            <p className="mt-4 text-xl text-gray-600">
              {FeaturesData?.Feature[0]?.description}
            </p>
          )}
        </div>

        {/* Zigzag Layout */}
        <div className="relative">
          <div className="absolute border-l-2 lg:border-gray-300 border-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>

          {FeaturesData?.Feature[0]?.feature_list.map(
            (feature: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Line connection */}
                <div className="hidden absolute md:flex md:justify-center md:items-center w-10 h-10 bg-bullt-tertiary rounded-full left-1/2 transform -translate-x-1/2">
                  <FaArrowsLeftRight className="text-bullt-secondary text-2xl" />
                </div>

                {/* Content on Left/Right */}
                <div
                  className={`md:w-1/2 p-6 ${
                    index % 2 === 0
                      ? "md:pl-12 text-right"
                      : "md:pr-12 text-left"
                  }`}
                >
                  {feature.heading && (
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {feature.heading}
                    </h3>
                  )}
                  {feature.description && (
                    <p className="mt-4 text-gray-600 text-lg">
                      {feature.description}
                    </p>
                  )}
                </div>

                {/* Icon on the Opposite Side */}
                <div className="md:w-1/2 flex justify-center items-center lg:p-6 p-0">
                  {feature?.img && (
                    <div className="relative  w-14 h-14 bg-bullt-secondary rounded-full shadow-lg">
                      <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.img}`}
                        alt={feature?.heading}
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WebsiteSecurityFeaturesComponent;
