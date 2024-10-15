import Image from "next/image";
import React from "react";
type Props = {
  AdvantagesContent: any;
};

export default function EmailAdvantagesBoxesComponents({
  AdvantagesContent,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-8 py-6">
      {AdvantagesContent?.List[0]?.heading && (
        <h1 className="lg:text-4xl text-2xl font-bold text-center mb-4 text-bullt-primary">
          {AdvantagesContent?.List[0]?.heading}
        </h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {AdvantagesContent?.List[0]?.list_data.map(
          (box: any, index: number) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl p-4
                transition-all duration-500 ease-in-out
                hover:shadow-xl hover:-translate-y-2
                group cursor-pointer bg-gradient-to-br from-bullt-quaternary/[0.05] to-bullt-quaternary/[0.08]`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 transform rotate-45 transition-transform duration-700 ease-in-out group-hover:rotate-90" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/30 rounded-full -ml-24 -mb-24 transition-transform duration-700 ease-in-out group-hover:scale-150" />
              <div className="relative z-10">
                {box?.image && (
                  <div className="w-20 h-20 mb-6 inline-block  rounded-full transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 bg-bullt-tertiary/55 group-hover:bg-bullt-tertiary/90">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.image}`}
                      className="object-contain p-4"
                      alt={box.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                {box.heading && (
                  <h2 className="md:text-2xl text-xl font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                    {box.heading}
                  </h2>
                )}
                {box.description && (
                  <p className="text-lg text-bullt-primary leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {box.description}
                  </p>
                )}
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-3xl transition-colors duration-300 group-hover:border-white/30" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
