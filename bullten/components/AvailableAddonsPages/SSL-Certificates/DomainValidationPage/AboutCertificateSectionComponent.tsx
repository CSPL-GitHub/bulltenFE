import Image from "next/image";
import React from "react";
type Props = { AboutData: any };

export default function AboutCertificateSectionComponent({ AboutData }: Props) {
  return (
    <section className="w-full lg:py-8 py-6 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.about_page_data[0]?.img}`}
                alt={AboutData?.about_page_data[0]?.heading}
                className="rounded-2xl shadow-xl "
              />
              {/* <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-5xl font-bold text-gray-800 mb-1">10+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-5xl font-bold text-gray-800 mb-1">500+</p>
                <p className="text-gray-600">Projects Delivered</p>
              </div> */}
            </div>
          </div>

          {/* <div className="lg:w-1/2 w-full relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${AboutData?.about_page_data[0]?.img}`}
              alt={AboutData?.about_page_data[0]?.heading}
              className="rounded-2xl shadow-xl "
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div> */}

          <div className="lg:w-1/2 flex flex-col gap-3">
            {AboutData?.about_page_data[0]?.heading ? (
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight">
                {AboutData?.about_page_data[0]?.heading}
              </h3>
            ) : null}

            {AboutData?.about_page_data[0]?.description ? (
              <p className="text-lg text-bullt-primary text-justify">
                {AboutData?.about_page_data[0]?.description}
              </p>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {AboutData?.about_page_data[0]?.about_data?.map(
                (feature: any, index: number) => (
                  <>
                    <div
                      key={index}
                      className="bg-bullt-quaternary/[0.02] border border-gray-200 flex flex-col gap-3 justify-center items-center p-3 rounded-xl shadow-sm  hover:shadow-xl transition-shadow duration-300"
                    >
                      {feature?.icon && (
                        <div className="w-10 h-10 relative">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.icon}`}
                            className=" text-bullt-quaternary"
                            alt={feature?.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      <h4 className="text-md font-medium text-gray-800">
                        {feature?.title}
                      </h4>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
