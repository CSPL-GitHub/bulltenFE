"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { Banner } from '@/types/BannerTypes';
import SloganHeadingComponent from '@/components/CommonComponents/HeadingComponents/SloganHeadingComponent';
import MainHeadingComponent from '@/components/CommonComponents/HeadingComponents/MainHeadingComponent';
import ParaGraphText from '@/components/CommonComponents/HeadingComponents/ParaGraphText';
import Link from 'next/link';

type Props = {
    banner: Banner;
}

const FinalBannerComponent = ({ banner }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Define the flip animation
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
            className="relative sm:max-h-[550px] sm:min-h-[550px] min-h-[500px] max-h-[550px] overflow-hidden flex items-center justify-center "
            style={{ background: `url(/banner-pt1.png)` }}
        >
            <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
            {/* Background triangles */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                whileHover={{ scale: 1.01, x: -10 }}
                className="absolute top-0 left-0 w-full h-full ">
                <div className={`absolute transform -translate-y-1/2 translate-x-1/2 sm:w-[300px] lg:w-[550px] w-[150px] lg:h-[450px] sm:h-[400px] h-[150px] bg-bullt-quaternary rotate-45 z-10 ${banner?.image_position === "Right" ? "sm:right-[30%] right-[70%] sm:-top-20 -top-10" : "sm:right-[75%] right-[30%] sm:-top-20 -top-10"}`}></div>
                <div className={`absolute sm:w-[500px] w-[100px] sm:h-[400px] h-[100px] bg-bullt-primary rotate-[315deg] ${banner?.image_position === "Right" ? "lg:-left-80 -left-96 lg:-bottom-72 -bottom-80 " : "lg:-right-80 sm:-right-96 right-0 lg:-bottom-56 -bottom-60"}`}></div>
                <div className={`absolute sm:w-0 w-0 sm:h-0 h-0 border-t-[200px] border-t-transparent sm:border-b-[300px] border-b-[150px] border-b-bullt-primary sm:border-l-[300px] border-l-transparent border-l-[150px] sm:rotate-[45deg] rotate-[360deg] ${banner?.image_position === "Right" ? "sm:bottom-[40%] bottom-[0%] sm:left-[75%] left-[80%]" : "sm:bottom-[30%] bottom-[0%] sm:right-[70%] -right-[15%]"}`}></div>
            </motion.div>

            {/* Content */}
            <div className="relative sm:flex items-center container min-h-[500px] z-20 sm:pt-0 pt-16 sm:pb-0 pb-10">
                <div className={`flex-1 flex justify-center items-center h-[200px] ${banner?.image_position === "Left" ? "sm:flex hidden" : "hidden"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        whileHover={{ scale: 1.01, x: -10 }}
                        className="relative"
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
                            alt={banner?.alt_text || "Banner Image"}
                            width={450}
                            height={500}
                            className="object-cover pt-20"
                        />
                    </motion.div>
                </div>

                <div className="flex-1 text-left lg:pl-20 lg:px-0 sm:px-5 px-4">
                    {banner?.label && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            className="w-full flex justify-center sm:justify-start"
                        >
                            <h2 className="uppercase flex items-center text-5xl sm:text-[1.2rem] lg:text-7xl font-semibold text-bullt-primary sm:text-left text-center sm:pb-4 pb-5">
                                {banner?.label}
                            </h2>
                        </motion.div>
                    )}

                    {banner?.link && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            <p className="flex items-center sm:text-[1.2rem] text-base lg:text-[1.1rem] font-normal sm:text-left text-justify">
                                {banner?.link}
                            </p>
                        </motion.div>
                    )}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xl text-bold border-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-bullt-secondary text-bullt-secondary hover:text-bullt-tertiary rounded-sm px-14 py-4 flex sm:mx-0 mx-auto mt-5"
                    >
                        <Link href={banner?.button_link}>{banner?.button_text}</Link>
                    </motion.button>

                </div>
                <div className={`flex-1 flex justify-center items-center ${banner?.image_position === "Right" ? "sm:flex hidden" : "hidden"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        className="relative"
                    >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image_url}`}
                            alt={banner?.alt_text || "Banner Image"}
                            width={450}
                            height={600}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default FinalBannerComponent;
