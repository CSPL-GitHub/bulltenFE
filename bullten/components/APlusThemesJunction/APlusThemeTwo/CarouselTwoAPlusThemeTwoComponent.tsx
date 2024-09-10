"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SliderFrame from "@/components/ClientSideComponents/SliderComponents/SliderFrame";
import * as DOMPurify from "dompurify";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
  carouselData: any;
}
const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/Amazon_icon.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/Apple_logo_black.svg_seeetv.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800359/WISE.L-b3d3de3c_rexehe.png",
];

// const LogoBeam = () => {
//   return (
//     <div className="flex items-center justify-center min-h-52">
//       <div className="relative flex items-center">
//         <div className="bg-[#000] border border-white/30  rounded-2xl flex items-center justify-center w-14 h-14 p-4">
//           <img
//             src={logos[0]}
//             alt="Logo 1"
//             className="filter invert brightness-0"
//           />
//         </div>
//         <div
//           className="relative"
//           style={{
//             width: `${lineWidth}px`,
//             height: `${lineHeight}px`,
//             backgroundColor: "#FFFFFF",
//             overflow: "hidden",
//           }}
//         >
//           <motion.div
//             className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
//             initial={{ x: "-40px" }}
//             animate={{ x: `calc(${lineWidth}px + 40px)` }}
//             transition={{
//               repeat: Infinity,
//               duration: 0.5,
//               repeatDelay: 2.5,
//               ease: "linear",
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
//         <div
//           className="relative"
//           style={{
//             width: `${lineWidth}px`,
//             height: `${lineHeight}px`,
//             backgroundColor: "#FFFFFF",
//             overflow: "hidden",
//           }}
//         >
//           <motion.div
//             className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
//             initial={{ x: "40px" }}
//             animate={{ x: `calc(-${lineWidth}px - 40px)` }}
//             transition={{
//               repeat: Infinity,
//               duration: 0.5,
//               repeatDelay: 3.5,
//               ease: "linear",
//             }}
//             style={{ willChange: "transform" }}
//           />
//         </div>
//         <div className="bg-black border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
//           <img
//             src={logos[2]}
//             alt="Logo 3"
//             className="filter invert brightness-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

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
    <div className="bg-bullt-primary flex flex-col justify-center items-center rounded-lg lg:py-20 py-8 max-w-7xl mx-auto ">
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
              <div className="flex flex-col justify-center min-h-[300px]">
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
                      className="w-full tailwind-unreset text-md text-bullt-secondary"
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
