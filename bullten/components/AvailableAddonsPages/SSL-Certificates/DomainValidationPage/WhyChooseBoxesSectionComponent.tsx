import React from "react";

type Props = {
  WhyChooseSectionBoxesData: any;
};

export default function WhyChooseBoxesSectionComponent({
  WhyChooseSectionBoxesData,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-8 py-6">
      <h1 className="lg:text-4xl text-3xl font-bold text-center mb-4 text-bullt-primary">
        {WhyChooseSectionBoxesData?.feature[0]?.heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WhyChooseSectionBoxesData?.feature[0]?.features.map(
          (box: any, index: number) => (
            <div
              key={index}
              // ${
              //   index === 0
              //     ? "bg-gradient-to-br from-bullt-tertiary/[0.2] to-bullt-tertiary/[0.07]"
              //     : ""
              // }
              // ${
              //   index === 1
              //     ? "bg-gradient-to-br from-bullt-quaternary/[0.05] to-bullt-quaternary/[0.08]"
              //     : ""
              // }
              // ${
              //   index === 2
              //     ? "bg-gradient-to-br from-yellow-100 to-orange-100"
              //     : ""
              // }
              className={`
                relative overflow-hidden rounded-xl p-4
                transition-all duration-500 ease-in-out
                hover:shadow-xl hover:-translate-y-2
                group cursor-pointer bg-gradient-to-br from-bullt-quaternary/[0.05] to-bullt-quaternary/[0.08]`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 transform rotate-45 transition-transform duration-700 ease-in-out group-hover:rotate-90" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/30 rounded-full -ml-24 -mb-24 transition-transform duration-700 ease-in-out group-hover:scale-150" />
              <div className="relative z-10">
                <div
                  //    ${
                  //     index === 0
                  //       ? "bg-yellow-200 group-hover:bg-bullt-tertiary/40"
                  //       : ""
                  //   }
                  //  ${
                  //    index === 1
                  //      ? "bg-blue-200 group-hover:bullt-quaternary/[0.2]"
                  //      : ""
                  //  }
                  //  ${
                  //    index === 2 ? "bg-yellow-200 group-hover:bg-yellow-300" : ""
                  //  }
                  className="text-6xl mb-6 inline-block p-4 rounded-full transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 bg-bullt-tertiary/55 group-hover:bg-bullt-tertiary/90"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${box?.icon}`}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h2 className="md:text-2xl text-xl font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                  {box.heading}
                </h2>
                <p className="text-lg text-bullt-primary leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {box.description}
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-transparent rounded-3xl transition-colors duration-300 group-hover:border-white/30" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
