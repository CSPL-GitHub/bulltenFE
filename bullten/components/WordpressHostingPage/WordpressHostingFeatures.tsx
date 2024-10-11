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
            {FeaturesData?.slogan ? (
              <span className="inline-block text-bullt-tertiary font-semibold bg-bullt-tertiary/5 px-3 py-1 rounded-xl mb-3">
                {FeaturesData?.slogan}
              </span>
            ) : null}

            {FeaturesData?.heading ? (
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                {FeaturesData?.heading}
              </h2>
            ) : null}
            {FeaturesData?.description ? (
              <p className="text-gray-600 text-lg leading-relaxed">
                {FeaturesData?.description}
              </p>
            ) : null}
          </div>
          {FeaturesData?.iamge ? (
            <div className="relative lg:mt-0 mt-0 lg:block hidden lg:w-1/2 w-full">
              <div className="relative bg-white w-full h-[300px] lg:h-[300px] rounded-2xl shadow-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${FeaturesData?.iamge}`}
                  alt={FeaturesData?.heading}
                  fill
                  className="object-cover rounded-xl p-4 "
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b-gray-300 border-b-[1px]">
          {FeaturesData?.features.map((feature: any, index: number) => {
            // Check if it's the last item in the row (3rd in a row for lg screens)
            const isLastInRow = (index + 1) % 3 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col gap-3 justify-center items-center p-4
          ${!isLastInRow ? "border-r-2 border-gray-300" : ""} 
          ${
            index < FeaturesData.features.length - 3
              ? "border-b-2 border-gray-300"
              : ""
          }
        `}
              >
                {feature.image ? (
                  <div className="lg:w-20 lg:h-20 w-16 h-16 relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature.image}`}
                      alt={feature.heading}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ) : null}
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
