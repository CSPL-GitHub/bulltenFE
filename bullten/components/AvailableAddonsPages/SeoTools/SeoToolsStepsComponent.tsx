// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// // import { ChevronRight, CheckCircle } from 'lucide-react'

// interface Step {
//   title: string;
//   description: string;
// }

// const steps: Step[] = [
//   {
//     title: "Plan",
//     description: "Define your goals and outline the steps to achieve them.",
//   },
//   {
//     title: "Prepare",
//     description: "Gather resources and build your knowledge base.",
//   },
//   {
//     title: "Execute",
//     description: "Put your plan into action with determination.",
//   },
//   {
//     title: "Monitor",
//     description: "Track your progress and make adjustments as needed.",
//   },
//   {
//     title: "Succeed",
//     description: "Achieve your goals and celebrate your success.",
//   },
//   {
//     title: "Succeed",
//     description: "Achieve your goals and celebrate your success.",
//   },
// ];

// export default function Steps() {
//   const [activeStep, setActiveStep] = useState(0);

//   return (
//     <div className="py-12 bg-gradient-to-br from-background to-secondary/10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-primary">
//           Your Path to Success
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8">
//           <div className="w-full md:w-1/3 space-y-4">
//             {steps.map((step, index) => (
//               <motion.button
//                 key={index}
//                 className={`w-full text-left p-4 rounded-lg transition-all ${
//                   index === activeStep
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "bg-background hover:bg-secondary/50"
//                 }`}
//                 onClick={() => setActiveStep(index)}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="font-semibold">{step.title}</span>
//                   {/* {index === activeStep ? (
//                     <CheckCircle className="w-5 h-5" />
//                   ) : (
//                     <ChevronRight className="w-5 h-5" />
//                   )} */}
//                 </div>
//               </motion.button>
//             ))}
//           </div>
//           <div className="w-full md:w-2/3 mt-6 md:mt-0">
//             <motion.div
//               key={activeStep}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-background rounded-lg shadow-lg p-6"
//             >
//               <h3 className="text-2xl font-bold mb-4 text-primary">
//                 {steps[activeStep].title}
//               </h3>
//               <p className="text-muted-foreground">
//                 {steps[activeStep].description}
//               </p>
//               <div className="mt-6 flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">
//                   Step {activeStep + 1} of {steps.length}
//                 </span>
//                 <div className="flex space-x-1">
//                   {steps.map((_, index) => (
//                     <motion.div
//                       key={index}
//                       className={`w-2 h-2 rounded-full ${
//                         index === activeStep ? "bg-primary" : "bg-secondary"
//                       }`}
//                       animate={{ scale: index === activeStep ? 1.5 : 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/StepsComponent.js
// components/StepsComponent.js
"use client";

import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

interface Step {
  title: string;
  description: string;
}

type Props = {
  StepsData: any;
};
export default function SeoToolsStepsComponent({ StepsData }: Props) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            {StepsData[0]?.heading}
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            {StepsData[0]?.description}
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="relative">
          <div className="absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

          {StepsData[0]?.how_dose_it_work?.map(
            (feature: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="block md:block absolute rounded-full left-1/2 transform -translate-x-1/2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 bg-bullt-tertiary text-white"
                  >
                    {index + 1}
                  </motion.button>
                </div>

                <div
                  className={`md:w-1/2 px-6 py-4 rounded-lg bg-bullt-secondary shadow-lg ${
                    index % 2 === 0
                      ? "md:pl-12 text-right"
                      : "md:pr-12 text-left"
                  }`}
                >
                  <div
                    className={`w-full flex  p-6 ${
                      index % 2 === 0
                        ? "justify-end items-end"
                        : "justify-start items-start"
                    }`}
                  >
                    <div className=" bg-bullt-quaternary/10 rounded-full p-4 shadow-sm">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${feature?.image}`}
                        alt={feature?.heading}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {feature.heading}
                  </h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
