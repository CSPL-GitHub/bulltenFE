import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

interface Feature {
  heading: string;
  description: string;
  image: string;
}

interface Props {
  StepsData: {
    how_does_it_work_data: Array<{
      heading: string;
      description: string;
      how_dose_it_work: Feature[];
    }>;
  }[];
}

export default function SeoToolsStepsComponent({ StepsData }: Props) {
  const { heading, description, how_dose_it_work } =
    StepsData[0]?.how_does_it_work_data[0] || {};

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {heading && (
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
        <div className="relative">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {how_dose_it_work?.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="z-10 w-12 h-12 rounded-full bg-bullt-tertiary text-bullt-secondary flex items-center justify-center text-lg font-semibold text-primary mb-4">
                  {index + 1}
                </div>
                {index < how_dose_it_work.length - 1 && (
                  <FaChevronRight className="hidden sm:block absolute -right-4 top-4 w-8 h-8 text-bullt-quaternary" />
                )}
                <div className="block absolute left-0 top-14 w-full h-0.5 bg-gray-200" />
                <div className="bg-white p-6 rounded-lg shadow-lg h-[250px] w-full">
                  {feature.image && (
                    <div className="w-16 h-16 rounded-full bg-bullt-primary/10  mb-4 relative">
                      <Image
                        fill
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature.image}`}
                        alt={feature.heading}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}
                  {feature.heading && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.heading}
                    </h3>
                  )}

                  {feature.description && (
                    <p className="text-gray-600">{feature.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
