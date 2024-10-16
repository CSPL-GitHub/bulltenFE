import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = { bannerData: any };

const UseCasesBannerComponent = ({ bannerData }: Props) => {
  return (
    <div className="relative w-full md:h-[500px] h-[550px]  overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-100 object-cover object-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-6 py-16 text-white">
          <div className="relative flex flex-col lg:flex-row gap-5 items-center justify-between">
            <div className="lg:w-3/5 mb-10 lg:mb-0 flex flex-col md:justify-start justify-center md:items-start items-center">
              {bannerData?.slogan ? (
                <div
                  role="alert"
                  className="max-w-[450px] p-2 bg-bullt-tertiary rounded-full items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mb-4"
                >
                  <div
                    className="text-white font-semibold mr-2 text-left flex-auto"
                    dangerouslySetInnerHTML={{
                      __html: bannerData?.slogan,
                    }}
                  ></div>
                </div>
              ) : null}
              {bannerData?.heading ? (
                <div
                  className="text-2xl md:text-4xl font-bold lg:mb-0 mb-2 lg:text-left text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-bullt-quaternary/70 to-bullt-quaternary/90"
                  dangerouslySetInnerHTML={{
                    __html: bannerData?.heading,
                  }}
                ></div>
              ) : null}
              {bannerData?.description ? (
                <div
                  className="md:text-xl text-lg font-400 py-4  text-bullt-primary lg:text-left text-center "
                  dangerouslySetInnerHTML={{
                    __html: bannerData?.description,
                  }}
                ></div>
              ) : null}
            </div>
            {bannerData?.image ? (
              <div className=" lg:w-2/5 w-full h-[300px] lg:h-[450px] relative md:block hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${bannerData?.image}`}
                  alt={bannerData?.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" object-contain rounded-xl"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesBannerComponent;
