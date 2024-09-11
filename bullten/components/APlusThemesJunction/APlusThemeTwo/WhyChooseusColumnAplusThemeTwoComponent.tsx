"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/whychoose.jpg";
import { motion } from "framer-motion";

interface Props {
  columnData: any;
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
      className="relative flex flex-col gap-3 p-4 border-[1px] border-bullt-secondary/[0.2] rounded-md bg-bullt-quaternary/[0.05] hover:shadow-sm"
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

const WhyChooseusColumnAplusThemeTwoComponent: React.FC<Props> = ({
  columnData,
}) => {
  return (
    <div
      className="relative md:py-8 py-4 px-2 lg:px-8 shadow-sm  bg-center bg-no-repeat bg-cover bg-[url('/shape-18.png')]"
      style={{
        marginTop: `${columnData?.gap_top / 4}rem`,
        marginBottom: `${columnData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="relative container mx-auto flex flex-col sm:gap-4 md:flex-row ">
        <div
          className="md:w-[40%] w-full flex flex-col justify-center items-center px-4 sm:px-10 md:h-[510px] h-full sm:py-0 py-4 text-center sm:text-start"
          style={{
            // backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          {columnData?.heading ? (
            <>
              <div
                className="w-full items-start text-bullt-secondary font-semibold sm:text-4xl text-2xl tailwind-unreset"
                dangerouslySetInnerHTML={{ __html: columnData?.heading }}
              ></div>
            </>
          ) : null}
          {columnData?.description ? (
            <>
              <div
                className="items-start tailwind-unrested py-3 sm:text-xl text-bullt-secondary"
                dangerouslySetInnerHTML={{ __html: columnData?.description }}
              ></div>
            </>
          ) : null}
        </div>
        {columnData?.content?.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2 md:w-[60%] w-full px-4 py-4">
            {columnData?.content?.map((item: any, index: number) => (
              <CardWithEffect key={index}>
                {item?.image && (
                  <div className="relative bg-black border-2 border-white/70 rounded-xl flex items-center justify-center h-16 w-16 p-4 overflow-hidden ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt={item?.heading}
                      style={{
                        position: "absolute",
                        objectFit: "cover",
                        inset: 0,
                      }}
                      fill={true}
                      className="filter invert p-3 brightness-0"
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
                <div
                  className="text-xl font-semibold mb-2 text-bullt-secondary"
                  dangerouslySetInnerHTML={{ __html: item?.heading }}
                ></div>
                <div
                  className="w-full text-lg -mt-2 text-bullt-secondary"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
                {item?.button_text && (
                  <Link href={item?.button_link} passHref>
                    <div className="mt-auto  font-semibold">
                      {item?.button_text}
                    </div>
                  </Link>
                )}
                //{" "}
              </CardWithEffect>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyChooseusColumnAplusThemeTwoComponent;
