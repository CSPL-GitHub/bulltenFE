"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Banner } from "@/types/BannerTypes";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Link from "next/link";

type Props = {
  banner: Banner;
};

const BannerWithImage = ({ banner }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  const flipAnimation = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      // animate={inView ? "visible" : "hidden"}
      // variants={flipAnimation}
      // transition={{ duration: 0.1, ease: "easeOut" }}
      className="relative sm:min-h-full min-h-[500px] sm:max-h-[550px] max-h-[500px]"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
      }
    >
      <div className="sm:min-h-[550px] min-h-[500px] flex items-center justify-center rounded-lg" style={{
        background: banner?.image_position === "Text_position"
          ? "linear-gradient(to right, white, rgba(72, 85, 99, 0.4))"
          : "linear-gradient(to left, white, rgba(72, 85, 99, 0.4))"
      }}>
        <div className="container mx-auto px-3 lg:px-16 flex flex-col sm:flex-row items-center justify-between relative z-10 py-3">

          <div className={`flex-col lg:gap-3  gap-2 mt-5 sm:mt-0 items-start justify-center lg:w-[50%] sm:w-[60%] w-full ${banner?.image_position === "Text_position" ? "flex" : "hidden"}`}>
            {banner?.label && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                className="w-full flex justify-center sm:justify-start"
              >
                <h2 className="flex items-center text-5xl sm:text-5xl lg:text-7xl font-semibold text-bullt-primary sm:text-left text-center">
                  {banner?.label}
                </h2>
              </motion.div>
            )}

            {banner?.link && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              >
                <p className="flex items-center sm:text-[1.2rem] text-base lg:text-[1.1rem] font-normal sm:text-left text-justify">
                  {banner?.link}
                </p>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-sm px-14 py-4 flex sm:mx-0 mx-auto mt-5"
            >
              <Link href={banner?.button_link}>{banner?.button_text}</Link>
            </motion.button>
          </div>

          <div className="relative sm:flex hidden items-center justify-center w-40 h-40 rounded-full bg-transparent border border-dashed border-bullt-tertiary">
            {/* {/ Central Logo /} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute flex items-center justify-center w-16 h-16 bg-bullt-tertiary rounded-full "
            >
              <GoArrowUpRight size={25} />
            </motion.div>

            {/* {/ Text around the circle /} */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
                      M 80, 80
                      m -60, 0
                      a 60,60 0 1,1 120,0
                      a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text
                className="text-bullt-tertiary"
                fontSize="15"
                fill="white"
                fontWeight="bold"
              >
                <textPath href="#circlePath" startOffset="0%" textLength="350">
                  Best Hosting Providers
                </textPath>
              </text>
            </svg>
          </div>

          <div className={`flex-col lg:gap-3  gap-2 mt-5 sm:mt-0 items-start justify-center md:w-[50%] sm:w-[60%] w-full ${banner?.image_position === "Text_position" ? "hidden" : "flex"}`}>
            {banner?.label && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="w-full flex justify-center sm:justify-start"
              >
                <h2 className="flex items-center text-5xl sm:text-5xl lg:text-7xl font-semibold text-bullt-primary sm:text-left text-center">
                  {banner?.label}
                </h2>
              </motion.div>
            )}

            {banner?.link && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              >
                <p className="flex items-center sm:text-[1.2rem] text-base lg:text-[1.1rem] font-normal sm:text-left text-justify">
                  {banner?.link}
                </p>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-sm px-14 py-4 flex sm:mx-0 mx-auto mt-5"
            >
              <Link href={banner?.button_link}>{banner?.button_text}</Link>
            </motion.button>
          </div>


        </div>
      </div>
    </motion.div>
  );
};

export default BannerWithImage;
