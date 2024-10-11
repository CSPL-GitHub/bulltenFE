import React from "react";
// import { CheckCircle, Smartphone, Layers, Code, PiggyBank } from "lucide-react";
type Props = {
  CompeteData: any;
};
const SiteBuilderFeaturesComponent = ({ CompeteData }: Props) => {
  return (
    <section className="lg:py-16 py-6 bg-[url('/home5-banner-bg.png')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {CompeteData?.competitors_main[0]?.heading && (
          <h2 className="lg:text-4xl font-bold text-2xl text-gray-900 text-center lg:mb-16 mb-3">
            {CompeteData?.competitors_main[0]?.heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-2">
          {CompeteData?.competitors_main[0]?.competitors?.map(
            (feature: any, index: number) => (
              <div
                key={index}
                className="relative group hover:shadow-lg p-4 rounded-lg hover:bg-gray-50"
              >
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-100 to-indigo-100 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div> */}
                <div className="relative space-y-6">
                  <div className="flex flex-col gap-4 items-start">
                    {/* <div className="flex-shrink-0">{feature.icon}</div> */}
                    {feature.competitor_heading && (
                      <h3 className="lg:w-[70%] w-full text-xl font-semibold text-gray-900">
                        {feature.competitor_heading}
                      </h3>
                    )}

                    <div className="h-1 w-52 bg-gradient-to-r from-bullt-tertiary/70 to-bullt-tertiary/20 rounded-full transform "></div>
                    {/* <div className="h-1 w-36 bg-gradient-to-r from-bullt-tertiary/70 to-bullt-tertiary/20 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div> */}
                  </div>
                  {feature.competitor_desc && (
                    <p className="text-gray-600 leading-relaxed">
                      {feature.competitor_desc}
                    </p>
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

export default SiteBuilderFeaturesComponent;
