import { motion } from "framer-motion";

type Props = { BannerData: any };
export default function SubPageBannerSectionComponent({ BannerData }: Props) {
  return (
    <section className=" mx-auto w-full py-8 lg:h-[500px] min-h-[300px] bg-gradient-to-br from-bullt-tertiary/[0.07] via-white to-bullt-quaternary/[0.1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 lg:px-0 px-4">
          <div className="flex flex-col justify-center space-y-4">
            {BannerData?.banner_main_ids[0]?.heading ? (
              <div
                className="text-5xl block text-bullt-tertiary font-bold sm:text-6xl md:text-6xl lg:leading-[0.5rem] leading-[1rem]"
                style={{ lineHeight: "4.5rem" }}
              >
                {BannerData?.banner_main_ids[0]?.heading}
              </div>
            ) : null}

            {BannerData?.banner_main_ids[0]?.description ? (
              <div
                className="items-start max-w-prose text-xl tailwind-unrested py-3  text-bullt-primary/[0.8]"
                dangerouslySetInnerHTML={{
                  __html: BannerData?.banner_main_ids[0]?.description,
                }}
              ></div>
            ) : null}

            <div className="flex flex-wrap gap-4">
              {BannerData?.banner_main_ids[0]?.Banner_multiple_data?.map(
                (feature: any, index: number) => (
                  <div
                    key={feature.title}
                    className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md cursor-pointer transition-colors duration-300"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature.icon}`}
                      className="h-5 w-5 text-indigo-600"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {feature.title}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative lg:mt-8 lg:block hidden">
            <motion.div
              className="absolute inset-0 bg-indigo-200 rounded-3xl transform rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            <motion.div
              className="relative bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${BannerData?.banner_main_ids[0]?.img}`}
                alt={BannerData?.banner_main_ids[0]?.heading}
                className="w-full h-[300px] lg:h-[350px] object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
