import Image from "next/image";
type Props = {
  FeaturesData: any;
};
export default function WordPressHostingFeature({ FeaturesData }: Props) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-center lg:items-center justify-between mb-16">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <span className="inline-block text-bullt-tertiary font-semibold bg-bullt-tertiary/5 px-3 py-1 rounded-xl mb-3">
              {FeaturesData?.slogan}
            </span>

            {FeaturesData?.heading ? (
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {FeaturesData?.heading}
              </h2>
            ) : null}
            {FeaturesData?.description ? (
              <p className="text-gray-600 text-lg leading-relaxed">
                {FeaturesData?.description}
              </p>
            ) : null}
          </div>

          <div className="relative lg:mt-0 mt-0 lg:block hidden lg:w-1/2 w-full">
            <div className="relative bg-white p-4 rounded-2xl shadow-xl">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${FeaturesData?.iamge}`}
                alt={FeaturesData?.heading}
                className="w-full h-[300px] lg:h-[300px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b-gray-300 border-b-[1px]">
          {FeaturesData?.features.map((feature: any, index: number) => {
            const isLastInRow = (index + 1) % 3 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col gap-3 justify-center items-center p-4
          ${!isLastInRow ? "border-r-2 border-gray-300" : ""} 
         
        `}
              >
                <div className="lg:w-20 lg:h-20 w-16 h-16 relative">
                  {feature.image ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature.image}`}
                      alt={feature.heading}
                      layout="fill"
                      objectFit="contain"
                    />
                  ) : null}
                </div>

                {feature.heading ? (
                  <h4 className="text-lg font-semibold text-bullt-primary ">
                    {feature.heading}
                  </h4>
                ) : null}

                {feature.heading ? (
                  <p className="text-base text-bullt-primary text-center ">
                    {feature.description}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
