import Image from "next/image";
import React from "react";

type Props = {
  useCasesContent: any;
};

export default function XoviNowuseCasesBoxes({ useCasesContent }: Props) {
  console.log(
    useCasesContent?.features[0].feature_data,
    "XoviNowuseCasesBoxes"
  );
  return (
    <section className="lg:py-16 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {useCasesContent?.features[0]?.heading ? (
          <h2 className="text-2xl text-center lg:text-4xl font-bold mb-12 text-gray-800">
            {useCasesContent?.features[0]?.heading}
          </h2>
        ) : null}

        <div className="grid md:grid-cols-2 lg:gap-8 gap-4">
          {useCasesContent?.features[0]?.feature_data.map(
            (box: any, index: number) => (
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-bullt-quaternary/[0.07] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative p-8 z-10">
                  <div className="relative w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.feature_image}`}
                      alt={box?.heading}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg p-2"
                    />
                  </div>
                  {box?.heading ? (
                    <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-bullt-tertiary transition-colors duration-300">
                      {box?.heading}
                    </h3>
                  ) : null}
                  {box?.description ? (
                    <p className="text-black text-opacity-90 group-hover:text-opacity-100 transition-opacity duration-300">
                      {box?.description}
                    </p>
                  ) : null}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-bullt-tertiary/[0.9] to-bullt-quaternary  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
