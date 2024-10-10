import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ManageVpsAdvantagesComponent = ({ AdvantagesData }: any) => {
  return (
    <div className="bg-bullt-quaternary/[0.02] container mx-auto mt-6 py-4 lg:py-8 px-2 lg:px-8 space-y-8">
      <div className="flex flex-col items-center ">
        {AdvantagesData?.heading ? (
          <div
            className="w-full text-center sm:text-4xl text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.heading }}
          />
        ) : null}
        {AdvantagesData?.description ? (
          <div
            className="w-full text-center text-bullt-primary/[0.8] text-lg py-4"
            dangerouslySetInnerHTML={{ __html: AdvantagesData?.description }}
          />
        ) : null}
      </div>
      {AdvantagesData?.content?.map((section: any, index: number) => (
        <div
          key={section.id}
          className={`w-full mx-auto flex flex-col md:flex-row items-center gap-3  ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:[50%]">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.image}`}
              alt={section?.heading}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl"
            />
          </div>
          <div className="w-full md:[50%] md:px-20 px-4">
            <div className="" />
            {section?.heading ? (
              <div
                className="w-full text-bullt-primary text-start sm:text-3xl text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: section?.heading }}
              />
            ) : null}
            {section?.description ? (
              <div
                className="py-3 text-justify text-bullt-primary/[0.8] text-lg"
                dangerouslySetInnerHTML={{ __html: section?.description }}
              />
            ) : null}
            {section?.button_text ? (
              <div>
                <Link
                  href={section?.button_link}
                  className="flex justify-start items-center gap-2 px-2 py-2 text-black rounded cursor-pointer font-semibold text-xl"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {section?.button_text}
                  </p>

                  <AiOutlineArrowRight size={20} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageVpsAdvantagesComponent;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll, motion } from "framer-motion";
// import Image from "next/image";

// export default function ManageVpsAdvantagesComponent({ AdvantagesData }: any) {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef<any>(null);
//   const { scrollYProgress } = useScroll({
//     container: ref,
//     offset: ["start start", "end start"],
//   });
//   const cardLength = AdvantagesData?.content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = AdvantagesData?.content.map(
//       (_: any, index: number) => index / cardLength
//     );
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc: string | number, breakpoint: number, index: any) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <div className="bg-slate-100">
//       <div className="flex flex-col items-center text-bullt-primary">
//         {AdvantagesData?.heading ? (
//           <div
//             className="w-full text-center sm:text-4xl text-2xl font-semibold text-bullt-primary"
//             dangerouslySetInnerHTML={{ __html: AdvantagesData?.heading }}
//           />
//         ) : null}
//         {AdvantagesData?.description ? (
//           <div
//             className="w-full text-center text-bullt-primary/[0.8] text-lg py-4"
//             dangerouslySetInnerHTML={{ __html: AdvantagesData?.description }}
//           />
//         ) : null}
//       </div>
//       <motion.div
//         className="h-[30rem]  overflow-y-auto relative rounded-md p-10 grid lg:grid-cols-2 grid-cols-1 text-bullt-primary"
//         ref={ref}
//       >
//         <div className="block lg:hidden h-80 w-full sticky top-10 overflow-hidden">
//           <div className="relative w-full h-[450px]">
//             {AdvantagesData?.content[activeCard]?.image && (
//               <Image
//                 src={`${process.env.NEXT_PUBLIC_BASE_URL}${AdvantagesData?.content[activeCard]?.image}`}
//                 alt={AdvantagesData?.content[activeCard]?.heading}
//                 style={{
//                   position: "absolute",
//                   objectFit: "cover",
//                   inset: 0,
//                 }}
//                 fill={true}
//                 className="rounded-lg"
//               />
//             )}
//           </div>
//         </div>
//         <div className="relative flex items-start px-4">
//           <div className="w-full">
//             {AdvantagesData?.content?.map((item: any, index: number) => (
//               <div key={item.title + index} className="my-20">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                   className="text-2xl font-bold "
//                   dangerouslySetInnerHTML={{ __html: item.heading }}
//                 ></motion.div>
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                   className="text-lg"
//                   dangerouslySetInnerHTML={{ __html: item.description }}
//                 ></motion.div>
//               </div>
//             ))}
//             <div className="h-40" />
//           </div>
//         </div>
//         <div className="hidden lg:block h-80 w-full sticky top-10 overflow-hidden">
//           <div className="relative w-full h-[450px]">
//             {AdvantagesData?.content[activeCard]?.image && (
//               <Image
//                 src={`${process.env.NEXT_PUBLIC_BASE_URL}${AdvantagesData?.content[activeCard]?.image}`}
//                 alt={AdvantagesData?.content[activeCard]?.heading}
//                 style={{
//                   position: "absolute",
//                   objectFit: "cover",
//                   inset: 0,
//                 }}
//                 fill={true}
//                 className="rounded-lg"
//               />
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
