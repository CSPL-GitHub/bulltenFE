"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import * as DOMPurify from "dompurify";
import Image from "next/image";

interface Props {
  carouselData: any;
}

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 mx-2 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10, // Ensure the effect is on top
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};

// const AWSIcon = () => {
//   return (
//     <div className="flex flex-col justify-center h-full items-center relative">
//       <div className="flex flex-row gap-8 justify-center h-full items-center relative">
//         <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
//           <img
//             src={logos[0]}
//             alt="Logo 2"
//             className="filter invert brightness-0"
//           />
//           <motion.div
//             className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{
//               duration: 2,
//               ease: "linear",
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             style={{ willChange: "transform" }}
//           />
//         </div>
//         <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
//           <img
//             src={logos[1]}
//             alt="Logo 2"
//             className="filter invert brightness-0"
//           />
//           <motion.div
//             className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{
//               duration: 2,
//               ease: "linear",
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             style={{ willChange: "transform" }}
//           />
//         </div>
//         <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
//           <img
//             src={logos[2]}
//             alt="Logo 2"
//             className="filter invert brightness-0"
//           />
//           <motion.div
//             className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
//             initial={{ x: "-100%" }}
//             animate={{ x: "100%" }}
//             transition={{
//               duration: 2,
//               ease: "linear",
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             style={{ willChange: "transform" }}
//           />
//         </div>
//       </div>

//       <div className="text-left p-6 mt-4">
//         <h1 className="text-white text-2xl font-bold mb-2">AWS Integration</h1>
//         <p className="text-gray-400 text-lg">
//           integrate AWS and use seamlessly with us.
//         </p>
//       </div>
//     </div>
//   );
// };

const CarouselTwoAPlusComponent: React.FC<Props> = ({ carouselData }) => {
  const [infinite, setInfinite] = useState<boolean>();

  useEffect(() => {
    if (carouselData?.content?.length === 1) {
      setInfinite(false);
    } else {
      setInfinite(true);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: infinite,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow:
      carouselData?.content?.length >= carouselData?.element_count
        ? carouselData?.element_count
          ? carouselData?.element_count
          : 1
        : carouselData?.content?.length,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            carouselData?.content?.length >= carouselData?.element_count
              ? carouselData?.element_count < 2
                ? carouselData?.element_count
                  ? carouselData?.element_count
                  : 1
                : 2
              : carouselData?.content?.length < 2
              ? carouselData?.element_count
              : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-bullt-primary flex flex-col justify-center items-center rounded-lg lg:px-14 px-2 lg:py-20 py-8 mx-auto ">
      <div className="w-full flex flex-col justify-center p-4 sm:p-5">
        {carouselData?.heading ? (
          <>
            <div
              className="w-full py-2 text-center text-2xl sm:text-4xl font-bold text-bullt-secondary tailwind-unreset"
              dangerouslySetInnerHTML={{
                __html: carouselData?.heading,
              }}
            />{" "}
          </>
        ) : null}
        {carouselData?.description ? (
          <div
            className="w-full text-center text-bullt-secondary text-lg"
            dangerouslySetInnerHTML={{ __html: carouselData?.description }}
          />
        ) : null}
      </div>
      <div className="flex flex-col w-full h-full lg:px-4 px-10">
        <SliderFrame settings={settings} selector={undefined}>
          {carouselData?.content?.map((item: any, index: number) => (
            <CardWithEffect key={index}>
              <div className="flex flex-col justify-center gap-4 px-4 min-h-[300px]">
                {item?.image && (
                  <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt="Logo"
                      className="filter invert brightness-0"
                    />
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      style={{ willChange: "transform" }}
                    />
                  </div>
                )}
                {item?.heading || item?.description ? (
                  <>
                    <div
                      className="w-full text-xl font-semibold tailwind-unreset py-2 line-clamp-2 text-bullt-secondary"
                      dangerouslySetInnerHTML={{
                        __html: item?.heading,
                      }}
                    />
                    <div
                      className="w-full tailwind-unreset text-md text-bullt-secondary -mt-4"
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    />
                  </>
                ) : null}
              </div>
            </CardWithEffect>
          ))}
        </SliderFrame>
      </div>
    </div>
  );
};

export default CarouselTwoAPlusComponent;
