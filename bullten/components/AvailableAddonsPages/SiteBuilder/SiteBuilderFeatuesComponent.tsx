import React from "react";
// import { CheckCircle, Smartphone, Layers, Code, PiggyBank } from "lucide-react";
type Props = {
  CompeteData: any;
};
const SiteBuilderFeaturesComponent = ({ CompeteData }: Props) => {
  return (
    <section className="lg:py-16 py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-4xl font-bold text-2xl text-gray-900 text-center mb-16">
          {CompeteData?.competitors_main[0]?.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {CompeteData?.competitors_main[0]?.competitors?.map(
            (feature: any, index: number) => (
              <div key={index} className="relative group">
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-100 to-indigo-100 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div> */}
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    {/* <div className="flex-shrink-0">{feature.icon}</div> */}
                    <h3 className="lg:w-[70%] w-full text-xl font-semibold text-gray-900">
                      {feature.competitor_heading}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.competitor_desc}
                  </p>
                  <div className="h-1 w-36 bg-gradient-to-r from-bullt-tertiary/70 to-bullt-tertiary/20 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SiteBuilderFeaturesComponent;
