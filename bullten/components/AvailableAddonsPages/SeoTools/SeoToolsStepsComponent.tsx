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

// "use client";

// import { motion } from "framer-motion";
// import { BsChevronRight } from "react-icons/bs";

// interface Step {
//   title: string;
//   description: string;
// }

// type Props = {
//   StepsData: any;
// };

// export default function SeoToolsStepsComponent({ StepsData }: Props) {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
//             {StepsData[0]?.how_does_it_work_data[0]?.heading}
//           </h2>
//           <p className="mt-4 text-lg sm:text-xl text-gray-600">
//             {StepsData[0]?.how_does_it_work_data[0]?.description}
//           </p>
//         </div>

//         <div className="relative">
//           <div className="absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2 block"></div>

//           {StepsData[0]?.how_does_it_work_data[0]?.how_dose_it_work?.map(
//             (feature: any, index: number) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center gap-2 relative lg:mb-2 mb-10 ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 <div className="block md:absolute rounded-full left-1/2 transform md:-translate-x-1/2 -translate-x-1/4 mb-0 md:mb-0">
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-16 h-16 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold bg-bullt-tertiary text-white"
//                   >
//                     {index + 1}
//                   </motion.button>
//                 </div>

//                 <div
//                   className={`w-full md:w-1/2 px-4 py-4 rounded-lg bg-bullt-secondary shadow-lg ${
//                     index % 2 === 0
//                       ? "md:pl-0 md:text-right"
//                       : "md:pr-0 md:text-left"
//                   }`}
//                 >
//                   <div
//                     className={`w-full flex p-2 ${
//                       index % 2 === 0
//                         ? "md:justify-end md:items-end justify-start items-start"
//                         : "justify-start items-start"
//                     }`}
//                   >
//                     <div className="bg-bullt-quaternary/10 rounded-full p-3 shadow-sm">
//                       <img
//                         src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.image}`}
//                         alt={feature?.heading}
//                         className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
//                       />
//                     </div>
//                   </div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//                     {feature.heading}
//                   </h3>
//                   <p className="mt-4 text-base sm:text-lg text-gray-600">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
