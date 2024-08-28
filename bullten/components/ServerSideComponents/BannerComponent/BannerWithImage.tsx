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

  return (
    <section
      ref={ref}
      className="relative"
      style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url})`,
        backgroundPosition: 'top center',
       }
    }
    >
      <div className="bg-bullt-primary/[0.4] min-h-[600px] flex items-center justify-center pt-[70px] rounded-lg">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between relative z-10 sm:pt-0 pt-14 py-3">
          <div className="relative sm:hidden flex items-center justify-center w-40 h-40 rounded-full bg-transparent border border-dashed border-bullt-tertiary">
            {/* {/ Central Logo /} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute flex items-center justify-center w-16 h-16 bg-bullt-tertiary rounded-full"
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

          <div className="flex flex-col lg:gap-7  gap-2 mt-5 sm:mt-0 items-start justify-center sm:w-[60%] w-full">
            {banner?.label && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <SloganHeadingComponent paddingTop={1} alignmentType={1}>
                  {banner?.label}
                </SloganHeadingComponent>
              </motion.div>
            )}

            {banner?.title && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <MainHeadingComponent
                  hoverEffect="leading-tight text-bullt-secondary"
                  paddingTop={1}
                >
                  {banner?.title}
                </MainHeadingComponent>
              </motion.div>
            )}

            {banner?.link && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <ParaGraphText hoverEffect="max-w-4xl text-bullt-secondary text-justify">
                  {banner?.link}
                </ParaGraphText>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-md px-10 py-3"
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
              className="absolute flex items-center justify-center w-16 h-16 bg-bullt-tertiary rounded-full"
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
        </div>
      </div>
    </section>
  );
};

export default BannerWithImage;
